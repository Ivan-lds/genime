function pesquisar(){
    let section_resultado = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
        section_resultado.innerHTML = "";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    let titulo = "";
    let descricao = "";
    let anime = "";

for(let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    anime = dado.anime.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || anime.includes(campoPesquisa)){
        resultados += 
        `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <img class="img-resultado" src="${dado.img}" alt="${dado.titulo}">
            <p>${dado.anime}</p>
            <p class="descricao-meta">${dado.descricao}</p>
            <p>${dado.habilidades}</p>
            <p>${dado.citacao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais...</a>
        </div>
        `
    }
}
    section_resultado.innerHTML = resultados;
}