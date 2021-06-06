import React from "react";
//import "./style.css";
import {Navbar,Nav,Container,Col,Row,InputGroup,FormControl,Button,Tabs,Tab} from "react-bootstrap";
import Logo from "../images/logo_sharp.png";
import Tree from "../components/Tree.js";
//import {OpenSeaDragonViewer} from "../../Components/OpenSeaDragonViewer";
import Logo2 from "../images/logo_sharp.png";
//import OpenSeaDragon from "openseadragon"

const treeData = [
    {
      key: "0",
      label: "Documents",
      icon: "fa fa-folder",
      title: "Documents Folder",
      children: [
        {
          key: "0-0",
          label: "Document 1-1",
          icon: "fa fa-folder",
          title: "Documents Folder",
          children: [
            {
              key: "0-1-1",
              label: "Document-0-1.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-2",
              label: "Document-0-2.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-3",
              label: "Document-0-3.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-4",
              label: "Document-0-4.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      icon: "fa fa-desktop",
      title: "Desktop Folder",
      children: [
        {
          key: "1-0",
          label: "document1.doc",
          icon: "fa fa-file",
          title: "Documents Folder",
        },
        {
          key: "0-0",
          label: "documennt-2.doc",
          icon: "fa fa-file",
          title: "Documents Folder",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      icon: "fa fa-download",
      title: "Downloads Folder",
      children: [],
    },
  ];



export default class LandingPage extends React.Component{

  state={
    imagetoload : ""
  }

 handlebutton1click=(e)=>{
    this.setState({imagetoload:e.target.innerHTML})
    console.log(this.state)
  }
    render(){
        return(
            <div>
                <section>
                <Navbar  expand="sm" bg="white" variant="light" className="border-bottom" fixed="top" >
                    <Navbar.Brand href="/home"><img
                        src={Logo}
                        width="180"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
               
                    <Nav className="mr-auto">
                   
                    </Nav>
                    <Nav className="navitems">
                        <Nav.Link href="#deets" color="white">UserName</Nav.Link>
                        <Nav.Link href="#memes">Inbox</Nav.Link>
                    </Nav>
                </Navbar>
                </section>
                <section className="fbody">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="fsidepanel">
                                    <br></br>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Enter Patient ID"
                                        aria-label="Patient id"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                        <Button variant="outline-secondary">Search</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <hr></hr>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Enter Sample ID"
                                        aria-label="sampe id"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                        <Button variant="outline-secondary">Search</Button>
                                        </InputGroup.Append>
                                    </InputGroup> 
                                    <hr></hr>
                                    <Tree data={treeData} />
                            </div>
                            </Col>
                            <Col xs={9}>
                                <div className="fviewerpanel">
                                <Tabs defaultActiveKey="Report" >
                                    <Tab eventKey="Report" title="Report" >
                                    <div>
                                      <Button onClick={this.handlebutton1click}>Logo</Button>
                                      <Button onClick={this.handlebutton1click}>Logo2</Button>
                                      {/* //<OpenSeaDragonViewer image={this.imageobject} /> */}
                                     {/* { OpenSeadragon({
                                              tileSources: {
                                                  type: 'image',
                                                  url:  '../../images/logo1.png',
                                                  buildPyramid: false
                                              }
                                          })} */}
                                    </div>
                                    </Tab>
                                    <Tab eventKey="Share" title="Share" >
                                        <h1>Tab 2</h1>
                                    </Tab>
                                    
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
            </div>
        )
    }
}
