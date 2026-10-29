import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import ExperimentalFeaturesBanner from "./components/ExperimentalFeaturesBanner/ExperimentalFeaturesBanner";

function RootLayout() {
  return (
    <div className="App">
      <Header />
      <ExperimentalFeaturesBanner />
      <main className="App-content">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
