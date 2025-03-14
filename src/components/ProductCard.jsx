import dateImg from '../assets/dates.png'

function ProductCard({item}) {
  return (
    <div className="product">
      <img className="product__img" src={item.images[0]?.src} alt={item.name} />
      <h3 className="product__name">{item.name}</h3>
      <div className="product__attributes">
        {item.attributes.map((atr)=>{
          return (
            <div className="product__attribute">
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