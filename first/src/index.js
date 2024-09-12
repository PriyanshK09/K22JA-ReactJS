import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Paragraph, { SecondPara, ThirdPara } from './components/Paragraph';
import Propvalidation from './Propvalidation';
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassAct from './ClassAct';
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
  <>
    <Navigation home="Home Page" about="About" services="Services" />
    <Paragraph content="ReactJS is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them when the data changes." />
    <SecondPara content="ReactJS follows a component-based architecture, making it easy to build complex UIs by composing smaller, reusable components. With ReactJS, you can build interactive and dynamic web applications." />
    <ThirdPara content="ReactJS is maintained by Facebook and a community of developers. It is open-source and has a large ecosystem of tools and libraries that make it easy to build and deploy web applications." />
    <Propvalidation />
    <Bootstrap />
    <ClassAct />

  </>,
  document.getElementById('root')
);


