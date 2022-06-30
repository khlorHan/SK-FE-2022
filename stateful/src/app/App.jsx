/* eslint-disable no-unused-vars */
import './App.css';
import { Component } from 'react';
import { RandomCountUp, Spinner, Button } from '@/components';
import { getRandom } from '@/utils';
import spinnerPath from '@/assets/spinner.svg';

// stateful component
class App extends Component {
  state = {
    reCountUpKey: 100,

    loading: true,
    error: null,
    person: null,
  };

  // render phase
  render() {
    const { loading, person, error } = this.state;

    if (loading) {
      return <Spinner image={spinnerPath}>로딩 중입니다...</Spinner>;
    }

    if (error) {
      return <div role="alert">{error.message}</div>;
    }

    return (
      <div className="app">
        <Button
          lang="en"
          onClick={this.handleReCountUp}
          style={{
            position: 'fixed',
            zIndex: 1000,
            top: 20,
            right: 20,
          }}
        >
          Re Count Up
        </Button>

        <figure>
          <img src={person.photo} alt={person.name} />
          <figcaption>
            {person.gender} / {person.email}
          </figcaption>
        </figure>

        {/* {!this.state.person ? (
          <RandomCountUp
            key={this.state.reCountUpKey}
            min={32}
            max={88}
            step={2}
          />
        ) : (
          <figure>
            <img src={this.state.person.photo} alt={this.state.person.name} />
            <figcaption>
              {this.state.person.gender} / {this.state.person.email}
            </figcaption>
          </figure>
        )} */}
      </div>
    );
  }

  handleReCountUp = () => {
    this.setState(({ reCountUpKey }) => ({
      reCountUpKey: reCountUpKey + getRandom(100),
    }));
  };

  // 사이드 이펙트를 사용하는 이유 1
  // 네트워크 통신 (side effects)
  // commit phase
  componentDidMount() {
    const fetchedData = this.fetchData('https://randomuser.me/api');

    fetchedData.then(({ results }) => {
      const [randomPerson] = results;

      const {
        email,
        name: { first, last },
        gender,
        picture: { large: picture },
      } = randomPerson;

      this.setState({
        person: {
          email,
          gender,
          name: `${first} ${last}`,
          photo: picture,
        },
      });
    });
  }

  fetchData(endpoints) {
    // Promise
    return fetch(endpoints)
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }
}

export default App;
