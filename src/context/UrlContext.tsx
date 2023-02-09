import { createContext, useEffect, useState } from 'react';

const UrlContext = createContext<{ url: string }>({
  url: '',
});

export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [shortUrl, setShortUrl] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUrl(inputValue);
    const fetchData = async () => {
      try {
        const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const response = await data.json();
        setShortUrl([...shortUrl, response.result.full_short_link]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  };
  
  return (
    <UrlContext.Provider value={{ handleChange, handleSubmit, inputValue, shortUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContext;
