import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "../components/Card";
import { Button } from "react-bootstrap";

const Wallet = () => {
  return (
    <>
      {/* <div>
        <div class="nk-app-root">
          <div class="nk-main ">
            <Menu />

            <div class="nk-wrap ">
              <Header />
              <div className="container mt-5">
                <div class="nk-block-head-sub mt-5">
                  <span>Account Wallet</span>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      {" "}
                      <h2>Wallet / Assets</h2>
                      <div class="nk-block-des">
                        <p>Here is the list of your assets / wallets!</p>
                      </div>
                    </div>
                    <div className="col-6"> </div>
                    <div className="col-3">
                      <div className="row">
                        <div className="col-2">
                          <a href="#" class="btn btn-icon btn-sm btn-secondry">
                            <em class="icon ni ni-setting"></em>
                          </a>
                        </div>
                        <div className="col-4">
                          <Button variant="primary">Send</Button>
                        </div>

                        <div className="col-6">
                          <Button variant="secondary">Withdra</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card1 />

              <Footer />
            </div>
          </div>
        </div>
      </div> */}
      <body class="nk-body npc-crypto bg-white has-sidebar">
        <div class="nk-app-root">
          <div class="nk-main">
            <div class="nk-sidebar nk-sidebar-fixed" data-content="sidebarMenu">
              <div class="nk-sidebar-element nk-sidebar-head">
                <div class="nk-sidebar-brand">
                  <a
                    href="/demo5/crypto/index.html"
                    class="logo-link nk-sidebar-logo"
                  >
                    <img
                      class="logo-light logo-img"
                      src="/demo5/images/logo.png"
                      srcset="/demo5/images/logo2x.png 2x"
                      alt="logo"
                    />
                    <img
                      class="logo-dark logo-img"
                      src="/demo5/images/logo-dark.png"
                      srcset="/demo5/images/logo-dark2x.png 2x"
                      alt="logo-dark"
                    />
                    <span class="nio-version">Crypto</span>
                  </a>
                </div>
                <div class="nk-menu-trigger me-n2">
                  <a
                    href="#"
                    class="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                    data-target="sidebarMenu"
                  >
                    <em class="icon ni ni-arrow-left"></em>
                  </a>
                </div>
              </div>
              <div class="nk-sidebar-element">
                <div class="nk-sidebar-body" data-simplebar>
                  <div class="nk-sidebar-content">
                    <div class="nk-sidebar-widget d-none d-xl-block">
                      <div class="user-account-info between-center">
                        <div class="user-account-main">
                          <h6 class="overline-title-alt">Available Balance</h6>
                          <div class="user-balance">
                            2.014095
                            <small class="currency currency-btc">BTC</small>
                          </div>
                          <div class="user-balance-alt">
                            18,934.84{" "}
                            <span class="currency currency-btc">BTC</span>
                          </div>
                        </div>
                        <a href="#" class="btn btn-white btn-icon btn-light">
                          <em class="icon ni ni-line-chart"></em>
                        </a>
                      </div>
                      <ul class="user-account-data gy-1">
                        <li>
                          <div class="user-account-label">
                            <span class="sub-text">Profits (7d)</span>
                          </div>
                          <div class="user-account-value">
                            <span class="lead-text">
                              + 0.0526
                              <span class="currency currency-btc">BTC</span>
                            </span>
                            <span class="text-success ms-2">
                              3.1% <em class="icon ni ni-arrow-long-up"></em>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="user-account-label">
                            <span class="sub-text">Deposit in orders</span>
                          </div>
                          <div class="user-account-value">
                            <span class="sub-text">
                              0.005400
                              <span class="currency currency-btc">BTC</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                      <div class="user-account-actions">
                        <ul class="g-3">
                          <li>
                            <a href="#" class="btn btn-lg btn-primary">
                              <span>Deposit</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="btn btn-lg btn-warning">
                              <span>Withdraw</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
                      <a
                        class="nk-profile-toggle toggle-expand"
                        data-target="sidebarProfile"
                        href="#"
                      >
                        <div class="user-card-wrap">
                          <div class="user-card">
                            <div class="user-avatar">
                              <span>AB</span>
                            </div>
                            <div class="user-info">
                              <span class="lead-text">Abu Bin Ishtiyak</span>
                              <span class="sub-text">info@softnio.com</span>
                            </div>
                            <div class="user-action">
                              <em class="icon ni ni-chevron-down"></em>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div
                        class="nk-profile-content toggle-expand-content"
                        data-content="sidebarProfile"
                      >
                        <div class="user-account-info between-center">
                          <div class="user-account-main">
                            <h6 class="overline-title-alt">
                              Available Balance
                            </h6>
                            <div class="user-balance">
                              2.014095
                              <small class="currency currency-btc">BTC</small>
                            </div>
                            <div class="user-balance-alt">
                              18,934.84
                              <span class="currency currency-btc">BTC</span>
                            </div>
                          </div>
                          <a href="#" class="btn btn-icon btn-light">
                            <em class="icon ni ni-line-chart"></em>
                          </a>
                        </div>
                        <ul class="user-account-data">
                          <li>
                            <div class="user-account-label">
                              <span class="sub-text">Profits (7d)</span>
                            </div>
                            <div class="user-account-value">
                              <span class="lead-text">
                                + 0.0526
                                <span class="currency currency-btc">BTC</span>
                              </span>
                              <span class="text-success ms-2">
                                3.1% <em class="icon ni ni-arrow-long-up"></em>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="user-account-label">
                              <span class="sub-text">Deposit in orders</span>
                            </div>
                            <div class="user-account-value">
                              <span class="sub-text text-base">
                                0.005400
                                <span class="currency currency-btc">BTC</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <ul class="user-account-links">
                          <li>
                            <a href="#" class="link">
                              <span>Withdraw Funds</span>
                              <em class="icon ni ni-wallet-out"></em>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="link">
                              <span>Deposit Funds</span>
                              <em class="icon ni ni-wallet-in"></em>
                            </a>
                          </li>
                        </ul>
                        <ul class="link-list">
                          <li>
                            <a href="/demo5/crypto/profile.html">
                              <em class="icon ni ni-user-alt"></em>
                              <span>View Profile</span>
                            </a>
                          </li>
                          <li>
                            <a href="/demo5/crypto/profile-security.html">
                              <em class="icon ni ni-setting-alt"></em>
                              <span>Account Setting</span>
                            </a>
                          </li>
                          <li>
                            <a href="/demo5/crypto/profile-activity.html">
                              <em class="icon ni ni-activity-alt"></em>
                              <span>Login Activity</span>
                            </a>
                          </li>
                        </ul>
                        <ul class="link-list">
                          <li>
                            <a href="#">
                              <em class="icon ni ni-signout"></em>
                              <span>Sign out</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="nk-sidebar-menu">
                      <ul class="nk-menu">
                        <li class="nk-menu-heading">
                          <h6 class="overline-title">Menu</h6>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/index.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-dashboard"></em>
                            </span>
                            <span class="nk-menu-text">Dashboard</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/accounts.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-user-c"></em>
                            </span>
                            <span class="nk-menu-text">My Account</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/wallets.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-wallet-alt"></em>
                            </span>
                            <span class="nk-menu-text">Wallets</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/buy-sell.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-coins"></em>
                            </span>
                            <span class="nk-menu-text">Buy / Sell</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/order-history.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-repeat"></em>
                            </span>
                            <span class="nk-menu-text">Orders</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/chats.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-chat-circle"></em>
                            </span>
                            <span class="nk-menu-text">Chats</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a
                            href="/demo5/crypto/profile.html"
                            class="nk-menu-link"
                          >
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-account-setting"></em>
                            </span>
                            <span class="nk-menu-text">My Profile</span>
                          </a>
                        </li>
                        <li class="nk-menu-item has-sub">
                          <a href="#" class="nk-menu-link nk-menu-toggle">
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-files"></em>
                            </span>
                            <span class="nk-menu-text">Additional Pages</span>
                          </a>
                          <ul class="nk-menu-sub">
                            <li class="nk-menu-item">
                              <a
                                href="/demo5/crypto/welcome.html"
                                class="nk-menu-link"
                              >
                                <span class="nk-menu-text">Welcome</span>
                              </a>
                            </li>
                            <li class="nk-menu-item">
                              <a
                                href="/demo5/crypto/kyc-application.html"
                                class="nk-menu-link"
                              >
                                <span class="nk-menu-text">
                                  KYC - Get Started
                                </span>
                              </a>
                            </li>
                            <li class="nk-menu-item">
                              <a
                                href="/demo5/crypto/kyc-form.html"
                                class="nk-menu-link"
                              >
                                <span class="nk-menu-text">
                                  KYC - Application Form
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nk-menu-heading">
                          <h6 class="overline-title">Return to</h6>
                        </li>
                        <li class="nk-menu-item">
                          <a href="/demo5/index.html" class="nk-menu-link">
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-dashlite"></em>
                            </span>
                            <span class="nk-menu-text">Main Dashboard</span>
                          </a>
                        </li>
                        <li class="nk-menu-item">
                          <a href="/demo5/components.html" class="nk-menu-link">
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-layers"></em>
                            </span>
                            <span class="nk-menu-text">All Components</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nk-sidebar-widget">
                      <div class="widget-title">
                        <h6 class="overline-title">
                          Crypto Accounts <span>(4)</span>
                        </h6>
                        <a href="#" class="link">
                          View All
                        </a>
                      </div>
                      <ul class="wallet-list">
                        <li class="wallet-item">
                          <a href="#">
                            <div class="wallet-icon">
                              <em class="icon ni ni-sign-kobo"></em>
                            </div>
                            <div class="wallet-text">
                              <h6 class="wallet-name">NioWallet</h6>
                              <span class="wallet-balance">
                                30.959040
                                <span class="currency currency-nio">NIO</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li class="wallet-item">
                          <a href="#">
                            <div class="wallet-icon">
                              <em class="icon ni ni-sign-btc"></em>
                            </div>
                            <div class="wallet-text">
                              <h6 class="wallet-name">Bitcoin Wallet</h6>
                              <span class="wallet-balance">
                                0.0495950
                                <span class="currency currency-btc">BTC</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li class="wallet-item wallet-item-add">
                          <a href="#">
                            <div class="wallet-icon">
                              <em class="icon ni ni-plus"></em>
                            </div>
                            <div class="wallet-text">
                              <h6 class="wallet-name">Add another wallet</h6>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="nk-sidebar-footer">
                      <ul class="nk-menu nk-menu-footer">
                        <li class="nk-menu-item">
                          <a href="#" class="nk-menu-link">
                            <span class="nk-menu-icon">
                              <em class="icon ni ni-help-alt"></em>
                            </span>
                            <span class="nk-menu-text">Support</span>
                          </a>
                        </li>
                        <li class="nk-menu-item ms-auto">
                          <div class="dropup">
                            <a
                              href=""
                              class="nk-menu-link dropdown-indicator has-indicator"
                              data-bs-toggle="dropdown"
                              data-offset="0,10"
                            >
                              <span class="nk-menu-icon">
                                <em class="icon ni ni-globe"></em>
                              </span>
                              <span class="nk-menu-text">English</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                              <ul class="language-list">
                                <li>
                                  <a href="#" class="language-item">
                                    <img
                                      src="/demo5/images/flags/english.png"
                                      alt=""
                                      class="language-flag"
                                    />
                                    <span class="language-name">English</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="language-item">
                                    <img
                                      src="/demo5/images/flags/spanish.png"
                                      alt=""
                                      class="language-flag"
                                    />
                                    <span class="language-name">Español</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="language-item">
                                    <img
                                      src="/demo5/images/flags/french.png"
                                      alt=""
                                      class="language-flag"
                                    />
                                    <span class="language-name">Français</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="language-item">
                                    <img
                                      src="/demo5/images/flags/turkey.png"
                                      alt=""
                                      class="language-flag"
                                    />
                                    <span class="language-name">Türkçe</span>
                                  </a>
                                </li>
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
            <div class="nk-wrap">
              <div class="nk-header nk-header-fluid nk-header-fixed is-light">
                <div class="container-fluid">
                  <div class="nk-header-wrap">
                    <div class="nk-menu-trigger d-xl-none ms-n1">
                      <a
                        href="#"
                        class="nk-nav-toggle nk-quick-nav-icon"
                        data-target="sidebarMenu"
                      >
                        <em class="icon ni ni-menu"></em>
                      </a>
                    </div>
                    <div class="nk-header-brand d-xl-none">
                      <a href="/demo5/crypto/index.html" class="logo-link">
                        <img
                          class="logo-light logo-img"
                          src="/demo5/images/logo.png"
                          srcset="/demo5/images/logo2x.png 2x"
                          alt="logo"
                        />
                        <img
                          class="logo-dark logo-img"
                          src="/demo5/images/logo-dark.png"
                          srcset="/demo5/images/logo-dark2x.png 2x"
                          alt="logo-dark"
                        />
                        <span class="nio-version">Crypto</span>
                      </a>
                    </div>
                    <div class="nk-header-news d-none d-xl-block">
                      <div class="nk-news-list">
                        <a class="nk-news-item" href="#">
                          <div class="nk-news-icon">
                            <em class="icon ni ni-card-view"></em>
                          </div>
                          <div class="nk-news-text">
                            <p>
                              Do you know the latest update of 2022?
                              <span>
                                A overview of our is now available on YouTube
                              </span>
                            </p>
                            <em class="icon ni ni-external"></em>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="nk-header-tools">
                      <ul class="nk-quick-nav">
                        <li class="dropdown language-dropdown d-none d-sm-block me-n1">
                          <a
                            href="#"
                            class="dropdown-toggle nk-quick-nav-icon"
                            data-bs-toggle="dropdown"
                          >
                            <div class="quick-icon border border-light">
                              <img
                                class="icon"
                                src="/demo5/images/flags/english-sq.png"
                                alt=""
                              />
                            </div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                            <ul class="language-list">
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/demo5/images/flags/english.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">English</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/demo5/images/flags/spanish.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Español</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/demo5/images/flags/french.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Français</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/demo5/images/flags/turkey.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Türkçe</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="dropdown user-dropdown">
                          <a
                            href="#"
                            class="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <div class="user-toggle">
                              <div class="user-avatar sm">
                                <em class="icon ni ni-user-alt"></em>
                              </div>
                              <div class="user-info d-none d-md-block">
                                <div class="user-status user-status-unverified">
                                  Unverified
                                </div>
                                <div class="user-name dropdown-indicator">
                                  Abu Bin Ishityak
                                </div>
                              </div>
                            </div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                            <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                              <div class="user-card">
                                <div class="user-avatar">
                                  <span>AB</span>
                                </div>
                                <div class="user-info">
                                  <span class="lead-text">
                                    Abu Bin Ishtiyak
                                  </span>
                                  <span class="sub-text">info@softnio.com</span>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown-inner user-account-info">
                              <h6 class="overline-title-alt">
                                Nio Wallet Account
                              </h6>
                              <div class="user-balance">
                                12.395769
                                <small class="currency currency-btc">BTC</small>
                              </div>
                              <div class="user-balance-sub">
                                Locked
                                <span>
                                  0.344939
                                  <span class="currency currency-btc">BTC</span>
                                </span>
                              </div>
                              <a href="#" class="link">
                                <span>Withdraw Funds</span>
                                <em class="icon ni ni-wallet-out"></em>
                              </a>
                            </div>
                            <div class="dropdown-inner">
                              <ul class="link-list">
                                <li>
                                  <a href="/demo5/crypto/profile.html">
                                    <em class="icon ni ni-user-alt"></em>
                                    <span>View Profile</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/demo5/crypto/profile-security.html">
                                    <em class="icon ni ni-setting-alt"></em>
                                    <span>Account Setting</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/demo5/crypto/profile-activity.html">
                                    <em class="icon ni ni-activity-alt"></em>
                                    <span>Login Activity</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="dropdown-inner">
                              <ul class="link-list">
                                <li>
                                  <a href="#">
                                    <em class="icon ni ni-signout"></em>
                                    <span>Sign out</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li class="dropdown notification-dropdown me-n1">
                          <a
                            href="#"
                            class="dropdown-toggle nk-quick-nav-icon"
                            data-bs-toggle="dropdown"
                          >
                            <div class="icon-status icon-status-info">
                              <em class="icon ni ni-bell"></em>
                            </div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                            <div class="dropdown-head">
                              <span class="sub-title nk-dropdown-title">
                                Notifications
                              </span>
                              <a href="#">Mark All as Read</a>
                            </div>
                            <div class="dropdown-body">
                              <div class="nk-notification">
                                <div class="nk-notification-item dropdown-inner">
                                  <div class="nk-notification-icon">
                                    <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                  </div>
                                  <div class="nk-notification-content">
                                    <div class="nk-notification-text">
                                      You have requested to{" "}
                                      <span>Widthdrawl</span>
                                    </div>
                                    <div class="nk-notification-time">
                                      2 hrs ago
                                    </div>
                                  </div>
                                </div>
                                <div class="nk-notification-item dropdown-inner">
                                  <div class="nk-notification-icon">
                                    <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                  </div>
                                  <div class="nk-notification-content">
                                    <div class="nk-notification-text">
                                      Your <span>Deposit Order</span> is placed
                                    </div>
                                    <div class="nk-notification-time">
                                      2 hrs ago
                                    </div>
                                  </div>
                                </div>
                                <div class="nk-notification-item dropdown-inner">
                                  <div class="nk-notification-icon">
                                    <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                  </div>
                                  <div class="nk-notification-content">
                                    <div class="nk-notification-text">
                                      You have requested to{" "}
                                      <span>Widthdrawl</span>
                                    </div>
                                    <div class="nk-notification-time">
                                      2 hrs ago
                                    </div>
                                  </div>
                                </div>
                                <div class="nk-notification-item dropdown-inner">
                                  <div class="nk-notification-icon">
                                    <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                  </div>
                                  <div class="nk-notification-content">
                                    <div class="nk-notification-text">
                                      Your <span>Deposit Order</span> is placed
                                    </div>
                                    <div class="nk-notification-time">
                                      2 hrs ago
                                    </div>
                                  </div>
                                </div>
                                <div class="nk-notification-item dropdown-inner">
                                  <div class="nk-notification-icon">
                                    <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                  </div>
                                  <div class="nk-notification-content">
                                    <div class="nk-notification-text">
                                      You have requested to{" "}
                                      <span>Widthdrawl</span>
                                    </div>
                                    <div class="nk-notification-time">
                                      2 hrs ago
                                    </div>
                                  </div>
                                </div>
                                <div class="nk-notification-item dropdown-inner">
                                  <div class="nk-notification-icon">
                                    <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                  </div>
                                  <div class="nk-notification-content">
                                    <div class="nk-notification-text">
                                      Your <span>Deposit Order</span> is placed
                                    </div>
                                    <div class="nk-notification-time">
                                      2 hrs ago
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="dropdown-foot center">
                              <a href="#">View All</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nk-content nk-content-fluid">
                <div class="container-xl wide-lg">
                  <div class="nk-content-body">
                    <div class="nk-block-head">
                      <div class="nk-block-head-sub">
                        <span>Account Wallet</span>
                      </div>
                      <div class="nk-block-between-md g-4">
                        <div class="nk-block-head-content">
                          <h2 class="nk-block-title fw-normal">
                            Wallet / Assets
                          </h2>
                          <div class="nk-block-des">
                            <p>Here is the list of your assets / wallets!</p>
                          </div>
                        </div>
                        <div class="nk-block-head-content">
                          <ul class="nk-block-tools gx-3">
                            <li class="opt-menu-md dropdown">
                              <a
                                href="#"
                                class="btn btn-dim btn-outline-light btn-icon"
                                data-bs-toggle="dropdown"
                              >
                                <em class="icon ni ni-setting"></em>
                              </a>
                              <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                <ul class="link-list-plain sm">
                                  <li>
                                    <a href="#">Display</a>
                                  </li>
                                  <li>
                                    <a href="#">Show</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="#" class="btn btn-primary">
                                <span>Send</span>
                                <em class="icon ni ni-arrow-long-right"></em>
                              </a>
                            </li>
                            <li>
                              <a href="#" class="btn btn-dim btn-outline-light">
                                <span>Withdraw</span>
                                <em class="icon ni ni-arrow-long-right"></em>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="nk-block">
                      <div class="nk-block-head-sm">
                        <div class="nk-block-head-content">
                          <h5 class="nk-block-title title">Crypto Accounts</h5>
                        </div>
                      </div>
                      <div class="row g-gs">
                        <div class="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                          <div class="card card-bordered is-dark">
                            <div class="nk-wgw">
                              <div class="nk-wgw-inner">
                                <a
                                  class="nk-wgw-name"
                                  href="/demo5/crypto/wallet-bitcoin.html"
                                >
                                  <div class="nk-wgw-icon is-default">
                                    <em class="icon ni ni-sign-kobo"></em>
                                  </div>
                                  <h5 class="nk-wgw-title title">NioWallet</h5>
                                </a>
                                <div class="nk-wgw-balance">
                                  <div class="amount">
                                    40.509505
                                    <span class="currency currency-nio">
                                      NIO
                                    </span>
                                  </div>
                                  <div class="amount-sm">
                                    8,924.63
                                    <span class="currency currency-usd">
                                      USD
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="nk-wgw-actions">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-up-right"></em>
                                      <span>Send</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-down-left"></em>
                                      <span>Receive</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-to-right"></em>
                                      <span>Withdraw</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="nk-wgw-more dropdown">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                  <ul class="link-list-plain sm">
                                    <li>
                                      <a href="#">Details</a>
                                    </li>
                                    <li>
                                      <a href="#">Edit</a>
                                    </li>
                                    <li>
                                      <a href="#">Delete</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                          <div class="card card-bordered">
                            <div class="nk-wgw">
                              <div class="nk-wgw-inner">
                                <a
                                  class="nk-wgw-name"
                                  href="/demo5/crypto/wallet-bitcoin.html"
                                >
                                  <div class="nk-wgw-icon">
                                    <em class="icon ni ni-sign-eth"></em>
                                  </div>
                                  <h5 class="nk-wgw-title title">
                                    Ethereum Wallet
                                  </h5>
                                </a>
                                <div class="nk-wgw-balance">
                                  <div class="amount">
                                    0.452058
                                    <span class="currency currency-eth">
                                      ETH
                                    </span>
                                  </div>
                                  <div class="amount-sm">
                                    1,583.25
                                    <span class="currency currency-usd">
                                      USD
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="nk-wgw-actions">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-up-right"></em>
                                      <span>Send</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-down-left"></em>
                                      <span>Receive</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-to-right"></em>
                                      <span>Withdraw</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="nk-wgw-more dropdown">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                  <ul class="link-list-plain sm">
                                    <li>
                                      <a href="#">Details</a>
                                    </li>
                                    <li>
                                      <a href="#">Edit</a>
                                    </li>
                                    <li>
                                      <a href="#">Delete</a>
                                    </li>
                                    <li>
                                      <a href="#">Make Default</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                          <div class="card card-bordered">
                            <div class="nk-wgw">
                              <div class="nk-wgw-inner">
                                <a
                                  class="nk-wgw-name"
                                  href="/demo5/crypto/wallet-bitcoin.html"
                                >
                                  <div class="nk-wgw-icon">
                                    <em class="icon ni ni-sign-btc"></em>
                                  </div>
                                  <h5 class="nk-wgw-title title">
                                    Bitcoin Wallet
                                  </h5>
                                </a>
                                <div class="nk-wgw-balance">
                                  <div class="amount">
                                    4.434953
                                    <span class="currency currency-btc">
                                      BTC
                                    </span>
                                  </div>
                                  <div class="amount-sm">
                                    28,247.63
                                    <span class="currency currency-usd">
                                      USD
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="nk-wgw-actions">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-up-right"></em>
                                      <span>Send</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-down-left"></em>
                                      <span>Receive</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-to-right"></em>
                                      <span>Withdraw</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="nk-wgw-more dropdown">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                  <ul class="link-list-plain sm">
                                    <li>
                                      <a href="#">Details</a>
                                    </li>
                                    <li>
                                      <a href="#">Edit</a>
                                    </li>
                                    <li>
                                      <a href="#">Delete</a>
                                    </li>
                                    <li>
                                      <a href="#">Make Default</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="nk-block nk-block-lg">
                      <div class="nk-block-head-sm">
                        <div class="nk-block-head-content">
                          <h5 class="nk-block-title title">Fiat Accounts</h5>
                        </div>
                      </div>
                      <div class="row g-gs">
                        <div class="col-md-6 col-lg-4">
                          <div class="card card-bordered">
                            <div class="nk-wgw">
                              <div class="nk-wgw-inner">
                                <a
                                  class="nk-wgw-name"
                                  href="/demo5/crypto/wallet-bitcoin.html"
                                >
                                  <div class="nk-wgw-icon is-default">
                                    <em class="icon ni ni-sign-usd"></em>
                                  </div>
                                  <h5 class="nk-wgw-title title">
                                    USD Account
                                  </h5>
                                </a>
                                <div class="nk-wgw-balance">
                                  <div class="amount">
                                    12,495.90
                                    <span class="currency currency-usd">
                                      USD
                                    </span>
                                  </div>
                                  <div class="amount-sm">
                                    12,495.90
                                    <span class="currency currency-usd">
                                      USD
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="nk-wgw-actions">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-up-right"></em>
                                      <span>Send</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-down-left"></em>
                                      <span>Receive</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-to-right"></em>
                                      <span>Withdraw</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="nk-wgw-more dropdown">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                  <ul class="link-list-plain sm">
                                    <li>
                                      <a href="#">Details</a>
                                    </li>
                                    <li>
                                      <a href="#">Edit</a>
                                    </li>
                                    <li>
                                      <a href="#">Delete</a>
                                    </li>
                                    <li>
                                      <a href="#">Make Default</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                          <div class="card card-bordered">
                            <div class="nk-wgw">
                              <div class="nk-wgw-inner">
                                <a
                                  class="nk-wgw-name"
                                  href="/demo5/crypto/wallet-bitcoin.html"
                                >
                                  <div class="nk-wgw-icon">
                                    <em class="icon ni ni-sign-eur"></em>
                                  </div>
                                  <h5 class="nk-wgw-title title">
                                    EUR Account
                                  </h5>
                                </a>
                                <div class="nk-wgw-balance">
                                  <div class="amount">
                                    12,495.90
                                    <span class="currency currency-eur">
                                      EUR
                                    </span>
                                  </div>
                                  <div class="amount-sm">
                                    12,495.90
                                    <span class="currency currency-usd">
                                      USD
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="nk-wgw-actions">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-up-right"></em>
                                      <span>Send</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-down-left"></em>
                                      <span>Receive</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <em class="icon ni ni-arrow-to-right"></em>
                                      <span>Withdraw</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="nk-wgw-more dropdown">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"
                                >
                                  <em class="icon ni ni-more-h"></em>
                                </a>
                                <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                  <ul class="link-list-plain sm">
                                    <li>
                                      <a href="#">Details</a>
                                    </li>
                                    <li>
                                      <a href="#">Edit</a>
                                    </li>
                                    <li>
                                      <a href="#">Delete</a>
                                    </li>
                                    <li>
                                      <a href="#">Make Default</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                          <div class="card card-bordered dashed h-100">
                            <div class="nk-wgw-add">
                              <div class="nk-wgw-inner">
                                <a href="#">
                                  <div class="add-icon">
                                    <em class="icon ni ni-plus"></em>
                                  </div>
                                  <h6 class="title">Add New Wallet</h6>
                                </a>
                                <span class="sub-text">
                                  You can add your more wallet in your account
                                  to manage separetly.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nk-footer">
                <div class="container-fluid">
                  <div class="nk-footer-wrap">
                    <div class="nk-footer-copyright">
                      &copy; 2022 DashLite. Template by
                      <a href="https://softnio.com" target="_blank">
                        Softnio
                      </a>
                    </div>
                    <div class="nk-footer-links">
                      <ul class="nav nav-sm">
                        <li class="nav-item dropup">
                          <a
                            href=""
                            class="dropdown-toggle dropdown-indicator has-indicator nav-link text-base"
                            data-bs-toggle="dropdown"
                            data-offset="0,10"
                          >
                            <span>English</span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="language-list">
                              <li>
                                <a href="#" class="language-item">
                                  <span class="language-name">English</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <span class="language-name">Español</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <span class="language-name">Français</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <span class="language-name">Türkçe</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="nav-item">
                          <a
                            data-bs-toggle="modal"
                            href="#region"
                            class="nav-link"
                          >
                            <em class="icon ni ni-globe"></em>
                            <span class="ms-1">Select Region</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="region">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <a href="#" class="close" data-bs-dismiss="modal">
                <em class="icon ni ni-cross-sm"></em>
              </a>
              <div class="modal-body modal-body-md">
                <h5 class="title mb-4">Select Your Country</h5>
                <div class="nk-country-region">
                  <ul class="country-list text-center gy-2">
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="./images/arg.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Argentina</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/aus.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Australia</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/bangladesh.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Bangladesh</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/canada.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">
                          Canada <small>(English)</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/china.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Centrafricaine</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/china.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">China</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/french.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">France</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/germany.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Germany</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/iran.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Iran</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/italy.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Italy</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/mexico.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">México</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/philipine.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Philippines</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/portugal.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Portugal</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/s-africa.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">South Africa</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/spanish.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Spain</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/switzerland.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">Switzerland</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/uk.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">United Kingdom</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="country-item">
                        <img
                          src="/demo5/images/flags/english.png"
                          alt=""
                          class="country-flag"
                        />
                        <span class="country-name">United State</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="nk-sticky-toolbar">
          <li class="demo-layout">
            <a
              class="toggle tipinfo"
              data-target="demoML"
              href="#"
              title="Main Demo Preview"
            >
              <em class="icon ni ni-dashlite"></em>
            </a>
          </li>
          <li class="demo-thumb">
            <a
              class="toggle tipinfo"
              data-target="demoUC"
              href="#"
              title="Use Case Concept"
            >
              <em class="icon ni ni-menu-squared"></em>
            </a>
          </li>
          <li class="demo-settings">
            <a
              class="toggle tipinfo"
              data-target="settingPanel"
              href="#"
              title="Demo Settings"
            >
              <em class="icon ni ni-setting-alt"></em>
            </a>
          </li>
          <li class="demo-purchase">
            <a
              class="tipinfo"
              target="_blank"
              href="https://1.envato.market/e0y3g"
              title="Purchase"
            >
              <em class="icon ni ni-cart"></em>
            </a>
          </li>
        </ul>
        <div
          class="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right"
          data-content="demoML"
          data-toggle-overlay="true"
          data-toggle-body="true"
          data-toggle-screen="any"
        >
          <div class="nk-demo-head">
            <h6 class="mb-0">Switch Demo Layout</h6>
            <a
              class="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
              data-target="demoML"
              href="#"
            >
              <em class="icon ni ni-cross"></em>
            </a>
          </div>
          <div class="nk-demo-list" data-simplebar>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo1/index.html">
                <div class="nk-demo-image bg-blue">
                  <img
                    class="bg-purple"
                    src="https://dashlite.net/images/landing/layout-1d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-1d2x.jpg 2x"
                    alt="Demo Layout 1"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 1</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo2/index.html">
                <div class="nk-demo-image bg-purple">
                  <img
                    src="https://dashlite.net/images/landing/layout-2d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-2d2x.jpg 2x"
                    alt="Demo Layout 2"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 2</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo3/index.html">
                <div class="nk-demo-image bg-success">
                  <img
                    src="https://dashlite.net/images/landing/layout-3d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-3d2x.jpg 2x"
                    alt="Demo Layout 3"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 3</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo4/index.html">
                <div class="nk-demo-image bg-indigo">
                  <img
                    src="https://dashlite.net/images/landing/layout-4d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-4d2x.jpg 2x"
                    alt="Demo Layout 4"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 4</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo5/index.html">
                <div class="nk-demo-image bg-orange">
                  <img
                    src="https://dashlite.net/images/landing/layout-5d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-5d2x.jpg 2x"
                    alt="Demo Layout 5"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 5</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo6/index.html">
                <div class="nk-demo-image bg-purple">
                  <img
                    src="https://dashlite.net/images/landing/layout-6d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-6d2x.jpg 2x"
                    alt="Demo Layout 6"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 6</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo7/index.html">
                <div class="nk-demo-image bg-teal">
                  <img
                    src="https://dashlite.net/images/landing/layout-7d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-7d2x.jpg 2x"
                    alt="Demo Layout 7"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 7</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo8/index.html">
                <div class="nk-demo-image bg-azure">
                  <img
                    src="https://dashlite.net/images/landing/layout-8d.jpg"
                    srcset="https://dashlite.net/images/landing/layout-8d2x.jpg 2x"
                    alt="Demo Layout 8"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Demo Layout 8</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/landing/index.html">
                <div class="nk-demo-image bg-red">
                  <img
                    src="https://dashlite.net/images/landing/main-landing.jpg"
                    srcset="
                  https://dashlite.net/images/landing/main-landing2x.jpg 2x
                "
                    alt="Landing Page"
                  />
                </div>
                <span class="nk-demo-title">
                  <strong>Landing Page</strong>
                  <span class="badge badge-danger ml-1">Free</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          class="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right"
          data-content="demoUC"
          data-toggle-overlay="true"
          data-toggle-body="true"
          data-toggle-screen="any"
        >
          <div class="nk-demo-head">
            <h6 class="mb-0">Use Case Concept</h6>
            <a
              class="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
              data-target="demoUC"
              href="#"
            >
              <em class="icon ni ni-cross"></em>
            </a>
          </div>
          <div class="nk-demo-list" data-simplebar>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo2/ecommerce/index.html">
                <div class="nk-demo-image bg-dark">
                  <img
                    src="https://dashlite.net/images/landing/demo-ecommerce.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-ecommerce2x.jpg 2x
                "
                    alt="Ecommerce"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo2</em>
                  <br />
                  <strong>E-Commerce Panel</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo2/lms/index.html">
                <div class="nk-demo-image bg-danger">
                  <img
                    src="https://dashlite.net/images/landing/demo-lms.jpg"
                    srcset="https://dashlite.net/images/landing/demo-lms2x.jpg 2x"
                    alt="LMS"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo2</em>
                  <br />
                  <strong>LMS / Learning Management System</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo1/crm/index.html">
                <div class="nk-demo-image bg-info">
                  <img
                    src="https://dashlite.net/images/landing/demo-crm.jpg"
                    srcset="https://dashlite.net/images/landing/demo-crm2x.jpg 2x"
                    alt="CRM / Customer Relationship"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo1</em>
                  <br />
                  <strong>CRM / Customer Relationship Management</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo7/hospital/index.html">
                <div class="nk-demo-image bg-indigo">
                  <img
                    src="https://dashlite.net/images/landing/demo-hospital.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-hospital2x.jpg 2x
                "
                    alt="Hospital Managemen"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo7</em>
                  <br />
                  <strong>Hospital Management</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo1/hotel/index.html">
                <div class="nk-demo-image bg-pink">
                  <img
                    src="https://dashlite.net/images/landing/demo-hotel.jpg"
                    srcset="https://dashlite.net/images/landing/demo-hotel2x.jpg 2x"
                    alt="Hotel Managemen"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo1</em>
                  <br />
                  <strong>Hotel Management</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo3/cms/index.html">
                <div class="nk-demo-image bg-dark">
                  <img
                    src="https://dashlite.net/images/landing/demo-cms.jpg"
                    srcset="https://dashlite.net/images/landing/demo-cms2x.jpg 2x"
                    alt="cms"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo3</em>
                  <br />
                  <strong>CMS Panel</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo5/crypto/index.html">
                <div class="nk-demo-image bg-warning">
                  <img
                    src="https://dashlite.net/images/landing/demo-buysell.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-buysell2x.jpg 2x
                "
                    alt="Crypto BuySell / Wallet"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo5</em>
                  <br />
                  <strong>Crypto BuySell Panel</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo6/invest/index.html">
                <div class="nk-demo-image bg-indigo">
                  <img
                    src="https://dashlite.net/images/landing/demo-invest.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-invest2x.jpg 2x
                "
                    alt="HYIP / Investment"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo6</em>
                  <br />
                  <strong>HYIP / Investment Panel</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo3/apps/file-manager.html">
                <div class="nk-demo-image bg-purple">
                  <img
                    src="https://dashlite.net/images/landing/demo-file-manager.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-file-manager2x.jpg 2x
                "
                    alt="File Manager"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo3</em>
                  <br />
                  <strong>Apps - File Manager</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo4/subscription/index.html">
                <div class="nk-demo-image bg-primary">
                  <img
                    src="https://dashlite.net/images/landing/demo-subscription.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-subscription2x.jpg 2x
                "
                    alt="SAAS / Subscription"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo4</em>
                  <br />
                  <strong>SAAS / Subscription Panel</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/covid/index.html">
                <div class="nk-demo-image bg-danger">
                  <img
                    src="https://dashlite.net/images/landing/demo-covid19.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-covid192x.jpg 2x
                "
                    alt="Covid Situation"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Covid</em>
                  <br />
                  <strong>Coronavirus Situation</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo3/apps/messages.html">
                <div class="nk-demo-image bg-success">
                  <img
                    src="https://dashlite.net/images/landing/demo-messages.jpg"
                    srcset="
                  https://dashlite.net/images/landing/demo-messages2x.jpg 2x
                "
                    alt="Messages"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo3</em>
                  <br />
                  <strong>Apps - Messages</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo3/apps/mailbox.html">
                <div class="nk-demo-image bg-purple">
                  <img
                    src="https://dashlite.net/images/landing/demo-inbox.jpg"
                    srcset="https://dashlite.net/images/landing/demo-inbox2x.jpg 2x"
                    alt="Inbox"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo3</em>
                  <br />
                  <strong>Apps - Mailbox</strong>
                </span>
              </a>
            </div>
            <div class="nk-demo-item">
              <a href="https://dashlite.net/demo3/apps/chats.html">
                <div class="nk-demo-image bg-purple">
                  <img
                    src="https://dashlite.net/images/landing/demo-chats.jpg"
                    srcset="https://dashlite.net/images/landing/demo-chats2x.jpg 2x"
                    alt="Chats / Messenger"
                  />
                </div>
                <span class="nk-demo-title">
                  <em class="text-primary">Demo3</em>
                  <br />
                  <strong>Apps - Chats</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          class="nk-demo-panel toggle-slide toggle-slide-right"
          data-content="settingPanel"
          data-toggle-overlay="true"
          data-toggle-body="true"
          data-toggle-screen="any"
        >
          <div class="nk-demo-head">
            <h6 class="mb-0">Preview Settings</h6>
            <a
              class="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
              data-target="settingPanel"
              href="#"
            >
              <em class="icon ni ni-cross"></em>
            </a>
          </div>
          <div class="nk-opt-panel" data-simplebar>
            <div class="nk-opt-set">
              <div class="nk-opt-set-title">Direction Change</div>
              <div class="nk-opt-list col-2x">
                <div
                  class="nk-opt-item only-text active"
                  data-key="dir"
                  data-update="ltr"
                >
                  <span class="nk-opt-item-bg">
                    <span class="nk-opt-item-name">LTR Mode</span>
                  </span>
                </div>
                <div
                  class="nk-opt-item only-text"
                  data-key="dir"
                  data-update="rtl"
                >
                  <span class="nk-opt-item-bg">
                    <span class="nk-opt-item-name">RTL Mode</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="nk-opt-set">
              <div class="nk-opt-set-title">Main UI Style</div>
              <div class="nk-opt-list col-2x">
                <div
                  class="nk-opt-item only-text active"
                  data-key="style"
                  data-update="ui-default"
                >
                  <span class="nk-opt-item-bg">
                    <span class="nk-opt-item-name">Default</span>
                  </span>
                </div>
                <div
                  class="nk-opt-item only-text"
                  data-key="style"
                  data-update="ui-shady"
                >
                  <span class="nk-opt-item-bg">
                    <span class="nk-opt-item-name">Shady</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="nk-opt-set nk-opt-set-aside">
              <div class="nk-opt-set-title">Sidebar Style</div>
              <div class="nk-opt-list col-4x">
                <div
                  class="nk-opt-item"
                  data-key="aside"
                  data-update="is-light"
                >
                  <span class="nk-opt-item-bg is-light">
                    <span class="bg-lighter"></span>
                  </span>
                  <span class="nk-opt-item-name">White</span>
                </div>
                <div
                  class="nk-opt-item"
                  data-key="aside"
                  data-update="is-default"
                >
                  <span class="nk-opt-item-bg is-light">
                    <span class="bg-light"></span>
                  </span>
                  <span class="nk-opt-item-name">Light</span>
                </div>
                <div
                  class="nk-opt-item active"
                  data-key="aside"
                  data-update="is-dark"
                >
                  <span class="nk-opt-item-bg">
                    <span class="bg-dark"></span>
                  </span>
                  <span class="nk-opt-item-name">Dark</span>
                </div>
                <div
                  class="nk-opt-item"
                  data-key="aside"
                  data-update="is-theme"
                >
                  <span class="nk-opt-item-bg">
                    <span class="bg-theme"></span>
                  </span>
                  <span class="nk-opt-item-name">Theme</span>
                </div>
              </div>
            </div>
            <div class="nk-opt-set nk-opt-set-header">
              <div class="nk-opt-set-title">Header Style</div>
              <div class="nk-opt-list col-4x">
                <div
                  class="nk-opt-item active"
                  data-key="header"
                  data-update="is-light"
                >
                  <span class="nk-opt-item-bg is-light">
                    <span class="bg-lighter"></span>
                  </span>
                  <span class="nk-opt-item-name">White</span>
                </div>
                <div
                  class="nk-opt-item"
                  data-key="header"
                  data-update="is-default"
                >
                  <span class="nk-opt-item-bg is-light">
                    <span class="bg-light"></span>
                  </span>
                  <span class="nk-opt-item-name">Light</span>
                </div>
                <div
                  class="nk-opt-item"
                  data-key="header"
                  data-update="is-dark"
                >
                  <span class="nk-opt-item-bg">
                    <span class="bg-dark"></span>
                  </span>
                  <span class="nk-opt-item-name">Dark</span>
                </div>
                <div
                  class="nk-opt-item"
                  data-key="header"
                  data-update="is-theme"
                >
                  <span class="nk-opt-item-bg">
                    <span class="bg-theme"></span>
                  </span>
                  <span class="nk-opt-item-name">Theme</span>
                </div>
              </div>
            </div>
            <div class="nk-opt-set nk-opt-set-skin">
              <div class="nk-opt-set-title">Primary Skin</div>
              <div class="nk-opt-list">
                <div
                  class="nk-opt-item active"
                  data-key="skin"
                  data-update="default"
                >
                  <span class="nk-opt-item-bg">
                    <span class="skin-default"></span>
                  </span>
                  <span class="nk-opt-item-name">Default</span>
                </div>
                <div class="nk-opt-item" data-key="skin" data-update="bluelite">
                  <span class="nk-opt-item-bg">
                    <span class="skin-bluelite"></span>
                  </span>
                  <span class="nk-opt-item-name">Blue Light</span>
                </div>
                <div class="nk-opt-item" data-key="skin" data-update="egyptian">
                  <span class="nk-opt-item-bg">
                    <span class="skin-egyptian"></span>
                  </span>
                  <span class="nk-opt-item-name">Egyptian</span>
                </div>
                <div class="nk-opt-item" data-key="skin" data-update="purple">
                  <span class="nk-opt-item-bg">
                    <span class="skin-purple"></span>
                  </span>
                  <span class="nk-opt-item-name">Purple</span>
                </div>
                <div class="nk-opt-item" data-key="skin" data-update="green">
                  <span class="nk-opt-item-bg">
                    <span class="skin-green"></span>
                  </span>
                  <span class="nk-opt-item-name">Green</span>
                </div>
                <div class="nk-opt-item" data-key="skin" data-update="red">
                  <span class="nk-opt-item-bg">
                    <span class="skin-red"></span>
                  </span>
                  <span class="nk-opt-item-name">Red</span>
                </div>
              </div>
            </div>
            <div class="nk-opt-set">
              <div class="nk-opt-set-title">Skin Mode</div>
              <div class="nk-opt-list col-2x">
                <div
                  class="nk-opt-item active"
                  data-key="mode"
                  data-update="light-mode"
                >
                  <span class="nk-opt-item-bg is-light">
                    <span class="theme-light"></span>
                  </span>
                  <span class="nk-opt-item-name">Light Skin</span>
                </div>
                <div
                  class="nk-opt-item"
                  data-key="mode"
                  data-update="dark-mode"
                >
                  <span class="nk-opt-item-bg">
                    <span class="theme-dark"></span>
                  </span>
                  <span class="nk-opt-item-name">Dark Skin</span>
                </div>
              </div>
            </div>
            <div class="nk-opt-reset">
              <a href="#" class="reset-opt-setting">
                Reset Setting
              </a>
            </div>
          </div>
        </div>
        <div class="pmo-lv pmo-dark">
          <a class="pmo-close" href="#">
            <em class="ni ni-cross"></em>
          </a>
          <a
            class="pmo-wrap"
            target="_blank"
            href="https://softnio.com/get-early-access/"
          >
            <div class="pmo-text text-white">
              Looking for functional script for HYIP Investment Platform? Check
              out
              <em class="ni ni-arrow-long-right"></em>
            </div>
          </a>
        </div>
        <a
          class="pmo-st pmo-dark"
          target="_blank"
          href="https://softnio.com/get-early-access/"
        >
          <div class="pmo-st-img">
            <img
              src="https://dashlite.net/images/landing/promo-investorm.png"
              alt="Investorm"
            />
          </div>
          <div class="pmo-st-text">
            Looking for Advanced <br />
            HYIP Investment Platform?
          </div>
        </a>
        <script src="/demo5/assets/js/bundle.js?ver=3.0.1"></script>
        <script src="/demo5/assets/js/scripts.js?ver=3.0.1"></script>
        <script src="/demo5/assets/js/demo-settings.js?ver=3.0.1"></script>
        <script src="/demo5/assets/js/charts/chart-crypto.js?ver=3.0.1"></script>
      </body>
    </>
  );
};

export default Wallet;
