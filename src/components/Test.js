import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';

const code = `def index():
    return 'Hi'`;

class HelloWorld extends Component {
    state = { code }

    render() {
        return (
            <Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="Hello World">
                <Row>
                    <Col xs={6}>
                        <Box title="My first box" type="primary" closable collapsable >
                            Hello World
                        </Box>
                    </Col>
                    <Col xs={6}>
                        <Box title="Another box">
                            Content goes here
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Box>
                            <div style={{ width: '50%' }}>
                                <Editor
                                    name='editor'
                                    value={this.state.code}
                                    style={{ color: 'lightyellow' }}
                                    onValueChange={code => this.setState({ code })}
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
                        </Box>
                    </Col>
                </Row>

            </Content>
        );
    }
}

export default class Test extends Component {
    state = { code }
    render() {
        return (
            <>
                <HelloWorld />
            </>
        );
    }
}

// export default function Test() {
//     const [value, setValue] = useState(code);
//     return (
//         <Content title='Test'>
//             <Box title='Test' border type='default' collapsable solid>
//                 <Editor
//                     value={value}
//                     onValueChange={setValue}
//                     highlight={code => highlight(code, languages.js, 'js')}
//                     padding={10}
//                     style={{
//                         fontFamily: '"Fira code", "Fira Mono", monospace',
//                         fontSize: 12,
//                     }}
//                 />
//             </Box>
//         </Content>
//     );
// };
