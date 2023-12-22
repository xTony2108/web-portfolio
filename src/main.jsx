import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faLinkedin,
  faGithub,
  faCode,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNode,
  faStar,
  regularStar
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
