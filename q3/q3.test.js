const { JSDOM } = require("jsdom");

it("Should be able able to get the div", async () => {
  const options = {
    resources: "usable",
    runScripts: "dangerously"
  };

  // load the document
  let dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
  document.documentElement.innerHTML =
    dom.window.document.documentElement.innerHTML;
  const getDiv = require("./script.js");
  let div = getDiv();
  expect(document.querySelector("div")).toBe(div);
});
