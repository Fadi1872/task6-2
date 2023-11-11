import React from 'react'

const FullScreenSection = ({img, title, subTitle, button}) => {
    return (
        <section className="vh-100 text-white text-center d-flex justify-content-center align-items-center flex-column fixedBackimg" style={{ '--fixed-img': `url(${img})` }}>
            <p>{title}</p>
            <h1 className="mb-3">{subTitle}</h1>
            {button && <button className="btnBlack text-dark text-uppercase bg-white transition-5 fs-3 py-2 px-5 rounded-5">
                Buy now
            </button>}
        </section>
    )
}

export default FullScreenSection