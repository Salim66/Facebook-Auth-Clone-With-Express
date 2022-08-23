import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { RiPlayMiniLine } from "react-icons/ri";
import './FooterAuth.scss';

const FooterAuth = () => {
  return (
    <>
        <footer className="footer__container">
            <div className="footer__wrapper">
                <div className="footer__language">
                    <ul className="lang__ul">
                        <li className="lang__li"><a href="#" className="lang__link">English (UK)</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">বাংলা</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">অসমীয়া</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">हिन्दी</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">नेपाली</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">Bahasa Indonesia</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">العربية</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">中文(简体)</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">Bahasa Melayu</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">Español</a></li>
                        <li className="lang__li"><a href="#" className="lang__link">Português (Brasil)</a></li>
                        <li className="lang__li"><a href="#" className="lang__link"><AiOutlinePlus className='lang__icon' /></a></li>
                    </ul>
                </div>
                <div className="footer__divider"></div>
                <div className="footer__contain">
                    <ul className="cont__ul">
                        <li className="cont__li"><a href="#" className="cont__link">Sign Up</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Log In</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Messenger</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Facebook Lite</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Watch</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Places</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Games</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Marketplace</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Facebook Pay</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Oculus</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Portal</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Instagram</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Bulletin</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Local</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Fundraisers</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Services</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Voting Information Centre</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Groups</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">About</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Create ad</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Create Page</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Developers</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Careers</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Privacy</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Cookies</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">AdChoices<RiPlayMiniLine className='cont__icon' /></a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Terms</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Help</a></li>
                        <li className="cont__li"><a href="#" className="cont__link">Contact uploading and non-usersSettingsActivity log</a></li>
                    </ul>
                </div>
                <p className="footer__copyright">Meta © 2022</p>
            </div>
        </footer>
    </>
  )
};

export default FooterAuth;