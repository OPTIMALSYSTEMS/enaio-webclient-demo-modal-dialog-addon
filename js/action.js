import * as action from "./main.js";

/**
 * Clears the inner HTML content of a container element by its ID.
 *
 * @param {string} containerId - The ID of the container to be cleared.
 */
function clearContainer(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "";
  }
}

/**
 * Clears the value of multiple input fields using their IDs.
 *
 * @param {...string} inputIds - IDs of the input fields to be cleared.
 */
function clearInputFields(...inputIds) {
  inputIds.forEach((inputId) => {
    const input = document.getElementById(inputId);
    if (input) {
      input.value = "";
    }
  });
}

/**
 * Fetches a field value by its internal name.
 */
async function fetchFieldValueByInternal() {
  const internalFieldName = document.getElementById("internalFieldName").value;
  await action.getFieldValueByInternal(internalFieldName);
}

/**
 * Fetches the environment data.
 */
async function fetchEnvironment() {
  await action.getEnvironment();
}

/**
 * Sets a field value using its internal name.
 */
async function setFieldValueByInternal() {
  const internalFieldName = document.getElementById("internalSetFieldName").value;
  const internalFieldValue = document.getElementById("internalFieldValue").value;
  await action.setFieldValueByInternal(internalFieldName, internalFieldValue);
}

// Event listeners

document
  .getElementById("getFieldValueByInternal")
  .addEventListener("click", fetchFieldValueByInternal);

document
  .getElementById("getEnvironment")
  .addEventListener("click", fetchEnvironment);

document
  .getElementById("setFieldValueByInternal")
  .addEventListener("click", setFieldValueByInternal);

/**
 * Clears content and input values when a clear button is clicked.
 */
function setupClearButtonActions() {
  const clearButtons = document.querySelectorAll(".clear-button");
  clearButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearContainer("fieldValueByInternalContainer");
      clearContainer("setFieldValueByInternalContainer");
      clearContainer("getEnvironmentContainer");
      clearInputFields("internalFieldName", "internalFieldValue", "internalSetFieldName");
    });
  });
}

setupClearButtonActions();
