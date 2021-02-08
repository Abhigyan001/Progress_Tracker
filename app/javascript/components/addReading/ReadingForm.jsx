/* eslint-disable react/destructuring-assignment, react/no-unused-state */
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Html,
  Css,
  Ruby,
  Rubyonrails,
  Javascript,
  Reacts,
} from './Subjects';

class ReadingForm extends React.Component {
  constructor(props) {
    super(props);
    const defaultState = {
      currentStep: 1,
      html: '',
      css: '',
      ruby: '',
      rubyonrails: '',
      javascript: '',
      react: '',
      units: '',
      quota: '',
    };
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    const userID = JSON.parse(localStorage.getItem('redux')).id;
    const { units } = this.state;
    axios.get(`/api/v1/users/${userID}`, { units })
      .then(response => response.data)
      .then(response => {
        if (response.code === 200) {
          this.setState({
            units: response.data.units,
            quota: (Number(response.data.units) / 30) / 6,
          });
        } else if (response.code === 401) {
          this.setState({
            errors: response.errors,
          });
        }
      });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    // eslint-disable-next-line no-unused-vars
    this.setState = (state, callback) => { };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      html, css, ruby, rubyonrails, javascript, react, units,
    } = this.state;
    const progress = Number(html)
    + Number(css)
    + Number(ruby)
    + Number(rubyonrails)
    + Number(javascript)
    + Number(react);
    const available = (units / 30) - progress;
    const left = Math.floor(100 - (100 * (progress / (units / 30))));
    axios.post('/api/v1/readings', {
      html, css, ruby, rubyonrails, javascript, react, progress, available, left,
    })
      .then(response => response.data)
      .then(response => {
        if (response.code === 400) {
          this.setState({
            errors: response.errors,
          });
        } else if (response.code === 200) {
          this.setState({
            html: '',
            css: '',
            ruby: '',
            rubyonrails: '',
            javascript: '',
            progress: '',
            available: '',
            left: '',
          });
          this.props.history.push('/readings');
        }
      });
  }

  next() {
    let { currentStep } = this.state;
    currentStep = currentStep === 6 ? 6 : currentStep + 1;
    this.setState({
      currentStep,
    });
  }

  prev() {
    let { currentStep } = this.state;
    currentStep = currentStep === 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    });
  }

  previousButton() {
    const { currentStep } = this.state;
    if (currentStep !== 1) {
      return (
        <button
          type="button"
          id="prevBtn"
          onClick={this.prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    const { currentStep } = this.state;
    if (currentStep < 6) {
      return (
        <button
          type="button"
          id="nextBtn"
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <form id="regForm" onSubmit={this.handleSubmit}>
          <Html
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            html={this.state.html}
          />
          <Css
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            css={this.state.css}
          />
          <Ruby
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            ruby={this.state.ruby}
          />
          <Rubyonrails
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            rubyonrails={this.state.rubyonrails}
          />
          <Javascript
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            javascript={this.state.javascript}
          />
          <Reacts
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            react={this.state.react}
          />
          <div className="row justify-content-center btn-box">
            {this.previousButton()}
            {this.nextButton()}
          </div>
        </form>
      </>
    );
  }
}

ReadingForm.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(ReadingForm);
