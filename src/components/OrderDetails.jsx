import { useMemo } from "react";

/* eslint-disable react/prop-types */
function OrderDetails({ items }) {
  
  const total = useMemo(() => items.reduce((acc, item) => (
    acc + (item.price * item.quantity)), 0
  ), [items]);

  return (
    <section className="summary">
      <strong>Detalhes do Pedido</strong>
      <table>
          <thead>
              <tr>
                  <th>Item</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
            {
                items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.quantity}x {item.name}</td>
                        <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                ))
            }
              
              <tr>
                  <th>Total</th>
                  <th>$ {total.toFixed(2)}</th>
              </tr>
          </tbody>
      </table>
  </section>
  )
}

export default OrderDetails;
