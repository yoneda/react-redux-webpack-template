import React from "react";
import styles from "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>hello, react</p>
        <p className={styles.test}>my name is yoneda</p>
      </div>
    );
  }
}

export default App;
