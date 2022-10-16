import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./context/Context";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import "./styles/style.scss";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<User />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
