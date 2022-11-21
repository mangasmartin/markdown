window.addEventListener("load", init)

function init(){
    createMenu()
    createContent()
}

function createMenu(){
    const menu = [
        { name: "apartat1", title: "Apartat 1" },
        { name: "apartat2", title: "Apartat 2" },
        { name: "apartat3", title: "Apartat 3" }
    ]
    const menuTitles = ["Apartat 1","Apartat 2","Apartat 3"]
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")
    for (let i = 0; i < menu.length; i ++){
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = "/" + menu[i].name
        a.textContent = menu[i].title
        li.appendChild(a)
        ul.appendChild(li)
    }
    nav.appendChild(ul)
    document.getElementById("content").appendChild(nav)
}

function createContent(){
    const dir = (location.pathname == "/")? "inici" : location.pathname

    fetch("pagina.md")
    .then(res => res.text())
    .then(data => {
        document.getElementById("content").innerHTML += marked(data); 
    })
}