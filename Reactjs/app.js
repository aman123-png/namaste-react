const heading = React.createElement("h1", { id: "heading" }, "Hello World from react");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, 
[React.createElement("div", { id: "child" },
[React.createElement("h1", {},"i am aman"),
React.createElement("h1", {},"i am amannnnnnnnnn")]),

React.createElement("div", { id: "child2" },
[React.createElement("h1", {},"i am aman"),
React.createElement("h1", {},"i am amannnnnnnnnn")])
]
)

root.render(parent);  