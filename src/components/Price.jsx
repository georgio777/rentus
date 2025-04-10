import React, { useState, useEffect, useCallback } from 'react';
import AccordionItem from './AccordionItem';
import { Header } from './Header';
import Footer from './Footer';
import * as XLSX from 'xlsx';

const parsePriceData = async () => {
  try {
    // const url = 'https://www.wp.6164040.ru/wp-content/uploads/2025/04/price.xlsx';
    const url = '../../price.xlsx'
    const response = await fetch(url);
    if (!response.ok) throw new Error('Не удалось загрузить файл');
    const data = await response.arrayBuffer();
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

    const result = [];
    let currentSection = null;

    rawData.forEach((row) => {
      const name = row[0]?.trim();   // "Вид работы"
      const price = row[1]?.trim();  // "Стоимость"

      // Пропускаем пустые строки
      if (!name) return;

      // Если строка начинается с #, это заголовок
      if (name.startsWith('#')) {
        if (currentSection) {
          result.push(currentSection);
        }
        currentSection = {
          title: name.slice(1).trim(), // Убираем # и лишние пробелы
          content: [],
        };
      }
      // Если это услуга (есть цена) и есть текущий заголовок
      else if (currentSection && price) {
        currentSection.content.push(
          <tr key={name}>
            <td>{name}</td>
            <td>{price}</td>
          </tr>
        );
      }
      // Пропускаем строки без цены и без # (например, "ДИАГНОСТИКА БЕСПЛАТНО")
    });

    // Добавляем последнюю секцию, если она есть
    if (currentSection) {
      result.push(currentSection);
    }

    return result;
  } catch (error) {
    console.error('Ошибка:', error);
    throw new Error('Не удалось загрузить прайс-лист.');
  }
};






const Price = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [sections, setSections] = useState([]);
  const [error, setError] = useState(null);

  
  
    // Обработчик клика на заголовок
  const handleTitleClick = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await parsePriceData();
        setSections(data);
        console.log(sections);
        
      } catch (err) {
        setError(err.message);
      }
    };
    loadData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!sections.length) return <p>Загрузка...</p>;

  return (
    <>
      <Header />
      <div className="lcontainer"
      style={{
        paddingTop: '60px'
      }}
      >
        <h2 className="section__name">Ремонт прайс лист</h2>
        <div className="accordion">
          {sections.map((section, index) => (
            <AccordionItem
              key={index}
              title={section.title}
              content={section.content}
              isOpen={activeIndex === index}
              onClick={() => handleTitleClick(index)}
            />
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Price;


