# Candidate Scroller

## Description

The Candidate Scroller is a web application that allows employers to search for and review GitHub profiles of potential candidates. The app retrieves data from the GitHub API, enabling users to browse through candidates, save potential ones, and reject others. Saved candidates are stored locally and can be reviewed on a separate page.

## Features

- Fetches GitHub user data dynamically using the GitHub API.
- Allows users to save candidates to a local list or reject them.
- Displays saved candidates on a separate page.
- Persistent storage of saved candidates using `localStorage`.
- Clean and responsive UI.

## Installation

To run this project locally, follow these steps:

\`\`\`bash
# Clone the repository
git clone https://github.com/AmirJT/canidatescroller.git
cd canidatescroller

# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the root of the project with the following content:
VITE_GITHUB_TOKEN=your_personal_access_token

# Run the application
npm run dev
\`\`\`

## Deployment

This application can be deployed using platforms like Netlify, Vercel, or Render. To deploy:

1. Ensure your `.env` file is **NOT** committed to the repository (already added to `.gitignore`).
2. Add the `VITE_GITHUB_TOKEN` environment variable in your deployment settings.
3. Follow the deployment guide for your chosen platform.

## Usage

1. Open the application.
2. Browse through GitHub candidates.
3. Use the \`+\` button to save candidates or the \`-\` button to reject them.
4. View saved candidates on the "Saved Candidates" page.

## Screenshots

### Candidate Search Page
![Candidate Search](./Assets/13-01-candidate_search_homepage.png)

### Saved Candidates Page
![Saved Candidates](./Assets/13-02-candidate_search_potential_candidates.png)

## Technologies Used

- **React**: Front-end framework.
- **TypeScript**: Type-safe code.
- **Vite**: Development environment.
- **CSS**: Styling.
- **GitHub API**: Data source.



## Author

Created by **Amir Jafari**.
