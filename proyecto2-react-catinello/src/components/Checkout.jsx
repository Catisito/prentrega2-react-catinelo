import { useContext } from "react";
import CartContext from "../context/CartContext";
import { getCartTotal } from "../utils";
import { serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const cartContext = useContext(CartContext);


  const handleCheckout = () => {
    const order = {
        buyer: {
            name: "gabriel",
            phone: "1135613561",
            email: "gabrielSof@outlook.com"
        },
        items: [],
        total,
        date: serverTimestamp
    }

  }

  const total = getCartTotal(cartContext.cart);

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Resumen de la compra</h2>

      <div>
        <h4>Formulario de contacto</h4>
      </div>

      <ul>
        {cartContext.cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>

      <p>Total de la compra: {total}</p>

      <button onClick={handleCheckout}>FinalizarCompra</button>
    </div>
  );
};

export default Checkout;