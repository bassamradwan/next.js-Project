import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
import offers from "./features/offers/slice";
import orders from "./features/orders/slice";
import cities from "./features/cities/slice";
import categories from "./features/categories/slice";
import ad from "./features/order";
import comments from "./features/comments/slice";
import rates from "./features/rete/silice"

const store = configureStore({
  reducer: {
    user,
    offers,
    orders,
    cities,
    ad,
    categories,
    comments,
    rates,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
