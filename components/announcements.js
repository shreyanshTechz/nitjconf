import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import $ from 'jquery'
import Container from './container'
import x from '../public/img/poil.png'
import SectionTitle from './sectionTitle'
export default function Announcements() {
  const [award,setaward] = useState([1,2,3,4]);
  useEffect(() => {
    const getData = async() => {
      try {
        let headersList = {
          "Accept": "*/*",
          "Authorization": "X6jG3F"
         }
         
         let response = await fetch("https://conference.cyclic.app/announcement", { 
           method: "GET",
           headers: headersList
         });
         
         let data = await response.json();
         setaward(data);
      } catch (error) {
        // getData();
      }
     
       
    }
      getData();
      // console.log(award);
  }, [])

  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">

      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <Image
            src={x}
            width="421"
            height="421"
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"

          />
        </div>
      </div>


      <div id='scroll-container' className="flex items-center justify-center w-full lg:w-1/2">
        <div id="scroll-text">
          {award.map((e)=>
          <SectionTitle
          pretitle={e.title}
          title = {e.title}
           
          >{e.description}</SectionTitle>
          )}
        </div>
      </div>
    </Container>
  )
}
