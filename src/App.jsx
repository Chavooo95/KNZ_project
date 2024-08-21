import './App.css'
import MapImage from "./assets/images/initalMap.jpg"
import Logo from "./assets/images/logoKNZ.png"

function App() {


  return (
    <>
      <div className="flex justify-center">
        <img src={Logo} className="w-80 h-auto mt-60 hidden" alt="" />
        <img src={MapImage} className="" alt="" />
      </div>
    </>
  )
}

export default App
