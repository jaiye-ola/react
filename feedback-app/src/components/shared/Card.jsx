import React from 'react'

function Card({ children, className }) {
  return (
    <div className={`card bg-purple-400 p-5 rounded-md text-semibold ${className}`}>
    {children}
    </div>
  )
}

export default Card
