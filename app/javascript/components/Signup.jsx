import React from 'react';
import Signin from './Signin';

const Signup = () => (
  <div className="container text-content sign-in-up">
    <div className="row justify-content-center">
      <div className="col-md-4 col-md-offset-4">
        <br />
        {/* Nav tabs */}
        <div className="text-center">
          <div className="btn-group">
            <a href="#new" role="tab" data-toggle="tab" className="big btn btn-primary">
              <i className="fa fa-plus" />
              {' '}
              Create Account
            </a>
            <a href="#user" role="tab" data-toggle="tab" className="big btn btn-success">
              <i className="fa fa-user" />
              {' '}
              Login
            </a>
          </div>
        </div>
        <p className="click2select">Tap to select</p>
        <div className="tab-content">
          <div className="tab-pane fade in active" id="new">
            <br />
            <fieldset>
              <div className="form-group">
                <div className="right-inner-addon">
                  <i className="fa fa-envelope" />
                  <input className="form-control input-lg" placeholder="Email" type="text" />
                </div>
              </div>
              <div className="form-group">
                <div className="right-inner-addon">
                  <i className="fa fa-key" />
                  <input className="form-control input-lg" placeholder="Password" type="password" />
                </div>
              </div>
              <div className="form-group">
                <div className="right-inner-addon">
                  <i className="fa fa-key" />
                  <input className="form-control input-lg" placeholder="Confirm Password" id="" type="password" />
                </div>
              </div>
              <div className="form-group">
                <select className="custom-select custom-select-md">
                  <option selected>Current course progress</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                </select>                  
              </div>
              <div className="form-group">
                <select className="custom-select custom-select-md">
                  <option selected>Target progress at EOD</option>
                  <option value="15">15%</option>                  
                  <option value="25">25%</option>
                  <option value="45">45%</option>
                  <option value="65">65%</option>
                  <option value="75">75%</option>
                </select>
              </div>
            </fieldset>
            <hr />
            <div className="tab-content">
              <div className="tab-pane active text-center" id="pp">
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  <i className="fa fa-plus" />
                  {' '}
                  Create Account
                </button>
              </div>
            </div>
          </div>
          <Signin />
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
