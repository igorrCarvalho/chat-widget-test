import React from "react";

const ChatWidget = ({
  flowId,
  api,
  ChatInputs,
  hostUrl,
  CIField,
  BotMS,
  chatPosition,
  chatTS,
  chatWS,
  chatOK,
  errorMS,
  height,
  inputCS,
  inputStyle,
  online,
  onlineMSG,
  plcholder,
  plcholderSND,
  sendBS,
  sendIS,
  userMS,
  width,
  windowTitle,
}) => {
  return (
    <div>
      <langflow-chat
        window_title={windowTitle}
        flow_id={flowId}
        chat_inputs={ChatInputs}
        chat_input_field={CIField}
        host_url={hostUrl}
        style={{ position: 'fixed', bottom: '50px', right: '50px' }}
        tweaks={api}
        bot_message_style={BotMS}
        chat_position={chatPosition}
        chat_trigger_style={chatTS}
        chat_window_style={chatWS}
        chat_output_key={chatOK}
        error_message_style={errorMS}
        height={height}
        input_container_style={inputCS}
        input_style={inputStyle}
        Online={online}
        online_message={onlineMSG}
        placeholder={plcholder}
        placeholder_sending={plcholderSND}
        send_button_style={sendBS}
        send_icon_style={sendIS}
        user_message_style={userMS}
        width={width}
      ></langflow-chat>
    </div>
  );
};

export default ChatWidget;