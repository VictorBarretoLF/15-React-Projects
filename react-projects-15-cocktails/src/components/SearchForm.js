import React, { useEffect, useRef } from "react";

const SearchForm = ({ setSearch }) => {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={formRef}
            onChange={onChangeHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
