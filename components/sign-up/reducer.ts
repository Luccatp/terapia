import { SIGN_UP } from "@/lib/constants";
import { GenericAction } from "@/lib/utils";
import { Reducer } from "react";

export type actionTypes =
  | GenericAction<"SET_VALUE_0", Partial<(typeof SIGN_UP)[0]>>
  | GenericAction<"SET_VALUE_1", Partial<(typeof SIGN_UP)[1]>>;

const reducer: Reducer<
  Partial<{
    0: Partial<(typeof SIGN_UP)[0]>;
    1: Partial<(typeof SIGN_UP)[1]>;
  }>,
  actionTypes
> = (state, action) => {
  switch (action.type) {
    case "SET_VALUE_0":
      return { ...state, [0]: { ...state[0], ...action.payload } };
    case "SET_VALUE_1":
      return { ...state, [1]: { ...state[1], ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
