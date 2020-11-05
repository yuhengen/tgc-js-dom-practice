const { JSDOM } = require('jsdom');
const jquery = require('jquery');

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

it("Should be able able to change goodbye world to hello world!", async ()=>{

    const options = {
  resources: 'usable',
  runScripts: 'dangerously',
};

    // load the document
   let dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
    document.documentElement.innerHTML = dom.window.document.documentElement.innerHTML;
    require('./script.js');
    jquery('#btn').click();
    expect(document.querySelector('div').innerHTML).toBe('hello world!');
    
})