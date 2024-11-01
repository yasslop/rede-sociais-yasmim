const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')

        paragrafo.innerHTML = `No mundo existe <span> ${dados.total_pessoas_mundo} de pessoas e uma parte delas <span> ${dados.total_pessoas_conectadas}  estão conectadas em redes socias e na maioria do tempo passam <span> ${dados.tempo_medio} horas conectadas.`
      console.log(paragrafo) 

        const container = document.getElementById(‘graficos-container’)
        container.appendChild(paragrafo)

    

    visualizarInformacoesGlobais()
}