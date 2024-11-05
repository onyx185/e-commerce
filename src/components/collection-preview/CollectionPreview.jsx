import "./collection-preview.scss"
import CollectionItem from "./../../components/collection-item/CollectionItem"

const CollectionPreview = (props) => {
    return (
        <div className="collection-preview">
            <h1>{props.subItem.title}</h1>
            <div className="preview">
                {
                    props.subItem.items.slice(0, 4).map((item) => (
                        <CollectionItem key={item.id} product={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview