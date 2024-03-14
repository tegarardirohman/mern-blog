import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Project from "./pages/Project"

function App() {

  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/signin" element={<SignIn /> } />
        <Route path="/signup" element={<SignUp /> } />
        <Route path="/project" element={ <Project /> } />
      </Routes>
    </BrowseRouter>
  )
}

export default App
