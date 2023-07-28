import logo from './logo.svg';
import './App.css';
import ChatWidget from './components/ChatWidget';
import FormComponent from './components/FormComponent';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      api: '',
      flowId: '',
      hostUrl: '',
      CIField: '',
      ChatInputs: '',
    };
  }

  handleFormData = ({ target: {value, name} }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <FormComponent
          handleFormData={this.handleFormData}
          api={this.state.api}
          flowId={this.state.flowId}
          hostUrl={this.state.hostUrl}
          CIField={this.state.CIField}
          ChatInputs={this.state.ChatInputs}
        />
        <ChatWidget
          flowId={this.state.flowId}
          api={this.state.api}
          hostUrl={this.state.hostUrl}
          CIField={this.state.CIField}
          ChatInputs={this.state.ChatInputs}
        />
      </>
    );
  }
}

export default App;
