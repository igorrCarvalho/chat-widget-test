import './App.css';
import ChatWidget from './components/ChatWidget';
import FormComponent from './components/FormComponent';
import React, { useEffect, useState } from 'react';
import { INITIAL_STATE } from './utils/data';

const App = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [CWState, setCWState] = useState(INITIAL_STATE);
  const [showPopUp, setPopUp] = useState(false);

  const handleFormData = ({ target: { value, name } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveData = () => {
    setCWState(prev => ({
      ...state
    }))
  };

  const handlePopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 2000);
  };

  const closePopUp = () => {
    setPopUp(false)
  };

  return (
    <>
      <FormComponent
        handlePopup={handlePopUp}
        handleFormData={handleFormData}
        handleSaveData={handleSaveData}
        api={state.api}
        flowId={state.flowId}
        hostUrl={state.hostUrl}
        CIField={state.CIField}
        ChatInputs={state.ChatInputs}
        BotMS={state.BotMS}
        chatPosition={state.chatPosition}
        chatTS={state.chatTS}
        chatWS={state.chatWS}
        chatOK={state.chatOK}
        errorMS={state.errorMS}
        height={state.height}
        inputCS={state.inputCS}
        inputStyle={state.inputStyle}
        online={state.online}
        onlineMSG={state.onlineMSG}
        plcholder={state.plcholder}
        plcholderSND={state.plcholderSND}
        sendBS={state.sendBS}
        sendIS={state.sendIS}
        userMS={state.userMS}
        width={state.width}
        windowTitle={state.windowTitle}
      />
      <ChatWidget
        flowId={CWState.flowId}
        api={CWState.api}
        hostUrl={CWState.hostUrl}
        CIField={CWState.CIField}
        ChatInputs={CWState.ChatInputs}
        BotMS={CWState.BotMS}
        chatPosition={CWState.chatPosition}
        chatTS={CWState.chatTS}
        chatWS={CWState.chatWS}
        chatOK={CWState.chatOK}
        errorMS={CWState.errorMS}
        height={CWState.height}
        inputCS={CWState.inputCS}
        inputStyle={CWState.inputStyle}
        online={CWState.online}
        onlineMSG={CWState.onlineMSG}
        plcholder={CWState.plcholder}
        plcholderSND={CWState.plcholderSND}
        sendBS={CWState.sendBS}
        sendIS={CWState.sendIS}
        userMS={CWState.userMS}
        width={CWState.width}
        windowTitle={CWState.windowTitle}
      />
      { showPopUp && (
        <div className="popup">
          <span className="close" onClick={closePopUp}>
            &times;
          </span>
          <p>Changes saved successfully!</p>
        </div>
      )}
    </>
  );
};

export default App;