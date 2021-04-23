import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faLaptop,
  faFileAlt,
  faFileCode,
  faFolderPlus,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circle from '../graph/OutputGraph';

export class DailyStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reading: {
        html: '',
        css: '',
        ruby: '',
        rubyonrails: '',
        javascript: '',
        react: '',
        left: '',
        available: '',
        progress: '',
      },
      user: {
        units: '',
      },
    };
  }

  async componentDidMount() {
    const { userId, id } = this.props;
    const { units } = this.state;
    try {
      const [userData, readingData] = await axios.all([
        axios.get(`/api/v1/users/${userId}`, { units }),
        axios.get(`/api/v1/user/${userId}/reading/${id}`, { units }),
      ]);
      if (userData.data.code === 200 && userData.data.code === 200) {
        this.setState({
          reading: readingData.data.data,
          user: userData.data.data,
        });
      }
    } catch (err) {
      throw err.message;
    }
  }

  render() {
    const { reading, user } = this.state;
    const quota = (Number(user.units) / 30);
    const consumptionPc = Math.floor(((Number(reading.progress)) / quota) * 100);
    const availablePC = Math.floor(((Number(reading.available)) / quota) * 100);
    return (
      <>
        <main>
          <div className="daily-stats" index={reading.id}>
            <section className="row reading-header">
              <h4>{moment(reading.created_at).format('DD MMM YYYY')}</h4>
            </section>
            <section className="row graph-box">
              <div className="row">
                <div className="col">
                  <Circle>
                    <CircularProgressbarWithChildren
                      value={consumptionPc}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                        trailColor: '#D6D6D6',
                      })}
                    >
                      <div className="circle-text">
                        <strong className="circle-strong">
                          {reading.progress}
                        </strong>
                        <br />
                        {' '}
                        Minutes
                      </div>
                    </CircularProgressbarWithChildren>
                  </Circle>
                  <header className="text-center">
                    <h6>Progress</h6>
                  </header>
                </div>
                <div className="col">
                  <Circle>
                    <CircularProgressbarWithChildren
                      value={availablePC}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                        trailColor: '#D6D6D6',
                      })}
                    >
                      <div className="circle-text">
                        <strong className="circle-strong">
                          {reading.available}
                        </strong>
                        <br />
                        {' '}
                        Minutes
                      </div>
                    </CircularProgressbarWithChildren>
                  </Circle>
                  <header className="text-center">
                    <h6>Available</h6>
                  </header>
                </div>
                <div className="col">
                  <Circle>
                    <CircularProgressbarWithChildren
                      value={reading.left}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                        trailColor: '#D6D6D6',
                      })}
                    >
                      <div className="circle-text">
                        <strong className="circle-strong">
                          {reading.left}
                          %
                        </strong>
                      </div>
                    </CircularProgressbarWithChildren>
                  </Circle>
                  <header className="text-center">
                    <h6>Left</h6>
                  </header>
                </div>
              </div>
            </section>
            <section className="rows">
              <div className="row">
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faNewspaper} className="dayStat" size="4x" />
                    </div>
                    <header className="col room-units">
                      <p className="m-0">HTML</p>
                      <h4>
                        {reading.html}
                        {' '}
                        mins
                      </h4>
                    </header>
                  </div>
                </div>
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faLaptop} className="dayStat" size="4x" />
                    </div>
                    <header className="col room-units">
                      <p className="m-0">CSS</p>
                      <h4>
                        {reading.css}
                        {' '}
                        mins
                      </h4>
                    </header>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faFileAlt} className="dayStat" size="4x" />
                    </div>
                    <header className="col room-units">
                      <p className="m-0">Ruby</p>
                      <h4>
                        {reading.ruby}
                        {' '}
                        mins
                      </h4>
                    </header>
                  </div>
                </div>
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faFileCode} className="dayStat" size="4x" />
                    </div>
                    <header className="col room-units">
                      <p className="m-0">RubyonRails</p>
                      <h4>
                        {reading.rubyonrails}
                        {' '}
                        mins
                      </h4>
                    </header>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faFolderPlus} className="dayStat" size="4x" />
                    </div>
                    <header className="col room-units">
                      <p className="m-0">Javascript</p>
                      <h4>
                        {reading.javascript}
                        {' '}
                        mins
                      </h4>
                    </header>
                  </div>
                </div>
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faFolderOpen} className="dayStat" size="4x" />
                    </div>
                    <header className="col room-units">
                      <p className="m-0">React</p>
                      <h4>
                        {reading.react}
                        {' '}
                        mins
                      </h4>
                    </header>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

DailyStats.propTypes = {
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DailyStats;
