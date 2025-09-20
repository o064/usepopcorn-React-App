# 🍿 usePopcorn – React Movie Explorer

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/o064/usepopcorn-React-App/actions)
[![React](https://img.shields.io/badge/React-18+-61dafb?logo=react)](https://reactjs.org/)

---

## Description

**usePopcorn** is a sleek and interactive React application for searching and discovering movies. It leverages the OMDb API to provide users with up-to-date movie information, allowing you to browse, search, and track your favorite films with ease. Whether you’re a movie buff or just looking for something to watch, usePopcorn makes movie exploration simple and enjoyable.

---
## Live Demo 
- usepopcorn-react-app-orcin.vercel.app
---

## Features

- 🔍 **Movie Search:** Instantly search movies by title using the OMDb API.
- 📑 **Search Results:** View detailed information including poster, plot, year, and IMDb rating.
- ⭐ **Favorites List:** Add and manage your favorite movies.
- 🎬 **Watched List:** Track movies you’ve already seen.
- 🌓 **Responsive UI:** Modern design, fully responsive for mobile and desktop.
- ⚡ **Fast & Lightweight:** Built with React functional components and hooks.
- 🌐 **No Backend Needed:** 100% client-side – just clone and run!

---

## 🔍 Preview  

Here are some preview screenshots of the application:  


<div align="center">
<img src="https://github.com/user-attachments/assets/f8c3fc0e-1696-431d-8783-9c05218f61fb" alt="Analytics Preview" width="100%" />
<img src="https://github.com/user-attachments/assets/4fbd1e1e-59a0-47be-b280-1812d90e1908" alt="Dashboard Preview" width="100%" />
  <img src="https://github.com/user-attachments/assets/cbb8d0c0-ae56-4c73-bb22-083b11f9a511" alt="Mobile Preview 3" width="250" />
  <img src="https://github.com/user-attachments/assets/5a7962cc-1677-4274-a4a3-4d9b60c0ef35" alt="Mobile Preview 2" width="250" />
  <img src="https://github.com/user-attachments/assets/be6b902e-e1eb-42e0-b917-01cfaeb13b65" alt="Mobile Preview 1" width="250" />
</div>

---


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/o064/usepopcorn-React-App.git
   cd usepopcorn-React-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the project root (see [Configuration](#configuration) below).

4. **Start the development server:**
   ```bash
   npm start
   ```
   - The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Search for Movies:**  
  Enter a movie title in the search bar to fetch matching results.

- **View Details:**  
  Click a movie result to see its details, including plot summary and ratings.

- **Add to Favorites/Watched:**  
  Use the provided buttons to add movies to your personal lists.

- **Example:**
  ```jsx
  // Searching for a movie
  <SearchBar placeholder="Search movies..." onSearch={handleSearch} />

  // Displaying movie details
  <MovieDetails movie={selectedMovie} />
  ```

---

## Configuration

The app requires an OMDb API key.  
1. [Get a free OMDb API key](https://www.omdbapi.com/apikey.aspx).
2. Create a `.env` file in the project root:
   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```
3. Restart the development server after editing the `.env` file.

---

## Technologies Used

- [React](https://reactjs.org/) (with Hooks)
- [Create React App](https://create-react-app.dev/)
- [OMDb API](https://www.omdbapi.com/) (for movie data)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Modules](https://github.com/css-modules/css-modules) / [Styled Components](https://styled-components.com/) *(depending on implementation)*
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) (code quality)


---

**Happy movie exploring! 🍿**
