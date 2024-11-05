import "./collection-item.scss"

const CollectionItem = (props) => {
    const product = props.product;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${product.imageUrl})` }} ></div>
            <div className='collection-footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
                <button className='custom-button'>Add to cart</button>
            </div>
        </div>
    )
}

export default CollectionItem