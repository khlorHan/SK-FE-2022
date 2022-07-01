/* eslint-disable no-unused-vars */

import './App.css';
import { Component, createRef } from 'react';
import { RandomCountUp, Spinner, Button, TiltCard } from '@/components';
import { getRandom } from '@/utils';
import spinnerPath from '@/assets/spinner.svg';

class App extends Component {
  #buttonRef = createRef(null);

  state = {
    reCountUpKey: 100,
  };

  render() {
    return (
      <div className="app">
        <Button
          lang="en"
          ref={this.#buttonRef}
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 120,
          }}
        >
          <TiltCard textFlip>
            <p style={{ fontSize: 36 }}>Text Style Flip Effect</p>
          </TiltCard>
          <TiltCard showLinkPath>
            <p>
              일반적인 <a href="https://reactjs.org">React</a>의 데이터
              플로우에서 props는 부모 컴포넌트가 자식과 상호작용할 수 있는
              유일한 수단입니다.
            </p>
          </TiltCard>
          <TiltCard tiltOff>
            <p>
              수정할 자식은 React 컴포넌트의 인스턴스일 수도 있고, DOM
              엘리먼트일 수도 있습니다. React는 두 경우 모두를 위한 해결책을
              제공합니다.
            </p>
          </TiltCard>
        </div>

        <RandomCountUp
          key={this.state.reCountUpKey}
          min={32}
          max={88}
          step={2}
        />
      </div>
    );
  }

  handleReCountUp = () => {
    this.setState(({ reCountUpKey }) => ({
      reCountUpKey: reCountUpKey + getRandom(100),
    }));
  };
}

export default App;
