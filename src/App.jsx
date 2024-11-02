import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./AllRoutes/Routes";
import PublicLayout from "./Layouts/PublicLayout";
import { store } from "./Redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}>
                    <PublicLayout />
                </RouterProvider>
            </Provider>
        </>
    );
}

export default App;
