const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit",(ev)=>{
    
    ev.preventDefault()
    // console.log(ev.target.texto.value)
    const valor = ev.target.texto.value
    mostrarTexto(valor)
})

const mostrarTexto=(valor)=>{
     console.log(`El valor del input es ${valor}`)
     formulario.submit()
}

const lista = document.querySelector("#todo")

lista.addEventListener("click", (ev) => {
    if (ev.target.matches(".item")){
        ev.target.classList.toggle("done")
    }
})