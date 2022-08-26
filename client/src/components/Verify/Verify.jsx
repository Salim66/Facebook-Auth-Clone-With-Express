import React, { useEffect, useState }  from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { successToast } from '../../utility/successToast';
import { errorToast } from '../../utility/errorToast';


const Verify = () => {

    const params = useParams();
    const navigate = useNavigate();



    // // Form OTP 
    // const [input, setInput] = useState({
    //     userId: params.id,
    //     code: '',
    // });

    // // Handle Input
    // const handleInput = (e) => {
    //     setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))
    // }

    // // Handle verify account form
    // const handleVerifyAccountForm = (e) => {
    //     e.preventDefault();

    //     try {
            
    //         if( !input.userId || !input.code ){
    //             createToast("Please insert your 6 digit OTP Code!");
    //         }else {

    //             axios.post('http://localhost:5050/api/user/verify', input)
    //             .then( res => {
    //                 console.log(res.data);
    //                 createToast("Account activated successfully");
    //                 navigate('/login');

    //             })
    //             .catch( error => {

    //                 createToast("Account activated failed");
    //                 navigate('/login');

    //             });

    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    

    // for send mail verification
    

    useEffect( () => {

        axios.post('http://localhost:5050/api/user/verify', params)
        .then( res => {
            
            successToast("Account activated successfully");
            navigate('/login');

        })
        .catch( error => {

            errorToast("Account activated failed");
            navigate('/login');

        });

    });

  return (
    <>
        <h3>Verify By Email</h3>
        {/* <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={ 4 }>
                    <Card>
                        <Card.Header><h4>Verify Your Account</h4></Card.Header>
                        <Card.Body>
                            <form onSubmit={ handleVerifyAccountForm }>
                                <div className="my-2">OTP Code</div>
                                <input type="text" name="code" className="form-control" onChange={ handleInput } value={ input.code } />
                                <Button type='submit' variant='primary' className='my-3'>Verify</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> */}
    </>
  )
};

export default Verify;