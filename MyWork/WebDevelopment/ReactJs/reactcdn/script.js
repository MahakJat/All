var root = document.querySelector("#root");
var reactRoot = ReactDOM.createRoot(root);
var elem = React.createElement('div',null,'h1');

reactRoot.render(elem);


// in single line
// ReactDOM.createRoot(document.querySelector("#root")).render(React.createElement('h1',null,"this is h1"));

