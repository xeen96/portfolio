# Portfolio Website

This is a personal portfolio website built with React. It allows you to showcase your projects, contact information, and resume.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/xeen96/portfolio.git
   ```
2. Navigate to the project folder:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Environment Variables

Before running the project, create a `.env` file in the root directory and add the following environment variables:

```sh
REACT_APP_EMAIL=your_email@example.com
REACT_APP_PHONE=+1234567890
REACT_APP_NAME=YourName
REACT_APP_FULLNAME=Your Full Name
REACT_APP_CV=https://your-cv-link.com
```

Replace the placeholders with your actual information.

## Running the Project

To start the development server, run:
```sh
npm start
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create an optimized production build, run:
```sh
npm run build
```

This will generate a `build` folder with the static files ready for deployment.

## Additional Notes for Beginners

- Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- Use a `.gitignore` file to prevent committing your `.env` file.
- You can deploy the project using services like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

For further customization, modify the source files in the `src` directory.

---

Feel free to contribute by submitting issues or pull requests!
