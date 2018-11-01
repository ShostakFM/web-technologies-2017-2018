import movies from '../movies.json'

const getAllMovies = () => {
  return movies.map(item => item.title)
}

const getSortedMovies = (field, type) => {
  return movies
    .slice()
    .sort((a, b) => {
      if (type === 'down') {
        return a[field].toString().localeCompare(
          b[field], 'en-ru', { numeric: true }
        )
      } else if (type === 'up') {
        return b[field].toString().localeCompare(
          a[field], 'en-ru', { numeric: true }
        )
      }
    })
    .map(item => item.title)
}

const getMoviesByTitle = (movie) => {
  return movies
    .filter(item =>
      item.title
        .toLowerCase()
        .includes(movie.toLowerCase())
    );
}

const getMoviesPage = (offset, limit) => {
  return movies
    .slice(+offset, +offset + +limit);
}

const getMovieById = (id) => {
  return  movies
    .filter(item => item.id === +id);
}

export {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
}
