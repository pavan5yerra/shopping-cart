import "./styles.css";
import { Home } from "./containers/home/home";
import { Signup } from "./containers/singup/singup";
import { Navbar } from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const navData = [
  { name: "Home", path: "/home" },
  { name: "Login", path: "#" },
  { name: "SingUp", path: "/signup" }
];
const navDatalogged = [
  { name: "Home", path: "/home" },
  { name: "MyOrders", path: "#" },
  { name: "Cart", path: "#" },
  { name: "MyAccount", path: "#" }
];
export default function App() {
  console.log("hello");
  return (
    <Router>
      <div className="App">
        <Navbar title={"P5 Books"} navData={false ? navDatalogged : navData} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
