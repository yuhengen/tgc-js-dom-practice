const { JSDOM } = require("jsdom");

it("should be able to select the header", async () => {
  const options = {
    resources: "usable",
    runScripts: "dangerously"
  };

  // load the document
  let dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
  document.documentElement.innerHTML =
    dom.window.document.documentElement.innerHTML;

  let { header, important, todo } = require("./script.js");
  expect(document.querySelector("h1")).toBe(header);
  expect(document.querySelector("span#important")).toBe(important);
  expect(document.querySelector("li.todo")).toBe(todo);

});
