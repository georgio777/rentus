import { Branding } from "./Header"

function Footer() {
  return (
    <footer>
      <div className="lcontainer">
        <div className="footer__top">
          <div className="footer__branding">
            <Branding />
          </div>
          <div className="footer__top--item">
            <h2>О компании</h2>
            <p>Услуги</p>
            <p>Отзывы</p>
          </div>
          <div className="footer__top--item">
            <h2>Партнерам</h2>
            <p>Карьера</p>
            <p>Безопасность</p>
          </div>
          <div className="footer__top--item">
            <a href="tel:+78126164040">+7 812 616-40-40</a>
            <a href="mailto:6164040@mail.ru">6164040@mail.ru</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="lcontainer">
          <div className="footer__bottom--inner">
            <p>Все права защищены</p>
            <a href="https://shigapov.studio/">Разработано в студии Shigapov</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer