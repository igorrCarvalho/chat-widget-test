export const inputsData = [
  {
    labelname: "API Key (tweaks):",
    inputclass: "formInput",
    inputName: "api",
  },
  {
    labelname: "Flow ID:",
    inputclass: "formInput",
    inputName: "flowId",
  },
  {
    labelname: "Host url:",
    inputclass: "formInput",
    inputName: "hostUrl",
  },
  {
    labelname: "Chat input field:",
    inputclass: "formInput",
    inputName: "CIField",
  },
  {
    labelname: "Chat inputs:",
    inputclass: "formInput",
    inputName: "ChatInputs",
  },
  {
    labelname: "Bot message style:",
    inputclass: "formInput",
    inputName: "BotMS",
  },
  {
    labelname: "Chat position:",
    inputclass: "formInput",
    inputName: "chatPosition",
  },
  {
    labelname: "Chat trigger style:",
    inputclass: "formInput",
    inputName: "chatTS",
  },
  {
    labelname: "Chat window style:",
    inputclass: "formInput",
    inputName: "chatWS",
  },
  {
    labelname: "Chat output key:",
    inputclass: "formInput",
    inputName: "chatOK",
  },
  {
    labelname: "Error message style:",
    inputclass: "formInput",
    inputName: "errorMS",
  },
  {
    labelname: "Height:",
    inputclass: "formInput",
    inputName: "height",
  },
  {
    labelname: "Input container style:",
    inputclass: "formInput",
    inputName: "inputCS",
  },
  {
    labelname: "Input style:",
    inputclass: "formInput",
    inputName: "inputStyle",
  },
  {
    labelname: "Online:",
    inputclass: "formInput",
    inputName: "online",
  },
  {
    labelname: "Online message:",
    inputclass: "formInput",
    inputName: "onlineMSG",
  },
  {
    labelname: "Placeholder:",
    inputclass: "formInput",
    inputName: "plcholder",
  },
  {
    labelname: "Placeholder sending:",
    inputclass: "formInput",
    inputName: "plcholderSND",
  },
  {
    labelname: "Send button style:",
    inputclass: "formInput",
    inputName: "sendBS",
  },
  {
    labelname: "Send icon style:",
    inputclass: "formInput",
    inputName: "sendIS",
  },
  {
    labelname: "User message style:",
    inputclass: "formInput",
    inputName: "userMS",
  },
  {
    labelname: "Width:",
    inputclass: "formInput",
    inputName: "width",
  },
  {
    labelname: "Window title:",
    inputclass: "formInput",
    inputName: "windowTitle",
  },
];

const h = (window.innerHeight * 65) / 100;
const w = (window.innerWidth * 35) / 100;

export const INITIAL_STATE = {
    api: '{}',
    flowId: '',
    hostUrl: 'https://logspace-langflow.hf.space',
    CIField: 'input',
    ChatInputs: '{"input":""}',
    BotMS: '{}',
    chatPosition: 'top-left',
    chatTS: '{}',
    chatWS: '{}',
    chatOK: '',
    errorMS: '{}',
    height: h,
    inputCS: '{}',
    inputStyle: '{}',
    online: true,
    onlineMSG: "We'll reply as soon as we can",
    plcholder: '',
    plcholderSND: '',
    sendBS: '{}',
    sendIS: '{}',
    userMS: '{}',
    width: w,
    windowTitle: '',
  };
