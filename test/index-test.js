describe('createStore()', () => {
  let store;

  beforeEach(function(){
    store = createStore(candyReducer);
  })

  it('returns an object', function() {
    expect(store).to.be.an("object")
  })

  describe('getState method', function(){
    it('returns the default state based on the reducer for the store', function(){
      store.dispatch({type: '@@INIT'})
      expect(store.getState()).to.eql([]);
    })
  })

  describe('dispatch method', function(){

    it('can dispatch actions with data associated to update the state', function(){
      store.dispatch({type: 'ADD_CANDY', candy: "Jelly Beans"});
      let todos = store.getState();
      expect(todos).to.eql(["Jelly Beans"]);
    })
  })
})
