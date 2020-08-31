import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem (){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61251953?s=460&u=fa987d9b095f0ee6d4d7d57e16b748b4381e2d17&v=4" alt="Gabriel Taborda Farias" />
                <div>
                    <strong>Gabão</strong>
                    <span>Servente de Pedreiro</span>
                </div>
            </header>

            <p>
                Auxiliar de pedreiro que sabe mais que muito engenheiro.
                <br/><br/>
                Maldito servente, não convide-o para festas, ou, se convidar... esteja preparado para comprar muita comida!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 77,77</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;