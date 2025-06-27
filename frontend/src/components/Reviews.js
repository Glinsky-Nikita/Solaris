'use client';
import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';
import API from '../api'; 

function ResultComponent({ name, text }) {
    const [data, setData] = useState([]);
  
    const fetchData = (name, text) => {
      API.post('FeedbackAndWishes/', { name: name, text: text })  
        .then(response => setData(response.data))
        .catch(error => console.error('Ошибка при запросе:', error));
    };

    useEffect(() => {
      fetchData(name, text);
    }, [name, text]);
  
    return;
}

export default function Reviews() {

  const [input_name, setInput_name] = useState("Ваше имя");
      const [input_text, setInput_text] = useState("Опишите свои впечатления и расскажите о своих пожеланиях!");
   
      const [submitted, setSubmitted] = useState(null);
      const [comments, setComments] = useState([]);

      
      const [inputName, setInputName] = useState('');
      const [inputText, setInputText] = useState('');


  useEffect(() => {
    API.post('FeedbackAndWishesShow/')
      .then(res => setComments(res.data))
      .catch(err => console.error('Ошибка при получении истории:', err));
  }, [submitted]);
  
      const handleChange1 = (e) => {
        setInput_name(e.target.value);
        setInputName(e.target.value);
      };
  
      const handleChange3 = (e) => {
        setInput_text(e.target.value);
        setInputText(e.target.value);
      };
    
      const handleSubmit = () => {
        const parsedName = input_name;
        const parsedText = input_text;
        
        if ( parsedName == "" || parsedText == "" ) {
          alert('Заполните все поля, пожалуйста');
          return;
        }
  
        setSubmitted({ name: parsedName, text: parsedText });
        setInputName('');
        setInputText('');
      };
  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.title}>Отзывы о спектакле "Солярис"</h2>
      <div className={styles.reviewsList}>
        {comments.length === 0 ? (
          <p className={styles.noReviews}>Пока нет ни одного отзыва. Станьте первым!</p>
        ) : (
            comments.map((entry) => (
              <div key={entry.id} className={styles.review}>
                <p className={styles.reviewText}>"{entry.Text}"</p>
                <p className={styles.reviewAuthor}>- {entry.Name}</p>
              </div>
            ))
        )}
      </div>  
      <div  className={styles.reviewForm}>
        <input
            type="text"
            value={inputName}
            placeholder="Ваше имя:"
            className={styles.reviewNamearea}
          onChange={handleChange1}
            required
          />
          <input
            type="text"
            value={inputText}
            placeholder="Напишите свой отзыв..."
            className={styles.reviewTextarea}
          onChange={handleChange3}
            required
          />
          <button onClick={handleSubmit} className={styles.submitButton}>
            Отправить отзыв
          </button>
          <div>
          {submitted && (
            <ResultComponent name={submitted.name} text={submitted.text} />
          )}
        </div>
        </div>
 
      </div>
  );
}