const formulario = document.querySelector("#formulario")
const hijos = document.querySelectorAll("#caja > *")
const caja = document.querySelector("#caja")

const arrayHijos = ["hijo6","hijo7","hijo8"]



 document.addEventListener("click",(ev)=>{
   

    if (ev.target.matches("#caja > *")){
         console.log(ev.target)
    }

        const valor = ev.target.textContent
        mostrarTexto(valor)
   })


const pintarHijos = () =>{
    arrayHijos.forEach((hijo)=>{
      caja.innerHTML += `<div id=${hijo}>${hijo}</div>`
    })
}

formulario.addEventListener("submit",(ev)=>{
    
    ev.preventDefault()
    // console.log(ev.target.texto.value)
    const valor = ev.target.texto.value
    mostrarTexto(valor)
})

const mostrarTexto=(valor)=>{
     console.log(`El valor del hijo es ${valor}`)
}

pintarHijos()