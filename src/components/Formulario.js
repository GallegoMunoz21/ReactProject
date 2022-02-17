import React, { Component } from "react";
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioeRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value;
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value;
        } else {
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioeRef.current.value,
            genero: genero
        }

        this.setState({
            user: user

        });
        console.log("Formulario Enviado");
        console.log(user);
    }
    
    render() {
        if(this.state.user.nombre){
            var user = this.state.user;
        }
        return (
            <div id="formulario">

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>
                        {/*Mostrar datos del formulario*/}
                        {this.state.user.nombre &&
                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Biografia: <strong>{user.bio}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }
                        {/*Crear un formulario con React*/}
                        <form class="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div class="form-group">
                                <label for="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div class="form-group ">
                                <label for="bio">Biografia</label>
                                <textarea type="text" name="bio" ref={this.bioeRef}></textarea>
                            </div>
                            <div class="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro

                            </div>
                            <div class="clearfix"></div>
                            <input type="submit" value="Enviar" class="btn btn-success" />


                        </form>

                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>

            </div>


        )
    }
}
export default Formulario;