import React from 'react'
import Benefits from './benefits';
export default function Conf(props) {
    console.log(props.conf);
  return (
    <div className='container'>
      {props?props.conf?(
       <p>
        {props.conf.map(element => (
       <Benefits data = {element}/>)
       )}</p> 
      ):<p></p>:<p></p>}
    </div>
  )
}
