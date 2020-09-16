(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={title:"App_title__2qvhn",appear:"App_appear__2YtxL",appearActive:"App_appearActive__1hJDS"}},22:function(t,e,n){t.exports={alert:"Alert_alert__3p5sD",enter:"Alert_enter__1-m-A",enterActive:"Alert_enterActive__2xZzt",exit:"Alert_exit__1NGAu",exitActive:"Alert_exitActive__2pvVK"}},35:function(t,e,n){t.exports={enter:"slide_enter__3iebK",enterActive:"slide_enterActive__U746_",exit:"slide_exit__3Ef7f",exitActive:"slide_exitActive__mT_Cz"}},40:function(t,e,n){t.exports=n(67)},67:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),u=n(4),i=n(11),s=n.n(i),l=n(12),m=n(13),p=n(17),f=n(16),d=n(18),h=n.n(d),C=n(14),v="contacts/del",b="contacts/filter",y="contacts/duplicate",E="contacts/addContactRequest",_="contacts/addContactSuccess",g="contacts/addContactError",A="contact/removeContactRequest",O="contact/removeContactSuccess",j="contact/removeContactError",w="contacts/fetchContactsRequest",x="contacts/fetchContactsSuccess",R="contacts/fetchContactsError",S={deleteContact:function(t){return{type:v,payload:{id:t}}},filter:function(t){return{type:b,payload:{filter:t}}},duplicate:function(){return{type:y}},addContactRequest:function(){return{type:E}},addContactSuccess:function(t){return{type:_,payload:Object(C.a)({},t)}},addContactError:function(t){return{type:g,payload:{error:t}}},fetchContactRequest:function(){return{type:w}},fetchContactSuccess:function(t){return{type:x,payload:t}},fetchContactError:function(t){return{type:R,payload:{error:t}}},removeContactError:function(t){return{type:j,payload:{error:t}}},removeContactSuccess:function(t){return{type:O,payload:t}},removeContactRequest:function(){return{type:A}}},F="http://localhost:4242/",N={onAddContact:function(t){return function(e){e(S.addContactRequest()),h.a.post("".concat(F,"contacts"),t).then((function(t){e(S.addContactSuccess(t.data))})).catch((function(t){return e(S.addContactError(t))}))}},fetchContacts:function(){return function(t){t(S.fetchContactRequest()),h.a.get("".concat(F,"contacts")).then((function(e){var n=e.data;t(S.fetchContactSuccess(n))})).catch((function(e){t(S.fetchContactError(e))}))}},onRemoveContacts:function(t){return function(e){e(S.removeContactRequest()),h.a.delete("".concat(F,"contacts/").concat(t)).then((function(){e(S.removeContactSuccess(t))})).catch((function(t){e(S.removeContactError(t))}))}}},k=n(15),L=n(34),q=function(t){return t.contacts.filter},T=function(t){return t.contacts.items},V={getLoading:function(t){return t.contacts.loading},getFilter:q,getAlert:function(t){return t.contacts.alertSwitch},getFilteredContacts:Object(L.a)([T,q],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContacts:T},D=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeAlertFn=function(){t.props.switchAlert(),setTimeout((function(){t.props.switchAlert()}),2500)},t.handleSubmit=function(e){e.preventDefault(),t.duplicateFn()?(t.props.onAlert(),setTimeout((function(){t.props.onAlert()}),1500)):(t.props.onAddContact(Object(C.a)({},t.state)),t.setState({name:"",number:""}))},t.duplicateFn=function(){return t.props.contacts.some((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))},t.handleChange=function(e){t.setState(Object(k.a)({},e.target.name,e.target.value))},t}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"NAME"),c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",onChange:this.handleChange,value:this.state.name}),c.a.createElement("h2",null,"NUMBER"),c.a.createElement("input",{type:"tel",name:"number",onChange:this.handleChange,value:this.state.number}),c.a.createElement("button",{type:"submit"},"Add contact")))}}]),n}(a.Component),J={onAddContact:N.onAddContact,onAlert:S.duplicate},M=Object(u.b)((function(t){return{contacts:V.getContacts(t)}}),J)(D),z=n(9),B=n.n(z),G=function(t){var e=t.id,n=t.name,a=t.number,r=t.onRemove;return c.a.createElement("li",{className:B.a.item},c.a.createElement("span",{className:B.a.span},n," "),c.a.createElement("span",{className:B.a.span},a," "),c.a.createElement("button",{className:B.a.button,type:"button",id:e,onClick:r},"X"))},K=n(69),P=n(68),U=n(35),Z=n.n(U),I={onRemoveContacts:N.onRemoveContacts},W=Object(u.b)((function(t){return{items:V.getContacts(t),contacts:V.getFilteredContacts(t)}}),I)((function(t){var e=t.contacts,n=t.onRemoveContacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(K.a,{component:"ul"},e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement(P.a,{key:e,timeout:250,classNames:Z.a,unmountOnExit:!0},c.a.createElement(G,{key:e,name:a,number:r,onRemove:function(){return n(e)}}))}))))})),X={getFilterValue:S.filter},Y=Object(u.b)((function(t){return{filterValue:V.getFilter(t)}}),X)((function(t){var e=t.getFilterValue,n=t.filterValue;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:function(t){return e(t.target.value)},value:n}))})),H=n(22),Q=n.n(H),$=Object(u.b)((function(t){return{alert:t.alert}}))((function(t){var e=t.alert;return c.a.createElement(P.a,{in:e,classNames:Q.a,timeout:250,unmountOnExit:!0},c.a.createElement("p",{className:Q.a.alert},"The name is alredy exsist"))})),tt=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).filterContacts=function(){return t.props.items.filter((function(e){return e.name.toLowerCase().includes(t.props.filter.toLowerCase())}))},t}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement($,null),c.a.createElement(P.a,{in:!0,timeout:500,classNames:s.a,appear:!0,unmountOnExit:!0},c.a.createElement("p",{className:s.a.title},"Phonebook")),c.a.createElement(M,null),c.a.createElement("h2",null,"Contacts"),this.props.items.length>1&&c.a.createElement(Y,null),c.a.createElement(W,{contacts:this.filterContacts()}))}}]),n}(a.Component),et={onFetchContacts:N.fetchContacts},nt=Object(u.b)((function(t){return{items:t.contacts.items,alert:t.contacts.alert,filter:t.contacts.filter}}),et)(tt),at=n(5),ct=n(38),rt=Object(at.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case _:return[].concat(Object(ct.a)(t),[a]);case x:return a;case O:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case b:return a.filter;default:return t}},alertSwitch:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type;switch(n){case y:return!t;default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type;e.payload;switch(n){case E:case w:case A:return!0;case _:case g:case x:case R:case O:case j:return!1;default:return t}},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case g:case R:case j:return a;case E:case w:case A:return null;default:return t}}}),ot=n(36),ut=n(37),it=Object(at.combineReducers)({contacts:rt}),st=[ut.a],lt=Object(at.createStore)(it,Object(ot.composeWithDevTools)(at.applyMiddleware.apply(void 0,st)));o.a.render(c.a.createElement(u.a,{store:lt},c.a.createElement(nt,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={button:"ContactsList_button__2OmPZ",item:"ContactsList_item__3ksNs",span:"ContactsList_span__3FG9m"}}},[[40,1,2]]]);
//# sourceMappingURL=main.664b6ff8.chunk.js.map