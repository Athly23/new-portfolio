import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div>
        <a
          href="https://docs.google.com/document/d/13cIELRE-HFa1btAVgWrzqvd21zn58tGjkDYwH_2foq0/edit?usp=sharing" //new resume link to updated resume
          rel="noopener noreferrer" //brings to new page
          target="_blank"
        ></a>
        {/* <img src={pdf}></img> */}
      </div>
    );
  }
}

export default Resume;
