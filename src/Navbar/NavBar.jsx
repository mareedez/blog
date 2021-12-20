import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import {selectSignedIn, setInput, setSignedIn} from "../Actions/User";
import {useDispatch, useSelector} from "react-redux";
import GoogleLogin, {GoogleLogout} from "react-google-login";
export default function NavBar() {
    const [click, setClick] = useState(false), handleClick = () => setClick(!click),
        closeMobileMenu = () => setClick(false), [inputValue, setInputValue] = useState(""),
        isSignedIn = useSelector(selectSignedIn), dispatch = useDispatch(), login = () => {
            dispatch(setSignedIn(true));
        }, logout = () => {
            dispatch(setSignedIn(false));
        }, handleInput = (e) => {
            e.preventDefault();
            dispatch(setInput(inputValue));
        };

    return (
        <nav className="navbar">

                <div className="navbar__social">
                    <i className="fab fa-facebook-f"/>
                    <i className="fab fa-twitter"/>
                    <i className="fab fa-instagram"/>
                </div>
                <div className={click ? 'navbar__menu active' : 'navbar__menu'}>
                    <ul className="navbar__menu-items">
                        <li className='navbar__menu-links'>
                            <Link to='/' className='links' onClick={closeMobileMenu}>
                                News
                            </Link>
                        </li>
                        <li className='navbar__menu-links'>
                            <Link to='/technology' className='links' onClick={closeMobileMenu}>
                                Technology
                            </Link>
                        </li>
                        <li className='navbar__menu-links'>
                            <Link to='/business' className='links' onClick={closeMobileMenu}>
                                Business
                            </Link>
                        </li>
                        <li className='navbar__menu-links'>
                            <Link to='/lifestyle' className='links' onClick={closeMobileMenu}>
                                Lifestyle
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar__search">

                    <div className="navbar__login">
                        {!isSignedIn ? (
                            <GoogleLogin
                                clientId="891978504427-rlp33ncrp30i5rn8k2cf50h8lbbpfhic.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <span
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="login"
                                    >Login</span>
                                        )}
                                        onSuccess={login}
                                        onFailure={login}
                                        isSignedIn={true}
                                        cookiePolicy={"single_host_origin"}
                            />
                            ) : (
                            <GoogleLogout
                                clientId="891978504427-rlp33ncrp30i5rn8k2cf50h8lbbpfhic.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <span
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="logout"
                                    >Logout</span>
                                )}
                                onLogoutSuccess={logout}
                            />
                        )}
                    </div>

                    <div className="blog__search">
                        <input
                            id="search"
                            className="search"
                            placeholder="Search"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <div className="blog__search-submit" onClick={handleInput}>
                        <i className="fas fa-search"/>
                    </div>
                </div>

                <div className="mobile__menu" onClick={handleClick}>
                    <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} />
                </div>

        </nav>
    )
}