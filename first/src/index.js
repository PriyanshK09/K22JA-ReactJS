import React from 'react';
import ReactDOM from 'react-dom';
import Navigation  from './Navigation';
import './index.css';

// ReactDOM.render(<div>
//   <h1>Heading 1</h1>
//   <p>Hello</p>
//   <p>Paragraph 2</p>
//   <p>Hello, World!</p>
//   </div>,
//   document.getElementById('root'));

  // --------------------------------------------
  // what is react fragment and why it is used?
  // React Fragments let you group a list of children without adding extra nodes to the DOM.

  // what is a react dom and how it is different from react?
  // React is a library for building user interfaces, which comprises a set of utilities for managing the component lifecycle and rendering components.
  // React DOM is a library that renders React components in the DOM. It is a specific implementation of React for the web browser.

  // what is jsx?
  // full form of jsx is javascript xml. jsx is a syntax extension for javascript that allows you to write html elements in javascript code. it is used to describe what the ui should look like. jsx produces react elements.
  // --------------------------------------------

// var h1 = document.createElement('h1');
//   h1.innerHTML = 'Hello 1';
//     document.getElementById('root'.appendChild('h1')
//   );

ReactDOM.render(
    <Navigation />,document.getElementById('root')
);

