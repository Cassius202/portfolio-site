import React from 'react'

const Background = () => {
  return (
    <div className='background absolute w-screen overflow-hidden h-screen invisible dark:visible dark:opacity-15'>
      <div>
        <div className='blur-[100px]'>
          <div className='absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob dark:bg-purple-700'></div>
          <div className='absolute top-32 -right-32 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob dark:bg-purple-700'></div>
          <div className='absolute top-65 left-1/4 size-35 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob dark:bg-rose-900'></div>
        </div>
      </div>
    </div>
  )
}

export default Background