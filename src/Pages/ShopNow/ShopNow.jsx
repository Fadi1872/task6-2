import React from 'react'
import FullScreenSection from '../../sections/Home/FullScreenSection/FullScreenSection'
import backGroundImg from './../../assets/appleNewLogo.webp'
import Products from '../../sections/ShopNow/Products/Products'

const ShopNow = () => {
    return (
        <>
            <FullScreenSection img={backGroundImg} title='JENNIFER F., CASPER CUSTOMER' subTitle='"Unbeatable price, and it’s super comfortable"' button />
            <Products />
        </>
    )
}

export default ShopNow