export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: '42i Tech Challenge: Locations',
            version: '1.0.0',
            description: 'Documentación del challenge realizado, Api REST Node.js'
        },
        servers: [
            { 
                url: 'http://localhost:3000'
            },
            { 
                url: 'http://ec2-44-211-74-174.compute-1.amazonaws.com:3000'
            }
        ]
    },
    apis: ['./src/docs/*.yml']
}