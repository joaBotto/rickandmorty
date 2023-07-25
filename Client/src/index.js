import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 3001;

// app.use(express.static(path.join(__dirname, "../Client/public")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Client/public/index.html"));
// });
// app.listen(port, () => {
//   console.log(`Servidor escuchando en el puerto ${port}`);
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
