import logo from '../assets/logo.png';
import dots from '../assets/dots.png';
import { useState, useEffect, useRef } from 'react';

function Branding() {
    return (
        <div className="branding__wrapper">
            <img src={logo} alt="логотип" className="logo" />
            <a href="/" className="naming">
                <h2>РЕНТУС</h2>
                <p>Аренда инструмента</p>
            </a>
        </div>
    )
}

function Header() {
    const [isVisible, setVisible] = useState(true);
    const headerRef = useRef(null);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Логика: если текущая позиция скролла больше предыдущей, значит, скроллим вниз
            if (currentScrollY > prevScrollY.current) {
                setVisible(false); // Скрываем хедер
            } else {
                setVisible(true); // Показываем хедер
            }

            // Обновляем предыдущую позицию скролла
            prevScrollY.current = currentScrollY;
        };

        // Добавляем слушатель события
        window.addEventListener('scroll', handleScroll);

        // Убираем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Вычисляем высоту хедера динамически
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

    // Применяем стили для анимации
    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'transform 0.3s ease-in-out',
        width: '100%',
        transform: isVisible ? 'translateY(0)' : `translateY(-${headerHeight}px)`,
        zIndex: 1000, // Чтобы хедер был поверх других элементов
    };

    return (
        <header ref={headerRef} style={headerStyle}>
            <div className="lcontainer">
                <div className="header__inner">
                    <Branding />
                    <button className="catalog__button">
                        <img src={dots} alt="" className="dots" /> Каталог
                    </button>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#questions">Вопросы</a></li>
                            <li><a href="#docs">Документы</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </nav>
                    <a href="tel:+79046164040" className="header__tel">
                        +7 904 616-40-40
                    </a>
                </div>
            </div>
        </header>
    );
}

export {Branding, Header};