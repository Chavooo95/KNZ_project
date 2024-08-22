import { useRef, useEffect, useState } from 'react';
import './App.css';
import Map from "./assets/images/H6LOA2E6_output_0.jpeg";
import Logo from "./assets/images/logoKNZ.png"
import Biografia from "./assets/images/biografia.png"
import Colaboraciones from "./assets/images/colaboraciones.png"
import Decoracion from "./assets/images/decoracion.png"
import PuestaEscena from "./assets/images/puesta_en_escena.png"
import TituloVestuarioEscenico from "./assets/images/titulo_vestuario_escenico.png"

function App() {
  const mapRef = useRef(null);
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = () => {
    if (mapRef.current) {
      setMapDimensions({
        width: mapRef.current.clientWidth,
        height: mapRef.current.clientHeight,
      });
    }
  };

  useEffect(() => {
    updateDimensions(); // Update dimensions after first render

    // Optional: add a resize event listener to update dimensions if window is resized
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-visible">
      <div className="flex flex-col items-center w-full h-full relative">
        <img
          src={Map}
          ref={mapRef}
          className="object-contain w-auto h-full absolute -z-20"
          alt="Map"
          onLoad={updateDimensions} // Update dimensions when image is fully loaded
        />
        
        {/* The div overlay with correct inline styling */}
        <div
          className="grid grid-cols-3"
          style={{
            width: `${mapDimensions.width}px`,
            height: `${mapDimensions.height}px`,
            top: 0,
            left: 0,
          }}
        >
          <div className="">
            <img src={Biografia} className="w-[15vw] relative top-[5%] left-[45%] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="" />
          </div>

          <div className="">
            <img src={TituloVestuarioEscenico} className="w-[15vw] relative top-[30%] left-[15%] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="" />
          </div>

          <div className="">
            <img src={PuestaEscena} className="w-[15vw] relative top-[0%] left-[-15%] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="" />
          </div>

          <div className="">
            <img src={Colaboraciones} className="w-[15vw] relative top-[0%] left-[65%] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="" />
          </div>

          <div className="">
            <img src={Logo} className="w-[8vw] relative top-[60%] left-[35%]" alt="" />
          </div>

          <div className="">
            <img src={Decoracion} className="w-[15vw] relative top-[0%] left-[-10%] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" alt="" />
          </div>
          
        </div>
      </div>

      {/* Display the dimensions below */}
      <div>
        <p>Map width: {mapDimensions.width}px</p>
        <p>Map height: {mapDimensions.height}px</p>
      </div>
    </div>
  );
}

export default App;
