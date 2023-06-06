import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         from:'',
         to:'',
         type:'A',
         random:this.randomnum(),
         rankm:''
      }
    }

    randomnum(){
        return Math.floor(Math.random()*10000)
    }

    handlerandom(){
        this.setState({
            random:this.randomnum()
        })
    }

    calculate()
    {
        let a=this.state.type
        let b=this.state.rankm
        if(a==='A'){
            return b*15
        }
        else if(a==='B'){
            return b*25
        }
        else if(a==='C'){
            return b*30
        }
    }

    align=()=>{
        let x=document.getElementById("from").value
        let y=document.getElementById("to").value
        if(x!=='' && y!==''){
            this.setState({
                rankm: Math.floor(Math.random()*10)+1,
                from:x,to:y
            })
        }
    }

    handlefrom=(event)=>{
        this.setState({
            from:event.target.value
        })
    }
    handleto = event =>{
        this.setState({
            to:event.target.value
        })
    }
    handletype =event =>{
        this.setState({
            type:event.target.value
        })
    }
    handlesubmit=event=>{
        alert(` Booking Details \n From : ${this.state.from} \n To   : ${this.state.to}\n car Type : ${this.state.type} \n Booking ID : ${this.state.random} \n cost:${this.calculate()}`)
    }
    
    
  render() {

    return (
       
        <form className="formc" onSubmit={this.handlesubmit}>
      <div className='input'>
        <label className='labels'>From</label>
        <input id='from' type='text' onBlur={this.align}/>
      </div>
      <div className='input'>
        <label className='labels'>to</label>
        <input id='to' type='text' onBlur={this.align}/>
      </div>
      <div className='input'>
        <label className="labels">total km</label>
        <input id="km" type='number' value={this.state.rankm} className='input'
        />
      </div>
      <div className='input'>
        <label className='labels'>Type</label>
        <select onChange={this.handletype}>
            <option value="A">Type A</option>
            <option value="B">Type B</option>
            <option value="C">Typr C</option>

        </select>

      </div>
      
      <button type="submit">Book</button>
    
      </form>
    )
  }
}

export default Form
