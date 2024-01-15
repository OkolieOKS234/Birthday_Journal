import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import "./index.css"


function App() {
  
  return (
    <>
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home/*" element={<Home />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
