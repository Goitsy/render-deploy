import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h1>Homepage</h1>} />
        <Route path="/product" element={<h1>Product you really want</h1>} />
      </Routes>
    </>
  );
}

export default App;
