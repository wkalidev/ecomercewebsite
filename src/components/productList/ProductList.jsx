import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
              <h1 className="pl-title">Create & inspire. It's Bellissimo</h1>
              <p className="pl-desc">
               Bellissimo is a creative portofolio tha your work has been waiting.
               Beautiful homes, stunning portofolio styles & a whole lot more awaits inside.
             </p>  
            </div>
            <div className="pl-list">
                {products.map(item=>(
                   <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList