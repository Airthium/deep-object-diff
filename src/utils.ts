/**
 * Is date?
 * @param d Date?
 * @returns True False
 */
export const isDate = (d: any): boolean => d instanceof Date

/**
 * Is empty?
 * @param o Object
 * @returns True False
 */
export const isEmpty = (o: object): boolean => Object.keys(o).length === 0

/**
 * Is object?
 * @param o Object
 * @returns True False
 */
export const isObject = (o: any): boolean => o != null && typeof o === 'object'

/**
 * Has own property?
 * @param o Object
 * @param args Properties
 * @returns True False
 */
export const hasOwnProperty = (o: object, ...args: string[]): boolean =>
  Object.prototype.hasOwnProperty.call(o, ...args)

/**
 * Is empty object?
 * @param o Object
 * @returns True False
 */
export const isEmptyObject = (o: object): boolean => isObject(o) && isEmpty(o)

/**
 * Make object without prototype
 * @returns Object
 */
export const makeObjectWithoutPrototype = (): object => Object.create(null)
