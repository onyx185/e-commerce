import "./collection-item.scss"
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = (props) => {
    const product = props.product;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${product.imageUrl})` }} ></div>
            <div className='collection-footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
                <CustomButton className="custom-button">Add to cart</CustomButton>
            </div>
        </div>
    )
}

export default CollectionItem