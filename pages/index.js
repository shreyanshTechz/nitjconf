import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { useState,useEffect } from "react";
import Video from "../components/video";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Awards from "../components/awards";
import Casourel from "../components/casourel";
import Announcements from "../components/announcements";
import Conf from "../components/conf";
import Comittee from "../components/comittee";

const App = () => {
  const [spon,setspon] = useState([]);
  const [conf,setconf] = useState([]);
  // useEffect(() => {
  //   const getData = async() => {
  //    try {
  //     // console.log("times");
  //      let headersList = {
  //        "Accept": "*/*",
  //        "Authorization": "X6jG3F"
  //       }
        
  //       let response = await fetch("https://conference.cyclic.app/sponsors", { 
  //         method: "GET",
  //         headers: headersList
  //       });
  //       let response2 = await fetch("https://conference.cyclic.app/home", { 
  //         method: "GET",
  //         headers: headersList
  //       });
   
  //       let data = await response.json();
  //       let data2 = await response2.json();
  //       console.log(data2);
  //       setspon(data);  setconf(data2);
  //       console.log(data);
  //    } catch (error) {
  //     // getData();
  //    } 
  //   }
  //   getData();
  // }, [])

   const Sponsers =()=> (
     <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
     {spon.map((e) =>
             (<div className="pt-2 text-gray-400 dark:text-gray-400">
               <img className="sponimg" src={e.logo} width="217" height="217"/>
             </div>)
     )}
   </div>
   );
 


  return (
    
    <>

      <Head>
        <title>NTJ Conference</title>
        <meta
          name="description"
          content="Nitj Confernce Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <Hero />
      <SectionTitle
        pretitle="We are Live"
        title="Glimpse Of Past Conference">
        The registrations for the conference of the year are live. Book your slots already as these are limited. With the renowned speakers being a part of this, this edition in India will be at an another level.
      </SectionTitle>
      <Casourel/>

      <SectionTitle className='my-5'
        pretitle=""
        title="SPONSORS">
       
      </SectionTitle>
          <Sponsers/>
          <hr></hr>
          <SectionTitle
        pretitle="" title="UPCOMING CONFERENCES">
      </SectionTitle>

      <Conf conf ={conf}/>
      
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <Awards/>
      <SectionTitle
        pretitle="Announcements Section"
        title="Get updated with the latest">
      </SectionTitle>



      <Announcements/>
      <SectionTitle
        pretitle="ICSCCC 2023"
        title="3rd International Conference on Security">
        Watch the latest Video on Inaguartion of Conference on 3rd International Conference on Secure Cyber Computing and Communications (ICSCCC 2023).
      </SectionTitle>
      <Video />
      
      <SectionTitle pretitle="Comittee Members" title="Meet Our Comittee Members">
       
      </SectionTitle>
      
      <Comittee/>
      <Footer />
      <PopupWidget />
      
    </>
  );
}

export default App;
