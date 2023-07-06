import appLogo from "../assests/images/appLogo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo" src={appLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
