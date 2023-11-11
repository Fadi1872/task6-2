

const FeatyresCard = ({img, title, description, column, topTitle}) => {
    let rows;
    let centertext;
    let width;
    if(column){
        rows = 'd-flex justify-content-center gap-3';
        centertext = '';
        width = 'w-75';
    }else{
        rows = 'p-3';
        centertext = 'text-center';
        width = 'w-25 mb-4';
    }
    return (
        <div className={`${rows} my-4`}>
            <div className="d-flex justify-content-center align-items-center">
                <img src={img} alt="Features" className={width}/>
            </div>
            <div className={centertext}>
                <h2 className="fs-5 redHover transition-5">{topTitle}</h2>
                <h1 className="mb-0 fs-4 redHover transition-5">{title}</h1>
                <p className="mb-0 opacity-75">{description}</p>
            </div>
        </div>
    )
}

export default FeatyresCard