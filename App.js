/**
 * 
 * <div> id = "parent">
 *      <div id = "child">
 *          <h1>I'm a H1 Tag</h1>
 *          <h2>I'm a H2 Tag</h2> --> sibling
 *      </div>
 *      <div id = "child">
 *          <h1>I'm a H1 Tag</h1>
 *          <h2>I'm a H2 Tag</h2> --> sibling
 *      </div>
 * </div>
 * 
 * 
 * ReactElement(Object) => HTML(Browser understands)
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm a H1 Tag"),
        React.createElement("h2", {}, "I'm a H2 Tag")
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm a H1 Tag"),
        React.createElement("h2", {}, "I'm a H2 Tag")])
    ]);

// JSX

const heading = React.createElement("h1", { id: "heading" }, "Hello World! from React!!!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
