import { Parameters } from '../index.js'
import {
  isDate,
  isEmptyObject,
  isObject,
  hasOwnProperty,
  makeObjectWithoutPrototype
} from './utils.js'

/**
 * Diff
 * @param original Left hand side
 * @param updated Right hand side
 * @param parameters Parameters
 * @returns Diff
 */
const diff = (
  original: object,
  updated: object,
  parameters?: Parameters
): object => {
  // equality -> return no diff
  if (original === updated) return {}

  // one is not an object -> return updated
  if (!isObject(original) || !isObject(updated)) return updated

  const deletedValues = Object.keys(original).reduce((acc, key) => {
    // Excluded keys
    if (parameters?.excludedKeys?.includes(key)) return acc

    if (!hasOwnProperty(updated, key)) {
      acc[key] = undefined
    }
    return acc
  }, makeObjectWithoutPrototype())

  // one is a date -> compare
  if (isDate(original) || isDate(updated)) {
    if (original.valueOf() == updated.valueOf()) return {}
    return updated
  }

  // Deep
  return Object.keys(updated).reduce((acc, key) => {
    // Excluded keys
    if (parameters?.excludedKeys?.includes(key)) return acc

    // Properties
    if (!hasOwnProperty(original, key)) {
      acc[key] = updated[key] // return added r key
      return acc
    }

    const difference = diff(original[key], updated[key], parameters)

    // If the difference is empty, and the original is an empty object or the updated is not an empty object
    if (
      isEmptyObject(difference) &&
      !isDate(difference) &&
      (isEmptyObject(original[key]) || !isEmptyObject(updated[key]))
    )
      return acc // return no diff

    acc[key] = difference // return updated key
    return acc // return updated key
  }, deletedValues)
}

export default diff
