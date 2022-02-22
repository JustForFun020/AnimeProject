const Item = ({ items, handleShow }) => {
  return (
    <div className="items">
      {items.map((item) => {
        const { id, name, img } = item;
        return (
          <div key={id} className="item" onClick={() => handleShow(id)}>
            <h4 className="item--name">{name}</h4>
            <img className="photo" src={img} alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default Item;
