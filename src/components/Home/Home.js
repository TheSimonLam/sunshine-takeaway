import React, {Component} from "react";
import List from "./List";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    Homepage.
                    <List />
                </div>
            </div>
        );
    }
}

export default Home;
