import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios'


function ProductScreen({match}) {

    const [product, setProduct] = useState([])

    // We use useEffect here because it loads all products and every Component
    useEffect(() => {

        async function fetchProduct(){

            const { data } = await axios.get(`/api/product/${match.params.id}`)
            setProduct(data)

        }
        fetchProduct()
        // console.log('Use Effect Trigger')

    }, [])

    // const product = products.find((p) => p._id == match.params.id ) 
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'> <i class="fa fa-arrow-left"> </i> Go Back </Link> 
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />                    
                </Col>
                <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price:- Rs. {product.price} 
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description:- {product.description}
                    </ListGroup.Item>
                    
                </ListGroup>           
                </Col>
                <Col md={3}>
                <Card>
                <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col> Price:-
                        </Col>
                        <Col>
                        Rs. {product.price} 
                        </Col>
                    </Row>
                    </ListGroup.Item>    
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            <Button className='btn-block' type='button' disabled={product.countInStock == 0}>Add To Cart</Button>
                            </Col>                            
                        </Row>
                    </ListGroup.Item>
                </ListGroup> 
                </Card>        
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
