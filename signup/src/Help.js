import React from 'react'
import { useNavigate } from "react-router-dom";

function Help() {
    const nevigate=useNavigate();
    function changehandler()
    {
nevigate('/help')
    }
  return (
    <div>
      <h1>hel us in diffculties</h1>
      <button onClick={changehandler}>go to win page</button>
    </div>
  )
}

export default Help
