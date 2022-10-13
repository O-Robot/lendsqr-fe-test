import {BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import "./styles/style.scss"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/users' element={<User />} />
      <Route exact path='/users/:id' element={<UserDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
