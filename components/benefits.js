import Image from "next/image";
import React, { useState } from "react";
import Container from "./container";
import { useEffect } from "react";
import Speakers from "./Speakers";
import About from "./About";
const Benefits = (props) => {
  const { data } = props;
  console.log(props);
  const [confd,setconfd] = useState({"eowijf":"wlekfm"})
  useEffect(() => {
    const getData = async() => {
     try {
      // console.log(data.id);
       let headersList = {
         "Accept": "*/*",
         "Authorization": "X6jG3F"
        }
        
        let response = (props)?await fetch(`https://conference.cyclic.app/images/${props.data.id}`, { 
          method: "GET",
          headers: headersList
        }):"";
   
        let data = await response.json();
        setconfd(data[1]);
     } catch (error) {
      console.log(error);
     } 
    }
    props?getData():console.log("no");
    console.log(confd);
  }, [])
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2`}>
          <div style={{border:"2px solid"}}>
            <img src={data?data.logo:"https://v1.nitj.ac.in/images/slider/wrec01_92332.jpg"}/>
          </div>
        </div>
        <div
          className={`flex cards flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data?data.confName:""}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data?data.shortName:""}
              </p>
            </div>

            <div className="w-full mt-5">
              
            <ol class="border-l border-neutral-300 dark:border-neutral-500">
  {/* <!--First item--> */}
              <li>
                <div class="flex-start flex items-center pt-3">
                  <div
                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p class="text-sm text-neutral-500 dark:text-neutral-300">
                  {data?Date(data.confStartDate):""}
                  </p>
                </div>
                <div class="mb-6 ml-4 mt-2">
                  <h4 class="mb-1.5 text-xl font-semibold">Start At</h4>
                  
                </div>
              </li>

              {/* <!--Second item--> */}
              <li>
                <div class="flex-start flex items-center pt-2">
                  <div
                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p class="text-sm text-neutral-500 dark:text-neutral-300">
                  {data?Date(data.confEndDate):""}
                  </p>
                </div>
                <div class="mb-6 ml-4 mt-2">
                  <h4 class="mb-1.5 text-xl font-semibold">End At</h4>
                  
                </div>
              </li>

            </ol>
                
                  {<Speakers id = {data.confId} />}
                
                {data.aboutConf!='Not to be shown'?<Benefit key={props.id} title={"About"}>
                  {
                      <About about={data.aboutConf}/>
                  }
                </Benefit>:<p></p>}
           
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

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

export default Benefits;
