# (Candy) Store Lab

![simpsons-candy](https://media.giphy.com/media/xT5LMwcxObBBA31D8c/giphy.gif)

## Objectives

1. Write a method to create a store.
2. Work with stores, reducers, and actions.

## Overview

Good news - you're opening a candy store! First, we just need to build an app to
manage our inventory.

For now, we'll want to create a store to keep track of all of the types of candy
we sell. Later on, we'll learn how we can manage multiple pieces of state and more than one reducer, but for this challenge, the state is going to
be a basic array of strings. By the end of this lab, you should be able to open `index.html`, use your store's `dispatch` function to add a
name of a type of candy, and see that name appear on the page.

## Instructions

Write your code in `src/index.js`. We've provided the `candyReducer` function for you, as
well as a `render` function, so you can get a sense of how they'll work.

1. Write a function called `createStore` that takes in a
   reducer function as an argument.
2. The `createStore` function should return an object with two methods -
   `getState`, `dispatch`.

    * `getState` should return the current state.
    * `dispatch` should take in an action, update the state using the reducer, and call the render function.

Once you've written `createStore`, to get everything working, you'll need two more things at the end of `index.js`:

1. Notice that in the provided `render` function, a variable named `store` is
   called. Define a variable named `store` and assign it to whatever is returned
   by the `createStore` function you've written when it is passed
   the `candyReducer` function.
2. Initialize your state using a `dispatch` call to the reducer.

## Resources

* [Redux Documentation](http://redux.js.org/docs/basics/Store.html)
