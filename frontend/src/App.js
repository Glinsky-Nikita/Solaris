import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import CommentsList from './components/CommentsList';
import Done from './components/Done'
import Sub from './components/Sub'
import Reviews from './components/Reviews';
import Header from './components/sub_components/Header';

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sub" element={<Sub />} />
      <Route path="/done" element={<Done />} />
      <Route path="/CommentsList" element={<CommentsList />} />
      <Route path="/reviews" element={<Reviews />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;