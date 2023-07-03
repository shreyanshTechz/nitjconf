import { useState,useEffect } from "react";

const Awards = () =>{
  const [award,setaward] = useState([1,2,3,4]);
  useEffect(() => {
    const getData = async() => {
     try {
       let headersList = {
         "Accept": "*/*",
         "Authorization": "X6jG3F"
        }
        
        let response = await fetch("https://conference.cyclic.app/awards", { 
          method: "GET",
          headers: headersList
        });
        
        let data = await response.json();
        setaward(data); 
     } catch (error) {
      getData();
     } 
    }
    getData();
  }, [])

  const ListItems =()=> (award.map((e) =>
  <>
      <div className="mb-12 md:mb-0 award-card">
         <h5 className="mb-2 text-lg font-bold">{e.title1}</h5>
         <h6 className="mb-4 font-medium text-primary text-cyan-300 text-primary-800">
           {e.title2}
         </h6>
         <p className="mb-4">
          {e.description}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
             <path fill="currentColor"
               d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
           </svg>
         </p>
         <ul className="mb-0 flex justify-center">
           <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
               <path fill="orange"
                 d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
             </svg>
           </li>
           <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
               <path fill="orange"
                 d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
             </svg>
           </li>
           <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
               <path fill="currentColor"
                 d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
             </svg>
           </li>
           <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
               <path fill="currentColor"
                 d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
             </svg>
           </li>
           <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
               <path fill="currentColor"
                 d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
             </svg>
           </li>
         </ul>
       </div>
  </> 
));

    return(
<div id="awards" className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-1 text-3xl font-bold">Awards</h2>
        <h4 className="mb-12 font-bold">Upcoming Awards! Stay Tuned</h4>
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <ListItems/>
     
      
    </div>
  </section>
</div>
)
}
export default Awards;