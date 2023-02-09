import { createContext, useEffect, useState } from 'react';

const UrlContext = createContext<{ url: string }>({
  url: '',
});

export const UrlProvider = ({ children }: any) => {
  const [url, setUrl] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [shortUrl, setShortUrl] = useState([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
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
