import React, { useState, useCallback } from "react";

const AccordionItem = React.memo(({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      {/* Заголовок */}
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        {title}
        <div className="plus">
          <span className="vertline"></span>
          <span className="horline"></span>
        </div>
      </div>

      {/* Контент */}
      <div
        className={`accordion-content ${isOpen ? "active" : ""}`}
        style={{
          maxHeight: isOpen ? "500px" : "0",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
});

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Обработчик клика на заголовок
  const handleTitleClick = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const accordionData = [
    {
      title: "Это ваш первый полноценный интересный вопрос",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Это ваш первый полноценный интересный вопрос",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Это ваш первый полноценный интересный вопрос",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Это ваш первый полноценный интересный вопрос",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Это ваш первый полноценный интересный вопрос",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="lcontainer">
      <h2 className="section__name">Частые вопросы</h2>
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