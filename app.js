function pesquisar(){
    let section_resultado = document.getElementById("resultados-pesquisa")
console.log(section_resultado);

let resultados = "";

for(let dado of dados){
    resultados += `
    <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p>${dado.anime}</p>
        <pclass="descricao-meta">${dado.descricao}</pclass=>
        <p>${dado.habilidades}</p>
        <p>${dado.citacao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais...</a>
    </div>
`
}

section_resultado.innerHTML = resultados;

}