import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({});
export function AppProvider({ children }) {
  const productList = [
    { id: 0, name: "macbook", price: 300, descript: "abcdweqwe" },
    { id: 1, name: "macbook v1", price: 400, descript: "abcdweqw23e" },
    { id: 2, name: "macbook v2", price: 500, descript: "abcdweqw123213e" },
  ];

  const [list, dispatch] = useReducer(useReducer, productList);
  return (
    <AppContext.Provider value={{ dispatch, list: list }}>
      {children}
    </AppContext.Provider>
  );
}
