import detailedDiff from '../src/detailed'

describe('.detailedDiff', () => {
  describe('base case', () => {
    const detailed = detailedDiff({}, {})
    expect(detailed).toEqual({})
  })
})
