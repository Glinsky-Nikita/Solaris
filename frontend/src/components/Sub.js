'use client';
import { useState, useEffect } from 'react';
import styles from './Sub.module.css';
import { useNavigate } from 'react-router-dom';
import API from '../api'; // axios с baseURL

function ResultComponent({ name, tell }) {
  const [data, setData] = useState([]);
  const [redirect, setRedirect] = useState(false);  
  const navigate = useNavigate();


  const fetchData = (name, tell) => {
    API.post('Subscribe/', { name: name, tell: tell })
      .then(response => setData(response.data))
      .catch(error => console.error('Ошибка при запросе:', error));
  };

  useEffect(() => {
    fetchData(name, tell);
  }, [name, tell]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 2000); // Задержка в 3 секунды

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  if (redirect) {
    navigate('/done');
  }
  return;
}

export default function Auth() {
  const [check, setCheck] = useState([]);

  const [input_name, setInput_name] = useState("Ваше имя");
  const [input_tell, setInput_tell] = useState("Ваш номер телефона");

  const [submitted, setSubmitted] = useState(null);

  const handleChange1 = (e) => {
    setInput_name(e.target.value);
  };

  const handleChange2 = (e) => {
    setInput_tell(e.target.value);
  };

  const handleSubmit = () => {
        const parsedName = input_name;
        const parsedTell = input_tell;
        
        if ( parsedName == "" || parsedTell == "" ) {
          alert('Заполните все поля, пожалуйста');
          return;
        }
  
        setSubmitted({ name: parsedName, Tell: parsedTell });
      };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h2>Подписшитесь на рассылку</h2>
        <h3>и следите за нашими новостями</h3>
        <div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              onChange={handleChange1}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Номер телефона</label>
            <input
              type="tel"
              id="number"
              onChange={handleChange2}
              required
            />
          </div>

          <button onClick={handleSubmit} className={styles.submitButton}>
            Подписаться
          </button>
          {submitted && (
            <ResultComponent name={submitted.name} tell={submitted.tell} />
          )}
        </div>
      </div>
    </div>
  );
}