import { useState, useEffect } from 'react'
import { getProduct } from '../services'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();

  useEffect( () =>{
    getProduct(id).then( (response) => {
    setItem(response);

    }).catch(() => {
      setItem(null)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [id])


  return <ItemDetail item={item} isLoading={isLoading}></ItemDetail>
}

export default ItemDetailContainer