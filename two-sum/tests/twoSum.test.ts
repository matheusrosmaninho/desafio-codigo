import {twoSum} from '../src/main'

describe('two sum', () => {
    test('Verify two index to result equal 5', () => {
        expect(twoSum([3, 5, 2, 4, 3], 5)).toBeTruthy()
    })
})