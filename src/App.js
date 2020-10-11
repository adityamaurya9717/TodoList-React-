import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItem from './listitem'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
         }
        }
   this.handleChange=this.handleChange.bind(this)
   this.setUpdate=this.setUpdate.bind(this)

  }
  //handle change function
  handleChange(e){
    
    this.setState({
      currentItem:{
        text:e,
        key:Date.now()
      }
    })
  }
  addItem=(e)=>{
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    console.log(this.state.items)


    }
 }
  handleDelete=(i)=>{
    const newItems=this.state.items.filter((d,index)=>{
      if(index!==i){
        return d
      }
    })

    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
    console.log("item deleted",i)

  }
  setUpdate(text,key){
    const items=this.state.items;
   let myitem= items.map((item)=>{
      if(item.key===key){
         item.text=text
         return item
        }
        return item
       })
    this.setState({
      items:myitem
    })
  }

  render(){
    return (
      <div className="container">
        <header>
          <form className="to-do-form" onSubmit={this.addItem}>
            <input type="text" onChange={(e)=>this.handleChange(e.target.value)} placeholder="Enter the text" value={this.state.currentItem.text} />
            <button type="submit">Add</button>
          </form>
        </header>
        <div className="bodymy">
        <ListItem item={this.state.items} delete={this.handleDelete} setUpdate={this.setUpdate} />
        </div>
      </div>
    )
  }
}

export default App;
