import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      componnets: <LightDarkMode />,
    },
    {
      key: "showAccordian",
      componnets: <Accordian />,
    },

    {
      key: "showRandomColorGenerator",
      componnets: <RandomColor />,
    },
    {
      key: "showTicTacToeBoard",
      componnets: <TicTacToe />,
    },
    {
      key: "showTreeView",
      componnets: <TreeView />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please Wait</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem, index) =>
        checkEnabledFlags(componentItem.key) ? componentItem.componnets : null
      )}
    </div>
  );
}
