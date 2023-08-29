import React from 'react'
import PropTypes from 'prop-types'
import '../assets/css/loading.css'

const ItemDetail = ({ item, isLoading }) => {
  if(isLoading) {
    return <span className='loading'>Loading</span>;
  }

  if (!item) {
    return <h2>Este producto no existe...</h2>;
  }


  return <div className='itemDetail'>
      <h1>Confirma tu pedido!</h1>
    <div className='producto-final'>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <span>${item.price}</span>
      <p>{item.category}</p>
    </div>
  </div>
}

ItemDetail.PropTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool
}

export default ItemDetail