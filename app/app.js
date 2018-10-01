import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
          <form>
            <input type = "text" />
            <input type = "submit" />
          </form>
        );
    }
}

ReactDOM.render( <App/> ,
    document.getElementById('content')
);