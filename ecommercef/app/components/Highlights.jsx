'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { SamsungVideo, AirpodsVideo } from '../utils';
import Image from "next/image";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
  }, []);

  const [videoSrc, setVideoSrc] = useState(SamsungVideo);
  const [videoSrc1, setVideoSrc1] = useState(AirpodsVideo);

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(SamsungVideo);
      setVideoSrc1(AirpodsVideo);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc-800">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="main-heading">Get the highlights:</h1>
        </div>

        {/* Conteneur pour les deux vidéos côte à côte */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Première vidéo (Samsung) */}
          <div className="flex-1">
            <p className="product-heading" style={{ 
              color: "rgb(168, 157, 91)",
              textShadow: "0 0 8px rgba(95, 20, 20, 0.329), 0 0 16px black",
              margin: "20px 0"
            }}>
              Samsung S24
            </p>
            <div className="w-full">
              <video className="pointer-events-none w-full" autoPlay muted playsInline key={videoSrc}>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Deuxième vidéo (Airpods) */}
          <div className="flex-1">
            <p className="product-heading" style={{ 
              color: "rgb(168, 157, 91)",
              textShadow: "0 0 8px rgba(95, 20, 20, 0.329), 0 0 16px black",
              margin: "20px 0"
            }}>
              Airpods
            </p>
            <div className="w-full">
              <video className="pointer-events-none w-full" autoPlay muted playsInline key={videoSrc1}>
                <source src={videoSrc1} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;