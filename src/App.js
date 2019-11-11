import React from 'react';
import PropTypes from 'prop-types';


/* class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
update( e ){
  this.setState({txt: e.target.value})
}
  render() {
      return <h1>{this.state.txt}</h1>
  }
} */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is dynamic text'
    }
  }

  update( e ){
    this.setState({txt: e.target.value})
  }

  render() {
    let txtProp = this.props.txt;
    let numProp = this.props.cat;
    return (
      <div>
        <h1>Hello World! - {txtProp} + {numProp}</h1>
        <input type="text" onChange={this.update.bind(this)}/>
        <h2>{this.state.txt}</h2>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "Hejsa allesammen (default text)"

}

// const App = () => <h1>Hello Stateless</h1>

export default App