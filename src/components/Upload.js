import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        }
    }

    render() {
        return (
            <div>
                <div style={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '20px',
                    paddingBottom: '15px',
                    paddingTop: '25px',
                    display: 'inline-block',
                    width: '30%',
                }}>{this.props.label}</div>
                <div style={{ display: 'inline-block', }}>
                    <input type="file" name={this.props.name} onChange={null} />
                </div>
            </div>
        )
    }
}

export default App