import React, { useEffect, useState } from 'react';
import API from '../api'; 

function CommentsList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    API.post('FeedbackAndWishesShow/')
      .then(res => setComments(res.data))
      .catch(err => console.error('Ошибка при получении истории:', err));
  }, []);

  return (
    <div>
      <b>История вычислений</b>
      <ul>
        {comments.map(entry => (
          <li key={entry.id}>
            {entry.Name} + {entry.Text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;