
const InnovativeCard = ({ title, discription, imgUrl, alignEnd}) => {
    let align, flexRow;
    if (alignEnd) {
        align = 'text-center text-sm-end';
        flexRow = 'flex-md-row'
    }else{
        align = 'text-center text-sm-start'
        flexRow = 'flex-md-row-reverse'
    }
    return (
        <div className={`d-flex ${flexRow} flex-column-reverse ${align}`}>
            <div className='flex-grow-1'>
                <h2 className='fs-5 text-bold redHover transition-5'>{title}</h2>
                <p>{discription}</p>
            </div>
            <div className="mx-3">
                <img src={imgUrl} alt="Feature" className="mb-auto" />
            </div>
        </div>
    )
}

export default InnovativeCard