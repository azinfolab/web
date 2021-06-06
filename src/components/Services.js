import React, { Component } from "react";
import { BiOutline } from "react-icons/bi";
import { FcBiotech ,FcBiomass} from "react-icons/fc";
import { GiMedicines} from "react-icons/gi";
import CreateUser from "./create-user.component"
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <BiOutline />,
        title: "Digital Pathology Solutions",
        info:
          "Digital Pathology related"
      },
      {
         icon: <FcBiotech />,
        title: "Diagnostic Radiology Solutions",
        info:
          "Diagnostic Radiology related"
      },
      {
         icon: <FcBiomass />,
        title: "Diagnostic Cardiology Solutions",
        info:
          "Lorem ipsum "
      },
      {
         icon: <GiMedicines />,
        title: "Diagnostic Neurology Solutions",
        info:
          "Lorem ipsum"
      }
    ]
  };
  render() {
    return (
      <>

      

      <section className="services">
      <Title title="Subscribe" />
      <CreateUser/>
      <p> </p>
      <br/>
      <br/>
      
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
      
      </>
    );
  }
}
