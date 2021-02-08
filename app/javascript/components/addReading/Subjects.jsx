/* eslint-disable react/require-default-props, react/prop-types */
/* eslint-disable react/destructuring-assignment, react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import InputGraph from '../graph/InputGraph';

export function Html(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  const quota = Number(props.quota);
  const units = !props.html ? '' : (Number(props.html) / quota) * 100;
  return (
    <>
      <div className="row justify-content-center reading-header">
        <h4>Enter your HTML module progress</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.html} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="html"
          name="html"
          type="number"
          placeholder={`Enter HTML progress units between 1 to ${Math.floor(quota)}`}
          value={props.html}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Html.propTypes = {
  html: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Css(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  const units = !props.css ? '' : (Number(props.css) / Number(props.quota)) * 100;
  return (
    <>
      <div className="row justify-content-center reading-header">
        <h4>Enter your CSS module progress</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.css} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="css"
          name="css"
          type="number"
          placeholder={`Enter CSS progress units between 1 to ${Math.floor(props.quota)}`}
          value={props.css}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Css.propTypes = {
  css: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Ruby(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  const units = !props.ruby ? '' : (Number(props.ruby) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Enter your Ruby module progress</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.ruby} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="ruby"
          name="ruby"
          type="number"
          placeholder={`Enter Ruby progress units between 1 to ${Math.floor(props.quota)}`}
          value={props.ruby}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Ruby.propTypes = {
  ruby: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Rubyonrails(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  const units = !props.rubyonrails ? '' : (Number(props.rubyonrails) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Enter your RubyonRails module progress</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.rubyonrails} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="rubyonrails"
          name="rubyonrails"
          type="number"
          placeholder={`Enter RubyonRails progress units between 1 to ${Math.floor(props.quota)}`}
          value={props.rubyonrails}
          onChange={props.handleChange}
          required

        />
      </div>
    </>
  );
}

Rubyonrails.propTypes = {
  rubyonrails: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export function Javascript(props) {
  if (props.currentStep !== 5) {
    return null;
  }
  const units = !props.javascript ? '' : (Number(props.javascript) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Enter your Javascript module progress</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.javascript} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="javascript"
          name="javascript"
          type="number"
          placeholder={`Enter Javascript progress units between 1 to ${Math.floor(props.quota)}`}
          value={props.javascript}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Javascript.propTypes = {
  javascript: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Reacts(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  const units = !props.react ? '' : (Number(props.react) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Enter your React module progress</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.react} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="react"
          name="react"
          type="number"
          placeholder={`Enter React progress units between 1 to ${Math.floor(props.quota)}`}
          value={props.react}
          onChange={props.handleChange}
          required
        />
      </div>
      <button className="btn btn-success btn-block">Submit</button>
    </>
  );
}

Reacts.propTypes = {
  react: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
