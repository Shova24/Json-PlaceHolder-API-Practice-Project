import "antd/dist/antd.css";
import "./App.css";
import HeaderComponent from "./Component/HeaderComponent";
import AppRoutes from "./Utilities/Routes";

function App() {
  return (
    <>
      <HeaderComponent />
      <AppRoutes />
    </>
  );
}

export default App;
