import Carousel from "./_component/Carousel";
import Header from "./_component/Header";
import { useEffect } from "react";

export default function HomePage() {
 useEffect(()=>{
  window.addEventListener('scroll', function() {
    let navbar = document.querySelector('header');
    if (window.scrollY > 0) { 
        navbar?.classList.add('fixed-top');
    } else { 
        navbar?.classList.remove('fixed-top');
    }
});

 },[])
  return (
    <div>
      
      <Header/>
      <Carousel/>
    </div>
  )
}
