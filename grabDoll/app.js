describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
      Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
      Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
      Test.assertSimilar(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);
  
    });
  });
  

function grabDoll(dolls){
    var bag=[];
    for ( i = 0; i < dolls.length; i++) {
      if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
        bag.push(dolls[i])
      } else {
        continue
      }
      if (bag.length == 3) {
        break
      }
    } 
    return bag;
  }