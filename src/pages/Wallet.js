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
    </>
  );
};

export default Wallet;
