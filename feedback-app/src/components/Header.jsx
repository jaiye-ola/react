import React from 'react'

function Header() {
  return (
    <div>
      <div className='bg-purple-400 flex flex-wrap justify-around items-center p-5 text-white mb-5 text-semibold'>
        <div>
          <h1>Feedback-App</h1>
        </div>
        <div>
          <ul className='flex gap-2'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header
