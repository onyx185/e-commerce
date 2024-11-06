import MenuItem from "../../components/menu-item/MenuItem";
import "./home-page.style.css"
import { productCategories as products } from "./../../data/products-categories"

const HomePage = () => {
    
    const productCategories = products.sections;
    return (
        <div className="home-page">
            <h1>
                Welcome to my Home Page
            </h1>
            <div className="directory-menu">
                {
                    productCategories.map((item) =>
                        <MenuItem key={item.id} category={item} />)
                }
            </div>
        </div>
    )
}

export default HomePage;