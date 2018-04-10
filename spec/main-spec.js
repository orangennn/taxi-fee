const main = require('../main/main.js');

describe('taxi fee', function () {
    // write your tests here...
  it('2公里以内计价', function() {
    var result = main(1, 0);
    expect(result).toEqual(6);
  });
  it('8公里以内计价', function() {
    var result = main(6, 0);
    expect(result).toEqual(9);
  });
  it('8公里以外计价', function() {
    var result = main(10, 0);
    expect(result).toEqual(13);
  });
  it('增加等待时间', function() {
    var result = main(10, 10);
    expect(result).toEqual(16);
  });
});
