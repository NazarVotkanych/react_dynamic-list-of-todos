(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(1),o=(c(13),c(14),c(5)),d=c.n(o),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelected,a=void 0===s?function(){}:s;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":c===e}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye":c!==e,"fa-eye-slash":c===e})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.searchQuery,c=e.onQueryChange,a=e.selectedFilter,n=e.onfilterChange;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){var t=e.target.value;n(t)},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){var t=e.target.value;c(t)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Clear",onClick:function(){c(""),n(s.All)}})})]})]})},b=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.onSelect,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1],d=Object(i.useState)(!1),j=Object(l.a)(d,2),u=j[0],m=j[1];return Object(i.useEffect)((function(){var e;m(!0),t&&(e=t.userId,h("/users/".concat(e))).then(o).catch((function(e){console.log(e)})).finally((function(){return m(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},O=c(8),x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),o=Object(l.a)(n,2),d=o[0],x=o[1],f=Object(i.useState)(!1),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(""),g=Object(l.a)(y,2),C=g[0],k=g[1],S=Object(i.useState)(s.All),A=Object(l.a)(S,2),w=A[0],T=A[1];Object(i.useEffect)((function(){N(!0),h("/todos").then(a).catch((function(e){console.log(e)})).finally((function(){return N(!1)}))}),[]);var _=Object(i.useMemo)((function(){return function(e,t,c){var a=Object(O.a)(e);if(t&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),c!==s.All)switch(c){case s.Active:a=a.filter((function(e){return!e.completed}));break;case s.Completed:a=a.filter((function(e){return e.completed}))}return a}(c,C,w)}),[c,C,w]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{searchQuery:C,onQueryChange:k,selectedFilter:w,onfilterChange:T})}),Object(r.jsxs)("div",{className:"block",children:[p&&Object(r.jsx)(b,{}),!p&&c.length>0&&Object(r.jsx)(j,{todos:_,selectedTodo:d,onSelected:x})]})]})})}),d&&Object(r.jsx)(m,{selectedTodo:d,onSelect:x})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e6e78196.chunk.js.map