import React from 'react'


{
  /* with the react extention impt to import prop-types. */
}

const Rating = ({ value, text, color }) => {
  {
    /* console.log(articles.name)
    console.log(value). */
  }
  return (
    <div className='rating'>
      <span>
        {/* each span represent nr2000 full start. */}
        <i
          style={{ color }}
          className={
            value >= 2.0
              ? 'fas fa-star'
              : value >= 1.0 // else
              ? 'fas fa-star-half-alt'
              : 'far fa-star' // else
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4.0
              ? 'fas fa-star'
              : value >= 2.0
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 6.0
              ? 'fas fa-star'
              : value >= 4.0
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 8.0
              ? 'fas fa-star'
              : value >= 6.0
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 10.0
              ? 'fas fa-star'
              : value >= 8.0
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      {/* whatever the text is passing in,
      the - if text then show the text or else show nothing
      text ? text : '' .but use double amperstam */}
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f4b529',
}

{
  /* https://www.color-hex.com/color-palette/108457 */
}

export default Rating