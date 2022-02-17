import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {

    state = {};

    cambiarTitulo = () => {

        var peliculas = this.state.Peliculas;
        //var random= Math.floor(Math.random()*3);
        peliculas[1].titulo = "El bromas";
        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log('FAVORITA MARCADA');
        console.log(pelicula, indice);

        this.setState({
            favorita: pelicula
        })

    }

    componentWillMount() {
        // alert("Se va a montar el componente");
        this.setState({
            Peliculas: [
                { titulo: 'Batman Vs Superman', image: 'https://es.web.img3.acsta.net/r_1280_720/newsv7/21/09/13/21/22/4178692.jpg' },
                { titulo: 'El Joker', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/The_Joker_at_Wax_Museum_Plus.jpg' },
                { titulo: 'Star Trek', image: 'https://cdn1.epicgames.com/06a97980aac14fdfb914ef603a113792/offer/EGS_StarTrekOnline_CrypticStudios_S1-2560x1440-9192d57e9cf8397f6b1998cb0be7ecfa.jpg' }
            ],
            nombre: 'Andres Gallego',
            favorita: {}


        })
    }
    componentDidMount() {
        //alert("Ya se ha montado el componente");
    }

    componentWillUnmount() {
        //alert("Me voy a desmontar")
    }

    render() {
        var pStyle = {
            background: 'blue',
            color: 'white',
            padding: '10px'
        }

        return (
            <React.Fragment>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />
                <div className='center'>
                    <div id='content' className='peliculas'>
                        <h2 className='subheader'> Listado de Peliculas</h2>
                        <p>Seleccion de las peliculas favoritas de {this.state.nombre} </p>
                        <p>
                            <button onClick={this.cambiarTitulo}>
                                Cambiar titulo del Joker
                            </button>
                        </p>
                        {this.state.favorita.titulo ? (
                            <p className='favorita' style={pStyle} >
                                <strong>La Pelicula favorita es: </strong>
                                <span>{this.state.favorita.titulo}</span>
                            </p>
                        ) : (
                            <p>No hay pelicula favorita</p>
                        )
                        }

                        {/**Crear componente de èliculas */}
                        <div id='articles' className='peliculas'>
                            {
                                this.state.Peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />
                                    )


                                })
                            }
                        </div>

                    </div>

                    <Sidebar
                        blog="false"
                    />
                </div>
            </React.Fragment>
        );
    }

}
export default Peliculas