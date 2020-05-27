import { Application } from 'https://deno.land/x/oak@v4.0.0/mod.ts'
import router from './routes.ts'

const PORT = 9876
const HOST = 'localhost'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods()) 

const HOST_PORT = `${HOST}:${PORT}`

console.log(`Listen on ${HOST_PORT}`)

app.listen(HOST_PORT)
