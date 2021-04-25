import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

const HomePage = () => {
  return (
    <>
      <Row>
        <Col md={3} sm={6} xs={3}>
          test
        </Col>
        <Col>
          <Row>
            <Col>test</Col>
          </Row>
          <Row>
            {products.articles.map((articles) => (
              <Col key={articles.id} sm={6} md={4} lg={4} xl={4}>
                <h3>{articles.name}</h3>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default HomePage
