function Form() {
  return (
    <div className="form--container--outside">
      <div className="form--container">
        <form className="form flex">
          <input
            type="url"
            required
            name="url"
            placeholder="Shorten a link here..."
            className="form--input"
          ></input>
          <button type="submit">Shorten it!</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
