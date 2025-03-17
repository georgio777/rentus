import React from "react";
import wapp from "../assets/wapp.svg";
import tg from "../assets/tg.svg";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="lcontainer">
        <div className="contacts__inner">
          {/* Левая часть (контакты) */}
          <div className="contacts__left">
            <h2>Контакты</h2>
            <p>Телефон</p>
            <a href="tel:+79046164040">+7 904 616-40-40</a>
            <p>Емайл</p>
            <a href="mailto:6164040@mail.ru">6164040@mail.ru</a>
            <div className="contacts__imgs">
              {/* Ссылка на WhatsApp */}
              <a href="https://wa.me/79046164040" target="_blank" rel="noopener noreferrer">
                <img src={wapp} alt="WhatsApp" />
              </a>
              {/* Ссылка на Telegram */}
              <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
                <img src={tg} alt="Telegram" />
              </a>
            </div>
          </div>

          {/* Правая часть (карта) */}
          <div className="contacts__right">
            <div style={{ position: "relative", overflow: "hidden",height: '100%', borderRadius: '14px' }}>
              {/* Текстовые ссылки для карты */}
              <a
                href="https://yandex.ru/maps/org/lakhta_tsentr/71693345624/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Лахта центр
              </a>
              <a
                href="https://yandex.ru/maps/2/saint-petersburg/category/business_center/184107509/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Бизнес-центр в Санкт‑Петербурге
              </a>
              <a
                href="https://yandex.ru/maps/2/saint-petersburg/category/landmark_attraction/89683368508/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "28px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Достопримечательность в Санкт‑Петербурге
              </a>

              {/* Фрейм карты */}
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.194673%2C59.981815&mode=poi&poi%5Bpoint%5D=30.178003%2C59.987116&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D71693345624&z=14.4"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Yandex Map"
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;