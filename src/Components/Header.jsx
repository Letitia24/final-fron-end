

const Header = ()=>  {
  return (
    <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
  <div id="header" className="nav-collapse">
    <div className="row clearfix">
      <div className="col-1">
        <h1>picelCraft</h1>
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
        <div id="nav-trigger"><span /></div>
        <nav id="nav-mobile" />
      </div>
    </div>
  </div>{/*End of Header*/}
  {/*Banner Content*/}
  <div id="banner-content" className="row clearfix">
    <div className="col-38">
      <div className="section-heading">
        <h1>welcome to picelCraft</h1>
        <h2>Jadikan setiap cetakan spesial, di mana kreativitas 
          bertemu dengan kualitas untuk memberikan sentuhan unik pada ide-ide Anda!</h2>
      </div>
    </div>
  </div>{/*End of Row*/}
</header>

  )
}

export default Header;