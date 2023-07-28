import React from "react"

export default class ChatWidget extends React.Component {
    render() {
        const { flowId, api, ChatInputs, hostUrl, CIField } = this.props;
        return (
          <div>
            <langflow-chat
                window_title="Time Travel Guide"
                flow_id={flowId}
                chat_inputs='{"input":""}'
                chat_input_field={CIField}
                host_url={hostUrl}
                style={{position: 'absolute', bottom: 50+'px', right: 50+'px'}}
                tweaks={api}
            ></langflow-chat>
          </div>
        );
    }
  }