import React from 'react';
import './Todolist.sass'

class Todolist extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
	    value: '',
		 todo: [
		   {value: 'Прочитати документацію React', done: false},
		   {value: 'Зробити домашку', done: false},
		   {value: 'Залити на Git', done: false},
		   {value: 'Поспати :)', done: false},
		   {value: 'Прийти на заняття :)', done: false},
		   ],
		 btnVis: true
	  }
	}

  onChangeValue = (e) => {
	  this.setState({ value: e.target.value })
  };

  onAddItem = () => {
	 this.setState(state =>{
	   let item = {
	     value: this.state.value,
		  done: false
		};
		const todo = [item, ...state.todo];
		return {
		  todo,
		  value: '',
		};
	 })
  };

  onDeleteItem = (id) => {
		this.state.todo.splice(id, 1);
		this.setState({state: this.state.todo});
  };

  onDoneItem = (id) => {
	 if(!this.state.todo[id].done){
		let del = this.state.todo.splice(id,1);
		this.state.todo.push(del[0]);
		del[0].done = true
	 } else {
		let del = this.state.todo.splice(id,1);
		this.state.todo.unshift(del[0]);
		del[0].done = false
	 }
	 console.log(this.state.todo);
	 this.setState({state: this.state.todo});
  };

  onEditItem = (id) => {
	 this.setState({state: this.state.btnVis = false});
    let fields = document.querySelectorAll('.todoWrapper__items--item > p');
    let field = fields[id];
	 let edit = this.state.todo[id].value;
	 field.innerHTML = `<input class="edits" type="text" value=\"${edit+' '}\" autofocus /><button class="don">Done</button>`;
	 let button = document.querySelectorAll('.don');
	 let editeds = document.querySelectorAll('.edits');
	 button.forEach((item,i)=>{
		item.onclick = () => {
		  this.setState({state: this.state.todo[id].value = editeds[i].value});
		  this.setState({state: this.state.btnVis = true});
		}
	 })
  };

	render() {
	  return(

		 <div className="todoWrapper">
			<h1>To do:</h1>
			<div className="todoWrapper__items">
			  {this.state.todo.map((item,i) =>
				 <div key= { i }  className="todoWrapper__items--item">
					<p className={ this.state.todo[i].done ? "done" : "undone" }>{this.state.todo[i].value}</p>
					<div className="button">
					  <span className={ this.state.btnVis ? "edit" : "hid "+"edit" } onClick={() => this.onEditItem(i)}>
						 <img src="img/edit.png" alt=""/>
					  </span>
					  <span className="done" onClick={() => this.onDoneItem(i)}>
						 <img src="img/done.png" alt=""/>
					  </span>
					  <span className="delete" onClick={() => this.onDeleteItem(i) }>
						 <img src="img/delete.png" alt="" />
					  </span>
					</div>
				 </div>
			  )}
			</div>
			<div className="todoWrapper__input">
			  <label>Task</label>
			  <input
				 type="text"
				 value={this.state.value}
				 onChange={this.onChangeValue}
			  />
			  <button
				 type="button"
				 onClick={this.onAddItem}
				 disabled = {!this.state.value}
			  >
				 Save Item
			  </button>
			</div>
		 </div>
	  )
	}
}

export default Todolist;