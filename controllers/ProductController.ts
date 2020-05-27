import { Product } from '../models/Product.ts'

let products: Product[] = [
    {
        id: "1",
        name: "Coca-Cola",
        price: 3.99,        
    },
    {
        id: "2",
        name: "Grarana Fruki",
        price: 1.99,  
    },
    {
        id: "3",
        name: "Pepsi",
        price:  2.99,   
    }
];

const index = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    }
}

const show = ({ params, response }: { params: { id: string }, response: any }) => {
    
    const product: Product | undefined = products.find(p => p.id === params.id)

    if (product) {
        response.status = 200
        response.body = {
            success: true,
            data: product
        }
    }
}

export { index, show }