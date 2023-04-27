import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@core/Store";
import { Spinner } from "@components/simple";
import "./Styles/index.scss";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </Provider>
);
