# Resources
1. The recording of the session is in the root folder
2. Slides in the root folder
3. https://www.youtube.com/watch?v=_ZTT9kw3PIE Le Wagon - Intro to React 
4. https://reactforbeginners.com/
5. https://www.udemy.com/course/react-redux/

# Steps
```js
    npx create-react-app airbnb-clone //install and setup boilerplate`
    npm start //starts the server`
```
## public/index.html
Looking into public/index.html there is nothing in the file not even javascript. There is a just a root element, at build time react will bundle all the scripts and put it all in the body tag. So our app is essentially all javascript and JSX (hmtl like javascript) that all will be converted html and javascript by React.

## src/index.js

Entry point is index.js, which simply puts <App /> at 'root' in the index.html file.

Learn more about ReactDOM.render() later here https://www.newline.co/@KumailP/a-closer-look-at-reactdomrender-the-need-to-know-and-more--891fed64

## src/App.js
App.js is the first functional component that returns something that we will define, which makes our app.

Architecturally, thinnk of it as the first parent component of our app.

## Defining a Component
React components:
1. Start with a capital letter i.e. `<App />`.
2. Returns something. Can be JSX, which is html like elements
3. Take one argument called props. Props are objects with key value pairs in them.
4. All React components must act like pure functions with respect to their props. Meaning they do not modify the props.
5. Props is the main way to pass read only data from parent component to child component. For example: App.js can call a component called Hello and pass props. name = "Phu" like this: `<Hello name="Phu" />`. Note name="Phu is one key value pair underneith the props object. Under the hood the props object data model is like this:
```js
    let props = {
        name : "Phu"
    };
```
>"When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props” - https://reactjs.org/docs/components-and-props.html

Can pass multiple key value pairs under the props object as well. See https://blog.logrocket.com/the-beginners-guide-to-mastering-react-props-3f6f01fd7099/ for examples.

Advance: consider guarding propTypes and use defaultProps

(Calling a React component is similar to how an HTML element is used.)

6. Encapsulate the return with empty tags `<> multiple elements inside here </>` to return multiple elements in react. https://pawelgrzybek.com/return-multiple-elements-from-a-component-with-react-16

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
https://www.w3schools.com/react/react_css.asp

>"Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}"

https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/

@51min of video to start Flexbox our app