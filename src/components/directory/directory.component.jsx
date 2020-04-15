import React, {useState} from 'react'
// import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component.jsx'

const Directory = () => {
    const [sections, setSections] = useState([
        {
        title: 'Hats',
        imageUrl: require('../../assests/images/hats.jpg'),
        id: 1
        },
        {
            title: 'Bags',
            imageUrl:require('../../assests/images/bags.jpg'),
            id: 2
        },
        {
            title: 'sneakers',
            imageUrl: require('../../assests/images/sneakers.jpg'),
            id: 3
        },
        {
            title: 'womens',
            imageUrl: require('../../assests/images/womens.jpg'),
            id: 4,
            size: 'large'
        },
        {
            title: 'mens',
            imageUrl: require('../../assests/images/mens.jpg'),
            id: 5,
            size: 'large'
        },
        {
            title: 'accessories',
            imageUrl: require('../../assests/images/accessories.jpg'),
            id: 6,
            size: 'large'
        }
    ])
    return (
        <section className='directory-menu flex flex-wrap -mb-4 justify-around'>
            { sections.map(({title, id, imageUrl, size}) => (
                <MenuItem key={ id } title={ title } imageUrl={ imageUrl } size={ size}/>
            ))}
              
      </section>
    )
}

export default Directory
