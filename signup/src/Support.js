import React from 'react'
import { useNavigate } from "react-router-dom";

function Support() {
    const nevigate=useNavigate();

    function changehandler()
    {
        nevigate('/win')
    }
    function backhandler()
    {
        nevigate(-1);
    }
  return (
    <div>
      <h1>please support us </h1>
      <button onClick={changehandler}>Go to help page</button>
      <button onClick={backhandler}>go to back page</button>
    </div>
  )
}

export default Support
