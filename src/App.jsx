import './App.css';
import Logo from "./assets/images/logoKNZ.png";
import Map from "./assets/images/H6LOA2E6_output_0.jpeg";

function App() {

  //const currentWidth = imgElement.clientWidth;
  //const currentHeight = imgElement.clientHeight;

  return (
    <div className="w-screen h-screen overflow-visible">
      <div className="flex flex-col items-center w-full h-full">
        <img
          src={Map}
          className="object-contain w-full h-full absolute -z-20"
          alt="Map"
        />
        
        
        <div className="grid grid-cols-3 z-20 bg-red-400">
          <div className="bg-yellow-300"><p>s</p></div>
          <div></div>
          <div></div>

          <div></div>
          <div>
            <img
              src={Logo}
              className="w-[8vw] h-auto absolute -z-20 hidden"
              alt="Logo"
            />
          </div>
          <div></div>
        </div>
        <div className="w-screen h-screen"></div>
      </div>
    </div>
  );
}

export default App;
