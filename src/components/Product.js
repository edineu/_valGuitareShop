import React from 'react'

import { Card } from 'react-bootstrap'

const Product = ({ articles }) => {
  {
    /* console.log(articles.name).
    console.log(articles.rating.overall)
    console.log(articles.rating.overall.rating)
    */
  }
  return (
    <Card className='my-3 pt-3 pb-0 pl-0 pr-0 rounded'>
      <a href={`/articles/${articles.id}`}>
        <Card.Img
          src={`/images/${articles.image.file}`}
          variat='top'
          style={{
            width: `${articles.image.width}px`,
            heigt: `${articles.image.height}px`,
            transform: 'rotate(74deg)',
            marginLeft: '40px',
          }}
        />
      </a>

      <Card.Body>
        <a href={`/articles/${articles.id}`}>
          <Card.Title as='div'>
            <strong>{articles.name}</strong>
          </Card.Title>
        </a>

        <Card.Subtitle className='mb-3 text-muted'>
          {articles.manufacturer}
        </Card.Subtitle>

        <a href={`/articles/${articles.id}`}>
          <Card.Img
            className='pb-3'
            src={`/images/${articles.manufacturerData.image.file}`}
            variat='top'
            style={{
              width: `${articles.manufacturerData.image.width}px`,
              heigt: `${articles.manufacturerData.image.height}px`,
            }}
          />
        </a>

        <Card.Text as='p' className='pt-2'>
          {articles.text.features}
        </Card.Text>
        {/*
        <Card.Text as='div' className='pb-3'>
          <Rating
            value={articles.rating.overall.rating}
            text={`${articles.rating.overall.count}  reviews`}
          />
        </Card.Text>

*/}

        <Card.Text as='h4'>£{articles.price.primary.raw}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
