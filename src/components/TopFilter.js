import React from 'react'
import { Button } from 'react-bootstrap'

const Topfilter = () => {
  return (
    <>
      <div className='mb-2 mt-5'>
        <Button
          className='mr-4 pt-1 pb-1'
          variant='outline-secondary'
          size='sm'
        >
          <i className='fas fa-times'></i> Secondary
        </Button>
      </div>
    </>
  )
}

export default Topfilter
