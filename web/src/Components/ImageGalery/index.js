import React, { useState } from 'react'

import jai from './jai.jpg'

import './style.css'

export default function ImageGalery(props) {
    const [id] = useState(props.donationId)
    const [mainImage, setMainImage] = useState(jai)

    return (
        <div className='galery'>
            <div className="main-image">
                <img src={mainImage} alt="" />
            </div>
            <ul className="carousel">
                <li>
                    <input type="image" src="https://picsum.photos/300/200" alt="" onClick={() => setMainImage('https://picsum.photos/300/200')} />
                </li>
                <li>
                    <input type="image" src="https://picsum.photos/300/300" alt="" onClick={() => setMainImage('https://picsum.photos/300/300')} />
                </li>
                <li>
                    <input type="image" src="https://picsum.photos/200/300" alt="" onClick={() => setMainImage('https://picsum.photos/200/300')} />
                </li>
                <li>
                <input type="image" src="https://picsum.photos/300/300" alt="" onClick={() => setMainImage('https://picsum.photos/300/300')} />
                </li>
                <li>
                    <input type="image" src="https://picsum.photos/300/200" alt="" onClick={() => setMainImage('https://picsum.photos/300/200')} />
                </li>
            </ul>
        </div>
    )
}