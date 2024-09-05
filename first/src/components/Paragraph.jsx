import React from 'react';
import "./Paragraph.css";

function Paragraph({ content }) {
    return <p className="a">{content}</p>;
};

function SecondPara({ content }) {
    return <p className="b">{content}</p>;
}

function ThirdPara({ content }) {
    return <h3>{content}</h3>;
}

export default Paragraph;
export { SecondPara, ThirdPara };
