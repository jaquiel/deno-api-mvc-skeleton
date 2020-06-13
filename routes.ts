import { Router} from 'https://deno.land/x/oak@v4.0.0/mod.ts'
import { getAllProducts, getProductById } from './controllers/ProductController.ts'

const router = new Router()

router

    .get('/', (context) => {
    context.response.body = 'Hello Deno.'
})

    .get('/api', (context) => {
    context.response.body = 'Deno is out!'
})
    
    .get('/api/products', getAllProducts )
    
    .get('/api/products/:id', getProductById )


export default router