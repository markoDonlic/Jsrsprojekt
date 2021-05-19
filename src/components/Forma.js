import React, { Component } from "react";
export default class Forma extends Component {
  state = {
    ime:  "ime",
    prezime: "prezime",
    mail: "E-mail",
    
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Poslano", this.state.ime);
    window.alert("od sada ce te primati nove obavijesti!");
  };

  render() {
    return (

      <form className="forma">
        <input
          placehoder="ime"
          value={this.state.ime}
          onChange={(e) => this.setState({ ime: e.target.value })}
        />
        <br />
        <br />
        <input
          placehoder="prezime"
          value={this.state.prezime}
          onChange={(e) => this.setState({ prezime: e.target.value })}
        />
        <br />
        <br />
        <input

          placehoder="mail"
          value={this.state.mail}
          onChange={(e) => this.setState({ mail: e.target.value })}
        />
        <br />
        <br />
        <br/>
        <button className='potvrdi' onClick={(e) => this.onSubmit(e)}>Posalji</button>
      </form>

    );
  }
}