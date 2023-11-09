import TypeMapping from "./TypeMapper";

class SchemaMapperEngine {
    TypeMapping: object;

    constructor() {
        this.TypeMapping = TypeMapping;
    }

    mapSchema(jsonSchema: {[key: string]: any}) {
        const mappedSchema: {[key: string]: any} = {}; 
        for (const key in jsonSchema) {
            if (jsonSchema.hasOwnProperty(key)) {
                const element = jsonSchema[key];
                if (typeof element === 'string') {
                    mappedSchema[key] = this.mapSchemaElement(element);
                    continue;
                }
                if (typeof element === 'object') {
                    // check if element is an array
                    if (Array.isArray(element)) {
                        mappedSchema[key] = this.arrayMapSchema(element);
                        continue;
                    }

                    // check if element is an object
                    mappedSchema[key] = this.mapSchema(element);
                    continue;
                }
            }
        }
        return mappedSchema;
    }

    private arrayMapSchema(jsonSchema: {[key: string]: any}) {
        // run this function if jsonSchema is an array not an object
        const mappedSchema: {[key: string]: any} = []; 
        jsonSchema.forEach((element: {[key: string]: any}) => {
            if (typeof element === 'string') {
                mappedSchema.push(this.mapSchemaElement(element));
                return;
            }
            if (typeof element === 'object') {
                // check if element is an array
                if (Array.isArray(element)) {
                    mappedSchema.push(this.arrayMapSchema(element));
                    return;
                }

                // check if element is an object
                mappedSchema.push(this.mapSchema(element));
                return;
            }
        });
        return mappedSchema;
    }

    private mapSchemaElement(element: any) {
        // implementation of mapSchemaElement
        if (typeof element === 'string' && this.TypeMapping.hasOwnProperty(element)) {
            const typeMapping = this.TypeMapping as {[key: string]: string};
            return typeMapping[element];
        }
    }
}

export default SchemaMapperEngine;