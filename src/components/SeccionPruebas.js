import React, { Component } from "react";
import logo from './assets/images/logo.svg';
import MiComponente from './MiComponente';


class SeccionPruebas extends Component {
    contador =0;

        constructor(props){
            super(props);

            this.state={
                contador: 0
            };
        }


    HolaMundo(nombre, edad) {
        var presentacion =
            (<div>
                <h2>Hola, soy{nombre}</h2>
                <h3>Tengo {edad} Años</h3>
            </div>)
        return presentacion;
    };

    sumar=(e)=>{
        //this.contador= this.contador +1;
        //this.State.contador = this.state.contador +1;
        this.setState({
            contador:(this.state.contador +1)
        });
    }
    restar=(e)=>{
        //this.contador= this.contador -1;
        //this.state.contador = this.state.contador -1;
        this.setState({
            contador:(this.state.contador -1)
        });
    }
    render() {
        var nombre = "Andres Gallego";
        return (

            <section id='content'>
                <h2 className="subheader">Ùltimos articulos</h2>
                <p>
                <h2 className="subheader">Funciones y JSX basico</h2>
                    {
                        this.HolaMundo(nombre, 29)

                    }

                </p>
                <h2 className="subheader">Componentes</h2>
                <section className='componentes'>
                    <MiComponente />
                    <MiComponente />

                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>
            </section>
        );

    }

}
export default SeccionPruebas