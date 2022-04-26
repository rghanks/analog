import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card1 = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
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
                      40.509505<span class="currency currency-nio">NIO</span>
                    </div>
                    <div class="amount-sm">
                      8,924.63<span class="currency currency-usd">USD</span>
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
          <div className="col-4 col-md-4 col-12 mt-1">
            <div class="card text-white bg-primary">
              {" "}
              <div class="card-header">Binance</div>{" "}
              <div class="card-inner">
                {" "}
                <h5 class="card-title">Primary card title</h5>{" "}
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4 col-12 mt-1">
            <div class="card text-white bg-primary">
              {" "}
              <div class="card-header">
                Bitcoin
                <div className="rounded">
                  {/* <img src="images/logo.png" className="rounded" /> */}
                </div>
              </div>{" "}
              <div class="card-inner">
                {" "}
                <h5 class="card-title">Primary card title</h5>{" "}
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-md-4 col-12 mt-1">
            <div class="card text-white bg-primary">
              {" "}
              <div class="card-header">Ethereum</div>{" "}
              <div class="card-inner">
                {" "}
                <h5 class="card-title">Primary card title</h5>{" "}
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4 col-12 mt-1">
            <div class="card text-white bg-primary">
              {" "}
              <div class="card-header">Binance</div>{" "}
              <div class="card-inner">
                {" "}
                <h5 class="card-title">Primary card title</h5>{" "}
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-4 col-md-4 col-12 mt-1">
            <div class="card text-white bg-primary">
              {" "}
              <div class="card-header">
                Bitcoin
                <div className="rounded">
                  {/* <img src="images/logo.png" className="rounded" /> */}
                </div>
              </div>{" "}
              <div class="card-inner">
                {" "}
                <h5 class="card-title">Primary card title</h5>{" "}
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
