import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="flex justify-center w-100 h-40 mt-4">
        <GoogleMap />
      </div>
      
    </div>
  );
}

export default App;
