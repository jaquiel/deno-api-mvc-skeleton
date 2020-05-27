import { Router} from 'https://deno.land/x/oak@v4.0.0/mod.ts'
import { index, show } from './controllers/ProductController.ts'

const router = new Router()

router.get('/', (context) => {
    context.response.body = 'Hello Deno.'
})
      .get('/api', (context) => {
    context.response.body = 'Deno is out!'
})
    .get('/api/fruits', index )
    
    .get('/api/fruits/:id', show )


export default router