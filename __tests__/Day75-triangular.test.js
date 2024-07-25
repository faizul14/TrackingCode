const { triangular } = require('../Day75-triangular')
test('Unit test for triangular', () => {
    expect(triangular(3)).toBe(6);
    expect(triangular(86822788)).toBe(3769098301457866);
    expect(triangular(-10)).toBe(0);
    expect(triangular(0)).toBe(0);
});
