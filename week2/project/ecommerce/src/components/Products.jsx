import { useContext } from "react";
import { provideContext } from '../hooks/context'
import Product from './Product'
import Loading from "./Loading";
import Error from "./Error";


function Products() {

  const {products , isLoading , error} = useContext(provideContext)

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
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