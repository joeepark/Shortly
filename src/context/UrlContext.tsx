import { createContext, useEffect, useState } from 'react';

interface UrlContextProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  inputValue: string;
  shortUrl: { original_link: string; short_link: string }[];
}

const UrlContext = createContext<UrlContextProps>({
  handleChange: () => {},
  handleSubmit: () => {},
  inputValue: '',
  shortUrl: [],
});

interface UrlProviderProps {
  children: React.ReactNode;
}

export const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
  const [url, setUrl] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [shortUrl, setShortUrl] = useState<Array<{ original_link: string; short_link: string }>>(
    []
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
    setUrl(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const response = await data.json();
        setShortUrl([
          ...shortUrl,
          {
            original_link: response.result.original_link,
            short_link: response.result.full_short_link,
          },
        ]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    setInputValue('');
  };

  return (
    <UrlContext.Provider value={{ handleChange, handleSubmit, inputValue, shortUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContext;
