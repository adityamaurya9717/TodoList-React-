 import React from 'react'
 import App from '../App'
class Body extends React.Component{
    constructor(){
        super()
        this.state={
            name:["aditya","maurya","ankit"]
        }
    }
    render(){
        return (
            <div>
                <h1>This is components</h1>
                {this.state.name.map((x)=>{
                    return <App value={x}></App>
                })
                }
            </div>
        )
    }



}
export default Body;