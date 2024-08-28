describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(padIt("a",1),"*a");
      Test.assertSimilar(padIt("a",2),"*a*");
      Test.assertSimilar(padIt("a",3),"**a*");
      Test.assertSimilar(padIt("a",4),"**a**");
      Test.assertSimilar(padIt("a",5),"***a**");
    });
  });

  
function padIt(str,n){
    var count=1;
    
    while(count<n) {
      if (count % 2 == 0) {
        str = '*' + str 
        count++
      } else {
        str = str + '*'
      count++
      }
  }
}