import React, {Component} from "react";
import {Context} from "../../context";
import ChildOne from "./Child-one/child-one";
import ChildTwo from "./Child-tho/child-two";

export default class Parent extends Component {

    setArg = (arg) => {
        this.setState({arg});
    }

    state = {
        arg: 0,
        setArg: this.setArg,
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                <ChildOne/>
                <ChildTwo/>
            </Context.Provider>
        )
    }
}