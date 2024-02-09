import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretLeft,
  faCaretRight,
  faCode,
  faStar,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
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
  regularStar,
  faCaretLeft,
  faCaretRight,
  faArrowUp
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
