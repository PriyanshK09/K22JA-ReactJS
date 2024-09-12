import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mt-5">Welcome to Bootstrap with React</h1>
                    <p className="text-center">This is a simple example of using Bootstrap in a React component.</p>
                    <div className="text-center">
                        <button className="btn btn-primary">Click Me</button>
                    </div>

                    <h1 className="text-center mt-5">Bootstrap Buttons Example</h1>
                    <div className="text-center">
                        <button className="btn btn-primary">Primary Button</button>
                        <button className="btn btn-secondary">Secondary Button</button>
                        <button className="btn btn-success">Success Button</button>
                        <button className="btn btn-danger">Danger Button</button>
                        <button className="btn btn-warning">Warning Button</button>
                        <button className="btn btn-info">Info Button</button>
                        <button className="btn btn-light">Light Button</button>
                        <button className="btn btn-dark">Dark Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootstrapComponent;