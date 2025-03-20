import React, { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";
import { SmartCaptcha } from '@yandex/smart-captcha';

function ContactForm({ item, toggleModalForm }) {
  const [token, setToken] = useState('');
  const [selectedRange, setSelectedRange] = useState({ from: null, to: null });
  const [formData, setFormData] = useState({
    product: item.name,
    productAtr: item.attributes[0].options[0], // Исправлено с pruductAtr
    name: '',
    phone: '',
    email: '',
    message: '',
    dates: '',
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); // Новое состояние для управления видимостью формы

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleDateSelect = (range) => {
    setSelectedRange(range);
    if (range?.from && range?.to) {
      const formattedDates = `${format(range.from, 'dd.MM.yyyy')} - ${format(range.to, 'dd.MM.yyyy')}`;
      setFormData({ ...formData, dates: formattedDates });
      setErrors({ ...errors, dates: '' });
    } else {
      setFormData({ ...formData, dates: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }
    const phoneRegex = /^(\+7|8)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона (например, +79991234567)';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!formData.dates) {
      newErrors.dates = 'Пожалуйста, выберите диапазон дат';
    }
    if (!token) {
      newErrors.captcha = 'Пожалуйста, пройдите проверку на спам';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch('https://6164040.ru/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ ...formData, captchaToken: token }).toString(),
      });
      if (!res.ok) {
        throw new Error(`HTTP ошибка: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data.message);
      if (data.status === 'success') {
        setIsFormVisible(false); // Скрываем форму
      }
    } catch (error) {
      setResponse(`Ошибка подключения к серверу: ${error.message}`);
    }
  };

  return (
    <div
    onClick={(e)=>e.stopPropagation()}
    className="modal">
      <div onClick={toggleModalForm} className="close icon-X"></div>
      <h2>{formData.product}</h2>

      {/* Условный рендеринг формы */}
      {isFormVisible ? (
        <form onSubmit={handleSubmit}>
          <h3>Выберите даты</h3>
          <DayPicker
            locale={ru}
            mode="range"
            selected={selectedRange}
            onSelect={handleDateSelect}
            disabled={{ before: new Date() }}
            showOutsideDays={true}
            styles={{
              caption_label: { fontSize: "16px", fontWeight: "bold" },
              cell: { padding: "15px" },
            }}
          />
          {errors.dates && <p style={{ color: 'red' }}>{errors.dates}</p>}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Номер телефона"
            required
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ваш email"
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Сообщение"
          />

          <SmartCaptcha
            sitekey="ysc1_HCnMqMEOPnTUaLzMUyHgzLwMICZL8I0obMuHxjxK7ebf2d79"
            onSuccess={setToken}
            robustnessLevel="medium" // Указываем уровень сложности
          />
          {errors.captcha && <p style={{ color: 'red' }}>{errors.captcha}</p>}

          <button type="submit">Отправить</button>
        </form>
      ) : (
        <div>
          <p className='success__submission'>Спасибо! {response}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;