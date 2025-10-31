
import Header from './components/Header';
import NewsItem from './components/NewsItem';
import Counter from './components/Counter';
import './App.css';


function App() {
  const isLogin = false;
  const newsItem = {
    title: 'Some news',
    body: 'About this news',
  };

  return (
    <>
      <Header isLogin={isLogin} />
      <NewsItem news={newsItem} />
      <Counter />
    </>  
  );
}

export default App;


