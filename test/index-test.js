describe('createStore()', () => {
  let candyStore;

  beforeEach(function(){
    candyStore = createStore(candyReducer);
  })

  it('returns an object', function() {
    expect(candyStore).to.be.an("object")
  })

  describe('getState method', function(){
    it('returns the default state based on the reducer for the candyStore', function(){
      candyStore.dispatch({type: '@@INIT'})
      expect(candyStore.getState()).to.eql([]);
    })
  })

  describe('dispatch method', function(){

    it('can dispatch actions with data associated to update the state', function(){
      candyStore.dispatch({type: 'ADD_CANDY', candy: "Jelly Beans"});
      let todos = candyStore.getState();
      expect(todos).to.eql(["Jelly Beans"]);
    })
  })
})
