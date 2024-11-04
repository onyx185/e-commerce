import MenuItem from "../components/MenuItem";
import "./home-page.style.css"

const HomePage = (props) => {
    const productCategories = props.productCategories;
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