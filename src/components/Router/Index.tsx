import React from 'react'

const Router = ({path , Component} : {path : string , Component : any}) => {

    const [currentPathname, setCurrentPathname] = React.useState(window.location.pathname)
  return path === currentPathname ? Component() : null
}

export default Router