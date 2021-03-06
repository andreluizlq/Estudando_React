import { useState } from 'react';
import { info } from '../../data';
import FavoritoCard from '../../components/FavoritoCard/FavoritoCard';
import Header from '../../components/Header/Header';

const PagesDicasEsporte = () => {
    const inicial = JSON.parse(localStorage.getItem("meusFavoritos"))
    const [favoritos, setFavoritos] = useState(inicial);
    return (
        <>
            <Header />
            <div>
                {info.map(i => {
                    return (
                        <FavoritoCard
                        dica = {i}
                        titulo={i.titulo}
                        texto={i.texto}
                        favoritos={favoritos}
                        setFavoritos={setFavoritos}
                        estado={true}
                    />)
                })}
            </div>
        </>
    );
}

export default PagesDicasEsporte;