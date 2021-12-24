function tabuada() {
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0) {
        alert('[ERRO} Digite um Numero')

    } else {

        let n = Number(num.value)
        c = 1
        tabuada.innerHTML=''

        while (c <= 10) {

            let item = document.createElement('option')//Criando elemento filho para chamr no html
            item.text = `${n} * ${c} = ${n * c}`
            tabuada.appendChild(item)
            c++
        }
    }


}