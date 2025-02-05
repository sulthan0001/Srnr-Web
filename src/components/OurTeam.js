import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import '../css/OurTeam.css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css';
import narasimhulu from "../assets/Narasimhulu D.svg";
import jagadesh from "../assets/Jagadeesh D.svg";
import sridhar from "../assets/Sridhar D.svg";
import raja from "../assets/Rajesh D.svg";
import jayaram from "../assets/Jayaram D.svg";
import raju from "../assets/Raju D.svg";
import satya from "../assets/Satya narayan D.svg";
import manasa from "../assets/Manasa D.svg";



const OurTeam = () => {

    const teamMembers = [
        { img:narasimhulu },
        { img:jagadesh },
        { img:sridhar },
        { img:raja },
        { img:jayaram },
        { img:raju },
        { img:satya },
        { img:manasa },
    ];
  return (
    <div className='team-carousel  mt-5'>
          <div className="text align-center"><h2 style={{textDecoration:"none", textAlign:"center"}}>Our Team</h2></div>
          <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3} 
        centeredSlides={true}
        spaceBetween={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        breakpoints={{
                       0: {
                         spaceBetween: 1,
                         slidesPerView: 1,
                       },
                       468: {
                         spaceBetween: 1,
                         slidesPerView: 1,
                       },
                       768: {
                        spaceBetween: 1,
                        slidesPerView: 3,
                      },
                      1024: {
                        spaceBetween: 1,
                        slidesPerView: 3,
                      },
                      1280: {
                        spaceBetween: 1,
                        slidesPerView: 3,
                      },
                    }}
        loop
        className="mySwiper"
      >
        {teamMembers.map((member, index) =>(
            <SwiperSlide key={index} className='swiper-slide ms-auto'>
                <div className="team-card" >
                    <img src={member.img} alt={member.name} className='img-fluid ' />
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default OurTeam


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "../assets/css/OurTeam.css"
// import "swiper/css";
// import "swiper/css/autoplay";
// import Narasimhulu from "../assets/images/Narasimhulu D.svg";
// import Sridhar from "../assets/images/Sridhar D.svg";
// import Rajesh from "../assets/images/Rajesh D.svg";
// import Satya from "../assets/images/Satya narayan D.svg";
// import Raju from "../assets/images/Raju D.svg";
// import RamaReddy from "../assets/images/Jayaram D.svg";
// import Manasa from "../assets/images/Manasa D.svg";
// import Jagadeesh from "../assets/images/Jagadeesh D.svg";

// const OurTeam = () => {
//   const teamMembers = [
//     { img: Narasimhulu },
//     { img: Jagadeesh },
//     { img: Sridhar },
//     { img: Rajesh },
//     { img: RamaReddy },
//     { img: Raju },
//     { img: Satya },
//     { img: Manasa },
//   ];

//   return (
//     <section className="pt-[7rem] pb-[2rem] bg-rose-100 teamcard">
//       <div className="xl:mx-auto max-w-6xl mx-[1.5rem]">
//         <h1 className="text-[3rem] font-bold mb-[2rem] text-center">
//           Our Team
//         </h1>
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           pagination={{ clickable: true }}
//           centeredSlides={true}
//           slidesPerView={3}
//           autoplay={{
//             delay: 3000,
//             stopOnLastSlide: false,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             0: {
//               spaceBetween: 20,
//               slidesPerView: 1,
//             },
//             468: {
//               spaceBetween: 30,
//               slidesPerView: 1,
//             },
//             768: {
//               spaceBetween: 40,
//               slidesPerView: 3,
//             },
//             1024: {
//               spaceBetween: 45,
//               slidesPerView: 3,
//             },
//             1280: {
//               spaceBetween: 50,
//               slidesPerView: 3,
//             },
//           }}
//           className="breakpoint"
//         >
//           {teamMembers.map((p, index) => (
//             <SwiperSlide key={index} className="swiper-silder">
//               <img src={p.img} alt={Team member ${index}} className="img-fluid" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;