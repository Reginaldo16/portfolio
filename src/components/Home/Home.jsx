import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const images = [
    "./public/main.png",
    "./public/about.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="w-full bg-black">
      <hr />
      <div className="max-w-7xl mx-auto py-36 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight">
              Desenvolvedor Full-Stack
            </h1>
            <p className="mt-6 text-lg text-justify">
              Desenvolvedor full stack com ampla experiência na criação de
              aplicações web escaláveis e responsivas. Sou apaixonado por
              transformar ideias em soluções práticas, utilizando tecnologias
              modernas para criar experiências que realmente impactam os
              usuários.
            </p>

            <div className="mt-8 mb-4 md:mb-0"> 
              <a
                href="https://github.com/Reginaldo16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                aria-label="GitHub"
              >
                Visite o meu Github
              </a>
            </div>
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0"> 
            <div
              className="w-full h-96 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
