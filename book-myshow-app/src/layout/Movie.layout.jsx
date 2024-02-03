import React from 'react'

const MovieLayout = 
(Component) =>
({...props}) =>{
  return (
    <div><Component {...props} /></div>
  )
}

export default MovieLayout;