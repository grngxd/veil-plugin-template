// node_modules/.pnpm/preact@10.25.0/node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c;
var s;
var a;
var h = {};
var v = [];
var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var y = Array.isArray;
function d(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function w(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function g(n2, t2, i3, o2, r2) {
  var f3 = { type: n2, props: t2, key: i3, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
  return null == r2 && null != l.vnode && l.vnode(f3), f3;
}
function b(n2) {
  return n2.children;
}
function k(n2, l2) {
  this.props = n2, this.context = l2;
}
function x(n2, l2) {
  if (null == l2) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l2, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) {
      n2.__e = n2.__c.base = u3.__e;
      break;
    }
    return C(n2);
  }
}
function S(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(M);
}
function M() {
  var n2, u3, t2, o2, r2, e2, c2, s2;
  for (i.sort(f); n2 = i.shift(); ) n2.__d && (u3 = i.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j(c2, o2, s2), o2.__e != e2 && C(o2)), i.length > u3 && i.sort(f));
  M.__r = 0;
}
function P(n2, l2, u3, t2, i3, o2, r2, f3, e2, c2, s2) {
  var a2, p2, y2, d2, w2, _ = t2 && t2.__k || v, g2 = l2.length;
  for (u3.__d = e2, $(u3, l2, _), e2 = u3.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u3.__k[a2]) && (p2 = -1 === y2.__i ? h : _[y2.__i] || h, y2.__i = a2, O(n2, y2, p2, i3, o2, r2, f3, e2, c2, s2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && E(p2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u3.__d = e2, u3.__e = w2;
}
function $(n2, l2, u3) {
  var t2, i3, o2, r2, f3, e2 = l2.length, c2 = u3.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) null != (i3 = l2[t2]) && "boolean" != typeof i3 && "function" != typeof i3 ? (r2 = t2 + a2, (i3 = n2.__k[t2] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(b, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = n2, i3.__b = n2.__b + 1, o2 = null, -1 !== (f3 = i3.__i = L(i3, u3, r2, s2)) && (s2--, (o2 = u3[f3]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f3 && a2--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r2 && (f3 == r2 - 1 ? a2-- : f3 == r2 + 1 ? a2++ : (f3 > r2 ? a2-- : a2++, i3.__u |= 65536))) : i3 = n2.__k[t2] = null;
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u3[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), N(o2, o2));
}
function I(n2, l2, u3) {
  var t2, i3;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i3 = 0; t2 && i3 < t2.length; i3++) t2[i3] && (t2[i3].__ = n2, l2 = I(t2[i3], l2, u3));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u3.contains(l2) && (l2 = x(n2)), u3.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function L(n2, l2, u3, t2) {
  var i3 = n2.key, o2 = n2.type, r2 = u3 - 1, f3 = u3 + 1, e2 = l2[u3];
  if (null === e2 || e2 && i3 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u3;
  if (("function" != typeof o2 || o2 === b || i3) && t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f3 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i3 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f3 < l2.length) {
      if ((e2 = l2[f3]) && 0 == (131072 & e2.__u) && i3 == e2.key && o2 === e2.type) return f3;
      f3++;
    }
  }
  return -1;
}
function T(n2, l2, u3) {
  "-" === l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || p.test(l2) ? u3 : u3 + "px";
}
function A(n2, l2, u3, t2, i3) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || T(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] === t2[l2] || T(n2.style, l2, u3[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = e, n2.addEventListener(l2, o2 ? s : c, o2)) : n2.removeEventListener(l2, o2 ? s : c, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = e++;
      else if (u3.t < t2.u) return;
      return l.event && (u3 = l.event(u3)), "handleEvent" in t2 ? t2.handleEvent(u3) : t2(u3);
    }
  };
}
function O(n2, u3, t2, i3, o2, r2, f3, e2, c2, s2) {
  var a2, h3, v2, p2, w2, _, g2, m, x2, C2, S2, M2, $2, I2, H, L2, T2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
  n: if ("function" == typeof T2) try {
    if (m = u3.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i3[a2.__c], S2 = a2 ? C2 ? C2.props.value : a2.__ : i3, t2.__c ? g2 = (h3 = u3.__c = t2.__c).__ = h3.__E : (x2 ? u3.__c = h3 = new T2(m, S2) : (u3.__c = h3 = new k(m, S2), h3.constructor = T2, h3.render = V), C2 && C2.sub(h3), h3.props = m, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i3, v2 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T2.getDerivedStateFromProps(m, h3.__s))), p2 = h3.props, w2 = h3.state, h3.__v = u3, v2) x2 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m !== p2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m, h3.__s, S2) || u3.__v === t2.__v)) {
        for (u3.__v !== t2.__v && (h3.props = m, h3.state = h3.__s, h3.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
          n3 && (n3.__ = u3);
        }), M2 = 0; M2 < h3._sb.length; M2++) h3.__h.push(h3._sb[M2]);
        h3._sb = [], h3.__h.length && f3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(m, h3.__s, S2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(p2, w2, _);
      });
    }
    if (h3.context = S2, h3.props = m, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x2) {
      for (h3.state = h3.__s, h3.__d = false, $2 && $2(u3), a2 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
      h3._sb = [];
    } else do {
      h3.__d = false, $2 && $2(u3), a2 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++I2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), x2 && !v2 && null != h3.getSnapshotBeforeUpdate && (_ = h3.getSnapshotBeforeUpdate(p2, w2)), P(n2, y(L2 = null != a2 && a2.type === b && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u3, t2, i3, o2, r2, f3, e2, c2, s2), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g2 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u3.__v = null, c2 || null != r2) {
      for (u3.__u |= c2 ? 160 : 128; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u3.__e = e2;
    } else u3.__e = t2.__e, u3.__k = t2.__k;
    l.__e(n3, u3, t2);
  }
  else null == r2 && u3.__v === t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : u3.__e = z(t2.__e, u3, t2, i3, o2, r2, f3, c2, s2);
  (a2 = l.diffed) && a2(u3);
}
function j(n2, u3, t2) {
  u3.__d = void 0;
  for (var i3 = 0; i3 < t2.length; i3++) E(t2[i3], t2[++i3], t2[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function z(u3, t2, i3, o2, r2, f3, e2, c2, s2) {
  var a2, v2, p2, d2, _, g2, m, b2 = i3.props, k2 = t2.props, C2 = t2.type;
  if ("svg" === C2 ? r2 = "http://www.w3.org/2000/svg" : "math" === C2 ? r2 = "http://www.w3.org/1998/Math/MathML" : r2 || (r2 = "http://www.w3.org/1999/xhtml"), null != f3) {
    for (a2 = 0; a2 < f3.length; a2++) if ((_ = f3[a2]) && "setAttribute" in _ == !!C2 && (C2 ? _.localName === C2 : 3 === _.nodeType)) {
      u3 = _, f3[a2] = null;
      break;
    }
  }
  if (null == u3) {
    if (null === C2) return document.createTextNode(k2);
    u3 = document.createElementNS(r2, C2, k2.is && k2), c2 && (l.__m && l.__m(t2, f3), c2 = false), f3 = null;
  }
  if (null === C2) b2 === k2 || c2 && u3.data === k2 || (u3.data = k2);
  else {
    if (f3 = f3 && n.call(u3.childNodes), b2 = i3.props || h, !c2 && null != f3) for (b2 = {}, a2 = 0; a2 < u3.attributes.length; a2++) b2[(_ = u3.attributes[a2]).name] = _.value;
    for (a2 in b2) if (_ = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) p2 = _;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      A(u3, a2, null, _, r2);
    }
    for (a2 in k2) _ = k2[a2], "children" == a2 ? d2 = _ : "dangerouslySetInnerHTML" == a2 ? v2 = _ : "value" == a2 ? g2 = _ : "checked" == a2 ? m = _ : c2 && "function" != typeof _ || b2[a2] === _ || A(u3, a2, _, b2[a2], r2);
    if (v2) c2 || p2 && (v2.__html === p2.__html || v2.__html === u3.innerHTML) || (u3.innerHTML = v2.__html), t2.__k = [];
    else if (p2 && (u3.innerHTML = ""), P(u3, y(d2) ? d2 : [d2], t2, i3, o2, "foreignObject" === C2 ? "http://www.w3.org/1999/xhtml" : r2, f3, e2, f3 ? f3[0] : i3.__k && x(i3, 0), c2, s2), null != f3) for (a2 = f3.length; a2--; ) w(f3[a2]);
    c2 || (a2 = "value", "progress" === C2 && null == g2 ? u3.removeAttribute("value") : void 0 !== g2 && (g2 !== u3[a2] || "progress" === C2 && !g2 || "option" === C2 && g2 !== b2[a2]) && A(u3, a2, g2, b2[a2], r2), a2 = "checked", void 0 !== m && m !== u3[a2] && A(u3, a2, m, b2[a2], r2));
  }
  return u3;
}
function E(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function N(n2, u3, t2) {
  var i3, o2;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || E(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (o2 = 0; o2 < i3.length; o2++) i3[o2] && N(i3[o2], u3, t2 || "function" != typeof n2.type);
  t2 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function V(n2, l2, u3) {
  return this.constructor(n2, u3);
}
n = v.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i3, o2, r2; l2 = l2.__; ) if ((i3 = l2.__c) && !i3.__) try {
    if ((o2 = i3.constructor) && null != o2.getDerivedStateFromError && (i3.setState(o2.getDerivedStateFromError(n2)), r2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t2 || {}), r2 = i3.__d), r2) return i3.__E = i3;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, k.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), S(this));
}, k.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
}, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

