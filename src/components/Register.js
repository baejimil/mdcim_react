import React, { Component } from 'react';
import { Content, Box } from 'adminlte-2-react';


export default function Register() {
    return (
        <Content title="Register" >
            <Box border solid>
                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />

                <div class="register-box">
                    <div class="register-logo">
                        <a href="/"><b>Raritan</b></a>
                    </div>

                    <div class="card">
                        <div class="card-body register-card-body">
                            <p class="login-box-msg">Register a new membership</p>
                            <br />
                            <form action="http://127.0.0.1:5000/register" method="POST" onSubmit='Do you really want to Sign Up?'>
                                <div class="input-group mb-3">
                                    <input name='username' type="text" class="form-control" placeholder="Username" style={{ left: 60, width: 240 }} />
                                </div>
                                <div class="input-group mb-3">
                                    <input name='email' type="email" class="form-control" placeholder="Email" style={{ left: 60, width: 240 }} />
                                </div>
                                <div class="input-group mb-3">
                                    <input name='password' type="password" class="form-control" placeholder="Password" style={{ left: 60, width: 240 }} />
                                </div>
                                <div class="row">
                                    <br /><br />
                                    <div class="col-4 text-center">
                                        <button type="submit" class="btn btn-primary" style={{ width: 300 }}>Register</button>
                                    </div>
                                </div>
                            </form>

                            <div class="social-auth-links text-center">
                                <p>- OR -</p>
                                <a href='/login' class="btn btn-danger" style={{ width: 300 }}>
                                    Go to Login Page
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Content>
    );
}