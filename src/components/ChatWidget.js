import React from "react";

const ChatWidget = ({ flowId, api, ChatInputs, hostUrl, CIField }) => {
  return (
    <div>
      <langflow-chat
        window_title="Time Travel Guide"
        flow_id={flowId}
        chat_inputs='{"input":""}'
        chat_input_field={CIField}
        host_url={hostUrl}
        style={{ position: 'absolute', bottom: '50px', right: '50px' }}
        tweaks={api}
      ></langflow-chat>
    </div>
  );
};

export default ChatWidget;