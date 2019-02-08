import React from "react";
import './App.css';
import ppcv from './ppcv.jpg';
import charlotte from './cha.jpg';
import julien from './ju.jpg';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {i : 0,
                      perso:[
                                {name: "Jeanne Claveau", date: "18/10/1995", publi: "Le react c'est génial!", pp: (ppcv)},
                                {name: "Martine Dupon", date: "17/09/1996",  publi: "J'ai, enfin, eu mon permis.", pp: (charlotte)},
                                {name: "Claude Legrand", date: "23/03/1998",  publi: "Citation du jour; Immite, assimile et ensuite innove...", pp: (julien)}
                            ],
        }
    }

    handleClick(){
        this.setState({i:0});
    }
    handleClick1(){
       this.setState({i:1});
    }
    handleClick2(){
        this.setState({i:2});
    }
    handleClick3(){
        this.setState({i:2});
    }

    render() {

    return (
        <div className="App">
          <header className="onglet">
              <div className="ami">
            <button className="but" onClick={() => this.handleClick()}>Jeanne</button>
            <button className="but" onClick={() => this.handleClick1()}>Martine</button>
            <button className="but" onClick={() => this.handleClick2()}>Claude</button>
              </div>
          </header>
            <main className="container-profil">
                <img className="pp" src={this.state.perso[this.state.i].pp} />
                <h2> Nom: {this.state.perso[this.state.i].name} </h2>
                <p> Naissance: {this.state.perso[this.state.i].date}</p>
                <button className="butcs" onClick={() => this.handleClick3()}>Change style</button>
                <article className="publi">
                    <h4>Publication du 07/02/2019</h4>
                    <p>{this.state.perso[this.state.i].publi} </p>
                </article>
            </main>
        </div>


      );

  }
}

export default App;

