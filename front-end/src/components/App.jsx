import React from 'react';
import Header from './Header/index'
import NovoUsuario from './NovoUsuario/index'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NovoUsuario />
            </div>
        );
    }
}

export default App;