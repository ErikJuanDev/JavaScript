function createCloseButton(li) {
    let span = document.createElement("span")
    let txt = document.createTextNode(" X")

    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    span.onclick = () => span.parentElement.style.display = "none"
}

function adicionarLista() {
    let addlista = document.getElementBy("tarefas").value;
    let li = document.createElement("li")
    let inputText = document.createTextNode(addlista)

    li.appendChild(inputText)
    document.getElementById("list").appendChild(li)
    addlista.value = ""

    createCloseButton(li)
}

document.querySelectorAll("li").forEach(createCloseButton)

document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.tagName === "li")
        e.target.classList.toggle("checked")
})