const Header = () => {
  return (
    <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
      <div id="header" className="nav-collapse">
        <div className="row clearfix">
          <div className="col-1">
            <h1>pixelCraft</h1>
            {/*Main Navigation*/}
            <nav id="nav-main">
              <ul>
                <li>
                  <a href="#banner">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#gallery">product</a>
                </li>
              </ul>
            </nav>
            {/*End of Main Navigation*/}
            <div id="nav-trigger">
              <span />
            </div>
            <nav id="nav-mobile" />
          </div>
        </div>
      </div>
      {/*End of Header*/}
    </header>
  );
};

export default Header;
