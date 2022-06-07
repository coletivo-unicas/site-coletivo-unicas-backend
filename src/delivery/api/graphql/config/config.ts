const envPort = process.env.PORT
let PORT = 3000

if (envPort) {
    PORT = parseInt(envPort, 10) 
}

export {
    PORT
}
