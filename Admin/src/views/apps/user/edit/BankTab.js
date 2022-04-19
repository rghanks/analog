import React from "react"
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap"
import { NotificationManager } from "react-notifications"
import { getAPICall, postAPICall } from "../../../../redux/helpers/api_functions"
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
  }
  async componentDidMount() {
    getAPICall('getbankkyc'+window.location.search+'&admin_user_id='+this.state.currentUserId)
    .then(response => {
      const rowData = response.data.user_data;
      if(rowData){
        this.setState({ rowData });
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
    postAPICall('updatebank',data)
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
  render() {
    const { rowData } = this.state;
    return (
      <Row>
        {(rowData != null) ? (
          <Col sm="12">
            <Form onSubmit={e => e.preventDefault()}>
              <Row>
                <Col sm="12">
                  <div className="permissions border px-2">
                  <Col md="3" sm="12" className=" ">
                    <FormGroup className="mt-1">
                      <Label for="name" className="h5">Bank Name</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.bank_name}
                        id="name"
                        placeholder="Name"
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup className="mt-1">
                      <Label for="name" className="h5">Account Number</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.account_number}
                        id="name"
                        placeholder="Name"
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup className="mt-1">
                      <Label for="name" className="h5">Name</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.name}
                        id="name"
                        placeholder="Name"
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup className="mt-1">
                      <Label for="name" className="h5">IFSC Code</Label>
                      <Input
                        type="text"
                        defaultValue={rowData.ifsc}
                        id="name"
                        placeholder="Name"
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12" className=" ">
                      <FormGroup className="mt-1">
                        <Label for="name" className="h5">Account Type</Label>
                        <Input
                          type="text"
                          defaultValue={rowData.account_type}
                          id="name"
                          placeholder="Name"
                          readOnly
                        />
                      </FormGroup>
                      <FormGroup className="mt-1">
                        <Label for="name" className="h5">Submit Date</Label>
                        <Input
                          type="text"
                          defaultValue={rowData.submit_date}
                          id="name"
                          placeholder="Name"
                          readOnly
                        />
                      </FormGroup>
                  </Col>
                  </div>
                </Col>
                <Col className="mt-2" sm="12" md="12" >
                  {rowData.status == 1 ? (
                    <>
                      <FormGroup className="mt-1">
                        <Label for="name" className="h5 text-success">Status : Approved</Label>
                        <Input
                          type="textarea"
                          defaultValue={"This Bank Details is Approved and Bank auditor Message is: "+rowData.auditor_msg}
                          id="status"
                          placeholder="Write your message..."
                          readOnly
                        />
                      </FormGroup>
                    </>
                  ) : rowData.status == 2 ? (
                    <>
                      <FormGroup className="mt-1">
                        <Label for="name" className="h5 text-danger">Status : Rejected</Label>
                        <Input
                          type="textarea"
                          defaultValue={"This Bank Details is Rejeceted and Bank auditor Message is: "+rowData.auditor_msg}
                          id="status"
                          placeholder="Write your message..."
                          readOnly
                        />
                      </FormGroup>
                    </>
                  ) : ''}
                  <FormGroup className="mt-1">
                  <Label for="name" className="h5 text-warning"> {rowData.status == 1 || rowData.status == 2 ? "Status: (Do you want to change this Bank KYC status again)" : 'Status'}</Label>
                      <Input
                        type="textarea"
                        id="bank_status"
                        placeholder="Write your message..."
                      />
                    </FormGroup>
                  <Button.Ripple className="mr-1" color="primary" onClick={() => this.updateAccountQUERY(rowData.user_id,1,document.getElementById('bank_status').value)}> 
                    <b> Approve Bank Details</b> 
                  </Button.Ripple>
                  <Button.Ripple color="flat-danger" onClick={() => this.updateAccountQUERY(rowData.user_id,2,document.getElementById('bank_status').value)}>
                    <b>Reject Bank Details</b>
                  </Button.Ripple>
                  
                </Col>
              </Row>
            </Form>
          </Col>
        ) : (
          <Col sm="12">
            <Label className="h3">Bank Detail Not Submitted.</Label>
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