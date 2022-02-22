const Items = ({ characters, filterItem }) => {
  return (
    <div className="all__btn">
      {characters.map((character, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn"
            onClick={() => filterItem(character)}
          >
            {character}
          </button>
        );
      })}
    </div>
  );
};

export default Items;
