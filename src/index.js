import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
// ниже для прошлых версий сайта все было
// ReactDOM.render(
//   <App/>,
//   document.querySelector("#root")
// )

// ниже для библлиотеки Rect Router
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)