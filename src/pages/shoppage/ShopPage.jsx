import React, {useState} from 'react'

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA)
    return (
        <section >
             {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        </section>
    )
}

export default ShopPage
