import { Parameters } from '../index.js'
import {
  isDate,
  isEmptyObject,
  isObject,
  hasOwnProperty,
  makeObjectWithoutPrototype
} from './utils.js'

/**
 * Updated diff
 * @param original Original
 * @param updated Updated
 * @param parameters Parameters
 * @returns Updated
 */
const updatedDiff = (
  original: object,
  updated: object,
  parameters?: Parameters
): object => {
  // equality -> return no diff
  if (original === updated) return {}

  // one is not an object -> return updated
  if (!isObject(original) || !isObject(updated)) return updated

  // one is a date -> compare
  if (isDate(original) || isDate(updated)) {
    if (original.valueOf() == updated.valueOf()) return {}
    return updated
  }

  // Deep
  return Object.keys(updated).reduce((acc, key) => {
    // Excluded keys
    if (parameters?.excludedKeys?.includes(key)) return acc

    // properties
    if (hasOwnProperty(original, key)) {
      const difference = updatedDiff(original[key], updated[key], parameters)

      // If the difference is empty, and the original is an empty object or the updated is not an empty object
      if (
        isEmptyObject(difference) &&
        !isDate(difference) &&
        (isEmptyObject(original[key]) || !isEmptyObject(updated[key]))
      )
        return acc // return no diff

      acc[key] = difference
      return acc
    }

    return acc
  }, makeObjectWithoutPrototype())
}

export default updatedDiff
