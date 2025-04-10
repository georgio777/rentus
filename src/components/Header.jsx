import logo from '../assets/logo.svg';
import dots from '../assets/dots.png';
import phone from '../assets/phone.svg';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

function Branding() {
    return (
        <div className="branding__wrapper">
            <img src={logo} alt="логотип" className="logo" />
            <a href="/" className="naming">
                <h2>РЕНТУС</h2>
                <p>Аренда инструмента</p>
            </a>
        </div>
    );
}

function Button({href, img={dots}, title}) {
    return (
        <a href={href}>
            <button className="catalog__button">
                <img src={img} alt="" className="dots" />{title}
            </button>
        </a>
    )
}

function Header() {
    const [headerColor, setColor] = useState('#fbf6e5');
    const sideRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: '.2s'
    };

    useEffect(() => {
        const slider = document.querySelector('.slider');
        if (!slider) return;

        const handleScroll = () => {
            const sliderHeight = slider.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > sliderHeight) {
                setColor('white');
            } else {
                setColor('#fbf6e5');
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sideRef.current && !sideRef.current.contains(event.target)) {
                setOpen(false); // Закрываем меню, если клик вне его
            }
        };

        // Добавляем слушатель только если меню открыто
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        // Очищаем слушатель при закрытии меню или размонтировании
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]); // Зависимость от isOpen

    const toggleMenu = (e) => {
        e.stopPropagation(); // Предотвращаем всплытие события при открытии
        setOpen((v) => !v);
    };

    return (
        <header style={{ ...headerStyle, backgroundColor: headerColor }}>
            <div className="lcontainer">
                <div className="header__inner">
                    <div className="header__item"><Branding /></div>
                    <div className="header__item">
                        <a href='#catalog' className="catalog__button">
                            <img src={dots} alt="" className="dots" /> Каталог
                        </a>
                    </div>
                    <div className="header__item">
                        <Link to='/price' className="catalog__button">
                            <img src={dots} alt="" className="dots" /> Ремонт
                        </Link>
                    </div>
                    <div className="header__item">
                        <nav className="header__nav">
                            <ul>
                                <li><a href="#questions">Вопросы</a></li>
                                <li><a href="#docs">Документы</a></li>
                                <li><a href="#contacts">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__item">
                        <a href="tel:+79046164040" className="header__tel">
                            <img className="phoneicon" src={phone} alt="телефон" />
                            +7 904 616-40-40
                        </a>
                    </div>
                    <div onClick={toggleMenu} className="hamburger">
                        <img src={dots} alt="меню" />
                        меню
                    </div>
                </div>
            </div>
            <div
                ref={sideRef}
                style={{
                    transform: isOpen ? 'translateX(-300px)' : 'translateX(0)',
                    transition: '.2s'
                }}
                className="sidemenu"
            >
                        <Link to='/price' className="catalog__button">
                            <img src={dots} alt="" className="dots" /> Ремонт
                        </Link>                <Button href='#catalog' img={dots} title='Каталог' />
                <nav className="header__nav">
                    <ul>
                        <li><a href="/#questions">Вопросы</a></li>
                        <li><a href="/#docs">Документы</a></li>
                        <li><a href="/#contacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export { Branding, Header, Button };