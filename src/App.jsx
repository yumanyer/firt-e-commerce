import { Navbar } from "./components/layout/Navbar";
import { FetchingDataContainer } from "./components/pages/fetchingData/FetchingDataContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

<<<<<<< HEAD
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ItemListContainer />
      <FetchingDataContainer />
    </>
  );
};
=======
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListConatainer/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}
>>>>>>> f1410adae9abad54230c49458d17b828e21bfb5a

export default App;
