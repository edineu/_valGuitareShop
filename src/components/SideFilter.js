import React from 'react'
import { Form, Card } from 'react-bootstrap'

const SideFilter = () => {
  return (
    <>
      <Form.Group className='mt-5'>
        <Card>
          <Card.Header as='h5'>Filer Producs here </Card.Header>
        </Card>
        <br />
        <Form.Row>
          <div className='mb-3 ml-4 pt-20'>
            <Form.Check inline label='Epiphone' />
          </div>
        </Form.Row>
      </Form.Group>
    </>
  )
}

export default SideFilter
