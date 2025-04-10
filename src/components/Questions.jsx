import React, { useState, useCallback } from "react";
import AccordionItem from "./AccordionItem";


function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Обработчик клика на заголовок
  const handleTitleClick = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const accordionData = [
    {
      title: "1. Требуется ли залог?",
      content:
        "- Да, залог для аренды инструмента необходим",
    },
    {
      title: "2. Какие документы нужны для ФИЗЛИЦ?",
      content:
        "- Для заключения договора проката строительного оборудования с физическим лицом, вам необходимо предоставить:<br /> документ удостоверяющий личность (паспорт рос./загран);<br /> второй документ (водительское удостоверение / СНИЛС).",
    },
    {
      title: "3. Какие документы нужны для ЮрЛиц",
      content:
        "- Реквизиты; Свидетельство ИНН; После заключения договора для получения инструмента с собой необходимо каждый раз иметь:<br /> Доверенность от имени организации на получение инструмента;<br /> Личный паспорт;<br /> Осуществить предоплату на весь срок предполагаемой аренды.",
    },
    {
      title: "4. Есть ли у Вас доставка ?",
      content: "Да, доставка есть - как нашими силами, так и Яндекс.Доставкой"
    }
  ];

  return (
    <div className="lcontainer">
      <h2 id="questions" className="section__name">Частые вопросы</h2>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => handleTitleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Questions;