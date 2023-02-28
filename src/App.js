import "./App.scss";

import Navbar from "./components/Navbar";
import Routers from "./components/Routers";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routers />
    </div>
  );
};

export default App;
