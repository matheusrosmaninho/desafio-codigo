import {twoSum} from '../src/main'

describe('two sum', () => {
    test('Verify two index to result equal 5', () => {
        expect(twoSum([6, 5, 2, 4, 3], 5)).toBeTruthy()
    })

    test('Verify two index to result is wrong', () => {
        expect(twoSum([6, 5, 2, 4, 3], 500)).toBeFalsy()
    })
})