import React from 'react';
import './Header.scss'
import mess from '../../assets/images/iconoir_message-solid.svg'
import not from '../../assets/images/mingcute_notification-fill.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className='header_nav'>
                    <div className="header_logo"><Link to='/'>Trood Community</Link></div>
                    <div className='header_right'>
                        <div className='header_notif'>
                            <img src={mess} alt=""/>
                            <img src={not} alt=""/>
                        </div>
                        <div className='header_user'>
                            <div className="header_user_logo"></div>
                            <div className="header_user_name">Alex Smith</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;