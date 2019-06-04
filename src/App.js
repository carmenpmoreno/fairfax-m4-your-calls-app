import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import NewCall from './components/NewCall';
import CallHistory from './components/CallHistory';
import { getData } from './services/getData';
import { getList } from './services/getList';
import { currentTime } from './services/getDefaultDate';
import './styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Modal from './components/Modal';
import * as moment from 'moment';
import Dashboard from './components/Dashboard';

// import dataBackBars from './assets/dataBackBars';
import monthsYear from './assets/monthsYear';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectPersonRequested = React.createRef();
    this.wholeList = [];

    this.state = {
      info: {
        addedBy: '',
        personRequested: '',
        name: '',
        company: '',
        position: '',
        otherInfo: '',
        email: '',
        telephone: 0,
        action: '',
        message: '',
        tone: ''
      },

      errorTone: 'hidden',
      errorIncomingData: 'hidden',
      errorCallAction: 'hidden',
      errorPerson: 'hidden',
      succesMessage: 'hidden',
      errorMessage: 'hidden',
      callAgainClass: '',
      callBackClass: '',
      redialCheck: false,
      callBackCheck: false,

      results: [],
      startDate: '',
      endDate: '',
      dateValues: {
        dateEnd: '',
        dateStart: ''
      },
      filter: {
        dateStart: '',
        dateEnd: '',
        companySelected: ''
      },
      nameRequired: 'hidden',
      companyRequired: 'hidden',
      pieDataLoadingStatus: 'loading',
      pieChartData: [],

      barDataLoadingStatus: 'loading',
      dataBarsTransformed: [],
      chartDataBars: [],

      allCompanies: []
    };

    this.getWhoCalls = this.getWhoCalls.bind(this);
    this.getRequestedEmployee = this.getRequestedEmployee.bind(this);
    this.getName = this.getName.bind(this);
    this.getCompany = this.getCompany.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getOtherInfo = this.getOtherInfo.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getCallAction = this.getCallAction.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
    this.isEmptyOrNot = this.isEmptyOrNot.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.deselectOption = this.deselectOption.bind(this);
    this.showList = this.showList.bind(this);
    this.getStartDate = this.getStartDate.bind(this);
    this.getEndDate = this.getEndDate.bind(this);
    this.filterDate = this.filterDate.bind(this);
    this.getInputTone = this.getInputTone.bind(this);
    this.setFilterStartDate = this.setFilterStartDate.bind(this);
    this.setFilterEndDate = this.setFilterEndDate.bind(this);
    this.makeNameRequired = this.makeNameRequired.bind(this);
    this.makeCompanyRequired = this.makeCompanyRequired.bind(this);
    this.fetchChartPie = this.fetchChartPie.bind(this);
    this.getCompanySelected = this.getCompanySelected.bind(this);
  }

  componentDidMount() {
    this.getCompaniesData();
    if (!this.state.filter.dateEnd && !this.state.filter.dateStart) {
      const dates = currentTime();
      this.setState(prevState => {
        return {
          dateValues: {
            dateEnd: dates[3],
            dateStart: dates[2]
          },
          filter: {
            ...prevState.filter,
            dateStart: dates[1],
            dateEnd: dates[0]
          }
        };
      });
    }
  }

  componentDidUpdate(nextProp, nextState) {
    if (this.state.filter !== nextState.filter) {
      this.fetchChartPie(
        this.state.filter.dateStart,
        this.state.filter.dateEnd,
        this.state.filter.companySelected
      );
      this.fetchChartBar(
        this.state.filter.dateStart,
        this.state.filter.dateEnd,
        this.state.filter.companySelected
      );
    }
  }

  fetchChartPie(startDate, endDate, companySelected) {
    const URL = `https://adalab.interacso.com/api/graph/pie?from=${startDate}&to=${endDate}&company=${companySelected.toLowerCase()}`;
    console.log(URL);
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        const rateCurrencyNames = ['Genial', 'Meh', 'Mal'];
        const rateCurrencyValues = Object.values(data);
        const chartData = [['Call mood', 'Quantity']];
        for (let i = 0; i < rateCurrencyNames.length; i += 1) {
          chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]]);
        }
        this.setState({
          pieDataLoadingStatus: 'ready',
          pieChartData: chartData
        });
      });
  }

  // fetchChartBar(startDate, endDate, companySelected) {
  //   const URL = `https://adalab.interacso.com/api/graph/bar?from=${startDate}&to=${endDate}&company=${companySelected.toLowerCase()}`;
  //   return fetch(URL)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.transformDataBars(data);
  //       return this.setState({
  //         barDataLoadingStatus: 'ready',
  //         dataBarsTransformed: data.map((item, index) => {
  //           //Modify the key month with a word instead of a number
  //           return {
  //             ...item,
  //             month: monthsYear[data[index].month]
  //           };
  //         })
  //       });
  //     });
  // }

  fetchChartBar(startDate, endDate, companySelected) {
    const URL = `https://adalab.interacso.com/api/graph/bar?from=${startDate}&to=${endDate}&company=${companySelected.toLowerCase()}`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return this.setState(
          {
            barDataLoadingStatus: 'ready',
            dataBarsTransformed: data.map((item, index) => {
              //Modify the key month with a word instead of a number
              return {
                ...item,
                month: monthsYear[data[index].month]
              };
            })
          },
          () => this.transformDataBars(this.state.dataBarsTransformed)
        );
      });
  }

  transformDataBars(dataToTransform) {
    const oneMonthReduced = dataToTransform[1];

    const allDataToKeep = Object.values(oneMonthReduced);
    //We need to reverse the array to have 'month' and 'year' on the first positions
    const allDataToKeepReversed = allDataToKeep.reverse();

    const dataToDelete = allDataToKeepReversed.splice(0, 1);

    const arrayWithoutYear = allDataToKeepReversed.filter(
      item => item !== dataToDelete[0]
    );

    const companiesKeys = Object.keys(oneMonthReduced)
      .reverse()
      .splice(2);
    //Here all items following 'Months' should be from the filter fetch. Let's start with them manually
    const chartTitle = ['Meses'];
    const concatArrays = chartTitle.concat(companiesKeys);

    const chartDataBars = [];
    chartDataBars.push(concatArrays);
    chartDataBars.push(arrayWithoutYear);

    this.setState({
      chartDataBars: chartDataBars
    });
    return chartDataBars;
  }

  getInputTone(e) {
    const { value } = e.currentTarget;
    this.setState(prevState => {
      return {
        info: {
          ...prevState.info,
          tone: value
        }
      };
    });
  }

  getWhoCalls(event) {
    const { info } = this.state;
    const newInfo = { ...info, addedBy: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getRequestedEmployee(event) {
    const { info } = this.state;
    const newInfo = { ...info, personRequested: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getName(event) {
    const { info } = this.state;
    const newInfo = { ...info, name: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getCompany(event) {
    const { info } = this.state;
    const newInfo = { ...info, company: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getPosition(event) {
    const { info } = this.state;
    const newInfo = { ...info, position: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getOtherInfo(event) {
    const { info } = this.state;
    const newInfo = { ...info, otherInfo: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getEmail(event) {
    const { info } = this.state;
    const newInfo = { ...info, email: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getPhone(event) {
    const { info } = this.state;
    const newInfo = { ...info, telephone: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  getCallAction(event) {
    const { info } = this.state;
    const newInfo = { ...info, action: event.currentTarget.value };
    let state = {
      info: newInfo,
      callAgainClass: '',
      callBackClass: '',
      redialCheck: false,
      callBackCheck: false
    };

    if (event.currentTarget.id === 'redial') {
      if (!this.state.redialCheck) {
        state = {
          info: newInfo,
          callAgainClass: 'selectedClass',
          callBackClass: '',
          redialCheck: true,
          callBackCheck: false
        };
      }
    } else {
      if (!this.state.callBackCheck) {
        state = {
          info: newInfo,
          callAgainClass: '',
          callBackClass: 'selectedClass',
          redialCheck: false,
          callBackCheck: true
        };
      }
    }
    this.setState(state);
  }

  getMessage(event) {
    const { info } = this.state;
    const newInfo = { ...info, message: event.currentTarget.value };
    this.setState({ info: newInfo });
  }

  preventSubmission(event) {
    event.preventDefault();
  }

  sendInfo() {
    const info = this.state.info;
    getData(info)
      .then(response => console.log('Success:', JSON.stringify(response)))
      .then(
        this.setState({
          succesMessage: ''
        })
      )
      .catch(error => console.error('Error:', error));
  }

  sendForm(event) {
    event.preventDefault();
    this.isEmptyOrNot();
    this.makeNameRequired();
    this.makeCompanyRequired();
  }

  isEmptyOrNot() {
    const incomingInfo = this.state.info;
    if (incomingInfo.personRequested === '') {
      this.setState({
        errorPerson: ''
      });
    } else if (incomingInfo.message === '') {
      this.setState({
        errorIncomingData: 'hidden',
        errorCallAction: '',
        errorPerson: 'hidden',
        errorMessage: ''
      });
    } else if (incomingInfo.tone === '') {
      this.setState({
        errorIncomingData: 'hidden',
        errorCallAction: 'hidden',
        errorPerson: 'hidden',
        errorMessage: 'hidden',
        errorTone: ''
      });
    } else {
      this.setState({
        errorIncomingData: 'hidden',
        errorCallAction: 'hidden',
        errorPerson: 'hidden',
        errorMessage: 'hidden'
      });
      this.sendInfo();
      this.sendSlackInfo();
    }
  }

  makeNameRequired() {
    if (this.state.info.name === '') {
      this.setState(prevState => {
        return {
          nameRequired: ''
        };
      });
    } else {
      this.setState(prevState => {
        return {
          nameRequired: 'hidden'
        };
      });
    }
  }

  makeCompanyRequired() {
    if (this.state.info.company === '') {
      this.setState(prevState => {
        return {
          companyRequired: ''
        };
      });
    } else {
      this.setState(prevState => {
        return {
          companyRequired: 'hidden'
        };
      });
    }
  }

  deselectOption() {
    const addedBy = this.state.info.addedBy;

    if (addedBy !== '') {
      const optionsArray = this.selectPersonRequested.current.getElementsByTagName(
        'option'
      );

      for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].label.includes(addedBy)) {
          optionsArray[i].disabled = true;
          optionsArray[i].style.display = 'none';
        } else {
          optionsArray[i].disabled = false;
          optionsArray[i].style.display = 'block';
        }
      }
    }
  }

  makeMessage() {
    let message = `*${
      this.state.info.personRequested
    }*, te acaban de llamar y te han dejado el siguiente mensaje: \n*${
      this.state.info.action
    } \n${this.state.info.message}*`;

    if (
      (this.state.info.name !== '' ||
        this.state.info.position !== '' ||
        this.state.info.company !== '' ||
        this.state.info.otherInfo !== '' ||
        this.state.info.email !== '') &&
      this.state.info.telephone === 0
    ) {
      return (message = `*${
        this.state.info.personRequested
      }*, te acaba de llamar: \n*${this.state.info.name} \n${
        this.state.info.position
      } \n${this.state.info.company}  \n${this.state.info.email} \n${
        this.state.info.otherInfo
      }* \nSu mensaje ha sido: \n*${this.state.info.action} \n${
        this.state.info.message
      }*`);
    } else if (
      this.state.info.name !== '' ||
      this.state.info.position !== '' ||
      this.state.info.company !== '' ||
      this.state.info.otherInfo !== '' ||
      this.state.info.email !== '' ||
      this.state.info.telephone !== 0
    ) {
      return (message = `*${
        this.state.info.personRequested
      }*, te acaba de llamar: \n*${this.state.info.name} \n${
        this.state.info.position
      } \n${this.state.info.company} \n${this.state.info.telephone} \n${
        this.state.info.email
      } \n${this.state.info.otherInfo}* \nSu mensaje ha sido: \n*${
        this.state.info.action
      } \n${this.state.info.message}*`);
    } else {
      return message;
    }
  }

  sendSlackInfo() {
    const message = this.makeMessage();
    const key = process.env.REACT_APP_SKEY;

    const settings = {
      url: `https://slack.com/api/chat.postMessage?token=${key}&channel=%23your-calls-app&text=${message}&pretty=1`,
      method: 'POST',
      body: {}
    };

    fetch(settings.url, {
      method: settings.method,
      body: JSON.stringify(settings.body),
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  showList() {
    getList().then(results => {
      this.setState({
        results: results
      });
      this.wholeList = results;
    });
  }

  getStartDate(e) {
    const userQuery = e.currentTarget.value;
    this.setState({
      startDate: userQuery
    });
  }

  setFilterStartDate(e) {
    const userQuery = e.currentTarget.value;
    const arrayDate = userQuery.split('-');
    const newDate = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
    this.setState(prevState => {
      return {
        dateValues: {
          ...prevState,
          dateStart: userQuery
        },
        filter: {
          ...prevState.filter,
          dateStart: newDate
        }
      };
    });
  }

  setFilterEndDate(e) {
    const userQuery = e.currentTarget.value;
    const arrayDate = userQuery.split('-');
    const newDate = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
    this.setState(prevState => {
      return {
        dateValues: {
          ...prevState,
          dateStart: userQuery
        },
        filter: {
          ...prevState.filter,
          dateEnd: newDate
        }
      };
    });
  }

  getEndDate(e) {
    const userQuery = e.currentTarget.value;
    this.setState({
      endDate: userQuery
    });
  }

  filterDate() {
    const userStartDate = this.state.startDate;
    const userEndDate = this.state.endDate;
    const results = this.wholeList;

    const momentStartDate = moment(userStartDate, 'YYYY-MM-DD');
    const momentEndDate = moment(userEndDate, 'YYYY-MM-DD');

    const filteredResults = results.filter(item => {
      let date = item.loggedAt;
      let momentDate = moment(date, 'YYYY-MM-DD');
      return momentDate.isBetween(momentStartDate, momentEndDate, null, '[]');
    });

    this.setState({
      results: filteredResults
    });
  }

  getCompaniesData() {
    const ENDPOINT = 'https://adalab.interacso.com/api/call';

    fetch(ENDPOINT, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(data => {
        const companiesArray = data
          .map(item => {
            return item.company;
          })
          .filter((item, ind, array) => array.indexOf(item) === ind);

        this.setState({
          allCompanies: companiesArray
        });
      });
  }

  getCompanySelected(event) {
    const value = event.currentTarget.value;
    this.setState(prevState => {
      return {
        filter: {
          ...prevState.filter,
          companySelected: value
        }
      };
    });
  }

  render() {
    const { tone } = this.state.info;
    const { dateStart, dateEnd } = this.state.dateValues;
    const { companySelected } = this.state.filter;
    const {
      errorPerson,
      errorTone,
      errorIncomingData,
      errorCallAction,
      errorMessage,
      callBackClass,
      callAgainClass,
      redialCheck,
      callBackCheck,
      results,
      pieChartData,
      pieDataLoadingStatus,
      succesMessage,
      personRequested,
      nameRequired,
      companyRequired,
      allCompanies
    } = this.state;
    const {
      preventSubmission,
      getWhoCalls,
      getRequestedEmployee,
      getName,
      getCompany,
      getPosition,
      getOtherInfo,
      getEmail,
      getPhone,
      getCallAction,
      getMessage,
      sendForm,
      deselectOption,
      selectPersonRequested,
      getInputTone,
      showList,
      getStartDate,
      getEndDate,
      filterDate,
      setFilterStartDate,
      setFilterEndDate,
      getCompanySelected
    } = this;

    return (
      <div className="App">
        <Header />
        <main className="main">
          <div className="form__wrapper">
            <Menu />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <NewCall
                    preventSubmission={preventSubmission}
                    getWhoCalls={getWhoCalls}
                    errorPerson={errorPerson}
                    getRequestedEmployee={getRequestedEmployee}
                    errorIncomingData={errorIncomingData}
                    getName={getName}
                    getCompany={getCompany}
                    getPosition={getPosition}
                    getOtherInfo={getOtherInfo}
                    getEmail={getEmail}
                    getPhone={getPhone}
                    errorCallAction={errorCallAction}
                    getCallAction={getCallAction}
                    getMessage={getMessage}
                    errorMessage={errorMessage}
                    sendForm={sendForm}
                    deselectOption={deselectOption}
                    selectPersonRequested={selectPersonRequested}
                    callBackClass={callBackClass}
                    callAgainClass={callAgainClass}
                    redialCheck={redialCheck}
                    callBackCheck={callBackCheck}
                    getInputTone={getInputTone}
                    tone={tone}
                    errorTone={errorTone}
                    nameRequired={nameRequired}
                    companyRequired={companyRequired}
                  />
                )}
              />
            </Switch>
          </div>
          <div className="main__wrapper--callHistory">
            <Switch>
              <Route
                path="/callHistory"
                render={() => (
                  <CallHistory
                    actionShowList={showList}
                    results={results}
                    actionGetStartDate={getStartDate}
                    actionGetEndDate={getEndDate}
                    actionFilterDate={filterDate}
                  />
                )}
              />

              <Route
                path="/dashboard"
                render={() => (
                  <Dashboard
                    actionSetFilterStartDate={setFilterStartDate}
                    actionSetFilterEndDate={setFilterEndDate}
                    actionFilterDate={this.filterDate}
                    startDate={dateStart}
                    endDate={dateEnd}
                    pieData={pieChartData}
                    pieLoading={pieDataLoadingStatus}
                    barData={this.state.chartDataBars}
                    barLoading={this.state.barDataLoadingStatus}
                    allCompanies={allCompanies}
                    getCompanySelected={getCompanySelected}
                    companySelected={companySelected}
                  />
                )}
              />
            </Switch>
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <Modal sucess={succesMessage} personRequested={personRequested} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
