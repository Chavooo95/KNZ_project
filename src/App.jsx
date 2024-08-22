import './App.css'
import Logo from "./assets/images/logoKNZ.png"
import Map from "./assets/images/H6LOA2E6_output_0.jpeg"

function App() {


  return (
    <div className="w-screen h-screen overflow-visible">
      <div className="flex flex-col justify-center items-center w-full h-full bg-gray-200">
        <img src={Map} alt="Description" className="object-contain w-full h-full" />
        <div className="w-screen h-screen">
        </div>
      </div>
    </div>
  )
}

export default App
