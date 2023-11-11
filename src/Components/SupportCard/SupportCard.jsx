import './SupportCard.css'

const SupportCard = ({ img, topTitle, title, subTitle, number }) => {
    return (
        <div className='border rounded-4 d-flex flex-lg-row flex-md-column flex-row p-4 my-4'>
            <div className='p-2'>
                <img src={img} alt="phone" className='width-70px' />
            </div>
            <div className='position-relative flex-grow-1'>
                <p className="mb-1 letterSpacing">{topTitle}</p>
                <h4>{title}</h4>
                <p className="opacity-75 mb-0">{subTitle}</p>
                <p className="opacity-75">{number}</p>
                <button className="btnBlack text-white text-uppercase bg-black transition-5 fs-5 py-2 px-5 px-md-3 px-lg-5 rounded-5 position-absolute top-100 start-0 ">
                    shop now
                </button>
            </div>
        </div>
    )
}

export default SupportCard