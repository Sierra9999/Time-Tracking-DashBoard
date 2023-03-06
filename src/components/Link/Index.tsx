import React from 'react'

const Link = ({to, displayText}: {to : string, displayText : string}) => {
  return (
    <a href={to} >{displayText}</a>
  )
}

export default Link