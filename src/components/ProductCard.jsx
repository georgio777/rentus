import { useState } from 'react'
import dateImg from '../assets/dates.png'
import ContactForm from './ContactForm'

function ProductCard({item}) {
  const [isOpen, setOpen] = useState(false);

  function toggleModalForm() {
    setOpen(v=>!v)
  }

  return (
    <div className="product" onClick={toggleModalForm} >
      { isOpen && <ContactForm item={item} toggleModalForm={toggleModalForm}/>}
      <img className="product__img" src={item.images[0]?.src} alt={item.name} />
      <h3 className="product__name">{item.name}</h3>
      <div className="product__attributes">
        {item.attributes.map((atr)=>{
          return (
            <div key={atr.name} className="product__attribute">
              <p>{atr.name}</p>
              <p>{atr.options[0]}</p>
            </div>
          )
        })}
      </div>
      <div className="product__bottom">
        <div className="date__picker"><img src={dateImg} alt="dates" /></div>
        <div className="product__price">От {item.price}₽ / сутки</div>
      </div>
    </div>
  )
}

export default ProductCard