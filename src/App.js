import './App.css';
import ChatWidget from './components/ChatWidget';
import FormComponent from './components/FormComponent';
import React, { useState } from 'react';
import { INITIAL_STATE } from './utils/data';

const App = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleFormData = ({ target: { value, name } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FormComponent
        handleFormData={handleFormData}
        api={state.api}
        flowId={state.flowId}
        hostUrl={state.hostUrl}
        CIField={state.CIField}
        ChatInputs={state.ChatInputs}
      />
      <ChatWidget
        flowId={state.flowId}
        api={state.api}
        hostUrl={state.hostUrl}
        CIField={state.CIField}
        ChatInputs={state.ChatInputs}
      />
    </>
  );
};

export default App;