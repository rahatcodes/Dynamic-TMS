Here's an updated `README.md` tailored for your "Dynamic-TMS" project on GitHub:

---

# Dynamic Task Management System (Dynamic-TMS)

![Dynamic-TMS Screenshot](https://github.com/rahatcodes/Dynamic-TMS/blob/main/Dynamic-TMS.png)

**Dynamic-TMS** is a user-friendly web application designed to help you manage and execute tasks based on their priority. It provides an organized approach to task management, ensuring that the most important tasks are handled first.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Add Tasks with Priority**: Easily add tasks by specifying a name and priority level.
- **Priority-Based Sorting**: Tasks are automatically sorted by priority in descending order.
- **Task Execution**: Execute tasks starting from the highest priority, with visual feedback for completed tasks.
- **Persistent Storage**: Your tasks and their statuses are saved using browser local storage, so they persist across sessions.
- **Task Deletion**: Delete tasks without affecting the status of previously completed tasks.

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/rahatcodes/Dynamic-TMS.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Dynamic-TMS
   ```
3. **Open `index.html`** in your web browser to start using Dynamic-TMS.

### Usage
1. **Adding a Task**:
   - Input a task name and priority level.
   - Click the "Add Task" button to add the task to the list.

2. **Executing a Task**:
   - Click the "Done" button to mark the highest priority task as executed.
   - The task will be visually marked as completed.

3. **Deleting a Task**:
   - Click the trash icon next to a task to delete it.
   - The task will be removed from the list, and other tasks will maintain their execution status.

## Project Structure
```
Dynamic-TMS/
│
├── index.html        # The main HTML file
├── style.css         # The CSS file for styling
├── script.js         # The JavaScript file with the main logic
└── README.md         # Project documentation
```

## Technologies Used
- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **JavaScript**: For implementing the task management logic.
- **Local Storage**: For persisting tasks and their states across browser sessions.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/rahatcodes/Dynamic-TMS/blob/main/LICENSE) file for more details.

#Live Site: [Link](https://dynamictms.netlify.app/)
