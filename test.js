describe("BinarySearch", function() {

  describe("Поиск элемента в массиве", function() {

    var arr = [1, 2, 5, 6, 8, 10, 12, 90];

    function makeTest(message, x, result) {
      it(message + x  + ' индекс равен: ' + result, function() {
        assert.equal(BinarySearch(x, arr), result);
      });
    }

    makeTest('при поиске первого числа в массиве ', arr[0], 0);
    makeTest('при поиске среднего чиcла в массиве ', 6, 3);
    makeTest('при поиске последнего числа в массиве ', arr[arr.length-1], arr.length-1);
    makeTest('при поиске несуществующего чиcла ', 100, -1);
    makeTest('при поиске чиcла в виде строки ', '1', 0);
    makeTest('при поиске чиcла в виде строки ', '2', 1);
    makeTest('при поиске чиcла в виде строки ', '12', 6);
    makeTest('при поиске неккоректного чиcла ', '2px', -1);
  });
});