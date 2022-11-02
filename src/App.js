import "./App.css";
import "./style/landingPage.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SearchMovie from "./components/SearchMovie";
import TrendingText from "./components/TrendingText";

function App() {
  return (
    <div>
      <div className="navigation">
        <Navigation />
        <Intro />
      </div>
      <div className="searchMovie" id="search">
        <SearchMovie />
      </div>

      <div className="Trending" id="trending">
        <TrendingText />
        <Trending />
      </div>
    </div>
  );
}

export default App;
