schema-dot-org-types
====================
>JS class package representing [Schema.org](http://schema.org) types.
  
This is an unofficial attempt at assembling the Schema.org types into a light-weight 
JavaScript package that faciliates creating proper instances of schema markup with the
support of [flow type annotations](http://flowtype.org/).

Usage
-----
Classes are exported via the index. Flow types are exported via `lib/types`.

The files are transpiled and should be compatible with modern browsers. The immediate
goal is for them to be used in React apps and packaged for the browser with webpack
by the consuming application.

```
npm install schema-dot-org-types
```

```
//@flow
import {VideoObject} from 'schema-dot-org-types';
import type {VideoObjectType} from 'schema-dot-org-types/lib/types';

```

Adding Types
------------
The schema.org types contained in the `src/generated` folder were created using the 
`transform-schema` script in the tools folder. You can add files for any additional types by 
invoking
```
npm run transform-schema -- <SchemaType>
```
At present, it's necessary to edit the types.js and index.js files to add the desired types
once the class files are generated.