import React from 'react'
import Treding from '../components/treding'
import Popular from '../components/popular'
import Rated from '../components/top_rated'

function Tv() {
  return (
    <div className="flex flex-col h-fit">
      <Treding />
      <Popular/>
      <Rated/>
    </div>
  )
}

export default Tv