export const isDate = d => d instanceof Date;
export const isEmpty = o => Object.keys(o).length === 0;
export const isObject = o => o != null && typeof o === 'object';
