export function twoSum(lista: Array<number>, result: number): boolean {
    let segundaLista = lista.slice(1)
    console.log('primeira lista', lista)
    console.log('segunda lista', segundaLista)

    lista.forEach((numero, index) => {
        let segundoIndice: number = 0
        while(segundaLista.length >= 1) {
            let somaValoresIndices = numero + segundaLista[segundoIndice]

            if (somaValoresIndices === result) {
                console.log(`Os números da soma são: ${numero} e ${segundaLista[segundoIndice]}`)
                return true
            }
            segundaLista.shift()
        }
        segundaLista.slice(index + 1)
    })
    return true
}