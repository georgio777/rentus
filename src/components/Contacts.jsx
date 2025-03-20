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
            <div className="map__wrapper">
              <h3>Аренда</h3>
              <div style={{ position: 'relative', overflow: 'hidden', width: '100%', borderRadius: '14px' }}>
              {/* Ссылка на карту Санкт-Петербурга */}
              <a
                href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '0px',
                }}
              >
                Санкт‑Петербург
              </a>

              {/* Ссылка на конкретный адрес */}
              <a
                href="https://yandex.ru/maps/10174/saint-petersburg-and-leningrad-oblast/house/industrialnaya_ulitsa_22/Z0kYcAZlQEAOQFtjfXVwdXxmYg==/?ll=30.620298%2C59.926906&utm_medium=mapframe&utm_source=maps&z=10.58"
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '14px',
                }}
              >
                Индустриальная улица, 22 — Яндекс Карты
              </a>

              {/* Встраиваемая карта */}
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.620298%2C59.926906&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo2MTA5Nzg3MTU1EqwC0KDQvtGB0YHQuNGPLCDQm9C10L3QuNC90LPRgNCw0LTRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JLRgdC10LLQvtC70L7QttGB0LrQuNC5INGA0LDQudC-0L0sINCX0LDQvdC10LLRgdC60L7QtSDQs9C-0YDQvtC00YHQutC-0LUg0L_QvtGB0LXQu9C10L3QuNC1LCDRgtC10YDRgNC40YLQvtGA0LjRjyDQodC-0YDQttCwLdCh0YLQsNGA0LDRjyDQv9GA0L7QuNC30LLQvtC00YHRgtCy0LXQvdC90L4t0YHQutC70LDQtNGB0LrQsNGPINC30L7QvdCwLCDQmNC90LTRg9GB0YLRgNC40LDQu9GM0L3QsNGPINGD0LvQuNGG0LAsIDIyIgoNfu30QRX-p29C&utm_medium=mapframe&utm_source=maps&z=10.58"
                width="100%"
                height="400"
                title="Яндекс Карта: Индустриальная улица, 22"
                style={{
                  position: 'relative',
                  border: '1px solid #ccc', // Замена frameborder
                }}
                allowFullScreen={true} // Используйте camelCase для атрибутов
              ></iframe>
            </div>
            </div>

            <div className="map__wrapper">
              <h3>Ремонт</h3>
              <div style={{ position: 'relative', overflow: 'hidden', width: '100%', borderRadius: '14px' }}>
            {/* Ссылка на карту Санкт-Петербурга */}
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '0px',
              }}
            >
              Санкт‑Петербург
            </a>

            {/* Ссылка на конкретный адрес */}
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_marshala_kazakova_35k12/Z0kYdAdoQEUBQFtjfXR3dX5jbQ==/?ll=30.234506%2C59.866546&utm_medium=mapframe&utm_source=maps&z=13.36"
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '14px',
              }}
            >
              Улица Маршала Казакова, 35к12 — Яндекс Карты
            </a>

            {/* Встраиваемая карта */}
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.234506%2C59.866546&mode=whatshere&whatshere%5Bpoint%5D=30.208906%2C59.864209&whatshere%5Bzoom%5D=16&z=13.36"
              width="100%"
              height="400"
              title="Яндекс Карта: Улица Маршала Казакова, 35к12"
              style={{
                position: 'relative',
                border: '1px solid #ccc', // Замена frameborder
              }}
              allowFullScreen={true} // Используйте camelCase для атрибутов
            ></iframe>
          </div>
            </div>



          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;