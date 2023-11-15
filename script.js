let form = document.querySelector('#formexercicio')

let formevalido = false

function numerovalido(numeroa, numerob){
    return numeroa > numerob
}

function refreshoff(reloadoff){
    reloadoff.preventDefault()

    let Numeroa = Number(document.getElementById('numeroa').value)
    let Numerob = Number(document.getElementById('numerob').value)

    let mensagemsucesso = `O Valor ${Numeroa} e Maior que o Valor ${Numerob}`

    if(numerovalido(Numeroa, Numerob)){
        document.querySelector('.mensagemerro').style.display = 'none'
        document.querySelector('.mensagemsucesso').style.display = 'block'
        document.querySelector('#verificar').style.background = '#27ae60'
        Numeroa.value = ''
        Numerob.value = ''
    }else{
        document.querySelector('.mensagemerro').style.display = 'block'
        document.querySelector('.mensagemsucesso').style.display = 'none'
        document.querySelector('#verificar').style.background = 'red'
    }
}




form.addEventListener('submit', refreshoff)