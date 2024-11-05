import CollectionPreview from "./../../components/collection-preview/CollectionPreview"
import SHOP_DATA from "./../../data/shop"

const ShopPage = () => {
    return (
        <div>
            {
                SHOP_DATA.map(item =>
                (
                    <CollectionPreview key={item.id} subItem={item}/>
                )
                )
            }
        </div>
    )
}

export default ShopPage