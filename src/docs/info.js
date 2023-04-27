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
                url: 'http://localhost:3001'
            },
            { 
                url: 'http://aws.challenge.com'
            }
        ]
    },
    apis: ['./src/docs/*.yml']
}