import React from 'react'

const DefaultLayout = 
(Component) =>
({...props}) => {
  return (
    <div>
        <Navbar />
        <Component {...props} /></div>
  )
}

export default DefaultLayout