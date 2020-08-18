import React from 'react';
import DropDown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function CustomDrop() {
    return(
        <div>
            <DropDown>
                    <DropDown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </DropDown.Toggle>

                    <DropDown.Menu.Menu>
                        <DropDown.Item href="#/action-1">Action</DropDown.Item>
                        <DropDown.Item href="#/action-2">Another action</DropDown.Item>
                        <DropDown.Item href="#/action-3">Something else</DropDown.Item>
                    </DropDown.Menu.Menu>
                </DropDown>
        </div>
    );
}


export default CustomDrop;