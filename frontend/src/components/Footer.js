import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 
import { LinkContainer } from 'react-router-bootstrap'

function Footer() {
    return (
            <footer>
            <Container>
            <LinkContainer to='/'>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Django & React Ecommerce By Shivam Rohilla</Col>
                </Row>
            </LinkContainer>
            </Container>
            </footer>
    )
}

export default Footer
