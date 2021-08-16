import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'

function HomeScreen() 
{
    const dispatch = useDispatch()
    
    // productList comes from our store.js
    
    const productList = useSelector(state => state.productList)
    
    const {error, loading, products} = productList
    
    // We use useEffect here because it loads all products and every Component
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <div>
            <h1 class="text-center py-3">Latest Products</h1>
            {loading ? <Loader /> 
                :error ? <Message variant='danger'>{error}</Message>           
                :
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={3} >
                        {/* <h3>{product.name}</h3> */}
                        <Product product={product} />
                        </Col>
                    ))}
                </Row>
       
            }

        </div>
    )
}

export default HomeScreen
