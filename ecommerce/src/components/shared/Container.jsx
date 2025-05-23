import React from 'react'

function Container(children, className) {
  return (
    <div className={`max-w-5xl mx-12 w-full mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
