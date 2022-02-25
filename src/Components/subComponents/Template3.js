import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Template2 from "./Template2";
export default class Template3 extends Component {
  render() {
    return (
      <div>
        Template3
        <br/>
          {/* <Template2 ref={(response)=>(this.componentRef=response)} />
          {
            <ReactToPrint 
              content={()=>this.componentRef}
              trigger={()=><button className="btn btn-primary">Print to PDF!</button>}
            />
          } */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          facere excepturi minima id doloribus facilis, labore sequi porro
          tenetur exercitationem. Nemo ipsa quis neque voluptatibus pariatur
          possimus beatae tenetur non.
        </p>
      </div>
    );
  }
}
