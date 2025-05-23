import { CiSearch, CiUser, CiShoppingCart } from 'react-icons/ci';

function Header() {
  return (
    <div className='header bg-[#0B4F6C] flex flex-wrap items-center justify-around text-white font-serif gap-2'>
      <div className="menu">
        <ul className='flex flex-wrap items-center justify-around gap-2'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">FAQ</a></li>
        </ul>
      </div>
      <div className="logo">
        <h2><a href="">Venus</a></h2>
      </div>
      <div className="search flex items-center justify-around gap-3 ">
        <div className="flex items-center justify-center gap-3">
          <span><CiSearch /></span>
          <input type="text" name="" className='border-none outline-none p-2' placeholder='search for anything' id="" />
        </div>
        <div className="flex flex-gap">
          <li><CiUser size={24}/></li>
          <li><CiShoppingCart size={24}/></li>
        </div>
      </div>
    </div>
  )
}

export default Header
