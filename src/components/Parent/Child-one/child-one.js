import React, {Component} from "react";
import {Context} from "../../../context";

export default class ChildOne extends Component {
    render() {
        const state = this.context;
        return (
            <>
                <button onClick={() => state.setArg(state.arg += 1)}>Plus</button>
                <button onClick={() => state.setArg(state.arg -= 1)}>Minus</button>
                <button onClick={() => state.setArg(state.arg = 0)}>Clear</button>
            </>
        )
    }
}
ChildOne.contextType = Context;