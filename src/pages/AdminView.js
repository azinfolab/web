import React from "react";
//import "./style.css";
import Logo from "../images/logo_sharp.png";
import {Navbar,Nav,Tabs,Tab,Form,Row,Col,Button,Dropdown,DropdownButton} from "react-bootstrap";
import Axios from "axios";
//import firebase from 'firebase/app';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


export default class AdminView extends React.Component{
    state = {
        newInstitutionVal: "",
        institutionsVal:[],
        newDepartmentVal: "",
        departmentsVal:[],
        newProjectVal: "",
        projectsVal:[],
        newPhysicianVal:"",
        physiciansVal:[],
        rawprojectsval:[],
        rawdepartmentsval:[],
        rawinstitutionsval:[],
        rawphysiciansval:[],
        udSampleId:"",
        udProject:"",
        udInstitution:"",
        udDepartment:"",
        udPatientId:"",
        udImageName:"",
        udDate:"",
        udTime:"",
        udPhysician:"",
        udNote:"",
        udDiagnosis:"",
        udImage:"",
        samplefound:0,
        sampleUploaded:0,
        fileselected:null,
        cuUserId:"",
        cuFirstName:"",
        cuLastName:"",
        cuInstitution:"",
        cuDepartment:"",
        cuPassword:"",
        cuProject:[],
        cuPhysician:"",
        userfound:0,
      };


      componentDidMount(){
          //getting projects list from DB
        Axios.get('/projectslist')
        .then((response)=>{
            Object.values(response.data).map((data,index)=>{
                this.setState({
                    projectsVal:[...this.state.projectsVal,data]
                })
                
            })
            this.setState({
            rawprojectsval:[...this.state.rawprojectsval,response.data]
        })
        
        })

        //Getting departments list from DB
        Axios.get('/departmentslist')

        .then((response)=>{
        this.setState({
            rawdepartmentsval:[...this.state.rawdepartmentsval,response.data]
        })
            Object.values(response.data).map((data,index)=>{
                this.setState({
                    departmentsVal:[...this.state.departmentsVal,data]
                })
            })
        })

        //Getting Institutions list from DB
        Axios.get('/institutionslist')
        .then((response)=>{
        this.setState({
            rawinstitutionsval:[...this.state.rawinstitutionsval,response.data]
        })
            Object.values(response.data).map((data,index)=>{
                this.setState({
                    institutionsVal:[...this.state.institutionsVal,data]
                })
            })
        })

         //Getting Physicians list from DB
         Axios.get('/physicianslist')
         .then((response)=>{
         this.setState({
             rawphysiciansval:[...this.state.rawphysiciansval,response.data]
         })
             Object.values(response.data).map((data,index)=>{
                 this.setState({
                     physiciansVal:[...this.state.physiciansVal,data]
                 })
             })
         })

      }

      
      onProjectSubmit = () => {
        this.setState({
            projectsVal:[...this.state.projectsVal,this.state.newProjectVal]
        });
        const projecttoadd = {[Date.now()]:this.state.newProjectVal}
        Axios.post('/addproject',projecttoadd)
        .then(response=>{
            if(response.data === "success")
            {

            }
            else{
                window.alert("something went wrong, please try again!")
            }
        })
        this.setState({newProjectVal:""})
        
      };
    
      onDepartmentSubmit = () => {
        this.setState({
            departmentsVal:[...this.state.departmentsVal,this.state.newDepartmentVal]
        });
        const departmenttoadd = {[Date.now()]:this.state.newDepartmentVal}
        Axios.post('/adddepartment',departmenttoadd)
        .then(response=>{
            if(response.data === "success")
            {

            }
            else{
                window.alert("something went wrong, please try again!")
            }
        })
        this.setState({newDepartmentVal:""})
    };

    onInstitutionSubmit = () => {
        this.setState({
            institutionsVal:[...this.state.institutionsVal,this.state.newInstitutionVal]
        });
        const institutiontoadd = {[Date.now()]:this.state.newInstitutionVal}
        Axios.post('/addproject',institutiontoadd)
        .then(response=>{
            if(response.data === "success")
            {

            }
            else{
                window.alert("something went wrong, please try again!")
            }
        })
        this.setState({newInstitutionVal:""})
    };

