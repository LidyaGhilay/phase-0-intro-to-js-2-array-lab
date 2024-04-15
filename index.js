// Write your solution here!
const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat() {
    cats.push();
  }

  function destructivelyPrependCat() {
    cats.unshift();
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat() {
    const newCats = cats.slice();
    newCats.push();
    return newCats;
  }

  function prependCat() {
    const newCats = cats.slice();
    newCats.unshift();
    return newCats;
  }

  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }

  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }

