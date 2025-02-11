# Front-end Developer Requirements for Agile Board Project

## 1. General Requirements

- Develop the client-side of the "Agile Board" application using modern technology stack.
- Ensure a user-friendly and intuitive user interface.
- Implement user authentication and registration via Firebase.
- Support drag-and-drop functionality for task management.
- Use MobX for state management in the application.

## 2. Functional Requirements

### 2.1. Authentication and Registration

- Register new users via Firebase Authentication.
- Authenticate registered users.
- Provide password recovery via Firebase.

### 2.2. Profile Page

- Update user information (name, email, etc.).
- Change password.
- Add/modify avatar with drag-and-drop support.
- Select a template avatar.
- Store avatars in Firebase Storage.

### 2.3. Boards and Tasks

- Create and edit boards.
- Ability to choose board templates or create columns manually.
- Invite registered users to a board.
- Create and edit tasks (title, description, assignee).
- Drag-and-drop tasks between columns.

## 3. Technology Stack

- **React** – core of the client-side application.
- **React Router** – routing within the application.
- **Firebase** – authentication, database (Firestore), and storage.
- **MobX** – state management.
- Drag-and-drop library – select an appropriate library (e.g., react-beautiful-dnd).
- UI library – at the discretion of the developer (e.g., Material-UI, Ant Design, Chakra UI).

## 4. Code and Architecture Requirements

- Component-based approach with separation of logic and presentation.
- Use of hooks and functional components.
- Code should be clean, readable, and well-documented.
- Follow DRY, KISS, SOLID principles.
- Ensure responsive interface (adaptive design).

## 5. Additional Wishes

- Ability to expand functionality in the future (modular code).
- Cross-browser compatibility (modern browsers: Chrome, Firefox, Edge, Safari).
- Optimize Firestore performance to minimize the number of requests.
- Flexible access rights system (e.g., board admin, member, etc.).

## TODO:

- handle errors login/register
- aliases
