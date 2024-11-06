import { useParams } from "react-router-dom"
import CollectionPreview from "./../../components/collection-preview/CollectionPreview"
import SHOP_DATA from "./../../data/shop"
import { useState } from "react";

const ShopPage = () => {
    const previewId = useParams()?.id;
    useState
    return (
        <div>
            {
                SHOP_DATA
                    .filter(item => !previewId ? true : String(previewId) === String(item.id))
                    .map(item =>
                    (
                        <CollectionPreview key={item.id} subItem={item} />
                    )
                    )
            }
        </div>
    )
}

export default ShopPage