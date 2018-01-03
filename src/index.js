import _ from "lodash";
// import printMe from "./print";

function getComponent() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(getComponent());
// printMe();