import {
    combineReducers,
    createStore,
  } from 'redux';
  
  // actions.js
  export const updatePower = power => ({
    type: 'UPDATE_POWER',
    power,
  });
  export const updateInput = input => ({
    type: 'UPDATE_INPUT',
    input,
  });


  // reducers.js
  export const power = (state=false, action) => {
    switch (action.type) {
      case 'UPDATE_POWER':
        return action.power;
      default:
        return state;
    }
  };
  export const input = (state=null, action) => {
    switch (action.type) {
      case 'UPDATE_INPUT':
        return action.input;
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({
    power,
    input
  });
  
  // store.js
  export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();