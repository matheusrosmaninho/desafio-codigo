export function twoSum(lista: Array<number>, result: number): boolean {
    let segundaLista = lista.slice(1)
    let indexEncontrados: Array<number> = []
    let numerosEncontrados: Array<number> = []

    lista.forEach((numero, index) => {
        let segundaListaModificada = segundaLista.slice(index)
        if (segundaListaModificada.length == 0) {
            return
        }
        segundaListaModificada.forEach((segundoNumero, segundoIndex) => {
            let soma: number = numero + segundoNumero
            if (soma === result) {
                numerosEncontrados.push(numero)
                numerosEncontrados.push(segundoNumero)
                indexEncontrados.push(index)
                indexEncontrados.push(index + segundoIndex + 1)
                return
            }
        })
    })

    if(numerosEncontrados.length >= 1) {
        console.log(`Os números que dão ${result} são ${numerosEncontrados[0]} e ${numerosEncontrados[1]}`)
        console.log(`As posições são ${indexEncontrados[0]} e ${indexEncontrados[1]}`)
        console.log(`Lista original ${lista}`)
        return true
    }
    return false
}