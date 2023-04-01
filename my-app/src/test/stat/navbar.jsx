import "./index.css";

const Nav = ({ navbar, geterpage }) => {
  // unutk mamnggilnya bisa hanya menggunakan nama propertinya saja tampa melakukan self.<nama prop
  return (
    <div>
      <h1>Navigation Bar</h1>
      <h1>
        <ul>
          <li>
            <a href=" " style={{ color: "darkblue" }}>
              {/* menggunakan css inline */}
              Home
            </a>
          </li>
          <li>
            <a href=" ">Abaut</a>
          </li>
          <li>
            <a href=" ">{geterpage}</a>
          </li>
          <li>
            <a href=" ">{navbar}</a>
          </li>
          {/* <li>
            <a href=" ">{self.navedn}</a>
          </li> */}
        </ul>
      </h1>
    </div>
  );
};

export default Nav;
