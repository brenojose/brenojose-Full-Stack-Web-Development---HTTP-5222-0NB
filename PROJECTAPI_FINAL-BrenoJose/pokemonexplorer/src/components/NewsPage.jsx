// NewsPage.jsx
import React, { useState, useEffect } from 'react';

const NEWS_API_KEY = '5ebe49764c8f4c58ae56bc5f033b5e04';
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=pokemon&language=en&apiKey=${NEWS_API_KEY}`;
function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <h2>Pokémon News</h2>
      {loading && <p>Loading news...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsPage;
