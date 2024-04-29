function* getMultiPleValues() {
  yield 10;
  yield 20;
}

const result = getMultiPleValues();

console.log(result.next());
console.log(result.next());
console.log(result.next());
