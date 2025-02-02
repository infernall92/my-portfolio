import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "./activeTab.slice";

export const store = configureStore({
  reducer: {
    activeTab: activeTabReducer,
  },
});
