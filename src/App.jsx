import React, { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
export const AuthContext = createContext(null);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;