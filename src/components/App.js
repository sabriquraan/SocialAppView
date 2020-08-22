import React from 'react';
import AppRouter from '../AppRouter';


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
          <div>
            <AppRouter/>
          </div>
      </div>
    );
  }
}

export default App;