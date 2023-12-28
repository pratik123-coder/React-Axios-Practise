import React from 'react'

const Header = () => {
  return (
    <div className='h-8 flex bg-green-500 items-center justify-between'>
      <h2 className='ps-3'>Logo</h2>
      <div className='flex gap-4 pe-3'>
        <h4> About </h4>
        <h4> Products </h4>
        <h4> Courses </h4>
      </div>
    </div>
  )
}

export default Header