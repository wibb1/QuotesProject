(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{39:function(e,t,c){e.exports={comments:"Comments_comments__102-y"}},41:function(e,t,c){e.exports={form:"NewCommentForm_form__3DXJH",loading:"NewCommentForm_loading__OWotz",control:"NewCommentForm_control__JUWHe",actions:"NewCommentForm_actions__jvRgy"}},42:function(e,t,c){e.exports={item:"CommentItem_item__1k2pB"}},43:function(e,t,c){e.exports={comments:"CommentsList_comments__ZO-Ld"}},44:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__FaPig"}},51:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(35),r=c(39),m=c.n(r),j=c(33),i=c(34),d=c(14),u=c(41),l=c.n(u),b=c(1),x=function(e){var t=Object(n.useRef)(),c=Object(j.a)(i.a),s=c.sendRequest,o=c.status,a=c.error,r=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||r()}),[o,a,r]);var m=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:m,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:m,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(42),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(43),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],r=Object(s.j)().quoteId,u=Object(j.a)(i.c),l=u.sendRequest,O=u.status,h=u.data,f=u.error;Object(n.useEffect)((function(){l(r)}),[l,r]);var p,_=Object(n.useCallback)((function(){l(r)}),[l,r]);return"pending"===O&&(p=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===O&&h&&h.length>0&&(p=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(p=Object(b.jsx)("p",{className:"centered",children:"No comments have been added yet!"})),f&&(p=Object(b.jsx)("p",{children:f})),Object(b.jsxs)("section",{className:m.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:r,onAddedComment:_}),p]})},C=c(44),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.j)(),t=Object(s.k)(),c=e.quoteId,a=Object(j.a)(i.e,!0),r=a.sendRequest,m=a.status,u=a.data,l=a.error;return Object(n.useEffect)((function(){r(c)}),[r,c]),"pending"===m?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):l?Object(b.jsx)("p",{className:"centered focused",children:l}):u.text?Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{text:u.text,author:u.author}),Object(b.jsx)(s.c,{exact:!0,path:t.path,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn",to:"".concat(t.url,"/comments"),children:"View Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"no quote found"})}}}]);
//# sourceMappingURL=4.f8e5bdc1.chunk.js.map