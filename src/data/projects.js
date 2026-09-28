// Projects data.
// - The Projects section shows only entries with `featured: true` (max 3).
// - `image`: screenshot in /public/projects/ (a styled preview is shown if missing).
// - `liveUrl`: the "Live Demo" button appears only when this is a real URL (not "#").
// - Non-featured projects stay here for reference; they're reachable via the
//   "View All Projects on GitHub" button. To swap a featured project, move the
//   `featured: true` flag.

export const projects = [
  {
    id: "movie-app",
    title: "Movie App",
    description:
      "A React app to explore movies and TV shows: browse now-playing titles, search, view details with recommendations and reviews, and keep a personal watchlist. Includes an AI Movie Assistant powered by the Gemini API.",
    tech: ["React.js", "React Router", "TMDB API", "Gemini API"],
    image: "/projects/movie-app.webp",
    liveUrl: "#",
    codeUrl: "https://github.com/HegaziShehata/Movie-App",
    featured: true,
  },
  {
    id: "react-countries",
    title: "React Countries",
    description:
      "A responsive countries website: search for a country, filter by region, and open a details page for each one. State is managed with the React Context API.",
    tech: ["React.js", "Context API", "Vite"],
    image: "/projects/react-countries.webp",
    liveUrl: "#",
    codeUrl: "https://github.com/HegaziShehata/React-Countries",
    featured: true,
  },
  {
    id: "desserts-react",
    title: "Dessert Ordering App",
    description:
      "A responsive dessert ordering app: browse products, add them to a cart, adjust quantities, remove items, see the order total, and confirm the order.",
    tech: ["React.js", "CSS3", "Vite"],
    image: "/projects/desserts-react.webp",
    liveUrl: "#",
    codeUrl: "https://github.com/HegaziShehata/Desserts-React",
    featured: true,
  },
  {
    id: "todo-app",
    title: "Todo App",
    description:
      "A task manager built with React: add, complete, and delete todos, filter by All / Active / Completed, clear completed items, and track the active-item count. Fully responsive on desktop and mobile.",
    tech: ["React.js"],
    image: "/projects/todo-app.webp",
    liveUrl: "#",
    codeUrl: "https://github.com/HegaziShehata/todo-app",
  },
  {
    id: "video-player",
    title: "Modern Video Player",
    description:
      "A custom HTML5 video player with play/pause, stop, mute, loop, fullscreen, adjustable playback speed, and a seek bar with live progress control.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    codeUrl: "https://github.com/HegaziShehata/Custom-Video-Player",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website",
    description: "An earlier personal portfolio site built with HTML5, CSS3, and Bootstrap.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "#", // Add GitHub URL
  },
  {
    id: "login-form",
    title: "Login Form",
    description: "A styled, validated login form built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#", // Add GitHub URL
  },
  {
    id: "calculator",
    title: "Calculator",
    description: "A functional calculator built with plain HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#", // Add GitHub URL
  },
  {
    id: "todo-list-js",
    title: "To Do List",
    description: "A lightweight to-do list app built with plain HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#", // Add GitHub URL
  },
];
