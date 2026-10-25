const {test, before, after} = require('node:test');
const assert = require('node:assert/strict');
const server = require('../server');
let base;
before(async()=>{await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));base=`http://127.0.0.1:${server.address().port}`});
after(()=>new Promise(resolve=>server.close(resolve)));
test('serves demo and required assets',async()=>{const response=await fetch(base);assert.equal(response.status,200);const html=await response.text();assert.match(html,/Proof of Coffee/);assert.match(html,/booking-form/);for(const asset of ['/app.js','/style.css']){const r=await fetch(base+asset);assert.equal(r.status,200);assert.ok((await r.text()).length>100)}});
test('missing resources return 404',async()=>{assert.equal((await fetch(base+'/missing')).status,404)});
