import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface AppProps {
  color?: string;
}

// interface AppState {
//   counter: number;
// }
// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0 };
//   }

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  plus = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  minus = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
        {this.state.counter}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
