// Importing all methods from the library module.
// This library module likely contains API functions to interact with enaio® web-client.
import * as lib from "./library/library.js";

// =======================
// MAIN FUNCTIONS
//
// These functions are the primary means to access the enaio® API. 
// They handle fetching, updating, and setting data in the enaio® web-client.
// =======================

/**
 * Asynchronously retrieves environment data from the enaio® web-client.
 * Once retrieved, this function updates a designated container 
 * on the webpage with the received data.
 * 
 * Expected use: 
 * To fetch and display general environment details from enaio® web-client.
 */
async function getEnvironment() {
  try {
    // Fetching environment data from enaio® web-client.
    const response = await lib.getEnvironment();
    // Display the fetched data on the webpage and in the console.
    displayResponse("getEnvironment", response);
  } catch (error) {
    // Handle any errors that occur during the fetch.
    logError("getEnvironment", error);
  }
}

/**
 * Fetches a specific field's value using its internal name.
 * @param {string} internalFieldName - The unique identifier (internal name) of the index field in enaio® web-client.
 * 
 * Expected use:
 * To fetch specific metadata or field values based on their internal names.
 */
async function getFieldValueByInternal(internalFieldName = "") {
  try {
    // Fetching field value from enaio® web-client based on the provided internal name.
    const response = await lib.getFieldValueByInternal({ internalName: internalFieldName });
    // Display the fetched data on the webpage and in the console.
    displayResponse("getFieldValueByInternal", response);
  } catch (error) {
    // Handle any errors that occur during the fetch.
    logError("getFieldValueByInternal", error);
  }
}

/**
 * Sets (or updates) a field's value using its internal name and a specified value.
 * @param {string} internalFieldName - The unique identifier (internal name) of the index field in enaio® web-client.
 * @param {string} internalFieldValue - The new value to be set for the specified field.
 * 
 * Expected use:
 * To update or set specific metadata or field values in enaio® web-client.
 */
async function setFieldValueByInternal(internalFieldName = "", internalFieldValue = "") {
  try {
    // Updating the field value in enaio® web-client based on the provided internal name and value.
    const response = await lib.setFieldValueByInternal({ internalName: internalFieldName, value: internalFieldValue });
    // Display the update status on the webpage and in the console.
    displayResponse("setFieldValueByInternal", response);
  } catch (error) {
    // Handle any errors that occur during the update.
    logError("setFieldValueByInternal", error);
  }
}

/**
 * Sends an event to close the modal dialog with a specific value.
 *
 * @param {string} [value=1] - The value to determine the type of close action.
 *   Defaults to 1 if not provided.
 *
 * @throws {Error} If an error occurs while closing the dialog.
 *
 */
async function closeModalDialog(value = 1) {
  try {
    await lib.closeModalDialog(value);
  } catch (error) {
    logError("closeModalDialog", error);
    throw error;
  }
}

// =======================
// SUPPORT FUNCTIONS
//
// These functions provide supplementary functionality and are not directly related to accessing the enaio® API.
// They help in handling the response, formatting data, and managing errors.
// =======================

/**
 * Logs errors for the associated function in a standardized format.
 * @param {string} functionName - The name of the function where the error occurred.
 * @param {Error} error - The caught error object detailing what went wrong.
 */
function logError(functionName, error) {
  console.error(`Error in ${functionName}:`, error);
}

/**
 * Takes response data, logs it to the console, and displays it in a designated container on the webpage.
 * @param {string} responseName - The name associated with the response, typically the function name.
 * @param {Object} data - The data (usually JSON) to be displayed.
 */
function displayResponse(responseName, data) {
  // Log the response data to the console.
  console.log(`${responseName} response:`, data);

  // Locate the designated container on the webpage to display the data.
  const container = document.getElementById(`${responseName}_response`);
  if (container) {
    // Clear any existing data in the container.
    container.innerHTML = "";
    // Append the formatted JSON data to the container.
    container.appendChild(getFormattedJSON(data));
  }
}

/**
 * Converts raw JSON data into a human-readable format and prepares it for display in an HTML container.
 * @param {Object} jsonData - The raw JSON data to be formatted.
 * @returns {HTMLElement} A preformatted ('pre') HTML element containing the beautified JSON data.
 */
function getFormattedJSON(jsonData) {
  // Create a 'pre' element to display the data in a formatted manner.
  const preElement = document.createElement("pre");
  // Set the content of the 'pre' element to the beautified version of the JSON data.
  preElement.textContent = JSON.stringify(jsonData, null, 2);
  return preElement;
}

// =======================
// EXPORTS
//
// These functions are made available for external use. Including them in an HTML file will provide 
// the ability to interact with the enaio® API directly from the webpage.
// =======================

export {
  getEnvironment,
  getFieldValueByInternal,
  setFieldValueByInternal,
  closeModalDialog
};
