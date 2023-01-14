import { useState, useEffect } from 'react'
import './App.css'

const CSR = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchCats = async () => {
    setLoading(true);
    const url = 'https://cataas.com/api/cats?limit=20';
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const cats = await res.json();
    setData(cats);
    setLoading(false);
  }

  useEffect(() => {
    fetchCats();
  }, []);

  if (isLoading) return <p>Загрузка...</p>;
  if (!data) return <p>Пустота</p>;

  return (
    <div>
      <h1>Коты</h1>
      <div className='cats'>
        {data.map((cat:any) => (
          <div key={cat._id}>
            <img src={`https://cataas.com/cat/${cat._id}`} alt={cat._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSR;

