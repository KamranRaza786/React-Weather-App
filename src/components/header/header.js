import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSearch, faHome, faUserFriends, faTv, faUserAlt, faPlus, faFacebookMessenger, faBell, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#" id="fb"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><button id="search_btn" className="tooltip" data-tooltip="Search"><FontAwesomeIcon icon={faSearch} /></button></li>

                    <li id="space2"></li>

                    <li><a className="tooltip active" data-tooltip="Home" href="#" id="home"><FontAwesomeIcon icon={faHome} /></a></li>
                    <li><a className="tooltip" data-tooltip="Group" href="#" id="group"><FontAwesomeIcon icon={faUserFriends} /></a></li>
                    <li><a className="tooltip" data-tooltip="Watch" href="#" id="tv"><FontAwesomeIcon icon={faTv} /></a></li>
                    <li><a className="tooltip" data-tooltip="Friend" href="#" id="friend"><FontAwesomeIcon icon={faUserAlt} /></a></li>
                    <li id="space1"></li>
                    <li><button className="tooltip" data-tooltip="Add" id="btn_plus"><FontAwesomeIcon icon={faPlus} /></button></li>
                    <li><button className="tooltip" data-tooltip="Message" id="btn_msg"><FontAwesomeIcon icon={faFacebookMessenger} /></button></li>
                    <li><button className="tooltip" data-tooltip="Notification" id="btn_bell"><FontAwesomeIcon icon={faBell} /></button></li>
                    <li><button className="tooltip" data-tooltip="Profile" id="btn_profile"><FontAwesomeIcon icon={faUserCog} /></button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
