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

/*    class App extends React.Component {
     render() {
       return <Button>I <Heart /> React</Button>
     }
   }

   const Button = (props) => <button>{props.children}</button>

   class Heart extends React.Component {
     render() {
       return <span>&hearts;</span>
     }
   } */

/*    class App extends React.Component {
     render() {
       return <Title text="12345" />
     }
   }

   const Title = (props) => <h1>Title: {props.text}</h1>

   Title.propTypes = {
     //text: React.PropTypes.string.isRequired //does not work
     text(props, propName, component){
        if(!(propName in props)){
          return new Error('missing $propName')
        }
        if(props[propName].length < 6){
          return new Error('$propName was too short')
        }
     }
   } */

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({currentEvent: e.type})
  }
  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10"/>
          <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}


export default App