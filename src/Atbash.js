import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";



export class Atbash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            output: ""
        }
        this.Atbash = this.Atbash.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    Atbash() {
        // -(x + 1) % numOfLetters
        let input = this.state.userInput;
        let output = "";
        for(let i = 0; i < input.length; i++) {
            if(input.charAt(i) !== " ") {
                let inputCharCode = input.charCodeAt(i);
                if ((inputCharCode >= 65) && (inputCharCode <= 90)) {
                    let inCharCode = (inputCharCode - 65);
                    let newChar = -(inCharCode + 1) % 26;
                    if(newChar < 0) {
                        newChar += 26;
                    }
                    let outChar = String.fromCharCode((newChar % 26) + 65);
                    output += outChar
                }

                else if ((inputCharCode >= 97) && (inputCharCode <= 122)) {
                    let inCharCode = (inputCharCode - 97);
                    let newChar = -(inCharCode + 1) % 26;
                    if(newChar < 0) {
                        newChar += 26;
                    }
                    let outChar = String.fromCharCode((newChar % 26) + 97);
                    output += outChar;
                }
            }
            else {
                output += input.charAt(i);
            }
    }
        this.setState({
            output: output
        });
        
    }




    render() {
        return (
            <div className="container">
                <div>
                    <InputGroup className="mb-3">
                        <FormControl
                        type="text"
                        placeholder="InputText"
                        aria-label="InputText"
                        aria-describedby="basic-addon2"
                        value={this.state.userInput}
                        onChange={this.handleInputChange}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary" onClick={this.Atbash}>Encrypt/ Decrypt</Button>
                        </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <p>{this.state.output}</p>
                </div>
        );
    }

}