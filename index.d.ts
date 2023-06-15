/**
 * Parameters
 */
export interface Parameters {
  excludedKeys?: string[]
}

/**
 * Detailed diff
 */
export interface DetailedDiff {
  added: object
  deleted: object
  updated: object
}

/**
 * Diff
 * @param originalObject Original object
 * @param updatedObject Updated object
 * @param parameters Parameters
 */
export function diff(
  originalObject: object,
  updatedObject: object,
  parameters?: Parameters
): object

/**
 * Added
 * @param originalObject Original object
 * @param updatedObject Updated object
 * @param parameters Parameters
 */
export function addedDiff(
  originalObject: object,
  updatedObject: object,
  parameters?: Parameters
): object

/**
 * Deleted
 * @param originalObject Original object
 * @param updatedObject Updated object
 * @param parameters Parameters
 */
export function deletedDiff(
  originalObject: object,
  updatedObject: object,
  parameters?: Parameters
): object

/**
 * Updated
 * @param originalObject Original object
 * @param updatedObject Updated object
 * @param parameters Parameters
 */
export function updatedDiff(
  originalObject: object,
  updatedObject: object,
  parameters?: Parameters
): object

/**
 * Detailed diff
 * @param originalObject Original object
 * @param updatedObject Updated object
 * @param parameters Parameters
 */
export function detailedDiff(
  originalObject: object,
  updatedObject: object,
  parameters?: Parameters
): DetailedDiff
