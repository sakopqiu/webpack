async function getComponent() {
    let element = document.createElement('div');
    // await import(/* webpackChunkName: "babel-polyfill" */"babel-polyfill");
    const _ = await import(/* webpackChunkName: "lodash" */"lodash");
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});