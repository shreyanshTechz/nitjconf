import React from 'react'
import { useState,useEffect } from 'react';
import Testimonials from './testimonials';
import Image from "next/image";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
export default function Comittee() {
    const [data,setdata] = useState([]);
  useEffect(() => {
    const getData = async() => {
     try {
      // console.log("times");
       let headersList = {
         "Accept": "*/*",
         "Authorization": "X6jG3F"
        }
        
        let response = await fetch("https://conference.cyclic.app/committees", { 
          method: "GET",
          headers: headersList
        });
        
        let d = await response.json();
       setdata(d);
     } catch (error) {
      // getData();
     } 
    }
    getData();
  }, [])
  return (

<Container>
      <div id='com' className="grid gap-10 lg:grid-cols-2 xl:grid-cols-5">
      {data.map((ele)=>(
     <div class="max-w-xs">
     <div class="cards rounded-lg py-3">
         <div class="photo-wrapper p-2">
             <img class="w-32 h-32 rounded-full mx-auto" src={ele.ImgLink} alt={ele.ImgLink}/>
         </div>
         <div class="p-2">
             <h3 class="text-center text-xlfont-medium leading-8">{ele.Name}</h3>
             <div class="text-center text-xs font-semibold">
                 <p>{ele.Type}</p>
             </div>
             <div class="text-center text-xs font-semibold">
                 <p>{ele.Designation}</p>
             </div>
 
             <div class="text-center my-3">
                 <a class="text-xs italic hover:underline hover:text-indigo-600 font-medium" href={ele.ProfileLink}>View Profile</a>
             </div>
 
         </div>
     </div>
 </div>
))}
</div>

    </Container>
      

  )
}

