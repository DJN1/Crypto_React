import Reach, { Component } from "react";
import { Button, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";



export class Affine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            op: "Encrypt",
            userInput: "",
        }
        this.multiplicativeInverse = this.multiplicativeInverse.bind(this);
    }

    multiplicativeInverse(a, b) { 
        if (b == 0) {
            return [1, 0, a];
        }
        temp = xgcd(b, a % b);
        x = temp[0];
        y = temp[1];
        d = temp[2];
        return [y, x-y*Math.floor(a/b), d];
    }




    render() {
        return (
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