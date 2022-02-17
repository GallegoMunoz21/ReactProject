import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Importar componentes
import SeccionPruebas from './SeccionPruebas';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';
import Error from './Error';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog'
import Formulario from './Formulario';
import Search from './Search';
import Article from './Article';
import CreateArticle from './CreateArticle';
import EditArticle from './EditArticle';


//import SeccionPruebas from './components/SeccionPruebas';
//import Peliculas from './components/Peliculas';

class Router extends Component {

    render() {
       
        return (


            <BrowserRouter>
                <Header />

              

                    <Switch>
                        {/*configurar rutas y paginas */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/blog/articulo/:id" component={Article}/>
                        <Route exact path="/blog/crear" component={CreateArticle}/>
                        <Route exact path="/blog/editar/:id" component={EditArticle}/>
                        <Route exact path="/redirect/:search" render ={
                            (props) =>{
                                var search= props.match.params.search;
                                return (
                                <Redirect to={'/blog/busqueda/'+search} />
                                );


                            }
                        }/>
                        
                            
                        <Route exact path="/formulario" component={Formulario}/>
                        <Route exact path="/peliculas" component={Peliculas}/>


                        <Route exact path="/segunda-ruta" component={MiComponente} />
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;

                            return (
                                <div id='content '>
                                    <h1 className='subheader'>Pagina de prueba</h1>
                                    <h2>{
                                        nombre && !apellidos &&
                                        <span>{nombre}</span>
                                    }
                                        {
                                            nombre && apellidos &&
                                            <span>{nombre}  {apellidos}</span>
                                        }
                                    </h2>

                                </div>
                            );
                        }
                        } />
                        <Route component={Error} />



                    </Switch>
                   
                    <div className='clearfix'></div>
              
                <Footer />
            </BrowserRouter>
        )

    }
}
export default Router;