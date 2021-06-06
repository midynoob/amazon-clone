import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className='home' >
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="" />
                <div className="home__row">
                    <Product title='ASUS ROG Zephyrus G14 (2021), 14" WQHD 120Hz, Ryzen 9 5900HS, GeForce RTX 3060 6GB Graphics, Gaming Laptop (32GB/1TB SSD/Office 2019/Windows 10/Moonlight White/Anime Matrix /1.7 kg), GA401QM-K2144TS' id="1" price={9999.99} image="https://images-na.ssl-images-amazon.com/images/I/81Nwu5Hp0jS._SL1500_.jpg" rating={4} />
                    <Product title='New Apple iPhone 12 (128GB) A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes' id="2" price={43.99} image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg" rating={4} />
                    <Product title='Infinity Glide 500 by Harman (JBL, HK, Infinity), 20 Hrs Playtime with Quick Charge, Wireless On Ear Headphone with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0 with Voice Assistant Support (Black) ' id="3" price={12.99} image="https://images-na.ssl-images-amazon.com/images/I/71CM0FCo3BL._SL1500_.jpg" rating={4} />
                    {/* Product */}
                    
                </div>
                <div className="home__row">
                <Product title='PHILIPS Brilliance 499P9H1/75 49-inch Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam with Windows Hello' id="4" price={432.99} image="https://images-na.ssl-images-amazon.com/images/I/51FMDZD57yL._SL1181_.jpg" rating={4} />
                <Product title='LG 23.8 inch Borderless LED Monitor - Full HD, IPS Panel with VGA, HDMI, Audio in/Out Ports and in-Built Speakers - 24MP88HV (Silver/White) ' id="5" price={12346.99} image="https://images-na.ssl-images-amazon.com/images/I/81rpK20lAtL._SL1500_.jpg" rating={4} />
                    {/* Product */}
                    {/* Product */}
                </div>
                <div className="home__row">
                <Product title='Canon Power Shot G7X Mark II 20.1 MP Digital Vlogging Camera (Black) with 1-inch CMOS Sensor and 4.2X Optical Zoom ' id="6" price={234.99} image="https://images-na.ssl-images-amazon.com/images/I/71ef4iykr5L._SL1500_.jpg" rating={4} />
                <Product title='Shure SM7B Cardioid Vocal Dynamic Microphone ' id="7" price={999.99} image="https://images-na.ssl-images-amazon.com/images/I/71PH62bLm8L._SL1364_.jpg" rating={4} />
                <Product title='Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) ' id="8" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg" rating={4} />
                    {/* Product */}
                </div>
            </div>            
        </div>
    )
}

export default Home;
