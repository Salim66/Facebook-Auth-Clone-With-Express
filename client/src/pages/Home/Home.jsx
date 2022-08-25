import React from 'react';
import Header from '../../components/Header/Header';
import { AiOutlinePlus, AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import './Home.scss';
import { useContext } from 'react';
import cookie from 'js-cookie';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    // call context api 
    const { dispatch } = useContext(AuthContext);

    // use Navigate
    const { navigate } = useNavigate();

    // handle user logout
    const handleUserLogout = (e) => {
        e.preventDefault();

        cookie.remove('token');
        cookie.remove('user');

        // set dispatch
        dispatch({ type: "USER_LOGOUT" })

        navigate('/login');

    }

  return (
    <>
        <div className="home__container">
            <Header/>

            <section className="body__section">
                <div className="body__wrapper">
                    <div className="body__left">
                        <ul className="left__ul">
                            <li className="left__li">
                                <a href="#" className="left__link">
                                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-1/289299725_111498711595724_7321915509387888887_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=8pU_F3C2DtAAX-x9P1e&_nc_ht=scontent.fdac139-1.fna&oh=00_AT995tNcyz1sUxrr8uJD0EFAzm5pS7JXaJ0YRxS-tDbC0Q&oe=630C79DA" alt="" className="left__link-logo" />
                                    <h5 className="username">Johnny Depp</h5>
                                </a>
                            </li>
                            <li className="left__li">
                                <a href="#" className="left__link" onClick={ handleUserLogout }>
                                    <img src="https://toppng.com/uploads/preview/logout-11551056293ans77of4wy.png" alt="" className="left__link-logo" />
                                    <h5 className="username">Log Out</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body__middle">
                        <div className="story__card">
                            <div className="story__contain">
                                <a href="#" className='plus__link'>
                                    <AiOutlinePlus className="plus__icon" />
                                </a>
                                <a href='#' className="story__text">
                                    <h5 className="create__stroy">Create Story</h5>
                                    <p className="share__a-photo">Share a photo or write something.</p>
                                </a>
                            </div>
                        </div>
                        <div className="post__card">
                            <div className="post__create--link">
                                <img className='profile__photo' src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-1/289299725_111498711595724_7321915509387888887_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8pU_F3C2DtAAX-x9P1e&_nc_ht=scontent.fdac139-1.fna&oh=00_AT8b_bTIXOfhe3QH8pjdKdlkpcst13vQNENCbOMw3knYbA&oe=630A7F9A" alt="" />
                                <input type="text" name="post" id="" className='create__input' placeholder="What's on your mind, johnny?" disabled />
                            </div>
                            <div className="divider"></div>
                            <ul className="post__create-ul">
                                <li className="post__create-li">
                                    <a href="#" className="post__create-link live">
                                        <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod ruv4vjns mwtcrujb mx6bq00g"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                                        <span>Live video</span>
                                    </a>
                                </li>
                                <li className="post__create-li">
                                    <a href="#" className="post__create-link photo">
                                        <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod n7gtua6e mwtcrujb mx6bq00g"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fill-rule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                                        <span>Photo/video</span>
                                    </a>
                                </li>
                                <li className="post__create-li">
                                    <a href="#" className="post__create-link feeling">
                                        <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod dxn77deq mwtcrujb mx6bq00g"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path><path fill-rule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path></g></g></svg>
                                        <span>Feeling/Activity</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="timeline__card">

                            <div className="timeline__header">
                                <div className="header__time">
                                    <div className="top__itme">
                                        <div className="top__item-left">
                                            <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-1/214082975_2294635030667972_8190923527857128661_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=CLRBhd_qCfMAX9Xy10q&_nc_ht=scontent.fdac139-1.fna&oh=00_AT_RdPuLD2dSQjhHQv3zuLjuTtpLjnxLJK0JBebaQei0mw&oe=630BF069" alt="" className="header__icon" />
                                            <div className="top__item-text">
                                                <h5 className='text__name'>Cricket News</h5>
                                                <span className='text__date'>23 August at 17:22</span>
                                                <span className='text__map'>
                                                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 k250bvdn cv5aopd8" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top__item-right">
                                            <BsThreeDots className="right__dot" />
                                        </div>
                                    </div>
                                    <div className="bottom__itme">
                                        <p className='timeline__text'>আফিফ হোসাইন ধ্রুব এর সেলফিতে এশিয়া কাপের কিছু ক্রিকেটার 💕💕</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline__image">
                                <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/301519509_746363370151247_672057504248792558_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=elvFR-9JfdYAX-MyYYe&_nc_ht=scontent.fdac139-1.fna&oh=00_AT9mwEQaQMfSRHfSrYTFtEVY3bi2xdaTSqgAqnEgCg6Pdg&oe=630CA5F2" alt="" />
                            </div>
                            <div className="timeline__bottom">
                                <div className="bottom__time">
                                    <div className="bottom__itme">
                                        <div className="bottom__item-left">
                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" className="like__icon" />
                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" className="love__icon" />
                                            <div className="bottom__item-text">
                                                <span className="count__linke-love">60</span>
                                            </div>
                                        </div>
                                        <div className="bottom__item-right">
                                            <a href="#" className="share__link">2 shares</a>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="bottom__itme">
                                        <ul className="item__ul">
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <AiOutlineLike className="like" />
                                                    <sapn>Like</sapn>
                                                </a>
                                            </li>
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <GoComment className="comment" />
                                                    <sapn>Comment</sapn>
                                                </a>
                                            </li>
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <RiShareForwardLine className="share" />
                                                    <sapn>Share</sapn>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="timeline__card">

                            <div className="timeline__header">
                                <div className="header__time">
                                    <div className="top__itme">
                                        <div className="top__item-left">
                                            <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-1/214082975_2294635030667972_8190923527857128661_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=CLRBhd_qCfMAX9Xy10q&_nc_ht=scontent.fdac139-1.fna&oh=00_AT_RdPuLD2dSQjhHQv3zuLjuTtpLjnxLJK0JBebaQei0mw&oe=630BF069" alt="" className="header__icon" />
                                            <div className="top__item-text">
                                                <h5 className='text__name'>Cricket News</h5>
                                                <span className='text__date'>23 August at 17:22</span>
                                                <span className='text__map'>
                                                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 k250bvdn cv5aopd8" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top__item-right">
                                            <BsThreeDots className="right__dot" />
                                        </div>
                                    </div>
                                    <div className="bottom__itme">
                                        <p className='timeline__text'>আফিফ হোসাইন ধ্রুব এর সেলফিতে এশিয়া কাপের কিছু ক্রিকেটার 💕💕</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline__image">
                                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/301372554_204828305219643_2714192822015722790_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p6_AvT7_qw4AX-f8L5o&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_cA8eC4jMQDtjJ1YLPlVfG3dILWIrDfCTTkQlojmS6TA&oe=630C17B3" alt="" />
                            </div>
                            <div className="timeline__bottom">
                                <div className="bottom__time">
                                    <div className="bottom__itme">
                                        <div className="bottom__item-left">
                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" className="like__icon" />
                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" className="love__icon" />
                                            <div className="bottom__item-text">
                                                <span className="count__linke-love">60</span>
                                            </div>
                                        </div>
                                        <div className="bottom__item-right">
                                            <a href="#" className="share__link">2 shares</a>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="bottom__itme">
                                        <ul className="item__ul">
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <AiOutlineLike className="like" />
                                                    <sapn>Like</sapn>
                                                </a>
                                            </li>
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <GoComment className="comment" />
                                                    <sapn>Comment</sapn>
                                                </a>
                                            </li>
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <RiShareForwardLine className="share" />
                                                    <sapn>Share</sapn>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="timeline__card">

                            <div className="timeline__header">
                                <div className="header__time">
                                    <div className="top__itme">
                                        <div className="top__item-left">
                                            <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-1/214082975_2294635030667972_8190923527857128661_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=CLRBhd_qCfMAX9Xy10q&_nc_ht=scontent.fdac139-1.fna&oh=00_AT_RdPuLD2dSQjhHQv3zuLjuTtpLjnxLJK0JBebaQei0mw&oe=630BF069" alt="" className="header__icon" />
                                            <div className="top__item-text">
                                                <h5 className='text__name'>Cricket News</h5>
                                                <span className='text__date'>23 August at 17:22</span>
                                                <span className='text__map'>
                                                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 k250bvdn cv5aopd8" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top__item-right">
                                            <BsThreeDots className="right__dot" />
                                        </div>
                                    </div>
                                    <div className="bottom__itme">
                                        <p className='timeline__text'>আফিফ হোসাইন ধ্রুব এর সেলফিতে এশিয়া কাপের কিছু ক্রিকেটার 💕💕</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline__image">
                                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/300897366_2514420642041159_2186457571258570714_n.jpg?stp=dst-jpg_s720x720&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_nkYziFT6xEAX_ENRiQ&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-NXLP0QeXOZ5STXAVKt1OFxDbW_mqpZaPVKt0YwPlwQQ&oe=630CBD1D" alt="" />
                            </div>
                            <div className="timeline__bottom">
                                <div className="bottom__time">
                                    <div className="bottom__itme">
                                        <div className="bottom__item-left">
                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" className="like__icon" />
                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" className="love__icon" />
                                            <div className="bottom__item-text">
                                                <span className="count__linke-love">60</span>
                                            </div>
                                        </div>
                                        <div className="bottom__item-right">
                                            <a href="#" className="share__link">2 shares</a>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="bottom__itme">
                                        <ul className="item__ul">
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <AiOutlineLike className="like" />
                                                    <sapn>Like</sapn>
                                                </a>
                                            </li>
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <GoComment className="comment" />
                                                    <sapn>Comment</sapn>
                                                </a>
                                            </li>
                                            <li className="item__li">
                                                <a href="#" className="item__link">
                                                    <RiShareForwardLine className="share" />
                                                    <sapn>Share</sapn>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="body__right"></div>
                </div>
            </section>
        </div>
    </>
  )
};

export default Home;