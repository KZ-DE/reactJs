const Nav = (self) => {
  return (
    <div>
      <h1>Navigation Bar</h1>
      <h1>
        <ul>
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <a href=" ">Abaut</a>
          </li>
          <li>
            <a href=" ">Page</a>
          </li>
          <li>
            <a href=" ">{self.test}</a>
          </li>
          <li>
            <a href=" ">{self.navedn}</a>
          </li>
        </ul>
      </h1>
    </div>
  );
};

export default Nav;
