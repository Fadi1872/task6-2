import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrivalesCard from "../../../Components/ArrivalesCard/ArrivalesCard";

const Arrivales = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <SectionTitle title='NEW ARRIVALS'
            subTitle='FIND THE PERFECT PHONE FOR YOU'>
            <Carousel className=" py-5"
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    loading && <div>loading</div>
                }
                {
                    products && products.slice(0, 6).map((product) => (
                        <ArrivalesCard
                            key={product.id}
                            img={product.images[0]}
                            title={product.title}
                            discount={product.discountPercentage}
                            price={product.price}
                            stock={product.stock}
                            rate={Math.round(product.rating)} />
                    ))
                }
            </Carousel>
        </SectionTitle>
    )
}

export default Arrivales