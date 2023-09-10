import React ,{useState}from 'react'
// import PropTypes from 'prop-types'

function ProUse(props) {
  const [text, settext]= useState(0);
  const incre=(e)=>{
    e=parseInt(text);
    settext(e+1);
  };
  const decre=(e)=>{
    e=parseInt(text);
    settext(e-1);
  };
  const chnge=(ev)=>{settext(ev.target.value);
  };
  return (
    <div>
      <button onClick={incre} style={{margin:'50px' ,width:'4rem'}}>increment</button>
      <input onChange={chnge}  value={text} />
      <button onClick={decre} style={{margin:'50px' ,width:'4rem'}}>decerment</button>
      </div>
  )
}


export default ProUse

