import React from 'react'
import Album from './Album.jsx'

function Discography (props) {
  // eslint-disable-next-line no-console
  // console.log('Logging props in Discography:', props)

  return (
    <div className="discography">
      <Album albumClass="1" />
      <Album albumClass="2" />
      <Album albumClass="3" />
      <Album albumClass="4" />
    </div>
  )
}

export default Discography