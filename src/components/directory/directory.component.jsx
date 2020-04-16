import React, {useState} from 'react'
// import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component.jsx'

const Directory = () => {
    const [sections, setSections] = useState([
        {
        title: 'Hats',
        imageUrl: require('../../assests/images/hats.jpg'),
            id: 1,
        linkUrl: 'hats'
        },
        {
            title: 'Bags',
            imageUrl:require('../../assests/images/bags.jpg'),
            id: 2,
            linkUrl: 'hats'
        },
        {
            title: 'sneakers',
            imageUrl: require('../../assests/images/sneakers.jpg'),
            id: 3,
            linkUrl: 'hats'
        },
        {
            title: 'womens',
            imageUrl: require('../../assests/images/womens.jpg'),
            id: 4,
            linkUrl: 'hats'
        },
        {
            title: 'mens',
            imageUrl: require('../../assests/images/mens.jpg'),
            id: 5,
            linkUrl: 'hats'
        },
        {
            title: 'accessories',
            imageUrl: require('../../assests/images/accessories.jpg'),
            id: 6,
            linkUrl: 'hats'
        }
    ])
    return (
        <section className='directory-menu flex flex-wrap -mb-4 justify-center pt-20 px-5'>
            { sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={ id }{...otherSectionProps}/>
            ))}
              
      </section>
    )
}

export default Directory
