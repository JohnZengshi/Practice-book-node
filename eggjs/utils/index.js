'use strict';

function createRandomId() {
  return (
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    '_' +
    new Date().getTime() +
    '_' +
    Math.random()
      .toString()
      .substr(2, 5)
  );
}

module.exports = {
  createRandomId,
};
