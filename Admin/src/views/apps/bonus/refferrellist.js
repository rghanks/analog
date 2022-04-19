import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
  Button,
  Spinner,
} from "reactstrap";
import axios from "axios";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import {
  Edit,
  Trash2,
  ChevronDown,
  Clipboard,
  Printer,
  Download,
  RotateCw,
  X,
} from "react-feather";
import classnames from "classnames";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { history } from "../../../history";
import Select from "react-select";
import "react-toggle/style.css";
import "../../../assets/scss/plugins/forms/switch/react-toggle.scss";
import { getAPICall, postAPICall } from "../../../redux/helpers/api_functions";
import { connect } from "react-redux";

class UsersList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.currentUserId !== state.currentUserId) {
      return {
        currentUserId: props.currentUserId,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  state = {
    rowData: null,
    totalEarned: null,
    gridApi: null,
    allToken: null,
    totalReferrrel: null,
    pageSize: 20,
    isVisible: true,
    reload: true,
    collapse: true,
    status: "Opened",
    role: "All",
    selectStatus: "All",
    validPassword: true,
    verified: "All",
    department: "All",
    defaultColDef: {
      sortable: true,
    },
    searchVal: "",
    blockchain_radio: null,
    website_setting: null,
    gettoken: null,
    columnDefs: [
      {
        headerName: "#",
        field: "rowIndex",
        filter: true,
        width: 50,
        cellRendererFramework: (params) => {
          return <>{1 + params.rowIndex}</>;
        },
      },
      {
        headerName: "Name",
        field: "first_name",
        width: 250,
        filter: true,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              {" "}
              {params?.data?.first_name} {params?.data?.middle_name}{" "}
              {params?.data?.last_name}
            </div>
          );
        },
      },
      {
        headerName: "email",
        field: "email",
        editable: true,
        width: 350,
        filter: true,
      },
      {
        headerName: "Total Reffreal",
        field: "referral_income",
        filter: true,
        width: 170,
        cellRendererFramework: (params) => {
          return (
            <>
              {params.value && this.state.website_setting.referral_fee
                ? Math.floor(
                    params.value / this.state.website_setting.referral_fee
                  )
                : 0}
            </>
          );
        },
      },
      {
        headerName: "Total Earned",
        field: "referral_income",
        width: 170,
        filter: true,
      },
      {
        headerName: "Coin",
        filter: true,
        field: "wallet_type",
        width: 150,
        cellRendererFramework: (params) => {
          return <>{this.state.website_setting.referral_coin}</>;
        },
      },
      {
        headerName: "KYC Status",
        field: "status",
        width: 200,
        cellRendererFramework: (params) => {
          return params.value === 1 ? ( // for active
            <div className="badge badge-pill badge-light-success">Done</div>
          ) : params.value === 0 ? ( // Not submitted
            <div className="badge badge-pill badge-light-warning">
              Not Filled{" "}
            </div>
          ) : params.value === 2 ? ( // rejecetd
            <div className="badge badge-pill badge-light-danger">Rejected</div>
          ) : params.value === -1 ? ( // submitted but not approve
            <div className="badge badge-pill badge-light-warning">
              Filled but not Verified
            </div>
          ) : (
            <div className="badge badge-pill badge-light-warning">
              Not Filled
            </div>
          );
        },
      },
      {
        headerName: "Actions",
        field: "Actions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Edit
                className="mr-50"
                size={15}
                onClick={() => {
                  let editurl =
                    "/app/user/edit/UserEdit?user_id=" +
                    params.data.user_id +
                    "&active_tab=3";
                  history.push(editurl);
                }}
              />
              <Trash2
                size={15}
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  onGridReady = params => {
    this.gridApi = params.api
    this.setState({gridApi: params.api});
    this.gridColumnApi = params.columnApi
  }
  filterData = (column, val) => {
    var filter = this.gridApi.getFilterInstance(column);
    var modelObj = null;
    if (val !== "all") {
      modelObj = {
        type: "equals",
        filter: val,
      };
    }
    filter.setModel(modelObj);
    this.gridApi.onFilterChanged();
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        pageSize: val,
      });
    }
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
    this.setState({
      searchVal: val,
    });
  };

  refreshCard = () => {
    this.setState({ reload: true });
    setTimeout(() => {
      this.setState({
        reload: false,
        role: "All",
        selectStatus: "All",
        verified: "All",
        department: "All",
      });
    }, 500);
  };

  toggleCollapse = () => {
    this.setState((state) => ({ collapse: !state.collapse }));
  };
  onEntered = () => {
    this.setState({ status: "Opened" });
  };
  onEntering = () => {
    this.setState({ status: "Opening..." });
  };

  onEntered = () => {
    this.setState({ status: "Opened" });
  };
  onExiting = () => {
    this.setState({ status: "Closing..." });
  };
  onExited = () => {
    this.setState({ status: "Closed" });
  };
  removeCard = () => {
    this.setState({ isVisible: false });
  };
  async componentDidMount() {
    let alltxtData = {
      admin_user_id: this.state.currentUserId,
    };
    postAPICall("gettoken", alltxtData).then((response) => {
      const gettoken = response.data;
      this.setState({ gettoken });
    });
    getAPICall("settings?admin_user_id=" + this.state.currentUserId).then(
      (response) => {
        const website_setting = response.data;
        this.setState({ website_setting: website_setting });
      }
    );
    let formData = {
      action: "all_referal",
      admin_user_id: this.state.currentUserId,
      page: 1,
      per_page: this.state.pageSize,
    };
    postAPICall("user/get-all-referal", formData).then((response) => {
      console.log("response", response);

      const rowData = response.data.data;
      const totalEarned = response.data.total_earned.total;
      const totalReferrrel= response.data.total_earned.count;
      if (rowData) {
        this.setState({ rowData });
      }
      if (totalEarned) {
        this.setState({ totalEarned });
      }
      if(totalReferrrel){
        this.setState({totalReferrrel});
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.gridApi !== prevState.gridApi) {
      const dataSource = {
        getRows: (rowData) => {
          // Use startRow and endRow for sending pagination to Backend
          // params.startRow : Start Page
          // params.endRow : End Page
          console.log("params", rowData, rowData.filterModel);

          const models = Object.entries(rowData.filterModel);
          const page = rowData.endRow / this.state.pageSize;
          let formData = {
            action: "all_referal",
            admin_user_id: this.state.currentUserId,
            page: page,
            per_page: this.state.pageSize,
          };
          models.forEach((field)=>{
            const f = field[0];
            const fV = field[1]?.filter;
            formData = `${formData}&${f}=${fV}`;
          })

          postAPICall("user/get-all-referal", formData).then((response) => {
            console.log("response componentDidUpdate", response);
            if (response?.data?.data) {
              rowData.successCallback([...response.data.data], response.data.total_earned.count);
            }
          });
        },
      };

      this.state.gridApi.setDatasource(dataSource);
    }
  }

  updateQUERY = () => {
    const serialize = require("form-serialize");
    const form = document.querySelector("#tokendata");
    let alltxtData = serialize(form, { hash: true });
    alltxtData.admin_user_id = this.state.currentUserId;
    postAPICall("updatesettings", alltxtData).then((response) => {
      const website_setting = response.data.setting;
      this.setState({ website_setting: website_setting });
    });
  };
  render() {
    const {
      rowData,
      gettoken,
      website_setting,
      columnDefs,
      totalEarned,
      blockchain_radio,
      defaultColDef,
      pageSize,
      gridApi,
    } = this.state;

    let token_list = null;
    if (this.state?.gettoken != null) {
      token_list =
        this.state?.gettoken &&
        this.state?.gettoken?.map((tokn) => {
          return {
            label: tokn?.name + " (" + tokn?.symbol + ") ",
            value: tokn?.symbol,
          };
        });
    }
    return (
      <React.Fragment>
        <Row className="app-user-list">
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="row" id="tokendata">
                  <Col md="4" sm="12">
                    <FormGroup>
                      {token_list != null ? (
                        <>
                          <Label for="referral_coin" className="label-text h6">
                            Select Coin
                          </Label>
                          <span>
                            {" "}
                            {this.state.website_setting ? (
                              <>
                                (Currenty saved setting &nbsp;
                                {this.state.website_setting.referral_coin} :
                                &nbsp;
                                {this.state.website_setting.referral_fee})
                              </>
                            ) : (
                              ""
                            )}{" "}
                          </span>
                          <Select
                            className="React"
                            id="referral_coin"
                            classNamePrefix="select"
                            name="referral_coin"
                            options={token_list}
                          />
                        </>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="2" sm="12">
                    <FormGroup>
                      <Label for="referral_fee" className="label-text h6">
                        Referral Volume
                      </Label>
                      <Input
                        type="number"
                        name="referral_fee"
                        id="referral_fee"
                        placeholder="Enter Volume..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2" sm="12">
                    <FormGroup>
                      <Button.Ripple
                        color="primary"
                        type="button"
                        className="mt-2"
                        onClick={() => {
                          this.updateQUERY();
                        }}
                      >
                        Add Refferel Coin
                      </Button.Ripple>
                    </FormGroup>
                  </Col>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="app-user-list">
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="ag-theme-material ag-grid-table">
                  <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                    <div className="sort-dropdown">
                      <UncontrolledDropdown className="ag-dropdown p-1">
                        <DropdownToggle tag="div">
                          1 - {pageSize} of 150
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(150)}
                          >
                            150
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div>
                      <h3 className="float-left mr-1">
                        Total Referrel User:{" "}
                        {this.state.totalReferrrel
                          ? this.state.totalReferrrel
                          : 0}{" "}
                        ,{" "}
                      </h3>
                      <h3 className="float-left">
                        Total Referrel Earned User:{" "}
                        {totalEarned ? totalEarned : 0}{" "}
                        {website_setting
                          ? website_setting.referral_coin.toUpperCase()
                          : ""}
                      </h3>
                    </div>
                    <div className="filter-actions d-flex">
                      <Input
                        className="w-50 mr-1 mb-1 mb-sm-0"
                        type="text"
                        placeholder="search..."
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                        value={this.state.searchVal}
                      />
                      <div className="dropdown actions-dropdown">
                        <UncontrolledButtonDropdown>
                          <DropdownToggle className="px-2 py-75" color="white">
                            Actions
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem tag="a">
                              <Trash2 size={15} />
                              <span className="align-middle ml-50">Delete</span>
                            </DropdownItem>
                            <DropdownItem tag="a">
                              <Clipboard size={15} />
                              <span className="align-middle ml-50">
                                Archive
                              </span>
                            </DropdownItem>
                            <DropdownItem tag="a">
                              <Printer size={15} />
                              <span className="align-middle ml-50">Print</span>
                            </DropdownItem>
                            <DropdownItem tag="a">
                              <Download size={15} />
                              <span
                                className="align-middle ml-50"
                                onClick={() => this.gridApi.exportDataAsCsv()}
                              >
                                CSV
                              </span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </div>
                  </div>
                  {rowData !== null ? (
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={true}
                          pagination={true}
                          pivotPanelShow="always"
                          paginationPageSize={pageSize}
                          cacheBlockSize={pageSize}
                          rowModelType={"infinite"}
                          rowHeight={false}
                          resizable={true}
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  ) : (
                    <>
                      <div className="float-left">
                        <Spinner color="primary" />
                      </div>
                      <h2 className="float-left ml-1">
                        System is Loading All Bonus users.
                      </h2>
                    </>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.login.user.user_id,
  };
};
export default connect(mapStateToProps)(UsersList);
