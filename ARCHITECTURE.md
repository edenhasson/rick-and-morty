# Rick and Morty CRUD Application

## Architecture

This application is structured using two main libraries within an NX workspace:

### 1. `characters-data-access`
This library is responsible for managing data access and interactions with external services or APIs. It includes:

- **`characters-api.service`**: Handles all API calls related to characters, such as fetching, updating, or deleting character data.

### 2. `characters-ui`
This library contains the user interface components responsible for rendering and interacting with the character data. It includes:

- **`banner`**: A component that displays a banner, likely for branding or sectioning the UI.
- **`character-card`**: Displays an individual character's information, including their image and details.
- **`character-list`**: Displays a list of characters, typically used to show multiple `character-card` components.
- **`character-form`**: A form for adding or updating character information.
- **`characters-ui`**: The main UI module that groups all UI components and is used to display them in the application.

### Key Features

- **Signals**: Utilized for managing state changes and data flow in the application. Signals help in managing reactive behavior by providing an alternative to traditional Angular data-binding.

- **Change Detection Strategy**: The application uses **OnPush** change detection strategy, which optimizes performance by checking for changes only when specific input properties change or events are triggered, reducing the number of checks Angular performs.
