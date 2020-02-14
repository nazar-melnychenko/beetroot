import React from 'react';
import './Swapi.sass'

class Swapi extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
	    data: [],
		 count: 2,
		 opened: false,
		 info: [],
		 load: true
	  };

	}


  async componentDidMount() {
	  const response = await fetch(`https://swapi.co/api/people/`);
	  const json = await response.json();
	  let arr = [];
	  for (let key in json.results) {
		 arr.push(json.results[key]);
	  }
	  this.setState({state:this.state.data = this.state.data.concat(arr)});
	  this.setState({state:this.state.load = false});
}

  async load () {
	 this.setState({state:this.state.load = true});
	 const response = await fetch(`https://swapi.co/api/people/?page=${this.state.count}`);
	 const json = await response.json();
	 let arr = [];
	 for (let key in json.results) {
		arr.push(json.results[key]);
	 }
	 this.setState({state:this.state.count = this.state.count + 1});
	 this.setState({state:this.state.data = this.state.data.concat(arr)});
	 this.setState({state:this.state.load = false});
  }

  more = (id) => {
	 this.setState({state: this.state.opened = true});
	 this.setState({state: this.state.info = this.state.data[id]});
  }

  close = () => {
	 this.setState({state: this.state.opened = false});
  }


  render() {
	  return(
		 <>
			{this.state.data.map((item,i)=>(
			  <div className="mor" key={i}>{item.name}<span className="moree" onClick={()=>this.more(i)}>>></span></div>
			))}
			<button onClick={this.load.bind(this)}>{ this.state.load ? "Завантаження..." : "Завантажити ще..." }</button>
			<div className={ this.state.opened ? "modalWindow active" : "modalWindow" }>
			  <div className="wrapper">
				 <span onClick={this.close.bind(this)}>X</span>
				 <div className="text">
					{Object.keys(this.state.info).map(key => <div className="info" key={key}>{key} : {this.state.info[key]}</div>)}
				 </div>
			  </div>
			</div>
		 </>
	  );
	}
}

export default Swapi;