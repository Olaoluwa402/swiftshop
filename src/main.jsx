import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./store/AppProvider.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persitor } from "./redux/store.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persitor}>
          <AppProvider>
            <App />
          </AppProvider>
        </PersistGate>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
