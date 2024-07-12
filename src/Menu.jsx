const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((item) => {
        return (
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
