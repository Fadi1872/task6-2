import { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Col, Row } from 'react-bootstrap';
import ArrivalesCard from '../../../Components/ArrivalesCard/ArrivalesCard';

const Products = () => {
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


    return (
        <SectionTitle title='SEE OUR COLLECTION'
            subTitle='YOU CAN CHOOSE AND ADD TO CARD'>
            <Row className='mt-5'>
                {
                    loading && <div>loading</div>
                }
                {
                    products && products.map((product) => (
                        <Col lg={3} md={4} sm={6} className='mb-5'>
                            <ArrivalesCard
                                key={product.id}
                                img={product.images[0]}
                                title={product.title}
                                discount={product.discountPercentage}
                                price={product.price}
                                stock={product.stock}
                                rate={Math.round(product.rating)} />
                        </Col>
                    ))
                }
            </Row>
        </SectionTitle>
    )
}

export default Products