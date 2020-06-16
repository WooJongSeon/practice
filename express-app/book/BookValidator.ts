import { param } from 'express-validator';

export const validateId = [
  param('id').isInt().toInt()
]
