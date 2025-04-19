'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import CarouselItem from './CarouselItem'

const Carousel = () => {
  const [showDetail, setShowDetail] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const items = [
    { id: 1, img: '/images/images_carousel/img1.png' },
    { id: 2, img: '/images/images_carousel/img2.png' },
    { id: 3, img: '/images/images_carousel/img3.png' },
    { id: 4, img: '/images/images_carousel/img4.png' },
    { id: 5, img: '/images/images_carousel/img5.png' },
    { id: 6, img: '/images/images_carousel/img6.png' }
  ]

  const showSlider = useCallback((direction) => {
    setActiveIndex(prev => {
      if (direction === 'next') {
        return prev === items.length - 1 ? 0 : prev + 1
      } else {
        return prev === 0 ? items.length - 1 : prev - 1
      }
    })
  }, [items.length])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.classList.remove('next', 'prev')
    carousel.classList.add('transition-active')

    const timer = setTimeout(() => {
      carousel.classList.remove('transition-active')
    }, 500)

    return () => clearTimeout(timer)
  }, [activeIndex])

  return (
    <div 
      className="carousel" 
      ref={carouselRef}
      style={{ 
        position: 'relative', 
        height: '800px', 
        overflow: 'hidden', 
        marginTop: '-50px' 
      }}
    >
      <div 
        className="list" 
        style={{ 
          position: 'absolute', 
          width: '1140px', 
          maxWidth: '90%', 
          height: '80%', 
          left: '50%', 
          transform: 'translateX(-50%)' 
        }}
      >
        {items.map((item, index) => (
          <CarouselItem 
            key={item.id}
            img={item.img}
            position={index - activeIndex + 2}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
          />
        ))}
      </div>
      
      <div 
        className="arrows" 
        style={{ 
          position: 'absolute', 
          bottom: '10px', 
          width: '1140px', 
          maxWidth: '90%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          left: '50%', 
          transform: 'translateX(-50%)' 
        }}
      >
        <button 
          id="prev" 
          onClick={() => showSlider('prev')}
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            fontFamily: 'monospace', 
            border: '1px solid rgba(85, 85, 85, 0.5)', 
            fontSize: 'large', 
            bottom: '20%', 
            left: '10%',
            cursor: 'pointer'
          }}
        >
          &lt;
        </button>
        
        <button 
          id="next" 
          onClick={() => showSlider('next')}
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            fontFamily: 'monospace', 
            border: '1px solid rgba(85, 85, 85, 0.5)', 
            fontSize: 'large', 
            bottom: '20%', 
            right: '10%',
            cursor: 'pointer'
          }}
        >
          &gt;
        </button>
        
        <button 
          id="back" 
          onClick={() => setShowDetail(false)} 
          style={{ 
            position: 'absolute', 
            zIndex: '100', 
            bottom: '0%', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            border: 'none', 
            borderBottom: '1px solid #555', 
            fontFamily: 'Poppins', 
            fontWeight: 'bold', 
            letterSpacing: '3px', 
            backgroundColor: 'transparent', 
            padding: '10px',
            opacity: showDetail ? 1 : 0,
            pointerEvents: showDetail ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
            cursor: 'pointer'
          }}
        >
          See All ↗
        </button>
      </div>
      
      <style jsx>{`
        .carousel::before {
          width: 500px;
          height: 300px;
          content: '';
          background-image: linear-gradient(70deg, #DC422A, blue);
          position: absolute;
          z-index: -1;
          border-radius: 20% 30% 80% 10%;
          filter: blur(150px);
          top: 50%;
          left: 50%;
          transform: ${showDetail ? 'translate(-100%, -50%) rotate(90deg)' : 'translate(-10%, -50%)'};
          filter: ${showDetail ? 'blur(130px)' : 'blur(150px)'};
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        
        .carousel.showDetail #prev,
        .carousel.showDetail #next {
          opacity: 0;
          pointer-events: none;
        }
        
        .transition-active {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  )
}

export default Carousel