import React, { Component } from "react";
import logo from './assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    {/*LOGO*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>
                    {/*Menu de Navegacion*/}
                    <nav id="menu">

                        <ul>
                            <li>
                                <NavLink to="/home" style={isActive => ({
                                    color: isActive ? "blue" : "black"
                                })}
                                >Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" style={isActive => ({
                                    color: isActive ? "blue" : "black"
                                })}>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" style={isActive => ({
                                    color: isActive ? "blue" : "black"
                                })}>Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" style={isActive => ({
                                    color: isActive ? "blue" : "black"
                                })}>Pelicula</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/Andres" style={isActive => ({
                                    color: isActive ? "blue" : "black"
                                })}>Pagina 2</NavLink>
                            </li>
                        </ul>

                    </nav>
                    {/*Limpiar FLotados*/}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;