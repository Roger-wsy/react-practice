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
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

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
      {/* <SearchAutoComplete /> */}

      {/* project 15 */}
      {/* <TicTacToe /> */}

      {/* project 16 */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* project 17 */}
      {/* <UseFetchHookTest /> */}

      {/* project 18 */}
      {/* <UseOnclickOutsideTest /> */}

      {/* project 19 */}
      {/* <UseWindowResizeTest /> */}

      {/* project 20 */}
      {/* <ScrollToTopAndBottom /> */}

      {/* project 21 */}
      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
    </div>
  );
}

export default App;
