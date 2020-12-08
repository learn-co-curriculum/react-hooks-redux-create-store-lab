import { createStore, candyReducer } from "../index";

describe("createStore()", () => {
  let store;

  beforeEach(() => {
    store = createStore(candyReducer);
  });

  it("returns an object", () => {
    expect(typeof store).toBe("object");
  });

  describe("getState()", () => {
    it("returns the default state based on the reducer for the store", () => {
      store.dispatch({ type: "@@INIT" });
      expect(store.getState()).toEqual([]);
    });
  });

  describe("dispatch()", () => {
    it("can dispatch actions with data associated to update the state", () => {
      store.dispatch({ type: "candies/add", candy: "Jelly Beans" });
      let todos = store.getState();
      expect(todos).toEqual(["Jelly Beans"]);
    });
  });
});
