const textArea = document.querySelector('.text__area')
const textCript = document.querySelector('.text__cript')

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    textCript.value = textoEncriptado
    textArea.value = ''
    document.querySelector('.boneco').remove()
    document.querySelector('.h5__mensagem').remove()
    document.querySelector('.p__mensagem').remove()
    document.querySelector('.text__cript').style.display = 'inline'
    document.querySelector('.btn__copiar').style.display = 'inline'
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [['e' , 'enter'], ['i' , 'imes'], ['a' , 'ai'], ['o' , 'ober'], ['u' , 'ufat']]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    textCript.value = textoDesencriptado
    textArea.value = ''
    document.querySelector('.boneco').remove()
    document.querySelector('.h5__mensagem').remove()
    document.querySelector('.p__mensagem').remove()
    document.querySelector('.btn__copiar').style.display = 'inline'
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [['e' , 'enter'], ['i' , 'imes'], ['a' , 'ai'], ['o' , 'ober'], ['u' , 'ufat']]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada
}

function copiarTexto() {
    let textoCopiado = document.getElementById('texto__copiar')
    textoCopiado.select()
    textoCopiado.setSelectionRange(0, 99999)

    document.execCommand('copy')
}