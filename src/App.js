import React from "react";
import styles from "./App.css";

// emotion を使う場合
/** @jsx jsx */
import {jsx} from "@emotion/core";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>hello, react</p>
        <p className={styles.test}>my name is yoneda</p>
        <p css={{color:"hotpink"}}>use emotion!</p>
      </div>
    );
  }
}

export default App;
