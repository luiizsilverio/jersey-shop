/* eslint-disable react/prop-types */
function Item({ item, onSelectItem, onChangeQuantity }) {

  return (
    <div 
      className={`product ${item.isInBag ? 'selected' : ''}`}
      onClick={onSelectItem}
    >
      <div className="photo">
          <img src={`././img/${item.photo}`} />
      </div>
      <div className="description">
          <span className="name">{item.name}</span>
          <span className="price">${item.price.toFixed(2)}</span>
          {
              item.isInBag && (
                  <div className="quantity-area">
                      <button 
                        onClick={(e) => onChangeQuantity(e, item.id, -1)}
                        disabled={item.quantity <= 1}
                      >-
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={(e) => onChangeQuantity(e, item.id, +1)}
                      >+
                      </button>
                  </div>
              )
          }
      </div>
  </div>    
  )
}

export default Item;
