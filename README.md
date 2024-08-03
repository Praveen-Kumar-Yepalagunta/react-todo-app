# Todo List Application

## Overview

This is a frontend Todo List application built with React. It allows users to add, edit, mark as done, and search tasks. The application uses a dummy JSON file as a data repository.

## Features

- **Create Task**: Add new tasks.
- **Update Task**: Edit existing tasks.
- **Mark as Done**: Mark tasks as completed.
- **Search Tasks**: Filter tasks based on the search input.
- **Expandable List**: Display tasks in an expandable list format with a description and a timestamp.

## Setup

1. Clone the repository:
    
    git clone https://github.com/your-username/your-repository.git
    

2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## System Design

The application is designed with the following components:

1. **App**: The main component that sets up the routes and fetches initial data from a dummy JSON file.
2. **TaskList**: Manages the list of tasks, search functionality, and includes the `TaskForm` component for adding or editing tasks.
3. **TaskForm**: Handles the form for adding or editing tasks, including managing form state and submitting the task data.
4. **Task**: Represents an individual task and handles toggling details, editing, and marking tasks as completed.

## Implementation

- **React**: Used for building the frontend components.
- **CSS**: Used for styling the components.

## Folder Structure

