import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    onStep: 1,
    name:'',
    mobile:'',
    email:'',
    address1:'',
    address2:'',
    dist:'',
    gender:'',
    checked:false


  }

  onStepHandler = (step) => {
    this.setState({
      onStep: step
    })
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  twoStepHandler=(event)=>{
    if(this.state.name === '' || this.state.mobile === '' || this.state.email === '') {
    alert('please fill form');
    } else 
    this.setState({
      onStep: 2
    })} 
  
    threeStepHandler=(event)=>{
      if(this.state.address1 === '' || this.state.address2 === '' || this.state.dist==='') {
      alert('please fill form');
      } else 
      this.setState({
        onStep: 3
      })}

        checkedHandler=()=>{
          this.setState({
            checked:!this.state.chacked
          })
         
        }
   

      fourStepHandler=()=>{
        if(this.state.gender === "") {
          alert('select gender')
        }
        else if(this.state.checked === false){
          alert("please accept T & C")
        }
        else {
          this.setState({
            onStep: 4
          })
        }
    }

  render() {
    console.log("====",this.state.name);
  return (
     <div className="container">
       
       {this.state.onStep === 1 ?
          <div>
          <h3>Step: 1</h3>
          <div className="form-group sizeWidth">
            <label>Name</label>
            <input type="text" className="form-control" name='name' value={this.state.name || ""} onChange={(event) => this.onChangeHandler(event)} placeholder="your Name"/>
          </div>
          <div className="form-group sizeWidth">
            <label>Mobile No</label>
            <input type="number" className="form-control" name='mobile' value={this.state.mobile || ""} onChange={(event) => this.onChangeHandler(event)} placeholder="enter Mobile No."/>
          </div>
          <div className="form-group sizeWidth">
            <label>Email</label>
            <input type="email" className="form-control" name='email' value={this.state.email || ""} onChange={(event) => this.onChangeHandler(event)} placeholder="enter your mail"/>
          </div>
          <button onClick={()=> this.twoStepHandler()} type="next" className="btn btn-primary" style={{marginLeft: "36PX"}}>next</button>
        </div> :
        this.state.onStep === 2 ?
          <div>
            <h3>Step: 2</h3>
            <div className="form-group sizeWidth">
              <label>Address1</label>
              <input type="text" className="form-control" name="address1" value={this.state.address1 || ""} onChange={(event) => this.onChangeHandler(event)} placeholder="enter your address"/>
            </div>
            <div className="form-group sizeWidth">
              <label>Address2</label>
              <input type="text" className="form-control" name="address2" value={this.state.address2 || ""} onChange={(event) => this.onChangeHandler(event)} placeholder="enter your address2"/>
          </div>
          <div className="form-group sizeWidth">
            <label>Dist</label>
            <select className="form-control" name="dist" id="dist" value={this.state.dist || ""} onChange={(event) => this.onChangeHandler(event)}>
              <option value="">Select</option>
              <option value="Patna">patna</option>
              <option value="Madhubani">madhubani</option>
              <option value="Mohali">mohali</option>
              <option value="Rupnagar">rupnagar</option>
            </select>
          </div>
          <button type="next" onClick={()=>this.threeStepHandler()} className="btn btn-primary" style={{marginLeft: "36PX"}}>next</button>
        </div> :
        this.state.onStep === 3 ?
        <div>
          <h3>Step: 3</h3>
          <input className="sizeWidth1" type="radio" name="gender" id="male" value="male" onChange={(event) => this.onChangeHandler(event)} />Male<br/>
          <input className="sizeWidth1" type="radio" name="gender" id="female" value="female" onChange={(event) => this.onChangeHandler(event)} /> Female<br/>
          <input className="sizeWidth1" type="radio" name="gender" id="other" value="other" onChange={(event) => this.onChangeHandler(event)} /> Other
          

          <div className="form-check">
           <input className="form-check-input" type="checkbox" onChange={()=>this.checkedHandler()} chacked={this.state.chacked} id="flexCheckChecked" />
           <label className="form-check-label" >Checked checkbox</label>
           <button type="submit" onClick={()=>this.fourStepHandler()} className="btn btn-primary" style={{marginLeft: "36PX"}}>submit</button>
          </div>

        </div> : 
        <div className="form-group sizeWidth">
          <h3>Step: 4</h3>
          <h4 className="text-primary text-center">Well Done</h4>
          <p>Name: {this.state.name}</p>
          <p>Mobile: {this.state.mobile}</p>
          <p>Email: {this.state.email}</p>
          <p>Address1: {this.state.address1}</p>
          <p>Address2: {this.state.address2}</p>
          <p>District: {this.state.dist}</p>
          <p>Gender: {this.state.gender}</p>
        </div>
      }

    </div>
  );
}
      }

export default App;
