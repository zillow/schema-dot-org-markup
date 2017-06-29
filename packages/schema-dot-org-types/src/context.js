//@flow

import objectAssign from 'object-assign';

export const DEFAULT_CONTEXT = "http://schema.org";
export type ContextType = {};

export class Context {
    constructor(props: any) {
        if (!this.getType) {
            throw new TypeError('Subclass must implement the <getType> method');
        }
    }

    toJSON() {
        return objectAssign({},
            {
                "@type": this.getType(),
                "@context": DEFAULT_CONTEXT
            },
            this);
     }

     getType(): string {
        throw new Error('Attempted to call abstract method <getType>');
     }
}
