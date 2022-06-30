import React from 'react';

export class ErrorBoundary extends React.Component {
  static defaultProps = {
    fallback: () => {
      return null;
    },
  };

  state = {
    hasError: false,
    errorInfo: null,
  };

  // static getDerivedStateFromError(error) {
  //   return {
  //     hasError: !!error,
  //     errorInfo: error,
  //   };
  // }

  componentDidCatch(error, errorInfo /* Error Stack */) {
    this.setState({
      hasError: !!error,
      errorInfo,
    });
  }

  render() {
    // 조건부 렌더링
    if (this.state.hasError) {
      return this.props.fallback?.(this.state.errorInfo);
      // <div role="alert">
      //   {this.state.error?.message ??
      //     'ErrorBoundary 컴포넌트의 자손 컴포넌트 중 일부에서 오류가 발생했습니다.'}
      // </div>
    }

    return this.props.children;
  }
}
