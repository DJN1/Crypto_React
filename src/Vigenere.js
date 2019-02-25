import React, { Component } from "react";
import { Button, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";


export class Vigenere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            op: "Decrypt",
            userInput: "",
            output: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOpChange = this.handleOpChange.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.Vigenere = this.Vigenere.bind(this);

    }

    handleInputChange(e) {
        console.log(e)
        let input = e.target.value;
        console.log(input);

        this.setState({
            userInput: e.target.value
        });
    }

    handleOpChange(e) {
        console.log(e);

        this.setState({
            op: e
        });
    }

    handleKeyChange(e) {
        console.log(e.target.value);
        this.setState({
            key: e.target.value
        });
    }



    Vigenere() {
        let input = this.state.userInput;
        let key = this.state.key;
        let keyLength = key.length;
        let output = "";
        let op = this.state.op;
        if(op === "Decrypt") {
            for(let i = 0; i < input.length; i++) {
                let keyChar = key.charCodeAt(i %  keyLength);
                let inChar = input.charCodeAt(i);
                let keyCharCode = keyChar;
                if((keyChar >= 65) && (keyChar <= 90)) {
                    keyCharCode = (keyChar - 65);
                }
                else if((keyChar >= 97) && (keyChar <= 122)) {
                    keyCharCode = (keyChar - 97);
                }
                if ((inChar >= 65) && (inChar <= 90)) {
                    let inCharCode = (inChar - 65);
                    let newChar = inCharCode - keyCharCode;
                    if(newChar < 0) {
                        newChar += 26;
                    }
                    output += String.fromCharCode((newChar % 26) + 65);
                }
                else if ((inChar >= 97) && (inChar <= 122)) {
                    let inCharCode = (inChar - 97);
                    let newChar = inCharCode - keyCharCode;
                    if(newChar < 0) {
                        newChar += 26;
                    }
                    output += String.fromCharCode((newChar % 26) + 97);
                }
            }
        }
        else {
            for(let i = 0; i < input.length; i++) {
                let keyIndex = (i % keyLength);
                let keyChar = key.charCodeAt(keyIndex);
                let inChar = input.charCodeAt(i);
                let keyCharCode = keyChar;
                if((keyChar >=65) && (keyChar <= 90)) {
                    keyCharCode = keyChar - 65;
                }
                else if((keyChar >= 97) && (keyChar <= 122)) {
                    keyCharCode = keyChar - 97;
                }
                if ((inChar >= 65) && (inChar <= 90)) {
                    let inCharCode = inChar - 65;
                    output += String.fromCharCode(((inCharCode + keyCharCode) % 26) + 65);
                }
                else if ((inChar >= 97) && (inChar <= 122)) {
                    let inCharCode = inChar - 97;
                    output += String.fromCharCode(((inCharCode + keyCharCode) % 26) + 97);
                }
            }
        }
        console.log(output);
        this.setState({
            output: output
        });
        // EkMi is the message encrypted at character i
        // Mi is the plaintext at i
        // Ki is the Key at i
        // let EkMi = (Mi + Ki) % 26;
    }

    render() {
        return(
            <div className="container">
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-primary"
                                title={this.state.op}
                                id="input-group-dropdown-1"
                                value={this.state.op}
                                onSelect={this.handleOpChanges}>
                                <Dropdown.Item href="#" onSelect={this.handleOpChange} eventKey="Decrypt">Decrypt</Dropdown.Item>
                                <Dropdown.Item href="#" onSelect={this.handleOpChange} eventKey="Encrypt">Encrypt</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup.Prepend>
                        <FormControl
                        type="text"
                        placeholder="InputText"
                        aria-label="InputText"
                        aria-describedby="basic-addon2"
                        value={this.state.userInput}
                        onChange={this.handleInputChange}
                        />  
                        <FormControl 
                        required="{true}"
                        type="text"
                        placeholder="Key"
                        aria-label="Key"
                        value={this.state.key}
                        onChange={this.handleKeyChange}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary" onClick={this.Vigenere}>{this.state.op}</Button>
                        </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <p>{this.state.output}</p>
                </div>
        );
    }


}