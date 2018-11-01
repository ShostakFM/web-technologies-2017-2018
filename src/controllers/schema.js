import Joi from 'joi'
import movies from '../movies'

const sortSchema = Joi.object().keys({
  field: Joi.string().default('title'),
  direction: Joi.string().default('up')
})

const searchSchema = Joi.object().keys({
  name: Joi.string().required()
})

const pageSchema = Joi.object().keys({
  from: Joi.number()
    .min(0)
    .max(movies.length - 1)
    .default(0)
    .integer(),
  to: Joi.number()
    .min(1)
    .max(movies.length)
    .default(3)
    .integer()
})

const idSchema = Joi.object().keys({
  id: Joi.number()
    .integer()
    .positive()
})

export const schemaJoi = {
  sortSchema,
  pageSchema,
  idSchema,
  searchSchema
}