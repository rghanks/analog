import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
class Affiliate extends React.Component{
   render(){
       return (
           <div>





<div class="nk-app-root">
       
       <div class="nk-main ">
 
 
 <Menu/>
 
 
 
           <div class="nk-wrap ">
 


<Header/>

<div class="nk-content ">
                    <div class="container wide-xl">
                        <div class="nk-content-inner">
                        
                            <div class="nk-content-body">
                                <div class="nk-content-wrap">
                                    <div class="nk-block-head">
                                        <div class="nk-block-between">
                                            <div class="nk-block-head-content">
                                                <h3 class="nk-block-title page-title">Users Lists</h3>
                                                <div class="nk-block-des text-soft">
                                                    <p>You have total 2,595 users.</p>
                                                </div>
                                            </div>
                                            <div class="nk-block-head-content">
                                                <div class="toggle-wrap nk-block-tools-toggle">
                                                    <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                                                    <div class="toggle-expand-content" data-content="pageMenu">
                                                        <ul class="nk-block-tools g-3">
                                                            <li><a href="#" class="btn btn-white btn-outline-light"><em class="icon ni ni-download-cloud"></em><span>Export</span></a></li>
                                                            <li class="nk-block-tools-opt">
                                                                <div class="drodown">
                                                                    <a href="#" class="dropdown-toggle btn btn-icon btn-primary" data-toggle="dropdown"><em class="icon ni ni-plus"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-right">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#"><span>Add User</span></a></li>
                                                                            <li><a href="#"><span>Add Team</span></a></li>
                                                                            <li><a href="#"><span>Import User</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nk-block">
                                        <div class="card card-bordered card-stretch">
                                            <div class="card-inner-group">
                                                <div class="card-inner position-relative card-tools-toggle">
                                                    <div class="card-title-group">
                                                        <div class="card-tools">
                                                            <div class="form-inline flex-nowrap gx-3">
                                                                <div class="form-wrap w-150px">
                                                                    <select class="form-select form-select-sm" data-search="off" data-placeholder="Bulk Action">
                                                                        <option value="">Bulk Action</option>
                                                                        <option value="email">Send Email</option>
                                                                        <option value="group">Change Group</option>
                                                                        <option value="suspend">Suspend User</option>
                                                                        <option value="delete">Delete User</option>
                                                                    </select>
                                                                </div>
                                                                <div class="btn-wrap">
                                                                    <span class="d-none d-md-block"><button class="btn btn-dim btn-outline-light disabled">Apply</button></span>
                                                                    <span class="d-md-none"><button class="btn btn-dim btn-outline-light btn-icon disabled"><em class="icon ni ni-arrow-right"></em></button></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card-tools mr-n1">
                                                            <ul class="btn-toolbar gx-1">
                                                                <li>
                                                                    <a href="#" class="btn btn-icon search-toggle toggle-search" data-target="search"><em class="icon ni ni-search"></em></a>
                                                                </li>
                                                                <li class="btn-toolbar-sep"></li>
                                                                <li>
                                                                    <div class="toggle-wrap">
                                                                        <a href="#" class="btn btn-icon btn-trigger toggle" data-target="cardTools"><em class="icon ni ni-menu-right"></em></a>
                                                                        <div class="toggle-content" data-content="cardTools">
                                                                            <ul class="btn-toolbar gx-1">
                                                                                <li class="toggle-close">
                                                                                    <a href="#" class="btn btn-icon btn-trigger toggle" data-target="cardTools"><em class="icon ni ni-arrow-left"></em></a>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="dropdown">
                                                                                        <a href="#" class="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                                                                            <div class="dot dot-primary"></div>
                                                                                            <em class="icon ni ni-filter-alt"></em>
                                                                                        </a>
                                                                                        <div class="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                                                                            <div class="dropdown-head">
                                                                                                <span class="sub-title dropdown-title">Filter Users</span>
                                                                                                <div class="dropdown">
                                                                                                    <a href="#" class="btn btn-sm btn-icon">
                                                                                                        <em class="icon ni ni-more-h"></em>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="dropdown-body dropdown-body-rg">
                                                                                                <div class="row gx-6 gy-3">
                                                                                                    <div class="col-6">
                                                                                                        <div class="custom-control custom-control-sm custom-checkbox">
                                                                                                            <input type="checkbox" class="custom-control-input" id="hasBalance" />
                                                                                                            <label class="custom-control-label" for="hasBalance"> Have Balance</label>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-6">
                                                                                                        <div class="custom-control custom-control-sm custom-checkbox">
                                                                                                            <input type="checkbox" class="custom-control-input" id="hasKYC" />
                                                                                                            <label class="custom-control-label" for="hasKYC"> KYC Verified</label>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-6">
                                                                                                        <div class="form-group">
                                                                                                            <label class="overline-title overline-title-alt">Role</label>
                                                                                                            <select class="form-select form-select-sm">
                                                                                                                <option value="any">Any Role</option>
                                                                                                                <option value="investor">Investor</option>
                                                                                                                <option value="seller">Seller</option>
                                                                                                                <option value="buyer">Buyer</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-6">
                                                                                                        <div class="form-group">
                                                                                                            <label class="overline-title overline-title-alt">Status</label>
                                                                                                            <select class="form-select form-select-sm">
                                                                                                                <option value="any">Any Status</option>
                                                                                                                <option value="active">Active</option>
                                                                                                                <option value="pending">Pending</option>
                                                                                                                <option value="suspend">Suspend</option>
                                                                                                                <option value="deleted">Deleted</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <div class="form-group">
                                                                                                            <button type="button" class="btn btn-secondary">Filter</button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="dropdown-foot between">
                                                                                                <a class="clickable" href="#">Reset Filter</a>
                                                                                                <a href="#">Save Filter</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="dropdown">
                                                                                        <a href="#" class="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown">
                                                                                            <em class="icon ni ni-setting"></em>
                                                                                        </a>
                                                                                        <div class="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                                                            <ul class="link-check">
                                                                                                <li><span>Show</span></li>
                                                                                                <li class="active"><a href="#">10</a></li>
                                                                                                <li><a href="#">20</a></li>
                                                                                                <li><a href="#">50</a></li>
                                                                                            </ul>
                                                                                            <ul class="link-check">
                                                                                                <li><span>Order</span></li>
                                                                                                <li class="active"><a href="#">DESC</a></li>
                                                                                                <li><a href="#">ASC</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="card-search search-wrap" data-search="search">
                                                        <div class="card-body">
                                                            <div class="search-content">
                                                                <a href="#" class="search-back btn btn-icon toggle-search" data-target="search"><em class="icon ni ni-arrow-left"></em></a>
                                                                <input type="text" class="form-control border-transparent form-focus-none" placeholder="Search by user or email" />
                                                                <button class="search-submit btn btn-icon"><em class="icon ni ni-search"></em></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-inner p-0">
                                                    <div class="nk-tb-list nk-tb-ulist is-compact">
                                                        <div class="nk-tb-item nk-tb-head">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid" />
                                                                    <label class="custom-control-label" for="uid"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col"><span class="sub-text">Username</span></div>
                                                            <div class="nk-tb-col tb-col-md"><span class="sub-text">Wallet</span></div>
                                                            <div class="nk-tb-col tb-col-sm"><span class="sub-text">Salvage</span></div>
                                                            <div class="nk-tb-col tb-col-md"><span class="sub-text">Level</span></div>
                                                            <div class="nk-tb-col tb-col-xl"><span class="sub-text">Energy</span></div>
                                                            <div class="nk-tb-col tb-col-xl"><span class="sub-text">Shield</span></div>
                                                            <div class="nk-tb-col tb-col-xl"><span class="sub-text">Balance</span></div>
                                                            <div class="nk-tb-col"><span class="sub-text">Plebiscite</span></div>
                                                            <div class="nk-tb-col nk-tb-col-tools text-right">
                                                                <div class="dropdown">
                                                                    <a href="#" class="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-toggle="dropdown" data-offset="0,5"><em class="icon ni ni-plus"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                                        <ul class="link-tidy sm no-bdr">
                                                                            <li>
                                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                                    <input type="checkbox" class="custom-control-input" checked="" id="bl" />
                                                                                    <label class="custom-control-label" for="bl">Balance</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                                    <input type="checkbox" class="custom-control-input" checked="" id="ph" />
                                                                                    <label class="custom-control-label" for="ph">Phone</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                                    <input type="checkbox" class="custom-control-input" id="vri" />
                                                                                    <label class="custom-control-label" for="vri">Verified</label>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div class="custom-control custom-control-sm custom-checkbox">
                                                                                    <input type="checkbox" class="custom-control-input" id="st" />
                                                                                    <label class="custom-control-label" for="st">Status</label>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid1"  />
                                                                    <label class="custom-control-label" for="uid1"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-primary">
                                                                        <span>AB</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Abu Bin Ishtiyak</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>info@softnio.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+811 847-4958</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Bangladesh</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>10 Feb 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid2" />
                                                                    <label class="custom-control-label" for="uid2"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-warning">
                                                                        <span>PN</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Patrick Newman</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Investor</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>patrick@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+942 238-4474</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>United States</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>06 Feb 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid3" />
                                                                    <label class="custom-control-label" for="uid3"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-success">
                                                                        <span>HK</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Howard Kennedy</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>howard@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+447 595-6725</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>England</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-info ni ni-alarm-alt"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>01 Feb 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-warning">Pending</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid4" />
                                                                    <label class="custom-control-label" for="uid4"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-purple">
                                                                        <span>AB</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Albert Brown</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Subscriber</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>howard@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+408 595-6725</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>United States</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon ni ni-alert-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>31 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid5" />
                                                                    <label class="custom-control-label" for="uid5"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-danger">
                                                                        <span>BH</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Brian Hunter</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Manager</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>brian@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+811 521-6695</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Bangladesh</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>28 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-info">Inactive</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid6" />
                                                                    <label class="custom-control-label" for="uid6"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-dark">
                                                                        <span>TS</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Timothy Silva</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Investor</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>timothy@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+91 411-5392</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>India</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>26 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-info">Inactive</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid7" />
                                                                    <label class="custom-control-label" for="uid7"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-success">
                                                                        <span>JC</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Janice Cooper</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Investor</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>janice@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+91 483-6614</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>India</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-warning ni ni-alarm-alt"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>21 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-danger">Suspend</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid8" />
                                                                    <label class="custom-control-label" for="uid8"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-dark">
                                                                        <span>EC</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Elizabeth Carter</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>elizabeth93@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+862 507-4068</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>China</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-info ni ni-alarm-alt"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>21 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid9" />
                                                                    <label class="custom-control-label" for="uid9"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-warning">
                                                                        <span>LN</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Lori Newman</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Investor</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>newman@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+123 287-2360</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>United States</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-info ni ni-alarm-alt"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>18 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid10" />
                                                                    <label class="custom-control-label" for="uid10"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-success">
                                                                        <span>AC</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Alice Contreras</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Manager</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>alice92@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+123 751-5981</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>United States</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>11 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid11" />
                                                                    <label class="custom-control-label" for="uid11"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-primary">
                                                                        <span>JG</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Jesse Guzman</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>guzman@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+842 842-2621</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Vietnam</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>10 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid12" />
                                                                    <label class="custom-control-label" for="uid12"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-danger">
                                                                        <span>GB</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Gary Bishop</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>bishop@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+651 979-7962</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Singapore</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>10 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-warning">Pending</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid13" />
                                                                    <label class="custom-control-label" for="uid13"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-dark">
                                                                        <span>WL</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Wayne Lewis</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>waynelewis@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+632 979-7962</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Philippines</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>05 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-warning">Pending</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid14" />
                                                                    <label class="custom-control-label" for="uid14"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-warning">
                                                                        <span>FP</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Frank Phillips</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>frank97@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+632 577-9342</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Philippines</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-success ni ni-check-circle"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>01 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-item">
                                                            <div class="nk-tb-col nk-tb-col-check">
                                                                <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                    <input type="checkbox" class="custom-control-input" id="uid15" />
                                                                    <label class="custom-control-label" for="uid15"></label>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <div class="user-card">
                                                                    <div class="user-avatar xs bg-success">
                                                                        <span>MB</span>
                                                                    </div>
                                                                    <div class="user-name">
                                                                        <span class="tb-lead">Marilyn Bradley</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>Customer</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-sm">
                                                                <span>marilyn84@example.com</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-md">
                                                                <span>+601 890-3578</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>Malaysia</span>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <ul class="list-status">
                                                                    <li><em class="icon text-warning/ ni ni-alarm-alt"></em> <span>Email</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="nk-tb-col tb-col-xl">
                                                                <span>01 Jan 2020</span>
                                                            </div>
                                                            <div class="nk-tb-col">
                                                                <span class="tb-status text-success">Active</span>
                                                            </div>
                                                            <div class="nk-tb-col nk-tb-col-tools">
                                                                <ul class="nk-tb-actions gx-2">
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Wallet">
                                                                            <em class="icon ni ni-wallet-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Send Email">
                                                                            <em class="icon ni ni-mail-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nk-tb-action-hidden">
                                                                        <a href="#" class="btn btn-sm btn-icon btn-trigger" data-toggle="tooltip" data-placement="top" title="Suspend">
                                                                            <em class="icon ni ni-user-cross-fill"></em>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <div class="drodown">
                                                                            <a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                                <ul class="link-list-opt no-bdr">
                                                                                    <li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-repeat"></em><span>Orders</span></a></li>
                                                                                    <li class="divider"></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                                                                    <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-inner">
                                                    <ul class="pagination justify-content-center justify-content-md-start">
                                                        <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                        <li class="page-item"><span class="page-link"><em class="icon ni ni-more-h"></em></span></li>
                                                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">7</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                
         </div>  
         </div>              
         </div>

           

</div>

</div>
<Footer/>





</div>



</div>
</div>

</div>
)
}
}
export default Affiliate