    onPhysicianSubmit = () =>{
        this.setState({
            physiciansVal:[...this.state.physiciansVal,this.state.newPhysicianVal]
        });
        const physiciantoadd = {[Date.now()]:this.state.newPhysicianVal}
        Axios.post('/addphysician',physiciantoadd)
        .then(response=>{
            if(response.data === "success")
            {

            }
            else{
                window.alert("something went wrong, please try again!")
            }
        })
        this.setState({newPhysicianVal:""})
    }
    onSampleSearchSubmit=()=>{
        const obj = {samplename: this.state.udSampleId};
        Axios.post('/searchsample',obj)
        .then((response)=>{
            if(response.data === "Document not exist")
            {
                window.alert("Sample does not exist")
               this.setState({samplefound:0})
            }
            else{
                this.setState({
                    udProject:response.data.udProject,
                    udInstitution:response.data.udInstitution,
                    udDepartment:response.data.udDepartment,
                    udPatientId:response.data.udPatientId,
                    udImageName:response.data.udImageName,
                    udDate:response.data.udDate,
                    udTime:response.data.udTime,
                    udPhysician:response.data.udPhysician,
                    udNote:response.data.udNote,
                    udDiagnosis:response.data.udDiagnosis,
                    udImage:response.data.udImage,
                    samplefound:1
                })
            }
        }) 
      }

    onUserSearchSubmit=()=>{
        const obj = {username: this.state.cuUserId};
        Axios.post('/searchuser',obj)
        .then((response)=>{
            if(response.data === "Document not exist")
            {
                window.alert("User does not exist")
               this.setState({userfound:0})
            }
            else{
                this.setState({
                    cuUserId:response.data.cuUserId,
                    cuFirstName:response.data.cuFirstName,
                    cuLastName:response.data.cuLastName,
                    cuInstitution:response.data.cuInstitution,
                    cuDepartment:response.data.cuDepartment,
                    cuPassword:response.data.cuPassword,
                    cuProject:response.data.cuProject,
                    cuPhysician:response.data.cuPhysician,
                    userfound:1,
                    
                })
                console.log(this.state)
            }
        }) 
    }

    onSampleUpload=()=>{
        if(this.state.fileselected === null)
        {
            window.alert("Image must be selected to update!");
        }
        else
        {
            /*firebase.storage().ref(`${this.state.udProject}/`+this.state.udImageName).put(this.state.fileselected)
        .then((response)=>{
            const obj = {
                udSampleId:this.state.udSampleId,
                udProject:this.state.udProject,
                udInstitution:this.state.udInstitution,
                udDepartment:this.state.udDepartment,
                udPatientId:this.state.udPatientId,
                udImageName:this.state.udImageName,
                udDate:this.state.udDate,
                udTime:this.state.udTime,
                udPhysician:this.state.udPhysician,
                udNote:this.state.udNote,
                udDiagnosis:this.state.udDiagnosis
            }
            Axios.post('/uploadsample',obj)
            .then((response)=>{
                if(response.data === "success")
                {
                    this.setState({sampleUploaded:1})
                    window.alert("Sample Uploaded Successfully")
                }
                else{
                    this.setState({sampleUploaded:0})
                    window.alert("Sample Uploading Failed")
                }
            })
        })
        .catch(err =>  window.alert("Something went wrong, try again!"))
        */
        }
        
    }

    onUserUpload=()=>{
        
        const obj = {
            cuUserId:this.state.cuUserId,
            cuFirstName:this.state.cuFirstName,
            cuLastName:this.state.cuLastName,
            cuInstitution:this.state.cuInstitution,
            cuDepartment:this.state.cuDepartment,
            cuPassword:this.state.cuPassword,
            cuProject:this.state.cuProject,
            cuPhysician:this.state.cuPhysician
        }
        Axios.post('/uploaduser',obj)
        .then((response)=>{
            if(response.data === "success")
            {
                this.setState({userUploaded:1})
                window.alert("User Uploaded Successfully")
            }
            else{
                this.setState({userUploaded:0})
                window.alert("User Uploading Failed")
            }
        })
        .catch(err =>  window.alert("Something went wrong, try again!"))
    }

    handlefilechange=(event)=>{
        this.setState({fileselected:event.target.files[0]})
        
    }

    handleInstitutionSelect=(evtkey,evt)=>{
        this.setState({cuInstitution:evt.target.innerHTML})
    }

