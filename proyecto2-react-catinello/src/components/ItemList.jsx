import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if(isLoading){
    return <span className='loading'>Loading...</span>
  }


  return (
    <div className="banner">
      <h1>Mejores Productos siempre!</h1>

      <Link to="/checkout">Ir a finalizar compra</Link>

      <ul>
        {items.map((item) => (
        <div className="cajaProductos">
          <li key={item.id}>
            <Link className="title-id" to={`/item/${item.id}`}>
              <h3>{item.name}</h3>
              <img src={item.imageId} alt={item.name} />
              <p>${item.price}</p>
              <p>{item.categoryId}</p>
            </Link>
          </li>
        </div>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default ItemList;
