import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/logo_nitj.png";
import SectionTitle from "./sectionTitle";
import { useEffect, useState } from "react";
// import im from '../public/img/'
const Hero = () => {
  return (
    <>
      <Container className="mb-32 flex flex-wrap my-auto hero">

        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome To NITJ Conference Website
              
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We at NITJ aims to provide the best out of all conference happening in India. Our speakers are the industry level Experts that bring valuable things to the table.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/more"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Recent Confernce
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="417"
              height="417"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <hr></hr>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Successfully <span className="text-indigo-600">organised</span>{" "}
            +100 conferences worldwide
          </div>
         
        </div>
      </Container>
    </>
  );
}


export default Hero;