    handleDepartmentSelect=(evtkey,evt)=>{
        this.setState({cuDepartment:evt.target.innerHTML})
    }

    handleGroupSelect=(evtkey,evt)=>{
        this.setState({ cuPhysician:evt.target.innerHTML})
    }
    
    handleudDepartmentSelect=(evtkey,evt)=>{
        this.setState({udDepartment:evt.target.innerHTML})
    }

    handleudProjectSelect=(evtkey,evt)=>{
        this.setState({udProject:evt.target.innerHTML})
    }

    handleudInstitutionSelect=(evtkey,evt)=>{
        this.setState({udInstitution:evt.target.innerHTML})
    }
    
    render(){
        return(
            <div>
                <section>
                <Navbar  expand="sm" bg="white" variant="light"   >
                    {/* <Navbar.Brand href="#home"><img
                        src={Logo}
                        width="140"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand> */}
               
                    <Nav className="mr-auto">
                   
                    </Nav>
                    <Nav className="navitems">
                        <Nav.Link href="#deets" color="white">UserName</Nav.Link>
                        <Nav.Link href="#memes">Inbox</Nav.Link>
                    </Nav>
                </Navbar>
                </section>
                <section className="fbody">
                <Tabs defaultActiveKey="Create User" transition={false} className="tabscontainer" >
                    <Tab eventKey="Create User" title="Create a New User" className="createusertab" >
                        <div className="entrycontainer container">
                            <Row>
                                <Col xs={9}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter User ID to search..." value={this.state.cuUserId} onChange={e => this.setState({ cuUserId: e.target.value })} />
                                </Form.Group>
                                </Col>
                                <Col xs={3}>
                                <Button className="btnFormSend" variant="outline-success" onClick={this.onUserSearchSubmit}>Search User</Button>
                                </Col>
                            </Row>
                            
                        </div>
                        <div className="container">
                            <h5>Create New User:</h5>
                            <Row>
                                <Col>
                                    <Form.Group>
                                    <Form.Label>User ID</Form.Label>
                                        <Form.Control type="text" value={this.state.cuUserId} onChange={e => this.setState({ cuUserId: e.target.value })} />
                                    </Form.Group>
                                    
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label> First Name</Form.Label>
                                        <Form.Control type="text"   value={this.state.cuFirstName} onChange={e => this.setState({ cuFirstName: e.target.value })} />
                                    </Form.Group>
                                   
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label> Last Name</Form.Label>
                                        <Form.Control type="text"  value={this.state.cuLastName} onChange={e => this.setState({ cuLastName: e.target.value })} />
                                    </Form.Group>
                                    
                               </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Institution</Form.Label>
                                    <DropdownButton
                                        alignRight
                                        size="lg"
                                        title={this.state.cuInstitution === ""?"Select Institution":this.state.cuInstitution}
                                        id="dropdown-menu-align-right"
                                        onSelect = {this.handleInstitutionSelect}
                                            >
                                            {this.state.institutionsVal.map((value,index)=>{
                                                return(<Dropdown.Item eventkey={index}>{value}</Dropdown.Item>)
                                            })}  
                                    </DropdownButton>
                                    </Form.Group>
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label>Department</Form.Label>
                                    <DropdownButton
                                        alignRight
                                        size="lg"
                                        title={this.state.cuDepartment === ""?"Select Institution":this.state.cuDepartment}
                                        id="dropdown-menu-align-right"
                                        onSelect = {this.handleDepartmentSelect}
                                            >
                                            {this.state.departmentsVal.map((value,index)=>{
                                                return(<Dropdown.Item eventkey={index}>{value}</Dropdown.Item>)
                                            })}  
                                    </DropdownButton>
                                    </Form.Group>
                                    
                               </Col>
                               <Col>
                               <Form.Group>
                                    <Form.Label>Group Select</Form.Label>
                                    <DropdownButton
                                        alignRight
                                        size="lg"
                                        title={this.state.cuPhysician === ""?"Select Group":this.state.cuPhysician}
                                        id="dropdown-menu-align-right"
                                        onSelect = {this.handleGroupSelect}
                                            >
                                            {this.state.physiciansVal.map((value,index)=>{
                                                return(<Dropdown.Item eventkey={index}>{value}</Dropdown.Item>)
                                            })}  
                                    </DropdownButton>
                                    </Form.Group>
                                    
                               </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                    <Form.Label>Projects</Form.Label>
                                         <DropdownMultiselect
                                            options={this.state.projectsVal}
                                            name="Projects"
                                            handleOnChange={(value)=>{console.log(this.state)}}
                                        />
                                    </Form.Group>
                               </Col>
                               
                            </Row>
                            <Row className="text-center" >
                                <Col style={{marginTop:"20px"}}>
                                <Form.Group>
                                    <Form.Label> Password</Form.Label>
                                        <Form.Control type="text"  value={this.state.cuPassword} onChange={e => this.setState({ cuPassword: e.target.value })} />
                                    </Form.Group>
                                </Col>
                            <Col style={{marginTop:"50px"}}>
                                    <Button variant="success" onClick={this.onUserUpload}>Upload User</Button>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="Upload data" title="Upload data" >
                        <div className="entrycontainer container">
                            <Row>
                                <Col xs={9}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Sample ID to search..." value={this.state.udSampleId} onChange={e => this.setState({ udSampleId: e.target.value })} />
                                </Form.Group>
                                </Col>
                                <Col xs={3}>
                                <Button className="btnFormSend" variant="outline-success" onClick={this.onSampleSearchSubmit}>Search Sample</Button>
                                </Col>
                            </Row>
                            
                        </div>
                        <div className="container">
                            <h5>Upload new Sample:</h5>

                            <Row>
                               <Col>
                                    <Form.Group>
                                    <Form.Label>Sample ID</Form.Label>
                                        <Form.Control type="text" value={this.state.udSampleId} onChange={e => this.setState({ udSampleId: e.target.value })} />
                                    </Form.Group>
                                    
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label> Patient ID</Form.Label>
                                        <Form.Control type="text"   value={this.state.udPatientId} onChange={e => this.setState({ udPatientId: e.target.value })} />
                                    </Form.Group>
                                   
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label> Physician</Form.Label>
                                        <Form.Control type="text"  value={this.state.udPhysician} onChange={e => this.setState({ udPhysician: e.target.value })} />
                                    </Form.Group>
                                    
                               </Col>
                            </Row>
                            <Row>
                               <Col>
                               <Form.Group>
                                    <Form.Label>Project</Form.Label>
                                    <DropdownButton
                                        alignRight
                                        size="lg"
                                        title={this.state.udProject === ""?"Select Project":this.state.udProject}
                                        id="dropdown-menu-align-right"
                                        onSelect = {this.handleudProjectSelect}
                                            >
                                            {this.state.projectsVal.map((value,index)=>{
                                                return(<Dropdown.Item eventkey={index}>{value}</Dropdown.Item>)
                                            })}  
                                    </DropdownButton>
                                    </Form.Group>
                               </Col>
                               <Col>
                               <Form.Group>
                                    <Form.Label>Institution</Form.Label>
                                    <DropdownButton
                                        alignRight
                                        size="lg"
                                        title={this.state.udInstitution === ""?"Select Institution":this.state.udInstitution}
                                        id="dropdown-menu-align-right"
                                        onSelect = {this.handleudInstitutionSelect}
                                            >
                                            {this.state.institutionsVal.map((value,index)=>{
                                                return(<Dropdown.Item eventkey={index}>{value}</Dropdown.Item>)
                                            })}  
                                    </DropdownButton>
                                    </Form.Group>
                               </Col>
                               <Col>
                               <Form.Group>
                                    <Form.Label>Department</Form.Label>
                                    <DropdownButton
                                        alignRight
                                        size="lg"
                                        title={this.state.udDepartment === ""?"Select Institution":this.state.udDepartment}
                                        id="dropdown-menu-align-right"
                                        onSelect = {this.handleudDepartmentSelect}
                                            >
                                            {this.state.departmentsVal.map((value,index)=>{
                                                return(<Dropdown.Item eventkey={index}>{value}</Dropdown.Item>)
                                            })}  
                                    </DropdownButton>
                                    </Form.Group>
                               </Col>
                            </Row>
                            <Row>
                               <Col>
                                    <Form.Group>
                                    <Form.Label>Image Name </Form.Label>
                                        <Form.Control type="text"  value={this.state.udImageName} onChange={e => this.setState({ udImageName: e.target.value })} />
                                    </Form.Group>
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label>Date </Form.Label>
                                        <Form.Control type="text" value={this.state.udDate} onChange={e => this.setState({ udDate: e.target.value })} />
                                    </Form.Group>
                               </Col>
                               <Col>
                                    <Form.Group>
                                    <Form.Label>Time </Form.Label>
                                        <Form.Control type="text"  value={this.state.udTime} onChange={e => this.setState({ udTime: e.target.value })} />
                                    </Form.Group>
                               </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                    <Form.Label>Note </Form.Label>
                                        <Form.Control type="text"  value={this.state.udNote} onChange={e => this.setState({ udNote: e.target.value })} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                    <Form.Label>Diagnosis </Form.Label>
                                        <Form.Control type="text" as="textarea"  value={this.state.udDiagnosis} onChange={e => this.setState({ udDiagnosis: e.target.value })} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" accept="image/*" label="Select image to upload" onChange={this.handlefilechange}/>
                                </Form.Group>
                                </Col>
                                <Col>
                                    <Button variant="success" onClick={this.onSampleUpload}>Upload Sample</Button>
                                </Col>
                            </Row>
                        </div>
                    
                    </Tab>
                    <Tab eventKey="Institutions" title="Institutions" >
                    <div className="entrycontainer container">
                            <Row>
                                <Col xs={9}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Institution Name.." value={this.state.newInstitutionVal} onChange={e => this.setState({ newInstitutionVal: e.target.value })} />
                                </Form.Group>
                                </Col>
                                <Col xs={3}>
                                <Button className="btnFormSend" variant="outline-success" onClick={this.onInstitutionSubmit}>Add Institution</Button>
                                </Col>
                            </Row>
                            <h5>List of Institutions available:</h5>
                            <div>
                            {this.state.institutionsVal.map((value,index)=>{
                                    return (<Form.Control type="text" key={index} style={{margin:"3px",backgroundColor:"#F2F3F4 "}} placeholder={value} readOnly />)
                                })}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Departments" title="Departments" >
                    <div className="entrycontainer container">
                            <Row>
                                <Col xs={9}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Department Name.." value={this.state.newDepartmentVal} onChange={e => this.setState({ newDepartmentVal: e.target.value })} />
                                </Form.Group>
                                </Col>
                                <Col xs={3}>
                                <Button className="btnFormSend" variant="outline-success" onClick={this.onDepartmentSubmit}>Add Department</Button>
                                </Col>
                            </Row>
                            <h5>List of Departments available:</h5>
                            <div>
                            {this.state.departmentsVal.map((value,index)=>{
                                    return (<Form.Control type="text" key={index} style={{margin:"3px",backgroundColor:"#F2F3F4 "}} placeholder={value} readOnly />)
                                })}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Projects" title="Projects" >
                        <div className="entrycontainer container">
                            <Row>
                                <Col xs={9}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Project Name.." value={this.state.newProjectVal} onChange={e => this.setState({ newProjectVal: e.target.value })} />
                                </Form.Group>
                                </Col>
                                <Col xs={3}>
                                <Button className="btnFormSend" variant="outline-success" onClick={this.onProjectSubmit}>Add Project</Button>
                                </Col>
                            </Row>
                            <h5>List of Projects available:</h5>
                            <div>
                                {this.state.projectsVal.map((value,index)=>{
                                    return (<Form.Control type="text" key={index} style={{margin:"3px",backgroundColor:"#F2F3F4 "}} placeholder={value} readOnly />)
                                })}
                                   
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Physicians" title="Physicians" >
                        <div className="entrycontainer container">
                            <Row>
                                <Col xs={9}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Physician Name.." value={this.state.newPhysicianVal} onChange={e => this.setState({ newPhysicianVal: e.target.value })} />
                                </Form.Group>
                                </Col>
                                <Col xs={3}>
                                <Button className="btnFormSend" variant="outline-success" onClick={this.onPhysicianSubmit}>Add Physician</Button>
                                </Col>
                            </Row>
                            <h5>List of Physicians available:</h5>
                            <div>
                                {this.state.physiciansVal.map((value,index)=>{
                                    return (<Form.Control type="text" key={index} style={{margin:"3px",backgroundColor:"#F2F3F4 "}} placeholder={value} readOnly />)
                                })}
                                   
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                </section>
            </div>
        )
    }
}