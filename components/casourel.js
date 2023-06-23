import React from 'react'
import $ from 'jquery'
import { useEffect } from 'react';
export default function Casourel() {
    const data = {1:"https://v1.nitj.ac.in/images/slider/wrec01_92332.jpg",2:"https://v1.nitj.ac.in/nitj_files/links/WhatsApp_Image_2023-06-09_at_1_80363.jpg",3:"https://v1.nitj.ac.in/nitj_files/links/1_57232.JPG",4:"https://www.nitj.ac.in/images/slider/HACKOMOL_4_50858.png",5:"https://www.nitj.ac.in/images/slider/GIAN_22917.JPG",6:"https://www.nitj.ac.in/images/slider/0_12433.JPG"};
    const navigation = Object.keys(data);
  useEffect(() => {
    var cont=1;
    
        function loopSlider(){
        var xx= setInterval(function(){
                const first = "#slider" + cont;
                cont++;
                if(cont>Object.keys(data).length) cont = 1;
                const second = "#slider" + cont;
                    $(first).fadeOut(400);
                    $(second).delay(400).fadeIn(400);
                    console.log("dd");

            },8000);

        }

        // navigation.forEach(element => {
        //     $("#slider-"+element).hide();
        // });
            loopSlider();  

  
  }, [])
  

  return (
    <div>
      <div className="sliderAx h-auto">
      {navigation.map((item, index) => (
        <div id={`slider${item}`} className="hidden container slider-cont mx-auto">
        <div className="bg-cover bg-center slider-bg h-auto text-white py-24 px-10" style={{backgroundPosition:"top", backgroundImage: `url(${data[item]})`}}>
       <div className="md:w-1/2">
        {/* <p className="font-bold text-sm uppercase">Glimpse OF PAST CONFERNCE</p> */}
        {/* <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a> */}
        </div>  
    </div> 
      
      </div>
      ))};
      

      
    </div>
    </div>
  )
}
