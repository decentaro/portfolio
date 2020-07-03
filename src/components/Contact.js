import React from 'react';
import axios from 'axios';
import { Button, FormGroup, Label, Input } from 'reactstrap';

class Contact extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:8000/contact", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
     this.setState({name: '', email: '', message: ''})
  }

  
  
  render() {
    const styleContactTitle = {
      fontSize: 70,
      fontFamily: 'Dancing Script, Sans-serif',
      paddingTop: 50,
      paddingBottom: 100,
      textAlign: "center"
    }

	return(
    <div className="wrapper contactPage">
      <div>
        <h1 style={styleContactTitle}>Contact me</h1>
      </div>   
      <div className="contentContact animate__animated animate__bounceInLeft">
        <div>
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleInputEmail1">Email address</Label>
                <Input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Input type="textarea" className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </FormGroup>
            </div>
            <Button color="primary" size="lg" type="submit">Send</Button>
          </form>
        </div>
      </div>
  	</div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default Contact;