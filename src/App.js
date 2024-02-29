import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import sideMenu from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import Tabtest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileLoader from "./components/github-profile-finder";
import { SearchAutoComplete } from "./components/search-autocomplete-with-api";

function App() {
  return (
    <div className="App">
      {/* project 1 */}
      {/* <Accordian /> */}

      {/* project 2 */}
      {/* <RandomColor /> */}

      {/* project 3 */}
      {/* <StarRating numOfStars={10}/> */}

      {/* project 4 */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={'10'}/> */}

      {/* project 5 */}
      {/* <LoadMoreData /> */}

      {/* project 6 */}
      {/* <TreeView menus={sideMenu} /> */}

      {/* project 7 */}
      {/* <QRCodeGenerator /> */}

      {/* project 8 */}
      {/* <LightDarkMode /> */}

      {/* project 9 */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* project 10 */}
      {/* <LightDarkMode /> */}

      {/* project 11 */}
      {/* <Tabtest /> */}

      {/* project 12 */}
      {/* <ModalTest /> */}

      {/* project 13 */}
      {/* <GithubProfileLoader /> */}

      {/* project 14 */}
      <SearchAutoComplete />
    </div>
  );
}

export default App;
