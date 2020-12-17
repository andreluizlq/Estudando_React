import React, {useState} from 'react';
import './FavoritoCard.css';


const FavoritoCard = ({titulo, texto, favoritos, setFavoritos, dica, estado}) => {
    const [ativado, setAtivado] = useState (estado)
    
    const onClickFavoritos = (dica) => {
        const addFavoritos = [...favoritos, dica] 
        localStorage.setItem("meusFavoritos", JSON.stringify(addFavoritos))
        setFavoritos(addFavoritos)
        setAtivado(false)
    }

    const onClickDesfavoritos = (dica) => {
        const filter = favoritos.filter(favorito => favorito !== dica)
        setFavoritos(filter)
        localStorage.removeItem("meusFavoritos")
        localStorage.setItem("meusFavoritos", JSON.stringify(filter))
        setAtivado(true) 
    }

    return ( 
        <section className="favorito_card">
            <div className="favorito_card_info">
                <h2> {titulo} </h2>
                <p> {texto} </p>

            </div>
            <div>
                {ativado === true?
                    <button onClick={()=> onClickFavoritos(dica)}>favoritar</button>
                :   <button onClick={()=> onClickDesfavoritos(dica)}>Desfavoritar</button>
                }
            </div>
        </section>
    );
}
export default FavoritoCard;