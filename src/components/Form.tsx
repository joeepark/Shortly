import React, { useContext } from 'react';
import UrlContext from '../context/UrlContext';

function Form() {
  const { handleChange, handleSubmit, inputValue, shortUrl } = useContext(UrlContext);

  return (
    <div className="form--container--outside">
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
      <div className="shortened-links">
        {shortUrl.forEach((url) => {
          console.log(url);
        })}
      </div>
    </div>
  );
}
export default Form;
