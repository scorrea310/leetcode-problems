function testMe() {
  console.log(this); //
}

testMe(); // Object [global] {global: [Circular], etc.}
