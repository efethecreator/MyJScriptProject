describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(getLength([1,2,3]),3);
      Test.assertSimilar(getFirst([1,2,3]),1);
      Test.assertSimilar(getLast([1,2,3]),3);
      Test.assertSimilar(pushElement([1,2,3]).length,4);
      Test.assertSimilar(popElement([1,2,3]).length,2);
    });
  });
  

function getLength(arr){ //! array uzunluğunu ölçmek için kullandığım komut "length"
    //return length of arr
    return arr.length
  }


  function getFirst(arr){ //! arrayin indexindeki değeri bulmak için kullanılır "arr[?]"
    //return the first element of arr
    return arr[0]
  }


  function getLast(arr){ //! arrayin indexindeki son değeri bulmak için kullandığımız fonksiyon
    //return the last element of arr
    return arr[arr.length-1]
  }


  function pushElement(arr){ //! "arr.push(değişken)" fonksiyonu array içine değer eklemek için kullanırız
    var el=1;
    //push el to arr
    arr.push(el);
    return arr
  }


  function popElement(arr){ //! array içinden değer silmek için "pop" kullanırız 
    //pop an element from arr
    arr.pop();
    return arr
  }