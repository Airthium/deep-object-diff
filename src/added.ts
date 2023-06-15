import { Parameters } from '../index.js'
import {
  isEmpty,
  isObject,
  hasOwnProperty,
  makeObjectWithoutPrototype
} from './utils.js'

/**
 * Added diff
 * @param original Original
 * @param updated Updated
 * @param parameters Parameters
 * @returns Added
 */
const addedDiff = (
  original: object,
  updated: object,
  parameters?: Parameters
): object => {
  // equality -> return no diff
  // one is not an object -> return no diff
  if (original === updated || !isObject(original) || !isObject(updated))
    return {}

  // Deep
  return Object.keys(updated).reduce((acc, key) => {
    // Excluded keys
    if (parameters?.excludedKeys?.includes(key)) return acc

    // Properties
    if (hasOwnProperty(original, key)) {
      const difference = addedDiff(original[key], updated[key], parameters)

      if (isObject(difference) && isEmpty(difference)) return acc

      acc[key] = difference
      return acc
    }

    acc[key] = updated[key]
    return acc
  }, makeObjectWithoutPrototype())
}

export default addedDiff
