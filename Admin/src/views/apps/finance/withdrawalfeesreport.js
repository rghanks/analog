import React from "react"
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
  Spinner,
  Media
} from "reactstrap"
import { ContextLayout } from "../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import {
  Trash2,
  ChevronDown,
  Clipboard,
  Printer,
  Download,
} from "react-feather"
import "react-toggle/style.css"
import "../../../assets/scss/plugins/forms/switch/react-toggle.scss"
import { getAPICall, postAPICall } from "../../../redux/helpers/api_functions"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import { createSocketClient } from "../utils/functions"
import { connect } from "react-redux"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../assets/scss/pages/users.scss"

class UsersList extends React.Component {
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
    cmcDATA:null,
    cPaired:null,
    sCurrency:null,
    tCurrency:null,
    rowData: null,
    allToken: null,
    pageSize: 20,
    isVisible: true,
    reload: true,
    collapse: true,
    status: "Opened",
    role: "All",
    selectStatus: "All",
    validPassword:true,
    verified: "All",
    department: "All",
    defaultColDef: {
      sortable: true
    },
    searchVal: "",
    blockchain_radio:null,
    website_setting:null,
    gettoken:null,
    columnDefs: [
      {
        headerName: "#",
        field: "rowIndex",
        filter : true,
        width : 50,
        cellRendererFramework: params => {
          return (
            <>
              {1+params.rowIndex}   
            </>
          )
        }
      },
      {
        headerName: "Email",
        field: "email",
        filter: true,
        editable: true,
        width: 300,
        cellRendererFramework: params => {
          return (
            <>
              {params.data.status  == 1 ? (
                <div className="badge badge-pill badge-light-success">{params.value}</div>
              ) : params.data.status  == -2 ? (
                <div className="badge badge-pill badge-light-danger">{params.value}</div>
                ) : params.data.status  == 2 ? (
                  <div className="badge badge-pill badge-light-warning">{params.value}</div>
                ) : params.data.status  == 0 ? (
                  <div className="badge badge-pill badge-light-primary">{params.value}</div>
              ) : null}
            </>
          )
        }
    },
    {
      headerName: "Coin ",
      field: "symbol",
      width: 150,
      filter: true,
    },
    {
      headerName: "Amount ",
      field: "amount",
      width: 150,
      filter: true,
    },
    {
      headerName: "Fees",
      field: "withdrawal_fee",
      width: 150,
      filter: true,
    },
    {
      headerName: "Transection ID",
      field: "transection_id",
      editable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: "Status",
      field: "status",
      filter: true,
      width: 150,
      cellRendererFramework: params => {
        return params.value === 1 ? ( // for active
          <div className="badge badge-pill badge-light-success">Success</div>
        ) : params.value === -2 ? ( // submitted but not approve
          <div className="badge badge-pill badge-light-danger">Rejected</div>
        ) : params.value === 2 ? ( // submitted but not approve
          <div className="badge badge-pill badge-light-warning">Pending</div>
        ) : params.value === 0 ? ( // submitted but not approve
          <div className="badge badge-pill badge-light-primary">Requested</div>
        ) : null
      }
    },
    {
      headerName: "Date",
      field: "updatedAt",
      filter: true,
      width: 250,
      cellRendererFramework: params => {
        return (
          <>
            <div className=""> {params.data.updatedAt ? new Date(params.data.updatedAt).toLocaleString() : new Date(params.data.trade_date).toLocaleString() }</div>
          </>
          
        )
      }
    },
    ]
  }
  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }
  filterData = (column, val) => {
    var filter = this.gridApi.getFilterInstance(column)
    var modelObj = null
    if (val !== "all") {
      modelObj = {
        type: "equals",
        filter: val
      }
    }
    filter.setModel(modelObj)
    this.gridApi.onFilterChanged()
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        pageSize: val
      })
    }
  }
  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
    this.setState({
      searchVal: val
    })
  }

  refreshCard = () => {
    this.setState({ reload: true })
    setTimeout(() => {
      this.setState({
        reload: false,
        role: "All",
        selectStatus: "All",
        verified: "All",
        department: "All"
      })
    }, 500)
  }

  toggleCollapse = () => {
    this.setState(state => ({ collapse: !state.collapse }))
  }
  onEntered = () => {
    this.setState({ status: "Opened" })
  }
  onEntering = () => {
    this.setState({ status: "Opening..." })
  }

  onEntered = () => {
    this.setState({ status: "Opened" })
  }
  onExiting = () => {
    this.setState({ status: "Closing..." })
  }
  onExited = () => {
    this.setState({ status: "Closed" })
  }
  removeCard = () => {
    this.setState({ isVisible: false })
  }
  async componentDidMount() {
    const socket = new createSocketClient("kujgwvfq-a-ghosttown-z-1fhhup0p6");
    socket.on("cmc_updated", (res) => {
      if(res){
        this.setState({ cmcDATA : res });
        console.log("res: ",res)
      }
    });
    getAPICall('paired_currency?status=1&admin_user_id='+this.state.currentUserId)
    .then(response => {
      let cPaired = response.data;

      if(cPaired){
        this.setState({ cPaired });
      }
    })
    let bodyData = {
        action : 'fees',
        admin_user_id: this.state.currentUserId
    }
    postAPICall('withdraw_history',bodyData)
    .then(response => {
      let rowData = response.data.result;
      let sCurrency = response.data.currency;
      let tCurrency = response.data.total_fees;
      if(rowData){
        this.setState({ rowData });
      }
      console.log("cmcdata: ",this.state.cmcDATA)
      if(sCurrency){
        this.setState({ sCurrency });
      }
      if(tCurrency){
        this.setState({ tCurrency });
      }
    })
  }
    updateQUERY = () => {
        const serialize = require('form-serialize');
        const form = document.querySelector('#tokendata');
        let alltxtData = serialize(form, { hash: true });
        alltxtData.admin_user_id = this.state.currentUserId;
        postAPICall('updatesettings',alltxtData)
        .then(response => {
            const website_setting = response.data.setting;
            this.setState({website_setting:website_setting});
        })
    }
  render() {
    const { rowData, cmcDATA, cPaired, tCurrency,sCurrency,columnDefs, blockchain_radio, defaultColDef, pageSize } = this.state;
    let getPrice =  {}; 
    const isFloat = (x) => { return !!(x % 1); }
    (cmcDATA != null) && cmcDATA.map(item => {
      if(item.is_paired){
        if(item.symbol == 'BTC'){
          getPrice.is_paired_btc = item.current_price_inr;
        }else if(item.symbol == 'USDT'){
          getPrice.is_paired_usdt = item.current_price_inr;
        }else if(item.symbol == 'INR'){
          getPrice.is_paired_inr = 1;
        } else {
          getPrice.is_paired_vrx = item.current_price_inr;
        }
        
      }
    })
    const NCard = (tCurrency != null ) && (cmcDATA != null) && cmcDATA.map(item => {
      let totl = tCurrency[item.symbol] ? Number(tCurrency[item.symbol]).toFixed(2) : 0
      
      const cPairedCurrency = (cPaired != null) && cPaired.map((i2) => {
        let price = 1;
        if(getPrice[i2.paired_with]){
          price = getPrice[i2.paired_with];
        }
        let raw_price =  item.current_price_inr ? item.current_price_inr : 1;
        let inrPrice = parseFloat(totl)*parseFloat(raw_price) / parseFloat(price);
        inrPrice = isFloat(inrPrice) ? parseFloat(inrPrice.toFixed(2)) : inrPrice; 
        let d = i2.currency_coin+": "+inrPrice+', ';
        return d;
      })
      return (
        <>
          {totl ? (
            <Col xl="2" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconRight
                  icon={<Media  object src={item.icon} height="25" width="25" />}
                  stat={item.symbol}
                  total= {totl}
                  statTitle={cPairedCurrency}
                />
              </Col>

          ): ''}
        </>
      )
    })
    return (
    <React.Fragment>
        <Row className="app-user-list">
        {NCard ? (
          <Col sm="12">
            <Row className="app-user-list">
              <Col sm="12">
                <h2>Total Earned Withdrwawal Fees</h2>
              </Col>
              {NCard}
            </Row>
          </Col>
        ) : ''}
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
                    <div className="filter-actions d-flex">
                        <Input
                        className="w-50 mr-1 mb-1 mb-sm-0"
                        type="text"
                        placeholder="search..."
                        onChange={e => this.updateSearchQuery(e.target.value)}
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
                                <span className="align-middle ml-50">Archive</span>
                            </DropdownItem>
                            <DropdownItem tag="a">
                                <Printer size={15} />
                                <span className="align-middle ml-50">Print</span>
                            </DropdownItem>
                            <DropdownItem tag="a">
                                <Download size={15} />
                                <span className="align-middle ml-50" onClick={() => this.gridApi.exportDataAsCsv()}>CSV</span>
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        </div>
                    </div>
                    </div>
                    {this.state.rowData !== null ? (
                    <ContextLayout.Consumer>
                        {context => (
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
                        <h2 className="float-left ml-1">System is Loading All Bonus users.</h2>
                      </>
                    )}
                </div>
                </CardBody>
            </Card>
            </Col>
        </Row>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUserId: state.auth.login.user.user_id
  }
}
export default connect(mapStateToProps)(UsersList)