# Event Browser Application

## Project Overview

Your task is to build a simple event browsing application using Next.js (version 14 and above) and SQLite. The application will allow users to browse events and interact with them through a "like" feature. This is a front-to-back project, encompassing both the frontend interface and the backend server and database.

## Requirements

### Technology Stack

- **Frontend**: Next.js (version 14 and above)
- **Backend**: Next.js API Routes
- **Database**: SQLite

### Features

1. **User Interaction**:
   - Users can browse through a list of events.
   - Each event should have a title, a description, and an image.
   - Users can view detailed information about each event in a separate view.
   - Users can "like" events. Liked events should be trackable per user.
   - Users can login with just a username to start a session. Note: There is no signup process; users are predefined.
   - User sessions should persist between browser refreshes and reopening.

2. **Backend**:
   - Implement the necessary API routes to support fetching events, liking/unliking events, handling user sessions, and persisting user sessions across browser sessions.
   - You may use any ORM of your choice or write raw SQL queries to interact with the SQLite database. Using an ORM might speed up development, but it is not required.

3. **Database**:
   - You will need to design the database schema to store events, users, and the relationships between users and events (e.g., likes).
   - Populate your database with a set of sample events and users for testing.

### Page Structure

- **Main Page**: Lists all events.
- **Event Detail Page**: Shows detailed information about each event.
- **User Likes Page**: Optional, shows a list of events that a user has liked.

### Additional Guidelines

- **Server Components**: If you are familiar with React Server Components, you are encouraged to use them in this project, though this is not mandatory.
- **Design**: The application should be responsive and user-friendly. Design is up to you, but it should be clean and functional.
- **Documentation**: Document your code appropriately, focusing on maintainability and ease of understanding.

## Setup Instructions

1. Clone this repository.
2. Create a new private repository on your GitHub account.
3. Push the code to your private repository.
4. Give access to [your-github-username] to review the code by adding them as a collaborator.

## Evaluation Criteria

- **Functionality**: All specified features should work correctly.
- **Code Quality**: Code should be clean, well-organized, and well-documented.
- **Database Design**: Efficient use of database schema to handle data and relationships.
- **User Experience**: The application should be intuitive to use and visually appealing.

## Submission

Please submit your complete project by providing access to your private GitHub repository. Include all source code files, the database file, and any additional documentation or resources used or created. Ensure your project is easily setup and runnable in a development environment.
