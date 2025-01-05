import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/home-data/');
        if (!response.ok) {
          throw new Error('Ошибка получения данных');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="home-container">
      <h1>Главная страница</h1>
      <div className="data-grid">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            {/* Измените поля в соответствии с вашей моделью */}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.image && (
              <img src={item.image} alt={item.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
