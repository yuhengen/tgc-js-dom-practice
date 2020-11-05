const { JSDOM } = require('jsdom');

it("Should be able able to change goodbye world to hello world!", async ()=>{
 
 const options =  {
  resources: 'usable',
  runScripts: 'dangerously',
};

    // load the document
    let dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
    document.documentElement.innerHTML = dom.window.document.documentElement.innerHTML;

    require('./script.js');
    expect(document.querySelector('div').innerHTML).toBe('hello world!');
    
})