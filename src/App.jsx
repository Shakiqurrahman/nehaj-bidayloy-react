import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./AllRoutes/Routes";
import PublicLayout from "./Layouts/PublicLayout";
import store from "./Redux/store";

// slick slider css import
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
          <PublicLayout />
        </RouterProvider>
        <Toaster position="top-center" />
      </Provider>
    </>
  );
}

export default App;
