import React from 'react'
import List from './List.js'
import ReactDom from 'react-dom'


const App = ()=>{
  const Listitems = ['ajay','vijay','suresh','ramesh']

  return(
<div>
<List items={Listitems}/>
</div>
  )
};

ReactDom.render(<App/>,document.getElementById('root'));

