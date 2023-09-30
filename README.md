React - Class components and Function Components

🔷 Functional Components

1️⃣ Functional Components are new way of writing code React.

2️⃣ These are just normal Javascript functions which returns some piece of JSX.

3️⃣ Mainly, hooks are used to handle life cycle methods of React. Hooks are also normal Javascript functions, few hooks are provided by React library and we can also create our own hooks.

4️⃣ State variables are created using useState() hook - it returns an array which includes variable and function to change the state variable.

5️⃣ useEffect() hook is perfect place to make an API call in functional components - this will be called after initial render and can be called whenever any state changes in the application.

🔷 Class Components

1️⃣ These are normal Javascript class which extends React.Component class to make simple class as a React component.

2️⃣ It has a render() method which will return some piece of JSX.

3️⃣ Class components have life cycle methods:

--Mounting --
◻ constructor()

      ◻  render()

      ◻  componentDidMount()

--Updating-- when props changes/setState
◻ render()

      ◻  componentDidUpdate()

--Un-mounting-- when component is deleted from the DOM tree or new page opened
◻ componentWillUnMount()

4️⃣

**_ Million dollar questions _**

◾ Why React is Fast and why it is so popular library?

◾ Do you know what is the most expensive task in any web applications?

       👉  It is DOM manipulation

You should know how React works behind the scene, then you will have answers of the above question.

👉 It uses Virtual DOM concept strong to find the difference b/w renders.

👉 It creates batches to process into two phases

      1️⃣   Render phase   2️⃣   Commit phase
            Constructor and render methods are called in Render phase
            Actual DOM updates happens in commit phase then ComponetDidMount is called.

      React will batch all render phase methods and executes it on first go then all commit phase methods will be called. - this is big optimization of React.

      Virtual DOM created and finds the difference b/w renders in render phase, commit phase will run based on updates.

Once the component is mounted, componentDidMount will be called - if there is any API called made or some data updates the state variables then Update cycle begins with that.

During Update Cycle -
Again render method will be called (VD created & diff calculated) -- Updates the DOM tree -- ComponentDidUpdate method will be called.

Finally, when component destroyed/used moved to different page - Un-Mounting Cycle will be called.
If you want un-subscribe to some events which you have added earlier, you can do this here.

Keep learning 🙂
