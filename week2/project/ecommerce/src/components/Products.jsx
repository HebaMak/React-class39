import { useContext } from "react";
import { provideContext } from '../hooks/context'
import Product from './Product'
import Loading from "./Loading";


function Products() {

  const {products , isLoading , error} = useContext(provideContext)

  return (
    <>
      {isLoading && <Loading />}
      {error &&   <h1>Error in loading products</h1>}
      {
        products &&
        <div className='products_container'>
        {
          products.map((product) => (
            <Product key={product.id} product={product}/> 
            ))
        }
      </div>
      }
    </>
  )
}

export default Products