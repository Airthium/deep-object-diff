import detailedDiff from '../src/detailed'

describe('.detailedDiff', () => {
  test('base case', () => {
    const detailed = detailedDiff({}, {})
    expect(detailed).toEqual({ added: {}, deleted: {}, updated: {} })
  })
})
