import React from "react";
import "./ClassAct.css";

function ClassAct() {
    return (
        <div>
            <h1>Class Activity 3</h1>
            <h3>Details</h3>

            <div>
                {/* Table with Heading Company, Contact, Country */}
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>                        
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Definition List */}
            <h3>Definition</h3>
            <dl>
                <dt>ReactJS</dt>
                <dd>ReactJS is a free library for making websites look and feel cool. It's like a speacial helper for JavaScript. People from Facebook and other communities work together to keep it awesome and <b>up-to-date</b></dd>
                <dt>ReactDOM</dt>
                <dd>ReactDOM is a package in React that provides DOM-Specific methods that can be used at the top level of a web app to enable an efficient way of manaing <b>DOM elements</b> of the web page</dd>
            </dl>
        </div>  
    );
}

export default ClassAct;