// node_modules/.pnpm/preact@10.25.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n2, o2, i3, u3) {
  t2 || (t2 = {});
  var a2, c2, l2 = t2;
  "ref" in t2 && (a2 = t2.ref, delete t2.ref);
  var p2 = { type: e2, props: l2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === l2[c2] && (l2[c2] = a2[c2]);
  return l.vnode && l.vnode(p2), p2;
}

// packages/example/index.tsx
var {
  h: h2,
  Fragment
} = veil.ui.preact;
var {
  log
} = veil.util;
var {
  addCustomElement,
  removeCustomElement
} = veil.settings;
var {
  renderPreactInReact
} = veil.ui.bridge;
var {
  Text,
  Button,
  TextBox,
  Toggle
} = veil.ui.components;
var {
  version
} = veil.veil;
var Page = () => {
  return /* @__PURE__ */ u2("div", { children: [
    /* @__PURE__ */ u2(Text, { children: [
      "Veil says hi! ;3 (v",
      version,
      ")"
    ] }),
    /* @__PURE__ */ u2(Button, { onClick: () => alert("Button clicked!"), children: "Click Me" }),
    /* @__PURE__ */ u2(TextBox, { placeholder: "Enter some text..." }),
    /* @__PURE__ */ u2(Toggle, { label: "Toggle me" })
  ] });
};
var init = () => {
  alert("Example Plugin Initialized");
  log("Example Plugin Initialized");
  addCustomElement({
    element: () => renderPreactInReact(Page),
    section: "veiliscool",
    searchableTitles: ["section"],
    label: "this is a section"
  });
};
var unload = () => {
  alert("Example Plugin Unloaded");
  log("Example Plugin Unloaded");
  removeCustomElement({
    section: "veiliscool"
  });
};
export {
  init,
  unload
};
