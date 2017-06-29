'use strict';

const path = require('path');
const findUp = require('find-up');
const loadJsonFile = require('load-json-file');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const localManifest = path.resolve('package.json');
const pkg = loadJsonFile.sync(localManifest);

const rootBabelRc = findUp.sync('.babelrc');
const rc = loadJsonFile.sync(rootBabelRc);

const presetOptions = {
    modules: false,
    runtime: false,
};

// enable babel-plugin-transform-runtime when babel-runtime found in dependencies
if ('babel-runtime' in (pkg.dependencies || {})) {
    presetOptions.runtime = true;
    rc.runtimeHelpers = true;
}
// pass options to presets
if (rc.presets) {
    rc.presets = rc.presets.map((preset) => {
        let result;

        if (typeof preset === 'string') {
            if (['flow', 'react'].includes(preset)) {
                result = [preset];
            } else {
                result = [preset, presetOptions];
            }
        } else {
            const name = preset[0];
            const options = preset[1];
            result = [name, Object.assign({}, options, presetOptions)];
        }
        return result;
    });
} else {
    throw new Error('At least one options-accepting preset is required in .babelrc');
}

// add external-helpers if runtime is not enabled
if (!rc.runtimeHelpers) {
    if (!rc.plugins) {
        rc.plugins = ['external-helpers'];
    } else if (rc.plugins.indexOf('external-helpers') === -1) {
        rc.plugins = rc.plugins.concat('external-helpers');
    }
}

// rollup-specific babel config
rc.babelrc = false;
rc.exclude = 'node_modules/**';

const plugins = [
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    nodeResolve({
        preferBuiltins: true,
    }),
    // https://github.com/rollup/rollup-plugin-babel#configuring-babel
    babel(rc),
    commonjs(),
];

const extDeps = Object.keys(pkg.dependencies || {})
    .concat(Object.keys(pkg.peerDependencies || {}));

// stop whining about node built-ins, rollup
extDeps.push('url', 'querystring');

// ensure subpath imports (lodash, babel-runtime) are also externalized
const external = importee => (
    // always ignore relative imports
    importee[0] !== '.' &&
    extDeps.some(depName => (
        // exact match
        importee === depName ||
        // subpath imports always begin with module name
        importee.indexOf(depName) === 0
    ))
);

const targets = [{
    dest: pkg.main,
    format: 'cjs',
    sourceMap: true,
}];

if (pkg.module) {
    targets.push({
        dest: pkg.module,
        format: 'es',
        sourceMap: true,
    });
}

module.exports = {
    plugins,
    external,
    targets,
};
