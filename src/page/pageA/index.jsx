import React from "react";
import Title from "./component/title";
import Button from "../../common/component/button";

class A extends React.Component {
     render() {
        return (
            <div>
                <Button>xxx</Button>
                <Title title="Test A page title"/>
            </div>
        );
    }
}

export default A;
