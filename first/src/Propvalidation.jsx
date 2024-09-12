import React from "react";
import PropTypes from "prop-types";

function Propvalidation(props) {
    return (
        <>
            <div>
                <h1>ReactJS Props Validation Example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>

                    <tr>
                        <td>Array</td>
                        <td>{props.propArray.join(", ")}</td>
                        <td>{props.propArray ? "true" : "false"}</td>
                    </tr>

                    <tr>
                        <td>Boolean</td>
                        <td>{props.propBool ? "true" : "false"}</td>
                        <td>{props.propBool ? "true" : "false"}</td>
                    </tr>

                    <tr>
                        <td>Function</td>
                        <td>{props.propFunc(5)}</td>
                        <td>{props.propFunc(5) ? "true" : "false"}</td>
                    </tr>

                    <tr>
                        <td>String</td>
                        <td>{props.propString}</td>
                        <td>{props.propString ? "true" : "false"}</td>
                    </tr>

                    <tr>
                        <td>Number</td>
                        <td>{props.propNumber}</td>
                        <td>{props.propNumber ? "true" : "false"}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

Propvalidation.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
};

Propvalidation.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) {
        return e;
    },
    propNumber: 1,
    propString: "Hello, World!",
};

export default Propvalidation;
