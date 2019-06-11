describe("BinarySearch", function() {

  describe("Поиск элемента в массиве", function() {

    function makeTest(message, x, result) {
      var arr = [2, 1, 5, 6, 8, 10, 90, 12];
      it(message + x  + ' результат: ' + result, function() {
        assert.equal(BinarySearch(x, arr), result);
      });
    }

    makeTest('при поиске чиcла ', 2, 2);
    makeTest('при поиске чиcла ', 12, 12);
    makeTest('при поиске чиcла ', 1, 1);
    makeTest('при поиске чиcла ', 90, 90);
    makeTest('при поиске чиcла ', 10, 10);
    makeTest('при поиске несуществующего чиcла ', 100, -1);
    makeTest('при поиске чиcла в виде строки ', '1', 1);
    makeTest('при поиске чиcла в виде строки ', '2', 2);
    makeTest('при поиске чиcла в виде строки ', '12', 12);
    makeTest('при поиске неккоректного чиcла ', '2px', -1);
  });
});