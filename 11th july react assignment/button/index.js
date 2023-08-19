import React from 'react'
import Button from './Button.js'
import ReactDom from 'react-dom'

const handleClick=()=>{
  console.log("button clcked")
}

const App = ()=>{
  return(
<div>
<h1>Button example</h1>
    <Button onClick={handleClick} text="Click me and check console" />
</div>
  )
};

ReactDom.render(<App/>,document.getElementById('root'));