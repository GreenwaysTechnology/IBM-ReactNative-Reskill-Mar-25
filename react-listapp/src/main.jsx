import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PRODUCTS } from './mock-data/products'
import './index.css'

const ProductDetails = props => {
    const { products } = props
    return <div>
        {
            products.map(product => {
                return <section key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} height={150} width={150} />
                    <h5>Category: {product.category} Price : $ {product.price}</h5>
                    <p>{product.description} </p>
                    <h3>Rating : {product.rating.rate} Total {product.rating.count}</h3>
                    <hr/>
                </section>
            })
        }

    </div>
}

const App = () => {
    return <ProductDetails products={PRODUCTS} />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
