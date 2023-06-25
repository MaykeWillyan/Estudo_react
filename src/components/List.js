import Item from './Item' //aula 07
function List(){

    return(
    <div>
        <h1> Minha lista</h1>
        <ul>
            <Item marca='M1' lançamento = '2004'/>
            <Item marca = 'M2' lançamento = '2005'/>
        </ul>
    </div>
    )
}

export default List
