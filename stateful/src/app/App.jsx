/* eslint-disable no-unused-vars */
import './App.css';

import $ from 'jquery';
import { Component, createRef } from 'react';
import { RandomCountUp, Spinner, Button, TiltCard } from '@/components';
import { getRandom } from '@/utils';
import spinnerPath from '@/assets/spinner.svg';

// stateful component
class App extends Component {
  #buttonRef = createRef(null);

  state = {
    reCountUpKey: 100,
  };

  // render phase
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

        <TiltCard>
          Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는
          방법을 제공합니다.
        </TiltCard>
        <TiltCard>
          일반적인 React의 데이터 플로우에서 props는 부모 컴포넌트가 자식과
          상호작용할 수 있는 유일한 수단입니다.
        </TiltCard>
        <TiltCard>
          수정할 자식은 React 컴포넌트의 인스턴스일 수도 있고, DOM 엘리먼트일
          수도 있습니다. React는 두 경우 모두를 위한 해결책을 제공합니다.
        </TiltCard>

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

  componentDidMount() {
    // $(this.#buttonRef.current).css({
    //   fontSize: 12,
    // });

    this.#buttonRef.current.focus();
  }

  handleReCountUp = () => {
    this.setState(({ reCountUpKey }) => ({
      reCountUpKey: reCountUpKey + getRandom(100),
    }));
  };
}

export default App;
