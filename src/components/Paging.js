import React, { useEffect, useState } from 'react'

const renderData = (articles) => {
  return <ul></ul>
}

function PaginationComponent() {
  const [articles, setData] = useState([])

  useEffect(() => {
    fetch('../products.json')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  return (
    <>
      <h1>Todo List</h1> <br />
      {renderData(articles)}
    </>
  )
}

export default PaginationComponent
