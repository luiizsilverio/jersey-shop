import { useState, useMemo } from 'react';
import './App.css';
import Item from './components/Item';
import OrderDetails from './components/OrderDetails';

const initialItems = [
    {
        
        id: 1, 
        photo: "real_madrid.webp",
        name: "Real Madrid",
        price: 119.99,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 2, 
        photo: "milan.png",
        name: "Milan",
        price: 99.99,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 3, 
        photo: "chelsea.webp",
        name: "Chelsea",
        price: 99.99,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 4, 
        photo: "barcelona.png",
        name: "Barcelona",
        price: 109.99,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 5, photo: "benfica.png",
        name: "Benfica",
        price: 89.49,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 6, 
        photo: "manchester.webp",
        name: "Manchester City",
        price: 129.79,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 7, 
        photo: "bayern.webp",
        name: "Bayern",
        price: 119.99,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 8, 
        photo: "psg.png",
        name: "PSG",
        price: 94.99,
        active: false,
        quantity: 1, 
        isInBag: false
    },
    {
        id: 9, 
        photo: "ajax.webp",
        name: "Ajax",
        price: 89.99,
        active: false,
        quantity: 1, 
        isInBag: false
    }
];

function App() {

    const [items, setItems] = useState(initialItems);
    const itemsInBag = useMemo(() => items.filter(item => item.isInBag), [items]);

    function handleSelect(id) {
        let prod = items.find(item => item.id === id);
        if (prod) {
            prod.isInBag = !prod.isInBag;
            const newList = items.map(el => el.id === id ? prod : el);
            setItems(newList);
        }
    }

    function handleQuantity(ev, id, incremento) {
      ev.stopPropagation();
  
      let prod = items.find(item => item.id === id);
          if (prod) {
            prod.quantity += incremento;

            if (prod.quantity < 0) {
              prod.quantity = 0;
            }

            const newList = items.map(el => el.id === id ? prod : el);
            setItems(newList.filter(el => el.quantity > 0));
          }  
    }
  

    return ( 
        <>
            <section className="items">
                <h4>Jersey Shop</h4>
                
                {items.map(item => (
                    <Item 
                        key={item.id} 
                        item={item} 
                        onSelectItem={() => handleSelect(item.id)}
                        onChangeQuantity={(ev, id, incremento) => handleQuantity(ev, item.id, incremento)} 
                    />
                ))}            
            </section>
            
            {
                itemsInBag.length > 0 && (
                  <OrderDetails items={itemsInBag} />   
                )     
            }
            
        </>
    );
}

export default App
