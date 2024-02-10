// App.jsx
import React from "react";
import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
// import Navbar from "./components/layout/Navbar";
// import ItemListContainer from "./components/common/ItemCount/ItemCount";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ItemListContainer /> */}
      <ItemCountContainer stock={3} />
    </div>
  );
};

export default App;

