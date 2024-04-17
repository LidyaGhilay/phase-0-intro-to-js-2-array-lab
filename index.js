// Write your solution here!
const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(names) {
    cats.push(names);
  }

  function destructivelyPrependCat(names) {
    cats.unshift(names);
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(names) {
    const newCats = cats.slice();
    newCats.push(names);
    return newCats;
  }

  function prependCat(names) {
    const newCats = cats.slice();
    newCats.unshift(names);
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

