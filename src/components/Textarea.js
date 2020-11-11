import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';

const code = `def index():
    return 'Hi'`;

export default class Textarea extends Component {
    state = { code }

    render() {
        return (
            <>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    }}
                >
                    <div style={{
                        paddingLeft: '20px',
                        paddingRight: '10px',
                        fontSize: '20px',
                        width: '30%',
                    }}>
                        {this.props.label}
                    </div>
                    <div style={{ width: '65%' }}>
                        <Editor
                            name={this.props.name}
                            value={this.props.value}     // input your state
                            onValueChange={this.props.onChange}
                            highlight={code => highlight(code, languages.python, 'python')}
                            padding={10}
                            insertSpaces='true'
                            tabSize='4'
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                            }}
                        />
                    </div>
                </div>
            </>
        );
    }
}