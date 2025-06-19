let menu = document.querySelector("#menu");

// // syntax After
// // Element.after(node);
// // Element.after(node1,node2,node3,..noden); //can pass multiple nodes

// // append()
// // parentNode.append(newNodes)
// // parentNode.prepend(newNodes) //adds the childnode as first child
// // menu.insertAdjacentHTML(position,text); //positons are beforeBegin and afterBegin

// menu.insertAdjacentHTML("beforebegin","beforebegin")
// menu.insertAdjacentHTML("afterbegin","<li>afterbegin</li>")
// menu.insertAdjacentHTML("afterend","afterend");
// menu.insertAdjacentHTML("beforeend","<li>beforeend</li>");

// console.log(menu);

// // parent.replaceChild(newChild,oldChild)

// // clone node method
// // let newNode = originalNode.cloneNode()

// let copymenu = menu.cloneNode(true); //i you was true then it copies element inside it also otherwise not
// let copymenu1 = menu.cloneNode(); //i you was true then it copies element inside it also otherwise not

// console.log(copymenu)
// console.log(copymenu1)

// // remove child method
// // parentNode.removeChild(childNode)

menu.removeChild(menu.lastElementChild)
console.log(menu)

// menu.insertBefore(newNode , menu.firstElementChild);