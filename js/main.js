import * as lib from "./library.js";

// Initial setting up the event listener for "message" type events.
window.addEventListener("message", handlePostMessage, false);

let webClientOrigin;

/**
 * Handles incoming "messages" from the enaio® webclient.
 * @param {Object} event - The object passed from the enaio® webclient window.
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#the_dispatched_event
 */
function handlePostMessage(event) {
  webClientOrigin = event.origin;

  const { type, data } = lib.handleWebclientMessage(event.data);

  switch (type) {
    case "onInit":
    case "onUpdate":
      initDashlet(data);
      console.log(`${type} event data:`, data);
      break;
    case "onValueByInternal":
      console.log(`getValueByInternal method data:`, data);
      break;
  }

  return true;
}

/**
 * Initializes the dashlet with incoming enaio® webclient data.
 * @param {Object} data - enaio® webclient properties for dashlet enrichment.
 */
function initDashlet(data) {
  // Logic for initializing the dashlet goes here
}

/**
 * Fetches the field value by its internal name.
 * @param {string} internalFieldName - The internal name of the index field.
 * @returns {Object} An object containing the field value.
 */
async function getFieldValueByInternal(internalFieldName = "") {
  const payload = ["getFieldValueByInternal", JSON.stringify({ internalName: internalFieldName })];

  try {
    const response = await lib.sendWebclientMessage(payload, webClientOrigin, true);
    updateContainerContent("fieldValueByInternalContainer", response);
    console.log(`getFieldValueByInternal() response:`, response);
  } catch (error) {
    console.error(`Error in getFieldValueByInternal:`, error);
  }
}

/**
 * Sets the field value by its internal name and value.
 * @param {string} internalFieldName - The internal name of the index field.
 * @param {string} internalFieldValue - The internal value of the index field.
 * @returns {Object} An object containing the response.
 */
async function setFieldValueByInternal(internalFieldName = "", internalFieldValue = "") {
  const payload = ["setFieldValueByInternal", JSON.stringify({ internalName: internalFieldName, value: internalFieldValue })];

  try {
    const response = await lib.sendWebclientMessage(payload, webClientOrigin, true);
    updateContainerContent("setFieldValueByInternalContainer", response);
    console.log(`setFieldValueByInternal() response:`, response);
  } catch (error) {
    console.error(`Error in setFieldValueByInternal:`, error);
  }
}

/**
 * Asynchronously retrieves environment data from the enaio® webclient 
 * and updates the content of a designated container with the received data.
 * 
 * @returns {void} No return value; updates a DOM container and logs the response or error.
 */
async function getEnvironment() {
  const payload = ["getEnvironment", ""];
  try {
    const response = await lib.sendWebclientMessage(payload, webClientOrigin, true);
    updateContainerContent("getEnvironmentContainer", response);
    console.log(`getEnvironment() response:`, response);
  } catch (error) {
    console.error(`Error in getEnvironment:`, error);
  }
}


/**
 * Updates the content of a container with formatted JSON data.
 * @param {string} containerId - The ID of the container element.
 * @param {Object} jsonData - The JSON data to display.
 */
function updateContainerContent(containerId, jsonData) {
  const container = document.getElementById(containerId);

  if (container) {
    container.innerHTML = "";
    container.appendChild(getFormattedJSON(jsonData));
  }
}

/**
 * Returns a formatted representation of JSON data.
 * @param {Object} jsonData - The JSON data to format.
 * @returns {HTMLElement} A preformatted element containing the JSON data.
 */
function getFormattedJSON(jsonData) {
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(jsonData, null, 2);
  return pre;
}

export {
  getFieldValueByInternal,
  setFieldValueByInternal,
  getEnvironment
};
