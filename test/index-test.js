import createStore  from '../src/createStore';
import candyReducer from '../src/reducers/candyReducer';
import countReducer from '../src/reducers/countReducer';
import jsdom from 'jsdom';
import sinon from 'sinon';

describe('createStore', function() {
  let candyStore, countStore;

  beforeEach(function(){
    global.document = jsdom.jsdom('<html><body><div id="container"></div></body></html>');
    candyStore = createStore(candyReducer);
    countStore = createStore(countReducer);
  })

  it('returns an object', function() {
    expect(candyStore).toBeA(Object)
  })

  describe('getState', function(){
    it('returns the default state based on the reducer for the candyStore', function(){
      expect(candyStore.getState()).toEqual([]);
    })

    it('returns the default state based on the reducer for the countStore', function(){
      expect(countStore.getState()).toBeA('number')
      expect(countStore.getState()).toEqual(0)
    })
  })

  describe('dispatch', function(){

    it('can dispatch actions to update the state', function(){
      countStore.dispatch({type: 'INCREMENT_COUNT'});
      expect(countStore.getState()).toEqual(1);

    })

    it('can dispatch actions with data associated', function(){
      candyStore.dispatch({type: 'ADD_CANDY', candy: {name: "Jelly Beans"}});
      let todos = candyStore.getState();
      expect(todos).toEqual([{name: "Jelly Beans"}]);
    })
  })
})
