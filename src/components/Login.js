import React, { Component } from 'react';
import { Content, Box } from 'adminlte-2-react';

export default function Login() {
    return (
        <Content title="Login">
            <Box border solid>
                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />

                <div class="login-box">
                    <div class="login-logo">
                        <a href="/"><b>Raritan</b></a>
                    </div>
                    <div class="card">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg">Sign in to start your session</p>
                            <br />
                            <form action='http://127.0.0.1:5000/login' method="post">
                                <div class="input-group mb-3">
                                    <input name="username" type="text" class="form-control" placeholder="Username" style={{ left: 60, width: 240 }} />
                                </div>
                                <div class="input-group mb-3">
                                    <input name="password" type="password" class="form-control" placeholder="Password" style={{ left: 60, width: 240 }} />
                                </div>
                                <br /><br />
                                <div class="row">
                                    <div class="col-4 text-center">
                                        <button type="submit" class="btn btn-primary" style={{ width: 300 }}>Sign In</button>
                                    </div>
                                </div>
                            </form>
                            <div class="social-auth-links text-center">
                                <p>- OR -</p>
                                <a href="/register" class="btn btn-danger" style={{ width: 300 }}>
                                    Go to Register Page
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Content>
    );

}