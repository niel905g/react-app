import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';


/* class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
update( e ){
  this.setState({txt: e.target.value})
}
  render() {
      return (
        <div>
          <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        </div>
      )
  }
} */

/* class App extends React.Component {
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
 */

/*  class App extends React.Component {
   constructor() {
     super();
     this.state = {
       txt: 'this is the state text'
     }
   }
   update(e) {
     this.setState({txt: e.target.value})
   }
   render() {
     return (
       <div>
         <h1>{this.state.txt}</h1>
         <Widget update={this.update.bind(this)} />
         <Widget update={this.update.bind(this)} />
         <Widget update={this.update.bind(this)} />
         </div>
      )
   }
 }

 const Widget = (props) => 
   <input type="text" onChange={props.update} /> */

   class App extends React.Component {
     render() {
       return <Button>I <Heart /> React</Button>
     }
   }

   const Button = (props) => <button>{props.children}</button>

   class Heart extends React.Component {
     render() {
       return <span>&hearts;</span>
     }
   }
   


export default App