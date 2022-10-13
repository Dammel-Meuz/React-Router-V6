import{useParams,Link} from 'react-router-dom'
import products from "../data"

function   SingleProduct() {
   const param=useParams()
   const product=products.find((product) => product.id === param.productId)
   const {name, image}=product

  return (

    <section className='section'>
      <img src={image} className='img-responsive img-centered' />
    <h1>{name}</h1>
    <Link to="/products" className="btn">Back Product</Link>
  </section>
   
  )
}

export default   SingleProduct
