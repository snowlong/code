// React をロード
var React = require('react');
var ReactDom = require('react-dom');
// 外部ファイルへ分割した Message クラスをロード
// var Message = require('./message.jsx');

// Message クラス
var Goii = React.createClass({
  render: function() {
    return (
      こんにちは。
    );
  }
});
var Message = React.createClass({
  render: function() {
    return (
      <p>
        こんにちは。{this.props.name} さん {this.props.age} 歳ですね！
      </p>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return (
      person: {
        name: 'aaa',
        age: 22
      }
    );
  },
  handleChange: function(event) {
    this.setState({
      person: {
        name: event.target.value,
        age: this.state.person.age
      }
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.person.name} onChange={this.handleChange} />
        <Message name={this.state.person.name} age={this.state.person.age} />
      </div>
    );
  }
});

// このアプリケーションのメインとなる App クラス
var App = React.createClass({
  getInitialState: function() {
    return {
      person: {
        name: 'ヤマダ',
        age: 34
      }
    };
  },
  handleChange: function(event) {
    this.setState({
      person: {
        name: event.target.value,
        age: this.state.person.age
      }
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.person.name} onChange={this.handleChange} />
        <Message name={this.state.person.name} age={this.state.person.age} />
      </div>
    );
  }
});

// app クラスを描画
ReactDom.render(
  <App />,
  document.getElementById('container')
);