var $e, v, xt, Q, Ye, $t, Re, Nt, ue = {}, je = [], Qt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ne = Array.isArray;
function J(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tt(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function He(e, t, n) {
  var i, r, o, a = {};
  for (o in t)
    o == "key" ? i = t[o] : o == "ref" ? r = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $e.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return we(e, a, i, r, null);
}
function we(e, t, n, i, r) {
  var o = { type: e, props: t, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r ?? ++xt, __i: -1, __u: 0 };
  return r == null && v.vnode != null && v.vnode(o), o;
}
function X(e) {
  return e.children;
}
function q(e, t) {
  this.props = e, this.context = t;
}
function re(e, t) {
  if (t == null)
    return e.__ ? re(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? re(e) : null;
}
function Xt(e, t, n) {
  var i, r = e.__v, o = r.__e, a = e.__P;
  if (a)
    return (i = J({}, r)).__v = r.__v + 1, v.vnode && v.vnode(i), We(a, i, r, e.__n, a.ownerSVGElement !== void 0, 32 & r.__u ? [o] : null, t, o ?? re(r), !!(32 & r.__u), n), i.__v = r.__v, i.__.__k[i.__i] = i, i.__d = void 0, i.__e != o && Lt(i), i;
}
function Lt(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Lt(e);
  }
}
function Oe(e) {
  (!e.__d && (e.__d = !0) && Q.push(e) && !Se.__r++ || Ye !== v.debounceRendering) && ((Ye = v.debounceRendering) || $t)(Se);
}
function Se() {
  var e, t, n, i = [], r = [];
  for (Q.sort(Re); e = Q.shift(); )
    e.__d && (n = Q.length, t = Xt(e, i, r) || t, n === 0 || Q.length > n ? (Ue(i, t, r), r.length = i.length = 0, t = void 0, Q.sort(Re)) : t && v.__c && v.__c(t, je));
  t && Ue(i, t, r), Se.__r = 0;
}
function Pt(e, t, n, i, r, o, a, c, _, d, f) {
  var s, m, l, h, y, b = i && i.__k || je, p = t.length;
  for (n.__d = _, en(n, t, b), _ = n.__d, s = 0; s < p; s++)
    (l = n.__k[s]) != null && typeof l != "boolean" && typeof l != "function" && (m = l.__i === -1 ? ue : b[l.__i] || ue, l.__i = s, We(e, l, m, r, o, a, c, _, d, f), h = l.__e, l.ref && m.ref != l.ref && (m.ref && ze(m.ref, null, l), f.push(l.ref, l.__c || h, l)), y == null && h != null && (y = h), 65536 & l.__u || m.__k === l.__k ? _ = It(l, _, e) : typeof l.type == "function" && l.__d !== void 0 ? _ = l.__d : h && (_ = h.nextSibling), l.__d = void 0, l.__u &= -196609);
  n.__d = _, n.__e = y;
}
function en(e, t, n) {
  var i, r, o, a, c, _ = t.length, d = n.length, f = d, s = 0;
  for (e.__k = [], i = 0; i < _; i++)
    a = i + s, (r = e.__k[i] = (r = t[i]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? we(null, r, null, null, null) : Ne(r) ? we(X, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? we(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, c = tn(r, n, a, f), r.__i = c, o = null, c !== -1 && (f--, (o = n[c]) && (o.__u |= 131072)), o == null || o.__v === null ? (c == -1 && s--, typeof r.type != "function" && (r.__u |= 65536)) : c !== a && (c === a + 1 ? s++ : c > a ? f > _ - a ? s += c - a : s-- : c < a ? c == a - 1 && (s = c - a) : s = 0, c !== i + s && (r.__u |= 65536))) : (o = n[a]) && o.key == null && o.__e && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = re(o)), De(o, o, !1), n[a] = null, f--);
  if (f)
    for (i = 0; i < d; i++)
      (o = n[i]) != null && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = re(o)), De(o, o));
}
function It(e, t, n) {
  var i, r;
  if (typeof e.type == "function") {
    for (i = e.__k, r = 0; i && r < i.length; r++)
      i[r] && (i[r].__ = e, t = It(i[r], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function xe(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ne(e) ? e.some(function(n) {
    xe(n, t);
  }) : t.push(e)), t;
}
function tn(e, t, n, i) {
  var r = e.key, o = e.type, a = n - 1, c = n + 1, _ = t[n];
  if (_ === null || _ && r == _.key && o === _.type && !(131072 & _.__u))
    return n;
  if (i > (_ != null && !(131072 & _.__u) ? 1 : 0))
    for (; a >= 0 || c < t.length; ) {
      if (a >= 0) {
        if ((_ = t[a]) && !(131072 & _.__u) && r == _.key && o === _.type)
          return a;
        a--;
      }
      if (c < t.length) {
        if ((_ = t[c]) && !(131072 & _.__u) && r == _.key && o === _.type)
          return c;
        c++;
      }
    }
  return -1;
}
function Qe(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Qt.test(t) ? n : n + "px";
}
function ve(e, t, n, i, r) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i)
          for (t in i)
            n && t in n || Qe(e.style, t, "");
        if (n)
          for (t in n)
            i && n[t] === i[t] || Qe(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? i ? n.u = i.u : (n.u = Date.now(), e.addEventListener(t, o ? et : Xe, o)) : e.removeEventListener(t, o ? et : Xe, o);
    else {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Xe(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u)
        return;
    } else
      e.t = Date.now();
    return t(v.event ? v.event(e) : e);
  }
}
function et(e) {
  if (this.l)
    return this.l[e.type + !0](v.event ? v.event(e) : e);
}
function We(e, t, n, i, r, o, a, c, _, d) {
  var f, s, m, l, h, y, b, p, g, k, S, L, I, H, j, P = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (_ = !!(32 & n.__u), o = [c = t.__e = n.__e]), (f = v.__b) && f(t);
  e:
    if (typeof P == "function")
      try {
        if (p = t.props, g = (f = P.contextType) && i[f.__c], k = f ? g ? g.props.value : f.__ : i, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in P && P.prototype.render ? t.__c = s = new P(p, k) : (t.__c = s = new q(p, k), s.constructor = P, s.render = rn), g && g.sub(s), s.props = p, s.state || (s.state = {}), s.context = k, s.__n = i, m = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), P.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = J({}, s.__s)), J(s.__s, P.getDerivedStateFromProps(p, s.__s))), l = s.props, h = s.state, s.__v = t, m)
          P.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && p !== l && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, k), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, k) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (s.props = p, s.state = s.__s, s.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(B) {
              B && (B.__ = t);
            }), S = 0; S < s._sb.length; S++)
              s.__h.push(s._sb[S]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, k), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(l, h, y);
          });
        }
        if (s.context = k, s.props = p, s.__P = e, s.__e = !1, L = v.__r, I = 0, "prototype" in P && P.prototype.render) {
          for (s.state = s.__s, s.__d = !1, L && L(t), f = s.render(s.props, s.state, s.context), H = 0; H < s._sb.length; H++)
            s.__h.push(s._sb[H]);
          s._sb = [];
        } else
          do
            s.__d = !1, L && L(t), f = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++I < 25);
        s.state = s.__s, s.getChildContext != null && (i = J(J({}, i), s.getChildContext())), m || s.getSnapshotBeforeUpdate == null || (y = s.getSnapshotBeforeUpdate(l, h)), Pt(e, Ne(j = f != null && f.type === X && f.key == null ? f.props.children : f) ? j : [j], t, n, i, r, o, a, c, _, d), s.base = t.__e, t.__u &= -161, s.__h.length && a.push(s), b && (s.__E = s.__ = null);
      } catch (B) {
        t.__v = null, _ || o != null ? (t.__e = c, t.__u |= _ ? 160 : 32, o[o.indexOf(c)] = null) : (t.__e = n.__e, t.__k = n.__k), v.__e(B, t, n);
      }
    else
      o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = nn(n.__e, t, n, i, r, o, a, _, d);
  (f = v.diffed) && f(t);
}
function Ue(e, t, n) {
  for (var i = 0; i < n.length; i++)
    ze(n[i], n[++i], n[++i]);
  v.__c && v.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(o) {
        o.call(r);
      });
    } catch (o) {
      v.__e(o, r.__v);
    }
  });
}
function nn(e, t, n, i, r, o, a, c, _) {
  var d, f, s, m, l, h, y, b = n.props, p = t.props, g = t.type;
  if (g === "svg" && (r = !0), o != null) {
    for (d = 0; d < o.length; d++)
      if ((l = o[d]) && "setAttribute" in l == !!g && (g ? l.localName === g : l.nodeType === 3)) {
        e = l, o[d] = null;
        break;
      }
  }
  if (e == null) {
    if (g === null)
      return document.createTextNode(p);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), o = null, c = !1;
  }
  if (g === null)
    b === p || c && e.data === p || (e.data = p);
  else {
    if (o = o && $e.call(e.childNodes), b = n.props || ue, !c && o != null)
      for (b = {}, d = 0; d < e.attributes.length; d++)
        b[(l = e.attributes[d]).name] = l.value;
    for (d in b)
      l = b[d], d == "children" || (d == "dangerouslySetInnerHTML" ? s = l : d === "key" || d in p || ve(e, d, null, l, r));
    for (d in p)
      l = p[d], d == "children" ? m = l : d == "dangerouslySetInnerHTML" ? f = l : d == "value" ? h = l : d == "checked" ? y = l : d === "key" || c && typeof l != "function" || b[d] === l || ve(e, d, l, b[d], r);
    if (f)
      c || s && (f.__html === s.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (s && (e.innerHTML = ""), Pt(e, Ne(m) ? m : [m], t, n, i, r && g !== "foreignObject", o, a, o ? o[0] : n.__k && re(n, 0), c, _), o != null)
      for (d = o.length; d--; )
        o[d] != null && Tt(o[d]);
    c || (d = "value", h !== void 0 && (h !== e[d] || g === "progress" && !h || g === "option" && h !== b[d]) && ve(e, d, h, b[d], !1), d = "checked", y !== void 0 && y !== e[d] && ve(e, d, y, b[d], !1));
  }
  return e;
}
function ze(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (i) {
    v.__e(i, n);
  }
}
function De(e, t, n) {
  var i, r;
  if (v.unmount && v.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || ze(i, null, t)), (i = e.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (o) {
        v.__e(o, t);
      }
    i.base = i.__P = null, e.__c = void 0;
  }
  if (i = e.__k)
    for (r = 0; r < i.length; r++)
      i[r] && De(i[r], t, n || typeof e.type != "function");
  n || e.__e == null || Tt(e.__e), e.__ = e.__e = e.__d = void 0;
}
function rn(e, t, n) {
  return this.constructor(e, n);
}
function Fe(e, t, n) {
  var i, r, o, a;
  v.__ && v.__(e, t), r = (i = typeof n == "function") ? null : n && n.__k || t.__k, o = [], a = [], We(t, e = (!i && n || t).__k = He(X, null, [e]), r || ue, ue, t.ownerSVGElement !== void 0, !i && n ? [n] : r ? null : t.firstChild ? $e.call(t.childNodes) : null, o, !i && n ? n : r ? r.__e : t.firstChild, i, a), e.__d = void 0, Ue(o, e, a);
}
function Ke(e, t) {
  var n = { __c: t = "__cC" + Nt++, __: e, Consumer: function(i, r) {
    return i.children(r);
  }, Provider: function(i) {
    var r, o;
    return this.getChildContext || (r = [], (o = {})[t] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && r.some(function(c) {
        c.__e = !0, Oe(c);
      });
    }, this.sub = function(a) {
      r.push(a);
      var c = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        r.splice(r.indexOf(a), 1), c && c.call(a);
      };
    }), i.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
$e = je.slice, v = { __e: function(e, t, n, i) {
  for (var r, o, a; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(e)), a = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, i || {}), a = r.__d), a)
          return r.__E = r;
      } catch (c) {
        e = c;
      }
  throw e;
} }, xt = 0, q.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = J({}, this.state), typeof e == "function" && (e = e(J({}, n), this.props)), e && J(n, e), e != null && this.__v && (t && this._sb.push(t), Oe(this));
}, q.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oe(this));
}, q.prototype.render = X, Q = [], $t = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Re = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Se.__r = 0, Nt = 0;
const Mt = "https://api.d-id.com", on = "wss://notifications.d-id.com", tt = "100", Ve = {
  mixpanelKey: "79f81a83a67430be2bc0fd61042b8faa"
};
var C = /* @__PURE__ */ ((e) => (e[e.New = 0] = "New", e[e.Fail = 1] = "Fail", e[e.Connected = 2] = "Connected", e[e.Connecting = 3] = "Connecting", e[e.Terminating = 4] = "Terminating", e))(C || {}), N = /* @__PURE__ */ ((e) => (e[e.New = 0] = "New", e[e.Loading = 1] = "Loading", e[e.Buffering = 2] = "Buffering", e[e.Start = 3] = "Start", e[e.Fail = 4] = "Fail", e))(N || {});
window.appLogs = {};
const nt = (e) => {
  try {
    if (Object.keys(e ?? {}).length === 0)
      return;
    window.appLogs = {
      ...window.appLogs,
      ...e
    };
  } catch (t) {
    console.warn(t);
  }
}, te = "https://api.d-id.com", an = "wss://notifications.d-id.com";
function sn() {
  let e = window.localStorage.getItem("did_external_key_id");
  return e || (e = Math.random().toString(16).slice(2), window.localStorage.setItem("did_external_key_id", e)), e;
}
function Et(e) {
  if (e.type === "bearer")
    return `Bearer ${e.token}`;
  if (e.type === "basic")
    return `Basic ${btoa(`${e.username}:${e.password}`)}`;
  if (e.type === "key")
    return `Client-Key ${e.clientKey}.${sn()}`;
  throw new Error(`Unknown auth type: ${e}`);
}
function ae(e, t = te) {
  const n = async (i, r) => {
    const o = await fetch(t + (i != null && i.startsWith("/") ? i : `/${i}`), {
      ...r,
      headers: {
        ...r == null ? void 0 : r.headers,
        Authorization: Et(e),
        "Content-Type": "application/json"
      }
    });
    if (!o.ok) {
      let a = await o.text().catch(() => "Failed to fetch");
      throw new Error(a);
    }
    return o.json();
  };
  return {
    get(i, r) {
      return n(i, {
        ...r,
        method: "GET"
      });
    },
    post(i, r, o) {
      return n(i, {
        ...o,
        body: JSON.stringify(r),
        method: "POST"
      });
    },
    delete(i, r, o) {
      return n(i, {
        ...o,
        body: JSON.stringify(r),
        method: "DELETE"
      });
    },
    patch(i, r, o) {
      return n(i, {
        ...o,
        body: JSON.stringify(r),
        method: "PATCH"
      });
    }
  };
}
function At(e, t = te) {
  const n = ae(e, `${t}/agents`);
  return {
    create(i, r) {
      return n.post("/", i, r);
    },
    getAgents(i, r) {
      return n.get(`/${i ? `?tag=${i}` : ""}`, r).then((o) => o ?? []);
    },
    getById(i, r) {
      return n.get(`/${i}`, r);
    },
    delete(i, r) {
      return n.delete(`/${i}`, void 0, r);
    },
    update(i, r, o) {
      return n.patch(`/${i}`, r, o);
    },
    newChat(i, r) {
      return n.post(`/${i}/chat`, void 0, r);
    },
    chat(i, r, o, a) {
      return n.post(`/${i}/chat/${r}`, o, a);
    }
  };
}
function cn(e, t = te) {
  const n = ae(e, `${t}/knowledge`);
  return {
    createKnowledge(i, r) {
      return n.post("/", i, r);
    },
    getKnowledgeBase(i) {
      return n.get("/", i);
    },
    getKnowledge(i, r) {
      return n.get(`/${i}`, r);
    },
    deleteKnowledge(i, r) {
      return n.delete(`/${i}`, void 0, r);
    },
    createDocument(i, r, o) {
      return n.post(`/${i}/documents`, r, o);
    },
    deleteDocument(i, r, o) {
      return n.delete(`/${i}/documents/${r}`, void 0, o);
    },
    getDocuments(i, r) {
      return n.get(`/${i}/documents`, r);
    },
    getDocument(i, r, o) {
      return n.get(`/${i}/documents/${r}`, o);
    },
    getRecords(i, r, o) {
      return n.get(`/${i}/documents/${r}/records`, o);
    },
    query(i, r, o) {
      return n.post(`/${i}/query`, {
        query: r
      }, o);
    }
  };
}
function _n(e, t = te) {
  const n = ae(e, `${t}/chats/ratings`);
  return {
    create(i, r) {
      return n.post("/", i, r);
    },
    getByKnowledge(i, r) {
      return n.get(`/${i}`, r).then((o) => o ?? []);
    },
    update(i, r, o) {
      return n.patch(`/${i}`, r, o);
    },
    delete(i, r) {
      return n.delete(`/${i}`, r);
    }
  };
}
const ln = (e) => new Promise((t) => setTimeout(t, e));
function dn(e) {
  return new Promise((t, n) => {
    const {
      callbacks: i,
      host: r,
      auth: o
    } = e, {
      onMessage: a = null,
      onOpen: c = null,
      onClose: _ = null,
      onError: d = null
    } = i || {}, f = new WebSocket(`${r}?authorization=${Et(o)}`);
    f.onmessage = a, f.onclose = _, f.onerror = (s) => {
      console.error(s), d == null || d(s), n(s);
    }, f.onopen = (s) => {
      c == null || c(s), t(f);
    };
  });
}
async function un(e) {
  const {
    retries: t = 1
  } = e;
  let n = null;
  for (let i = 0; (n == null ? void 0 : n.readyState) !== WebSocket.OPEN; i++)
    try {
      n = await dn(e);
    } catch (r) {
      if (i === t)
        throw r;
      await ln(i * 500);
    }
  return n;
}
async function fn(e, t, n) {
  const i = n ? [n] : [], r = await un({
    auth: e,
    host: t,
    callbacks: {
      onMessage: (o) => {
        const a = JSON.parse(o.data);
        i.forEach((c) => c(a.event, a));
      }
    }
  });
  return {
    socket: r,
    terminate: () => r.close(),
    subscribeToEvents: (o) => i.push(o)
  };
}
var fe = /* @__PURE__ */ ((e) => (e.Start = "START", e.Stop = "STOP", e))(fe || {}), be = /* @__PURE__ */ ((e) => (e.ChatAnswer = "chat/answer", e.ChatPartial = "chat/partial", e.StreamDone = "stream/done", e.StreamStarted = "stream/started", e.StreamFailed = "stream/error", e))(be || {}), D = /* @__PURE__ */ ((e) => (e.Unrated = "Unrated", e.Positive = "Positive", e.Negative = "Negative", e))(D || {}), M = /* @__PURE__ */ ((e) => (e.Functional = "Functional", e.TextOnly = "TextOnly", e.Maintenance = "Maintenance", e))(M || {}), Rt = /* @__PURE__ */ ((e) => (e.Embed = "embed", e.Query = "query", e.Partial = "partial", e.Answer = "answer", e.Complete = "done", e))(Rt || {}), de = /* @__PURE__ */ ((e) => (e.Clip = "clip", e.Talk = "talk", e))(de || {});
function pn(e) {
  return e.presenter.type === de.Clip ? {
    videoType: de.Clip,
    driver_id: e.presenter.driver_id,
    presenter_id: e.presenter.presenter_id
  } : {
    videoType: de.Talk,
    source_url: e.presenter.source_url
  };
}
function it(e, t, n, i) {
  return new Promise(async (r, o) => {
    const a = await kn(pn(e), {
      ...t,
      callbacks: {
        ...t.callbacks,
        onConnectionStateChange: async (c) => {
          var _, d;
          if (c === "connected")
            try {
              i || (i = await n.newChat(e.id)), r({
                chat: i,
                streamingManager: a
              });
            } catch (f) {
              console.error(f), o(new Error("Cannot create new chat"));
            }
          else
            c === "failed" && o(new Error("Cannot create connection"));
          (d = (_ = t.callbacks).onConnectionStateChange) == null || d.call(_, c);
        }
      }
    });
  });
}
function hn(e, t, n) {
  return At(t, n || te).getById(e);
}
async function mn(e, t) {
  var n, i;
  const r = t.baseURL || te, o = t.wsURL || an, a = new AbortController(), c = At(t.auth, r), _ = _n(t.auth, r), d = cn(t.auth, r), f = typeof e == "string" ? await c.getById(e) : e;
  (i = (n = t.callbacks) == null ? void 0 : n.onAgentReady) == null || i.call(n, f);
  const s = await fn(t.auth, o, t.callbacks.onChatEvents);
  let {
    chat: m,
    streamingManager: l
  } = await it(f, t, c);
  return {
    agent: f,
    chatId: m.id,
    async reconnectToChat() {
      const {
        streamingManager: h
      } = await it(f, t, c, m);
      l = h;
    },
    terminate() {
      return a.abort(), s.terminate(), l.terminate();
    },
    chat(h) {
      return c.chat(f.id, m.id, {
        sessionId: l.sessionId,
        streamId: l.streamId,
        messages: h
      }, {
        signal: a.signal
      });
    },
    rate(h, y) {
      return y ? _.update(y, h) : _.create(h);
    },
    deleteRate(h) {
      return _.delete(h);
    },
    speak(h) {
      function y() {
        if (h.type === "text")
          return {
            type: "text",
            provider: h.provider,
            input: h.input,
            ssml: h.ssml || !1
          };
        if (h.type === "audio")
          return {
            type: "audio",
            audio_url: h.audio_url
          };
        throw new Error("Invalid payload");
      }
      return l.speak({
        script: y()
      });
    },
    async getStarterMessages() {
      var h;
      return (h = f.knowledge) != null && h.id ? d.getKnowledge(f.knowledge.id).then((y) => (y == null ? void 0 : y.starter_message) || []) : [];
    }
  };
}
function gn(e, t) {
  const n = ae(e, t);
  return {
    createStream(i) {
      return n.post("/clips/streams", {
        driver_id: i.driver_id,
        presenter_id: i.presenter_id,
        compatibility_mode: i.compatibility_mode
      });
    },
    startConnection(i, r, o) {
      return n.post(`/clips/streams/${i}/sdp`, {
        session_id: o,
        answer: r
      });
    },
    addIceCandidate(i, r, o) {
      return n.post(`/clips/streams/${i}/ice`, {
        session_id: o,
        ...r
      });
    },
    sendStreamRequest(i, r, o) {
      return n.post(`/clips/streams/${i}`, {
        session_id: r,
        ...o
      });
    },
    close(i, r) {
      return n.delete(`/clips/streams/${i}`, {
        session_id: r
      });
    }
  };
}
function vn(e, t) {
  const n = ae(e, t);
  return {
    createStream(i, r) {
      return n.post("/talks/streams", {
        source_url: i.source_url,
        driver_url: i.driver_url,
        face: i.face,
        config: i.config
      }, r);
    },
    startConnection(i, r, o, a) {
      return n.post(`/talks/streams/${i}/sdp`, {
        session_id: o,
        answer: r
      }, a);
    },
    addIceCandidate(i, r, o, a) {
      return n.post(`/talks/streams/${i}/ice`, {
        session_id: o,
        ...r
      }, a);
    },
    sendStreamRequest(i, r, o, a) {
      return n.post(`/talks/streams/${i}`, {
        session_id: r,
        ...o
      }, a);
    },
    close(i, r, o) {
      return n.delete(`/talks/streams/${i}`, {
        session_id: r
      }, o);
    }
  };
}
function yn(e, t) {
  return e.map((n, i) => i === 0 ? t ? {
    index: i,
    timestamp: n.timestamp,
    bytesReceived: n.bytesReceived - t.bytesReceived,
    packetsReceived: n.packetsReceived - t.packetsReceived,
    packetsLost: n.packetsLost - t.packetsLost,
    jitter: n.jitter,
    frameWidth: n.frameWidth,
    frameHeight: n.frameHeight,
    framesPerSecond: n.framesPerSecond
  } : {
    index: i,
    timestamp: n.timestamp,
    bytesReceived: n.bytesReceived,
    packetsReceived: n.packetsReceived,
    packetsLost: n.packetsLost,
    jitter: n.jitter,
    frameWidth: n.frameWidth,
    frameHeight: n.frameHeight,
    framesPerSecond: n.framesPerSecond
  } : {
    index: i,
    timestamp: n.timestamp,
    bytesReceived: n.bytesReceived - e[i - 1].bytesReceived,
    packetsReceived: n.packetsReceived - e[i - 1].packetsReceived,
    packetsLost: n.packetsLost - e[i - 1].packetsLost,
    jitter: n.jitter,
    frameWidth: n.frameWidth,
    frameHeight: n.frameHeight,
    framesPerSecond: n.framesPerSecond
  });
}
let Ht = !1;
const Y = (e, t) => Ht && console.log(e, t), wn = (window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection).bind(window);
function bn(e, t) {
  let n = [], i = 0, r = 0, o;
  return setInterval(() => {
    e.getStats().then((a) => {
      a.forEach((c) => {
        if (c.type === "inbound-rtp" && c.kind === "video") {
          if (r = n.length - 1, c && n[r]) {
            const _ = c.bytesReceived, d = n[r].bytesReceived;
            let f = o;
            o = _ - d > 0;
            let s;
            if (f !== o) {
              if (o)
                i = n.length;
              else {
                const m = n.slice(i), l = i === 0 ? void 0 : n[i - 1];
                s = yn(m, l), s = s.sort((h, y) => y.packetsLost - h.packetsLost).slice(0, 5);
              }
              t == null || t(o ? fe.Start : fe.Stop, s);
            }
          }
          n.push(c);
        }
      });
    });
  }, 500);
}
async function kn(e, {
  debug: t = !1,
  callbacks: n,
  auth: i,
  baseURL: r = te
}) {
  Ht = t;
  const {
    startConnection: o,
    sendStreamRequest: a,
    close: c,
    createStream: _,
    addIceCandidate: d
  } = e.videoType === de.Clip ? gn(i, r) : vn(i, r), {
    id: f,
    offer: s,
    ice_servers: m,
    session_id: l
  } = await _(e), h = new wn({
    iceServers: m
  }), y = h.createDataChannel("JanusDataChannel");
  if (!l)
    throw new Error("Could not create session_id");
  const b = bn(h, n.onVideoStateChange);
  h.onicecandidate = (g) => {
    Y("peerConnection.onicecandidate", g), g.candidate && g.candidate.sdpMid && g.candidate.sdpMLineIndex !== null && d(f, {
      candidate: g.candidate.candidate,
      sdpMid: g.candidate.sdpMid,
      sdpMLineIndex: g.candidate.sdpMLineIndex
    }, l);
  }, h.oniceconnectionstatechange = () => {
    var g;
    Y("peerConnection.oniceconnectionstatechange => " + h.iceConnectionState), (g = n.onConnectionStateChange) == null || g.call(n, h.iceConnectionState);
  }, h.ontrack = (g) => {
    var k;
    Y("peerConnection.ontrack", g), (k = n.onSrcObjectReady) == null || k.call(n, g.streams[0]);
  }, y.onmessage = (g) => {
    var k, S;
    if (y.readyState === "open") {
      const [L, I] = g.data.split(":");
      L === be.StreamStarted ? console.log("StreamStarted", L, I) : L === be.StreamDone ? console.log("StreamDone") : L === be.StreamFailed ? ((k = n.onVideoStateChange) == null || k.call(n, fe.Stop, {
        event: L,
        data: I
      }), clearInterval(b), console.log("StreamFailed")) : (S = n.onMessage) == null || S.call(n, L, decodeURIComponent(I));
    }
  }, await h.setRemoteDescription(s), Y("set remote description OK");
  const p = await h.createAnswer();
  return Y("create answer OK"), await h.setLocalDescription(p), Y("set local description OK"), await o(f, p, l), Y("start connection OK"), {
    /**
     * Method to send request to server to get clip or talk depend on you payload
     * @param payload
     */
    speak(g) {
      return a(f, l, g);
    },
    /**
     * Method to close RTC connection
     */
    async terminate() {
      var g, k;
      f && (h && (h.close(), h.oniceconnectionstatechange = null, h.onnegotiationneeded = null, h.onicecandidate = null, h.ontrack = null), await c(f, l).catch((S) => {
      }), (g = n.onConnectionStateChange) == null || g.call(n, "closed"), (k = n.onVideoStateChange) == null || k.call(n, fe.Stop), clearInterval(b));
    },
    /**
     * Session identifier information, should be returned in the body of all streaming requests
     */
    sessionId: l,
    /**
     * Id of current RTC stream
     */
    streamId: f
  };
}
var ee, x, Ie, rt, pe = 0, Ot = [], ke = [], T = v, ot = T.__b, at = T.__r, st = T.diffed, ct = T.__c, _t = T.unmount, lt = T.__;
function he(e, t) {
  T.__h && T.__h(x, e, pe || t), pe = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: ke }), n.__[e];
}
function w(e) {
  return pe = 1, Cn(Ut, e);
}
function Cn(e, t, n) {
  var i = he(ee++, 2);
  if (i.t = e, !i.__c && (i.__ = [n ? n(t) : Ut(void 0, t), function(c) {
    var _ = i.__N ? i.__N[0] : i.__[0], d = i.t(_, c);
    _ !== d && (i.__N = [d, i.__[1]], i.__c.setState({}));
  }], i.__c = x, !x.u)) {
    var r = function(c, _, d) {
      if (!i.__c.__H)
        return !0;
      var f = i.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (f.every(function(m) {
        return !m.__N;
      }))
        return !o || o.call(this, c, _, d);
      var s = !1;
      return f.forEach(function(m) {
        if (m.__N) {
          var l = m.__[0];
          m.__ = m.__N, m.__N = void 0, l !== m.__[0] && (s = !0);
        }
      }), !(!s && i.__c.props === c) && (!o || o.call(this, c, _, d));
    };
    x.u = !0;
    var o = x.shouldComponentUpdate, a = x.componentWillUpdate;
    x.componentWillUpdate = function(c, _, d) {
      if (this.__e) {
        var f = o;
        o = void 0, r(c, _, d), o = f;
      }
      a && a.call(this, c, _, d);
    }, x.shouldComponentUpdate = r;
  }
  return i.__N || i.__;
}
function E(e, t) {
  var n = he(ee++, 3);
  !T.__s && qe(n.__H, t) && (n.__ = e, n.i = t, x.__H.__h.push(n));
}
function Sn(e, t) {
  var n = he(ee++, 4);
  !T.__s && qe(n.__H, t) && (n.__ = e, n.i = t, x.__h.push(n));
}
function oe(e) {
  return pe = 5, Te(function() {
    return { current: e };
  }, []);
}
function Te(e, t) {
  var n = he(ee++, 7);
  return qe(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function dt(e, t) {
  return pe = 8, Te(function() {
    return e;
  }, t);
}
function z(e) {
  var t = x.context[e.__c], n = he(ee++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function xn() {
  for (var e; e = Ot.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ce), e.__H.__h.forEach(Be), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], T.__e(t, e.__v);
      }
}
T.__b = function(e) {
  x = null, ot && ot(e);
}, T.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), lt && lt(e, t);
}, T.__r = function(e) {
  at && at(e), ee = 0;
  var t = (x = e.__c).__H;
  t && (Ie === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = ke, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ce), t.__h.forEach(Be), t.__h = [], ee = 0)), Ie = x;
}, T.diffed = function(e) {
  st && st(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ot.push(t) !== 1 && rt === T.requestAnimationFrame || ((rt = T.requestAnimationFrame) || $n)(xn)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== ke && (n.__ = n.__V), n.i = void 0, n.__V = ke;
  })), Ie = x = null;
}, T.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ce), n.__h = n.__h.filter(function(i) {
        return !i.__ || Be(i);
      });
    } catch (i) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], T.__e(i, n.__v);
    }
  }), ct && ct(e, t);
}, T.unmount = function(e) {
  _t && _t(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(i) {
    try {
      Ce(i);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && T.__e(t, n.__v));
};
var ut = typeof requestAnimationFrame == "function";
function $n(e) {
  var t, n = function() {
    clearTimeout(i), ut && cancelAnimationFrame(t), setTimeout(e);
  }, i = setTimeout(n, 100);
  ut && (t = requestAnimationFrame(n));
}
function Ce(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function Be(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function qe(e, t) {
  return !e || e.length !== t.length || t.some(function(n, i) {
    return n !== e[i];
  });
}
function Ut(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dt() {
  return Math.random().toString(16).slice(2);
}
function Nn() {
  const e = localStorage.getItem("tracking_id") ?? Dt();
  return localStorage.setItem("tracking_id", e), e;
}
function R(e, t) {
  if (window.localStorage.getItem("track_enabled") === "false")
    return;
  const n = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      data: JSON.stringify([{
        event: e,
        properties: {
          ...t,
          token: Ve.mixpanelKey,
          time: Date.now(),
          distinct_id: Nn(),
          $insert_id: Dt(),
          origin: window.location.href,
          "Screen Height": window.screen.height || window.innerWidth,
          "Screen Width": window.screen.width || window.innerHeight,
          "User Agent": navigator.userAgent
        }
      }])
    })
  };
  return fetch("https://api-js.mixpanel.com/track/?verbose=1&ip=1", n).then((i) => i.json()).catch((i) => console.error(i));
}
var Tn = 0;
function u(e, t, n, i, r, o) {
  var a, c, _ = {};
  for (c in t)
    c == "ref" ? a = t[c] : _[c] = t[c];
  var d = { type: e, props: _, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Tn, __i: -1, __u: 0, __source: r, __self: o };
  if (typeof e == "function" && (a = e.defaultProps))
    for (c in a)
      _[c] === void 0 && (_[c] = a[c]);
  return v.vnode && v.vnode(d), d;
}
const me = Ke({
  didFetch: async () => {
  },
  authenticate: () => {
  },
  auth: {},
  host: "",
  wsHost: "",
  isAuthenticated: !1
});
me.displayName = "DidFetch";
function Ln({
  children: e,
  auth: t,
  didApiUrl: n,
  didSocketApiUrl: i
}) {
  const [r, o] = w(t), a = Te(() => r && ae(r, n), [r]), c = async (_) => {
    o((d) => JSON.stringify(_) === JSON.stringify(d) ? d : _);
  };
  return u(me.Provider, {
    value: {
      didFetch: a,
      auth: r,
      host: n,
      wsHost: i,
      authenticate: c,
      isAuthenticated: !!r
    },
    children: e
  });
}
var Ft = /* @__PURE__ */ ((e) => (e.Start = "START", e.Stop = "STOP", e))(Ft || {});
const se = Ke({
  connectionState: C.New,
  chatMode: M.Functional,
  setChatMode: () => {
  },
  streamState: N.New,
  videoState: "STOP",
  starterMessage: [],
  connect: async () => {
  },
  reconnectToChat: async () => {
  },
  terminate: async () => {
  },
  setStreamState: () => {
  },
  streamedMessage: "",
  error: "",
  agentManager: {
    agent: {},
    reconnectToChat: async () => {
    },
    terminate: async () => {
    },
    chatId: "",
    chat: async () => ({
      result: ""
    }),
    rate: async () => ({}),
    deleteRate: async () => ({}),
    speak: async () => ({}),
    getStarterMessages: async () => []
  }
});
se.displayName = "Streaming Manager";
function Pn(e) {
  switch (e) {
    case "connected":
      return C.Connected;
    case "checking":
      return C.Connecting;
    case "failed":
      return C.Fail;
    case "new":
    case "closed":
    case "disconnected":
    default:
      return C.New;
  }
}
function In({
  children: e,
  agent: t,
  onAgentReady: n,
  enabled: i
}) {
  const [r, o] = w(C.New), [a, c] = w(M.Functional), [_, d] = w(N.New), [f, s] = w(
    "STOP"
    /* Stop */
  ), [m, l] = w(), [h, y] = w(""), [b, p] = w([]), [g, k] = w(), [S, L] = w(), [I, H] = w(""), {
    auth: j,
    host: P,
    wsHost: B
  } = z(me);
  async function ne() {
    if (j && P && B && i)
      try {
        H(""), c(M.Functional), o(C.Connecting);
        const O = await mn(t, {
          auth: j,
          baseURL: P,
          wsURL: B,
          callbacks: {
            onSrcObjectReady: l,
            onAgentReady: (A) => {
              L(A), n == null || n(A);
            },
            onConnectionStateChange(A) {
              const U = Pn(A);
              nt({
                connectionState: C[U]
              }), U === C.Connected && R("agent-chat-loaded"), o(U);
            },
            onVideoStateChange(A, U) {
              const F = A === "START" ? N.Start : N.New;
              s(A), d(F), nt({
                streamState: N[F]
              }), R("agent-video", {
                event: A,
                rtcStats: U ?? [],
                agent_id: S == null ? void 0 : S.id
              });
            },
            onChatEvents(A, U) {
              const {
                content: F = ""
              } = U ?? {};
              y((Pe) => A === Rt.Partial ? Pe + F : F);
            }
          }
        });
        k({
          ...O,
          chat: async (A) => O.agent.presenter.voice ? (y(""), await O.chat(A).catch((F) => {
            throw (F == null ? void 0 : F.kind) === "InsufficientCreditsError" && c(M.TextOnly), F;
          })) : Promise.reject()
        }), p(await O.getStarterMessages());
      } catch (O) {
        _e(O);
      }
  }
  async function ce() {
    d(N.New), o(C.Terminating), await (g == null ? void 0 : g.terminate()), o(C.New);
  }
  async function ge() {
    try {
      o(C.Connecting), await (g == null ? void 0 : g.reconnectToChat()), o(C.Connected);
    } catch (O) {
      _e(O);
    }
  }
  function _e(O) {
    console.error(O), O instanceof TypeError && d(N.Fail), o(C.Fail), c(M.Maintenance), H(`${(S == null ? void 0 : S.preview_name) || "Agent"} is unavailable at the moment`);
  }
  return E(() => {
    i ? ne() : ce().catch();
  }, [j, P, B, i]), E(() => {
    L(typeof t == "string" ? void 0 : t);
  }, [t]), u(se.Provider, {
    value: {
      streamedMessage: h,
      starterMessage: b,
      srcObject: m,
      streamState: _,
      videoState: f,
      connectionState: r,
      chatMode: a,
      setChatMode: c,
      setStreamState: d,
      terminate: ce,
      connect: ne,
      error: I,
      reconnectToChat: ge,
      agentManager: g,
      agent: S
    },
    children: e
  });
}
const Vt = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.3035%206.70851L14.7142%206.11925C12.1107%203.51576%207.88961%203.51576%205.28612%206.11925C2.68262%208.72275%202.68262%2012.9438%205.28612%2015.5473C7.88961%2018.1508%2012.1107%2018.1508%2014.7142%2015.5473C16.2282%2014.0333%2016.8618%2011.9723%2016.6149%2010.0004M15.3035%206.70851H11.7679M15.3035%206.70851V3.17297'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Mn = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.9399%206.96684L6.87207%2017.0347M6.87203%206.9668L16.9399%2017.0346'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e", Bt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20199.943%20199.943'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20style='fill:%23010002;'%20d='M99.972,0.004C44.85,0.004,0,44.847,0,99.968c0,55.125,44.847,99.972,99.972,99.972%20s99.972-44.847,99.972-99.972C199.943,44.847,155.093,0.004,99.972,0.004z%20M99.972,190.957c-50.168,0-90.996-40.813-90.996-90.989%20c0-50.172,40.828-90.992,90.996-90.992c50.175,0,91.003,40.817,91.003,90.992S150.147,190.957,99.972,190.957z'/%3e%3cpath%20style='fill:%23010002;'%20d='M99.324,67.354c-3.708,0-6.725,3.01-6.725,6.728v75.979c0,3.722,3.017,6.739,6.725,6.739%20c3.722,0,6.739-3.017,6.739-6.739V74.082C106.063,70.364,103.042,67.354,99.324,67.354z'/%3e%3ccircle%20style='fill:%23010002;'%20cx='99.746'%20cy='48.697'%20r='8.178'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function W({
  src: e,
  size: t,
  color: n = "currentcolor",
  padding: i = "0",
  rotated: r,
  margin: o = "0",
  width: a,
  className: c = ""
}) {
  return u("svg", {
    className: "didagent__maskedicon " + c,
    style: {
      "--mask-url": `url("${e}")`,
      "--color": n,
      "--width": a,
      "--size": t,
      "--padding": i,
      "--margin": o,
      "--rotation": r ? "180deg" : "0deg"
    }
  });
}
const En = ({
  text: e,
  hide: t
}) => t ? null : u("div", {
  className: "didagent__info_message_agent_unavailable didagent__info_message_agent_unavailable_container",
  children: u("pre", {
    className: "didagent__info_message_agent_unavailable_danger",
    children: [u(W, {
      src: Bt,
      size: "20px"
    }), u("pre", {
      children: e
    })]
  })
});
function An({
  title: e,
  content: t,
  hide: n
}) {
  return n ? null : u("div", {
    className: "didagent__info_message_agent_unavailable_container",
    children: [u("pre", {
      className: "didagent__info_message_agent_unavailable_indication",
      children: [u(W, {
        src: Bt,
        size: "20px"
      }), u("pre", {
        children: e
      })]
    }), t && u("pre", {
      className: "didagent__info_message_agent_unavailable_message",
      children: t
    })]
  });
}
function Rn({
  name: e,
  displayRestart: t,
  onRestart: n,
  restartDisabled: i,
  isRestarting: r,
  onClose: o,
  onEasterEgg: a,
  closeClassName: c
}) {
  const {
    chatMode: _,
    agent: d,
    error: f
  } = z(se);
  (d == null ? void 0 : d.chats) !== void 0 && Math.max(0, tt - d.chats);
  const s = oe(0), m = (d == null ? void 0 : d.presenter.type) === "clip";
  function l() {
    s.current += 1, s.current === 5 && (a == null || a(), s.current = 0);
  }
  return u("header", {
    className: "didagent__header",
    children: [u("div", {
      className: "didagent__header-left",
      children: [u("button", {
        onClick: o,
        className: `didagent__close__button ${c}`,
        children: u(W, {
          src: Mn,
          size: "20px"
        })
      }), u("h2", {
        style: {
          "--color": m ? "white" : ""
        },
        className: "didagent__header__name",
        onClick: l,
        children: e
      })]
    }), u(An, {
      hide: _ !== M.TextOnly,
      title: "Performance mode",
      content: `${e} is currently in performance mode, sound and face animations will not play`
    }), u(En, {
      hide: !f,
      text: f
    }), t && u("button", {
      onClick: n,
      disabled: i,
      title: "Restart conversation",
      className: `didagent__header__menu__item ${r ? "didagent__header__menu__item-rotate" : ""} didagent__header__menu__item__${m ? "clip__agent" : "talk__agent"}`,
      children: u(W, {
        src: Vt,
        size: "20px"
      })
    })]
  });
}
const Hn = "data:image/svg+xml,%3csvg%20version='1.1'%20id='L9'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20100%20100'%20enable-background='new%200%200%200%200'%20xml:space='preserve'%3e%3cpath%20fill='%23fff'%20d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50%20M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3e%3canimateTransform%20attributeName='transform'%20attributeType='XML'%20type='rotate'%20dur='1s'%20from='0%2050%2050'%20to='360%2050%2050'%20repeatCount='indefinite'%20/%3e%3c/path%3e%3c/svg%3e";
function Me() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
const jt = "data:image/svg+xml,%3csvg%20version='1.1'%20id='L5'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2052%2042'%20enable-background='new%200%200%200%200'%20xml:space='preserve'%3e%3ccircle%20fill='%23fff'%20stroke='none'%20cx='6'%20cy='21'%20r='6'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20type='translate'%20values='0%2015%20;%200%20-15;%200%2015'%20repeatCount='indefinite'%20begin='0.1'/%3e%3c/circle%3e%3ccircle%20fill='%23fff'%20stroke='none'%20cx='25'%20cy='21'%20r='6'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20type='translate'%20values='0%2010%20;%200%20-10;%200%2010'%20repeatCount='indefinite'%20begin='0.2'/%3e%3c/circle%3e%3ccircle%20fill='%23fff'%20stroke='none'%20cx='44'%20cy='21'%20r='6'%3e%3canimateTransform%20attributeName='transform'%20dur='1s'%20type='translate'%20values='0%205%20;%200%20-5;%200%205'%20repeatCount='indefinite'%20begin='0.3'/%3e%3c/circle%3e%3c/svg%3e", On = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4453%2011.5556C10.4453%208.48731%2012.9326%206%2016.0009%206C19.0691%206%2021.5564%208.48731%2021.5564%2011.5556V14.8889C21.5564%2017.9571%2019.0691%2020.4444%2016.0009%2020.4444C12.9326%2020.4444%2010.4453%2017.9571%2010.4453%2014.8889V11.5556Z'%20fill='white'%20stroke='white'%20stroke-width='1.66667'/%3e%3cpath%20d='M24.8911%2013.7812V14.8924C24.8911%2019.8016%2020.9114%2023.7813%2016.0022%2023.7813C11.093%2023.7813%207.11328%2019.8016%207.11328%2014.8924V13.7812'%20stroke='white'%20stroke-width='1.66667'%20stroke-linecap='round'/%3e%3cpath%20d='M16%2023.7812V27.1146'%20stroke='white'%20stroke-width='1.66667'%20stroke-linecap='round'/%3e%3c/svg%3e", Un = "data:image/svg+xml,%3csvg%20width='23'%20height='24'%20viewBox='0%200%2023%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.68322%2018.9259L14.3358%2016.4985C18.4002%2014.3779%2020.4324%2013.3176%2020.4324%2011.6386C20.4324%209.95953%2018.4002%208.89925%2014.3358%206.77869L9.68324%204.35127C6.40287%202.63977%204.76268%201.78403%203.81181%202.0467C2.90723%202.29659%202.20074%203.0338%201.96126%203.97771C1.70953%204.96992%202.52962%206.68142%204.1698%2010.1044C4.37307%2010.5286%204.78866%2010.8108%205.24318%2010.813L12.6703%2010.8491C13.0882%2010.8511%2013.4253%2011.2062%2013.4234%2011.6423C13.4214%2012.0783%2013.0811%2012.4301%2012.6633%2012.428L5.35607%2012.3926C4.8551%2012.3901%204.39385%2012.7052%204.1698%2013.1728C2.52963%2016.5957%201.70953%2018.3072%201.96126%2019.2994C2.20074%2020.2434%202.90723%2020.9806%203.81181%2021.2305C4.76268%2021.4931%206.40287%2020.6374%209.68322%2018.9259Z'%20fill='white'/%3e%3c/svg%3e", Dn = "data:image/svg+xml,%3csvg%20id='wave'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2038.05'%3e%3cstyle%3e%20%23Line_1%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%200.15s;%20}%20%23Line_2%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%200.3s;%20}%20%23Line_3%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%200.45s;%20}%20%23Line_4%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%200.6s;%20}%20%23Line_5%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%200.75s;%20}%20%23Line_6%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%200.9s;%20}%20%23Line_7%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%201.05s;%20}%20%23Line_8%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%201.2s;%20}%20%23Line_9%20{%20animation:%20pulse%201s%20infinite;%20animation-delay:%201.35s;%20}%20@keyframes%20pulse%20{%200%25%20{%20transform:%20scaleY(1);%20transform-origin:%2050%25%2050%25;%20}%2050%25%20{%20transform:%20scaleY(0.7);%20transform-origin:%2050%25%2050%25;%20}%20100%25%20{%20transform:%20scaleY(1);%20transform-origin:%2050%25%2050%25;%20}%20}%20%3c/style%3e%3cpath%20id='Line_1'%20data-name='Line%201'%20d='M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z'%20/%3e%3cpath%20id='Line_2'%20data-name='Line%202'%20d='M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z'%20/%3e%3cpath%20id='Line_3'%20data-name='Line%203'%20d='M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z'%20/%3e%3cpath%20id='Line_4'%20data-name='Line%204'%20d='M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z'%20/%3e%3cpath%20id='Line_5'%20data-name='Line%205'%20d='M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z'%20/%3e%3cpath%20id='Line_6'%20data-name='Line%206'%20d='M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z'%20/%3e%3cpath%20id='Line_7'%20data-name='Line%207'%20d='M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z'%20/%3e%3cpath%20id='Line_8'%20data-name='Line%208'%20d='M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z'%20/%3e%3cpath%20id='Line_9'%20data-name='Line%209'%20d='M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z'%20/%3e%3c/svg%3e";
function Fn() {
  return navigator.userAgent.toLowerCase().match(/(android|windows).+chrome|(iphone|mac).+safari/) && (window.SpeechRecognition || window.webkitSpeechRecognition);
}
function Vn({
  onstart: e,
  onend: t,
  onresult: n,
  onerror: i,
  interimResults: r = !1
}) {
  const o = Fn();
  if (!o)
    return null;
  const a = new o();
  return a.interimResults = r, a.onerror = (c) => i == null ? void 0 : i(c), a.onstart = () => {
    e == null || e();
  }, a.onspeechend = () => {
    t == null || t(), a.stop();
  }, a.onresult = n, {
    start: () => a.start(),
    stop: () => a.stop()
  };
}
function Bn({
  text: e,
  onSend: t,
  onResume: n,
  onTranscript: i
}) {
  var b;
  const [r, o] = w(), [a, c] = w(!1), _ = z(se), d = (_ == null ? void 0 : _.connectionState) || C.New, f = (_ == null ? void 0 : _.streamState) || N.New, s = ((b = _ == null ? void 0 : _.agentManager) == null ? void 0 : b.chatId) || "", m = (_ == null ? void 0 : _.chatMode) === M.TextOnly, {
    isAuthenticated: l
  } = z(me), h = Te(() => Vn({
    onresult(p) {
      const g = [...p.results].map((k) => [...k].map((S) => S.transcript.trim()).join(" ")).join(" ");
      i(g);
    },
    onstart: () => c(!0),
    onend: () => c(!1),
    onerror: (p) => {
      R("agent-stt-error", {
        event: "error",
        error: p.error,
        engine: "native",
        chatId: s
      }), o(p);
    }
  }), [i]);
  if (l) {
    if (d === C.Connecting)
      return u("button", {
        className: "didagaent__send__button",
        disabled: !0,
        children: [u("div", {
          className: "didagent__box__blur border8"
        }), u(W, {
          src: jt,
          size: "16px"
        })]
      });
    if ([C.New, C.Fail, C.Terminating].includes(d) && !m)
      return u("button", {
        className: "didagaent__send__button",
        onClick: n,
        disabled: d === C.Terminating,
        children: [u("div", {
          className: "didagent__box__blur border8"
        }), u(W, {
          src: Vt,
          size: "24px"
        })]
      });
  }
  const y = [N.Start, N.Loading, N.Buffering].includes(f) && !m;
  return e.length === 0 && !r ? u("button", {
    className: "didagaent__send__button",
    onClick: function() {
      if (h) {
        const g = a ? "stop" : "start";
        h[g](), R(`agent-stt-${g}`, {
          event: "click",
          engine: "native",
          chatId: s
        });
      }
    },
    disabled: y,
    children: [u("div", {
      className: "didagent__box__blur border8"
    }), u(W, {
      src: a ? Dn : On,
      size: "24px"
    })]
  }) : u("button", {
    className: "didagaent__send__button",
    onClick: t,
    disabled: !e.trim() || y,
    children: [u("div", {
      className: "didagent__box__blur border8"
    }), u(W, {
      src: Un,
      size: "24px",
      color: "white"
    })]
  });
}
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ft(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var i in t)
    if (i !== "__source" && e[i] !== t[i])
      return !0;
  return !1;
}
function pt(e, t) {
  this.props = e, this.context = t;
}
(pt.prototype = new q()).isPureReactComponent = !0, pt.prototype.shouldComponentUpdate = function(e, t) {
  return ft(this.props, e) || ft(this.state, t);
};
var ht = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ht && ht(e);
};
var jn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Wn(e) {
  function t(n) {
    var i = Wt({}, n);
    return delete i.ref, e(i, n.ref || null);
  }
  return t.$$typeof = jn, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var zn = v.__e;
v.__e = function(e, t, n, i) {
  if (e.then) {
    for (var r, o = t; o = o.__; )
      if ((r = o.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  zn(e, t, n, i);
};
var mt = v.unmount;
function zt(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(i) {
    typeof i.__c == "function" && i.__c();
  }), e.__c.__H = null), (e = Wt({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(i) {
    return zt(i, t, n);
  })), e;
}
function Kt(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(i) {
    return Kt(i, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ee() {
  this.__u = 0, this.t = null, this.__b = null;
}
function qt(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ye() {
  this.u = null, this.o = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), mt && mt(e);
}, (Ee.prototype = new q()).__c = function(e, t) {
  var n = t.__c, i = this;
  i.t == null && (i.t = []), i.t.push(n);
  var r = qt(i.__v), o = !1, a = function() {
    o || (o = !0, n.__R = null, r ? r(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--i.__u) {
      if (i.state.__a) {
        var _ = i.state.__a;
        i.__v.__k[0] = Kt(_, _.__c.__P, _.__c.__O);
      }
      var d;
      for (i.setState({ __a: i.__b = null }); d = i.t.pop(); )
        d.forceUpdate();
    }
  };
  i.__u++ || 32 & t.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), e.then(a, a);
}, Ee.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ee.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), i = this.__v.__k[0].__c;
      this.__v.__k[0] = zt(this.__b, n, i.__O = i.__P);
    }
    this.__b = null;
  }
  var r = t.__a && He(X, null, e.fallback);
  return r && (r.__u &= -33), [He(X, null, t.__a ? null : e.children), r];
};
var gt = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
(ye.prototype = new q()).__a = function(e) {
  var t = this, n = qt(t.__v), i = t.o.get(e);
  return i[0]++, function(r) {
    var o = function() {
      t.props.revealOrder ? (i.push(r), gt(t, e, i)) : r();
    };
    n ? n(o) : o();
  };
}, ye.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = xe(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, ye.prototype.componentDidUpdate = ye.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    gt(e, n, t);
  });
};
var Kn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, qn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Zn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Jn = /[A-Z0-9]/g, Gn = typeof document < "u", Yn = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(q.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var vt = v.event;
function Qn() {
}
function Xn() {
  return this.cancelBubble;
}
function ei() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return vt && (e = vt(e)), e.persist = Qn, e.isPropagationStopped = Xn, e.isDefaultPrevented = ei, e.nativeEvent = e;
};
var ti = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, yt = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, i = t.type, r = {};
    for (var o in n) {
      var a = n[o];
      if (!(o === "value" && "defaultValue" in n && a == null || Gn && o === "children" && i === "noscript" || o === "class" || o === "className")) {
        var c = o.toLowerCase();
        o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : c === "translate" && a === "no" ? a = !1 : c === "ondoubleclick" ? o = "ondblclick" : c !== "onchange" || i !== "input" && i !== "textarea" || Yn(n.type) ? c === "onfocus" ? o = "onfocusin" : c === "onblur" ? o = "onfocusout" : Zn.test(o) ? o = c : i.indexOf("-") === -1 && qn.test(o) ? o = o.replace(Jn, "-$&").toLowerCase() : a === null && (a = void 0) : c = o = "oninput", c === "oninput" && r[o = c] && (o = "oninputCapture"), r[o] = a;
      }
    }
    i == "select" && r.multiple && Array.isArray(r.value) && (r.value = xe(n.children).forEach(function(_) {
      _.props.selected = r.value.indexOf(_.props.value) != -1;
    })), i == "select" && r.defaultValue != null && (r.value = xe(n.children).forEach(function(_) {
      _.props.selected = r.multiple ? r.defaultValue.indexOf(_.props.value) != -1 : r.defaultValue == _.props.value;
    })), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", ti)) : (n.className && !n.class || n.class && n.className) && (r.class = r.className = n.className), t.props = r;
  }(e), e.$$typeof = Kn, yt && yt(e);
};
var wt = v.__r;
v.__r = function(e) {
  wt && wt(e), e.__c;
};
var bt = v.diffed;
v.diffed = function(e) {
  bt && bt(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
function ni(e, t, n) {
  return e ? "var(--did-primary-black-9080)" : "var(--did-primary-black-9060)";
}
function kt({
  negative: e,
  toggled: t,
  onClick: n,
  disabled: i
}) {
  if (!t && i)
    return null;
  const r = e === !0, o = {
    "--hover-color": "var(--did-primary-black-9080)",
    "--color": ni(t, r, i === !0),
    "--cursor": i === !0 ? "default" : "pointer"
  };
  return u("div", {
    className: "didagent__thumb__container",
    style: o,
    onClick: () => !i && (n == null ? void 0 : n(!t)),
    children: r ? "ðŸ‘Ž" : "ðŸ‘"
  });
}
const ii = (e, t) => e === "up" ? t === D.Positive ? D.Unrated : D.Positive : t === D.Negative ? D.Unrated : D.Negative;
function ri({
  className: e,
  onRate: t,
  message: n,
  style: i
}) {
  const [r, o] = w(D.Unrated), [a, c] = w(), [_, d] = w(!1), {
    agentManager: f
  } = z(se);
  function s(m) {
    return async () => {
      var y, b;
      const l = ii(m, r);
      o(l), d(!0);
      const h = await (t == null ? void 0 : t(l, n, a));
      R("agents-rating", {
        thumb: m,
        rate: l,
        agentId: (y = f == null ? void 0 : f.agent) == null ? void 0 : y.id,
        matches: ((b = n.matches) == null ? void 0 : b.map((p) => [p.document_id, p.id])) ?? []
      }), c(h);
    };
  }
  return u("div", {
    className: `${e} didagent__rating`,
    style: i,
    children: [u(kt, {
      disabled: _,
      toggled: r === D.Positive,
      onClick: s("up")
    }), u(kt, {
      disabled: _,
      negative: !0,
      toggled: r === D.Negative,
      onClick: s("down")
    })]
  });
}
const oi = ["Juggling thoughts and data...", "Processing, just a moment...", "Cooking up a response...", "Brainstorming potential answers...", "Let me look this up..."], Ct = ["Pondering the best reply...", "Processing, just a moment...", "Convincing my electrons to run faster...", "This is interesting..."], ai = [{
  text: [""],
  duration: 2e3
}, {
  text: ["Thinking..."],
  duration: 3e3
}, {
  text: oi,
  duration: 4e3
}, {
  text: Ct,
  duration: 4e3
}, {
  text: Ct,
  duration: 4e3
}];
function si(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function ci(e) {
  const [t, n] = w(e[0].text[0]), i = oe(), r = (a = 0) => {
    a < e.length && !i.current && (i.current = setTimeout(() => {
      i.current = void 0;
      const c = (a + 1) % e.length;
      n(si(e[c].text)), r(c);
    }, e[a].duration));
  };
  return {
    text: t,
    doStep: r,
    clear: () => {
      clearTimeout(i.current), n(e[0].text[0]), i.current = void 0;
    }
  };
}
const _i = "#b8b8b8", li = Wn(function({
  messages: e,
  isLoading: t,
  onRate: n
}, i) {
  const {
    doStep: r,
    text: o,
    clear: a
  } = ci(ai);
  return E(() => t ? r() : a(), [t]), u("div", {
    className: "didagent__messages__container",
    ref: i,
    children: [e.filter(({
      content: c
    }) => !!c).map((c, _) => u("div", {
      className: `didagent__message__container didagent__message__container__${c.role}`,
      children: [u("pre", {
        className: `didagent__message didagent__message__${c.role}`,
        children: c.content
      }), _ > 0 && c.role === "assistant" && u(ri, {
        className: "didagent__message__rating",
        message: c,
        onRate: n,
        style: {
          opacity: _ === e.length - 1 ? 1 : void 0
        }
      })]
    })), t && u("div", {
      className: "didagent__message__container didagent__message__container__assistant",
      children: u("pre", {
        className: "didagent__message didagent__message__assistant didagent__message__assistant__loader",
        children: [u(W, {
          src: jt,
          color: _i,
          size: "22px"
        }), o]
      })
    })]
  });
}), di = (e, t = 90) => e.length > t ? e.slice(0, t) + "..." : e;
function ui({
  messages: e,
  onClick: t,
  show: n
}) {
  const [i, r] = w(!1);
  return E(() => {
    n && e.length > 0 && setTimeout(() => {
      r(!0);
    }, 2e3);
  }, [n, e]), n ? u("div", {
    className: "didagent__starter_messages__container",
    style: {
      maxHeight: i ? "120px" : "0"
    },
    children: e.map((o) => u("div", {
      className: "didagent__starter_message__container",
      onClick: () => t(o),
      children: di(o)
    }, o))
  }) : null;
}
function fi({
  size: e = 40
}) {
  const t = `${-e / 2}px`;
  return u("div", {
    className: "didagent__video_blur",
    children: [u("div", {
      className: "didagent__video_blur__position didagent__video_blur__position_right",
      style: {
        top: 0,
        right: t,
        width: `${e}px`,
        height: "100%"
      },
      children: [u("div", {
        className: "didagent__video_blur__inner_v"
      }), u("div", {
        className: "didagent__video_blur__outer"
      })]
    }), u("div", {
      className: "didagent__video_blur__position didagent__video_blur__position_left",
      style: {
        top: 0,
        left: t,
        width: `${e}px`,
        height: "100%"
      },
      children: [u("div", {
        className: "didagent__video_blur__inner_v"
      }), u("div", {
        className: "didagent__video_blur__outer"
      })]
    }), u("div", {
      className: "didagent__video_blur__position didagent__video_blur__position_bottom",
      style: {
        bottom: t,
        left: 0,
        width: "100%",
        height: `${e}px`
      },
      children: [u("div", {
        className: "didagent__video_blur__inner_h"
      }), u("div", {
        className: "didagent__video_blur__outer"
      })]
    })]
  });
}
function pi({
  streamState: e,
  videoState: t,
  srcObject: n,
  idleVideo: i,
  isBlur: r,
  onVideoPlay: o,
  onVideoStop: a,
  onIdleLoad: c
}) {
  const _ = oe(null), d = oe(), [f, s] = w(0);
  return E(() => {
    n && _.current && (d.current = n);
  }, [n, _.current]), E(() => {
    _.current && (e === N.Start ? _.current.srcObject = d.current : t == Ft.Stop && (s(0), setTimeout(() => {
      _.current && (_.current.srcObject = null);
    }, 1e3)));
  }, [e, t]), u("div", {
    className: `didagent__embedded__video__container ${r ? "didagent__embedded__video__blur" : ""}`,
    children: [u("video", {
      onPlay: (m) => {
        s(1), o == null || o();
      },
      ref: _,
      autoPlay: !0,
      playsInline: !0,
      onAbort: (m) => a == null ? void 0 : a(m),
      onPause: (m) => a == null ? void 0 : a(m),
      style: {
        opacity: f
      }
    }), u("video", {
      autoplay: !0,
      onLoadedData: c,
      playsinline: !0,
      src: i,
      muted: !0,
      loop: !0,
      style: {
        opacity: 1 - f
      }
    }), u(fi, {})]
  });
}
let Ae = [], St = 0;
function hi({
  offline: e,
  styles: t,
  onClose: n
}) {
  var Ze;
  const {
    isAuthenticated: i
  } = z(me), {
    terminate: r,
    setStreamState: o,
    streamedMessage: a,
    starterMessage: c,
    streamState: _,
    videoState: d,
    connectionState: f,
    chatMode: s,
    setChatMode: m,
    agentManager: l,
    srcObject: h,
    connect: y,
    reconnectToChat: b,
    agent: p
  } = z(se), g = oe(null), k = oe(null), [S, L] = w(""), [I, H] = w([]), [j, P] = w(!1), [B, ne] = w(!1), [ce, ge] = w(!1), [_e, O] = w(!1);
  function A() {
    a && H(($) => {
      const Z = $.pop();
      return Z ? [...$, {
        ...Z,
        content: a
      }] : $;
    });
  }
  E(() => {
    h && g.current && (g.current.srcObject = h), window.onbeforeunload = ($) => {
      r().then(() => console.log("terminated"));
    };
  }, [r, h]), Sn(() => {
    var $;
    ($ = k.current) != null && $.lastElementChild && k.current.scrollTo({
      top: k.current.lastElementChild.offsetTop - k.current.offsetTop - 5,
      behavior: "smooth"
    });
  }, [I, B]), E(() => {
    p && (Ae = [{
      role: "assistant",
      content: `Hi! I'm ${p.preview_name}, welcome to agents. How can I help you?`,
      created_at: Me()
    }], H(Ae));
  }, [p]), E(() => {
    [N.Buffering, N.Loading].includes(_) ? ne(!0) : [N.New, N.Fail].includes(_) && (ne(!1), A());
  }, [_]), E(() => {
    ce && (ne(!1), A());
  }, [ce, a]);
  async function U($) {
    let Z = !1;
    if (i) {
      if (s !== M.TextOnly && (!k.current || $.trim().length === 0 || ![N.New].includes(_) || ![C.Connected].includes(f)))
        return;
    } else
      return R("agent-offline-onsend", {
        event: "click"
      }), e == null ? void 0 : e.onSend(S);
    c.indexOf($) > -1 && (Z = !0, R("agent-started-question", {
      event: "click",
      question: $,
      agent_id: p == null ? void 0 : p.id,
      chatId: l == null ? void 0 : l.chatId
    }));
    const G = [...I, {
      role: "user",
      content: $.trim(),
      created_at: Me()
    }];
    L(""), o(N.Loading), H(G);
    try {
      if (St = Date.now(), R("agent-message-send", {
        event: "success",
        messages: I.length + 1,
        agent_id: p == null ? void 0 : p.id,
        chatId: l == null ? void 0 : l.chatId,
        isStarterQuestion: Z
      }), !l)
        throw new Error("AgentManager is not available");
      const V = await l.chat(G).catch((ie) => (console.error("Error in sending message", ie), {
        chatMode: M.Maintenance,
        result: "Sorry, I am not available right now",
        matches: []
      }));
      if (V.chatMode && (m(V.chatMode), V.chatMode === M.Maintenance)) {
        r();
        return;
      }
      H((ie) => [...ie, {
        role: "assistant",
        content: V.chatMode === M.TextOnly ? V.result ?? "" : "",
        created_at: Me(),
        matches: V.matches
      }]), R("agent-message-received", {
        agent_id: p == null ? void 0 : p.id,
        latency: Date.now() - St,
        messages: I.length + 1,
        chatId: l.chatId
      }), o(V.chatMode === M.TextOnly ? N.New : N.Buffering);
    } catch (V) {
      throw o(N.New), R("agent-message-send", {
        event: "fail",
        messages: I.length,
        agent_id: p == null ? void 0 : p.id,
        chatId: l == null ? void 0 : l.chatId
      }), V;
    }
  }
  async function F($, Z, G) {
    var V, ie, Je;
    if (!(!((V = p == null ? void 0 : p.knowledge) != null && V.id) || !(l != null && l.chatId)))
      if (G)
        if ($ === D.Unrated)
          await l.deleteRate(G);
        else
          return await l.rate({
            score: $ === D.Positive ? 1 : -1,
            knowledge_id: p.knowledge.id,
            chat_id: l.chatId,
            agent_id: p.id,
            matches: ((ie = Z.matches) == null ? void 0 : ie.map((le) => [le.document_id, le.id])) ?? []
          }, G), G;
      else {
        const le = await l.rate({
          score: $ === D.Positive ? 1 : -1,
          knowledge_id: p.knowledge.id,
          chat_id: l.chatId,
          agent_id: p.id,
          matches: ((Je = Z.matches) == null ? void 0 : Je.map((Ge) => [Ge.document_id, Ge.id])) ?? []
        });
        if (!le)
          throw new Error("Error in creating rating");
        return le.id;
      }
  }
  const Pe = dt(async () => {
    await r(), H(Ae), await y(), R("agent-new-chat", {
      event: "click",
      agentId: p == null ? void 0 : p.id,
      chatId: l == null ? void 0 : l.chatId
    });
  }, [l]), Gt = dt(async () => {
    var $;
    await b(), R("agent-resume-chat", {
      event: "click",
      agentId: ($ = l == null ? void 0 : l.agent) == null ? void 0 : $.id,
      chatId: l == null ? void 0 : l.chatId
    });
  }, [l]), Yt = j || s === M.Maintenance;
  return u("div", {
    className: `didagent__embedded__container ${_e ? "didagent__fullscreen" : ""}`,
    children: [u("div", {
      className: "didagent__embedded__container__connecting",
      style: {
        opacity: +!Yt
      },
      children: [u(W, {
        src: Hn,
        size: "64px",
        color: "var(--did-primary-black-50)"
      }), u("span", {
        children: "Starting conversation..."
      })]
    }), u("div", {
      className: "didagent__background",
      style: {
        background: `url(${p == null ? void 0 : p.preview_thumbnail}) top center no-repeat transparent`
      }
    }), u(pi, {
      streamState: _,
      videoState: d,
      srcObject: h,
      idleVideo: (Ze = p == null ? void 0 : p.presenter) == null ? void 0 : Ze.idle_video,
      isBlur: s === M.Maintenance,
      onVideoPlay: () => ge(!0),
      onVideoStop: () => ge(!1),
      onIdleLoad: () => P(!0)
    }), u(Rn, {
      name: (p == null ? void 0 : p.preview_name) ?? "Agent",
      displayRestart: I.length > 1,
      onRestart: Pe,
      restartDisabled: ![C.Connected, C.New].includes(f),
      isRestarting: f === C.Terminating,
      closeClassName: t == null ? void 0 : t.closeClassName,
      onClose: n,
      onEasterEgg: () => {
        console.log("onEaster"), O(!_e);
      }
    }), s !== M.Maintenance && u(X, {
      children: [u(li, {
        messages: I,
        isLoading: B,
        ref: k,
        onRate: F
      }), u(ui, {
        show: I.length <= 1 && j && f === C.Connected,
        messages: c,
        onClick: U
      }), u("div", {
        className: "didagent__main__input",
        children: [u("div", {
          className: "didagent__main__input__container",
          children: [u("div", {
            className: "didagent__box__blur border8"
          }), u("input", {
            type: "text",
            placeholder: "Send message",
            value: S,
            onInput: ($) => L($.currentTarget.value),
            onKeyPress: ($) => $.key === "Enter" && U(S)
          })]
        }), u(Bn, {
          onResume: Gt,
          onSend: () => U(S),
          onTranscript: U,
          text: S
        })]
      })]
    })]
  });
}
function Zt({
  agent: e,
  auth: t,
  offline: n,
  isOwner: i,
  track: r,
  didApiUrl: o,
  didSocketApiUrl: a,
  onerror: c,
  customMixpanelKey: _,
  styles: d,
  onClose: f,
  onAgentReady: s,
  enabled: m = !0
}) {
  return window.localStorage.setItem("track_enabled", (r ?? !0).toString()), Ve.mixpanelKey = _ || Ve.mixpanelKey, E(() => {
    function l(h) {
      c && (h.preventDefault(), c == null || c(h.reason));
    }
    return window.addEventListener("unhandledrejection", l), () => window.removeEventListener("unhandledrejection", l);
  }, []), u(Ln, {
    auth: t,
    didApiUrl: o ?? Mt,
    didSocketApiUrl: a ?? on,
    children: u(In, {
      agent: e,
      onAgentReady: s,
      enabled: m,
      children: u(hi, {
        offline: n,
        isOwner: i,
        styles: d,
        onClose: f
      })
    })
  });
}
function mi(e) {
  const {
    token: t,
    username: n,
    password: i,
    clientKey: r
  } = e;
  if (!r) {
    if (!t) {
      if (!n || !i)
        throw new Error("Failed to load agent. No auth method provided");
      return {
        type: "basic",
        username: n,
        password: i
      };
    }
    return {
      type: "bearer",
      token: t
    };
  }
  return {
    type: "key",
    clientKey: r
  };
}
const Jt = {
  mode: "fabio",
  visible: !0
}, Le = Ke({
  setConfigurations: () => {
  },
  configurations: {},
  fullConfigurations: Jt
}), gi = ({
  children: e,
  initialConfigurations: t
}) => {
  const [n, i] = w(t), [r, o] = w({
    ...Jt,
    ...t
  });
  return E(() => {
    if (n.mode === "full") {
      if (!n.targetElementId) {
        console.log("Full mode selected but no target element id provided, defaulting to previous configurations");
        return;
      }
      if (!document.getElementById(n.targetElementId)) {
        console.log("No element found with target id, defaulting to previous configurations", n.targetElementId);
        return;
      }
    }
    o((a) => ({
      ...a,
      ...n
    }));
  }, [n, o]), u(Le.Provider, {
    value: {
      setConfigurations: i,
      configurations: n,
      fullConfigurations: r
    },
    children: e
  });
};
function vi({
  onApiReady: e,
  children: t
}) {
  const {
    setConfigurations: n
  } = z(Le);
  return E(() => {
    e == null || e({
      configure: n
    });
  }, [n, e]), t;
}
function yi(e, t) {
  return {
    cursor: e ? "pointer" : "progress",
    opacity: t || !e ? "0" : "1",
    pointerEvents: e ? "auto" : "none",
    border: t ? "none" : "3px solid var(--did-primary-black-300)",
    bottom: e ? "0" : "-50%"
  };
}
function wi(e) {
  const t = {
    opacity: +e,
    translate: e ? "0px -50%" : "0px -60%"
  };
  return e || (t.background = "transparent"), t;
}
function bi(e) {
  return e ? {
    "--fabio-height": "80vh",
    opacity: 1,
    pointerEvents: "auto",
    zIndex: 100
  } : {
    "--fabio-height": 0,
    opacity: 0,
    pointerEvents: "none",
    zIndex: -1
  };
}
function ki(e) {
  var s;
  const [t, n] = w(!1), [i, r] = w(), [o, a] = w(!1), [c, _] = w(!1), d = o && !t, {
    fullConfigurations: f
  } = z(Le);
  return E(() => {
    e.auth && typeof e.agent == "string" && hn(e.agent, e.auth, (e == null ? void 0 : e.didApiUrl) ?? Mt).then(r).catch((m) => console.log(m));
  }, [e.auth, e.agent]), E(() => {
    c && setTimeout(() => {
      a(!0), setTimeout(() => {
        a(!1);
      }, 3e3);
    }, 3e3);
  }, [c]), f != null && f.visible ? u("span", {
    className: "didagent__fabio",
    style: {
      width: t ? "120px" : "140px"
    },
    children: [u("button", {
      onClick: () => {
        c && (n(!t), R("agent-fab", {
          event: "click"
        }));
      },
      style: yi(c, t),
      children: [u("div", {
        className: `didagent__fabio__speak_with ${t ? "didagent__transition_out" : ""}`,
        style: wi(d),
        children: u("div", {
          children: "Let's chat"
        })
      }), u("video", {
        src: (i == null ? void 0 : i.preview_url) ?? ((s = i == null ? void 0 : i.presenter) == null ? void 0 : s.idle_video),
        alt: "toggle fabio",
        autoplay: !0,
        playsinline: !0,
        loop: !0,
        muted: !0,
        onLoadedData: () => {
          _(!0), R("agent-fab", {
            event: "view"
          });
        }
      })]
    }), u("div", {
      onClick: (m) => m.stopPropagation(),
      className: "didagent__fabio__container",
      style: bi(t),
      children: i && u(Zt, {
        ...e,
        onClose: () => n(!1),
        agent: i,
        enabled: t
      })
    })]
  }) : null;
}
const Ci = (e) => (t) => {
  const {
    targetId: n,
    ...i
  } = t;
  return E(() => {
    const r = document.getElementById(n);
    if (!r)
      throw new Error(`No target element for id: ${n}`);
    return Fe(u(e, {
      ...i
    }), r), () => {
      r && Fe(null, r);
    };
  }, [n]), null;
}, Si = Ci(Zt), xi = (e) => {
  const {
    fullConfigurations: t
  } = z(Le);
  if (t.mode === "full") {
    if (e.agent) {
      if (!e.auth)
        throw new Error("No auth provider");
    } else
      throw new Error("No agent provider");
    return u(Si, {
      ...e,
      targetId: t.targetElementId
    });
  }
  return t.mode === "fabio" ? u(ki, {
    ...e
  }) : null;
}, K = document.querySelector('script[data-name="did-agent"]');
if (K) {
  const e = K.getAttribute("data-mode") ?? "fabio", t = K.getAttribute("data-target-id"), n = K.getAttribute("data-agent-id"), i = K.getAttribute("data-api-url"), r = K.getAttribute("data-token"), o = K.getAttribute("data-username"), a = K.getAttribute("data-password"), c = K.getAttribute("data-client-key");
  if (!n)
    throw new Error("No agent id");
  const _ = {
    agent: n,
    // @ts-ignore
    didApiUrl: i,
    auth: mi({
      token: r,
      username: o,
      password: a,
      clientKey: c
    })
  };
  Fe(u(gi, {
    initialConfigurations: {
      mode: e,
      targetElementId: t ?? ""
    },
    children: u(vi, {
      onApiReady: (f) => {
        window.DID_AGENTS_API = f;
      },
      children: u(xi, {
        ..._
      })
    })
  }), document.body);
}
