(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={button:"Affairs_button__zvi53",active:"Affairs_active__2SjGn",affair:"Affairs_affair__2Uht_",item:"Affairs_item__30sl5",high:"Affairs_high__3V6MU",middle:"Affairs_middle__2tF9p",low:"Affairs_low__3VgeP"}},,,,function(e,a,t){e.exports={link:"Header_link__1Z7iZ",active:"Header_active__3lE_f",block:"Header_block__31xGw",header:"Header_header__xZp6M"}},function(e,a,t){e.exports={message:"Message_message__I2eKl",avatar:"Message_avatar__2faSa",content:"Message_content__hZKQZ",angle:"Message_angle__bMQFP",text:"Message_text__1wrTG",name:"Message_name__4LFeB",time:"Message_time__LhTwx"}},,function(e,a,t){e.exports={greeting:"Greeting_greeting__1m3uj",error:"Greeting_error__1326s",input:"Greeting_input__WMzC8",errorInput:"Greeting_errorInput__3Zh89",button:"Greeting_button__2hty8",count:"Greeting_count__3zHXA"}},,,function(e,a,t){e.exports={input:"SuperInputText_input__5Nzpq",superInput:"SuperInputText_superInput__3DoaQ",errorInput:"SuperInputText_errorInput__2SCTk",error:"SuperInputText_error__3SXa5"}},,,function(e,a,t){e.exports={default:"SuperButton_default__3tSHL",red:"SuperButton_red__3R5tD",button:"SuperButton_button__3lmtX",blink:"SuperButton_blink__3zTPa"}},,function(e,a,t){e.exports={blue:"HW4_blue__3AuwF",column:"HW4_column__VZyuI",testSpanError:"HW4_testSpanError__3U3uY"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3kUmP",spanClassName:"SuperCheckbox_spanClassName__2Mfah"}},function(e,a,t){},function(e,a,t){e.exports={radio:"SuperRadio_radio__gyX1G",label:"SuperRadio_label__2fRga"}},,,,,,,,function(e,a,t){e.exports={App:"App_App__3SXUL"}},,function(e,a,t){e.exports={item:"HW8_item__XwiE0"}},,,function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),o=(t(39),t(29)),u=t.n(o),i=t(1),s=t(8),m=t.n(s);var d=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:m.a.avatar}),r.a.createElement("div",{className:m.a.angle}),r.a.createElement("div",{className:m.a.content},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.text},e.message),r.a.createElement("div",{className:m.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",E="Some Name",f="some text",_="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(d,{avatar:p,name:E,message:f,time:_}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(2),b=t(3),g=t.n(b);var k=function(e){var a=g.a.item+" "+g.a[e.affair.priority];return r.a.createElement("div",{className:g.a.affair},r.a.createElement("div",{className:g.a.item},e.affair.name),r.a.createElement("div",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:g.a.item+" "+g.a.button},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=g.a.button+" "+("all"===e.filter?g.a.active:""),n=g.a.button+" "+("high"===e.filter?g.a.active:""),l=g.a.button+" "+("middle"===e.filter?g.a.active:""),c=g.a.button+" "+("low"===e.filter?g.a.active:"");return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(N),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(15),y=t(10),S=t.n(y),x=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=S.a.error?S.a.errorInput:S.a.Input;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onBlur:t}),r.a.createElement("span",{className:S.a.error},l)),r.a.createElement("button",{onClick:n,className:S.a.button,disabled:!a},"add"),r.a.createElement("span",{className:S.a.count},c))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(h.a)(i,2),m=s[0],d=s[1],p=function(){t(o),alert("Hello ".concat(o,"!"))},E=a.length;return r.a.createElement(x,{name:o,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(u(a),d("")):(o&&u(""),d("name is require!"))},addUser:p,onEnter:function(e){"Enter"===e.key&&o&&(p(),u(""))},error:m,totalUsers:E})},A=t(30);var I=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:t,addUserCallback:function(e){var a={_id:Object(A.v1)(),name:e};l([].concat(Object(j.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(5),F=t(13),M=t.n(F),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(M.a.error," ").concat(u||""),m="".concat(M.a.input," ").concat(c?M.a.errorInput:M.a.superInput).concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},B=t(18),P=t.n(B),G=t(16),U=t.n(G),W=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(U.a.button).concat(a?U.a.red:U.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},X=t(19),Z=t.n(X),z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var D=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(h.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:P.a.blue}),r.a.createElement(W,null,"default"),r.a.createElement(W,{red:!0,onClick:o},"delete "),r.a.createElement(W,{disabled:!0},"disabled"),r.a.createElement(z,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(z,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(h.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,p=m.onDoubleClick,E=m.className,f=Object(T.a)(m,["children","onDoubleClick","className"]),_="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",E);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:_},f),d||c.value))};function K(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function L(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}K("test",{x:"A",y:1});L("test",{x:"",y:0});var R=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(J,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(W,{onClick:function(){K("editable-span-value",t)}},"save"),r.a.createElement(W,{onClick:function(){l(L("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var q=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(R,null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},V=t(20),Y=t.n(V),$=function(e){var a=e.options,t=e.className,n=e.onChange,l=e.onChangeOption,c=Object(T.a)(e,["options","className","onChange","onChangeOption"]),o=a?a.map((function(e,a){return r.a.createElement("option",{className:Y.a.option,key:"0-"+a,value:e},e)})):[],u=Y.a.select+(t?" "+t:"");return r.a.createElement("select",Object.assign({className:u,onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},ee=t(21),ae=t.n(ee),te=function(e){e.type,e.name,e.className;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(T.a)(e,["type","name","className","options","value","onChange","onChangeOption"]),ae.a.radio,a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},ne=["x","y","z"];var re=function(){var e=Object(n.useState)(ne[1]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement($,{options:ne,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(te,{name:"radio",options:ne,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(e,a){switch(a.type){case"sort":var t=Object(j.a)(e).sort((function(e,a){return e.name>a.name?1:e.name>a.name?-1:0}));return"up"===a.payload?t:t.reverse();case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},ce=t(31),oe=t.n(ce),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(n.useState)(ue),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:oe.a.item},r.a.createElement("span",null,e.name),e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(W,{onClick:function(){return l(le(ue,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(W,{onClick:function(){return l(le(ue,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(W,{onClick:function(){return l(le(ue,{type:"check",payload:18}))}},"check 18")),r.a.createElement("div",null,"sort down"),"check 18",r.a.createElement("hr",null),r.a.createElement("hr",null))};var se=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(ie,null))};var me=function(){return r.a.createElement("div",null)},de="/pre-junior",pe="/junior",Ee="/junior-plus";var fe=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:de})}}),r.a.createElement(i.b,{path:de,render:function(){return r.a.createElement(q,null)}}),r.a.createElement(i.b,{path:pe,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(i.b,{path:Ee,render:function(){return r.a.createElement(me,null)}}),"// add routes",r.a.createElement(i.b,{render:function(){return r.a.createElement(Q,null)}})))},_e=t(9),ve=t(7),he=t.n(ve);var be=function(){return r.a.createElement("div",{className:he.a.header},r.a.createElement(_e.b,{to:de,className:he.a.link,activeClassName:he.a.active},"pre-junior"),r.a.createElement(_e.b,{to:pe,className:he.a.link,activeClassName:he.a.active},"junior"),r.a.createElement(_e.b,{to:Ee,className:he.a.link,activeClassName:he.a.active},"junior+"),r.a.createElement("div",{className:he.a.block}))};var ge=function(){return r.a.createElement("div",null,r.a.createElement(_e.a,null,r.a.createElement(be,null),r.a.createElement(fe,null)))};var ke=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.9b7570b6.chunk.js.map