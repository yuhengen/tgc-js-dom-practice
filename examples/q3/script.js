// write your answer here
function getDiv() {
    return document.querySelector('div');
}

try {
   module.exports = exports = getDiv;
} catch (e) {}