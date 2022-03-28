import Header from "./components/Layout/Header/Header";
import { Fragment } from "react";
import Meals from "../src/components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
