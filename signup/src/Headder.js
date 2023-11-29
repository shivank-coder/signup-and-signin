import React from 'react'
import { Outlet } from 'react-router-dom'

function Headder() {
  return (
    <div>
        <Outlet />
      <h1>this is an home page</h1>
    </div>
  )
}

export default Headder
