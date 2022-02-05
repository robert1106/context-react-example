import React, {Component} from "react";
import {Context} from "../../../context";

export default class ChildTwo extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => (
                    <h1>{context.arg}</h1>
                )}
            </Context.Consumer>
        )
    }
}