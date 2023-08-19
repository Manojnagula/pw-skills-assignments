import React from 'react'
import Header from './Header'
import ReactDom from 'react-dom'

const title = "pw-skills"

const App = ()=>{

  return(
<div>
<Header title={title}/></div>
  )
};

ReactDom.render(<App/>,document.getElementById('root'));

