const parent = React.createElement("div", {id: 'header'}, [
    React.createElement("div", {id:'child'}, [
        React.createElement("h1", {}, 'heading 1'),
        React.createElement("h2", {}, "heading 2")
    ]),
    React.createElement("div", {id: "child2"}, React.createElement("h1", {}, "yo im a header in div2"))
]);

console.log(parent);
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(parent);