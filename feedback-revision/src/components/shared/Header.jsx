function Header() {
  return (
    // <h1 className="text-yellow-500 bg-purple-400">
    //   Header Component
    // </h1>
    <div className="header bg-green-700 h-50 text-white flex justify-between items-center">
      <div className="logo w-80 h-30">
        <a href="">
          <h1 className="text-center pt-10 text-4xl font-[500]">
            Feedback app
          </h1>
        </a>
      </div>
      <div className="navbar w-90">
        <ul className="flex justify-around h-10 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
