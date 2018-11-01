import Joi from 'joi'
import {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
} from '../services'
import { schemaJoi }from './schema'

const sendTheRes = (err, res, moviesFunc, ...restParams) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Missed query parameters'
      })
    } else {
      res.send(moviesFunc(...restParams));
    }
}

const all = (req, res) => {
  res.send(getAllMovies());
}

const search = (req, res) => {
  Joi.validate(req.params, schemaJoi.searchSchema, (err, value) => {
    sendTheRes(err, res, getMoviesByTitle, value.name)
  })
}

const sort = (req, res) => {
  Joi.validate(req.query, schemaJoi.sortSchema, (err, value) => {
    sendTheRes(err, res, getSortedMovies, value.field, value.direction);
  })
}

const page = (req, res) => {
  Joi.validate(req.query, schemaJoi.pageSchema, (err, value) => {
    sendTheRes(err, res, getMoviesPage, value.from, value.to);
  })
}

const id = (req, res) => {
  Joi.validate(req.params, schemaJoi.idSchema, (err, value) => {
    sendTheRes(err, res, getMovieById, value.id)
  })
}

export const index = {
  all,
  search,
  sort,
  page,
  id
}
