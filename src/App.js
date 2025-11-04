
import './App.css';
import { Component } from 'react';
//import VievPortParams from './components/ViewPortParams';
import StopWatch from './components/StopWatch';


class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      isVisibal: false,
    }
  }

  handlerClich = () => {
    const {isVisibal} = this.state;
    this.setState ({isVisibal: !isVisibal});
  };

  render () {
    const {isVisibal} = this.state;
    return (
      <>
        <button onClick={this.handlerClich}>
          {isVisibal ? 'Unmount' : 'Mount'}
        </button>
        {isVisibal && <StopWatch />}
      </>  
    );
  }
}

export default App;


