(this.webpackJsonpfs2=this.webpackJsonpfs2||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"create",(function(){return m}));var o=a(0),n=a(1),i=a.n(n),c=a(6),l=a.n(c),s=(a(13),a(3)),u=(a(14),a.p+"static/media/cafe-bar.61f33d24.jpg"),h=a(2),d=a.n(h),f=[a.p+"static/media/2.47ced0a1.png",a.p+"static/media/5.1bfcf9db.png",a.p+"static/media/7.8d302228.png"],b=a(7),g={TEXT:d.a.shuffle(["Portland flexitarian banh mi, migas actually affogato craft beer af disrupt normcore seitan bushwick biodiesel polaroid truffaut.","Tote bag gluten-free selvage, heirloom kogi YOLO pitchfork mixtape neutra tumeric tacos pour-over swag gentrify.","Brunch godard pork belly, you probably haven't heard of them plaid aesthetic fashion axe 3 wolf moon sriracha.","Mixtape paleo try-hard portland photo booth tumblr affogato.","Fixie af retro jianbing tumblr cred vice keffiyeh you probably haven't heard of them etsy chia biodiesel.","Humblebrag lyft yr selfies, thundercats prism hoodie.","Pabst kogi disrupt PBR&B.","Shaman slow-carb biodiesel, blog mumblecore bushwick pabst next level raclette tbh tumeric cold-pressed.","Chicharrones waistcoat truffaut slow-carb try-hard, franzen hot chicken raw denim tbh.","Offal occupy celiac listicle.","Tofu crucifix intelligentsia before they sold out shaman typewriter slow-carb lo-fi gastropub.","Neutra irony you probably haven't heard of them schlitz, slow-carb flexitarian deep v waistcoat biodiesel.","Irony squid you probably haven't heard of them intelligentsia coloring book artisan.","Pinterest leggings kinfolk fashion axe lomo live-edge.","Poutine photo booth coloring book, craft beer af man bun literally pitchfork kickstarter.","Activated charcoal meh organic brooklyn coloring book.","Tote bag lumbersexual health goth +1 sriracha occupy vaporware meh cloud bread glossier migas.","Four dollar toast brunch sartorial tote bag, tbh taiyaki fam blog kickstarter iceland marfa raclette venmo williamsburg.","Bicycle rights leggings blog etsy cloud bread kinfolk irony locavore street art lo-fi ethical hella enamel pin.","Fingerstache church-key gochujang put a bird on it keytar kombucha pork belly vice sriracha lo-fi tousled venmo occupy health goth.","Kitsch yuccie retro, narwhal ethical ramps humblebrag blog venmo.","Actually pug four loko PBR&B intelligentsia viral, iceland leggings poke bushwick fanny pack live-edge artisan.","Wayfarers authentic chia tacos palo santo succulents paleo live-edge thundercats art party godard.","Gluten-free snackwave pickled, unicorn prism cray fashion axe cred sustainable swag health goth freegan.","Bespoke portland occupy, swag ennui roof party lumbersexual la croix you probably haven't heard of them lo-fi before they sold out farm-to-table mixtape.","Chicharrones tacos franzen YOLO.","Kinfolk yr XOXO pour-over locavore distillery deep v whatever gastropub enamel pin schlitz.","Tattooed flexitarian unicorn, woke marfa waistcoat quinoa authentic letterpress bitters pour-over try-hard PBR&B neutra."])},m=function(e){return Object(b.a)({image:{url:"test.png"},name:"Finbad Hortipants",thoughts:g.TEXT.map((function(e){return{text:e}}))},e)},p=(a(5),{getFriend:function(){return fetch("https://kbzg23mcr3.execute-api.us-east-1.amazonaws.com/dev/friend",{method:"get"}).then((function(e){return e.json()})).then((function(e){var t=e.thoughts,a=e.friend;return r.create({name:a.name,image:{url:d.a.sample(f)||""},thoughts:t})}))}}),v=(a(17),/({[a-zA-Z\s,0-9\-']*})/),y=Math.pow(16,6),j=function(e){return Object(o.jsx)("div",{className:"colorized",children:e.split(v).map((function(e){if(e.startsWith("{")){var t=e.slice(1,e.length-1),a=function(e){var t=Math.abs(function(e){var t,a=0;for(t=0;t<e.length;t++)a=(a<<5)-a+e.charCodeAt(t),a|=0;return a}(e)),a=(t>1e4?Math.floor(t%1e4):t)/1e4,r=Math.floor(a*y),o="#".concat(r.toString(16).padStart(6,"0"));return console.log({hash:t,normalized:a,slot:r,color:o}),o}(t);return Object(o.jsx)("span",{style:{backgroundColor:a,borderRadius:6,display:"inline",opacity:1,padding:".25rem",color:a<"#999999"?"white":"black",boxShadow:"1px 2px 2px #111111"},children:t},t)}return e}))})},x=function(e){var t=e.text,a=Object(n.useState)(null),r=Object(s.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){var e=setInterval((function(){i&&(i.scrollTop+=1)}),5);return function(){return clearInterval(e)}}),[i]),Object(o.jsx)("div",{className:"chat-container",children:Object(o.jsxs)("div",{ref:function(e){return c(e)},className:"scroll-container",children:[Object(o.jsx)("div",{className:"vert-buffer"}),t.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"text dark-background",children:j(e)}),Object(o.jsx)("div",{style:{height:e.length%10*75+20}})]})})),Object(o.jsx)("div",{className:"vert-buffer"})]})})};var k=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){p.getFriend().then((function(e){return r(e)}))}),[]),a?Object(o.jsxs)("div",{className:"fill-parent",children:[Object(o.jsx)("img",{src:u,className:"fill-parent background",alt:"local"}),Object(o.jsxs)("div",{className:"fill-parent background grid",children:[Object(o.jsxs)("div",{className:"content-bottom",children:[Object(o.jsx)("img",{src:a.image.url,alt:"friend-img",className:"friend"}),Object(o.jsx)("div",{className:"friend-summary",children:Object(o.jsx)("span",{className:"friend-name",children:a.name})})]}),Object(o.jsx)(x,{text:a.thoughts.map((function(e){return e.text}))})]})]}):Object(o.jsx)("div",{children:"Loading . . . "})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,r=t.getFID,o=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),o(e),n(e),i(e)}))};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),O()},5:function(e,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.07e49fe1.chunk.js.map