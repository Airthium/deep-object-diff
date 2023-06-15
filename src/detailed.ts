import { Parameters } from '../index.js'

import addedDiff from './added.js'
import deletedDiff from './deleted.js'
import updatedDiff from './updated.js'

/**
 * Detailed diff
 * @param original Original
 * @param updated Updated
 * @param parameters Parameters
 * @returns Detailed
 */
const detailedDiff = (
  original: object,
  updated: object,
  parameters?: Parameters
): object => ({
  added: addedDiff(original, updated, parameters),
  deleted: deletedDiff(original, updated, parameters),
  updated: updatedDiff(original, updated, parameters)
})

export default detailedDiff
