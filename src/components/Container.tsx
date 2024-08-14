import React from 'react'


type childrenType = {
    children: React.ReactNode
}

const Container = ({ children } : childrenType) => {
  return (
    <div className='max-w-[1200px] flex flex-col items-center justify-between h-screen mx-auto px-6'>{children}</div>
  )
}

export default Container