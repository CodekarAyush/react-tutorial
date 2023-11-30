function customRender(reactElem,container) {
const domElem =    document.createElement(reactElem.type)
/*    domElem.setAttribute ('href', reactElem.props.href)  
    domElem.setAttribute ('target', reactElem.props.target)  
domElem.innerHTML = reactElem.children 
container.appendChild (domElem)*/
domElem.innerHTML = reactElem.children
for(const prop in reactElem.props){
 if (prop === 'children') continue;
    domElem.setAttribute(prop,reactElem.props[prop])
}
container.appendChild(domElem)
}

const reactElem = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"hey i m a link to go google"
}
const mainContainer = document.querySelector("#root")
customRender (reactElem,mainContainer)