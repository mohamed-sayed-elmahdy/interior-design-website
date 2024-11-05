// 'use client'
// import React, {useState, useRef, useEffect,} from 'react'
// import gallery1 from '../../assets/gallery/gallery-1.jpeg'
// import gallery2 from '../../assets/gallery/gallery-2.jpeg'
// import gallery3 from '../../assets/gallery/gallery-3.jpeg'
// import gallery4 from '../../assets/gallery/gallery-4.jpeg'
// import gallery5 from '../../assets/gallery/gallery-5.jpeg'
// import gallery6 from '../../assets/gallery/gallery-6.jpeg'
// import gallery7 from '../../assets/gallery/gallery-7.jpeg'
// import gallery8 from '../../assets/gallery/gallery-8.jpeg'
// import gallery9 from '../../assets/gallery/gallery-9.jpeg'
// import gallery10 from '../../assets/gallery/gallery-10.jpeg'
// import gallery11 from '../../assets/gallery/gallery-11.jpeg'
// import gallery12 from '../../assets/gallery/gallery-12.jpeg'
// import gallery13 from '../../assets/gallery/gallery-3.jpeg'
// import gallery14 from '../../assets/gallery/gallery-14.jpeg'
// import Image from 'next/image'
// import './gallery.styles.scss'
// import MouseScroll from '@/app/custom/MouseScroll'
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.compat.css";

// function Gallery() {
//   // const galleryRef = useRef()
//   // const scene = new THREE.Scene()
//   // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//   // const renderItem = new THREE.WebGLRenderer({
//   //   canvas: document.querySelector('#bg')
//   // })
//   // renderItem.setPixelRatio(window.devicePixelRatio)
//   // renderItem.setSize(window.innerWidth, window.innerHeight)
//   // camera.position.setZ(50)
//   // camera.renderItem(scene, camera)
//   // const ambl = new THREE.AmbientLight(0XFFFFFF)
//   // scene.add(ambl)
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     const { clientX, clientY, currentTarget } = event;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     const xRotation = ((clientY / height) - 0.5) * 30;
//     const yRotation = ((clientX / width) - 0.5) * 30;
//     setRotation({ x: xRotation, y: yRotation });
//   };

//   return (
//     <div className='relative overflow-hidden md:mb-12'>
//      <div 
//        className='gallery'
//        style={{
//         transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
//       }}
//        >
//       <ScrollAnimation animateIn='backInDown' duration={1.2} className="gallery__item gallery__item--1">
//         <Image src={gallery1} alt="Gallery" className="gallery__img"/>  
//       </ScrollAnimation>

//       {/* <ScrollAnimation animateIn='backInDown' duration={1.2} className="gallery__item gallery__item--2"> 
//         <Image src={gallery2} alt="Gallery" className="gallery__img"/>
//       </ScrollAnimation> */}

//       <ScrollAnimation animateIn='backInDown' duration={1.2} className="gallery__item gallery__item--3">
//         <Image src={gallery3} alt="Gallery" className="gallery__img"/>
//       </ScrollAnimation>

//       {/* <figure className="gallery__item gallery__item--4">
//         <Image src={gallery4} alt="Gallery" className="gallery__img"/>
//       </figure> */}
//       <ScrollAnimation animateIn='backInLeft' duration={1.8} className="gallery__item gallery__item--5">
//         <Image src={gallery5} alt="Gallery" className="gallery__img"/>
//       </ScrollAnimation>
//       {/* <figure className="gallery__item gallery__item--6">
//         <Image src={gallery6} alt="Gallery" className="gallery__img"/>
//       </figure> */}
//       {/* 
//       <figure className="gallery__item gallery__item--7">
//         <Image src={gallery7} alt="Gallery" className="gallery__img"/>
//       </figure> */}

//       {/* <figure className="gallery__item gallery__item--8">
//         <Image src={gallery8} alt="Gallery" className="gallery__img"/>
//       </figure> */}
//       <ScrollAnimation animateIn='backInRight' duration={1.8} className="gallery__item gallery__item--9">
//         <Image src={gallery9} alt="Gallery" className="gallery__img"/>
//       </ScrollAnimation>


//       {/* <figure className="gallery__item gallery__item--10">
//         <Image src={gallery10} alt="Gallery" className="gallery__img"/>
//       </figure> */}
      
//       {/* <figure className="gallery__item gallery__item--11">
       
//       </figure> */}

//       {/* <ScrollAnimation animateIn='backInUp' duration={1.2} className="gallery__item gallery__item--12">
//         <Image src={gallery12} alt="Gallery" className="gallery__img"/>
//       </ScrollAnimation> */}

//       <ScrollAnimation animateIn='backInUp' duration={1.2} className="gallery__item gallery__item--13">
//         <Image src={gallery12} alt="Gallery" className="gallery__img"/>
//       </ScrollAnimation>

//       <figure className="gallery__item gallery__item--14">
//         <Image src={gallery14} alt="Gallery" className="gallery__img"/>
//       </figure>
    
//      </div>
//      <div className='absolute top-40 left-[25%] md:top-2/4 md:left-40 lg:left-[420px]'>
//        <h1 className='font-bold text-2xl md:text-4xl'>@sh.dezigns</h1>
//      </div>
//      {/* <MouseScroll/> */}
//     </div> 
//   )
// }

// export default Gallery
