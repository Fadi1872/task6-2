import './ArrivalesCard.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ArrivalesCard = ({ img, title, price, rate, stock, discount }) => {
  return (
    <div className="mx-2  border cardHover position-relative transition-5 d-flex flex-column h-100">
      {
        (discount)
          ? <div className='discountSquare position-absolute shadow rounded-pill top-0 left-0 bg-dark text-white d-flex flex-column justify-content-center align-items-center'>
            <p className='mb-0'>{discount}%</p>
            <p className='mb-0'>OFF</p>
          </div>
          : null
      }
      <div className='aspect-ratio BackImg' style={{ '--img-url': `url(${img})`, '--position': 'center' }}></div>
      <div className='position-relative flex-grow-1'>
        <div className='position-absolute cursor top-0 left-0 w-100 bg-dark p-3 text-white z-1 translateOnHover transition-5'>
          {
            (stock) ? <p className='mb-0 text-center'>ADD TO CART</p> : <p className='mb-0 text-center'>OUT OF STCOK</p>
          }
        </div>
        <div className='p-4 position-relative z-3 grayBg h-100 d-flex flex-column justify-content-between '>
          <p className='mb-0 text-center fs-4'>{title}</p>
          <div>
            <p className='text-secondary text-center mb-0'>
              {(() => {
                let starts = [];
                for (let index = 1; index <= 5; index++) {
                  if (index <= rate) {
                    starts.push(<AiFillStar key={index} />)
                  } else {
                    starts.push(<AiOutlineStar key={index} />)
                  }
                }
                return starts;
              }
              )()}
            </p>
            <p className='text-danger'>
              {
                (discount)
                  ? <p className='fs-4 text-center'>
                    ${Math.round(price - (price * (discount / 100)))}
                    <del className='ms-2 fs-5'>{price}</del>
                  </p>
                  : <p className='fs-4 text-center'>${price}</p>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArrivalesCard