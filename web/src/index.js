import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// COMPONENTE: Um bloco isolado de html, css e js que não interfere no restante da aplicação
// ESTADO: Informações mantidas pelo componente (IMUTABILIDADE)
// PROPRIEDADE: Informações que um componente PAI passa para o componente FILHO

ReactDOM.render(<App />, document.getElementById('root'));
