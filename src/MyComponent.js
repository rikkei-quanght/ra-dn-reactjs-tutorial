import React from "react";

class MyComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <p>Hello {this.props.studentName}</p>
                <p>Welcome {this.props.studentName} to Rikkei Academy</p>
            </div>
        );
    }
}

export default MyComponent;