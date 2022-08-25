import React, { useState } from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import { AiFillQuestionCircle } from "react-icons/ai";
import swal from 'sweetalert';
import { errorToast } from '../../utility/errorToast';
import { successToast } from '../../utility/successToast';
import axios from 'axios';
import './Register.scss';

const Register = ({ modal, setModel }) => {

    // handle modal close
    const handleModalClose = () => {
        setModel(false);
    }

    // use state
    const [input, setInput] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        day: 0,
        month: '',
        year: 0,
        gender: ''
    });

    // handle input
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    console.log(input);

    // Hanlde user form submit
    const handleUserFormSubmit = async (e) => {
        e.preventDefault();

        try {
            
            if( !input.name || !input.username || !input.email || !input.password || !input.gender || !input.day){
                errorToast('all fields are required!');
            }else {
    
                await axios.post('http://localhost:5050/api/user/register', input)
                .then( res => {
    
                    setInput({
                        name: '',
                        username: '',
                        email: '',
                        password: '',
                        day: 0,
                        month: '',
                        year: 0,
                        gender: ''
                    });
    
                    setModel(false);
    
                    swal("Success", "Your account has been successfully created, please login!", "success");
    
                } );
    
            }

        } catch (error) {
            swal("Error", error, "error");
            console.log(error);
        }
       
    }

  return (
    <>
        <Modal show={modal} onHide={false} centered className="modal">
            <Modal.Header>
            <Modal.Title>
                <div className="title__modal">
                    <h1 className='sign__up'>Sign Up</h1>
                    <span className='its__quick'>It's quick and easy</span>
                </div>
                <div className="close__bo">
                    <img onClick={ handleModalClose } src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" alt="" />
                </div>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ handleUserFormSubmit } className="modal__form">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" name='name' placeholder='First name' className='first__name' value={ input.name } onChange={ handleInput } />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name='username' placeholder='Username' className='surname' value={ input.username } onChange={ handleInput } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" name='email' placeholder='Mobile number or email address' className='mobile' value={ input.email } onChange={ handleInput } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="password" name='password' placeholder='New password' className='password' value={ input.password } onChange={ handleInput } />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">Date of Birth <a href="#"><AiFillQuestionCircle className='date__of-birth' /></a></label>
                        <div className="col-md-4">
                            <select name="day" id="day" onChange={ handleInput }>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select name="month" id="month" onChange={ handleInput }>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select name="year" id="year" onChange={ handleInput }>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">Gender <a href="#"><AiFillQuestionCircle className='gender__question' /></a></label>
                        <div className="col-md-4">
                            <label htmlFor="gender__male" className="gender__label">
                                <span className='gender__male'>Male</span>
                                <input type="radio" name="gender" id="gender__male" className="input__gender" value="Male" onChange={ handleInput } />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="gender__female" className="gender__label">
                                <span className='gender__female'>Female</span>
                                <input type="radio" name="gender" id="gender__female" className="input__gender" value="Female" onChange={ handleInput } />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="gender__custom" className="gender__label">
                                <span className='gender__custom'>Custom</span>
                                <input type="radio" name="gender" id="gender__custom" className="input__gender" value="Custom" onChange={ handleInput } />
                            </label>
                        </div>
                    </div>
                    <p className="text__one">People who use our service may have uploaded your contact information to Facebook. </p>
                    <p className="text__one">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    <div className="button">
                        <button type='submit' className="sign__up">Sign Up</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default Register;