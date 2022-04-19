import React from "react"
import {
  Media,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap"
import { NotificationManager } from "react-notifications"
import { BaseURL, getAPICall, postAPICall } from "../../../../redux/helpers/api_functions"
import { connect } from "react-redux"

class UserAccountTab extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.currentUserId !== state.currentUserId
    ) {
      return {
        currentUserId: props.currentUserId
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    rowData: null,
    file_data: '',
    user_kyc: 0,
    readOnlyStatus: true,
  }
  async componentDidMount() {
    getAPICall('getkyclist'+window.location.search+'&admin_user_id='+this.state.currentUserId)
      .then(response => {
      const rowData = response.data.user_data;
      if(rowData){
        this.setState({ rowData });
        this.setState({user_kyc:rowData.status})
      }
    })
  }
  updateAccountQUERY = (user_id,status,msg) => {
    const data = {
      user_id : user_id,
      status : status,
      msg : msg,
      admin_user_id: this.state.currentUserId
    }
    postAPICall('updatekyc',data)
    .then(response => {
      const updateKYC = response.data;
      if(updateKYC.query_status){
        this.setState(prevState => {
          let rowData = Object.assign({}, prevState.rowData);  
          rowData.status = updateKYC.update_status;
          return { rowData };                                 
        })
        NotificationManager.success("KYC Updated successfully")             
      }else{
        NotificationManager.error("KYC Not Updated")
      }
    })
  }
  editKYCInfo = (user_id) => {
    
    if(this.state.readOnlyStatus){
      this.setState({readOnlyStatus:false})
    }else if(user_id){
      const serialize = require('form-serialize');
      const form = document.querySelector('#user_kyc');
      let alltxtData = serialize(form, { hash: true });

      alltxtData.user_id = user_id;
      alltxtData.admin_user_id = this.state.currentUserId;
      alltxtData.date_of_birth = new Date(document.getElementById("date_of_birth").value).getTime();
      console.log("alltxtData, ", alltxtData)
      postAPICall('kyc/set-personal-info',alltxtData)
      .then(response => {
        const updateKYC = response.data;
        if(updateKYC.query_status){
          this.setState({readOnlyStatus : true})
          NotificationManager.success("KYC Updated successfully")             
        }else{
          NotificationManager.error(response.data.message)
        }
      })
    }else{
      NotificationManager.error("User ID not found")
    }
  }
  readURL = (input) => {
    const current_img = input.target.parentElement;
    // const img = "#" + current_img.querySelector("img").id;
    // const btn = "#" + current_img.querySelector("Button").id;
    const file = input.target.files[0];
    console.log("hmari file: ",file);
    console.log("hmari file: ",current_img,input);
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      this.setState({file_data: file});
      reader.onload = function (e) {
        // $(img).attr("src", e.target.result);
        // console.log("e.target.result",e.target.result)
        // current_img.querySelector("img").setAttribute("src",'e.target.result')
        
      };
    }
  }

  uploadKYCImage = (event, fileN, title, user_id) => {
    const formData = new FormData();
    console.log(fileN);
    // The third parameter is required for server
    formData.append("file", fileN, fileN.name);
    formData.append("title", title);
    formData.append("user_id", user_id);
    formData.append("data", title);

    postAPICall('kyc/update-documents',formData)
    .then(response => {
      const updateKYC = response.data;
      if(updateKYC.query_status){
        this.setState({readOnlyStatus : true})
        NotificationManager.success("KYC Updated successfully")             
      }else{
        NotificationManager.error(response.data.message)
      }
    })

  }
  render() {
    const { rowData, readOnlyStatus , file_data} = this.state;
    const url = BaseURL;
    return (
      <Row>
        {(rowData != null) ? (
          <Col sm="12">
            <Form onSubmit={e => e.preventDefault() } id="user_kyc">
              <Row>
                <Col md="12" sm="12" className=" ">
                  {rowData.auto_verify != true ? (
                    <>
                      <Media className="mb-2 float-left d-flex" style={{flexDirection: `column`}}>
                        <Label for="nSame" className="h4 mt-1">{rowData.doc_1_type.toUpperCase()} (Front): {rowData.doc_1_no}</Label>
                        <Media className="mr-2 my-25" left target="_blank" href={url+rowData.doc_1_f}>
                            <Media
                              className="users-avatar-shadow rounded"
                              object
                              src={url+rowData.doc_1_f}
                              alt="Adhaar Card Front"
                              height="180"
                              width="320"
                              
                            />
                        </Media>
                        {!readOnlyStatus ? (
                         <>
                           {/* <div> */}
                            <Input type="file" id="doc_1_no" onChange={(e) => {
                                this.readURL(e);
                              }}/>
                              <Button type="button" id="upload" className="mt-1" onClick={(e) => {
                                this.uploadKYCImage(e,file_data,'docf',rowData.user_id);
                              }}>
                                upload
                              </Button>
                            {/* </div> */}
                          </>
                        ): ''}
                      </Media>
                      <Media className="mb-2 float-left d-flex" style={{flexDirection: `column`}}>
                        <Label for="nSame" className="h4 mt-1">{rowData.doc_1_type.toUpperCase()} (Back)</Label>
                        <Media className="mr-2 my-25" left target="_blank" href={url+rowData.doc_1_b}>
                            <Media
                              className="users-avatar-shadow rounded"
                              object
                              src={url+rowData.doc_1_b}
                              alt="Adhaar Card Back"
                              height="180"
                              width="320"
                              />
                        </Media>
                        {!readOnlyStatus ? (
                         <>
                           {/* <div> */}
                            <Input type="file" id="doc_1_b" onChange={(e) => {
                                this.readURL(e);
                              }}/>
                              <Button type="button" id="upload" className="mt-1" onClick={(e) => {
                                this.uploadKYCImage(e,file_data,'docb',rowData.user_id);
                              }}>
                                upload
                              </Button>
                            {/* </div> */}
                          </>
                        ): ''}
                      </Media>
                      <Media className="mb-2 float-left d-flex" style={{flexDirection: `column`}}>
                        <Label for="name" className="h4 mt-1">{rowData.doc_2_type.toUpperCase()}:  {rowData.doc_2_no}</Label>
                        <Media className="mr-2 my-25" left target="_blank" href={url+rowData.doc_2_f}>
                            <Media
                              className="users-avatar-shadow rounded"
                              object
                              src={url+rowData.doc_2_f}
                              alt="Pan Card Front"
                              height="180"
                              width="320"
                            />
                        </Media>
                        {!readOnlyStatus ? (
                         <>
                           {/* <div> */}
                            <Input type="file" id="doc_2_f" onChange={(e) => {
                                this.readURL(e);
                              }}/>
                              <Button type="button" id="upload" className="mt-1" onClick={(e) => {
                                this.uploadKYCImage(e,file_data,'panf',rowData.user_id);
                              }}>
                                upload
                              </Button>
                            {/* </div> */}
                          </>
                        ): ''}
                      </Media>
                      <Media className="mb-2 float-left d-flex" style={{flexDirection: `column`}}>
                        <Label for="name" className="h4 mt-1">Selfie</Label>
                        <Media className="mr-2 my-25" left target="_blank" href={url+rowData.doc_1_s}>
                            <Media
                              className="users-avatar-shadow rounded"
                              object
                              src={url+rowData.doc_1_s}
                              alt="Pan Card Back"
                              height="180"
                              width="320"
                              />
                        </Media>
                        {!readOnlyStatus ? (
                         <>
                           {/* <div> */}
                            <Input type="file" id="doc_1_s" onChange={(e) => {
                                this.readURL(e);
                              }}/>
                              <Button type="button" id="upload" className="mt-1" onClick={(e) => {
                                this.uploadKYCImage(e,file_data,'docs',rowData.user_id);
                              }}>
                                upload
                              </Button>
                            {/* </div> */}
                          </>
                        ): ''}
                      </Media>
                    </>

                  ): (
                    <>
                      <Media className="mb-2 float-left d-flex" style={{flexDirection: `column`}}>
                        <Label for="name" className="h4 mt-1">Aadhaar Card Selfie</Label>
                        <Media className="mr-2 my-25" left target="_blank" href={rowData.doc_1_s}>
                            <Media
                              className="users-avatar-shadow rounded"
                              object
                              src={rowData.doc_1_s}
                              alt="user profile image"
                              height="180"
                              width="320"
                              />
                        </Media>
                      </Media>
                      <div className="float-right text-success h2">
                        Auto Verified From UAIDAI
                      </div>
                    </>
                  )}
                </Col>
                  <FormGroup className="col-md-3 col-sm-12 ">
                    <Label for="name" className="h5">Kyc Type</Label>
                    <Input
                      type="text"
                      defaultValue={rowData.kyc_type}
                      id="kyc_type"
                      name="kyc_type"
                      placeholder="KYC Type"
                      readOnly={readOnlyStatus}
                    />
                  </FormGroup>
                  <FormGroup className=" col-md-3 col-sm-12">
                    <Label for="email" className="h5">Email</Label>
                    <Input
                      type="text"
                      defaultValue={rowData.email}
                      id="email"
                      name="email"
                      placeholder="Email"
                      readOnly={readOnlyStatus}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-2 col-sm-12">
                    <Label for="name" className="h5">Name</Label>
                    <Input
                      type="text"
                      defaultValue={rowData.first_name+' '+rowData.last_name}
                      id="first_name"
                      name="first_name"
                      placeholder="First Name"
                      readOnly={readOnlyStatus}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-2 col-sm-12">
                    <Label for="date_of_birth" className="h5">Date Of Birth</Label>
                    <Input
                      type="text"
                      defaultValue={rowData? new Date(parseInt(rowData.date_of_birth)).toLocaleDateString() : ''}
                      id="date_of_birth"
                      name="date_of_birth"
                      placeholder="Date Of Birth"
                      readOnly={readOnlyStatus}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-2 col-sm-12">
                    <Label for="name" className="h5">Mobile Number</Label>
                    <Input
                      type="text"
                      defaultValue={rowData? rowData.mobile_no : ''}
                      id="mobile_no"
                      name="mobile_no"
                      placeholder="Mobile No"
                      readOnly={readOnlyStatus}
                    />
                  </FormGroup>
                    <FormGroup className="col-md-3 col-sm-12">
                      <Label for="name" className="h5">Address</Label>
                      <Input
                        type="textarea"
                        defaultValue={rowData?.address}
                        id="address"
                        placeholder="Address"
                        name="address"
                        readOnly={readOnlyStatus}
                        noresize
                      />
                    </FormGroup>
                    <FormGroup className="col-md-3 col-sm-12">
                      <Label for="name" className="h5">City</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.city}
                        id="city"
                        name="city"
                        placeholder="City"
                        readOnly={readOnlyStatus}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-2 col-sm-12">
                      <Label for="name" className="h5">State</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.state}
                        id="state"
                        name="state"
                        placeholder="State"
                        readOnly={readOnlyStatus}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-2 col-sm-12">
                      <Label for="name" className="h5">Country</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.country}
                        id="country"
                        name="country"
                        placeholder="Country"
                        readOnly={readOnlyStatus}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-2 col-sm-12">
                      <Label for="name" className="h5">PinCode</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.zip_code}
                        id="pincode"
                        name="pincode"
                        placeholder="Zip Code"
                        readOnly={readOnlyStatus}
                      />
                    </FormGroup>
                <Col sm="12" md="12" >
                  {rowData.status == 1 ? (
                    <>
                      <FormGroup >
                        <Label for="name" className="h5 text-success">Status : Approved</Label>
                        <Input
                          type="textarea"
                          defaultValue={"This KYC is Approved and KYC auditor Message is: "+rowData.auditor_msg}
                          id="status"
                          placeholder="Write your message..."
                          readOnly
                        />
                      </FormGroup>
                    </>
                  ) : rowData.status == 2 ? (
                    <>
                      <FormGroup >
                        <Label for="name" className="h5 text-danger">Status : Rejected</Label>
                        <Input
                          type="textarea"
                          defaultValue={"This KYC is Rejeceted and KYC auditor Message is: "+rowData.auditor_msg}
                          id="status"
                          placeholder="Write your message..."
                          readOnly
                        />
                      </FormGroup>
                    </>
                  ) :  ''}
                  <FormGroup >
                      <Label for="name" className="h5 text-warning"> {rowData.status == 1 || rowData.status == 2 ? "Status: (Do you want to this KYC change status again)" : 'Status'}</Label>
                      <Input
                        type="textarea"
                        id="kyc_status"
                        placeholder="Write your message..."
                      />
                    </FormGroup>
                  <Button.Ripple className="mr-1" color="primary" onClick={() => this.updateAccountQUERY(rowData.user_id,1,document.getElementById('kyc_status').value)}> 
                    <b>Approve KYC</b> 
                  </Button.Ripple>
                  <Button.Ripple color="flat-danger" onClick={() => this.updateAccountQUERY(rowData.user_id,2,document.getElementById('kyc_status').value)}>
                    <b>Reject KYC</b>
                  </Button.Ripple>
                  {rowData.status == 1 || rowData.status == 2 ? (
                    <>
                      <Button.Ripple color="flat-info" onClick={() => this.editKYCInfo(rowData.user_id)}>
                        <b>{readOnlyStatus ? "Edit" : "Save"} KYC Detail</b>
                      </Button.Ripple>
                    </>
                  ) : null}
                </Col>
              </Row>
            </Form>
          </Col>
        ) : (
          <Col sm="12">
            <Label className="h3">KYC Not Submitted.</Label>
          </Col>
        )}
      </Row>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentUserId: state.auth.login.user.user_id
  }
}
export default connect(mapStateToProps)(UserAccountTab)