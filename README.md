# Resources
1. The recording of the session and slides is in the /media-files
3. [Le Wagon - Intro to React](https://www.youtube.com/watch?v=_ZTT9kw3PIE)
4. https://reactforbeginners.com/
5. https://www.udemy.com/course/react-redux/

# Steps
```js
    npx create-react-app airbnb-clone //install and setup boilerplate
    npm start //starts the server
```
## public/index.html
Looking into public/index.html there is nothing in the file not even javascript. There is a just a root element, at build time react will bundle all the scripts and put it all in the body tag. So our app after compile is essentially all javascript and JSX (hmtl like javascript) that all will be converted to html and javascript by React.

## src/index.js

Entry point is index.js, which simply puts <App /> at 'root' in the index.html file.

Learn more about [ReactDOM.render()](https://www.newline.co/@KumailP/a-closer-look-at-reactdomrender-the-need-to-know-and-more--891fed64)

## src/App.js
App.js is the first functional component that returns something that we will define, which makes our app.

Architecturally, thinnk of it as the first parent component of our app.

## Defining a Component
React components:
1. Start with a capital letter i.e. `<App />`.
2. Returns something. Can be JSX, which is html like elements.
3. Take one argument called props. Props are objects with key value pairs in them.
4. All React components must act like pure functions with respect to their props. Meaning they do not modify the props.
5. Props is the main way to pass *read only data* from parent component to child component. For example: App.js can call a component called Hello and pass props name = "Phu" like this: `<Hello name="Phu" />`. Note name="Phu is one key value pair underneith the props object. Under the hood the props object data model is like this:
```js
    let props = {
        name : "Phu"
    };
```
>"When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props” - https://reactjs.org/docs/components-and-props.html


Can pass multiple key value pairs under the props object as well. See [examples](https://blog.logrocket.com/the-beginners-guide-to-mastering-react-props-3f6f01fd7099/)

Advance: consider guarding propTypes and use defaultProps

(Calling a React component is similar to how an HTML element is used.)

6. Encapsulate the return with **empty tags** `<> multiple elements inside here </>` to return multiple elements in react. https://pawelgrzybek.com/return-multiple-elements-from-a-component-with-react-16

7. Destructuring. The two code blocks below are equivalent.
```js
const Hello = (props) => {
    return (
        <>
        <p> Hello {props.name} </p>
        <p> Your job is {props.job} </p>
        </>
    )
}
```

```js
const Hello = ( { name, job } ) => {
    return (
        <>
        <p> Hello {name} </p>
        <p> Your job is {job} </p>
        </>
    )
}
```


`const Hello = ( {name, job} ) => { return some JSX in here }` is a way to destructure 
`const Hello = ( props ) => { return  }` 


## State
States and props together form the data “model” of a React application. 

**While props are meant to be read-only,**

**states are used for data that can change based on user actions.**

## JSX
1. In JSX you use single `{}` to encapsulate the javascript within the `{}`

## CSS
>"Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{ }}" - https://www.w3schools.com/react/react_css.asp

https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/

@51min of video, we setup the CSS for .App.

## Summary so far
So far we simply hooking up some components and already started styling the components in order to see them on the page. 
We do this early so that when we start putting in more logic we can visually see the changes as feedback that we are doing things right.

## State
1. Each component gets data from its parent through props
2. State is data that we want to persist within a component. That other components could use as well.

## useState()
"useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value."

[LogRocket guide to useState in React](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/)

The useState Hook allows you to declare only one state variable (of any type) *at a time.*. To declare multiple do this:

```js
import React, { useState } from 'react';

const Message= () => { //a functional component named Message
   const messageState = useState( '' ); //useState takes the initial value of the state variable as an argument.
   const listState = useState( [] );
}
```

The initial value will be assigned only on the initial render (if it’s a function, it will be executed only on the initial render).

In subsequent renders (due to a change of state in the component or a parent component), the argument of the useState Hook will be ignored and the current value will be retrieved.

Note that useState() returns an array with 2 elements where the first element is the state and the second element is a function (that can be used to set state). So in the example above messageState is an array.

So normally we use array destructuring to do this:

```js
const Message= () => {
   const [message, setMessage]= useState( '' );
}
```
message is a const that receives the state returned from useState (via the 1st element of the returned array)
setMessage is a const that receives the function returned from useState (via the 2nd element of the returned array)

>"Normally, variables “disappear” when the function exits but state variables are preserved by React." - https://reactjs.org/docs/hooks-state.html

## useEffect()
https://reactjs.org/docs/hooks-effect.html
useEffect() tells React that your component needs to do something after render. That something is whatever you put inside useEffect. Common example is to fetchdata.
Note useEffect has access to data inside the functional component such as props passed down or state variables.

useEffect runs after every single render by default. Basically useEffect is run after DOM is updated by React.

"Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result — each effect “belongs” to a particular render. We will see more clearly why this is useful later on this page."

## useEffect() "cleanup"
"Why did we return a function from our effect? This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!

When exactly does React clean up an effect? React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. We’ll discuss why this helps avoid bugs and how to opt out of this behavior in case it creates performance issues later below."

## Tell React to skip useEffect if State did not change
>"You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:"

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```
>"In the example above, we pass [count] as the second argument. What does this mean? If the count is 5, and then our component re-renders with count still equal to 5, React will compare [5] from the previous render and [5] from the next render. Because all items in the array are the same (5 === 5), React would skip the effect. That’s our optimization.

>When we render with count updated to 6, React will compare the items in the [5] array from the previous render to items in the [6] array from the next render. This time, React will re-apply the effect because 5 !== 6. If there are multiple items in the array, React will re-run the effect even if just one of them is different."

>"If you want to run an effect and clean it up only **once** (on mount and unmount), you can pass an **empty array* (`[]`) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works."