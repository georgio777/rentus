import React from "react";

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
          maxHeight: isOpen ? "1500px" : "0",
        }}>
          {content}
      </div>
    </div>
  );
});

export default AccordionItem