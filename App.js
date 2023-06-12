/**
 * <div>Hello from react</div>
 */

const heading = React.createElement("div", {}, "Hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * <div id ="parent">
 *    <h1 id="child">Hello from child h1 tag</h1>
 * </div>
 */
const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("h1", { id: "child" }, "Hello from child h1 tag"));

/**
 * <div id ="parent">
 *    <h1 id="child">Hello from child h1 tag</h1>
 *    <h2 id="child2">Hello from child2 h2 tag</h2>
 * </div>
 */
const parentWithChildren = React.createElement("div",
    { id: "parent" },
    [React.createElement("h1", { id: "child" }, "Hello from child h1 tag"),
    React.createElement("h2", { id: "child2" }, "Hello from child h2 tag")]);


root.render(parentWithChildren);

/**
 React.createElement => creates and object which is later coverted
 to html elements behind the scenes in render method
 **/