import React, { Component } from "react";
import { Button, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";


export class Caesar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shift: 13,
            op: "Decrypt",
            userInput: "",
            output: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOpChange = this.handleOpChange.bind(this);
        this.handleShiftChange = this.handleShiftChange.bind(this);
        this.caesarShift = this.caesarShift.bind(this);
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

    handleShiftChange(e) {
        console.log(e.target.value);
        this.setState({
            shift: e.target.value
        });
    }


    caesarShift() {
        let str = this.state.userInput;
        let amount = this.state.shift;
        let op = this.state.op;
        if(op === "Decrypt") {
            amount = (26 - amount) % 26;
        }
        if (amount < 0)
		    return this.caesarShift(str, amount + 26);
        let output = "";
	        for (let i = 0; i < str.length; i ++) {
		        let c = str[i];
		        if (c.match(/[a-z]/i)) {
			        let code = str.charCodeAt(i);
			        if ((code >= 65) && (code <= 90)) {
                        output += String.fromCharCode(((code - 65 + amount) % 26) + 65);
                    }
			        else if ((code >= 97) && (code <= 122)) {
                        output += String.fromCharCode(((code - 97 + amount) % 26) + 97);
                    }
		        }
            }
        this.setState({
            output: output
        });
    };
    


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
                        type="number"
                        placeholder="Shift by..."
                        aria-label="Shift by..."
                        min="0"
                        max="25"
                        value={this.state.shift}
                        onChange={this.handleShiftChange}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary" onClick={this.caesarShift}>Button</Button>
                        </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <p>{this.state.output}</p>
                </div>
        );
    }
}
