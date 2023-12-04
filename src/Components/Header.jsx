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
                  <a href="#banner">Beranda</a>
                </li>
                <li>
                  <a href="#about">Tentang Kami</a>
                </li>
                <li>
                  <a href="#product">Produk & Layanan</a>
                </li>
              </ul>
            </nav>
            {/*End of Main Navigation*/}
            <div id="nav-trigger">
              <span></span>
            </div>
            <nav id="nav-mobile"></nav>
          </div>
        </div>
      </div>
      {/* Banner Content */}
      <div id="banner-content" className="row clearfix">
        <div className="col-38">
          <div className="section-heading">
            <h1>Selamat Datang!!</h1>
          </div>
        </div>
      </div>
      {/* <!--End of Row--> */}
      {/*End of Header*/}
    </header>
  );
};

export default Header;
