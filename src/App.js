import React, { useState } from 'react';
import URLForm from './components/URLForm';

function App() {
  const [data, setData] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaGFyaXlhLjIyZ2NlYmNzMTgzQGdhbGdvdGlhY29sbGVnZS5lZHUiLCJleHAiOjE3NTEwMTY3NTMsImlhdCI6MTc1MTAxNTg1MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQxZmQwZTVjLTA5NGMtNDM3Mi1hMzcxLTdiZDZjODM4MmFmYyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNoYXJpeWEgemVocmEgemFpZGkiLCJzdWIiOiJmMzRjOTRhNC00Zjk5LTQwYzItOWU5OS03YTRkNWQ4MGYwODcifSwiZW1haWwiOiJzaGFyaXlhLjIyZ2NlYmNzMTgzQGdhbGdvdGlhY29sbGVnZS5lZHUiLCJuYW1lIjoic2hhcml5YSB6ZWhyYSB6YWlkaSIsInJvbGxObyI6IjIyMDA5NzAxMDAxNTMiLCJhY2Nlc3NDb2RlIjoiTXVhZ3ZxIiwiY2xpZW50SUQiOiJmMzRjOTRhNC00Zjk5LTQwYzItOWU5OS03YTRkNWQ4MGYwODciLCJjbGllbnRTZWNyZXQiOiJLeEV2UFdXaERoWkVacnZyIn0.4x4ahca6mKlqM7GqaihljxwJ0UkbfLcsyJaBbjwcBtc";

  const handleShorten = (info) => {
    const expiryDate = new Date();
    expiryDate.setMinutes(expiryDate.getMinutes() + parseInt(info.validity));
    const newRecord = { ...info, expiry: expiryDate.toISOString() };
    setData([...data, newRecord]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>URL Shortener App</h2>
      <URLForm token={token} onShorten={handleShorten} />
      
      <h3 style={{ marginTop: "2rem" }}>Shortened URLs</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.shortcode}</strong> → {item.originalUrl}  
            <br />
            <small>Expires at: {new Date(item.expiry).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;