import React from 'react'
import Treding from '../components/treding'
import Popular from '../components/popular'

function Tv() {
  return (
    <div className="flex flex-col h-fit">
      <Treding />
      <Popular/>
    </div>
  )
}

export default Tv