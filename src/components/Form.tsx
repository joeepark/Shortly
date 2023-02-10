import React, { useContext, useState } from 'react';
import UrlContext from '../context/UrlContext';

interface UrlType {
  original_link: string;
  short_link: string;
}

interface UrlContextType {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  shortUrl: UrlType[];
}

function Form() {
  const { handleChange, handleSubmit, inputValue, shortUrl } =
    useContext<UrlContextType>(UrlContext);
  const [copied, setCopied] = React.useState<{ [index: number]: boolean }>({});

  const handleCopyClick = (index: number, shortLink: string) => {
    navigator.clipboard.writeText(shortLink);
    setCopied({ ...copied, [index]: true });
  };
  return (
    <section className="form--container--wrapper">
      <div className="form--container">
        <form className="form flex" onSubmit={handleSubmit}>
          <input
            type="url"
            required
            name="url"
            placeholder="Shorten a link here..."
            className="form--input"
            value={inputValue}
            onChange={handleChange}
          ></input>
          <button type="submit">Shorten it!</button>
        </form>
      </div>
      <div className="shortened-container">
        {shortUrl.map((url: UrlType, index: number) => (
          <div key={index} className="shortened-links flex">
            <div className="links flex">
              <span>{url.original_link}</span>
              <span>{url.short_link}</span>
            </div>
            <button
              className={copied[index] ? 'copiedz' : ''}
              onClick={() => handleCopyClick(index, url.short_link)}
            >
              {copied[index] ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Form;
