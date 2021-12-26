import {Link} from "react-router-dom";
import React from "react";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__social'>
                <h3 className='footer__title social__title'>Follower</h3>
                <ul className='footer__social-ul'>
                    <li className='links__footer'>
                        YouTube
                    </li>
                    <li className='links__footer'>
                        Twitter
                    </li>
                    <li className='links__footer'>
                        Instagram
                    </li>
                </ul>
            </div>
            <div className='footer__links'>
                <h3 className='footer__title'>Navigation</h3>
                <ul className='footer__links-ul'>
                    <li>
                        <Link to='/guide' className='links__footer'>
                            Guide
                        </Link>
                    </li>
                    <li>
                        <Link to='/security' className='links__footer'>
                            Security
                        </Link>
                    </li>
                    <li>
                        <Link to='/maintenance' className='links__footer'>
                            Maintenance
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer__resources'>
                <h3 className='footer__title social__title'>Resources</h3>
                <ul className='footer__social-ul'>
                    <li className='links__footer'>
                        Medium
                    </li>
                    <li className='links__footer'>
                        TechCrunch
                    </li>
                    <li className='links__footer'>
                        Mashable
                    </li>
                </ul>
            </div>
            <div className='footer__resources'>
                <h3 className='footer__title social__title'>External</h3>
                <ul className='footer__social-ul'>
                    <li className='links__footer'>
                        Codepen
                    </li>
                    <li className='links__footer'>
                        Habr
                    </li>
                    <li className='links__footer'>
                        Gizmodo
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer