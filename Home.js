import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
        <div className='home__container'>
            <img
            className='home__image'
            src="https://connect-assets.prosple.com/cdn/ff/3UVJ1GrRQln_OqzTdYq_8JbYmNY-pDZDNO4lW5M62Kg/1578558221/public/styles/scale_and_crop_center_890x320/public/2020-01/Banner-Amazon-893x321-2020.jpg?itok=Wn-QOqJ4"
            alt="img"
            />
            <div className='home__row'>
                <Product 
                    id='12121'
                    title='The lean startup'
                    price={2999}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapgROgcC0_rMBpub21Q92vbn6MnsQCjFUFw&usqp=CAU"
                    rating={2}
                />
                <Product
                    id='131313'
                    title='Logitech C615 Fold-and-Go HD Webcam , 1080p Video '
                    price={2500}
                    image="https://assets.logitech.com/assets/65481/11/c615-portable-hd-webcam-refresh.png"
                    rating={4}
                />
                
            </div>
            <div className='home__row'>
                <Product
                    id='1414141'
                    title='HD CCTV Camera'
                    price={1000}
                    image="https://5.imimg.com/data5/NT/CU/JO/SELLER-93488626/hd-cctv-camera-250x250.jpg"
                    rating={3}
                />
                <Product
                id='161616'
                    title='Panasonic NI-V100N 1000-1200 Watt Steam '
                    price={1300}
                    image="https://www.mangalandmangal.com/stores/img/dorthumbs/product/250x250/2377_6052_1_philips-hi114-1000-watt-dry-iron-box-white.jpg"
                    rating={4}
                />
                <Product
                id='171717'
                    title='New Apple iPhone 12 Mini (64GB) - Blue'
                    price={79900}
                    image="https://images-na.ssl-images-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg"
                    rating={4}
                />
            </div>
            <div className='home__row'>
                <Product
                id='191919'
                    title='Apple IPad Pro (12.9 Inch, WiFi, 256GB) - Space Grey'
                    price={55000}
                    image="https://s1.poorvikamobile.com/image/data/AAAAA/Apple/AAA%20IPAD/New/iPad%20Pro%2011%20inch%20-%202020/Apple%20IPad%20Pro%2012.9%20Inch,%20WiFi%20(4th%20Generation)/Space%20Grey/Apple-IPad-Pro-12-9-Inch-WiFi-Space-Grey-4th-Generation-4_ios.jpeg"
                    rating={4}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
