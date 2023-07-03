import React from 'react'
import { useState,useEffect } from 'react';
export default function Speakers(props) {
    console.log(props.id);
    const [confd,setconfd] = useState(null)
  useEffect(() => {
    const getData = async() => {
     try {
      // console.log(data.id);
       let headersList = {
         "Accept": "*/*",
         "Authorization": "X6jG3F"
        }
        
        let response = (props)?await fetch(`https://conference.cyclic.app/speakers/conference/${props.id}`, { 
          method: "GET",
          headers: headersList
        }):"";
   
        let data = await response.json();
        setconfd(data);
        console.log(confd);
     } catch (error) {
      console.log(error);
     } 
    }
    props?getData():console.log("no");
    console.log(confd);
  }, [])
  return (
    <div>
      {confd?confd.length?(<Benefit key={props.id} title={"Speakers"}>
      {confd.map(element =>(element.Name + ", "))}
      </Benefit>):<p></p>:<p></p>}
    </div>
  )
}


function Benefit(props) {
    return (
      <>
        <div className="flex items-start mt-8 space-x-3">
          {/* <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 "> */}
            {/* {React.cloneElement(props.icon, {
              className: "w-7 h-7 text-indigo-50",
            })} */}
          {/* </div> */}
          <div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              {props.title}
            </h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {props.children}
            </p>
          </div>
        </div>
      </>
    );
  }