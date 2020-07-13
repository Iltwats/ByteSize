console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const shortenUrl = () => {
        renderRawResponse(xhr.response)
      }
    };

    let structureTwo = function() {
      const shortenUrl = () => {
        renderResponse(xhr.response)
      }
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isNotOk(isMatchOne, 'Did you put delete `renderRawResponse` inside the parenthesis of `xhr.send()`?');
    assert.isOk(isMatchTwo, 'Did you call `renderResponse(xhr.response)` inside `shortenUrl()`?')
  });
});
