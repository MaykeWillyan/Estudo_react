// aula props
function Pessoa ({nome, idade, profissao, foto}){
    return(
        <div>
            <img src = {foto} alt = {nome}/>
            <h3>Nome: {nome}</h3>
            <h3>Idade: {idade}</h3>
            <h3>Profissão {profissao}</h3>
        </div>
    )
}

export default Pessoa
/* estrutura 1
function Pessoa(props)
{
    return(
        <div>
            <img scr={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
            <h2>Profissão: {props.profissao}</h2>
        </div>
    )
}

export default Pessoa
*/