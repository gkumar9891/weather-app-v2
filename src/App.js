import CurrentLocation from "./components/CurrentLocation";
import SearchLocation from "./components/SearchLocation";

function App() {
  return (
<div className="dashboard">
  <div className="container">
    <div className="weather-box">
      <div className="row gx-0">
        <div className="col-lg-7">
          <CurrentLocation></CurrentLocation>
        </div>
        <div className="col-lg-5">
           <SearchLocation></SearchLocation>
        </div>
      </div>
    </div>
  </div>
</div>
)

}

export default App;
