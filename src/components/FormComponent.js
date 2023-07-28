import React from "react";

export default class FormComponent extends React.Component {
  render() {
    const { handleFormData, api, flowId, hostUrl, CIField, ChatInputs } = this.props;
      return (
        <form id="myForm">
            <label htmlFor="api">API Key:</label>
            <input
              className="formInput"
              type="text"
              id="api"
              name="api"
              required
              onChange={handleFormData}
              value={api}
            /><br/><br/>
            <label htmlFor="flowId">Flow ID:</label>
            <input
              className="formInput"
              type="text"
              id="flowId"
              name="flowId"
              required
              onChange={handleFormData}
              value={flowId}
            /><br/><br/>
            <label htmlFor="hostUrl">host url:</label>
            <input
              className="formInput"
              type="text"
              id="hostUrl"
              name="hostUrl"
              required
              onChange={handleFormData}
              value={hostUrl}
            /><br/><br/>
            <label htmlFor="CIField">Chat input field:</label>
            <input
              className="formInput"
              type="text"
              id="CIField"
              name="CIField"
              required
              onChange={handleFormData}
              value={CIField}
            /><br/><br/>
            <label htmlFor="ChatInputs">Chat inputs:</label>
            <input
              className="formInput"
              type="text"
              id="ChatInputs"
              name="ChatInputs"
              required
              onChange={handleFormData}
              value={ChatInputs}
            /><br/><br/>
            <button className="formBtn" type="button">Salvar</button>
        </form>
      );
  }
}