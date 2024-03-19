# enaio® Webclient Demo Modal Dialog Addon

## License

Copyright © 2023 OPTIMAL SYSTEMS GmbH

This software is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0). Ensure you comply with the License when using this software. It's distributed without warranties or conditions, either express or implied. Consult the License specifics related to permissions and limitations.

## Documentation

For comprehensive details on developing and integrating custom modal dialogs into enaio® webclient, refer to our official [Modal Dialog API documentation](https://help.optimal-systems.com/enaio_develop/x/XQCxB).

## Introduction

Starting from version 11.10 FINAL, enaio® webclient has introduced the ability to open bespoke and fully designable modal dialogs. These dialogs facilitate the embodiment of diverse business processes and scenarios, allowing a flexible display of additional business logic that interacts seamlessly with the enaio® webclient.

Utilize the formHelper method "openModalDialog" to launch a custom modal dialog. Provide the URL, and optionally its title and size, as parameters.

These modal dialogs function like a webpage inside an iframe, inclusive of the inherent browser navigation. Craft your tailored solutions using HTML5, JavaScript, and CSS. Once created, they can be made available via the enaio® service manager. Ensure any backend services, like DMS service for enaio®, enaio® appconnector, or enaio® documentviewer, are located behind the enaio® gateway to comply with the Same-Origin Policy.

To bridge communication between a modal dialog and the enaio® webclient, we offer the Modal Dialog API. It's enriched with special events and methods that enhance information exchange and interaction.

## Abstraction Library for Dashlet Communication (new)

Abstraction Library is a critical component of this project designed to facilitate seamless communication between the modal dialog and both the enaio® webclient and enaio® richclient. This library, available as an npm package accessible [here](https://www.npmjs.com/package/@enaio-client/communication-library), serves as a foundational bridge, enhancing interaction between the modal dialog and the enaio® platforms.

### Purpose

The Abstraction Library is primarily intended to simplify and streamline the process of communication between the modal dialog  and both the enaio® webclient and enaio® richclient. By adopting this library, the integration of the modal dialog  into both platforms becomes a cohesive and straightforward endeavor, all while maintaining a unified codebase.

## Events

The enaio® webclient operates based on events. Here's a snapshot of the available events:

### onInit

Triggered whenever the modal dialog is made visible. It conveys the current state, allowing the modal dialog to swiftly initialize itself. Dive deeper into the [documentation](https://help.optimal-systems.com/enaio_develop/x/cQCxB) for exhaustive details on this event.

## Methods

Modal dialogs can exercise control over the enaio® webclient and initiate actions. Communication happens via postMessages, abstracted into asynchronous methods. For a broader understanding of methods, explore our [documentation](https://help.optimal-systems.com/enaio_develop/x/ZwCxB).

### Get Environment

The `getEnvironment()` method adeptly gleans an array of pivotal environmental parameters, spanning from user specifics to language settings. This empowers developers with invaluable environmental insights, aligning subsequent interactions harmoniously with that context. Detailed information can be accessed from the official [API documentation](https://help.optimal-systems.com/enaio_develop/x/QYAHBQ).

### Get Field Value By Internal

Retrieve particular field values from the currently active index data screen with the `getFieldValueByInternal()` method. It's an essential tool for project-tailored adjustments and allows effortless data interaction within a modal dialogue. More on this can be found in our [documentation](https://help.optimal-systems.com/enaio_develop/x/dwCxB).

### Set Field Value By Internal

The `setFieldValueByInternal()` method promotes advanced interactions. It aids developers in accessing and modifying specific fields on the active index data screen. This method efficiently writes back updated values from the modal dialog to the standard index data mask, ensuring seamless updates and customized processing. Note its specialized compatibility with DMS Masks. Refer to our [documentation](https://help.optimal-systems.com/enaio_develop/x/IIAHBQ) for an in-depth understanding.

### Installation

1. **Clone the Repository**
    ```sh
    git clone https://github.com/OPTIMALSYSTEMS/enaio-webclient-demo-modal-dialog-addon.git
    ```

2. **Navigate to the Project Directory**
    ```sh
    cd enaio-webclient-demo-modal-dialog-addon
    ```

3. **Install Necessary Packages**
    ```sh
    npm install
    ```
4. **Start The Project**
    ```sh
    npm start
    ```
Voilà! You're primed to launch the project.