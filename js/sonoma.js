(() => {
	var mk = Object.create;
	var Lc = Object.defineProperty;
	var dk = Object.getOwnPropertyDescriptor;
	var hk = Object.getOwnPropertyNames;
	var gk = Object.getPrototypeOf,
		yk = Object.prototype.hasOwnProperty;
	var vk = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
		get: (t, n) => (typeof require < "u" ? require : t)[n]
	}) : e)(function(e) {
		if (typeof require < "u") return require.apply(this, arguments);
		throw Error('Dynamic require of "' + e + '" is not supported')
	});
	var Ge = (e, t) => () => (t || e((t = {
			exports: {}
		}).exports, t), t.exports),
		Zd = (e, t) => {
			for (var n in t) Lc(e, n, {
				get: t[n],
				enumerable: !0
			})
		},
		xk = (e, t, n, r) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of hk(t)) !yk.call(e, i) && i !== n && Lc(e, i, {
					get: () => t[i],
					enumerable: !(r = dk(t, i)) || r.enumerable
				});
			return e
		};
	var q = (e, t, n) => (n = e != null ? mk(gk(e)) : {}, xk(t || !e || !e.__esModule ? Lc(n, "default", {
		value: e,
		enumerable: !0
	}) : n, e));
	var ch = Ge($ => {
		"use strict";
		var Eo = Symbol.for("react.element"),
			wk = Symbol.for("react.portal"),
			Sk = Symbol.for("react.fragment"),
			kk = Symbol.for("react.strict_mode"),
			Ck = Symbol.for("react.profiler"),
			Ek = Symbol.for("react.provider"),
			Pk = Symbol.for("react.context"),
			Tk = Symbol.for("react.forward_ref"),
			Ak = Symbol.for("react.suspense"),
			Ik = Symbol.for("react.memo"),
			Lk = Symbol.for("react.lazy"),
			Jd = Symbol.iterator;

		function Mk(e) {
			return e === null || typeof e != "object" ? null : (e = Jd && e[Jd] || e["@@iterator"], typeof e == "function" ? e : null)
		}
		var nh = {
				isMounted: function() {
					return !1
				},
				enqueueForceUpdate: function() {},
				enqueueReplaceState: function() {},
				enqueueSetState: function() {}
			},
			rh = Object.assign,
			ih = {};

		function ei(e, t, n) {
			this.props = e, this.context = t, this.refs = ih, this.updater = n || nh
		}
		ei.prototype.isReactComponent = {};
		ei.prototype.setState = function(e, t) {
			if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, e, t, "setState")
		};
		ei.prototype.forceUpdate = function(e) {
			this.updater.enqueueForceUpdate(this, e, "forceUpdate")
		};

		function oh() {}
		oh.prototype = ei.prototype;

		function Dc(e, t, n) {
			this.props = e, this.context = t, this.refs = ih, this.updater = n || nh
		}
		var Rc = Dc.prototype = new oh;
		Rc.constructor = Dc;
		rh(Rc, ei.prototype);
		Rc.isPureReactComponent = !0;
		var eh = Array.isArray,
			sh = Object.prototype.hasOwnProperty,
			Nc = {
				current: null
			},
			lh = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function ah(e, t, n) {
			var r, i = {},
				o = null,
				s = null;
			if (t != null)
				for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) sh.call(t, r) && !lh.hasOwnProperty(r) && (i[r] = t[r]);
			var l = arguments.length - 2;
			if (l === 1) i.children = n;
			else if (1 < l) {
				for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
				i.children = a
			}
			if (e && e.defaultProps)
				for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
			return {
				$$typeof: Eo,
				type: e,
				key: o,
				ref: s,
				props: i,
				_owner: Nc.current
			}
		}

		function Dk(e, t) {
			return {
				$$typeof: Eo,
				type: e.type,
				key: t,
				ref: e.ref,
				props: e.props,
				_owner: e._owner
			}
		}

		function Vc(e) {
			return typeof e == "object" && e !== null && e.$$typeof === Eo
		}

		function Rk(e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + e.replace(/[=:]/g, function(n) {
				return t[n]
			})
		}
		var th = /\/+/g;

		function Mc(e, t) {
			return typeof e == "object" && e !== null && e.key != null ? Rk("" + e.key) : t.toString(36)
		}

		function rl(e, t, n, r, i) {
			var o = typeof e;
			(o === "undefined" || o === "boolean") && (e = null);
			var s = !1;
			if (e === null) s = !0;
			else switch (o) {
				case "string":
				case "number":
					s = !0;
					break;
				case "object":
					switch (e.$$typeof) {
						case Eo:
						case wk:
							s = !0
					}
			}
			if (s) return s = e, i = i(s), e = r === "" ? "." + Mc(s, 0) : r, eh(i) ? (n = "", e != null && (n = e.replace(th, "$&/") + "/"), rl(i, t, n, "", function(u) {
				return u
			})) : i != null && (Vc(i) && (i = Dk(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(th, "$&/") + "/") + e)), t.push(i)), 1;
			if (s = 0, r = r === "" ? "." : r + ":", eh(e))
				for (var l = 0; l < e.length; l++) {
					o = e[l];
					var a = r + Mc(o, l);
					s += rl(o, t, n, a, i)
				} else if (a = Mk(e), typeof a == "function")
					for (e = a.call(e), l = 0; !(o = e.next()).done;) o = o.value, a = r + Mc(o, l++), s += rl(o, t, n, a, i);
				else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
			return s
		}

		function nl(e, t, n) {
			if (e == null) return e;
			var r = [],
				i = 0;
			return rl(e, r, "", "", function(o) {
				return t.call(n, o, i++)
			}), r
		}

		function Nk(e) {
			if (e._status === -1) {
				var t = e._result;
				t = t(), t.then(function(n) {
					(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
				}, function(n) {
					(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
				}), e._status === -1 && (e._status = 0, e._result = t)
			}
			if (e._status === 1) return e._result.default;
			throw e._result
		}
		var Ye = {
				current: null
			},
			il = {
				transition: null
			},
			Vk = {
				ReactCurrentDispatcher: Ye,
				ReactCurrentBatchConfig: il,
				ReactCurrentOwner: Nc
			};

		function uh() {
			throw Error("act(...) is not supported in production builds of React.")
		}
		$.Children = {
			map: nl,
			forEach: function(e, t, n) {
				nl(e, function() {
					t.apply(this, arguments)
				}, n)
			},
			count: function(e) {
				var t = 0;
				return nl(e, function() {
					t++
				}), t
			},
			toArray: function(e) {
				return nl(e, function(t) {
					return t
				}) || []
			},
			only: function(e) {
				if (!Vc(e)) throw Error("React.Children.only expected to receive a single React element child.");
				return e
			}
		};
		$.Component = ei;
		$.Fragment = Sk;
		$.Profiler = Ck;
		$.PureComponent = Dc;
		$.StrictMode = kk;
		$.Suspense = Ak;
		$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vk;
		$.act = uh;
		$.cloneElement = function(e, t, n) {
			if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
			var r = rh({}, e.props),
				i = e.key,
				o = e.ref,
				s = e._owner;
			if (t != null) {
				if (t.ref !== void 0 && (o = t.ref, s = Nc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
				for (a in t) sh.call(t, a) && !lh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
			}
			var a = arguments.length - 2;
			if (a === 1) r.children = n;
			else if (1 < a) {
				l = Array(a);
				for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
				r.children = l
			}
			return {
				$$typeof: Eo,
				type: e.type,
				key: i,
				ref: o,
				props: r,
				_owner: s
			}
		};
		$.createContext = function(e) {
			return e = {
				$$typeof: Pk,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
				_defaultValue: null,
				_globalName: null
			}, e.Provider = {
				$$typeof: Ek,
				_context: e
			}, e.Consumer = e
		};
		$.createElement = ah;
		$.createFactory = function(e) {
			var t = ah.bind(null, e);
			return t.type = e, t
		};
		$.createRef = function() {
			return {
				current: null
			}
		};
		$.forwardRef = function(e) {
			return {
				$$typeof: Tk,
				render: e
			}
		};
		$.isValidElement = Vc;
		$.lazy = function(e) {
			return {
				$$typeof: Lk,
				_payload: {
					_status: -1,
					_result: e
				},
				_init: Nk
			}
		};
		$.memo = function(e, t) {
			return {
				$$typeof: Ik,
				type: e,
				compare: t === void 0 ? null : t
			}
		};
		$.startTransition = function(e) {
			var t = il.transition;
			il.transition = {};
			try {
				e()
			} finally {
				il.transition = t
			}
		};
		$.unstable_act = uh;
		$.useCallback = function(e, t) {
			return Ye.current.useCallback(e, t)
		};
		$.useContext = function(e) {
			return Ye.current.useContext(e)
		};
		$.useDebugValue = function() {};
		$.useDeferredValue = function(e) {
			return Ye.current.useDeferredValue(e)
		};
		$.useEffect = function(e, t) {
			return Ye.current.useEffect(e, t)
		};
		$.useId = function() {
			return Ye.current.useId()
		};
		$.useImperativeHandle = function(e, t, n) {
			return Ye.current.useImperativeHandle(e, t, n)
		};
		$.useInsertionEffect = function(e, t) {
			return Ye.current.useInsertionEffect(e, t)
		};
		$.useLayoutEffect = function(e, t) {
			return Ye.current.useLayoutEffect(e, t)
		};
		$.useMemo = function(e, t) {
			return Ye.current.useMemo(e, t)
		};
		$.useReducer = function(e, t, n) {
			return Ye.current.useReducer(e, t, n)
		};
		$.useRef = function(e) {
			return Ye.current.useRef(e)
		};
		$.useState = function(e) {
			return Ye.current.useState(e)
		};
		$.useSyncExternalStore = function(e, t, n) {
			return Ye.current.useSyncExternalStore(e, t, n)
		};
		$.useTransition = function() {
			return Ye.current.useTransition()
		};
		$.version = "18.3.1"
	});
	var se = Ge((YL, fh) => {
		"use strict";
		fh.exports = ch()
	});
	var Sh = Ge(re => {
		"use strict";

		function zc(e, t) {
			var n = e.length;
			e.push(t);
			e: for (; 0 < n;) {
				var r = n - 1 >>> 1,
					i = e[r];
				if (0 < ol(i, t)) e[r] = t, e[n] = i, n = r;
				else break e
			}
		}

		function _t(e) {
			return e.length === 0 ? null : e[0]
		}

		function ll(e) {
			if (e.length === 0) return null;
			var t = e[0],
				n = e.pop();
			if (n !== t) {
				e[0] = n;
				e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
					var s = 2 * (r + 1) - 1,
						l = e[s],
						a = s + 1,
						u = e[a];
					if (0 > ol(l, n)) a < i && 0 > ol(u, l) ? (e[r] = u, e[a] = n, r = a) : (e[r] = l, e[s] = n, r = s);
					else if (a < i && 0 > ol(u, n)) e[r] = u, e[a] = n, r = a;
					else break e
				}
			}
			return t
		}

		function ol(e, t) {
			var n = e.sortIndex - t.sortIndex;
			return n !== 0 ? n : e.id - t.id
		}
		typeof performance == "object" && typeof performance.now == "function" ? (ph = performance, re.unstable_now = function() {
			return ph.now()
		}) : (Oc = Date, mh = Oc.now(), re.unstable_now = function() {
			return Oc.now() - mh
		});
		var ph, Oc, mh, Qt = [],
			Ln = [],
			Ok = 1,
			Tt = null,
			Oe = 3,
			al = !1,
			wr = !1,
			To = !1,
			gh = typeof setTimeout == "function" ? setTimeout : null,
			yh = typeof clearTimeout == "function" ? clearTimeout : null,
			dh = typeof setImmediate < "u" ? setImmediate : null;
		typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

		function Fc(e) {
			for (var t = _t(Ln); t !== null;) {
				if (t.callback === null) ll(Ln);
				else if (t.startTime <= e) ll(Ln), t.sortIndex = t.expirationTime, zc(Qt, t);
				else break;
				t = _t(Ln)
			}
		}

		function Bc(e) {
			if (To = !1, Fc(e), !wr)
				if (_t(Qt) !== null) wr = !0, Uc(jc);
				else {
					var t = _t(Ln);
					t !== null && Hc(Bc, t.startTime - e)
				}
		}

		function jc(e, t) {
			wr = !1, To && (To = !1, yh(Ao), Ao = -1), al = !0;
			var n = Oe;
			try {
				for (Fc(t), Tt = _t(Qt); Tt !== null && (!(Tt.expirationTime > t) || e && !wh());) {
					var r = Tt.callback;
					if (typeof r == "function") {
						Tt.callback = null, Oe = Tt.priorityLevel;
						var i = r(Tt.expirationTime <= t);
						t = re.unstable_now(), typeof i == "function" ? Tt.callback = i : Tt === _t(Qt) && ll(Qt), Fc(t)
					} else ll(Qt);
					Tt = _t(Qt)
				}
				if (Tt !== null) var o = !0;
				else {
					var s = _t(Ln);
					s !== null && Hc(Bc, s.startTime - t), o = !1
				}
				return o
			} finally {
				Tt = null, Oe = n, al = !1
			}
		}
		var ul = !1,
			sl = null,
			Ao = -1,
			vh = 5,
			xh = -1;

		function wh() {
			return !(re.unstable_now() - xh < vh)
		}

		function bc() {
			if (sl !== null) {
				var e = re.unstable_now();
				xh = e;
				var t = !0;
				try {
					t = sl(!0, e)
				} finally {
					t ? Po() : (ul = !1, sl = null)
				}
			} else ul = !1
		}
		var Po;
		typeof dh == "function" ? Po = function() {
			dh(bc)
		} : typeof MessageChannel < "u" ? (_c = new MessageChannel, hh = _c.port2, _c.port1.onmessage = bc, Po = function() {
			hh.postMessage(null)
		}) : Po = function() {
			gh(bc, 0)
		};
		var _c, hh;

		function Uc(e) {
			sl = e, ul || (ul = !0, Po())
		}

		function Hc(e, t) {
			Ao = gh(function() {
				e(re.unstable_now())
			}, t)
		}
		re.unstable_IdlePriority = 5;
		re.unstable_ImmediatePriority = 1;
		re.unstable_LowPriority = 4;
		re.unstable_NormalPriority = 3;
		re.unstable_Profiling = null;
		re.unstable_UserBlockingPriority = 2;
		re.unstable_cancelCallback = function(e) {
			e.callback = null
		};
		re.unstable_continueExecution = function() {
			wr || al || (wr = !0, Uc(jc))
		};
		re.unstable_forceFrameRate = function(e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : vh = 0 < e ? Math.floor(1e3 / e) : 5
		};
		re.unstable_getCurrentPriorityLevel = function() {
			return Oe
		};
		re.unstable_getFirstCallbackNode = function() {
			return _t(Qt)
		};
		re.unstable_next = function(e) {
			switch (Oe) {
				case 1:
				case 2:
				case 3:
					var t = 3;
					break;
				default:
					t = Oe
			}
			var n = Oe;
			Oe = t;
			try {
				return e()
			} finally {
				Oe = n
			}
		};
		re.unstable_pauseExecution = function() {};
		re.unstable_requestPaint = function() {};
		re.unstable_runWithPriority = function(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					e = 3
			}
			var n = Oe;
			Oe = e;
			try {
				return t()
			} finally {
				Oe = n
			}
		};
		re.unstable_scheduleCallback = function(e, t, n) {
			var r = re.unstable_now();
			switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) {
				case 1:
					var i = -1;
					break;
				case 2:
					i = 250;
					break;
				case 5:
					i = 1073741823;
					break;
				case 4:
					i = 1e4;
					break;
				default:
					i = 5e3
			}
			return i = n + i, e = {
				id: Ok++,
				callback: t,
				priorityLevel: e,
				startTime: n,
				expirationTime: i,
				sortIndex: -1
			}, n > r ? (e.sortIndex = n, zc(Ln, e), _t(Qt) === null && e === _t(Ln) && (To ? (yh(Ao), Ao = -1) : To = !0, Hc(Bc, n - r))) : (e.sortIndex = i, zc(Qt, e), wr || al || (wr = !0, Uc(jc))), e
		};
		re.unstable_shouldYield = wh;
		re.unstable_wrapCallback = function(e) {
			var t = Oe;
			return function() {
				var n = Oe;
				Oe = t;
				try {
					return e.apply(this, arguments)
				} finally {
					Oe = n
				}
			}
		}
	});
	var Ch = Ge((XL, kh) => {
		"use strict";
		kh.exports = Sh()
	});
	var Iv = Ge(wt => {
		"use strict";
		var bk = se(),
			vt = Ch();

		function M(e) {
			for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		var Mg = new Set,
			Qo = {};

		function Nr(e, t) {
			Si(e, t), Si(e + "Capture", t)
		}

		function Si(e, t) {
			for (Qo[e] = t, e = 0; e < t.length; e++) Mg.add(t[e])
		}
		var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
			mf = Object.prototype.hasOwnProperty,
			_k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
			Eh = {},
			Ph = {};

		function zk(e) {
			return mf.call(Ph, e) ? !0 : mf.call(Eh, e) ? !1 : _k.test(e) ? Ph[e] = !0 : (Eh[e] = !0, !1)
		}

		function Fk(e, t, n, r) {
			if (n !== null && n.type === 0) return !1;
			switch (typeof t) {
				case "function":
				case "symbol":
					return !0;
				case "boolean":
					return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
				default:
					return !1
			}
		}

		function Bk(e, t, n, r) {
			if (t === null || typeof t > "u" || Fk(e, t, n, r)) return !0;
			if (r) return !1;
			if (n !== null) switch (n.type) {
				case 3:
					return !t;
				case 4:
					return t === !1;
				case 5:
					return isNaN(t);
				case 6:
					return isNaN(t) || 1 > t
			}
			return !1
		}

		function qe(e, t, n, r, i, o, s) {
			this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
		}
		var Ne = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
			Ne[e] = new qe(e, 0, !1, e, null, !1, !1)
		});
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach(function(e) {
			var t = e[0];
			Ne[t] = new qe(t, 1, !1, e[1], null, !1, !1)
		});
		["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
			Ne[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
		});
		["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
			Ne[e] = new qe(e, 2, !1, e, null, !1, !1)
		});
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
			Ne[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
		});
		["checked", "multiple", "muted", "selected"].forEach(function(e) {
			Ne[e] = new qe(e, 3, !0, e, null, !1, !1)
		});
		["capture", "download"].forEach(function(e) {
			Ne[e] = new qe(e, 4, !1, e, null, !1, !1)
		});
		["cols", "rows", "size", "span"].forEach(function(e) {
			Ne[e] = new qe(e, 6, !1, e, null, !1, !1)
		});
		["rowSpan", "start"].forEach(function(e) {
			Ne[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
		});
		var op = /[\-:]([a-z])/g;

		function sp(e) {
			return e[1].toUpperCase()
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
			var t = e.replace(op, sp);
			Ne[t] = new qe(t, 1, !1, e, null, !1, !1)
		});
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
			var t = e.replace(op, sp);
			Ne[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
		});
		["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
			var t = e.replace(op, sp);
			Ne[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
		});
		["tabIndex", "crossOrigin"].forEach(function(e) {
			Ne[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
		});
		Ne.xlinkHref = new qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
		["src", "href", "action", "formAction"].forEach(function(e) {
			Ne[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
		});

		function lp(e, t, n, r) {
			var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
			(i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bk(t, n, i, r) && (n = null), r || i === null ? zk(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
		}
		var vn = bk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
			cl = Symbol.for("react.element"),
			ri = Symbol.for("react.portal"),
			ii = Symbol.for("react.fragment"),
			ap = Symbol.for("react.strict_mode"),
			df = Symbol.for("react.profiler"),
			Dg = Symbol.for("react.provider"),
			Rg = Symbol.for("react.context"),
			up = Symbol.for("react.forward_ref"),
			hf = Symbol.for("react.suspense"),
			gf = Symbol.for("react.suspense_list"),
			cp = Symbol.for("react.memo"),
			Dn = Symbol.for("react.lazy");
		Symbol.for("react.scope");
		Symbol.for("react.debug_trace_mode");
		var Ng = Symbol.for("react.offscreen");
		Symbol.for("react.legacy_hidden");
		Symbol.for("react.cache");
		Symbol.for("react.tracing_marker");
		var Th = Symbol.iterator;

		function Io(e) {
			return e === null || typeof e != "object" ? null : (e = Th && e[Th] || e["@@iterator"], typeof e == "function" ? e : null)
		}
		var he = Object.assign,
			Wc;

		function bo(e) {
			if (Wc === void 0) try {
				throw Error()
			} catch (n) {
				var t = n.stack.trim().match(/\n( *(at )?)/);
				Wc = t && t[1] || ""
			}
			return `
` + Wc + e
		}
		var $c = !1;

		function Kc(e, t) {
			if (!e || $c) return "";
			$c = !0;
			var n = Error.prepareStackTrace;
			Error.prepareStackTrace = void 0;
			try {
				if (t)
					if (t = function() {
							throw Error()
						}, Object.defineProperty(t.prototype, "props", {
							set: function() {
								throw Error()
							}
						}), typeof Reflect == "object" && Reflect.construct) {
						try {
							Reflect.construct(t, [])
						} catch (u) {
							var r = u
						}
						Reflect.construct(e, [], t)
					} else {
						try {
							t.call()
						} catch (u) {
							r = u
						}
						e.call(t.prototype)
					}
				else {
					try {
						throw Error()
					} catch (u) {
						r = u
					}
					e()
				}
			} catch (u) {
				if (u && r && typeof u.stack == "string") {
					for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];) l--;
					for (; 1 <= s && 0 <= l; s--, l--)
						if (i[s] !== o[l]) {
							if (s !== 1 || l !== 1)
								do
									if (s--, l--, 0 > l || i[s] !== o[l]) {
										var a = `
` + i[s].replace(" at new ", " at ");
										return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
									} while (1 <= s && 0 <= l);
							break
						}
				}
			} finally {
				$c = !1, Error.prepareStackTrace = n
			}
			return (e = e ? e.displayName || e.name : "") ? bo(e) : ""
		}

		function jk(e) {
			switch (e.tag) {
				case 5:
					return bo(e.type);
				case 16:
					return bo("Lazy");
				case 13:
					return bo("Suspense");
				case 19:
					return bo("SuspenseList");
				case 0:
				case 2:
				case 15:
					return e = Kc(e.type, !1), e;
				case 11:
					return e = Kc(e.type.render, !1), e;
				case 1:
					return e = Kc(e.type, !0), e;
				default:
					return ""
			}
		}

		function yf(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case ii:
					return "Fragment";
				case ri:
					return "Portal";
				case df:
					return "Profiler";
				case ap:
					return "StrictMode";
				case hf:
					return "Suspense";
				case gf:
					return "SuspenseList"
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case Rg:
					return (e.displayName || "Context") + ".Consumer";
				case Dg:
					return (e._context.displayName || "Context") + ".Provider";
				case up:
					var t = e.render;
					return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
				case cp:
					return t = e.displayName || null, t !== null ? t : yf(e.type) || "Memo";
				case Dn:
					t = e._payload, e = e._init;
					try {
						return yf(e(t))
					} catch {}
			}
			return null
		}

		function Uk(e) {
			var t = e.type;
			switch (e.tag) {
				case 24:
					return "Cache";
				case 9:
					return (t.displayName || "Context") + ".Consumer";
				case 10:
					return (t._context.displayName || "Context") + ".Provider";
				case 18:
					return "DehydratedFragment";
				case 11:
					return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
				case 7:
					return "Fragment";
				case 5:
					return t;
				case 4:
					return "Portal";
				case 3:
					return "Root";
				case 6:
					return "Text";
				case 16:
					return yf(t);
				case 8:
					return t === ap ? "StrictMode" : "Mode";
				case 22:
					return "Offscreen";
				case 12:
					return "Profiler";
				case 21:
					return "Scope";
				case 13:
					return "Suspense";
				case 19:
					return "SuspenseList";
				case 25:
					return "TracingMarker";
				case 1:
				case 0:
				case 17:
				case 2:
				case 14:
				case 15:
					if (typeof t == "function") return t.displayName || t.name || null;
					if (typeof t == "string") return t
			}
			return null
		}

		function $n(e) {
			switch (typeof e) {
				case "boolean":
				case "number":
				case "string":
				case "undefined":
					return e;
				case "object":
					return e;
				default:
					return ""
			}
		}

		function Vg(e) {
			var t = e.type;
			return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
		}

		function Hk(e) {
			var t = Vg(e) ? "checked" : "value",
				n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
				r = "" + e[t];
			if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
				var i = n.get,
					o = n.set;
				return Object.defineProperty(e, t, {
					configurable: !0,
					get: function() {
						return i.call(this)
					},
					set: function(s) {
						r = "" + s, o.call(this, s)
					}
				}), Object.defineProperty(e, t, {
					enumerable: n.enumerable
				}), {
					getValue: function() {
						return r
					},
					setValue: function(s) {
						r = "" + s
					},
					stopTracking: function() {
						e._valueTracker = null, delete e[t]
					}
				}
			}
		}

		function fl(e) {
			e._valueTracker || (e._valueTracker = Hk(e))
		}

		function Og(e) {
			if (!e) return !1;
			var t = e._valueTracker;
			if (!t) return !0;
			var n = t.getValue(),
				r = "";
			return e && (r = Vg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
		}

		function Fl(e) {
			if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
			try {
				return e.activeElement || e.body
			} catch {
				return e.body
			}
		}

		function vf(e, t) {
			var n = t.checked;
			return he({}, t, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: n ?? e._wrapperState.initialChecked
			})
		}

		function Ah(e, t) {
			var n = t.defaultValue == null ? "" : t.defaultValue,
				r = t.checked != null ? t.checked : t.defaultChecked;
			n = $n(t.value != null ? t.value : n), e._wrapperState = {
				initialChecked: r,
				initialValue: n,
				controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
			}
		}

		function bg(e, t) {
			t = t.checked, t != null && lp(e, "checked", t, !1)
		}

		function xf(e, t) {
			bg(e, t);
			var n = $n(t.value),
				r = t.type;
			if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
			else if (r === "submit" || r === "reset") {
				e.removeAttribute("value");
				return
			}
			t.hasOwnProperty("value") ? wf(e, t.type, n) : t.hasOwnProperty("defaultValue") && wf(e, t.type, $n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
		}

		function Ih(e, t, n) {
			if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
				var r = t.type;
				if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
				t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
			}
			n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
		}

		function wf(e, t, n) {
			(t !== "number" || Fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
		}
		var _o = Array.isArray;

		function hi(e, t, n, r) {
			if (e = e.options, t) {
				t = {};
				for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
				for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
			} else {
				for (n = "" + $n(n), t = null, i = 0; i < e.length; i++) {
					if (e[i].value === n) {
						e[i].selected = !0, r && (e[i].defaultSelected = !0);
						return
					}
					t !== null || e[i].disabled || (t = e[i])
				}
				t !== null && (t.selected = !0)
			}
		}

		function Sf(e, t) {
			if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
			return he({}, t, {
				value: void 0,
				defaultValue: void 0,
				children: "" + e._wrapperState.initialValue
			})
		}

		function Lh(e, t) {
			var n = t.value;
			if (n == null) {
				if (n = t.children, t = t.defaultValue, n != null) {
					if (t != null) throw Error(M(92));
					if (_o(n)) {
						if (1 < n.length) throw Error(M(93));
						n = n[0]
					}
					t = n
				}
				t == null && (t = ""), n = t
			}
			e._wrapperState = {
				initialValue: $n(n)
			}
		}

		function _g(e, t) {
			var n = $n(t.value),
				r = $n(t.defaultValue);
			n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
		}

		function Mh(e) {
			var t = e.textContent;
			t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
		}

		function zg(e) {
			switch (e) {
				case "svg":
					return "http://www.w3.org/2000/svg";
				case "math":
					return "http://www.w3.org/1998/Math/MathML";
				default:
					return "http://www.w3.org/1999/xhtml"
			}
		}

		function kf(e, t) {
			return e == null || e === "http://www.w3.org/1999/xhtml" ? zg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
		}
		var pl, Fg = function(e) {
			return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
				MSApp.execUnsafeLocalFunction(function() {
					return e(t, n, r, i)
				})
			} : e
		}(function(e, t) {
			if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
			else {
				for (pl = pl || document.createElement("div"), pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
				for (; t.firstChild;) e.appendChild(t.firstChild)
			}
		});

		function Xo(e, t) {
			if (t) {
				var n = e.firstChild;
				if (n && n === e.lastChild && n.nodeType === 3) {
					n.nodeValue = t;
					return
				}
			}
			e.textContent = t
		}
		var Bo = {
				animationIterationCount: !0,
				aspectRatio: !0,
				borderImageOutset: !0,
				borderImageSlice: !0,
				borderImageWidth: !0,
				boxFlex: !0,
				boxFlexGroup: !0,
				boxOrdinalGroup: !0,
				columnCount: !0,
				columns: !0,
				flex: !0,
				flexGrow: !0,
				flexPositive: !0,
				flexShrink: !0,
				flexNegative: !0,
				flexOrder: !0,
				gridArea: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowSpan: !0,
				gridRowStart: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnSpan: !0,
				gridColumnStart: !0,
				fontWeight: !0,
				lineClamp: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				tabSize: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
				fillOpacity: !0,
				floodOpacity: !0,
				stopOpacity: !0,
				strokeDasharray: !0,
				strokeDashoffset: !0,
				strokeMiterlimit: !0,
				strokeOpacity: !0,
				strokeWidth: !0
			},
			Wk = ["Webkit", "ms", "Moz", "O"];
		Object.keys(Bo).forEach(function(e) {
			Wk.forEach(function(t) {
				t = t + e.charAt(0).toUpperCase() + e.substring(1), Bo[t] = Bo[e]
			})
		});

		function Bg(e, t, n) {
			return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bo.hasOwnProperty(e) && Bo[e] ? ("" + t).trim() : t + "px"
		}

		function jg(e, t) {
			e = e.style;
			for (var n in t)
				if (t.hasOwnProperty(n)) {
					var r = n.indexOf("--") === 0,
						i = Bg(n, t[n], r);
					n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
				}
		}
		var $k = he({
			menuitem: !0
		}, {
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0
		});

		function Cf(e, t) {
			if (t) {
				if ($k[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
				if (t.dangerouslySetInnerHTML != null) {
					if (t.children != null) throw Error(M(60));
					if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61))
				}
				if (t.style != null && typeof t.style != "object") throw Error(M(62))
			}
		}

		function Ef(e, t) {
			if (e.indexOf("-") === -1) return typeof t.is == "string";
			switch (e) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					return !1;
				default:
					return !0
			}
		}
		var Pf = null;

		function fp(e) {
			return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
		}
		var Tf = null,
			gi = null,
			yi = null;

		function Dh(e) {
			if (e = ds(e)) {
				if (typeof Tf != "function") throw Error(M(280));
				var t = e.stateNode;
				t && (t = ma(t), Tf(e.stateNode, e.type, t))
			}
		}

		function Ug(e) {
			gi ? yi ? yi.push(e) : yi = [e] : gi = e
		}

		function Hg() {
			if (gi) {
				var e = gi,
					t = yi;
				if (yi = gi = null, Dh(e), t)
					for (e = 0; e < t.length; e++) Dh(t[e])
			}
		}

		function Wg(e, t) {
			return e(t)
		}

		function $g() {}
		var Gc = !1;

		function Kg(e, t, n) {
			if (Gc) return e(t, n);
			Gc = !0;
			try {
				return Wg(e, t, n)
			} finally {
				Gc = !1, (gi !== null || yi !== null) && ($g(), Hg())
			}
		}

		function qo(e, t) {
			var n = e.stateNode;
			if (n === null) return null;
			var r = ma(n);
			if (r === null) return null;
			n = r[t];
			e: switch (t) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter":
					(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
					break e;
				default:
					e = !1
			}
			if (e) return null;
			if (n && typeof n != "function") throw Error(M(231, t, typeof n));
			return n
		}
		var Af = !1;
		if (dn) try {
			ti = {}, Object.defineProperty(ti, "passive", {
				get: function() {
					Af = !0
				}
			}), window.addEventListener("test", ti, ti), window.removeEventListener("test", ti, ti)
		} catch {
			Af = !1
		}
		var ti;

		function Kk(e, t, n, r, i, o, s, l, a) {
			var u = Array.prototype.slice.call(arguments, 3);
			try {
				t.apply(n, u)
			} catch (c) {
				this.onError(c)
			}
		}
		var jo = !1,
			Bl = null,
			jl = !1,
			If = null,
			Gk = {
				onError: function(e) {
					jo = !0, Bl = e
				}
			};

		function Yk(e, t, n, r, i, o, s, l, a) {
			jo = !1, Bl = null, Kk.apply(Gk, arguments)
		}

		function Qk(e, t, n, r, i, o, s, l, a) {
			if (Yk.apply(this, arguments), jo) {
				if (jo) {
					var u = Bl;
					jo = !1, Bl = null
				} else throw Error(M(198));
				jl || (jl = !0, If = u)
			}
		}

		function Vr(e) {
			var t = e,
				n = e;
			if (e.alternate)
				for (; t.return;) t = t.return;
			else {
				e = t;
				do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
			}
			return t.tag === 3 ? n : null
		}

		function Gg(e) {
			if (e.tag === 13) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
			}
			return null
		}

		function Rh(e) {
			if (Vr(e) !== e) throw Error(M(188))
		}

		function Xk(e) {
			var t = e.alternate;
			if (!t) {
				if (t = Vr(e), t === null) throw Error(M(188));
				return t !== e ? null : e
			}
			for (var n = e, r = t;;) {
				var i = n.return;
				if (i === null) break;
				var o = i.alternate;
				if (o === null) {
					if (r = i.return, r !== null) {
						n = r;
						continue
					}
					break
				}
				if (i.child === o.child) {
					for (o = i.child; o;) {
						if (o === n) return Rh(i), e;
						if (o === r) return Rh(i), t;
						o = o.sibling
					}
					throw Error(M(188))
				}
				if (n.return !== r.return) n = i, r = o;
				else {
					for (var s = !1, l = i.child; l;) {
						if (l === n) {
							s = !0, n = i, r = o;
							break
						}
						if (l === r) {
							s = !0, r = i, n = o;
							break
						}
						l = l.sibling
					}
					if (!s) {
						for (l = o.child; l;) {
							if (l === n) {
								s = !0, n = o, r = i;
								break
							}
							if (l === r) {
								s = !0, r = o, n = i;
								break
							}
							l = l.sibling
						}
						if (!s) throw Error(M(189))
					}
				}
				if (n.alternate !== r) throw Error(M(190))
			}
			if (n.tag !== 3) throw Error(M(188));
			return n.stateNode.current === n ? e : t
		}

		function Yg(e) {
			return e = Xk(e), e !== null ? Qg(e) : null
		}

		function Qg(e) {
			if (e.tag === 5 || e.tag === 6) return e;
			for (e = e.child; e !== null;) {
				var t = Qg(e);
				if (t !== null) return t;
				e = e.sibling
			}
			return null
		}
		var Xg = vt.unstable_scheduleCallback,
			Nh = vt.unstable_cancelCallback,
			qk = vt.unstable_shouldYield,
			Zk = vt.unstable_requestPaint,
			ve = vt.unstable_now,
			Jk = vt.unstable_getCurrentPriorityLevel,
			pp = vt.unstable_ImmediatePriority,
			qg = vt.unstable_UserBlockingPriority,
			Ul = vt.unstable_NormalPriority,
			eC = vt.unstable_LowPriority,
			Zg = vt.unstable_IdlePriority,
			ua = null,
			Jt = null;

		function tC(e) {
			if (Jt && typeof Jt.onCommitFiberRoot == "function") try {
				Jt.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128)
			} catch {}
		}
		var Ut = Math.clz32 ? Math.clz32 : iC,
			nC = Math.log,
			rC = Math.LN2;

		function iC(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (nC(e) / rC | 0) | 0
		}
		var ml = 64,
			dl = 4194304;

		function zo(e) {
			switch (e & -e) {
				case 1:
					return 1;
				case 2:
					return 2;
				case 4:
					return 4;
				case 8:
					return 8;
				case 16:
					return 16;
				case 32:
					return 32;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
					return e & 4194240;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					return e & 130023424;
				case 134217728:
					return 134217728;
				case 268435456:
					return 268435456;
				case 536870912:
					return 536870912;
				case 1073741824:
					return 1073741824;
				default:
					return e
			}
		}

		function Hl(e, t) {
			var n = e.pendingLanes;
			if (n === 0) return 0;
			var r = 0,
				i = e.suspendedLanes,
				o = e.pingedLanes,
				s = n & 268435455;
			if (s !== 0) {
				var l = s & ~i;
				l !== 0 ? r = zo(l) : (o &= s, o !== 0 && (r = zo(o)))
			} else s = n & ~i, s !== 0 ? r = zo(s) : o !== 0 && (r = zo(o));
			if (r === 0) return 0;
			if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
			if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
				for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ut(t), i = 1 << n, r |= e[n], t &= ~i;
			return r
		}

		function oC(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 4:
					return t + 250;
				case 8:
				case 16:
				case 32:
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
					return t + 5e3;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					return -1;
				case 134217728:
				case 268435456:
				case 536870912:
				case 1073741824:
					return -1;
				default:
					return -1
			}
		}

		function sC(e, t) {
			for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
				var s = 31 - Ut(o),
					l = 1 << s,
					a = i[s];
				a === -1 ? (!(l & n) || l & r) && (i[s] = oC(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l
			}
		}

		function Lf(e) {
			return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
		}

		function Jg() {
			var e = ml;
			return ml <<= 1, !(ml & 4194240) && (ml = 64), e
		}

		function Yc(e) {
			for (var t = [], n = 0; 31 > n; n++) t.push(e);
			return t
		}

		function ps(e, t, n) {
			e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ut(t), e[t] = n
		}

		function lC(e, t) {
			var n = e.pendingLanes & ~t;
			e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
			var r = e.eventTimes;
			for (e = e.expirationTimes; 0 < n;) {
				var i = 31 - Ut(n),
					o = 1 << i;
				t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
			}
		}

		function mp(e, t) {
			var n = e.entangledLanes |= t;
			for (e = e.entanglements; n;) {
				var r = 31 - Ut(n),
					i = 1 << r;
				i & t | e[r] & t && (e[r] |= t), n &= ~i
			}
		}
		var J = 0;

		function ey(e) {
			return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
		}
		var ty, dp, ny, ry, iy, Mf = !1,
			hl = [],
			_n = null,
			zn = null,
			Fn = null,
			Zo = new Map,
			Jo = new Map,
			Nn = [],
			aC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

		function Vh(e, t) {
			switch (e) {
				case "focusin":
				case "focusout":
					_n = null;
					break;
				case "dragenter":
				case "dragleave":
					zn = null;
					break;
				case "mouseover":
				case "mouseout":
					Fn = null;
					break;
				case "pointerover":
				case "pointerout":
					Zo.delete(t.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture":
					Jo.delete(t.pointerId)
			}
		}

		function Lo(e, t, n, r, i, o) {
			return e === null || e.nativeEvent !== o ? (e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i]
			}, t !== null && (t = ds(t), t !== null && dp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
		}

		function uC(e, t, n, r, i) {
			switch (t) {
				case "focusin":
					return _n = Lo(_n, e, t, n, r, i), !0;
				case "dragenter":
					return zn = Lo(zn, e, t, n, r, i), !0;
				case "mouseover":
					return Fn = Lo(Fn, e, t, n, r, i), !0;
				case "pointerover":
					var o = i.pointerId;
					return Zo.set(o, Lo(Zo.get(o) || null, e, t, n, r, i)), !0;
				case "gotpointercapture":
					return o = i.pointerId, Jo.set(o, Lo(Jo.get(o) || null, e, t, n, r, i)), !0
			}
			return !1
		}

		function oy(e) {
			var t = Cr(e.target);
			if (t !== null) {
				var n = Vr(t);
				if (n !== null) {
					if (t = n.tag, t === 13) {
						if (t = Gg(n), t !== null) {
							e.blockedOn = t, iy(e.priority, function() {
								ny(n)
							});
							return
						}
					} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
						e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
						return
					}
				}
			}
			e.blockedOn = null
		}

		function Ll(e) {
			if (e.blockedOn !== null) return !1;
			for (var t = e.targetContainers; 0 < t.length;) {
				var n = Df(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
				if (n === null) {
					n = e.nativeEvent;
					var r = new n.constructor(n.type, n);
					Pf = r, n.target.dispatchEvent(r), Pf = null
				} else return t = ds(n), t !== null && dp(t), e.blockedOn = n, !1;
				t.shift()
			}
			return !0
		}

		function Oh(e, t, n) {
			Ll(e) && n.delete(t)
		}

		function cC() {
			Mf = !1, _n !== null && Ll(_n) && (_n = null), zn !== null && Ll(zn) && (zn = null), Fn !== null && Ll(Fn) && (Fn = null), Zo.forEach(Oh), Jo.forEach(Oh)
		}

		function Mo(e, t) {
			e.blockedOn === t && (e.blockedOn = null, Mf || (Mf = !0, vt.unstable_scheduleCallback(vt.unstable_NormalPriority, cC)))
		}

		function es(e) {
			function t(i) {
				return Mo(i, e)
			}
			if (0 < hl.length) {
				Mo(hl[0], e);
				for (var n = 1; n < hl.length; n++) {
					var r = hl[n];
					r.blockedOn === e && (r.blockedOn = null)
				}
			}
			for (_n !== null && Mo(_n, e), zn !== null && Mo(zn, e), Fn !== null && Mo(Fn, e), Zo.forEach(t), Jo.forEach(t), n = 0; n < Nn.length; n++) r = Nn[n], r.blockedOn === e && (r.blockedOn = null);
			for (; 0 < Nn.length && (n = Nn[0], n.blockedOn === null);) oy(n), n.blockedOn === null && Nn.shift()
		}
		var vi = vn.ReactCurrentBatchConfig,
			Wl = !0;

		function fC(e, t, n, r) {
			var i = J,
				o = vi.transition;
			vi.transition = null;
			try {
				J = 1, hp(e, t, n, r)
			} finally {
				J = i, vi.transition = o
			}
		}

		function pC(e, t, n, r) {
			var i = J,
				o = vi.transition;
			vi.transition = null;
			try {
				J = 4, hp(e, t, n, r)
			} finally {
				J = i, vi.transition = o
			}
		}

		function hp(e, t, n, r) {
			if (Wl) {
				var i = Df(e, t, n, r);
				if (i === null) tf(e, t, r, $l, n), Vh(e, r);
				else if (uC(i, e, t, n, r)) r.stopPropagation();
				else if (Vh(e, r), t & 4 && -1 < aC.indexOf(e)) {
					for (; i !== null;) {
						var o = ds(i);
						if (o !== null && ty(o), o = Df(e, t, n, r), o === null && tf(e, t, r, $l, n), o === i) break;
						i = o
					}
					i !== null && r.stopPropagation()
				} else tf(e, t, r, null, n)
			}
		}
		var $l = null;

		function Df(e, t, n, r) {
			if ($l = null, e = fp(r), e = Cr(e), e !== null)
				if (t = Vr(e), t === null) e = null;
				else if (n = t.tag, n === 13) {
				if (e = Gg(t), e !== null) return e;
				e = null
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null
			} else t !== e && (e = null);
			return $l = e, null
		}

		function sy(e) {
			switch (e) {
				case "cancel":
				case "click":
				case "close":
				case "contextmenu":
				case "copy":
				case "cut":
				case "auxclick":
				case "dblclick":
				case "dragend":
				case "dragstart":
				case "drop":
				case "focusin":
				case "focusout":
				case "input":
				case "invalid":
				case "keydown":
				case "keypress":
				case "keyup":
				case "mousedown":
				case "mouseup":
				case "paste":
				case "pause":
				case "play":
				case "pointercancel":
				case "pointerdown":
				case "pointerup":
				case "ratechange":
				case "reset":
				case "resize":
				case "seeked":
				case "submit":
				case "touchcancel":
				case "touchend":
				case "touchstart":
				case "volumechange":
				case "change":
				case "selectionchange":
				case "textInput":
				case "compositionstart":
				case "compositionend":
				case "compositionupdate":
				case "beforeblur":
				case "afterblur":
				case "beforeinput":
				case "blur":
				case "fullscreenchange":
				case "focus":
				case "hashchange":
				case "popstate":
				case "select":
				case "selectstart":
					return 1;
				case "drag":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "mousemove":
				case "mouseout":
				case "mouseover":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "scroll":
				case "toggle":
				case "touchmove":
				case "wheel":
				case "mouseenter":
				case "mouseleave":
				case "pointerenter":
				case "pointerleave":
					return 4;
				case "message":
					switch (Jk()) {
						case pp:
							return 1;
						case qg:
							return 4;
						case Ul:
						case eC:
							return 16;
						case Zg:
							return 536870912;
						default:
							return 16
					}
				default:
					return 16
			}
		}
		var On = null,
			gp = null,
			Ml = null;

		function ly() {
			if (Ml) return Ml;
			var e, t = gp,
				n = t.length,
				r, i = "value" in On ? On.value : On.textContent,
				o = i.length;
			for (e = 0; e < n && t[e] === i[e]; e++);
			var s = n - e;
			for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
			return Ml = i.slice(e, 1 < r ? 1 - r : void 0)
		}

		function Dl(e) {
			var t = e.keyCode;
			return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
		}

		function gl() {
			return !0
		}

		function bh() {
			return !1
		}

		function xt(e) {
			function t(n, r, i, o, s) {
				this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
				for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
				return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gl : bh, this.isPropagationStopped = bh, this
			}
			return he(t.prototype, {
				preventDefault: function() {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gl)
				},
				stopPropagation: function() {
					var n = this.nativeEvent;
					n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gl)
				},
				persist: function() {},
				isPersistent: gl
			}), t
		}
		var Ii = {
				eventPhase: 0,
				bubbles: 0,
				cancelable: 0,
				timeStamp: function(e) {
					return e.timeStamp || Date.now()
				},
				defaultPrevented: 0,
				isTrusted: 0
			},
			yp = xt(Ii),
			ms = he({}, Ii, {
				view: 0,
				detail: 0
			}),
			mC = xt(ms),
			Qc, Xc, Do, ca = he({}, ms, {
				screenX: 0,
				screenY: 0,
				clientX: 0,
				clientY: 0,
				pageX: 0,
				pageY: 0,
				ctrlKey: 0,
				shiftKey: 0,
				altKey: 0,
				metaKey: 0,
				getModifierState: vp,
				button: 0,
				buttons: 0,
				relatedTarget: function(e) {
					return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
				},
				movementX: function(e) {
					return "movementX" in e ? e.movementX : (e !== Do && (Do && e.type === "mousemove" ? (Qc = e.screenX - Do.screenX, Xc = e.screenY - Do.screenY) : Xc = Qc = 0, Do = e), Qc)
				},
				movementY: function(e) {
					return "movementY" in e ? e.movementY : Xc
				}
			}),
			_h = xt(ca),
			dC = he({}, ca, {
				dataTransfer: 0
			}),
			hC = xt(dC),
			gC = he({}, ms, {
				relatedTarget: 0
			}),
			qc = xt(gC),
			yC = he({}, Ii, {
				animationName: 0,
				elapsedTime: 0,
				pseudoElement: 0
			}),
			vC = xt(yC),
			xC = he({}, Ii, {
				clipboardData: function(e) {
					return "clipboardData" in e ? e.clipboardData : window.clipboardData
				}
			}),
			wC = xt(xC),
			SC = he({}, Ii, {
				data: 0
			}),
			zh = xt(SC),
			kC = {
				Esc: "Escape",
				Spacebar: " ",
				Left: "ArrowLeft",
				Up: "ArrowUp",
				Right: "ArrowRight",
				Down: "ArrowDown",
				Del: "Delete",
				Win: "OS",
				Menu: "ContextMenu",
				Apps: "ContextMenu",
				Scroll: "ScrollLock",
				MozPrintableKey: "Unidentified"
			},
			CC = {
				8: "Backspace",
				9: "Tab",
				12: "Clear",
				13: "Enter",
				16: "Shift",
				17: "Control",
				18: "Alt",
				19: "Pause",
				20: "CapsLock",
				27: "Escape",
				32: " ",
				33: "PageUp",
				34: "PageDown",
				35: "End",
				36: "Home",
				37: "ArrowLeft",
				38: "ArrowUp",
				39: "ArrowRight",
				40: "ArrowDown",
				45: "Insert",
				46: "Delete",
				112: "F1",
				113: "F2",
				114: "F3",
				115: "F4",
				116: "F5",
				117: "F6",
				118: "F7",
				119: "F8",
				120: "F9",
				121: "F10",
				122: "F11",
				123: "F12",
				144: "NumLock",
				145: "ScrollLock",
				224: "Meta"
			},
			EC = {
				Alt: "altKey",
				Control: "ctrlKey",
				Meta: "metaKey",
				Shift: "shiftKey"
			};

		function PC(e) {
			var t = this.nativeEvent;
			return t.getModifierState ? t.getModifierState(e) : (e = EC[e]) ? !!t[e] : !1
		}

		function vp() {
			return PC
		}
		var TC = he({}, ms, {
				key: function(e) {
					if (e.key) {
						var t = kC[e.key] || e.key;
						if (t !== "Unidentified") return t
					}
					return e.type === "keypress" ? (e = Dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? CC[e.keyCode] || "Unidentified" : ""
				},
				code: 0,
				location: 0,
				ctrlKey: 0,
				shiftKey: 0,
				altKey: 0,
				metaKey: 0,
				repeat: 0,
				locale: 0,
				getModifierState: vp,
				charCode: function(e) {
					return e.type === "keypress" ? Dl(e) : 0
				},
				keyCode: function(e) {
					return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
				},
				which: function(e) {
					return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
				}
			}),
			AC = xt(TC),
			IC = he({}, ca, {
				pointerId: 0,
				width: 0,
				height: 0,
				pressure: 0,
				tangentialPressure: 0,
				tiltX: 0,
				tiltY: 0,
				twist: 0,
				pointerType: 0,
				isPrimary: 0
			}),
			Fh = xt(IC),
			LC = he({}, ms, {
				touches: 0,
				targetTouches: 0,
				changedTouches: 0,
				altKey: 0,
				metaKey: 0,
				ctrlKey: 0,
				shiftKey: 0,
				getModifierState: vp
			}),
			MC = xt(LC),
			DC = he({}, Ii, {
				propertyName: 0,
				elapsedTime: 0,
				pseudoElement: 0
			}),
			RC = xt(DC),
			NC = he({}, ca, {
				deltaX: function(e) {
					return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
				},
				deltaY: function(e) {
					return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
				},
				deltaZ: 0,
				deltaMode: 0
			}),
			VC = xt(NC),
			OC = [9, 13, 27, 32],
			xp = dn && "CompositionEvent" in window,
			Uo = null;
		dn && "documentMode" in document && (Uo = document.documentMode);
		var bC = dn && "TextEvent" in window && !Uo,
			ay = dn && (!xp || Uo && 8 < Uo && 11 >= Uo),
			Bh = " ",
			jh = !1;

		function uy(e, t) {
			switch (e) {
				case "keyup":
					return OC.indexOf(t.keyCode) !== -1;
				case "keydown":
					return t.keyCode !== 229;
				case "keypress":
				case "mousedown":
				case "focusout":
					return !0;
				default:
					return !1
			}
		}

		function cy(e) {
			return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
		}
		var oi = !1;

		function _C(e, t) {
			switch (e) {
				case "compositionend":
					return cy(t);
				case "keypress":
					return t.which !== 32 ? null : (jh = !0, Bh);
				case "textInput":
					return e = t.data, e === Bh && jh ? null : e;
				default:
					return null
			}
		}

		function zC(e, t) {
			if (oi) return e === "compositionend" || !xp && uy(e, t) ? (e = ly(), Ml = gp = On = null, oi = !1, e) : null;
			switch (e) {
				case "paste":
					return null;
				case "keypress":
					if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
						if (t.char && 1 < t.char.length) return t.char;
						if (t.which) return String.fromCharCode(t.which)
					}
					return null;
				case "compositionend":
					return ay && t.locale !== "ko" ? null : t.data;
				default:
					return null
			}
		}
		var FC = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		};

		function Uh(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t === "input" ? !!FC[e.type] : t === "textarea"
		}

		function fy(e, t, n, r) {
			Ug(r), t = Kl(t, "onChange"), 0 < t.length && (n = new yp("onChange", "change", null, n, r), e.push({
				event: n,
				listeners: t
			}))
		}
		var Ho = null,
			ts = null;

		function BC(e) {
			ky(e, 0)
		}

		function fa(e) {
			var t = ai(e);
			if (Og(t)) return e
		}

		function jC(e, t) {
			if (e === "change") return t
		}
		var py = !1;
		dn && (dn ? (vl = "oninput" in document, vl || (Zc = document.createElement("div"), Zc.setAttribute("oninput", "return;"), vl = typeof Zc.oninput == "function"), yl = vl) : yl = !1, py = yl && (!document.documentMode || 9 < document.documentMode));
		var yl, vl, Zc;

		function Hh() {
			Ho && (Ho.detachEvent("onpropertychange", my), ts = Ho = null)
		}

		function my(e) {
			if (e.propertyName === "value" && fa(ts)) {
				var t = [];
				fy(t, ts, e, fp(e)), Kg(BC, t)
			}
		}

		function UC(e, t, n) {
			e === "focusin" ? (Hh(), Ho = t, ts = n, Ho.attachEvent("onpropertychange", my)) : e === "focusout" && Hh()
		}

		function HC(e) {
			if (e === "selectionchange" || e === "keyup" || e === "keydown") return fa(ts)
		}

		function WC(e, t) {
			if (e === "click") return fa(t)
		}

		function $C(e, t) {
			if (e === "input" || e === "change") return fa(t)
		}

		function KC(e, t) {
			return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
		}
		var Wt = typeof Object.is == "function" ? Object.is : KC;

		function ns(e, t) {
			if (Wt(e, t)) return !0;
			if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
			var n = Object.keys(e),
				r = Object.keys(t);
			if (n.length !== r.length) return !1;
			for (r = 0; r < n.length; r++) {
				var i = n[r];
				if (!mf.call(t, i) || !Wt(e[i], t[i])) return !1
			}
			return !0
		}

		function Wh(e) {
			for (; e && e.firstChild;) e = e.firstChild;
			return e
		}

		function $h(e, t) {
			var n = Wh(e);
			e = 0;
			for (var r; n;) {
				if (n.nodeType === 3) {
					if (r = e + n.textContent.length, e <= t && r >= t) return {
						node: n,
						offset: t - e
					};
					e = r
				}
				e: {
					for (; n;) {
						if (n.nextSibling) {
							n = n.nextSibling;
							break e
						}
						n = n.parentNode
					}
					n = void 0
				}
				n = Wh(n)
			}
		}

		function dy(e, t) {
			return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
		}

		function hy() {
			for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement;) {
				try {
					var n = typeof t.contentWindow.location.href == "string"
				} catch {
					n = !1
				}
				if (n) e = t.contentWindow;
				else break;
				t = Fl(e.document)
			}
			return t
		}

		function wp(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
		}

		function GC(e) {
			var t = hy(),
				n = e.focusedElem,
				r = e.selectionRange;
			if (t !== n && n && n.ownerDocument && dy(n.ownerDocument.documentElement, n)) {
				if (r !== null && wp(n)) {
					if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
					else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
						e = e.getSelection();
						var i = n.textContent.length,
							o = Math.min(r.start, i);
						r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = $h(n, o);
						var s = $h(n, r);
						i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
					}
				}
				for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
					element: e,
					left: e.scrollLeft,
					top: e.scrollTop
				});
				for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
			}
		}
		var YC = dn && "documentMode" in document && 11 >= document.documentMode,
			si = null,
			Rf = null,
			Wo = null,
			Nf = !1;

		function Kh(e, t, n) {
			var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
			Nf || si == null || si !== Fl(r) || (r = si, "selectionStart" in r && wp(r) ? r = {
				start: r.selectionStart,
				end: r.selectionEnd
			} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
				anchorNode: r.anchorNode,
				anchorOffset: r.anchorOffset,
				focusNode: r.focusNode,
				focusOffset: r.focusOffset
			}), Wo && ns(Wo, r) || (Wo = r, r = Kl(Rf, "onSelect"), 0 < r.length && (t = new yp("onSelect", "select", null, t, n), e.push({
				event: t,
				listeners: r
			}), t.target = si)))
		}

		function xl(e, t) {
			var n = {};
			return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
		}
		var li = {
				animationend: xl("Animation", "AnimationEnd"),
				animationiteration: xl("Animation", "AnimationIteration"),
				animationstart: xl("Animation", "AnimationStart"),
				transitionend: xl("Transition", "TransitionEnd")
			},
			Jc = {},
			gy = {};
		dn && (gy = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);

		function pa(e) {
			if (Jc[e]) return Jc[e];
			if (!li[e]) return e;
			var t = li[e],
				n;
			for (n in t)
				if (t.hasOwnProperty(n) && n in gy) return Jc[e] = t[n];
			return e
		}
		var yy = pa("animationend"),
			vy = pa("animationiteration"),
			xy = pa("animationstart"),
			wy = pa("transitionend"),
			Sy = new Map,
			Gh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

		function Gn(e, t) {
			Sy.set(e, t), Nr(t, [e])
		}
		for (wl = 0; wl < Gh.length; wl++) Sl = Gh[wl], Yh = Sl.toLowerCase(), Qh = Sl[0].toUpperCase() + Sl.slice(1), Gn(Yh, "on" + Qh);
		var Sl, Yh, Qh, wl;
		Gn(yy, "onAnimationEnd");
		Gn(vy, "onAnimationIteration");
		Gn(xy, "onAnimationStart");
		Gn("dblclick", "onDoubleClick");
		Gn("focusin", "onFocus");
		Gn("focusout", "onBlur");
		Gn(wy, "onTransitionEnd");
		Si("onMouseEnter", ["mouseout", "mouseover"]);
		Si("onMouseLeave", ["mouseout", "mouseover"]);
		Si("onPointerEnter", ["pointerout", "pointerover"]);
		Si("onPointerLeave", ["pointerout", "pointerover"]);
		Nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
		Nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
		Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
		Nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
		Nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
		Nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var Fo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
			QC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));

		function Xh(e, t, n) {
			var r = e.type || "unknown-event";
			e.currentTarget = n, Qk(r, t, void 0, e), e.currentTarget = null
		}

		function ky(e, t) {
			t = (t & 4) !== 0;
			for (var n = 0; n < e.length; n++) {
				var r = e[n],
					i = r.event;
				r = r.listeners;
				e: {
					var o = void 0;
					if (t)
						for (var s = r.length - 1; 0 <= s; s--) {
							var l = r[s],
								a = l.instance,
								u = l.currentTarget;
							if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
							Xh(i, l, u), o = a
						} else
							for (s = 0; s < r.length; s++) {
								if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
								Xh(i, l, u), o = a
							}
				}
			}
			if (jl) throw e = If, jl = !1, If = null, e
		}

		function le(e, t) {
			var n = t[zf];
			n === void 0 && (n = t[zf] = new Set);
			var r = e + "__bubble";
			n.has(r) || (Cy(t, e, 2, !1), n.add(r))
		}

		function ef(e, t, n) {
			var r = 0;
			t && (r |= 4), Cy(n, e, r, t)
		}
		var kl = "_reactListening" + Math.random().toString(36).slice(2);

		function rs(e) {
			if (!e[kl]) {
				e[kl] = !0, Mg.forEach(function(n) {
					n !== "selectionchange" && (QC.has(n) || ef(n, !1, e), ef(n, !0, e))
				});
				var t = e.nodeType === 9 ? e : e.ownerDocument;
				t === null || t[kl] || (t[kl] = !0, ef("selectionchange", !1, t))
			}
		}

		function Cy(e, t, n, r) {
			switch (sy(t)) {
				case 1:
					var i = fC;
					break;
				case 4:
					i = pC;
					break;
				default:
					i = hp
			}
			n = i.bind(null, t, n, e), i = void 0, !Af || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
				capture: !0,
				passive: i
			}) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
				passive: i
			}) : e.addEventListener(t, n, !1)
		}

		function tf(e, t, n, r, i) {
			var o = r;
			if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
				if (r === null) return;
				var s = r.tag;
				if (s === 3 || s === 4) {
					var l = r.stateNode.containerInfo;
					if (l === i || l.nodeType === 8 && l.parentNode === i) break;
					if (s === 4)
						for (s = r.return; s !== null;) {
							var a = s.tag;
							if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
							s = s.return
						}
					for (; l !== null;) {
						if (s = Cr(l), s === null) return;
						if (a = s.tag, a === 5 || a === 6) {
							r = o = s;
							continue e
						}
						l = l.parentNode
					}
				}
				r = r.return
			}
			Kg(function() {
				var u = o,
					c = fp(n),
					f = [];
				e: {
					var p = Sy.get(e);
					if (p !== void 0) {
						var m = yp,
							y = e;
						switch (e) {
							case "keypress":
								if (Dl(n) === 0) break e;
							case "keydown":
							case "keyup":
								m = AC;
								break;
							case "focusin":
								y = "focus", m = qc;
								break;
							case "focusout":
								y = "blur", m = qc;
								break;
							case "beforeblur":
							case "afterblur":
								m = qc;
								break;
							case "click":
								if (n.button === 2) break e;
							case "auxclick":
							case "dblclick":
							case "mousedown":
							case "mousemove":
							case "mouseup":
							case "mouseout":
							case "mouseover":
							case "contextmenu":
								m = _h;
								break;
							case "drag":
							case "dragend":
							case "dragenter":
							case "dragexit":
							case "dragleave":
							case "dragover":
							case "dragstart":
							case "drop":
								m = hC;
								break;
							case "touchcancel":
							case "touchend":
							case "touchmove":
							case "touchstart":
								m = MC;
								break;
							case yy:
							case vy:
							case xy:
								m = vC;
								break;
							case wy:
								m = RC;
								break;
							case "scroll":
								m = mC;
								break;
							case "wheel":
								m = VC;
								break;
							case "copy":
							case "cut":
							case "paste":
								m = wC;
								break;
							case "gotpointercapture":
							case "lostpointercapture":
							case "pointercancel":
							case "pointerdown":
							case "pointermove":
							case "pointerout":
							case "pointerover":
							case "pointerup":
								m = Fh
						}
						var v = (t & 4) !== 0,
							C = !v && e === "scroll",
							d = v ? p !== null ? p + "Capture" : null : p;
						v = [];
						for (var h = u, g; h !== null;) {
							g = h;
							var k = g.stateNode;
							if (g.tag === 5 && k !== null && (g = k, d !== null && (k = qo(h, d), k != null && v.push(is(h, k, g)))), C) break;
							h = h.return
						}
						0 < v.length && (p = new m(p, y, null, n, c), f.push({
							event: p,
							listeners: v
						}))
					}
				}
				if (!(t & 7)) {
					e: {
						if (p = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", p && n !== Pf && (y = n.relatedTarget || n.fromElement) && (Cr(y) || y[hn])) break e;
						if ((m || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, m ? (y = n.relatedTarget || n.toElement, m = u, y = y ? Cr(y) : null, y !== null && (C = Vr(y), y !== C || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = u), m !== y)) {
							if (v = _h, k = "onMouseLeave", d = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Fh, k = "onPointerLeave", d = "onPointerEnter", h = "pointer"), C = m == null ? p : ai(m), g = y == null ? p : ai(y), p = new v(k, h + "leave", m, n, c), p.target = C, p.relatedTarget = g, k = null, Cr(c) === u && (v = new v(d, h + "enter", y, n, c), v.target = g, v.relatedTarget = C, k = v), C = k, m && y) t: {
								for (v = m, d = y, h = 0, g = v; g; g = ni(g)) h++;
								for (g = 0, k = d; k; k = ni(k)) g++;
								for (; 0 < h - g;) v = ni(v),
								h--;
								for (; 0 < g - h;) d = ni(d),
								g--;
								for (; h--;) {
									if (v === d || d !== null && v === d.alternate) break t;
									v = ni(v), d = ni(d)
								}
								v = null
							}
							else v = null;
							m !== null && qh(f, p, m, v, !1), y !== null && C !== null && qh(f, C, y, v, !0)
						}
					}
					e: {
						if (p = u ? ai(u) : window, m = p.nodeName && p.nodeName.toLowerCase(), m === "select" || m === "input" && p.type === "file") var E = jC;
						else if (Uh(p))
							if (py) E = $C;
							else {
								E = HC;
								var x = UC
							}
						else(m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = WC);
						if (E && (E = E(e, u))) {
							fy(f, E, n, c);
							break e
						}
						x && x(e, p, u),
						e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && wf(p, "number", p.value)
					}
					switch (x = u ? ai(u) : window, e) {
						case "focusin":
							(Uh(x) || x.contentEditable === "true") && (si = x, Rf = u, Wo = null);
							break;
						case "focusout":
							Wo = Rf = si = null;
							break;
						case "mousedown":
							Nf = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							Nf = !1, Kh(f, n, c);
							break;
						case "selectionchange":
							if (YC) break;
						case "keydown":
						case "keyup":
							Kh(f, n, c)
					}
					var T;
					if (xp) e: {
						switch (e) {
							case "compositionstart":
								var I = "onCompositionStart";
								break e;
							case "compositionend":
								I = "onCompositionEnd";
								break e;
							case "compositionupdate":
								I = "onCompositionUpdate";
								break e
						}
						I = void 0
					}
					else oi ? uy(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");I && (ay && n.locale !== "ko" && (oi || I !== "onCompositionStart" ? I === "onCompositionEnd" && oi && (T = ly()) : (On = c, gp = "value" in On ? On.value : On.textContent, oi = !0)), x = Kl(u, I), 0 < x.length && (I = new zh(I, e, null, n, c), f.push({
						event: I,
						listeners: x
					}), T ? I.data = T : (T = cy(n), T !== null && (I.data = T)))),
					(T = bC ? _C(e, n) : zC(e, n)) && (u = Kl(u, "onBeforeInput"), 0 < u.length && (c = new zh("onBeforeInput", "beforeinput", null, n, c), f.push({
						event: c,
						listeners: u
					}), c.data = T))
				}
				ky(f, t)
			})
		}

		function is(e, t, n) {
			return {
				instance: e,
				listener: t,
				currentTarget: n
			}
		}

		function Kl(e, t) {
			for (var n = t + "Capture", r = []; e !== null;) {
				var i = e,
					o = i.stateNode;
				i.tag === 5 && o !== null && (i = o, o = qo(e, n), o != null && r.unshift(is(e, o, i)), o = qo(e, t), o != null && r.push(is(e, o, i))), e = e.return
			}
			return r
		}

		function ni(e) {
			if (e === null) return null;
			do e = e.return; while (e && e.tag !== 5);
			return e || null
		}

		function qh(e, t, n, r, i) {
			for (var o = t._reactName, s = []; n !== null && n !== r;) {
				var l = n,
					a = l.alternate,
					u = l.stateNode;
				if (a !== null && a === r) break;
				l.tag === 5 && u !== null && (l = u, i ? (a = qo(n, o), a != null && s.unshift(is(n, a, l))) : i || (a = qo(n, o), a != null && s.push(is(n, a, l)))), n = n.return
			}
			s.length !== 0 && e.push({
				event: t,
				listeners: s
			})
		}
		var XC = /\r\n?/g,
			qC = /\u0000|\uFFFD/g;

		function Zh(e) {
			return (typeof e == "string" ? e : "" + e).replace(XC, `
`).replace(qC, "")
		}

		function Cl(e, t, n) {
			if (t = Zh(t), Zh(e) !== t && n) throw Error(M(425))
		}

		function Gl() {}
		var Vf = null,
			Of = null;

		function bf(e, t) {
			return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
		}
		var _f = typeof setTimeout == "function" ? setTimeout : void 0,
			ZC = typeof clearTimeout == "function" ? clearTimeout : void 0,
			Jh = typeof Promise == "function" ? Promise : void 0,
			JC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jh < "u" ? function(e) {
				return Jh.resolve(null).then(e).catch(eE)
			} : _f;

		function eE(e) {
			setTimeout(function() {
				throw e
			})
		}

		function nf(e, t) {
			var n = t,
				r = 0;
			do {
				var i = n.nextSibling;
				if (e.removeChild(n), i && i.nodeType === 8)
					if (n = i.data, n === "/$") {
						if (r === 0) {
							e.removeChild(i), es(t);
							return
						}
						r--
					} else n !== "$" && n !== "$?" && n !== "$!" || r++;
				n = i
			} while (n);
			es(t)
		}

		function Bn(e) {
			for (; e != null; e = e.nextSibling) {
				var t = e.nodeType;
				if (t === 1 || t === 3) break;
				if (t === 8) {
					if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
					if (t === "/$") return null
				}
			}
			return e
		}

		function eg(e) {
			e = e.previousSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "$" || n === "$!" || n === "$?") {
						if (t === 0) return e;
						t--
					} else n === "/$" && t++
				}
				e = e.previousSibling
			}
			return null
		}
		var Li = Math.random().toString(36).slice(2),
			Zt = "__reactFiber$" + Li,
			os = "__reactProps$" + Li,
			hn = "__reactContainer$" + Li,
			zf = "__reactEvents$" + Li,
			tE = "__reactListeners$" + Li,
			nE = "__reactHandles$" + Li;

		function Cr(e) {
			var t = e[Zt];
			if (t) return t;
			for (var n = e.parentNode; n;) {
				if (t = n[hn] || n[Zt]) {
					if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
						for (e = eg(e); e !== null;) {
							if (n = e[Zt]) return n;
							e = eg(e)
						}
					return t
				}
				e = n, n = e.parentNode
			}
			return null
		}

		function ds(e) {
			return e = e[Zt] || e[hn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
		}

		function ai(e) {
			if (e.tag === 5 || e.tag === 6) return e.stateNode;
			throw Error(M(33))
		}

		function ma(e) {
			return e[os] || null
		}
		var Ff = [],
			ui = -1;

		function Yn(e) {
			return {
				current: e
			}
		}

		function ae(e) {
			0 > ui || (e.current = Ff[ui], Ff[ui] = null, ui--)
		}

		function ie(e, t) {
			ui++, Ff[ui] = e.current, e.current = t
		}
		var Kn = {},
			Fe = Yn(Kn),
			ot = Yn(!1),
			Ir = Kn;

		function ki(e, t) {
			var n = e.type.contextTypes;
			if (!n) return Kn;
			var r = e.stateNode;
			if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
			var i = {},
				o;
			for (o in n) i[o] = t[o];
			return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
		}

		function st(e) {
			return e = e.childContextTypes, e != null
		}

		function Yl() {
			ae(ot), ae(Fe)
		}

		function tg(e, t, n) {
			if (Fe.current !== Kn) throw Error(M(168));
			ie(Fe, t), ie(ot, n)
		}

		function Ey(e, t, n) {
			var r = e.stateNode;
			if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
			r = r.getChildContext();
			for (var i in r)
				if (!(i in t)) throw Error(M(108, Uk(e) || "Unknown", i));
			return he({}, n, r)
		}

		function Ql(e) {
			return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kn, Ir = Fe.current, ie(Fe, e), ie(ot, ot.current), !0
		}

		function ng(e, t, n) {
			var r = e.stateNode;
			if (!r) throw Error(M(169));
			n ? (e = Ey(e, t, Ir), r.__reactInternalMemoizedMergedChildContext = e, ae(ot), ae(Fe), ie(Fe, e)) : ae(ot), ie(ot, n)
		}
		var cn = null,
			da = !1,
			rf = !1;

		function Py(e) {
			cn === null ? cn = [e] : cn.push(e)
		}

		function rE(e) {
			da = !0, Py(e)
		}

		function Qn() {
			if (!rf && cn !== null) {
				rf = !0;
				var e = 0,
					t = J;
				try {
					var n = cn;
					for (J = 1; e < n.length; e++) {
						var r = n[e];
						do r = r(!0); while (r !== null)
					}
					cn = null, da = !1
				} catch (i) {
					throw cn !== null && (cn = cn.slice(e + 1)), Xg(pp, Qn), i
				} finally {
					J = t, rf = !1
				}
			}
			return null
		}
		var ci = [],
			fi = 0,
			Xl = null,
			ql = 0,
			At = [],
			It = 0,
			Lr = null,
			fn = 1,
			pn = "";

		function Sr(e, t) {
			ci[fi++] = ql, ci[fi++] = Xl, Xl = e, ql = t
		}

		function Ty(e, t, n) {
			At[It++] = fn, At[It++] = pn, At[It++] = Lr, Lr = e;
			var r = fn;
			e = pn;
			var i = 32 - Ut(r) - 1;
			r &= ~(1 << i), n += 1;
			var o = 32 - Ut(t) + i;
			if (30 < o) {
				var s = i - i % 5;
				o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, fn = 1 << 32 - Ut(t) + i | n << i | r, pn = o + e
			} else fn = 1 << o | n << i | r, pn = e
		}

		function Sp(e) {
			e.return !== null && (Sr(e, 1), Ty(e, 1, 0))
		}

		function kp(e) {
			for (; e === Xl;) Xl = ci[--fi], ci[fi] = null, ql = ci[--fi], ci[fi] = null;
			for (; e === Lr;) Lr = At[--It], At[It] = null, pn = At[--It], At[It] = null, fn = At[--It], At[It] = null
		}
		var yt = null,
			gt = null,
			fe = !1,
			jt = null;

		function Ay(e, t) {
			var n = Lt(5, null, null, 0);
			n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
		}

		function rg(e, t) {
			switch (e.tag) {
				case 5:
					var n = e.type;
					return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yt = e, gt = Bn(t.firstChild), !0) : !1;
				case 6:
					return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yt = e, gt = null, !0) : !1;
				case 13:
					return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lr !== null ? {
						id: fn,
						overflow: pn
					} : null, e.memoizedState = {
						dehydrated: t,
						treeContext: n,
						retryLane: 1073741824
					}, n = Lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, yt = e, gt = null, !0) : !1;
				default:
					return !1
			}
		}

		function Bf(e) {
			return (e.mode & 1) !== 0 && (e.flags & 128) === 0
		}

		function jf(e) {
			if (fe) {
				var t = gt;
				if (t) {
					var n = t;
					if (!rg(e, t)) {
						if (Bf(e)) throw Error(M(418));
						t = Bn(n.nextSibling);
						var r = yt;
						t && rg(e, t) ? Ay(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, yt = e)
					}
				} else {
					if (Bf(e)) throw Error(M(418));
					e.flags = e.flags & -4097 | 2, fe = !1, yt = e
				}
			}
		}

		function ig(e) {
			for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
			yt = e
		}

		function El(e) {
			if (e !== yt) return !1;
			if (!fe) return ig(e), fe = !0, !1;
			var t;
			if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bf(e.type, e.memoizedProps)), t && (t = gt)) {
				if (Bf(e)) throw Iy(), Error(M(418));
				for (; t;) Ay(e, t), t = Bn(t.nextSibling)
			}
			if (ig(e), e.tag === 13) {
				if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
				e: {
					for (e = e.nextSibling, t = 0; e;) {
						if (e.nodeType === 8) {
							var n = e.data;
							if (n === "/$") {
								if (t === 0) {
									gt = Bn(e.nextSibling);
									break e
								}
								t--
							} else n !== "$" && n !== "$!" && n !== "$?" || t++
						}
						e = e.nextSibling
					}
					gt = null
				}
			} else gt = yt ? Bn(e.stateNode.nextSibling) : null;
			return !0
		}

		function Iy() {
			for (var e = gt; e;) e = Bn(e.nextSibling)
		}

		function Ci() {
			gt = yt = null, fe = !1
		}

		function Cp(e) {
			jt === null ? jt = [e] : jt.push(e)
		}
		var iE = vn.ReactCurrentBatchConfig;

		function Ro(e, t, n) {
			if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
				if (n._owner) {
					if (n = n._owner, n) {
						if (n.tag !== 1) throw Error(M(309));
						var r = n.stateNode
					}
					if (!r) throw Error(M(147, e));
					var i = r,
						o = "" + e;
					return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
						var l = i.refs;
						s === null ? delete l[o] : l[o] = s
					}, t._stringRef = o, t)
				}
				if (typeof e != "string") throw Error(M(284));
				if (!n._owner) throw Error(M(290, e))
			}
			return e
		}

		function Pl(e, t) {
			throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
		}

		function og(e) {
			var t = e._init;
			return t(e._payload)
		}

		function Ly(e) {
			function t(d, h) {
				if (e) {
					var g = d.deletions;
					g === null ? (d.deletions = [h], d.flags |= 16) : g.push(h)
				}
			}

			function n(d, h) {
				if (!e) return null;
				for (; h !== null;) t(d, h), h = h.sibling;
				return null
			}

			function r(d, h) {
				for (d = new Map; h !== null;) h.key !== null ? d.set(h.key, h) : d.set(h.index, h), h = h.sibling;
				return d
			}

			function i(d, h) {
				return d = Wn(d, h), d.index = 0, d.sibling = null, d
			}

			function o(d, h, g) {
				return d.index = g, e ? (g = d.alternate, g !== null ? (g = g.index, g < h ? (d.flags |= 2, h) : g) : (d.flags |= 2, h)) : (d.flags |= 1048576, h)
			}

			function s(d) {
				return e && d.alternate === null && (d.flags |= 2), d
			}

			function l(d, h, g, k) {
				return h === null || h.tag !== 6 ? (h = ff(g, d.mode, k), h.return = d, h) : (h = i(h, g), h.return = d, h)
			}

			function a(d, h, g, k) {
				var E = g.type;
				return E === ii ? c(d, h, g.props.children, k, g.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Dn && og(E) === h.type) ? (k = i(h, g.props), k.ref = Ro(d, h, g), k.return = d, k) : (k = zl(g.type, g.key, g.props, null, d.mode, k), k.ref = Ro(d, h, g), k.return = d, k)
			}

			function u(d, h, g, k) {
				return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = pf(g, d.mode, k), h.return = d, h) : (h = i(h, g.children || []), h.return = d, h)
			}

			function c(d, h, g, k, E) {
				return h === null || h.tag !== 7 ? (h = Ar(g, d.mode, k, E), h.return = d, h) : (h = i(h, g), h.return = d, h)
			}

			function f(d, h, g) {
				if (typeof h == "string" && h !== "" || typeof h == "number") return h = ff("" + h, d.mode, g), h.return = d, h;
				if (typeof h == "object" && h !== null) {
					switch (h.$$typeof) {
						case cl:
							return g = zl(h.type, h.key, h.props, null, d.mode, g), g.ref = Ro(d, null, h), g.return = d, g;
						case ri:
							return h = pf(h, d.mode, g), h.return = d, h;
						case Dn:
							var k = h._init;
							return f(d, k(h._payload), g)
					}
					if (_o(h) || Io(h)) return h = Ar(h, d.mode, g, null), h.return = d, h;
					Pl(d, h)
				}
				return null
			}

			function p(d, h, g, k) {
				var E = h !== null ? h.key : null;
				if (typeof g == "string" && g !== "" || typeof g == "number") return E !== null ? null : l(d, h, "" + g, k);
				if (typeof g == "object" && g !== null) {
					switch (g.$$typeof) {
						case cl:
							return g.key === E ? a(d, h, g, k) : null;
						case ri:
							return g.key === E ? u(d, h, g, k) : null;
						case Dn:
							return E = g._init, p(d, h, E(g._payload), k)
					}
					if (_o(g) || Io(g)) return E !== null ? null : c(d, h, g, k, null);
					Pl(d, g)
				}
				return null
			}

			function m(d, h, g, k, E) {
				if (typeof k == "string" && k !== "" || typeof k == "number") return d = d.get(g) || null, l(h, d, "" + k, E);
				if (typeof k == "object" && k !== null) {
					switch (k.$$typeof) {
						case cl:
							return d = d.get(k.key === null ? g : k.key) || null, a(h, d, k, E);
						case ri:
							return d = d.get(k.key === null ? g : k.key) || null, u(h, d, k, E);
						case Dn:
							var x = k._init;
							return m(d, h, g, x(k._payload), E)
					}
					if (_o(k) || Io(k)) return d = d.get(g) || null, c(h, d, k, E, null);
					Pl(h, k)
				}
				return null
			}

			function y(d, h, g, k) {
				for (var E = null, x = null, T = h, I = h = 0, O = null; T !== null && I < g.length; I++) {
					T.index > I ? (O = T, T = null) : O = T.sibling;
					var R = p(d, T, g[I], k);
					if (R === null) {
						T === null && (T = O);
						break
					}
					e && T && R.alternate === null && t(d, T), h = o(R, h, I), x === null ? E = R : x.sibling = R, x = R, T = O
				}
				if (I === g.length) return n(d, T), fe && Sr(d, I), E;
				if (T === null) {
					for (; I < g.length; I++) T = f(d, g[I], k), T !== null && (h = o(T, h, I), x === null ? E = T : x.sibling = T, x = T);
					return fe && Sr(d, I), E
				}
				for (T = r(d, T); I < g.length; I++) O = m(T, d, I, g[I], k), O !== null && (e && O.alternate !== null && T.delete(O.key === null ? I : O.key), h = o(O, h, I), x === null ? E = O : x.sibling = O, x = O);
				return e && T.forEach(function(Z) {
					return t(d, Z)
				}), fe && Sr(d, I), E
			}

			function v(d, h, g, k) {
				var E = Io(g);
				if (typeof E != "function") throw Error(M(150));
				if (g = E.call(g), g == null) throw Error(M(151));
				for (var x = E = null, T = h, I = h = 0, O = null, R = g.next(); T !== null && !R.done; I++, R = g.next()) {
					T.index > I ? (O = T, T = null) : O = T.sibling;
					var Z = p(d, T, R.value, k);
					if (Z === null) {
						T === null && (T = O);
						break
					}
					e && T && Z.alternate === null && t(d, T), h = o(Z, h, I), x === null ? E = Z : x.sibling = Z, x = Z, T = O
				}
				if (R.done) return n(d, T), fe && Sr(d, I), E;
				if (T === null) {
					for (; !R.done; I++, R = g.next()) R = f(d, R.value, k), R !== null && (h = o(R, h, I), x === null ? E = R : x.sibling = R, x = R);
					return fe && Sr(d, I), E
				}
				for (T = r(d, T); !R.done; I++, R = g.next()) R = m(T, d, I, R.value, k), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? I : R.key), h = o(R, h, I), x === null ? E = R : x.sibling = R, x = R);
				return e && T.forEach(function(Y) {
					return t(d, Y)
				}), fe && Sr(d, I), E
			}

			function C(d, h, g, k) {
				if (typeof g == "object" && g !== null && g.type === ii && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
					switch (g.$$typeof) {
						case cl:
							e: {
								for (var E = g.key, x = h; x !== null;) {
									if (x.key === E) {
										if (E = g.type, E === ii) {
											if (x.tag === 7) {
												n(d, x.sibling), h = i(x, g.props.children), h.return = d, d = h;
												break e
											}
										} else if (x.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Dn && og(E) === x.type) {
											n(d, x.sibling), h = i(x, g.props), h.ref = Ro(d, x, g), h.return = d, d = h;
											break e
										}
										n(d, x);
										break
									} else t(d, x);
									x = x.sibling
								}
								g.type === ii ? (h = Ar(g.props.children, d.mode, k, g.key), h.return = d, d = h) : (k = zl(g.type, g.key, g.props, null, d.mode, k), k.ref = Ro(d, h, g), k.return = d, d = k)
							}
							return s(d);
						case ri:
							e: {
								for (x = g.key; h !== null;) {
									if (h.key === x)
										if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
											n(d, h.sibling), h = i(h, g.children || []), h.return = d, d = h;
											break e
										} else {
											n(d, h);
											break
										}
									else t(d, h);
									h = h.sibling
								}
								h = pf(g, d.mode, k),
								h.return = d,
								d = h
							}
							return s(d);
						case Dn:
							return x = g._init, C(d, h, x(g._payload), k)
					}
					if (_o(g)) return y(d, h, g, k);
					if (Io(g)) return v(d, h, g, k);
					Pl(d, g)
				}
				return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(d, h.sibling), h = i(h, g), h.return = d, d = h) : (n(d, h), h = ff(g, d.mode, k), h.return = d, d = h), s(d)) : n(d, h)
			}
			return C
		}
		var Ei = Ly(!0),
			My = Ly(!1),
			Zl = Yn(null),
			Jl = null,
			pi = null,
			Ep = null;

		function Pp() {
			Ep = pi = Jl = null
		}

		function Tp(e) {
			var t = Zl.current;
			ae(Zl), e._currentValue = t
		}

		function Uf(e, t, n) {
			for (; e !== null;) {
				var r = e.alternate;
				if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
				e = e.return
			}
		}

		function xi(e, t) {
			Jl = e, Ep = pi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (it = !0), e.firstContext = null)
		}

		function Dt(e) {
			var t = e._currentValue;
			if (Ep !== e)
				if (e = {
						context: e,
						memoizedValue: t,
						next: null
					}, pi === null) {
					if (Jl === null) throw Error(M(308));
					pi = e, Jl.dependencies = {
						lanes: 0,
						firstContext: e
					}
				} else pi = pi.next = e;
			return t
		}
		var Er = null;

		function Ap(e) {
			Er === null ? Er = [e] : Er.push(e)
		}

		function Dy(e, t, n, r) {
			var i = t.interleaved;
			return i === null ? (n.next = n, Ap(t)) : (n.next = i.next, i.next = n), t.interleaved = n, gn(e, r)
		}

		function gn(e, t) {
			e.lanes |= t;
			var n = e.alternate;
			for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
			return n.tag === 3 ? n.stateNode : null
		}
		var Rn = !1;

		function Ip(e) {
			e.updateQueue = {
				baseState: e.memoizedState,
				firstBaseUpdate: null,
				lastBaseUpdate: null,
				shared: {
					pending: null,
					interleaved: null,
					lanes: 0
				},
				effects: null
			}
		}

		function Ry(e, t) {
			e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects
			})
		}

		function mn(e, t) {
			return {
				eventTime: e,
				lane: t,
				tag: 0,
				payload: null,
				callback: null,
				next: null
			}
		}

		function jn(e, t, n) {
			var r = e.updateQueue;
			if (r === null) return null;
			if (r = r.shared, Q & 2) {
				var i = r.pending;
				return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, gn(e, n)
			}
			return i = r.interleaved, i === null ? (t.next = t, Ap(r)) : (t.next = i.next, i.next = t), r.interleaved = t, gn(e, n)
		}

		function Rl(e, t, n) {
			if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, mp(e, n)
			}
		}

		function sg(e, t) {
			var n = e.updateQueue,
				r = e.alternate;
			if (r !== null && (r = r.updateQueue, n === r)) {
				var i = null,
					o = null;
				if (n = n.firstBaseUpdate, n !== null) {
					do {
						var s = {
							eventTime: n.eventTime,
							lane: n.lane,
							tag: n.tag,
							payload: n.payload,
							callback: n.callback,
							next: null
						};
						o === null ? i = o = s : o = o.next = s, n = n.next
					} while (n !== null);
					o === null ? i = o = t : o = o.next = t
				} else i = o = t;
				n = {
					baseState: r.baseState,
					firstBaseUpdate: i,
					lastBaseUpdate: o,
					shared: r.shared,
					effects: r.effects
				}, e.updateQueue = n;
				return
			}
			e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
		}

		function ea(e, t, n, r) {
			var i = e.updateQueue;
			Rn = !1;
			var o = i.firstBaseUpdate,
				s = i.lastBaseUpdate,
				l = i.shared.pending;
			if (l !== null) {
				i.shared.pending = null;
				var a = l,
					u = a.next;
				a.next = null, s === null ? o = u : s.next = u, s = a;
				var c = e.alternate;
				c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
			}
			if (o !== null) {
				var f = i.baseState;
				s = 0, c = u = a = null, l = o;
				do {
					var p = l.lane,
						m = l.eventTime;
					if ((r & p) === p) {
						c !== null && (c = c.next = {
							eventTime: m,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null
						});
						e: {
							var y = e,
								v = l;
							switch (p = t, m = n, v.tag) {
								case 1:
									if (y = v.payload, typeof y == "function") {
										f = y.call(m, f, p);
										break e
									}
									f = y;
									break e;
								case 3:
									y.flags = y.flags & -65537 | 128;
								case 0:
									if (y = v.payload, p = typeof y == "function" ? y.call(m, f, p) : y, p == null) break e;
									f = he({}, f, p);
									break e;
								case 2:
									Rn = !0
							}
						}
						l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [l] : p.push(l))
					} else m = {
						eventTime: m,
						lane: p,
						tag: l.tag,
						payload: l.payload,
						callback: l.callback,
						next: null
					}, c === null ? (u = c = m, a = f) : c = c.next = m, s |= p;
					if (l = l.next, l === null) {
						if (l = i.shared.pending, l === null) break;
						p = l, l = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
					}
				} while (!0);
				if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
					i = t;
					do s |= i.lane, i = i.next; while (i !== t)
				} else o === null && (i.shared.lanes = 0);
				Dr |= s, e.lanes = s, e.memoizedState = f
			}
		}

		function lg(e, t, n) {
			if (e = t.effects, t.effects = null, e !== null)
				for (t = 0; t < e.length; t++) {
					var r = e[t],
						i = r.callback;
					if (i !== null) {
						if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
						i.call(r)
					}
				}
		}
		var hs = {},
			en = Yn(hs),
			ss = Yn(hs),
			ls = Yn(hs);

		function Pr(e) {
			if (e === hs) throw Error(M(174));
			return e
		}

		function Lp(e, t) {
			switch (ie(ls, t), ie(ss, e), ie(en, hs), e = t.nodeType, e) {
				case 9:
				case 11:
					t = (t = t.documentElement) ? t.namespaceURI : kf(null, "");
					break;
				default:
					e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = kf(t, e)
			}
			ae(en), ie(en, t)
		}

		function Pi() {
			ae(en), ae(ss), ae(ls)
		}

		function Ny(e) {
			Pr(ls.current);
			var t = Pr(en.current),
				n = kf(t, e.type);
			t !== n && (ie(ss, e), ie(en, n))
		}

		function Mp(e) {
			ss.current === e && (ae(en), ae(ss))
		}
		var me = Yn(0);

		function ta(e) {
			for (var t = e; t !== null;) {
				if (t.tag === 13) {
					var n = t.memoizedState;
					if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
				} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
					if (t.flags & 128) return t
				} else if (t.child !== null) {
					t.child.return = t, t = t.child;
					continue
				}
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return null;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
			return null
		}
		var of = [];

		function Dp() {
			for (var e = 0; e < of.length; e++) of [e]._workInProgressVersionPrimary = null;
			of.length = 0
		}
		var Nl = vn.ReactCurrentDispatcher,
			sf = vn.ReactCurrentBatchConfig,
			Mr = 0,
			de = null,
			Ee = null,
			Te = null,
			na = !1,
			$o = !1,
			as = 0,
			oE = 0;

		function be() {
			throw Error(M(321))
		}

		function Rp(e, t) {
			if (t === null) return !1;
			for (var n = 0; n < t.length && n < e.length; n++)
				if (!Wt(e[n], t[n])) return !1;
			return !0
		}

		function Np(e, t, n, r, i, o) {
			if (Mr = o, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nl.current = e === null || e.memoizedState === null ? uE : cE, e = n(r, i), $o) {
				o = 0;
				do {
					if ($o = !1, as = 0, 25 <= o) throw Error(M(301));
					o += 1, Te = Ee = null, t.updateQueue = null, Nl.current = fE, e = n(r, i)
				} while ($o)
			}
			if (Nl.current = ra, t = Ee !== null && Ee.next !== null, Mr = 0, Te = Ee = de = null, na = !1, t) throw Error(M(300));
			return e
		}

		function Vp() {
			var e = as !== 0;
			return as = 0, e
		}

		function qt() {
			var e = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			return Te === null ? de.memoizedState = Te = e : Te = Te.next = e, Te
		}

		function Rt() {
			if (Ee === null) {
				var e = de.alternate;
				e = e !== null ? e.memoizedState : null
			} else e = Ee.next;
			var t = Te === null ? de.memoizedState : Te.next;
			if (t !== null) Te = t, Ee = e;
			else {
				if (e === null) throw Error(M(310));
				Ee = e, e = {
					memoizedState: Ee.memoizedState,
					baseState: Ee.baseState,
					baseQueue: Ee.baseQueue,
					queue: Ee.queue,
					next: null
				}, Te === null ? de.memoizedState = Te = e : Te = Te.next = e
			}
			return Te
		}

		function us(e, t) {
			return typeof t == "function" ? t(e) : t
		}

		function lf(e) {
			var t = Rt(),
				n = t.queue;
			if (n === null) throw Error(M(311));
			n.lastRenderedReducer = e;
			var r = Ee,
				i = r.baseQueue,
				o = n.pending;
			if (o !== null) {
				if (i !== null) {
					var s = i.next;
					i.next = o.next, o.next = s
				}
				r.baseQueue = i = o, n.pending = null
			}
			if (i !== null) {
				o = i.next, r = r.baseState;
				var l = s = null,
					a = null,
					u = o;
				do {
					var c = u.lane;
					if ((Mr & c) === c) a !== null && (a = a.next = {
						lane: 0,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
					else {
						var f = {
							lane: c,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null
						};
						a === null ? (l = a = f, s = r) : a = a.next = f, de.lanes |= c, Dr |= c
					}
					u = u.next
				} while (u !== null && u !== o);
				a === null ? s = r : a.next = l, Wt(r, t.memoizedState) || (it = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
			}
			if (e = n.interleaved, e !== null) {
				i = e;
				do o = i.lane, de.lanes |= o, Dr |= o, i = i.next; while (i !== e)
			} else i === null && (n.lanes = 0);
			return [t.memoizedState, n.dispatch]
		}

		function af(e) {
			var t = Rt(),
				n = t.queue;
			if (n === null) throw Error(M(311));
			n.lastRenderedReducer = e;
			var r = n.dispatch,
				i = n.pending,
				o = t.memoizedState;
			if (i !== null) {
				n.pending = null;
				var s = i = i.next;
				do o = e(o, s.action), s = s.next; while (s !== i);
				Wt(o, t.memoizedState) || (it = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
			}
			return [o, r]
		}

		function Vy() {}

		function Oy(e, t) {
			var n = de,
				r = Rt(),
				i = t(),
				o = !Wt(r.memoizedState, i);
			if (o && (r.memoizedState = i, it = !0), r = r.queue, Op(zy.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Te !== null && Te.memoizedState.tag & 1) {
				if (n.flags |= 2048, cs(9, _y.bind(null, n, r, i, t), void 0, null), Ae === null) throw Error(M(349));
				Mr & 30 || by(n, t, i)
			}
			return i
		}

		function by(e, t, n) {
			e.flags |= 16384, e = {
				getSnapshot: t,
				value: n
			}, t = de.updateQueue, t === null ? (t = {
				lastEffect: null,
				stores: null
			}, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
		}

		function _y(e, t, n, r) {
			t.value = n, t.getSnapshot = r, Fy(t) && By(e)
		}

		function zy(e, t, n) {
			return n(function() {
				Fy(t) && By(e)
			})
		}

		function Fy(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !Wt(e, n)
			} catch {
				return !0
			}
		}

		function By(e) {
			var t = gn(e, 1);
			t !== null && Ht(t, e, 1, -1)
		}

		function ag(e) {
			var t = qt();
			return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: us,
				lastRenderedState: e
			}, t.queue = e, e = e.dispatch = aE.bind(null, de, e), [t.memoizedState, e]
		}

		function cs(e, t, n, r) {
			return e = {
				tag: e,
				create: t,
				destroy: n,
				deps: r,
				next: null
			}, t = de.updateQueue, t === null ? (t = {
				lastEffect: null,
				stores: null
			}, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
		}

		function jy() {
			return Rt().memoizedState
		}

		function Vl(e, t, n, r) {
			var i = qt();
			de.flags |= e, i.memoizedState = cs(1 | t, n, void 0, r === void 0 ? null : r)
		}

		function ha(e, t, n, r) {
			var i = Rt();
			r = r === void 0 ? null : r;
			var o = void 0;
			if (Ee !== null) {
				var s = Ee.memoizedState;
				if (o = s.destroy, r !== null && Rp(r, s.deps)) {
					i.memoizedState = cs(t, n, o, r);
					return
				}
			}
			de.flags |= e, i.memoizedState = cs(1 | t, n, o, r)
		}

		function ug(e, t) {
			return Vl(8390656, 8, e, t)
		}

		function Op(e, t) {
			return ha(2048, 8, e, t)
		}

		function Uy(e, t) {
			return ha(4, 2, e, t)
		}

		function Hy(e, t) {
			return ha(4, 4, e, t)
		}

		function Wy(e, t) {
			if (typeof t == "function") return e = e(), t(e),
				function() {
					t(null)
				};
			if (t != null) return e = e(), t.current = e,
				function() {
					t.current = null
				}
		}

		function $y(e, t, n) {
			return n = n != null ? n.concat([e]) : null, ha(4, 4, Wy.bind(null, t, e), n)
		}

		function bp() {}

		function Ky(e, t) {
			var n = Rt();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			return r !== null && t !== null && Rp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
		}

		function Gy(e, t) {
			var n = Rt();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			return r !== null && t !== null && Rp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
		}

		function Yy(e, t, n) {
			return Mr & 21 ? (Wt(n, t) || (n = Jg(), de.lanes |= n, Dr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n)
		}

		function sE(e, t) {
			var n = J;
			J = n !== 0 && 4 > n ? n : 4, e(!0);
			var r = sf.transition;
			sf.transition = {};
			try {
				e(!1), t()
			} finally {
				J = n, sf.transition = r
			}
		}

		function Qy() {
			return Rt().memoizedState
		}

		function lE(e, t, n) {
			var r = Hn(e);
			if (n = {
					lane: r,
					action: n,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, Xy(e)) qy(t, n);
			else if (n = Dy(e, t, n, r), n !== null) {
				var i = Xe();
				Ht(n, e, r, i), Zy(n, t, r)
			}
		}

		function aE(e, t, n) {
			var r = Hn(e),
				i = {
					lane: r,
					action: n,
					hasEagerState: !1,
					eagerState: null,
					next: null
				};
			if (Xy(e)) qy(t, i);
			else {
				var o = e.alternate;
				if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
					var s = t.lastRenderedState,
						l = o(s, n);
					if (i.hasEagerState = !0, i.eagerState = l, Wt(l, s)) {
						var a = t.interleaved;
						a === null ? (i.next = i, Ap(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
						return
					}
				} catch {} finally {}
				n = Dy(e, t, i, r), n !== null && (i = Xe(), Ht(n, e, r, i), Zy(n, t, r))
			}
		}

		function Xy(e) {
			var t = e.alternate;
			return e === de || t !== null && t === de
		}

		function qy(e, t) {
			$o = na = !0;
			var n = e.pending;
			n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
		}

		function Zy(e, t, n) {
			if (n & 4194240) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, mp(e, n)
			}
		}
		var ra = {
				readContext: Dt,
				useCallback: be,
				useContext: be,
				useEffect: be,
				useImperativeHandle: be,
				useInsertionEffect: be,
				useLayoutEffect: be,
				useMemo: be,
				useReducer: be,
				useRef: be,
				useState: be,
				useDebugValue: be,
				useDeferredValue: be,
				useTransition: be,
				useMutableSource: be,
				useSyncExternalStore: be,
				useId: be,
				unstable_isNewReconciler: !1
			},
			uE = {
				readContext: Dt,
				useCallback: function(e, t) {
					return qt().memoizedState = [e, t === void 0 ? null : t], e
				},
				useContext: Dt,
				useEffect: ug,
				useImperativeHandle: function(e, t, n) {
					return n = n != null ? n.concat([e]) : null, Vl(4194308, 4, Wy.bind(null, t, e), n)
				},
				useLayoutEffect: function(e, t) {
					return Vl(4194308, 4, e, t)
				},
				useInsertionEffect: function(e, t) {
					return Vl(4, 2, e, t)
				},
				useMemo: function(e, t) {
					var n = qt();
					return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
				},
				useReducer: function(e, t, n) {
					var r = qt();
					return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: t
					}, r.queue = e, e = e.dispatch = lE.bind(null, de, e), [r.memoizedState, e]
				},
				useRef: function(e) {
					var t = qt();
					return e = {
						current: e
					}, t.memoizedState = e
				},
				useState: ag,
				useDebugValue: bp,
				useDeferredValue: function(e) {
					return qt().memoizedState = e
				},
				useTransition: function() {
					var e = ag(!1),
						t = e[0];
					return e = sE.bind(null, e[1]), qt().memoizedState = e, [t, e]
				},
				useMutableSource: function() {},
				useSyncExternalStore: function(e, t, n) {
					var r = de,
						i = qt();
					if (fe) {
						if (n === void 0) throw Error(M(407));
						n = n()
					} else {
						if (n = t(), Ae === null) throw Error(M(349));
						Mr & 30 || by(r, t, n)
					}
					i.memoizedState = n;
					var o = {
						value: n,
						getSnapshot: t
					};
					return i.queue = o, ug(zy.bind(null, r, o, e), [e]), r.flags |= 2048, cs(9, _y.bind(null, r, o, n, t), void 0, null), n
				},
				useId: function() {
					var e = qt(),
						t = Ae.identifierPrefix;
					if (fe) {
						var n = pn,
							r = fn;
						n = (r & ~(1 << 32 - Ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = as++, 0 < n && (t += "H" + n.toString(32)), t += ":"
					} else n = oE++, t = ":" + t + "r" + n.toString(32) + ":";
					return e.memoizedState = t
				},
				unstable_isNewReconciler: !1
			},
			cE = {
				readContext: Dt,
				useCallback: Ky,
				useContext: Dt,
				useEffect: Op,
				useImperativeHandle: $y,
				useInsertionEffect: Uy,
				useLayoutEffect: Hy,
				useMemo: Gy,
				useReducer: lf,
				useRef: jy,
				useState: function() {
					return lf(us)
				},
				useDebugValue: bp,
				useDeferredValue: function(e) {
					var t = Rt();
					return Yy(t, Ee.memoizedState, e)
				},
				useTransition: function() {
					var e = lf(us)[0],
						t = Rt().memoizedState;
					return [e, t]
				},
				useMutableSource: Vy,
				useSyncExternalStore: Oy,
				useId: Qy,
				unstable_isNewReconciler: !1
			},
			fE = {
				readContext: Dt,
				useCallback: Ky,
				useContext: Dt,
				useEffect: Op,
				useImperativeHandle: $y,
				useInsertionEffect: Uy,
				useLayoutEffect: Hy,
				useMemo: Gy,
				useReducer: af,
				useRef: jy,
				useState: function() {
					return af(us)
				},
				useDebugValue: bp,
				useDeferredValue: function(e) {
					var t = Rt();
					return Ee === null ? t.memoizedState = e : Yy(t, Ee.memoizedState, e)
				},
				useTransition: function() {
					var e = af(us)[0],
						t = Rt().memoizedState;
					return [e, t]
				},
				useMutableSource: Vy,
				useSyncExternalStore: Oy,
				useId: Qy,
				unstable_isNewReconciler: !1
			};

		function Ft(e, t) {
			if (e && e.defaultProps) {
				t = he({}, t), e = e.defaultProps;
				for (var n in e) t[n] === void 0 && (t[n] = e[n]);
				return t
			}
			return t
		}

		function Hf(e, t, n, r) {
			t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
		}
		var ga = {
			isMounted: function(e) {
				return (e = e._reactInternals) ? Vr(e) === e : !1
			},
			enqueueSetState: function(e, t, n) {
				e = e._reactInternals;
				var r = Xe(),
					i = Hn(e),
					o = mn(r, i);
				o.payload = t, n != null && (o.callback = n), t = jn(e, o, i), t !== null && (Ht(t, e, i, r), Rl(t, e, i))
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals;
				var r = Xe(),
					i = Hn(e),
					o = mn(r, i);
				o.tag = 1, o.payload = t, n != null && (o.callback = n), t = jn(e, o, i), t !== null && (Ht(t, e, i, r), Rl(t, e, i))
			},
			enqueueForceUpdate: function(e, t) {
				e = e._reactInternals;
				var n = Xe(),
					r = Hn(e),
					i = mn(n, r);
				i.tag = 2, t != null && (i.callback = t), t = jn(e, i, r), t !== null && (Ht(t, e, r, n), Rl(t, e, r))
			}
		};

		function cg(e, t, n, r, i, o, s) {
			return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !ns(n, r) || !ns(i, o) : !0
		}

		function Jy(e, t, n) {
			var r = !1,
				i = Kn,
				o = t.contextType;
			return typeof o == "object" && o !== null ? o = Dt(o) : (i = st(t) ? Ir : Fe.current, r = t.contextTypes, o = (r = r != null) ? ki(e, i) : Kn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ga, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
		}

		function fg(e, t, n, r) {
			e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ga.enqueueReplaceState(t, t.state, null)
		}

		function Wf(e, t, n, r) {
			var i = e.stateNode;
			i.props = n, i.state = e.memoizedState, i.refs = {}, Ip(e);
			var o = t.contextType;
			typeof o == "object" && o !== null ? i.context = Dt(o) : (o = st(t) ? Ir : Fe.current, i.context = ki(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Hf(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ga.enqueueReplaceState(i, i.state, null), ea(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
		}

		function Ti(e, t) {
			try {
				var n = "",
					r = t;
				do n += jk(r), r = r.return; while (r);
				var i = n
			} catch (o) {
				i = `
Error generating stack: ` + o.message + `
` + o.stack
			}
			return {
				value: e,
				source: t,
				stack: i,
				digest: null
			}
		}

		function uf(e, t, n) {
			return {
				value: e,
				source: null,
				stack: n ?? null,
				digest: t ?? null
			}
		}

		function $f(e, t) {
			try {
				console.error(t.value)
			} catch (n) {
				setTimeout(function() {
					throw n
				})
			}
		}
		var pE = typeof WeakMap == "function" ? WeakMap : Map;

		function ev(e, t, n) {
			n = mn(-1, n), n.tag = 3, n.payload = {
				element: null
			};
			var r = t.value;
			return n.callback = function() {
				oa || (oa = !0, tp = r), $f(e, t)
			}, n
		}

		function tv(e, t, n) {
			n = mn(-1, n), n.tag = 3;
			var r = e.type.getDerivedStateFromError;
			if (typeof r == "function") {
				var i = t.value;
				n.payload = function() {
					return r(i)
				}, n.callback = function() {
					$f(e, t)
				}
			}
			var o = e.stateNode;
			return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
				$f(e, t), typeof r != "function" && (Un === null ? Un = new Set([this]) : Un.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : ""
				})
			}), n
		}

		function pg(e, t, n) {
			var r = e.pingCache;
			if (r === null) {
				r = e.pingCache = new pE;
				var i = new Set;
				r.set(t, i)
			} else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
			i.has(n) || (i.add(n), e = TE.bind(null, e, t, n), t.then(e, e))
		}

		function mg(e) {
			do {
				var t;
				if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
				e = e.return
			} while (e !== null);
			return null
		}

		function dg(e, t, n, r, i) {
			return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mn(-1, 1), t.tag = 2, jn(n, t, 1))), n.lanes |= 1), e)
		}
		var mE = vn.ReactCurrentOwner,
			it = !1;

		function Qe(e, t, n, r) {
			t.child = e === null ? My(t, null, n, r) : Ei(t, e.child, n, r)
		}

		function hg(e, t, n, r, i) {
			n = n.render;
			var o = t.ref;
			return xi(t, i), r = Np(e, t, n, r, o, i), n = Vp(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yn(e, t, i)) : (fe && n && Sp(t), t.flags |= 1, Qe(e, t, r, i), t.child)
		}

		function gg(e, t, n, r, i) {
			if (e === null) {
				var o = n.type;
				return typeof o == "function" && !Wp(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, nv(e, t, o, r, i)) : (e = zl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
			}
			if (o = e.child, !(e.lanes & i)) {
				var s = o.memoizedProps;
				if (n = n.compare, n = n !== null ? n : ns, n(s, r) && e.ref === t.ref) return yn(e, t, i)
			}
			return t.flags |= 1, e = Wn(o, r), e.ref = t.ref, e.return = t, t.child = e
		}

		function nv(e, t, n, r, i) {
			if (e !== null) {
				var o = e.memoizedProps;
				if (ns(o, r) && e.ref === t.ref)
					if (it = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (it = !0);
					else return t.lanes = e.lanes, yn(e, t, i)
			}
			return Kf(e, t, n, r, i)
		}

		function rv(e, t, n) {
			var r = t.pendingProps,
				i = r.children,
				o = e !== null ? e.memoizedState : null;
			if (r.mode === "hidden")
				if (!(t.mode & 1)) t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, ie(di, ht), ht |= n;
				else {
					if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}, t.updateQueue = null, ie(di, ht), ht |= e, null;
					t.memoizedState = {
						baseLanes: 0,
						cachePool: null,
						transitions: null
					}, r = o !== null ? o.baseLanes : n, ie(di, ht), ht |= r
				}
			else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ie(di, ht), ht |= r;
			return Qe(e, t, i, n), t.child
		}

		function iv(e, t) {
			var n = t.ref;
			(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
		}

		function Kf(e, t, n, r, i) {
			var o = st(n) ? Ir : Fe.current;
			return o = ki(t, o), xi(t, i), n = Np(e, t, n, r, o, i), r = Vp(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yn(e, t, i)) : (fe && r && Sp(t), t.flags |= 1, Qe(e, t, n, i), t.child)
		}

		function yg(e, t, n, r, i) {
			if (st(n)) {
				var o = !0;
				Ql(t)
			} else o = !1;
			if (xi(t, i), t.stateNode === null) Ol(e, t), Jy(t, n, r), Wf(t, n, r, i), r = !0;
			else if (e === null) {
				var s = t.stateNode,
					l = t.memoizedProps;
				s.props = l;
				var a = s.context,
					u = n.contextType;
				typeof u == "object" && u !== null ? u = Dt(u) : (u = st(n) ? Ir : Fe.current, u = ki(t, u));
				var c = n.getDerivedStateFromProps,
					f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
				f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && fg(t, s, r, u), Rn = !1;
				var p = t.memoizedState;
				s.state = p, ea(t, r, s, i), a = t.memoizedState, l !== r || p !== a || ot.current || Rn ? (typeof c == "function" && (Hf(t, n, c, r), a = t.memoizedState), (l = Rn || cg(t, n, l, r, p, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
			} else {
				s = t.stateNode, Ry(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Ft(t.type, l), s.props = u, f = t.pendingProps, p = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Dt(a) : (a = st(n) ? Ir : Fe.current, a = ki(t, a));
				var m = n.getDerivedStateFromProps;
				(c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || p !== a) && fg(t, s, r, a), Rn = !1, p = t.memoizedState, s.state = p, ea(t, r, s, i);
				var y = t.memoizedState;
				l !== f || p !== y || ot.current || Rn ? (typeof m == "function" && (Hf(t, n, m, r), y = t.memoizedState), (u = Rn || cg(t, n, u, r, p, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
			}
			return Gf(e, t, n, r, o, i)
		}

		function Gf(e, t, n, r, i, o) {
			iv(e, t);
			var s = (t.flags & 128) !== 0;
			if (!r && !s) return i && ng(t, n, !1), yn(e, t, o);
			r = t.stateNode, mE.current = t;
			var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
			return t.flags |= 1, e !== null && s ? (t.child = Ei(t, e.child, null, o), t.child = Ei(t, null, l, o)) : Qe(e, t, l, o), t.memoizedState = r.state, i && ng(t, n, !0), t.child
		}

		function ov(e) {
			var t = e.stateNode;
			t.pendingContext ? tg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tg(e, t.context, !1), Lp(e, t.containerInfo)
		}

		function vg(e, t, n, r, i) {
			return Ci(), Cp(i), t.flags |= 256, Qe(e, t, n, r), t.child
		}
		var Yf = {
			dehydrated: null,
			treeContext: null,
			retryLane: 0
		};

		function Qf(e) {
			return {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}
		}

		function sv(e, t, n) {
			var r = t.pendingProps,
				i = me.current,
				o = !1,
				s = (t.flags & 128) !== 0,
				l;
			if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ie(me, i & 1), e === null) return jf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
				mode: "hidden",
				children: s
			}, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = xa(s, r, 0, null), e = Ar(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qf(n), t.memoizedState = Yf, e) : _p(t, s));
			if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return dE(e, t, s, r, l, i, n);
			if (o) {
				o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
				var a = {
					mode: "hidden",
					children: r.children
				};
				return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Wn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = Wn(l, o) : (o = Ar(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Qf(n) : {
					baseLanes: s.baseLanes | n,
					cachePool: null,
					transitions: s.transitions
				}, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Yf, r
			}
			return o = e.child, e = o.sibling, r = Wn(o, {
				mode: "visible",
				children: r.children
			}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
		}

		function _p(e, t) {
			return t = xa({
				mode: "visible",
				children: t
			}, e.mode, 0, null), t.return = e, e.child = t
		}

		function Tl(e, t, n, r) {
			return r !== null && Cp(r), Ei(t, e.child, null, n), e = _p(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
		}

		function dE(e, t, n, r, i, o, s) {
			if (n) return t.flags & 256 ? (t.flags &= -257, r = uf(Error(M(422))), Tl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = xa({
				mode: "visible",
				children: r.children
			}, i, 0, null), o = Ar(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ei(t, e.child, null, s), t.child.memoizedState = Qf(s), t.memoizedState = Yf, o);
			if (!(t.mode & 1)) return Tl(e, t, s, null);
			if (i.data === "$!") {
				if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
				return r = l, o = Error(M(419)), r = uf(o, r, void 0), Tl(e, t, s, r)
			}
			if (l = (s & e.childLanes) !== 0, it || l) {
				if (r = Ae, r !== null) {
					switch (s & -s) {
						case 4:
							i = 2;
							break;
						case 16:
							i = 8;
							break;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							i = 32;
							break;
						case 536870912:
							i = 268435456;
							break;
						default:
							i = 0
					}
					i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, gn(e, i), Ht(r, e, i, -1))
				}
				return Hp(), r = uf(Error(M(421))), Tl(e, t, s, r)
			}
			return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = AE.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, gt = Bn(i.nextSibling), yt = t, fe = !0, jt = null, e !== null && (At[It++] = fn, At[It++] = pn, At[It++] = Lr, fn = e.id, pn = e.overflow, Lr = t), t = _p(t, r.children), t.flags |= 4096, t)
		}

		function xg(e, t, n) {
			e.lanes |= t;
			var r = e.alternate;
			r !== null && (r.lanes |= t), Uf(e.return, t, n)
		}

		function cf(e, t, n, r, i) {
			var o = e.memoizedState;
			o === null ? e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i
			} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
		}

		function lv(e, t, n) {
			var r = t.pendingProps,
				i = r.revealOrder,
				o = r.tail;
			if (Qe(e, t, r.children, n), r = me.current, r & 2) r = r & 1 | 2, t.flags |= 128;
			else {
				if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
					if (e.tag === 13) e.memoizedState !== null && xg(e, n, t);
					else if (e.tag === 19) xg(e, n, t);
					else if (e.child !== null) {
						e.child.return = e, e = e.child;
						continue
					}
					if (e === t) break e;
					for (; e.sibling === null;) {
						if (e.return === null || e.return === t) break e;
						e = e.return
					}
					e.sibling.return = e.return, e = e.sibling
				}
				r &= 1
			}
			if (ie(me, r), !(t.mode & 1)) t.memoizedState = null;
			else switch (i) {
				case "forwards":
					for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && ta(e) === null && (i = n), n = n.sibling;
					n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), cf(t, !1, i, n, o);
					break;
				case "backwards":
					for (n = null, i = t.child, t.child = null; i !== null;) {
						if (e = i.alternate, e !== null && ta(e) === null) {
							t.child = i;
							break
						}
						e = i.sibling, i.sibling = n, n = i, i = e
					}
					cf(t, !0, n, null, o);
					break;
				case "together":
					cf(t, !1, null, null, void 0);
					break;
				default:
					t.memoizedState = null
			}
			return t.child
		}

		function Ol(e, t) {
			!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
		}

		function yn(e, t, n) {
			if (e !== null && (t.dependencies = e.dependencies), Dr |= t.lanes, !(n & t.childLanes)) return null;
			if (e !== null && t.child !== e.child) throw Error(M(153));
			if (t.child !== null) {
				for (e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Wn(e, e.pendingProps), n.return = t;
				n.sibling = null
			}
			return t.child
		}

		function hE(e, t, n) {
			switch (t.tag) {
				case 3:
					ov(t), Ci();
					break;
				case 5:
					Ny(t);
					break;
				case 1:
					st(t.type) && Ql(t);
					break;
				case 4:
					Lp(t, t.stateNode.containerInfo);
					break;
				case 10:
					var r = t.type._context,
						i = t.memoizedProps.value;
					ie(Zl, r._currentValue), r._currentValue = i;
					break;
				case 13:
					if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ie(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sv(e, t, n) : (ie(me, me.current & 1), e = yn(e, t, n), e !== null ? e.sibling : null);
					ie(me, me.current & 1);
					break;
				case 19:
					if (r = (n & t.childLanes) !== 0, e.flags & 128) {
						if (r) return lv(e, t, n);
						t.flags |= 128
					}
					if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ie(me, me.current), r) break;
					return null;
				case 22:
				case 23:
					return t.lanes = 0, rv(e, t, n)
			}
			return yn(e, t, n)
		}
		var av, Xf, uv, fv;
		av = function(e, t) {
			for (var n = t.child; n !== null;) {
				if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
				else if (n.tag !== 4 && n.child !== null) {
					n.child.return = n, n = n.child;
					continue
				}
				if (n === t) break;
				for (; n.sibling === null;) {
					if (n.return === null || n.return === t) return;
					n = n.return
				}
				n.sibling.return = n.return, n = n.sibling
			}
		};
		Xf = function() {};
		uv = function(e, t, n, r) {
			var i = e.memoizedProps;
			if (i !== r) {
				e = t.stateNode, Pr(en.current);
				var o = null;
				switch (n) {
					case "input":
						i = vf(e, i), r = vf(e, r), o = [];
						break;
					case "select":
						i = he({}, i, {
							value: void 0
						}), r = he({}, r, {
							value: void 0
						}), o = [];
						break;
					case "textarea":
						i = Sf(e, i), r = Sf(e, r), o = [];
						break;
					default:
						typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gl)
				}
				Cf(n, r);
				var s;
				n = null;
				for (u in i)
					if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
						if (u === "style") {
							var l = i[u];
							for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
						} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
				for (u in r) {
					var a = r[u];
					if (l = i?.[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null))
						if (u === "style")
							if (l) {
								for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
								for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
							} else n || (o || (o = []), o.push(u, n)), n = a;
					else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qo.hasOwnProperty(u) ? (a != null && u === "onScroll" && le("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a))
				}
				n && (o = o || []).push("style", n);
				var u = o;
				(t.updateQueue = u) && (t.flags |= 4)
			}
		};
		fv = function(e, t, n, r) {
			n !== r && (t.flags |= 4)
		};

		function No(e, t) {
			if (!fe) switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
					n === null ? e.tail = null : n.sibling = null;
					break;
				case "collapsed":
					n = e.tail;
					for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
					r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
			}
		}

		function _e(e) {
			var t = e.alternate !== null && e.alternate.child === e.child,
				n = 0,
				r = 0;
			if (t)
				for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
			else
				for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
			return e.subtreeFlags |= r, e.childLanes = n, t
		}

		function gE(e, t, n) {
			var r = t.pendingProps;
			switch (kp(t), t.tag) {
				case 2:
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14:
					return _e(t), null;
				case 1:
					return st(t.type) && Yl(), _e(t), null;
				case 3:
					return r = t.stateNode, Pi(), ae(ot), ae(Fe), Dp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (El(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && (ip(jt), jt = null))), Xf(e, t), _e(t), null;
				case 5:
					Mp(t);
					var i = Pr(ls.current);
					if (n = t.type, e !== null && t.stateNode != null) uv(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error(M(166));
							return _e(t), null
						}
						if (e = Pr(en.current), El(t)) {
							r = t.stateNode, n = t.type;
							var o = t.memoizedProps;
							switch (r[Zt] = t, r[os] = o, e = (t.mode & 1) !== 0, n) {
								case "dialog":
									le("cancel", r), le("close", r);
									break;
								case "iframe":
								case "object":
								case "embed":
									le("load", r);
									break;
								case "video":
								case "audio":
									for (i = 0; i < Fo.length; i++) le(Fo[i], r);
									break;
								case "source":
									le("error", r);
									break;
								case "img":
								case "image":
								case "link":
									le("error", r), le("load", r);
									break;
								case "details":
									le("toggle", r);
									break;
								case "input":
									Ah(r, o), le("invalid", r);
									break;
								case "select":
									r._wrapperState = {
										wasMultiple: !!o.multiple
									}, le("invalid", r);
									break;
								case "textarea":
									Lh(r, o), le("invalid", r)
							}
							Cf(n, o), i = null;
							for (var s in o)
								if (o.hasOwnProperty(s)) {
									var l = o[s];
									s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Cl(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Cl(r.textContent, l, e), i = ["children", "" + l]) : Qo.hasOwnProperty(s) && l != null && s === "onScroll" && le("scroll", r)
								} switch (n) {
								case "input":
									fl(r), Ih(r, o, !0);
									break;
								case "textarea":
									fl(r), Mh(r);
									break;
								case "select":
								case "option":
									break;
								default:
									typeof o.onClick == "function" && (r.onclick = Gl)
							}
							r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
						} else {
							s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
								is: r.is
							}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Zt] = t, e[os] = r, av(e, t, !1, !1), t.stateNode = e;
							e: {
								switch (s = Ef(n, r), n) {
									case "dialog":
										le("cancel", e), le("close", e), i = r;
										break;
									case "iframe":
									case "object":
									case "embed":
										le("load", e), i = r;
										break;
									case "video":
									case "audio":
										for (i = 0; i < Fo.length; i++) le(Fo[i], e);
										i = r;
										break;
									case "source":
										le("error", e), i = r;
										break;
									case "img":
									case "image":
									case "link":
										le("error", e), le("load", e), i = r;
										break;
									case "details":
										le("toggle", e), i = r;
										break;
									case "input":
										Ah(e, r), i = vf(e, r), le("invalid", e);
										break;
									case "option":
										i = r;
										break;
									case "select":
										e._wrapperState = {
											wasMultiple: !!r.multiple
										}, i = he({}, r, {
											value: void 0
										}), le("invalid", e);
										break;
									case "textarea":
										Lh(e, r), i = Sf(e, r), le("invalid", e);
										break;
									default:
										i = r
								}
								Cf(n, i),
								l = i;
								for (o in l)
									if (l.hasOwnProperty(o)) {
										var a = l[o];
										o === "style" ? jg(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Fg(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Xo(e, a) : typeof a == "number" && Xo(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qo.hasOwnProperty(o) ? a != null && o === "onScroll" && le("scroll", e) : a != null && lp(e, o, a, s))
									} switch (n) {
									case "input":
										fl(e), Ih(e, r, !1);
										break;
									case "textarea":
										fl(e), Mh(e);
										break;
									case "option":
										r.value != null && e.setAttribute("value", "" + $n(r.value));
										break;
									case "select":
										e.multiple = !!r.multiple, o = r.value, o != null ? hi(e, !!r.multiple, o, !1) : r.defaultValue != null && hi(e, !!r.multiple, r.defaultValue, !0);
										break;
									default:
										typeof i.onClick == "function" && (e.onclick = Gl)
								}
								switch (n) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										r = !!r.autoFocus;
										break e;
									case "img":
										r = !0;
										break e;
									default:
										r = !1
								}
							}
							r && (t.flags |= 4)
						}
						t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
					}
					return _e(t), null;
				case 6:
					if (e && t.stateNode != null) fv(e, t, e.memoizedProps, r);
					else {
						if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
						if (n = Pr(ls.current), Pr(en.current), El(t)) {
							if (r = t.stateNode, n = t.memoizedProps, r[Zt] = t, (o = r.nodeValue !== n) && (e = yt, e !== null)) switch (e.tag) {
								case 3:
									Cl(r.nodeValue, n, (e.mode & 1) !== 0);
									break;
								case 5:
									e.memoizedProps.suppressHydrationWarning !== !0 && Cl(r.nodeValue, n, (e.mode & 1) !== 0)
							}
							o && (t.flags |= 4)
						} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zt] = t, t.stateNode = r
					}
					return _e(t), null;
				case 13:
					if (ae(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
						if (fe && gt !== null && t.mode & 1 && !(t.flags & 128)) Iy(), Ci(), t.flags |= 98560, o = !1;
						else if (o = El(t), r !== null && r.dehydrated !== null) {
							if (e === null) {
								if (!o) throw Error(M(318));
								if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(M(317));
								o[Zt] = t
							} else Ci(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
							_e(t), o = !1
						} else jt !== null && (ip(jt), jt = null), o = !0;
						if (!o) return t.flags & 65536 ? t : null
					}
					return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? Pe === 0 && (Pe = 3) : Hp())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
				case 4:
					return Pi(), Xf(e, t), e === null && rs(t.stateNode.containerInfo), _e(t), null;
				case 10:
					return Tp(t.type._context), _e(t), null;
				case 17:
					return st(t.type) && Yl(), _e(t), null;
				case 19:
					if (ae(me), o = t.memoizedState, o === null) return _e(t), null;
					if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
						if (r) No(o, !1);
						else {
							if (Pe !== 0 || e !== null && e.flags & 128)
								for (e = t.child; e !== null;) {
									if (s = ta(e), s !== null) {
										for (t.flags |= 128, No(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
											lanes: e.lanes,
											firstContext: e.firstContext
										}), n = n.sibling;
										return ie(me, me.current & 1 | 2), t.child
									}
									e = e.sibling
								}
							o.tail !== null && ve() > Ai && (t.flags |= 128, r = !0, No(o, !1), t.lanes = 4194304)
						}
					else {
						if (!r)
							if (e = ta(s), e !== null) {
								if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), No(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !fe) return _e(t), null
							} else 2 * ve() - o.renderingStartTime > Ai && n !== 1073741824 && (t.flags |= 128, r = !0, No(o, !1), t.lanes = 4194304);
						o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
					}
					return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ve(), t.sibling = null, n = me.current, ie(me, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
				case 22:
				case 23:
					return Up(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ht & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
				case 24:
					return null;
				case 25:
					return null
			}
			throw Error(M(156, t.tag))
		}

		function yE(e, t) {
			switch (kp(t), t.tag) {
				case 1:
					return st(t.type) && Yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
				case 3:
					return Pi(), ae(ot), ae(Fe), Dp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
				case 5:
					return Mp(t), null;
				case 13:
					if (ae(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
						if (t.alternate === null) throw Error(M(340));
						Ci()
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
				case 19:
					return ae(me), null;
				case 4:
					return Pi(), null;
				case 10:
					return Tp(t.type._context), null;
				case 22:
				case 23:
					return Up(), null;
				case 24:
					return null;
				default:
					return null
			}
		}
		var Al = !1,
			ze = !1,
			vE = typeof WeakSet == "function" ? WeakSet : Set,
			N = null;

		function mi(e, t) {
			var n = e.ref;
			if (n !== null)
				if (typeof n == "function") try {
					n(null)
				} catch (r) {
					ge(e, t, r)
				} else n.current = null
		}

		function qf(e, t, n) {
			try {
				n()
			} catch (r) {
				ge(e, t, r)
			}
		}
		var wg = !1;

		function xE(e, t) {
			if (Vf = Wl, e = hy(), wp(e)) {
				if ("selectionStart" in e) var n = {
					start: e.selectionStart,
					end: e.selectionEnd
				};
				else e: {
					n = (n = e.ownerDocument) && n.defaultView || window;
					var r = n.getSelection && n.getSelection();
					if (r && r.rangeCount !== 0) {
						n = r.anchorNode;
						var i = r.anchorOffset,
							o = r.focusNode;
						r = r.focusOffset;
						try {
							n.nodeType, o.nodeType
						} catch {
							n = null;
							break e
						}
						var s = 0,
							l = -1,
							a = -1,
							u = 0,
							c = 0,
							f = e,
							p = null;
						t: for (;;) {
							for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
							for (;;) {
								if (f === e) break t;
								if (p === n && ++u === i && (l = s), p === o && ++c === r && (a = s), (m = f.nextSibling) !== null) break;
								f = p, p = f.parentNode
							}
							f = m
						}
						n = l === -1 || a === -1 ? null : {
							start: l,
							end: a
						}
					} else n = null
				}
				n = n || {
					start: 0,
					end: 0
				}
			} else n = null;
			for (Of = {
					focusedElem: e,
					selectionRange: n
				}, Wl = !1, N = t; N !== null;)
				if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
				else
					for (; N !== null;) {
						t = N;
						try {
							var y = t.alternate;
							if (t.flags & 1024) switch (t.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (y !== null) {
										var v = y.memoizedProps,
											C = y.memoizedState,
											d = t.stateNode,
											h = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ft(t.type, v), C);
										d.__reactInternalSnapshotBeforeUpdate = h
									}
									break;
								case 3:
									var g = t.stateNode.containerInfo;
									g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(M(163))
							}
						} catch (k) {
							ge(t, t.return, k)
						}
						if (e = t.sibling, e !== null) {
							e.return = t.return, N = e;
							break
						}
						N = t.return
					}
			return y = wg, wg = !1, y
		}

		function Ko(e, t, n) {
			var r = t.updateQueue;
			if (r = r !== null ? r.lastEffect : null, r !== null) {
				var i = r = r.next;
				do {
					if ((i.tag & e) === e) {
						var o = i.destroy;
						i.destroy = void 0, o !== void 0 && qf(t, n, o)
					}
					i = i.next
				} while (i !== r)
			}
		}

		function ya(e, t) {
			if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
				var n = t = t.next;
				do {
					if ((n.tag & e) === e) {
						var r = n.create;
						n.destroy = r()
					}
					n = n.next
				} while (n !== t)
			}
		}

		function Zf(e) {
			var t = e.ref;
			if (t !== null) {
				var n = e.stateNode;
				switch (e.tag) {
					case 5:
						e = n;
						break;
					default:
						e = n
				}
				typeof t == "function" ? t(e) : t.current = e
			}
		}

		function pv(e) {
			var t = e.alternate;
			t !== null && (e.alternate = null, pv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Zt], delete t[os], delete t[zf], delete t[tE], delete t[nE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
		}

		function mv(e) {
			return e.tag === 5 || e.tag === 3 || e.tag === 4
		}

		function Sg(e) {
			e: for (;;) {
				for (; e.sibling === null;) {
					if (e.return === null || mv(e.return)) return null;
					e = e.return
				}
				for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
					if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
					e.child.return = e, e = e.child
				}
				if (!(e.flags & 2)) return e.stateNode
			}
		}

		function Jf(e, t, n) {
			var r = e.tag;
			if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gl));
			else if (r !== 4 && (e = e.child, e !== null))
				for (Jf(e, t, n), e = e.sibling; e !== null;) Jf(e, t, n), e = e.sibling
		}

		function ep(e, t, n) {
			var r = e.tag;
			if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
			else if (r !== 4 && (e = e.child, e !== null))
				for (ep(e, t, n), e = e.sibling; e !== null;) ep(e, t, n), e = e.sibling
		}
		var De = null,
			Bt = !1;

		function Mn(e, t, n) {
			for (n = n.child; n !== null;) dv(e, t, n), n = n.sibling
		}

		function dv(e, t, n) {
			if (Jt && typeof Jt.onCommitFiberUnmount == "function") try {
				Jt.onCommitFiberUnmount(ua, n)
			} catch {}
			switch (n.tag) {
				case 5:
					ze || mi(n, t);
				case 6:
					var r = De,
						i = Bt;
					De = null, Mn(e, t, n), De = r, Bt = i, De !== null && (Bt ? (e = De, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
					break;
				case 18:
					De !== null && (Bt ? (e = De, n = n.stateNode, e.nodeType === 8 ? nf(e.parentNode, n) : e.nodeType === 1 && nf(e, n), es(e)) : nf(De, n.stateNode));
					break;
				case 4:
					r = De, i = Bt, De = n.stateNode.containerInfo, Bt = !0, Mn(e, t, n), De = r, Bt = i;
					break;
				case 0:
				case 11:
				case 14:
				case 15:
					if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
						i = r = r.next;
						do {
							var o = i,
								s = o.destroy;
							o = o.tag, s !== void 0 && (o & 2 || o & 4) && qf(n, t, s), i = i.next
						} while (i !== r)
					}
					Mn(e, t, n);
					break;
				case 1:
					if (!ze && (mi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
						r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
					} catch (l) {
						ge(n, t, l)
					}
					Mn(e, t, n);
					break;
				case 21:
					Mn(e, t, n);
					break;
				case 22:
					n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, Mn(e, t, n), ze = r) : Mn(e, t, n);
					break;
				default:
					Mn(e, t, n)
			}
		}

		function kg(e) {
			var t = e.updateQueue;
			if (t !== null) {
				e.updateQueue = null;
				var n = e.stateNode;
				n === null && (n = e.stateNode = new vE), t.forEach(function(r) {
					var i = IE.bind(null, e, r);
					n.has(r) || (n.add(r), r.then(i, i))
				})
			}
		}

		function zt(e, t) {
			var n = t.deletions;
			if (n !== null)
				for (var r = 0; r < n.length; r++) {
					var i = n[r];
					try {
						var o = e,
							s = t,
							l = s;
						e: for (; l !== null;) {
							switch (l.tag) {
								case 5:
									De = l.stateNode, Bt = !1;
									break e;
								case 3:
									De = l.stateNode.containerInfo, Bt = !0;
									break e;
								case 4:
									De = l.stateNode.containerInfo, Bt = !0;
									break e
							}
							l = l.return
						}
						if (De === null) throw Error(M(160));
						dv(o, s, i), De = null, Bt = !1;
						var a = i.alternate;
						a !== null && (a.return = null), i.return = null
					} catch (u) {
						ge(i, t, u)
					}
				}
			if (t.subtreeFlags & 12854)
				for (t = t.child; t !== null;) hv(t, e), t = t.sibling
		}

		function hv(e, t) {
			var n = e.alternate,
				r = e.flags;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					if (zt(t, e), Xt(e), r & 4) {
						try {
							Ko(3, e, e.return), ya(3, e)
						} catch (v) {
							ge(e, e.return, v)
						}
						try {
							Ko(5, e, e.return)
						} catch (v) {
							ge(e, e.return, v)
						}
					}
					break;
				case 1:
					zt(t, e), Xt(e), r & 512 && n !== null && mi(n, n.return);
					break;
				case 5:
					if (zt(t, e), Xt(e), r & 512 && n !== null && mi(n, n.return), e.flags & 32) {
						var i = e.stateNode;
						try {
							Xo(i, "")
						} catch (v) {
							ge(e, e.return, v)
						}
					}
					if (r & 4 && (i = e.stateNode, i != null)) {
						var o = e.memoizedProps,
							s = n !== null ? n.memoizedProps : o,
							l = e.type,
							a = e.updateQueue;
						if (e.updateQueue = null, a !== null) try {
							l === "input" && o.type === "radio" && o.name != null && bg(i, o), Ef(l, s);
							var u = Ef(l, o);
							for (s = 0; s < a.length; s += 2) {
								var c = a[s],
									f = a[s + 1];
								c === "style" ? jg(i, f) : c === "dangerouslySetInnerHTML" ? Fg(i, f) : c === "children" ? Xo(i, f) : lp(i, c, f, u)
							}
							switch (l) {
								case "input":
									xf(i, o);
									break;
								case "textarea":
									_g(i, o);
									break;
								case "select":
									var p = i._wrapperState.wasMultiple;
									i._wrapperState.wasMultiple = !!o.multiple;
									var m = o.value;
									m != null ? hi(i, !!o.multiple, m, !1) : p !== !!o.multiple && (o.defaultValue != null ? hi(i, !!o.multiple, o.defaultValue, !0) : hi(i, !!o.multiple, o.multiple ? [] : "", !1))
							}
							i[os] = o
						} catch (v) {
							ge(e, e.return, v)
						}
					}
					break;
				case 6:
					if (zt(t, e), Xt(e), r & 4) {
						if (e.stateNode === null) throw Error(M(162));
						i = e.stateNode, o = e.memoizedProps;
						try {
							i.nodeValue = o
						} catch (v) {
							ge(e, e.return, v)
						}
					}
					break;
				case 3:
					if (zt(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
						es(t.containerInfo)
					} catch (v) {
						ge(e, e.return, v)
					}
					break;
				case 4:
					zt(t, e), Xt(e);
					break;
				case 13:
					zt(t, e), Xt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Bp = ve())), r & 4 && kg(e);
					break;
				case 22:
					if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (u = ze) || c, zt(t, e), ze = u) : zt(t, e), Xt(e), r & 8192) {
						if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
							for (N = e, c = e.child; c !== null;) {
								for (f = N = c; N !== null;) {
									switch (p = N, m = p.child, p.tag) {
										case 0:
										case 11:
										case 14:
										case 15:
											Ko(4, p, p.return);
											break;
										case 1:
											mi(p, p.return);
											var y = p.stateNode;
											if (typeof y.componentWillUnmount == "function") {
												r = p, n = p.return;
												try {
													t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
												} catch (v) {
													ge(r, n, v)
												}
											}
											break;
										case 5:
											mi(p, p.return);
											break;
										case 22:
											if (p.memoizedState !== null) {
												Eg(f);
												continue
											}
									}
									m !== null ? (m.return = p, N = m) : Eg(f)
								}
								c = c.sibling
							}
						e: for (c = null, f = e;;) {
							if (f.tag === 5) {
								if (c === null) {
									c = f;
									try {
										i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Bg("display", s))
									} catch (v) {
										ge(e, e.return, v)
									}
								}
							} else if (f.tag === 6) {
								if (c === null) try {
									f.stateNode.nodeValue = u ? "" : f.memoizedProps
								} catch (v) {
									ge(e, e.return, v)
								}
							} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
								f.child.return = f, f = f.child;
								continue
							}
							if (f === e) break e;
							for (; f.sibling === null;) {
								if (f.return === null || f.return === e) break e;
								c === f && (c = null), f = f.return
							}
							c === f && (c = null), f.sibling.return = f.return, f = f.sibling
						}
					}
					break;
				case 19:
					zt(t, e), Xt(e), r & 4 && kg(e);
					break;
				case 21:
					break;
				default:
					zt(t, e), Xt(e)
			}
		}

		function Xt(e) {
			var t = e.flags;
			if (t & 2) {
				try {
					e: {
						for (var n = e.return; n !== null;) {
							if (mv(n)) {
								var r = n;
								break e
							}
							n = n.return
						}
						throw Error(M(160))
					}
					switch (r.tag) {
						case 5:
							var i = r.stateNode;
							r.flags & 32 && (Xo(i, ""), r.flags &= -33);
							var o = Sg(e);
							ep(e, o, i);
							break;
						case 3:
						case 4:
							var s = r.stateNode.containerInfo,
								l = Sg(e);
							Jf(e, l, s);
							break;
						default:
							throw Error(M(161))
					}
				}
				catch (a) {
					ge(e, e.return, a)
				}
				e.flags &= -3
			}
			t & 4096 && (e.flags &= -4097)
		}

		function wE(e, t, n) {
			N = e, gv(e, t, n)
		}

		function gv(e, t, n) {
			for (var r = (e.mode & 1) !== 0; N !== null;) {
				var i = N,
					o = i.child;
				if (i.tag === 22 && r) {
					var s = i.memoizedState !== null || Al;
					if (!s) {
						var l = i.alternate,
							a = l !== null && l.memoizedState !== null || ze;
						l = Al;
						var u = ze;
						if (Al = s, (ze = a) && !u)
							for (N = i; N !== null;) s = N, a = s.child, s.tag === 22 && s.memoizedState !== null ? Pg(i) : a !== null ? (a.return = s, N = a) : Pg(i);
						for (; o !== null;) N = o, gv(o, t, n), o = o.sibling;
						N = i, Al = l, ze = u
					}
					Cg(e, t, n)
				} else i.subtreeFlags & 8772 && o !== null ? (o.return = i, N = o) : Cg(e, t, n)
			}
		}

		function Cg(e) {
			for (; N !== null;) {
				var t = N;
				if (t.flags & 8772) {
					var n = t.alternate;
					try {
						if (t.flags & 8772) switch (t.tag) {
							case 0:
							case 11:
							case 15:
								ze || ya(5, t);
								break;
							case 1:
								var r = t.stateNode;
								if (t.flags & 4 && !ze)
									if (n === null) r.componentDidMount();
									else {
										var i = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
										r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
									} var o = t.updateQueue;
								o !== null && lg(t, o, r);
								break;
							case 3:
								var s = t.updateQueue;
								if (s !== null) {
									if (n = null, t.child !== null) switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode
									}
									lg(t, s, n)
								}
								break;
							case 5:
								var l = t.stateNode;
								if (n === null && t.flags & 4) {
									n = l;
									var a = t.memoizedProps;
									switch (t.type) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											a.autoFocus && n.focus();
											break;
										case "img":
											a.src && (n.src = a.src)
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (t.memoizedState === null) {
									var u = t.alternate;
									if (u !== null) {
										var c = u.memoizedState;
										if (c !== null) {
											var f = c.dehydrated;
											f !== null && es(f)
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(M(163))
						}
						ze || t.flags & 512 && Zf(t)
					} catch (p) {
						ge(t, t.return, p)
					}
				}
				if (t === e) {
					N = null;
					break
				}
				if (n = t.sibling, n !== null) {
					n.return = t.return, N = n;
					break
				}
				N = t.return
			}
		}

		function Eg(e) {
			for (; N !== null;) {
				var t = N;
				if (t === e) {
					N = null;
					break
				}
				var n = t.sibling;
				if (n !== null) {
					n.return = t.return, N = n;
					break
				}
				N = t.return
			}
		}

		function Pg(e) {
			for (; N !== null;) {
				var t = N;
				try {
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							var n = t.return;
							try {
								ya(4, t)
							} catch (a) {
								ge(t, n, a)
							}
							break;
						case 1:
							var r = t.stateNode;
							if (typeof r.componentDidMount == "function") {
								var i = t.return;
								try {
									r.componentDidMount()
								} catch (a) {
									ge(t, i, a)
								}
							}
							var o = t.return;
							try {
								Zf(t)
							} catch (a) {
								ge(t, o, a)
							}
							break;
						case 5:
							var s = t.return;
							try {
								Zf(t)
							} catch (a) {
								ge(t, s, a)
							}
					}
				} catch (a) {
					ge(t, t.return, a)
				}
				if (t === e) {
					N = null;
					break
				}
				var l = t.sibling;
				if (l !== null) {
					l.return = t.return, N = l;
					break
				}
				N = t.return
			}
		}
		var SE = Math.ceil,
			ia = vn.ReactCurrentDispatcher,
			zp = vn.ReactCurrentOwner,
			Mt = vn.ReactCurrentBatchConfig,
			Q = 0,
			Ae = null,
			ke = null,
			Re = 0,
			ht = 0,
			di = Yn(0),
			Pe = 0,
			fs = null,
			Dr = 0,
			va = 0,
			Fp = 0,
			Go = null,
			rt = null,
			Bp = 0,
			Ai = 1 / 0,
			un = null,
			oa = !1,
			tp = null,
			Un = null,
			Il = !1,
			bn = null,
			sa = 0,
			Yo = 0,
			np = null,
			bl = -1,
			_l = 0;

		function Xe() {
			return Q & 6 ? ve() : bl !== -1 ? bl : bl = ve()
		}

		function Hn(e) {
			return e.mode & 1 ? Q & 2 && Re !== 0 ? Re & -Re : iE.transition !== null ? (_l === 0 && (_l = Jg()), _l) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : sy(e.type)), e) : 1
		}

		function Ht(e, t, n, r) {
			if (50 < Yo) throw Yo = 0, np = null, Error(M(185));
			ps(e, n, r), (!(Q & 2) || e !== Ae) && (e === Ae && (!(Q & 2) && (va |= n), Pe === 4 && Vn(e, Re)), lt(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (Ai = ve() + 500, da && Qn()))
		}

		function lt(e, t) {
			var n = e.callbackNode;
			sC(e, t);
			var r = Hl(e, e === Ae ? Re : 0);
			if (r === 0) n !== null && Nh(n), e.callbackNode = null, e.callbackPriority = 0;
			else if (t = r & -r, e.callbackPriority !== t) {
				if (n != null && Nh(n), t === 1) e.tag === 0 ? rE(Tg.bind(null, e)) : Py(Tg.bind(null, e)), JC(function() {
					!(Q & 6) && Qn()
				}), n = null;
				else {
					switch (ey(r)) {
						case 1:
							n = pp;
							break;
						case 4:
							n = qg;
							break;
						case 16:
							n = Ul;
							break;
						case 536870912:
							n = Zg;
							break;
						default:
							n = Ul
					}
					n = Ev(n, yv.bind(null, e))
				}
				e.callbackPriority = t, e.callbackNode = n
			}
		}

		function yv(e, t) {
			if (bl = -1, _l = 0, Q & 6) throw Error(M(327));
			var n = e.callbackNode;
			if (wi() && e.callbackNode !== n) return null;
			var r = Hl(e, e === Ae ? Re : 0);
			if (r === 0) return null;
			if (r & 30 || r & e.expiredLanes || t) t = la(e, r);
			else {
				t = r;
				var i = Q;
				Q |= 2;
				var o = xv();
				(Ae !== e || Re !== t) && (un = null, Ai = ve() + 500, Tr(e, t));
				do try {
					EE();
					break
				} catch (l) {
					vv(e, l)
				}
				while (!0);
				Pp(), ia.current = o, Q = i, ke !== null ? t = 0 : (Ae = null, Re = 0, t = Pe)
			}
			if (t !== 0) {
				if (t === 2 && (i = Lf(e), i !== 0 && (r = i, t = rp(e, i))), t === 1) throw n = fs, Tr(e, 0), Vn(e, r), lt(e, ve()), n;
				if (t === 6) Vn(e, r);
				else {
					if (i = e.current.alternate, !(r & 30) && !kE(i) && (t = la(e, r), t === 2 && (o = Lf(e), o !== 0 && (r = o, t = rp(e, o))), t === 1)) throw n = fs, Tr(e, 0), Vn(e, r), lt(e, ve()), n;
					switch (e.finishedWork = i, e.finishedLanes = r, t) {
						case 0:
						case 1:
							throw Error(M(345));
						case 2:
							kr(e, rt, un);
							break;
						case 3:
							if (Vn(e, r), (r & 130023424) === r && (t = Bp + 500 - ve(), 10 < t)) {
								if (Hl(e, 0) !== 0) break;
								if (i = e.suspendedLanes, (i & r) !== r) {
									Xe(), e.pingedLanes |= e.suspendedLanes & i;
									break
								}
								e.timeoutHandle = _f(kr.bind(null, e, rt, un), t);
								break
							}
							kr(e, rt, un);
							break;
						case 4:
							if (Vn(e, r), (r & 4194240) === r) break;
							for (t = e.eventTimes, i = -1; 0 < r;) {
								var s = 31 - Ut(r);
								o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
							}
							if (r = i, r = ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * SE(r / 1960)) - r, 10 < r) {
								e.timeoutHandle = _f(kr.bind(null, e, rt, un), r);
								break
							}
							kr(e, rt, un);
							break;
						case 5:
							kr(e, rt, un);
							break;
						default:
							throw Error(M(329))
					}
				}
			}
			return lt(e, ve()), e.callbackNode === n ? yv.bind(null, e) : null
		}

		function rp(e, t) {
			var n = Go;
			return e.current.memoizedState.isDehydrated && (Tr(e, t).flags |= 256), e = la(e, t), e !== 2 && (t = rt, rt = n, t !== null && ip(t)), e
		}

		function ip(e) {
			rt === null ? rt = e : rt.push.apply(rt, e)
		}

		function kE(e) {
			for (var t = e;;) {
				if (t.flags & 16384) {
					var n = t.updateQueue;
					if (n !== null && (n = n.stores, n !== null))
						for (var r = 0; r < n.length; r++) {
							var i = n[r],
								o = i.getSnapshot;
							i = i.value;
							try {
								if (!Wt(o(), i)) return !1
							} catch {
								return !1
							}
						}
				}
				if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
				else {
					if (t === e) break;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) return !0;
						t = t.return
					}
					t.sibling.return = t.return, t = t.sibling
				}
			}
			return !0
		}

		function Vn(e, t) {
			for (t &= ~Fp, t &= ~va, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
				var n = 31 - Ut(t),
					r = 1 << n;
				e[n] = -1, t &= ~r
			}
		}

		function Tg(e) {
			if (Q & 6) throw Error(M(327));
			wi();
			var t = Hl(e, 0);
			if (!(t & 1)) return lt(e, ve()), null;
			var n = la(e, t);
			if (e.tag !== 0 && n === 2) {
				var r = Lf(e);
				r !== 0 && (t = r, n = rp(e, r))
			}
			if (n === 1) throw n = fs, Tr(e, 0), Vn(e, t), lt(e, ve()), n;
			if (n === 6) throw Error(M(345));
			return e.finishedWork = e.current.alternate, e.finishedLanes = t, kr(e, rt, un), lt(e, ve()), null
		}

		function jp(e, t) {
			var n = Q;
			Q |= 1;
			try {
				return e(t)
			} finally {
				Q = n, Q === 0 && (Ai = ve() + 500, da && Qn())
			}
		}

		function Rr(e) {
			bn !== null && bn.tag === 0 && !(Q & 6) && wi();
			var t = Q;
			Q |= 1;
			var n = Mt.transition,
				r = J;
			try {
				if (Mt.transition = null, J = 1, e) return e()
			} finally {
				J = r, Mt.transition = n, Q = t, !(Q & 6) && Qn()
			}
		}

		function Up() {
			ht = di.current, ae(di)
		}

		function Tr(e, t) {
			e.finishedWork = null, e.finishedLanes = 0;
			var n = e.timeoutHandle;
			if (n !== -1 && (e.timeoutHandle = -1, ZC(n)), ke !== null)
				for (n = ke.return; n !== null;) {
					var r = n;
					switch (kp(r), r.tag) {
						case 1:
							r = r.type.childContextTypes, r != null && Yl();
							break;
						case 3:
							Pi(), ae(ot), ae(Fe), Dp();
							break;
						case 5:
							Mp(r);
							break;
						case 4:
							Pi();
							break;
						case 13:
							ae(me);
							break;
						case 19:
							ae(me);
							break;
						case 10:
							Tp(r.type._context);
							break;
						case 22:
						case 23:
							Up()
					}
					n = n.return
				}
			if (Ae = e, ke = e = Wn(e.current, null), Re = ht = t, Pe = 0, fs = null, Fp = va = Dr = 0, rt = Go = null, Er !== null) {
				for (t = 0; t < Er.length; t++)
					if (n = Er[t], r = n.interleaved, r !== null) {
						n.interleaved = null;
						var i = r.next,
							o = n.pending;
						if (o !== null) {
							var s = o.next;
							o.next = i, r.next = s
						}
						n.pending = r
					} Er = null
			}
			return e
		}

		function vv(e, t) {
			do {
				var n = ke;
				try {
					if (Pp(), Nl.current = ra, na) {
						for (var r = de.memoizedState; r !== null;) {
							var i = r.queue;
							i !== null && (i.pending = null), r = r.next
						}
						na = !1
					}
					if (Mr = 0, Te = Ee = de = null, $o = !1, as = 0, zp.current = null, n === null || n.return === null) {
						Pe = 1, fs = t, ke = null;
						break
					}
					e: {
						var o = e,
							s = n.return,
							l = n,
							a = t;
						if (t = Re, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
							var u = a,
								c = l,
								f = c.tag;
							if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
								var p = c.alternate;
								p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
							}
							var m = mg(s);
							if (m !== null) {
								m.flags &= -257, dg(m, s, l, o, t), m.mode & 1 && pg(o, u, t), t = m, a = u;
								var y = t.updateQueue;
								if (y === null) {
									var v = new Set;
									v.add(a), t.updateQueue = v
								} else y.add(a);
								break e
							} else {
								if (!(t & 1)) {
									pg(o, u, t), Hp();
									break e
								}
								a = Error(M(426))
							}
						} else if (fe && l.mode & 1) {
							var C = mg(s);
							if (C !== null) {
								!(C.flags & 65536) && (C.flags |= 256), dg(C, s, l, o, t), Cp(Ti(a, l));
								break e
							}
						}
						o = a = Ti(a, l),
						Pe !== 4 && (Pe = 2),
						Go === null ? Go = [o] : Go.push(o),
						o = s;do {
							switch (o.tag) {
								case 3:
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var d = ev(o, a, t);
									sg(o, d);
									break e;
								case 1:
									l = a;
									var h = o.type,
										g = o.stateNode;
									if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Un === null || !Un.has(g)))) {
										o.flags |= 65536, t &= -t, o.lanes |= t;
										var k = tv(o, l, t);
										sg(o, k);
										break e
									}
							}
							o = o.return
						} while (o !== null)
					}
					Sv(n)
				} catch (E) {
					t = E, ke === n && n !== null && (ke = n = n.return);
					continue
				}
				break
			} while (!0)
		}

		function xv() {
			var e = ia.current;
			return ia.current = ra, e === null ? ra : e
		}

		function Hp() {
			(Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Ae === null || !(Dr & 268435455) && !(va & 268435455) || Vn(Ae, Re)
		}

		function la(e, t) {
			var n = Q;
			Q |= 2;
			var r = xv();
			(Ae !== e || Re !== t) && (un = null, Tr(e, t));
			do try {
				CE();
				break
			} catch (i) {
				vv(e, i)
			}
			while (!0);
			if (Pp(), Q = n, ia.current = r, ke !== null) throw Error(M(261));
			return Ae = null, Re = 0, Pe
		}

		function CE() {
			for (; ke !== null;) wv(ke)
		}

		function EE() {
			for (; ke !== null && !qk();) wv(ke)
		}

		function wv(e) {
			var t = Cv(e.alternate, e, ht);
			e.memoizedProps = e.pendingProps, t === null ? Sv(e) : ke = t, zp.current = null
		}

		function Sv(e) {
			var t = e;
			do {
				var n = t.alternate;
				if (e = t.return, t.flags & 32768) {
					if (n = yE(n, t), n !== null) {
						n.flags &= 32767, ke = n;
						return
					}
					if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
					else {
						Pe = 6, ke = null;
						return
					}
				} else if (n = gE(n, t, ht), n !== null) {
					ke = n;
					return
				}
				if (t = t.sibling, t !== null) {
					ke = t;
					return
				}
				ke = t = e
			} while (t !== null);
			Pe === 0 && (Pe = 5)
		}

		function kr(e, t, n) {
			var r = J,
				i = Mt.transition;
			try {
				Mt.transition = null, J = 1, PE(e, t, n, r)
			} finally {
				Mt.transition = i, J = r
			}
			return null
		}

		function PE(e, t, n, r) {
			do wi(); while (bn !== null);
			if (Q & 6) throw Error(M(327));
			n = e.finishedWork;
			var i = e.finishedLanes;
			if (n === null) return null;
			if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
			e.callbackNode = null, e.callbackPriority = 0;
			var o = n.lanes | n.childLanes;
			if (lC(e, o), e === Ae && (ke = Ae = null, Re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Il || (Il = !0, Ev(Ul, function() {
					return wi(), null
				})), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
				o = Mt.transition, Mt.transition = null;
				var s = J;
				J = 1;
				var l = Q;
				Q |= 4, zp.current = null, xE(e, n), hv(n, e), GC(Of), Wl = !!Vf, Of = Vf = null, e.current = n, wE(n, e, i), Zk(), Q = l, J = s, Mt.transition = o
			} else e.current = n;
			if (Il && (Il = !1, bn = e, sa = i), o = e.pendingLanes, o === 0 && (Un = null), tC(n.stateNode, r), lt(e, ve()), t !== null)
				for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
					componentStack: i.stack,
					digest: i.digest
				});
			if (oa) throw oa = !1, e = tp, tp = null, e;
			return sa & 1 && e.tag !== 0 && wi(), o = e.pendingLanes, o & 1 ? e === np ? Yo++ : (Yo = 0, np = e) : Yo = 0, Qn(), null
		}

		function wi() {
			if (bn !== null) {
				var e = ey(sa),
					t = Mt.transition,
					n = J;
				try {
					if (Mt.transition = null, J = 16 > e ? 16 : e, bn === null) var r = !1;
					else {
						if (e = bn, bn = null, sa = 0, Q & 6) throw Error(M(331));
						var i = Q;
						for (Q |= 4, N = e.current; N !== null;) {
							var o = N,
								s = o.child;
							if (N.flags & 16) {
								var l = o.deletions;
								if (l !== null) {
									for (var a = 0; a < l.length; a++) {
										var u = l[a];
										for (N = u; N !== null;) {
											var c = N;
											switch (c.tag) {
												case 0:
												case 11:
												case 15:
													Ko(8, c, o)
											}
											var f = c.child;
											if (f !== null) f.return = c, N = f;
											else
												for (; N !== null;) {
													c = N;
													var p = c.sibling,
														m = c.return;
													if (pv(c), c === u) {
														N = null;
														break
													}
													if (p !== null) {
														p.return = m, N = p;
														break
													}
													N = m
												}
										}
									}
									var y = o.alternate;
									if (y !== null) {
										var v = y.child;
										if (v !== null) {
											y.child = null;
											do {
												var C = v.sibling;
												v.sibling = null, v = C
											} while (v !== null)
										}
									}
									N = o
								}
							}
							if (o.subtreeFlags & 2064 && s !== null) s.return = o, N = s;
							else e: for (; N !== null;) {
								if (o = N, o.flags & 2048) switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Ko(9, o, o.return)
								}
								var d = o.sibling;
								if (d !== null) {
									d.return = o.return, N = d;
									break e
								}
								N = o.return
							}
						}
						var h = e.current;
						for (N = h; N !== null;) {
							s = N;
							var g = s.child;
							if (s.subtreeFlags & 2064 && g !== null) g.return = s, N = g;
							else e: for (s = h; N !== null;) {
								if (l = N, l.flags & 2048) try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											ya(9, l)
									}
								} catch (E) {
									ge(l, l.return, E)
								}
								if (l === s) {
									N = null;
									break e
								}
								var k = l.sibling;
								if (k !== null) {
									k.return = l.return, N = k;
									break e
								}
								N = l.return
							}
						}
						if (Q = i, Qn(), Jt && typeof Jt.onPostCommitFiberRoot == "function") try {
							Jt.onPostCommitFiberRoot(ua, e)
						} catch {}
						r = !0
					}
					return r
				} finally {
					J = n, Mt.transition = t
				}
			}
			return !1
		}

		function Ag(e, t, n) {
			t = Ti(n, t), t = ev(e, t, 1), e = jn(e, t, 1), t = Xe(), e !== null && (ps(e, 1, t), lt(e, t))
		}

		function ge(e, t, n) {
			if (e.tag === 3) Ag(e, e, n);
			else
				for (; t !== null;) {
					if (t.tag === 3) {
						Ag(t, e, n);
						break
					} else if (t.tag === 1) {
						var r = t.stateNode;
						if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Un === null || !Un.has(r))) {
							e = Ti(n, e), e = tv(t, e, 1), t = jn(t, e, 1), e = Xe(), t !== null && (ps(t, 1, e), lt(t, e));
							break
						}
					}
					t = t.return
				}
		}

		function TE(e, t, n) {
			var r = e.pingCache;
			r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (Re & n) === n && (Pe === 4 || Pe === 3 && (Re & 130023424) === Re && 500 > ve() - Bp ? Tr(e, 0) : Fp |= n), lt(e, t)
		}

		function kv(e, t) {
			t === 0 && (e.mode & 1 ? (t = dl, dl <<= 1, !(dl & 130023424) && (dl = 4194304)) : t = 1);
			var n = Xe();
			e = gn(e, t), e !== null && (ps(e, t, n), lt(e, n))
		}

		function AE(e) {
			var t = e.memoizedState,
				n = 0;
			t !== null && (n = t.retryLane), kv(e, n)
		}

		function IE(e, t) {
			var n = 0;
			switch (e.tag) {
				case 13:
					var r = e.stateNode,
						i = e.memoizedState;
					i !== null && (n = i.retryLane);
					break;
				case 19:
					r = e.stateNode;
					break;
				default:
					throw Error(M(314))
			}
			r !== null && r.delete(t), kv(e, n)
		}
		var Cv;
		Cv = function(e, t, n) {
			if (e !== null)
				if (e.memoizedProps !== t.pendingProps || ot.current) it = !0;
				else {
					if (!(e.lanes & n) && !(t.flags & 128)) return it = !1, hE(e, t, n);
					it = !!(e.flags & 131072)
				}
			else it = !1, fe && t.flags & 1048576 && Ty(t, ql, t.index);
			switch (t.lanes = 0, t.tag) {
				case 2:
					var r = t.type;
					Ol(e, t), e = t.pendingProps;
					var i = ki(t, Fe.current);
					xi(t, n), i = Np(null, t, r, e, i, n);
					var o = Vp();
					return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, st(r) ? (o = !0, Ql(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ip(t), i.updater = ga, t.stateNode = i, i._reactInternals = t, Wf(t, r, e, n), t = Gf(null, t, r, !0, o, n)) : (t.tag = 0, fe && o && Sp(t), Qe(null, t, i, n), t = t.child), t;
				case 16:
					r = t.elementType;
					e: {
						switch (Ol(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = ME(r), e = Ft(r, e), i) {
							case 0:
								t = Kf(null, t, r, e, n);
								break e;
							case 1:
								t = yg(null, t, r, e, n);
								break e;
							case 11:
								t = hg(null, t, r, e, n);
								break e;
							case 14:
								t = gg(null, t, r, Ft(r.type, e), n);
								break e
						}
						throw Error(M(306, r, ""))
					}
					return t;
				case 0:
					return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), Kf(e, t, r, i, n);
				case 1:
					return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), yg(e, t, r, i, n);
				case 3:
					e: {
						if (ov(t), e === null) throw Error(M(387));r = t.pendingProps,
						o = t.memoizedState,
						i = o.element,
						Ry(e, t),
						ea(t, r, null, n);
						var s = t.memoizedState;
						if (r = s.element, o.isDehydrated)
							if (o = {
									element: r,
									isDehydrated: !1,
									cache: s.cache,
									pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
									transitions: s.transitions
								}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
								i = Ti(Error(M(423)), t), t = vg(e, t, r, n, i);
								break e
							} else if (r !== i) {
							i = Ti(Error(M(424)), t), t = vg(e, t, r, n, i);
							break e
						} else
							for (gt = Bn(t.stateNode.containerInfo.firstChild), yt = t, fe = !0, jt = null, n = My(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
						else {
							if (Ci(), r === i) {
								t = yn(e, t, n);
								break e
							}
							Qe(e, t, r, n)
						}
						t = t.child
					}
					return t;
				case 5:
					return Ny(t), e === null && jf(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, bf(r, i) ? s = null : o !== null && bf(r, o) && (t.flags |= 32), iv(e, t), Qe(e, t, s, n), t.child;
				case 6:
					return e === null && jf(t), null;
				case 13:
					return sv(e, t, n);
				case 4:
					return Lp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ei(t, null, r, n) : Qe(e, t, r, n), t.child;
				case 11:
					return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), hg(e, t, r, i, n);
				case 7:
					return Qe(e, t, t.pendingProps, n), t.child;
				case 8:
					return Qe(e, t, t.pendingProps.children, n), t.child;
				case 12:
					return Qe(e, t, t.pendingProps.children, n), t.child;
				case 10:
					e: {
						if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, ie(Zl, r._currentValue), r._currentValue = s, o !== null)
							if (Wt(o.value, s)) {
								if (o.children === i.children && !ot.current) {
									t = yn(e, t, n);
									break e
								}
							} else
								for (o = t.child, o !== null && (o.return = t); o !== null;) {
									var l = o.dependencies;
									if (l !== null) {
										s = o.child;
										for (var a = l.firstContext; a !== null;) {
											if (a.context === r) {
												if (o.tag === 1) {
													a = mn(-1, n & -n), a.tag = 2;
													var u = o.updateQueue;
													if (u !== null) {
														u = u.shared;
														var c = u.pending;
														c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
													}
												}
												o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Uf(o.return, n, t), l.lanes |= n;
												break
											}
											a = a.next
										}
									} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
									else if (o.tag === 18) {
										if (s = o.return, s === null) throw Error(M(341));
										s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Uf(s, n, t), s = o.sibling
									} else s = o.child;
									if (s !== null) s.return = o;
									else
										for (s = o; s !== null;) {
											if (s === t) {
												s = null;
												break
											}
											if (o = s.sibling, o !== null) {
												o.return = s.return, s = o;
												break
											}
											s = s.return
										}
									o = s
								}
						Qe(e, t, i.children, n),
						t = t.child
					}
					return t;
				case 9:
					return i = t.type, r = t.pendingProps.children, xi(t, n), i = Dt(i), r = r(i), t.flags |= 1, Qe(e, t, r, n), t.child;
				case 14:
					return r = t.type, i = Ft(r, t.pendingProps), i = Ft(r.type, i), gg(e, t, r, i, n);
				case 15:
					return nv(e, t, t.type, t.pendingProps, n);
				case 17:
					return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), Ol(e, t), t.tag = 1, st(r) ? (e = !0, Ql(t)) : e = !1, xi(t, n), Jy(t, r, i), Wf(t, r, i, n), Gf(null, t, r, !0, e, n);
				case 19:
					return lv(e, t, n);
				case 22:
					return rv(e, t, n)
			}
			throw Error(M(156, t.tag))
		};

		function Ev(e, t) {
			return Xg(e, t)
		}

		function LE(e, t, n, r) {
			this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
		}

		function Lt(e, t, n, r) {
			return new LE(e, t, n, r)
		}

		function Wp(e) {
			return e = e.prototype, !(!e || !e.isReactComponent)
		}

		function ME(e) {
			if (typeof e == "function") return Wp(e) ? 1 : 0;
			if (e != null) {
				if (e = e.$$typeof, e === up) return 11;
				if (e === cp) return 14
			}
			return 2
		}

		function Wn(e, t) {
			var n = e.alternate;
			return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext
			}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
		}

		function zl(e, t, n, r, i, o) {
			var s = 2;
			if (r = e, typeof e == "function") Wp(e) && (s = 1);
			else if (typeof e == "string") s = 5;
			else e: switch (e) {
				case ii:
					return Ar(n.children, i, o, t);
				case ap:
					s = 8, i |= 8;
					break;
				case df:
					return e = Lt(12, n, t, i | 2), e.elementType = df, e.lanes = o, e;
				case hf:
					return e = Lt(13, n, t, i), e.elementType = hf, e.lanes = o, e;
				case gf:
					return e = Lt(19, n, t, i), e.elementType = gf, e.lanes = o, e;
				case Ng:
					return xa(n, i, o, t);
				default:
					if (typeof e == "object" && e !== null) switch (e.$$typeof) {
						case Dg:
							s = 10;
							break e;
						case Rg:
							s = 9;
							break e;
						case up:
							s = 11;
							break e;
						case cp:
							s = 14;
							break e;
						case Dn:
							s = 16, r = null;
							break e
					}
					throw Error(M(130, e == null ? e : typeof e, ""))
			}
			return t = Lt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
		}

		function Ar(e, t, n, r) {
			return e = Lt(7, e, r, t), e.lanes = n, e
		}

		function xa(e, t, n, r) {
			return e = Lt(22, e, r, t), e.elementType = Ng, e.lanes = n, e.stateNode = {
				isHidden: !1
			}, e
		}

		function ff(e, t, n) {
			return e = Lt(6, e, null, t), e.lanes = n, e
		}

		function pf(e, t, n) {
			return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation
			}, t
		}

		function DE(e, t, n, r, i) {
			this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yc(0), this.expirationTimes = Yc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yc(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
		}

		function $p(e, t, n, r, i, o, s, l, a) {
			return e = new DE(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
				element: r,
				isDehydrated: n,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null
			}, Ip(o), e
		}

		function RE(e, t, n) {
			var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
			return {
				$$typeof: ri,
				key: r == null ? null : "" + r,
				children: e,
				containerInfo: t,
				implementation: n
			}
		}

		function Pv(e) {
			if (!e) return Kn;
			e = e._reactInternals;
			e: {
				if (Vr(e) !== e || e.tag !== 1) throw Error(M(170));
				var t = e;do {
					switch (t.tag) {
						case 3:
							t = t.stateNode.context;
							break e;
						case 1:
							if (st(t.type)) {
								t = t.stateNode.__reactInternalMemoizedMergedChildContext;
								break e
							}
					}
					t = t.return
				} while (t !== null);
				throw Error(M(171))
			}
			if (e.tag === 1) {
				var n = e.type;
				if (st(n)) return Ey(e, n, t)
			}
			return t
		}

		function Tv(e, t, n, r, i, o, s, l, a) {
			return e = $p(n, r, !0, e, i, o, s, l, a), e.context = Pv(null), n = e.current, r = Xe(), i = Hn(n), o = mn(r, i), o.callback = t ?? null, jn(n, o, i), e.current.lanes = i, ps(e, i, r), lt(e, r), e
		}

		function wa(e, t, n, r) {
			var i = t.current,
				o = Xe(),
				s = Hn(i);
			return n = Pv(n), t.context === null ? t.context = n : t.pendingContext = n, t = mn(o, s), t.payload = {
				element: e
			}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jn(i, t, s), e !== null && (Ht(e, i, s, o), Rl(e, i, s)), s
		}

		function aa(e) {
			if (e = e.current, !e.child) return null;
			switch (e.child.tag) {
				case 5:
					return e.child.stateNode;
				default:
					return e.child.stateNode
			}
		}

		function Ig(e, t) {
			if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
				var n = e.retryLane;
				e.retryLane = n !== 0 && n < t ? n : t
			}
		}

		function Kp(e, t) {
			Ig(e, t), (e = e.alternate) && Ig(e, t)
		}

		function NE() {
			return null
		}
		var Av = typeof reportError == "function" ? reportError : function(e) {
			console.error(e)
		};

		function Gp(e) {
			this._internalRoot = e
		}
		Sa.prototype.render = Gp.prototype.render = function(e) {
			var t = this._internalRoot;
			if (t === null) throw Error(M(409));
			wa(e, t, null, null)
		};
		Sa.prototype.unmount = Gp.prototype.unmount = function() {
			var e = this._internalRoot;
			if (e !== null) {
				this._internalRoot = null;
				var t = e.containerInfo;
				Rr(function() {
					wa(null, e, null, null)
				}), t[hn] = null
			}
		};

		function Sa(e) {
			this._internalRoot = e
		}
		Sa.prototype.unstable_scheduleHydration = function(e) {
			if (e) {
				var t = ry();
				e = {
					blockedOn: null,
					target: e,
					priority: t
				};
				for (var n = 0; n < Nn.length && t !== 0 && t < Nn[n].priority; n++);
				Nn.splice(n, 0, e), n === 0 && oy(e)
			}
		};

		function Yp(e) {
			return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
		}

		function ka(e) {
			return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
		}

		function Lg() {}

		function VE(e, t, n, r, i) {
			if (i) {
				if (typeof r == "function") {
					var o = r;
					r = function() {
						var u = aa(s);
						o.call(u)
					}
				}
				var s = Tv(t, r, e, 0, null, !1, !1, "", Lg);
				return e._reactRootContainer = s, e[hn] = s.current, rs(e.nodeType === 8 ? e.parentNode : e), Rr(), s
			}
			for (; i = e.lastChild;) e.removeChild(i);
			if (typeof r == "function") {
				var l = r;
				r = function() {
					var u = aa(a);
					l.call(u)
				}
			}
			var a = $p(e, 0, !1, null, null, !1, !1, "", Lg);
			return e._reactRootContainer = a, e[hn] = a.current, rs(e.nodeType === 8 ? e.parentNode : e), Rr(function() {
				wa(t, a, n, r)
			}), a
		}

		function Ca(e, t, n, r, i) {
			var o = n._reactRootContainer;
			if (o) {
				var s = o;
				if (typeof i == "function") {
					var l = i;
					i = function() {
						var a = aa(s);
						l.call(a)
					}
				}
				wa(t, s, e, i)
			} else s = VE(n, t, e, i, r);
			return aa(s)
		}
		ty = function(e) {
			switch (e.tag) {
				case 3:
					var t = e.stateNode;
					if (t.current.memoizedState.isDehydrated) {
						var n = zo(t.pendingLanes);
						n !== 0 && (mp(t, n | 1), lt(t, ve()), !(Q & 6) && (Ai = ve() + 500, Qn()))
					}
					break;
				case 13:
					Rr(function() {
						var r = gn(e, 1);
						if (r !== null) {
							var i = Xe();
							Ht(r, e, 1, i)
						}
					}), Kp(e, 1)
			}
		};
		dp = function(e) {
			if (e.tag === 13) {
				var t = gn(e, 134217728);
				if (t !== null) {
					var n = Xe();
					Ht(t, e, 134217728, n)
				}
				Kp(e, 134217728)
			}
		};
		ny = function(e) {
			if (e.tag === 13) {
				var t = Hn(e),
					n = gn(e, t);
				if (n !== null) {
					var r = Xe();
					Ht(n, e, t, r)
				}
				Kp(e, t)
			}
		};
		ry = function() {
			return J
		};
		iy = function(e, t) {
			var n = J;
			try {
				return J = e, t()
			} finally {
				J = n
			}
		};
		Tf = function(e, t, n) {
			switch (t) {
				case "input":
					if (xf(e, n), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = ma(r);
								if (!i) throw Error(M(90));
								Og(r), xf(r, i)
							}
						}
					}
					break;
				case "textarea":
					_g(e, n);
					break;
				case "select":
					t = n.value, t != null && hi(e, !!n.multiple, t, !1)
			}
		};
		Wg = jp;
		$g = Rr;
		var OE = {
				usingClientEntryPoint: !1,
				Events: [ds, ai, ma, Ug, Hg, jp]
			},
			Vo = {
				findFiberByHostInstance: Cr,
				bundleType: 0,
				version: "18.3.1",
				rendererPackageName: "react-dom"
			},
			bE = {
				bundleType: Vo.bundleType,
				version: Vo.version,
				rendererPackageName: Vo.rendererPackageName,
				rendererConfig: Vo.rendererConfig,
				overrideHookState: null,
				overrideHookStateDeletePath: null,
				overrideHookStateRenamePath: null,
				overrideProps: null,
				overridePropsDeletePath: null,
				overridePropsRenamePath: null,
				setErrorHandler: null,
				setSuspenseHandler: null,
				scheduleUpdate: null,
				currentDispatcherRef: vn.ReactCurrentDispatcher,
				findHostInstanceByFiber: function(e) {
					return e = Yg(e), e === null ? null : e.stateNode
				},
				findFiberByHostInstance: Vo.findFiberByHostInstance || NE,
				findHostInstancesForRefresh: null,
				scheduleRefresh: null,
				scheduleRoot: null,
				setRefreshHandler: null,
				getCurrentFiber: null,
				reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
			};
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Oo.isDisabled && Oo.supportsFiber)) try {
			ua = Oo.inject(bE), Jt = Oo
		} catch {}
		var Oo;
		wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = OE;
		wt.createPortal = function(e, t) {
			var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!Yp(t)) throw Error(M(200));
			return RE(e, t, null, n)
		};
		wt.createRoot = function(e, t) {
			if (!Yp(e)) throw Error(M(299));
			var n = !1,
				r = "",
				i = Av;
			return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = $p(e, 1, !1, null, null, n, !1, r, i), e[hn] = t.current, rs(e.nodeType === 8 ? e.parentNode : e), new Gp(t)
		};
		wt.findDOMNode = function(e) {
			if (e == null) return null;
			if (e.nodeType === 1) return e;
			var t = e._reactInternals;
			if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
			return e = Yg(t), e = e === null ? null : e.stateNode, e
		};
		wt.flushSync = function(e) {
			return Rr(e)
		};
		wt.hydrate = function(e, t, n) {
			if (!ka(t)) throw Error(M(200));
			return Ca(null, e, t, !0, n)
		};
		wt.hydrateRoot = function(e, t, n) {
			if (!Yp(e)) throw Error(M(405));
			var r = n != null && n.hydratedSources || null,
				i = !1,
				o = "",
				s = Av;
			if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Tv(t, null, e, 1, n ?? null, i, !1, o, s), e[hn] = t.current, rs(e), r)
				for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
			return new Sa(t)
		};
		wt.render = function(e, t, n) {
			if (!ka(t)) throw Error(M(200));
			return Ca(null, e, t, !1, n)
		};
		wt.unmountComponentAtNode = function(e) {
			if (!ka(e)) throw Error(M(40));
			return e._reactRootContainer ? (Rr(function() {
				Ca(null, null, e, !1, function() {
					e._reactRootContainer = null, e[hn] = null
				})
			}), !0) : !1
		};
		wt.unstable_batchedUpdates = jp;
		wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
			if (!ka(n)) throw Error(M(200));
			if (e == null || e._reactInternals === void 0) throw Error(M(38));
			return Ca(e, t, n, !1, r)
		};
		wt.version = "18.3.1-next-f1338f8080-20240426"
	});
	var Dv = Ge((ZL, Mv) => {
		"use strict";

		function Lv() {
			if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)
			} catch (e) {
				console.error(e)
			}
		}
		Lv(), Mv.exports = Iv()
	});
	var $v = Ge((nD, Wv) => {
		var Bv = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
			GE = /\n/g,
			YE = /^\s*/,
			QE = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
			XE = /^:\s*/,
			qE = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
			ZE = /^[;\s]*/,
			JE = /^\s+|\s+$/g,
			eP = `
`,
			jv = "/",
			Uv = "*",
			_r = "",
			tP = "comment",
			nP = "declaration";
		Wv.exports = function(e, t) {
			if (typeof e != "string") throw new TypeError("First argument must be a string");
			if (!e) return [];
			t = t || {};
			var n = 1,
				r = 1;

			function i(v) {
				var C = v.match(GE);
				C && (n += C.length);
				var d = v.lastIndexOf(eP);
				r = ~d ? v.length - d : r + v.length
			}

			function o() {
				var v = {
					line: n,
					column: r
				};
				return function(C) {
					return C.position = new s(v), c(), C
				}
			}

			function s(v) {
				this.start = v, this.end = {
					line: n,
					column: r
				}, this.source = t.source
			}
			s.prototype.content = e;
			var l = [];

			function a(v) {
				var C = new Error(t.source + ":" + n + ":" + r + ": " + v);
				if (C.reason = v, C.filename = t.source, C.line = n, C.column = r, C.source = e, t.silent) l.push(C);
				else throw C
			}

			function u(v) {
				var C = v.exec(e);
				if (C) {
					var d = C[0];
					return i(d), e = e.slice(d.length), C
				}
			}

			function c() {
				u(YE)
			}

			function f(v) {
				var C;
				for (v = v || []; C = p();) C !== !1 && v.push(C);
				return v
			}

			function p() {
				var v = o();
				if (!(jv != e.charAt(0) || Uv != e.charAt(1))) {
					for (var C = 2; _r != e.charAt(C) && (Uv != e.charAt(C) || jv != e.charAt(C + 1));) ++C;
					if (C += 2, _r === e.charAt(C - 1)) return a("End of comment missing");
					var d = e.slice(2, C - 2);
					return r += 2, i(d), e = e.slice(C), r += 2, v({
						type: tP,
						comment: d
					})
				}
			}

			function m() {
				var v = o(),
					C = u(QE);
				if (C) {
					if (p(), !u(XE)) return a("property missing ':'");
					var d = u(qE),
						h = v({
							type: nP,
							property: Hv(C[0].replace(Bv, _r)),
							value: d ? Hv(d[0].replace(Bv, _r)) : _r
						});
					return u(ZE), h
				}
			}

			function y() {
				var v = [];
				f(v);
				for (var C; C = m();) C !== !1 && (v.push(C), f(v));
				return v
			}
			return c(), y()
		};

		function Hv(e) {
			return e ? e.replace(JE, _r) : _r
		}
	});
	var Kv = Ge(vs => {
		"use strict";
		var rP = vs && vs.__importDefault || function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		Object.defineProperty(vs, "__esModule", {
			value: !0
		});
		vs.default = oP;
		var iP = rP($v());

		function oP(e, t) {
			var n = null;
			if (!e || typeof e != "string") return n;
			var r = (0, iP.default)(e),
				i = typeof t == "function";
			return r.forEach(function(o) {
				if (o.type === "declaration") {
					var s = o.property,
						l = o.value;
					i ? t(s, l, o) : l && (n = n || {}, n[s] = l)
				}
			}), n
		}
	});
	var nx = Ge(La => {
		"use strict";
		var AP = se(),
			IP = Symbol.for("react.element"),
			LP = Symbol.for("react.fragment"),
			MP = Object.prototype.hasOwnProperty,
			DP = AP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
			RP = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function tx(e, t, n) {
			var r, i = {},
				o = null,
				s = null;
			n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
			for (r in t) MP.call(t, r) && !RP.hasOwnProperty(r) && (i[r] = t[r]);
			if (e && e.defaultProps)
				for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
			return {
				$$typeof: IP,
				type: e,
				key: o,
				ref: s,
				props: i,
				_owner: DP.current
			}
		}
		La.Fragment = LP;
		La.jsx = tx;
		La.jsxs = tx
	});
	var Di = Ge((MD, rx) => {
		"use strict";
		rx.exports = nx()
	});
	var v0 = Ge((_b, y0) => {
		"use strict";
		var Ja = Object.prototype.hasOwnProperty,
			g0 = Object.prototype.toString,
			c0 = Object.defineProperty,
			f0 = Object.getOwnPropertyDescriptor,
			p0 = function(t) {
				return typeof Array.isArray == "function" ? Array.isArray(t) : g0.call(t) === "[object Array]"
			},
			m0 = function(t) {
				if (!t || g0.call(t) !== "[object Object]") return !1;
				var n = Ja.call(t, "constructor"),
					r = t.constructor && t.constructor.prototype && Ja.call(t.constructor.prototype, "isPrototypeOf");
				if (t.constructor && !n && !r) return !1;
				var i;
				for (i in t);
				return typeof i > "u" || Ja.call(t, i)
			},
			d0 = function(t, n) {
				c0 && n.name === "__proto__" ? c0(t, n.name, {
					enumerable: !0,
					configurable: !0,
					value: n.newValue,
					writable: !0
				}) : t[n.name] = n.newValue
			},
			h0 = function(t, n) {
				if (n === "__proto__")
					if (Ja.call(t, n)) {
						if (f0) return f0(t, n).value
					} else return;
				return t[n]
			};
		y0.exports = function e() {
			var t, n, r, i, o, s, l = arguments[0],
				a = 1,
				u = arguments.length,
				c = !1;
			for (typeof l == "boolean" && (c = l, l = arguments[1] || {}, a = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); a < u; ++a)
				if (t = arguments[a], t != null)
					for (n in t) r = h0(l, n), i = h0(t, n), l !== i && (c && i && (m0(i) || (o = p0(i))) ? (o ? (o = !1, s = r && p0(r) ? r : []) : s = r && m0(r) ? r : {}, d0(l, {
						name: n,
						newValue: e(c, s, i)
					})) : typeof i < "u" && d0(l, {
						name: n,
						newValue: i
					}));
			return l
		}
	});
	var R0 = Ge((w_, D0) => {
		"use strict";
		D0.exports = L0;

		function L0(e, t, n, r, i) {
			var o = r != null,
				s = n != null,
				l = M0(e);
			if (s && (typeof n != "number" || n < 0 || n === 1 / 0)) throw new Error("Expected positive finite index or child node");
			if (o && (!L0(null, r) || !r.children)) throw new Error("Expected parent node");
			if (!t || !t.type || typeof t.type != "string") return !1;
			if (o !== s) throw new Error("Expected both parent and index");
			return !!l.call(i, t, n, r)
		}

		function M0(e) {
			if (typeof e == "string") return HA(e);
			if (e == null) return WA;
			if (typeof e == "object") return ("length" in e ? UA : jA)(e);
			if (typeof e == "function") return e;
			throw new Error("Expected function, string, or object as test")
		}

		function BA(e) {
			for (var t = [], n = e.length, r = -1; ++r < n;) t[r] = M0(e[r]);
			return t
		}

		function jA(e) {
			return t;

			function t(n) {
				var r;
				for (r in e)
					if (n[r] !== e[r]) return !1;
				return !0
			}
		}

		function UA(e) {
			var t = BA(e),
				n = t.length;
			return r;

			function r() {
				for (var i = -1; ++i < n;)
					if (t[i].apply(this, arguments)) return !0;
				return !1
			}
		}

		function HA(e) {
			return t;

			function t(n) {
				return !!(n && n.type === e)
			}
		}

		function WA() {
			return !0
		}
	});
	var O0 = Ge((S_, V0) => {
		"use strict";
		V0.exports = nu;
		var $A = R0(),
			KA = !0,
			N0 = "skip",
			Os = !1;
		nu.CONTINUE = KA;
		nu.SKIP = N0;
		nu.EXIT = Os;

		function nu(e, t, n, r) {
			typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), i(e, null, []);

			function i(s, l, a) {
				var u;
				return (!t || $A(t, s, l, a[a.length - 1] || null)) && (u = n(s, a), u === Os) ? u : s.children && u !== N0 && o(s.children, a.concat(s)) === Os ? Os : u
			}

			function o(s, l) {
				for (var a = -1, u = r ? -1 : 1, c = (r ? s.length : a) + u, f, p; c > a && c < s.length;) {
					if (f = s[c], p = f && i(f, c, l), p === Os) return p;
					c = typeof p == "number" ? p : c + u
				}
			}
		}
	});
	var _0 = Ge((k_, b0) => {
		b0.exports = GA;

		function GA(e, t) {
			return n(e, 0, null)[0];

			function n(r, i, o) {
				if (r.children) {
					for (var s = [], l = 0, a = r.children.length; l < a; l++) {
						var u = n(r.children[l], l, r);
						if (u)
							for (var c = 0, f = u.length; c < f; c++) s.push(u[c])
					}
					r.children = s
				}
				return t(r, i, o)
			}
		}
	});
	var F0 = Ge((C_, z0) => {
		var YA = O0(),
			QA = _0();

		function XA(...e) {
			let t = new Set;
			for (let n of e)
				for (let r of n) t.add(r);
			return [...t.values()].join("")
		}

		function qA(e) {
			return new RegExp(e.source.replace(/^\^/, "").replace(/\$$/, ""), XA("g", e.flags))
		}

		function ZA(e) {
			return {
				type: "text",
				value: e.value
			}
		}

		function JA(e, t) {
			return {
				type: "link",
				title: e.title || e.url,
				url: e.url,
				children: t
			}
		}

		function ru(e, t, n) {
			if (e === "text") return ZA(t, n);
			if (e === "link") return JA(t, n);
			throw new Error("mdast hyperscript not supported for type " + e)
		}

		function e2(e, t) {
			let n = e.value,
				r = qA(t),
				i = [],
				o = 0,
				s;
			for (;
				(s = r.exec(n)) !== null;) {
				let a = s.index;
				o !== a && i.push(ru("text", {
					value: n.slice(o, a)
				}));
				let u = s[0];
				i.push(ru("link", {
					url: u
				}, [ru("text", {
					value: u
				})])), o = r.lastIndex
			}
			let l = n.slice(o);
			return l.length > 0 && i.push(ru("text", {
				value: l
			})), i
		}

		function t2(e) {
			return () => t => {
				let n = new WeakSet;
				return YA(t, "text", (r, i) => {
					if (i.some(o => o.type === "link")) {
						n.add(r);
						return
					}
				}), QA(t, r => r.type !== "text" ? [r] : n.has(r) ? (n.delete(r), [r]) : e2(r, e)), t
			}
		}
		z0.exports = t2
	});
	var ce = q(se()),
		ok = q(Dv());
	var bs = q(se());

	function Rv(e, t) {
		let n = t || {};
		return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
	}
	var _E = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
		zE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
		FE = {};

	function Ea(e, t) {
		return ((t || FE).jsx ? zE : _E).test(e)
	}
	var BE = /[ \t\n\f\r]/g;

	function Qp(e) {
		return typeof e == "object" ? e.type === "text" ? Nv(e.value) : !1 : Nv(e)
	}

	function Nv(e) {
		return e.replace(BE, "") === ""
	}
	var xn = class {
		constructor(t, n, r) {
			this.property = t, this.normal = n, r && (this.space = r)
		}
	};
	xn.prototype.property = {};
	xn.prototype.normal = {};
	xn.prototype.space = null;

	function Xp(e, t) {
		let n = {},
			r = {},
			i = -1;
		for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
		return new xn(n, r, t)
	}

	function gs(e) {
		return e.toLowerCase()
	}
	var Be = class {
		constructor(t, n) {
			this.property = t, this.attribute = n
		}
	};
	Be.prototype.space = null;
	Be.prototype.boolean = !1;
	Be.prototype.booleanish = !1;
	Be.prototype.overloadedBoolean = !1;
	Be.prototype.number = !1;
	Be.prototype.commaSeparated = !1;
	Be.prototype.spaceSeparated = !1;
	Be.prototype.commaOrSpaceSeparated = !1;
	Be.prototype.mustUseProperty = !1;
	Be.prototype.defined = !1;
	var ys = {};
	Zd(ys, {
		boolean: () => F,
		booleanish: () => ye,
		commaOrSpaceSeparated: () => at,
		commaSeparated: () => Xn,
		number: () => L,
		overloadedBoolean: () => qp,
		spaceSeparated: () => ee
	});
	var jE = 0,
		F = Or(),
		ye = Or(),
		qp = Or(),
		L = Or(),
		ee = Or(),
		Xn = Or(),
		at = Or();

	function Or() {
		return 2 ** ++jE
	}
	var Zp = Object.keys(ys),
		br = class extends Be {
			constructor(t, n, r, i) {
				let o = -1;
				if (super(t, n), Vv(this, "space", i), typeof r == "number")
					for (; ++o < Zp.length;) {
						let s = Zp[o];
						Vv(this, Zp[o], (r & ys[s]) === ys[s])
					}
			}
		};
	br.prototype.defined = !0;

	function Vv(e, t, n) {
		n && (e[t] = n)
	}
	var UE = {}.hasOwnProperty;

	function Nt(e) {
		let t = {},
			n = {},
			r;
		for (r in e.properties)
			if (UE.call(e.properties, r)) {
				let i = e.properties[r],
					o = new br(r, e.transform(e.attributes || {}, r), i, e.space);
				e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[gs(r)] = r, n[gs(o.attribute)] = r
			} return new xn(t, n, e.space)
	}
	var Jp = Nt({
		space: "xlink",
		transform(e, t) {
			return "xlink:" + t.slice(5).toLowerCase()
		},
		properties: {
			xLinkActuate: null,
			xLinkArcRole: null,
			xLinkHref: null,
			xLinkRole: null,
			xLinkShow: null,
			xLinkTitle: null,
			xLinkType: null
		}
	});
	var em = Nt({
		space: "xml",
		transform(e, t) {
			return "xml:" + t.slice(3).toLowerCase()
		},
		properties: {
			xmlLang: null,
			xmlBase: null,
			xmlSpace: null
		}
	});

	function Pa(e, t) {
		return t in e ? e[t] : t
	}

	function Ta(e, t) {
		return Pa(e, t.toLowerCase())
	}
	var tm = Nt({
		space: "xmlns",
		attributes: {
			xmlnsxlink: "xmlns:xlink"
		},
		transform: Ta,
		properties: {
			xmlns: null,
			xmlnsXLink: null
		}
	});
	var nm = Nt({
		transform(e, t) {
			return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
		},
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: ye,
			ariaAutoComplete: null,
			ariaBusy: ye,
			ariaChecked: ye,
			ariaColCount: L,
			ariaColIndex: L,
			ariaColSpan: L,
			ariaControls: ee,
			ariaCurrent: null,
			ariaDescribedBy: ee,
			ariaDetails: null,
			ariaDisabled: ye,
			ariaDropEffect: ee,
			ariaErrorMessage: null,
			ariaExpanded: ye,
			ariaFlowTo: ee,
			ariaGrabbed: ye,
			ariaHasPopup: null,
			ariaHidden: ye,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: ee,
			ariaLevel: L,
			ariaLive: null,
			ariaModal: ye,
			ariaMultiLine: ye,
			ariaMultiSelectable: ye,
			ariaOrientation: null,
			ariaOwns: ee,
			ariaPlaceholder: null,
			ariaPosInSet: L,
			ariaPressed: ye,
			ariaReadOnly: ye,
			ariaRelevant: null,
			ariaRequired: ye,
			ariaRoleDescription: ee,
			ariaRowCount: L,
			ariaRowIndex: L,
			ariaRowSpan: L,
			ariaSelected: ye,
			ariaSetSize: L,
			ariaSort: null,
			ariaValueMax: L,
			ariaValueMin: L,
			ariaValueNow: L,
			ariaValueText: null,
			role: null
		}
	});
	var Ov = Nt({
		space: "html",
		attributes: {
			acceptcharset: "accept-charset",
			classname: "class",
			htmlfor: "for",
			httpequiv: "http-equiv"
		},
		transform: Ta,
		mustUseProperty: ["checked", "multiple", "muted", "selected"],
		properties: {
			abbr: null,
			accept: Xn,
			acceptCharset: ee,
			accessKey: ee,
			action: null,
			allow: null,
			allowFullScreen: F,
			allowPaymentRequest: F,
			allowUserMedia: F,
			alt: null,
			as: null,
			async: F,
			autoCapitalize: null,
			autoComplete: ee,
			autoFocus: F,
			autoPlay: F,
			blocking: ee,
			capture: null,
			charSet: null,
			checked: F,
			cite: null,
			className: ee,
			cols: L,
			colSpan: null,
			content: null,
			contentEditable: ye,
			controls: F,
			controlsList: ee,
			coords: L | Xn,
			crossOrigin: null,
			data: null,
			dateTime: null,
			decoding: null,
			default: F,
			defer: F,
			dir: null,
			dirName: null,
			disabled: F,
			download: qp,
			draggable: ye,
			encType: null,
			enterKeyHint: null,
			fetchPriority: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: F,
			formTarget: null,
			headers: ee,
			height: L,
			hidden: F,
			high: L,
			href: null,
			hrefLang: null,
			htmlFor: ee,
			httpEquiv: ee,
			id: null,
			imageSizes: null,
			imageSrcSet: null,
			inert: F,
			inputMode: null,
			integrity: null,
			is: null,
			isMap: F,
			itemId: null,
			itemProp: ee,
			itemRef: ee,
			itemScope: F,
			itemType: ee,
			kind: null,
			label: null,
			lang: null,
			language: null,
			list: null,
			loading: null,
			loop: F,
			low: L,
			manifest: null,
			max: null,
			maxLength: L,
			media: null,
			method: null,
			min: null,
			minLength: L,
			multiple: F,
			muted: F,
			name: null,
			nonce: null,
			noModule: F,
			noValidate: F,
			onAbort: null,
			onAfterPrint: null,
			onAuxClick: null,
			onBeforeMatch: null,
			onBeforePrint: null,
			onBeforeToggle: null,
			onBeforeUnload: null,
			onBlur: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onContextLost: null,
			onContextMenu: null,
			onContextRestored: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFormData: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLanguageChange: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadEnd: null,
			onLoadStart: null,
			onMessage: null,
			onMessageError: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRejectionHandled: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onScrollEnd: null,
			onSecurityPolicyViolation: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onSlotChange: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnhandledRejection: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onWheel: null,
			open: F,
			optimum: L,
			pattern: null,
			ping: ee,
			placeholder: null,
			playsInline: F,
			popover: null,
			popoverTarget: null,
			popoverTargetAction: null,
			poster: null,
			preload: null,
			readOnly: F,
			referrerPolicy: null,
			rel: ee,
			required: F,
			reversed: F,
			rows: L,
			rowSpan: L,
			sandbox: ee,
			scope: null,
			scoped: F,
			seamless: F,
			selected: F,
			shadowRootClonable: F,
			shadowRootDelegatesFocus: F,
			shadowRootMode: null,
			shape: null,
			size: L,
			sizes: null,
			slot: null,
			span: L,
			spellCheck: ye,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: null,
			start: L,
			step: null,
			style: null,
			tabIndex: L,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: F,
			useMap: null,
			value: ye,
			width: L,
			wrap: null,
			writingSuggestions: null,
			align: null,
			aLink: null,
			archive: ee,
			axis: null,
			background: null,
			bgColor: null,
			border: L,
			borderColor: null,
			bottomMargin: L,
			cellPadding: null,
			cellSpacing: null,
			char: null,
			charOff: null,
			classId: null,
			clear: null,
			code: null,
			codeBase: null,
			codeType: null,
			color: null,
			compact: F,
			declare: F,
			event: null,
			face: null,
			frame: null,
			frameBorder: null,
			hSpace: L,
			leftMargin: L,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: L,
			marginWidth: L,
			noResize: F,
			noHref: F,
			noShade: F,
			noWrap: F,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: L,
			rules: null,
			scheme: null,
			scrolling: ye,
			standby: null,
			summary: null,
			text: null,
			topMargin: L,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: L,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			disablePictureInPicture: F,
			disableRemotePlayback: F,
			prefix: null,
			property: null,
			results: L,
			security: null,
			unselectable: null
		}
	});
	var bv = Nt({
		space: "svg",
		attributes: {
			accentHeight: "accent-height",
			alignmentBaseline: "alignment-baseline",
			arabicForm: "arabic-form",
			baselineShift: "baseline-shift",
			capHeight: "cap-height",
			className: "class",
			clipPath: "clip-path",
			clipRule: "clip-rule",
			colorInterpolation: "color-interpolation",
			colorInterpolationFilters: "color-interpolation-filters",
			colorProfile: "color-profile",
			colorRendering: "color-rendering",
			crossOrigin: "crossorigin",
			dataType: "datatype",
			dominantBaseline: "dominant-baseline",
			enableBackground: "enable-background",
			fillOpacity: "fill-opacity",
			fillRule: "fill-rule",
			floodColor: "flood-color",
			floodOpacity: "flood-opacity",
			fontFamily: "font-family",
			fontSize: "font-size",
			fontSizeAdjust: "font-size-adjust",
			fontStretch: "font-stretch",
			fontStyle: "font-style",
			fontVariant: "font-variant",
			fontWeight: "font-weight",
			glyphName: "glyph-name",
			glyphOrientationHorizontal: "glyph-orientation-horizontal",
			glyphOrientationVertical: "glyph-orientation-vertical",
			hrefLang: "hreflang",
			horizAdvX: "horiz-adv-x",
			horizOriginX: "horiz-origin-x",
			horizOriginY: "horiz-origin-y",
			imageRendering: "image-rendering",
			letterSpacing: "letter-spacing",
			lightingColor: "lighting-color",
			markerEnd: "marker-end",
			markerMid: "marker-mid",
			markerStart: "marker-start",
			navDown: "nav-down",
			navDownLeft: "nav-down-left",
			navDownRight: "nav-down-right",
			navLeft: "nav-left",
			navNext: "nav-next",
			navPrev: "nav-prev",
			navRight: "nav-right",
			navUp: "nav-up",
			navUpLeft: "nav-up-left",
			navUpRight: "nav-up-right",
			onAbort: "onabort",
			onActivate: "onactivate",
			onAfterPrint: "onafterprint",
			onBeforePrint: "onbeforeprint",
			onBegin: "onbegin",
			onCancel: "oncancel",
			onCanPlay: "oncanplay",
			onCanPlayThrough: "oncanplaythrough",
			onChange: "onchange",
			onClick: "onclick",
			onClose: "onclose",
			onCopy: "oncopy",
			onCueChange: "oncuechange",
			onCut: "oncut",
			onDblClick: "ondblclick",
			onDrag: "ondrag",
			onDragEnd: "ondragend",
			onDragEnter: "ondragenter",
			onDragExit: "ondragexit",
			onDragLeave: "ondragleave",
			onDragOver: "ondragover",
			onDragStart: "ondragstart",
			onDrop: "ondrop",
			onDurationChange: "ondurationchange",
			onEmptied: "onemptied",
			onEnd: "onend",
			onEnded: "onended",
			onError: "onerror",
			onFocus: "onfocus",
			onFocusIn: "onfocusin",
			onFocusOut: "onfocusout",
			onHashChange: "onhashchange",
			onInput: "oninput",
			onInvalid: "oninvalid",
			onKeyDown: "onkeydown",
			onKeyPress: "onkeypress",
			onKeyUp: "onkeyup",
			onLoad: "onload",
			onLoadedData: "onloadeddata",
			onLoadedMetadata: "onloadedmetadata",
			onLoadStart: "onloadstart",
			onMessage: "onmessage",
			onMouseDown: "onmousedown",
			onMouseEnter: "onmouseenter",
			onMouseLeave: "onmouseleave",
			onMouseMove: "onmousemove",
			onMouseOut: "onmouseout",
			onMouseOver: "onmouseover",
			onMouseUp: "onmouseup",
			onMouseWheel: "onmousewheel",
			onOffline: "onoffline",
			onOnline: "ononline",
			onPageHide: "onpagehide",
			onPageShow: "onpageshow",
			onPaste: "onpaste",
			onPause: "onpause",
			onPlay: "onplay",
			onPlaying: "onplaying",
			onPopState: "onpopstate",
			onProgress: "onprogress",
			onRateChange: "onratechange",
			onRepeat: "onrepeat",
			onReset: "onreset",
			onResize: "onresize",
			onScroll: "onscroll",
			onSeeked: "onseeked",
			onSeeking: "onseeking",
			onSelect: "onselect",
			onShow: "onshow",
			onStalled: "onstalled",
			onStorage: "onstorage",
			onSubmit: "onsubmit",
			onSuspend: "onsuspend",
			onTimeUpdate: "ontimeupdate",
			onToggle: "ontoggle",
			onUnload: "onunload",
			onVolumeChange: "onvolumechange",
			onWaiting: "onwaiting",
			onZoom: "onzoom",
			overlinePosition: "overline-position",
			overlineThickness: "overline-thickness",
			paintOrder: "paint-order",
			panose1: "panose-1",
			pointerEvents: "pointer-events",
			referrerPolicy: "referrerpolicy",
			renderingIntent: "rendering-intent",
			shapeRendering: "shape-rendering",
			stopColor: "stop-color",
			stopOpacity: "stop-opacity",
			strikethroughPosition: "strikethrough-position",
			strikethroughThickness: "strikethrough-thickness",
			strokeDashArray: "stroke-dasharray",
			strokeDashOffset: "stroke-dashoffset",
			strokeLineCap: "stroke-linecap",
			strokeLineJoin: "stroke-linejoin",
			strokeMiterLimit: "stroke-miterlimit",
			strokeOpacity: "stroke-opacity",
			strokeWidth: "stroke-width",
			tabIndex: "tabindex",
			textAnchor: "text-anchor",
			textDecoration: "text-decoration",
			textRendering: "text-rendering",
			transformOrigin: "transform-origin",
			typeOf: "typeof",
			underlinePosition: "underline-position",
			underlineThickness: "underline-thickness",
			unicodeBidi: "unicode-bidi",
			unicodeRange: "unicode-range",
			unitsPerEm: "units-per-em",
			vAlphabetic: "v-alphabetic",
			vHanging: "v-hanging",
			vIdeographic: "v-ideographic",
			vMathematical: "v-mathematical",
			vectorEffect: "vector-effect",
			vertAdvY: "vert-adv-y",
			vertOriginX: "vert-origin-x",
			vertOriginY: "vert-origin-y",
			wordSpacing: "word-spacing",
			writingMode: "writing-mode",
			xHeight: "x-height",
			playbackOrder: "playbackorder",
			timelineBegin: "timelinebegin"
		},
		transform: Pa,
		properties: {
			about: at,
			accentHeight: L,
			accumulate: null,
			additive: null,
			alignmentBaseline: null,
			alphabetic: L,
			amplitude: L,
			arabicForm: null,
			ascent: L,
			attributeName: null,
			attributeType: null,
			azimuth: L,
			bandwidth: null,
			baselineShift: null,
			baseFrequency: null,
			baseProfile: null,
			bbox: null,
			begin: null,
			bias: L,
			by: null,
			calcMode: null,
			capHeight: L,
			className: ee,
			clip: null,
			clipPath: null,
			clipPathUnits: null,
			clipRule: null,
			color: null,
			colorInterpolation: null,
			colorInterpolationFilters: null,
			colorProfile: null,
			colorRendering: null,
			content: null,
			contentScriptType: null,
			contentStyleType: null,
			crossOrigin: null,
			cursor: null,
			cx: null,
			cy: null,
			d: null,
			dataType: null,
			defaultAction: null,
			descent: L,
			diffuseConstant: L,
			direction: null,
			display: null,
			dur: null,
			divisor: L,
			dominantBaseline: null,
			download: F,
			dx: null,
			dy: null,
			edgeMode: null,
			editable: null,
			elevation: L,
			enableBackground: null,
			end: null,
			event: null,
			exponent: L,
			externalResourcesRequired: null,
			fill: null,
			fillOpacity: L,
			fillRule: null,
			filter: null,
			filterRes: null,
			filterUnits: null,
			floodColor: null,
			floodOpacity: null,
			focusable: null,
			focusHighlight: null,
			fontFamily: null,
			fontSize: null,
			fontSizeAdjust: null,
			fontStretch: null,
			fontStyle: null,
			fontVariant: null,
			fontWeight: null,
			format: null,
			fr: null,
			from: null,
			fx: null,
			fy: null,
			g1: Xn,
			g2: Xn,
			glyphName: Xn,
			glyphOrientationHorizontal: null,
			glyphOrientationVertical: null,
			glyphRef: null,
			gradientTransform: null,
			gradientUnits: null,
			handler: null,
			hanging: L,
			hatchContentUnits: null,
			hatchUnits: null,
			height: null,
			href: null,
			hrefLang: null,
			horizAdvX: L,
			horizOriginX: L,
			horizOriginY: L,
			id: null,
			ideographic: L,
			imageRendering: null,
			initialVisibility: null,
			in: null,
			in2: null,
			intercept: L,
			k: L,
			k1: L,
			k2: L,
			k3: L,
			k4: L,
			kernelMatrix: at,
			kernelUnitLength: null,
			keyPoints: null,
			keySplines: null,
			keyTimes: null,
			kerning: null,
			lang: null,
			lengthAdjust: null,
			letterSpacing: null,
			lightingColor: null,
			limitingConeAngle: L,
			local: null,
			markerEnd: null,
			markerMid: null,
			markerStart: null,
			markerHeight: null,
			markerUnits: null,
			markerWidth: null,
			mask: null,
			maskContentUnits: null,
			maskUnits: null,
			mathematical: null,
			max: null,
			media: null,
			mediaCharacterEncoding: null,
			mediaContentEncodings: null,
			mediaSize: L,
			mediaTime: null,
			method: null,
			min: null,
			mode: null,
			name: null,
			navDown: null,
			navDownLeft: null,
			navDownRight: null,
			navLeft: null,
			navNext: null,
			navPrev: null,
			navRight: null,
			navUp: null,
			navUpLeft: null,
			navUpRight: null,
			numOctaves: null,
			observer: null,
			offset: null,
			onAbort: null,
			onActivate: null,
			onAfterPrint: null,
			onBeforePrint: null,
			onBegin: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnd: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFocusIn: null,
			onFocusOut: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadStart: null,
			onMessage: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onMouseWheel: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRepeat: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onShow: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onZoom: null,
			opacity: null,
			operator: null,
			order: null,
			orient: null,
			orientation: null,
			origin: null,
			overflow: null,
			overlay: null,
			overlinePosition: L,
			overlineThickness: L,
			paintOrder: null,
			panose1: null,
			path: null,
			pathLength: L,
			patternContentUnits: null,
			patternTransform: null,
			patternUnits: null,
			phase: null,
			ping: ee,
			pitch: null,
			playbackOrder: null,
			pointerEvents: null,
			points: null,
			pointsAtX: L,
			pointsAtY: L,
			pointsAtZ: L,
			preserveAlpha: null,
			preserveAspectRatio: null,
			primitiveUnits: null,
			propagate: null,
			property: at,
			r: null,
			radius: null,
			referrerPolicy: null,
			refX: null,
			refY: null,
			rel: at,
			rev: at,
			renderingIntent: null,
			repeatCount: null,
			repeatDur: null,
			requiredExtensions: at,
			requiredFeatures: at,
			requiredFonts: at,
			requiredFormats: at,
			resource: null,
			restart: null,
			result: null,
			rotate: null,
			rx: null,
			ry: null,
			scale: null,
			seed: null,
			shapeRendering: null,
			side: null,
			slope: null,
			snapshotTime: null,
			specularConstant: L,
			specularExponent: L,
			spreadMethod: null,
			spacing: null,
			startOffset: null,
			stdDeviation: null,
			stemh: null,
			stemv: null,
			stitchTiles: null,
			stopColor: null,
			stopOpacity: null,
			strikethroughPosition: L,
			strikethroughThickness: L,
			string: null,
			stroke: null,
			strokeDashArray: at,
			strokeDashOffset: null,
			strokeLineCap: null,
			strokeLineJoin: null,
			strokeMiterLimit: L,
			strokeOpacity: L,
			strokeWidth: null,
			style: null,
			surfaceScale: L,
			syncBehavior: null,
			syncBehaviorDefault: null,
			syncMaster: null,
			syncTolerance: null,
			syncToleranceDefault: null,
			systemLanguage: at,
			tabIndex: L,
			tableValues: null,
			target: null,
			targetX: L,
			targetY: L,
			textAnchor: null,
			textDecoration: null,
			textRendering: null,
			textLength: null,
			timelineBegin: null,
			title: null,
			transformBehavior: null,
			type: null,
			typeOf: at,
			to: null,
			transform: null,
			transformOrigin: null,
			u1: null,
			u2: null,
			underlinePosition: L,
			underlineThickness: L,
			unicode: null,
			unicodeBidi: null,
			unicodeRange: null,
			unitsPerEm: L,
			values: null,
			vAlphabetic: L,
			vMathematical: L,
			vectorEffect: null,
			vHanging: L,
			vIdeographic: L,
			version: null,
			vertAdvY: L,
			vertOriginX: L,
			vertOriginY: L,
			viewBox: null,
			viewTarget: null,
			visibility: null,
			width: null,
			widths: null,
			wordSpacing: null,
			writingMode: null,
			x: null,
			x1: null,
			x2: null,
			xChannelSelector: null,
			xHeight: L,
			y: null,
			y1: null,
			y2: null,
			yChannelSelector: null,
			z: null,
			zoomAndPan: null
		}
	});
	var HE = /^data[-\w.:]+$/i,
		_v = /-[a-z]/g,
		WE = /[A-Z]/g;

	function rm(e, t) {
		let n = gs(t),
			r = t,
			i = Be;
		if (n in e.normal) return e.property[e.normal[n]];
		if (n.length > 4 && n.slice(0, 4) === "data" && HE.test(t)) {
			if (t.charAt(4) === "-") {
				let o = t.slice(5).replace(_v, KE);
				r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
			} else {
				let o = t.slice(4);
				if (!_v.test(o)) {
					let s = o.replace(WE, $E);
					s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s
				}
			}
			i = br
		}
		return new i(r, t)
	}

	function $E(e) {
		return "-" + e.toLowerCase()
	}

	function KE(e) {
		return e.charAt(1).toUpperCase()
	}
	var im = {
		classId: "classID",
		dataType: "datatype",
		itemId: "itemID",
		strokeDashArray: "strokeDasharray",
		strokeDashOffset: "strokeDashoffset",
		strokeLineCap: "strokeLinecap",
		strokeLineJoin: "strokeLinejoin",
		strokeMiterLimit: "strokeMiterlimit",
		typeOf: "typeof",
		xLinkActuate: "xlinkActuate",
		xLinkArcRole: "xlinkArcrole",
		xLinkHref: "xlinkHref",
		xLinkRole: "xlinkRole",
		xLinkShow: "xlinkShow",
		xLinkTitle: "xlinkTitle",
		xLinkType: "xlinkType",
		xmlnsXLink: "xmlnsXlink"
	};
	var zv = Xp([em, Jp, tm, nm, Ov], "html"),
		Aa = Xp([em, Jp, tm, nm, bv], "svg");

	function Fv(e) {
		return e.join(" ").trim()
	}
	var om = q(Kv(), 1),
		Gv = om.default.default || om.default;
	var Ia = Yv("end"),
		Mi = Yv("start");

	function Yv(e) {
		return t;

		function t(n) {
			let r = n && n.position && n.position[e] || {};
			if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
				line: r.line,
				column: r.column,
				offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
			}
		}
	}

	function sm(e) {
		let t = Mi(e),
			n = Ia(e);
		if (t && n) return {
			start: t,
			end: n
		}
	}

	function qn(e) {
		return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Qv(e.position) : "start" in e || "end" in e ? Qv(e) : "line" in e || "column" in e ? lm(e) : ""
	}

	function lm(e) {
		return Xv(e && e.line) + ":" + Xv(e && e.column)
	}

	function Qv(e) {
		return lm(e && e.start) + "-" + lm(e && e.end)
	}

	function Xv(e) {
		return e && typeof e == "number" ? e : 1
	}
	var xe = class extends Error {
		constructor(t, n, r) {
			super(), typeof n == "string" && (r = n, n = void 0);
			let i = "",
				o = {},
				s = !1;
			if (n && ("line" in n && "column" in n ? o = {
					place: n
				} : "start" in n && "end" in n ? o = {
					place: n
				} : "type" in n ? o = {
					ancestors: [n],
					place: n.position
				} : o = {
					...n
				}), typeof t == "string" ? i = t : !o.cause && t && (s = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
				let a = r.indexOf(":");
				a === -1 ? o.ruleId = r : (o.source = r.slice(0, a), o.ruleId = r.slice(a + 1))
			}
			if (!o.place && o.ancestors && o.ancestors) {
				let a = o.ancestors[o.ancestors.length - 1];
				a && (o.place = a.position)
			}
			let l = o.place && "start" in o.place ? o.place.start : o.place;
			this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = l ? l.line : void 0, this.name = qn(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = s && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url
		}
	};
	xe.prototype.file = "";
	xe.prototype.name = "";
	xe.prototype.reason = "";
	xe.prototype.message = "";
	xe.prototype.stack = "";
	xe.prototype.column = void 0;
	xe.prototype.line = void 0;
	xe.prototype.ancestors = void 0;
	xe.prototype.cause = void 0;
	xe.prototype.fatal = void 0;
	xe.prototype.place = void 0;
	xe.prototype.ruleId = void 0;
	xe.prototype.source = void 0;
	var am = {}.hasOwnProperty,
		sP = new Map,
		lP = /[A-Z]/g,
		aP = /-([a-z])/g,
		uP = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
		cP = new Set(["td", "th"]),
		qv = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

	function um(e, t) {
		if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
		let n = t.filePath || void 0,
			r;
		if (t.development) {
			if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
			r = vP(n, t.jsxDEV)
		} else {
			if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
			if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
			r = yP(n, t.jsx, t.jsxs)
		}
		let i = {
				Fragment: t.Fragment,
				ancestors: [],
				components: t.components || {},
				create: r,
				elementAttributeNameCase: t.elementAttributeNameCase || "react",
				evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
				filePath: n,
				ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
				passKeys: t.passKeys !== !1,
				passNode: t.passNode || !1,
				schema: t.space === "svg" ? Aa : zv,
				stylePropertyNameCase: t.stylePropertyNameCase || "dom",
				tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
			},
			o = Zv(i, e, void 0);
		return o && typeof o != "string" ? o : i.create(e, i.Fragment, {
			children: o || void 0
		}, void 0)
	}

	function Zv(e, t, n) {
		if (t.type === "element") return fP(e, t, n);
		if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return pP(e, t);
		if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return dP(e, t, n);
		if (t.type === "mdxjsEsm") return mP(e, t);
		if (t.type === "root") return hP(e, t, n);
		if (t.type === "text") return gP(e, t)
	}

	function fP(e, t, n) {
		let r = e.schema,
			i = r;
		t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Aa, e.schema = i), e.ancestors.push(t);
		let o = ex(e, t.tagName, !1),
			s = xP(e, t),
			l = fm(e, t);
		return uP.has(t.tagName) && (l = l.filter(function(a) {
			return typeof a == "string" ? !Qp(a) : !0
		})), Jv(e, s, o, t), cm(s, l), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n)
	}

	function pP(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let r = t.data.estree.body[0];
			return r.type, e.evaluater.evaluateExpression(r.expression)
		}
		xs(e, t.position)
	}

	function mP(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		xs(e, t.position)
	}

	function dP(e, t, n) {
		let r = e.schema,
			i = r;
		t.name === "svg" && r.space === "html" && (i = Aa, e.schema = i), e.ancestors.push(t);
		let o = t.name === null ? e.Fragment : ex(e, t.name, !0),
			s = wP(e, t),
			l = fm(e, t);
		return Jv(e, s, o, t), cm(s, l), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n)
	}

	function hP(e, t, n) {
		let r = {};
		return cm(r, fm(e, t)), e.create(t, e.Fragment, r, n)
	}

	function gP(e, t) {
		return t.value
	}

	function Jv(e, t, n, r) {
		typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r)
	}

	function cm(e, t) {
		if (t.length > 0) {
			let n = t.length > 1 ? t : t[0];
			n && (e.children = n)
		}
	}

	function yP(e, t, n) {
		return r;

		function r(i, o, s, l) {
			let u = Array.isArray(s.children) ? n : t;
			return l ? u(o, s, l) : u(o, s)
		}
	}

	function vP(e, t) {
		return n;

		function n(r, i, o, s) {
			let l = Array.isArray(o.children),
				a = Mi(r);
			return t(i, o, s, l, {
				columnNumber: a ? a.column - 1 : void 0,
				fileName: e,
				lineNumber: a ? a.line : void 0
			}, void 0)
		}
	}

	function xP(e, t) {
		let n = {},
			r, i;
		for (i in t.properties)
			if (i !== "children" && am.call(t.properties, i)) {
				let o = SP(e, i, t.properties[i]);
				if (o) {
					let [s, l] = o;
					e.tableCellAlignToStyle && s === "align" && typeof l == "string" && cP.has(t.tagName) ? r = l : n[s] = l
				}
			} if (r) {
			let o = n.style || (n.style = {});
			o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r
		}
		return n
	}

	function wP(e, t) {
		let n = {};
		for (let r of t.attributes)
			if (r.type === "mdxJsxExpressionAttribute")
				if (r.data && r.data.estree && e.evaluater) {
					let o = r.data.estree.body[0];
					o.type;
					let s = o.expression;
					s.type;
					let l = s.properties[0];
					l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument))
				} else xs(e, t.position);
		else {
			let i = r.name,
				o;
			if (r.value && typeof r.value == "object")
				if (r.value.data && r.value.data.estree && e.evaluater) {
					let l = r.value.data.estree.body[0];
					l.type, o = e.evaluater.evaluateExpression(l.expression)
				} else xs(e, t.position);
			else o = r.value === null ? !0 : r.value;
			n[i] = o
		}
		return n
	}

	function fm(e, t) {
		let n = [],
			r = -1,
			i = e.passKeys ? new Map : sP;
		for (; ++r < t.children.length;) {
			let o = t.children[r],
				s;
			if (e.passKeys) {
				let a = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
				if (a) {
					let u = i.get(a) || 0;
					s = a + "-" + u, i.set(a, u + 1)
				}
			}
			let l = Zv(e, o, s);
			l !== void 0 && n.push(l)
		}
		return n
	}

	function SP(e, t, n) {
		let r = rm(e.schema, t);
		if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
			if (Array.isArray(n) && (n = r.commaSeparated ? Rv(n) : Fv(n)), r.property === "style") {
				let i = typeof n == "object" ? n : kP(e, String(n));
				return e.stylePropertyNameCase === "css" && (i = CP(i)), ["style", i]
			}
			return [e.elementAttributeNameCase === "react" && r.space ? im[r.property] || r.property : r.attribute, n]
		}
	}

	function kP(e, t) {
		let n = {};
		try {
			Gv(t, r)
		} catch (i) {
			if (!e.ignoreInvalidStyle) {
				let o = i,
					s = new xe("Cannot parse `style` attribute", {
						ancestors: e.ancestors,
						cause: o,
						ruleId: "style",
						source: "hast-util-to-jsx-runtime"
					});
				throw s.file = e.filePath || void 0, s.url = qv + "#cannot-parse-style-attribute", s
			}
		}
		return n;

		function r(i, o) {
			let s = i;
			s.slice(0, 2) !== "--" && (s.slice(0, 4) === "-ms-" && (s = "ms-" + s.slice(4)), s = s.replace(aP, PP)), n[s] = o
		}
	}

	function ex(e, t, n) {
		let r;
		if (!n) r = {
			type: "Literal",
			value: t
		};
		else if (t.includes(".")) {
			let i = t.split("."),
				o = -1,
				s;
			for (; ++o < i.length;) {
				let l = Ea(i[o]) ? {
					type: "Identifier",
					name: i[o]
				} : {
					type: "Literal",
					value: i[o]
				};
				s = s ? {
					type: "MemberExpression",
					object: s,
					property: l,
					computed: !!(o && l.type === "Literal"),
					optional: !1
				} : l
			}
			r = s
		} else r = Ea(t) && !/^[a-z]/.test(t) ? {
			type: "Identifier",
			name: t
		} : {
			type: "Literal",
			value: t
		};
		if (r.type === "Literal") {
			let i = r.value;
			return am.call(e.components, i) ? e.components[i] : i
		}
		if (e.evaluater) return e.evaluater.evaluateExpression(r);
		xs(e)
	}

	function xs(e, t) {
		let n = new xe("Cannot handle MDX estrees without `createEvaluater`", {
			ancestors: e.ancestors,
			place: t,
			ruleId: "mdx-estree",
			source: "hast-util-to-jsx-runtime"
		});
		throw n.file = e.filePath || void 0, n.url = qv + "#cannot-handle-mdx-estrees-without-createevaluater", n
	}

	function CP(e) {
		let t = {},
			n;
		for (n in e) am.call(e, n) && (t[EP(n)] = e[n]);
		return t
	}

	function EP(e) {
		let t = e.replace(lP, TP);
		return t.slice(0, 3) === "ms-" && (t = "-" + t), t
	}

	function PP(e, t) {
		return t.toUpperCase()
	}

	function TP(e) {
		return "-" + e.toLowerCase()
	}
	var ws = {
		action: ["form"],
		cite: ["blockquote", "del", "ins", "q"],
		data: ["object"],
		formAction: ["button", "input"],
		href: ["a", "area", "base", "link"],
		icon: ["menuitem"],
		itemId: null,
		manifest: ["html"],
		ping: ["a", "area"],
		poster: ["video"],
		src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
	};
	var zi = q(Di(), 1);
	var NP = {};

	function pm(e, t) {
		let n = t || NP,
			r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
			i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
		return ox(e, r, i)
	}

	function ox(e, t, n) {
		if (VP(e)) {
			if ("value" in e) return e.type === "html" && !n ? "" : e.value;
			if (t && "alt" in e && e.alt) return e.alt;
			if ("children" in e) return ix(e.children, t, n)
		}
		return Array.isArray(e) ? ix(e, t, n) : ""
	}

	function ix(e, t, n) {
		let r = [],
			i = -1;
		for (; ++i < e.length;) r[i] = ox(e[i], t, n);
		return r.join("")
	}

	function VP(e) {
		return !!(e && typeof e == "object")
	}
	var sx = document.createElement("i");

	function Ri(e) {
		let t = "&" + e + ";";
		sx.innerHTML = t;
		let n = sx.textContent;
		return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
	}

	function je(e, t, n, r) {
		let i = e.length,
			o = 0,
			s;
		if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), e.splice(...s);
		else
			for (n && e.splice(t, n); o < r.length;) s = r.slice(o, o + 1e4), s.unshift(t, 0), e.splice(...s), o += 1e4, t += 1e4
	}

	function Ze(e, t) {
		return e.length > 0 ? (je(e, e.length, 0, t), e) : t
	}
	var lx = {}.hasOwnProperty;

	function ax(e) {
		let t = {},
			n = -1;
		for (; ++n < e.length;) OP(t, e[n]);
		return t
	}

	function OP(e, t) {
		let n;
		for (n in t) {
			let i = (lx.call(e, n) ? e[n] : void 0) || (e[n] = {}),
				o = t[n],
				s;
			if (o)
				for (s in o) {
					lx.call(i, s) || (i[s] = []);
					let l = o[s];
					bP(i[s], Array.isArray(l) ? l : l ? [l] : [])
				}
		}
	}

	function bP(e, t) {
		let n = -1,
			r = [];
		for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
		je(e, 0, 0, r)
	}

	function Ma(e, t) {
		let n = Number.parseInt(e, t);
		return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCodePoint(n)
	}

	function wn(e) {
		return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
	}
	var St = Zn(/[A-Za-z]/),
		Ie = Zn(/[\dA-Za-z]/),
		ux = Zn(/[#-'*+\--9=?A-Z^-~]/);

	function Ss(e) {
		return e !== null && (e < 32 || e === 127)
	}
	var ks = Zn(/\d/),
		cx = Zn(/[\dA-Fa-f]/),
		fx = Zn(/[!-/:-@[-`{-~]/);

	function V(e) {
		return e !== null && e < -2
	}

	function we(e) {
		return e !== null && (e < 0 || e === 32)
	}

	function B(e) {
		return e === -2 || e === -1 || e === 32
	}
	var px = Zn(/\p{P}|\p{S}/u),
		mx = Zn(/\s/);

	function Zn(e) {
		return t;

		function t(n) {
			return n !== null && n > -1 && e.test(String.fromCharCode(n))
		}
	}

	function Vt(e) {
		let t = [],
			n = -1,
			r = 0,
			i = 0;
		for (; ++n < e.length;) {
			let o = e.charCodeAt(n),
				s = "";
			if (o === 37 && Ie(e.charCodeAt(n + 1)) && Ie(e.charCodeAt(n + 2))) i = 2;
			else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (s = String.fromCharCode(o));
			else if (o > 55295 && o < 57344) {
				let l = e.charCodeAt(n + 1);
				o < 56320 && l > 56319 && l < 57344 ? (s = String.fromCharCode(o, l), i = 1) : s = "\uFFFD"
			} else s = String.fromCharCode(o);
			s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0)
		}
		return t.join("") + e.slice(r)
	}

	function W(e, t, n, r) {
		let i = r ? r - 1 : Number.POSITIVE_INFINITY,
			o = 0;
		return s;

		function s(a) {
			return B(a) ? (e.enter(n), l(a)) : t(a)
		}

		function l(a) {
			return B(a) && o++ < i ? (e.consume(a), l) : (e.exit(n), t(a))
		}
	}
	var dx = {
		tokenize: _P
	};

	function _P(e) {
		let t = e.attempt(this.parser.constructs.contentInitial, r, i),
			n;
		return t;

		function r(l) {
			if (l === null) {
				e.consume(l);
				return
			}
			return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), W(e, t, "linePrefix")
		}

		function i(l) {
			return e.enter("paragraph"), o(l)
		}

		function o(l) {
			let a = e.enter("chunkText", {
				contentType: "text",
				previous: n
			});
			return n && (n.next = a), n = a, s(l)
		}

		function s(l) {
			if (l === null) {
				e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
				return
			}
			return V(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), s)
		}
	}
	var gx = {
			tokenize: zP
		},
		hx = {
			tokenize: FP
		};

	function zP(e) {
		let t = this,
			n = [],
			r = 0,
			i, o, s;
		return l;

		function l(g) {
			if (r < n.length) {
				let k = n[r];
				return t.containerState = k[1], e.attempt(k[0].continuation, a, u)(g)
			}
			return u(g)
		}

		function a(g) {
			if (r++, t.containerState._closeFlow) {
				t.containerState._closeFlow = void 0, i && h();
				let k = t.events.length,
					E = k,
					x;
				for (; E--;)
					if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
						x = t.events[E][1].end;
						break
					} d(r);
				let T = k;
				for (; T < t.events.length;) t.events[T][1].end = Object.assign({}, x), T++;
				return je(t.events, E + 1, 0, t.events.slice(k)), t.events.length = T, u(g)
			}
			return l(g)
		}

		function u(g) {
			if (r === n.length) {
				if (!i) return p(g);
				if (i.currentConstruct && i.currentConstruct.concrete) return y(g);
				t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
			}
			return t.containerState = {}, e.check(hx, c, f)(g)
		}

		function c(g) {
			return i && h(), d(r), p(g)
		}

		function f(g) {
			return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, y(g)
		}

		function p(g) {
			return t.containerState = {}, e.attempt(hx, m, y)(g)
		}

		function m(g) {
			return r++, n.push([t.currentConstruct, t.containerState]), p(g)
		}

		function y(g) {
			if (g === null) {
				i && h(), d(0), e.consume(g);
				return
			}
			return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
				contentType: "flow",
				previous: o,
				_tokenizer: i
			}), v(g)
		}

		function v(g) {
			if (g === null) {
				C(e.exit("chunkFlow"), !0), d(0), e.consume(g);
				return
			}
			return V(g) ? (e.consume(g), C(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(g), v)
		}

		function C(g, k) {
			let E = t.sliceStream(g);
			if (k && E.push(null), g.previous = o, o && (o.next = g), o = g, i.defineSkip(g.start), i.write(E), t.parser.lazy[g.start.line]) {
				let x = i.events.length;
				for (; x--;)
					if (i.events[x][1].start.offset < s && (!i.events[x][1].end || i.events[x][1].end.offset > s)) return;
				let T = t.events.length,
					I = T,
					O, R;
				for (; I--;)
					if (t.events[I][0] === "exit" && t.events[I][1].type === "chunkFlow") {
						if (O) {
							R = t.events[I][1].end;
							break
						}
						O = !0
					} for (d(r), x = T; x < t.events.length;) t.events[x][1].end = Object.assign({}, R), x++;
				je(t.events, I + 1, 0, t.events.slice(T)), t.events.length = x
			}
		}

		function d(g) {
			let k = n.length;
			for (; k-- > g;) {
				let E = n[k];
				t.containerState = E[1], E[0].exit.call(t, e)
			}
			n.length = g
		}

		function h() {
			i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
		}
	}

	function FP(e, t, n) {
		return W(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
	}

	function mm(e) {
		if (e === null || we(e) || mx(e)) return 1;
		if (px(e)) return 2
	}

	function Ni(e, t, n) {
		let r = [],
			i = -1;
		for (; ++i < e.length;) {
			let o = e[i].resolveAll;
			o && !r.includes(o) && (t = o(t, n), r.push(o))
		}
		return t
	}
	var Cs = {
		name: "attention",
		tokenize: jP,
		resolveAll: BP
	};

	function BP(e, t) {
		let n = -1,
			r, i, o, s, l, a, u, c;
		for (; ++n < e.length;)
			if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
				for (r = n; r--;)
					if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
						if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
						a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
						let f = Object.assign({}, e[r][1].end),
							p = Object.assign({}, e[n][1].start);
						yx(f, -a), yx(p, a), s = {
							type: a > 1 ? "strongSequence" : "emphasisSequence",
							start: f,
							end: Object.assign({}, e[r][1].end)
						}, l = {
							type: a > 1 ? "strongSequence" : "emphasisSequence",
							start: Object.assign({}, e[n][1].start),
							end: p
						}, o = {
							type: a > 1 ? "strongText" : "emphasisText",
							start: Object.assign({}, e[r][1].end),
							end: Object.assign({}, e[n][1].start)
						}, i = {
							type: a > 1 ? "strong" : "emphasis",
							start: Object.assign({}, s.start),
							end: Object.assign({}, l.end)
						}, e[r][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, l.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ze(u, [
							["enter", e[r][1], t],
							["exit", e[r][1], t]
						])), u = Ze(u, [
							["enter", i, t],
							["enter", s, t],
							["exit", s, t],
							["enter", o, t]
						]), u = Ze(u, Ni(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Ze(u, [
							["exit", o, t],
							["enter", l, t],
							["exit", l, t],
							["exit", i, t]
						]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = Ze(u, [
							["enter", e[n][1], t],
							["exit", e[n][1], t]
						])) : c = 0, je(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
						break
					}
			} for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
		return e
	}

	function jP(e, t) {
		let n = this.parser.constructs.attentionMarkers.null,
			r = this.previous,
			i = mm(r),
			o;
		return s;

		function s(a) {
			return o = a, e.enter("attentionSequence"), l(a)
		}

		function l(a) {
			if (a === o) return e.consume(a), l;
			let u = e.exit("attentionSequence"),
				c = mm(a),
				f = !c || c === 2 && i || n.includes(a),
				p = !i || i === 2 && c || n.includes(r);
			return u._open = !!(o === 42 ? f : f && (i || !p)), u._close = !!(o === 42 ? p : p && (c || !f)), t(a)
		}
	}

	function yx(e, t) {
		e.column += t, e.offset += t, e._bufferIndex += t
	}
	var dm = {
		name: "autolink",
		tokenize: UP
	};

	function UP(e, t, n) {
		let r = 0;
		return i;

		function i(m) {
			return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
		}

		function o(m) {
			return St(m) ? (e.consume(m), s) : m === 64 ? n(m) : u(m)
		}

		function s(m) {
			return m === 43 || m === 45 || m === 46 || Ie(m) ? (r = 1, l(m)) : u(m)
		}

		function l(m) {
			return m === 58 ? (e.consume(m), r = 0, a) : (m === 43 || m === 45 || m === 46 || Ie(m)) && r++ < 32 ? (e.consume(m), l) : (r = 0, u(m))
		}

		function a(m) {
			return m === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : m === null || m === 32 || m === 60 || Ss(m) ? n(m) : (e.consume(m), a)
		}

		function u(m) {
			return m === 64 ? (e.consume(m), c) : ux(m) ? (e.consume(m), u) : n(m)
		}

		function c(m) {
			return Ie(m) ? f(m) : n(m)
		}

		function f(m) {
			return m === 46 ? (e.consume(m), r = 0, c) : m === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(m)
		}

		function p(m) {
			if ((m === 45 || Ie(m)) && r++ < 63) {
				let y = m === 45 ? p : f;
				return e.consume(m), y
			}
			return n(m)
		}
	}
	var Jn = {
		tokenize: HP,
		partial: !0
	};

	function HP(e, t, n) {
		return r;

		function r(o) {
			return B(o) ? W(e, i, "linePrefix")(o) : i(o)
		}

		function i(o) {
			return o === null || V(o) ? t(o) : n(o)
		}
	}
	var Da = {
		name: "blockQuote",
		tokenize: WP,
		continuation: {
			tokenize: $P
		},
		exit: KP
	};

	function WP(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			if (s === 62) {
				let l = r.containerState;
				return l.open || (e.enter("blockQuote", {
					_container: !0
				}), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), o
			}
			return n(s)
		}

		function o(s) {
			return B(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s))
		}
	}

	function $P(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			return B(s) ? W(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : o(s)
		}

		function o(s) {
			return e.attempt(Da, t, n)(s)
		}
	}

	function KP(e) {
		e.exit("blockQuote")
	}
	var Ra = {
		name: "characterEscape",
		tokenize: GP
	};

	function GP(e, t, n) {
		return r;

		function r(o) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
		}

		function i(o) {
			return fx(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
		}
	}
	var Na = {
		name: "characterReference",
		tokenize: YP
	};

	function YP(e, t, n) {
		let r = this,
			i = 0,
			o, s;
		return l;

		function l(f) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), a
		}

		function a(f) {
			return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, s = Ie, c(f))
		}

		function u(f) {
			return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, s = cx, c) : (e.enter("characterReferenceValue"), o = 7, s = ks, c(f))
		}

		function c(f) {
			if (f === 59 && i) {
				let p = e.exit("characterReferenceValue");
				return s === Ie && !Ri(r.sliceSerialize(p)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
			}
			return s(f) && i++ < o ? (e.consume(f), c) : n(f)
		}
	}
	var vx = {
			tokenize: XP,
			partial: !0
		},
		Va = {
			name: "codeFenced",
			tokenize: QP,
			concrete: !0
		};

	function QP(e, t, n) {
		let r = this,
			i = {
				tokenize: E,
				partial: !0
			},
			o = 0,
			s = 0,
			l;
		return a;

		function a(x) {
			return u(x)
		}

		function u(x) {
			let T = r.events[r.events.length - 1];
			return o = T && T[1].type === "linePrefix" ? T[2].sliceSerialize(T[1], !0).length : 0, l = x, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(x)
		}

		function c(x) {
			return x === l ? (s++, e.consume(x), c) : s < 3 ? n(x) : (e.exit("codeFencedFenceSequence"), B(x) ? W(e, f, "whitespace")(x) : f(x))
		}

		function f(x) {
			return x === null || V(x) ? (e.exit("codeFencedFence"), r.interrupt ? t(x) : e.check(vx, v, k)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
				contentType: "string"
			}), p(x))
		}

		function p(x) {
			return x === null || V(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x)) : B(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), W(e, m, "whitespace")(x)) : x === 96 && x === l ? n(x) : (e.consume(x), p)
		}

		function m(x) {
			return x === null || V(x) ? f(x) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
				contentType: "string"
			}), y(x))
		}

		function y(x) {
			return x === null || V(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(x)) : x === 96 && x === l ? n(x) : (e.consume(x), y)
		}

		function v(x) {
			return e.attempt(i, k, C)(x)
		}

		function C(x) {
			return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), d
		}

		function d(x) {
			return o > 0 && B(x) ? W(e, h, "linePrefix", o + 1)(x) : h(x)
		}

		function h(x) {
			return x === null || V(x) ? e.check(vx, v, k)(x) : (e.enter("codeFlowValue"), g(x))
		}

		function g(x) {
			return x === null || V(x) ? (e.exit("codeFlowValue"), h(x)) : (e.consume(x), g)
		}

		function k(x) {
			return e.exit("codeFenced"), t(x)
		}

		function E(x, T, I) {
			let O = 0;
			return R;

			function R(z) {
				return x.enter("lineEnding"), x.consume(z), x.exit("lineEnding"), Z
			}

			function Z(z) {
				return x.enter("codeFencedFence"), B(z) ? W(x, Y, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : Y(z)
			}

			function Y(z) {
				return z === l ? (x.enter("codeFencedFenceSequence"), b(z)) : I(z)
			}

			function b(z) {
				return z === l ? (O++, x.consume(z), b) : O >= s ? (x.exit("codeFencedFenceSequence"), B(z) ? W(x, U, "whitespace")(z) : U(z)) : I(z)
			}

			function U(z) {
				return z === null || V(z) ? (x.exit("codeFencedFence"), T(z)) : I(z)
			}
		}
	}

	function XP(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o)
		}

		function o(s) {
			return r.parser.lazy[r.now().line] ? n(s) : t(s)
		}
	}
	var Es = {
			name: "codeIndented",
			tokenize: ZP
		},
		qP = {
			tokenize: JP,
			partial: !0
		};

	function ZP(e, t, n) {
		let r = this;
		return i;

		function i(u) {
			return e.enter("codeIndented"), W(e, o, "linePrefix", 5)(u)
		}

		function o(u) {
			let c = r.events[r.events.length - 1];
			return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? s(u) : n(u)
		}

		function s(u) {
			return u === null ? a(u) : V(u) ? e.attempt(qP, s, a)(u) : (e.enter("codeFlowValue"), l(u))
		}

		function l(u) {
			return u === null || V(u) ? (e.exit("codeFlowValue"), s(u)) : (e.consume(u), l)
		}

		function a(u) {
			return e.exit("codeIndented"), t(u)
		}
	}

	function JP(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			return r.parser.lazy[r.now().line] ? n(s) : V(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : W(e, o, "linePrefix", 5)(s)
		}

		function o(s) {
			let l = r.events[r.events.length - 1];
			return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(s) : V(s) ? i(s) : n(s)
		}
	}
	var hm = {
		name: "codeText",
		tokenize: nT,
		resolve: eT,
		previous: tT
	};

	function eT(e) {
		let t = e.length - 4,
			n = 3,
			r, i;
		if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
			for (r = n; ++r < t;)
				if (e[r][1].type === "codeTextData") {
					e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
					break
				}
		}
		for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
		return e
	}

	function tT(e) {
		return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
	}

	function nT(e, t, n) {
		let r = this,
			i = 0,
			o, s;
		return l;

		function l(p) {
			return e.enter("codeText"), e.enter("codeTextSequence"), a(p)
		}

		function a(p) {
			return p === 96 ? (e.consume(p), i++, a) : (e.exit("codeTextSequence"), u(p))
		}

		function u(p) {
			return p === null ? n(p) : p === 32 ? (e.enter("space"), e.consume(p), e.exit("space"), u) : p === 96 ? (s = e.enter("codeTextSequence"), o = 0, f(p)) : V(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), u) : (e.enter("codeTextData"), c(p))
		}

		function c(p) {
			return p === null || p === 32 || p === 96 || V(p) ? (e.exit("codeTextData"), u(p)) : (e.consume(p), c)
		}

		function f(p) {
			return p === 96 ? (e.consume(p), o++, f) : o === i ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p)) : (s.type = "codeTextData", c(p))
		}
	}
	var Oa = class {
		constructor(t) {
			this.left = t ? [...t] : [], this.right = []
		}
		get(t) {
			if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
			return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1]
		}
		get length() {
			return this.left.length + this.right.length
		}
		shift() {
			return this.setCursor(0), this.right.pop()
		}
		slice(t, n) {
			let r = n ?? Number.POSITIVE_INFINITY;
			if (r < this.left.length) return this.left.slice(t, r);
			if (t > this.left.length) return this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse();
			let i = this.left.slice(t);
			return i.push(...this.right.slice(this.right.length - r + this.left.length).reverse()), i
		}
		splice(t, n, r) {
			let i = n || 0;
			this.setCursor(Math.trunc(t));
			let o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
			return r && Ps(this.left, r), o.reverse()
		}
		pop() {
			return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
		}
		push(t) {
			this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t)
		}
		pushMany(t) {
			this.setCursor(Number.POSITIVE_INFINITY), Ps(this.left, t)
		}
		unshift(t) {
			this.setCursor(0), this.right.push(t)
		}
		unshiftMany(t) {
			this.setCursor(0), Ps(this.right, t.reverse())
		}
		setCursor(t) {
			if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
				if (t < this.left.length) {
					let n = this.left.splice(t, Number.POSITIVE_INFINITY);
					Ps(this.right, n.reverse())
				} else {
					let n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
					Ps(this.left, n.reverse())
				}
		}
	};

	function Ps(e, t) {
		let n = 0;
		if (t.length < 1e4) e.push(...t);
		else
			for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
	}

	function ba(e) {
		let t = {},
			n = -1,
			r, i, o, s, l, a, u, c = new Oa(e);
		for (; ++n < c.length;) {
			for (; n in t;) n = t[n];
			if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, o = 0, o < a.length && a[o][1].type === "lineEndingBlank" && (o += 2), o < a.length && a[o][1].type === "content"))
				for (; ++o < a.length && a[o][1].type !== "content";) a[o][1].type === "chunkText" && (a[o][1]._isInFirstContentOfListItem = !0, o++);
			if (r[0] === "enter") r[1].contentType && (Object.assign(t, rT(c, n)), n = t[n], u = !0);
			else if (r[1]._container) {
				for (o = n, i = void 0; o-- && (s = c.get(o), s[1].type === "lineEnding" || s[1].type === "lineEndingBlank");) s[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = o);
				i && (r[1].end = {
					...c.get(i)[1].start
				}, l = c.slice(i, n), l.unshift(r), c.splice(i, n - i + 1, l))
			}
		}
		return je(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u
	}

	function rT(e, t) {
		let n = e.get(t)[1],
			r = e.get(t)[2],
			i = t - 1,
			o = [],
			s = n._tokenizer || r.parser[n.contentType](n.start),
			l = s.events,
			a = [],
			u = {},
			c, f, p = -1,
			m = n,
			y = 0,
			v = 0,
			C = [v];
		for (; m;) {
			for (; e.get(++i)[1] !== m;);
			o.push(i), m._tokenizer || (c = r.sliceStream(m), m.next || c.push(null), f && s.defineSkip(m.start), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(c), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), f = m, m = m.next
		}
		for (m = n; ++p < l.length;) l[p][0] === "exit" && l[p - 1][0] === "enter" && l[p][1].type === l[p - 1][1].type && l[p][1].start.line !== l[p][1].end.line && (v = p + 1, C.push(v), m._tokenizer = void 0, m.previous = void 0, m = m.next);
		for (s.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : C.pop(), p = C.length; p--;) {
			let d = l.slice(C[p], C[p + 1]),
				h = o.pop();
			a.push([h, h + d.length - 1]), e.splice(h, 2, d)
		}
		for (a.reverse(), p = -1; ++p < a.length;) u[y + a[p][0]] = y + a[p][1], y += a[p][1] - a[p][0] - 1;
		return u
	}
	var gm = {
			tokenize: sT,
			resolve: oT
		},
		iT = {
			tokenize: lT,
			partial: !0
		};

	function oT(e) {
		return ba(e), e
	}

	function sT(e, t) {
		let n;
		return r;

		function r(l) {
			return e.enter("content"), n = e.enter("chunkContent", {
				contentType: "content"
			}), i(l)
		}

		function i(l) {
			return l === null ? o(l) : V(l) ? e.check(iT, s, o)(l) : (e.consume(l), i)
		}

		function o(l) {
			return e.exit("chunkContent"), e.exit("content"), t(l)
		}

		function s(l) {
			return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, i
		}
	}

	function lT(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), W(e, o, "linePrefix")
		}

		function o(s) {
			if (s === null || V(s)) return n(s);
			let l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s)
		}
	}

	function _a(e, t, n, r, i, o, s, l, a) {
		let u = a || Number.POSITIVE_INFINITY,
			c = 0;
		return f;

		function f(d) {
			return d === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(d), e.exit(o), p) : d === null || d === 32 || d === 41 || Ss(d) ? n(d) : (e.enter(r), e.enter(s), e.enter(l), e.enter("chunkString", {
				contentType: "string"
			}), v(d))
		}

		function p(d) {
			return d === 62 ? (e.enter(o), e.consume(d), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
				contentType: "string"
			}), m(d))
		}

		function m(d) {
			return d === 62 ? (e.exit("chunkString"), e.exit(l), p(d)) : d === null || d === 60 || V(d) ? n(d) : (e.consume(d), d === 92 ? y : m)
		}

		function y(d) {
			return d === 60 || d === 62 || d === 92 ? (e.consume(d), m) : m(d)
		}

		function v(d) {
			return !c && (d === null || d === 41 || we(d)) ? (e.exit("chunkString"), e.exit(l), e.exit(s), e.exit(r), t(d)) : c < u && d === 40 ? (e.consume(d), c++, v) : d === 41 ? (e.consume(d), c--, v) : d === null || d === 32 || d === 40 || Ss(d) ? n(d) : (e.consume(d), d === 92 ? C : v)
		}

		function C(d) {
			return d === 40 || d === 41 || d === 92 ? (e.consume(d), v) : v(d)
		}
	}

	function za(e, t, n, r, i, o) {
		let s = this,
			l = 0,
			a;
		return u;

		function u(m) {
			return e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(o), c
		}

		function c(m) {
			return l > 999 || m === null || m === 91 || m === 93 && !a || m === 94 && !l && "_hiddenFootnoteSupport" in s.parser.constructs ? n(m) : m === 93 ? (e.exit(o), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : V(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), c) : (e.enter("chunkString", {
				contentType: "string"
			}), f(m))
		}

		function f(m) {
			return m === null || m === 91 || m === 93 || V(m) || l++ > 999 ? (e.exit("chunkString"), c(m)) : (e.consume(m), a || (a = !B(m)), m === 92 ? p : f)
		}

		function p(m) {
			return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, f) : f(m)
		}
	}

	function Fa(e, t, n, r, i, o) {
		let s;
		return l;

		function l(p) {
			return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), s = p === 40 ? 41 : p, a) : n(p)
		}

		function a(p) {
			return p === s ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), u(p))
		}

		function u(p) {
			return p === s ? (e.exit(o), a(s)) : p === null ? n(p) : V(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), W(e, u, "linePrefix")) : (e.enter("chunkString", {
				contentType: "string"
			}), c(p))
		}

		function c(p) {
			return p === s || p === null || V(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? f : c)
		}

		function f(p) {
			return p === s || p === 92 ? (e.consume(p), c) : c(p)
		}
	}

	function zr(e, t) {
		let n;
		return r;

		function r(i) {
			return V(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : B(i) ? W(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
		}
	}
	var ym = {
			name: "definition",
			tokenize: uT
		},
		aT = {
			tokenize: cT,
			partial: !0
		};

	function uT(e, t, n) {
		let r = this,
			i;
		return o;

		function o(m) {
			return e.enter("definition"), s(m)
		}

		function s(m) {
			return za.call(r, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(m)
		}

		function l(m) {
			return i = wn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), a) : n(m)
		}

		function a(m) {
			return we(m) ? zr(e, u)(m) : u(m)
		}

		function u(m) {
			return _a(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(m)
		}

		function c(m) {
			return e.attempt(aT, f, f)(m)
		}

		function f(m) {
			return B(m) ? W(e, p, "whitespace")(m) : p(m)
		}

		function p(m) {
			return m === null || V(m) ? (e.exit("definition"), r.parser.defined.push(i), t(m)) : n(m)
		}
	}

	function cT(e, t, n) {
		return r;

		function r(l) {
			return we(l) ? zr(e, i)(l) : n(l)
		}

		function i(l) {
			return Fa(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l)
		}

		function o(l) {
			return B(l) ? W(e, s, "whitespace")(l) : s(l)
		}

		function s(l) {
			return l === null || V(l) ? t(l) : n(l)
		}
	}
	var vm = {
		name: "hardBreakEscape",
		tokenize: fT
	};

	function fT(e, t, n) {
		return r;

		function r(o) {
			return e.enter("hardBreakEscape"), e.consume(o), i
		}

		function i(o) {
			return V(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o)
		}
	}
	var xm = {
		name: "headingAtx",
		tokenize: mT,
		resolve: pT
	};

	function pT(e, t) {
		let n = e.length - 2,
			r = 3,
			i, o;
		return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
			type: "atxHeadingText",
			start: e[r][1].start,
			end: e[n][1].end
		}, o = {
			type: "chunkText",
			start: e[r][1].start,
			end: e[n][1].end,
			contentType: "text"
		}, je(e, r, n - r + 1, [
			["enter", i, t],
			["enter", o, t],
			["exit", o, t],
			["exit", i, t]
		])), e
	}

	function mT(e, t, n) {
		let r = 0;
		return i;

		function i(c) {
			return e.enter("atxHeading"), o(c)
		}

		function o(c) {
			return e.enter("atxHeadingSequence"), s(c)
		}

		function s(c) {
			return c === 35 && r++ < 6 ? (e.consume(c), s) : c === null || we(c) ? (e.exit("atxHeadingSequence"), l(c)) : n(c)
		}

		function l(c) {
			return c === 35 ? (e.enter("atxHeadingSequence"), a(c)) : c === null || V(c) ? (e.exit("atxHeading"), t(c)) : B(c) ? W(e, l, "whitespace")(c) : (e.enter("atxHeadingText"), u(c))
		}

		function a(c) {
			return c === 35 ? (e.consume(c), a) : (e.exit("atxHeadingSequence"), l(c))
		}

		function u(c) {
			return c === null || c === 35 || we(c) ? (e.exit("atxHeadingText"), l(c)) : (e.consume(c), u)
		}
	}
	var xx = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
		wm = ["pre", "script", "style", "textarea"];
	var Sm = {
			name: "htmlFlow",
			tokenize: yT,
			resolveTo: gT,
			concrete: !0
		},
		dT = {
			tokenize: xT,
			partial: !0
		},
		hT = {
			tokenize: vT,
			partial: !0
		};

	function gT(e) {
		let t = e.length;
		for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
		return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
	}

	function yT(e, t, n) {
		let r = this,
			i, o, s, l, a;
		return u;

		function u(S) {
			return c(S)
		}

		function c(S) {
			return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(S), f
		}

		function f(S) {
			return S === 33 ? (e.consume(S), p) : S === 47 ? (e.consume(S), o = !0, v) : S === 63 ? (e.consume(S), i = 3, r.interrupt ? t : w) : St(S) ? (e.consume(S), s = String.fromCharCode(S), C) : n(S)
		}

		function p(S) {
			return S === 45 ? (e.consume(S), i = 2, m) : S === 91 ? (e.consume(S), i = 5, l = 0, y) : St(S) ? (e.consume(S), i = 4, r.interrupt ? t : w) : n(S)
		}

		function m(S) {
			return S === 45 ? (e.consume(S), r.interrupt ? t : w) : n(S)
		}

		function y(S) {
			let mt = "CDATA[";
			return S === mt.charCodeAt(l++) ? (e.consume(S), l === mt.length ? r.interrupt ? t : Y : y) : n(S)
		}

		function v(S) {
			return St(S) ? (e.consume(S), s = String.fromCharCode(S), C) : n(S)
		}

		function C(S) {
			if (S === null || S === 47 || S === 62 || we(S)) {
				let mt = S === 47,
					yr = s.toLowerCase();
				return !mt && !o && wm.includes(yr) ? (i = 1, r.interrupt ? t(S) : Y(S)) : xx.includes(s.toLowerCase()) ? (i = 6, mt ? (e.consume(S), d) : r.interrupt ? t(S) : Y(S)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(S) : o ? h(S) : g(S))
			}
			return S === 45 || Ie(S) ? (e.consume(S), s += String.fromCharCode(S), C) : n(S)
		}

		function d(S) {
			return S === 62 ? (e.consume(S), r.interrupt ? t : Y) : n(S)
		}

		function h(S) {
			return B(S) ? (e.consume(S), h) : R(S)
		}

		function g(S) {
			return S === 47 ? (e.consume(S), R) : S === 58 || S === 95 || St(S) ? (e.consume(S), k) : B(S) ? (e.consume(S), g) : R(S)
		}

		function k(S) {
			return S === 45 || S === 46 || S === 58 || S === 95 || Ie(S) ? (e.consume(S), k) : E(S)
		}

		function E(S) {
			return S === 61 ? (e.consume(S), x) : B(S) ? (e.consume(S), E) : g(S)
		}

		function x(S) {
			return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? n(S) : S === 34 || S === 39 ? (e.consume(S), a = S, T) : B(S) ? (e.consume(S), x) : I(S)
		}

		function T(S) {
			return S === a ? (e.consume(S), a = null, O) : S === null || V(S) ? n(S) : (e.consume(S), T)
		}

		function I(S) {
			return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || we(S) ? E(S) : (e.consume(S), I)
		}

		function O(S) {
			return S === 47 || S === 62 || B(S) ? g(S) : n(S)
		}

		function R(S) {
			return S === 62 ? (e.consume(S), Z) : n(S)
		}

		function Z(S) {
			return S === null || V(S) ? Y(S) : B(S) ? (e.consume(S), Z) : n(S)
		}

		function Y(S) {
			return S === 45 && i === 2 ? (e.consume(S), X) : S === 60 && i === 1 ? (e.consume(S), pe) : S === 62 && i === 4 ? (e.consume(S), Pt) : S === 63 && i === 3 ? (e.consume(S), w) : S === 93 && i === 5 ? (e.consume(S), Yt) : V(S) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(dT, on, b)(S)) : S === null || V(S) ? (e.exit("htmlFlowData"), b(S)) : (e.consume(S), Y)
		}

		function b(S) {
			return e.check(hT, U, on)(S)
		}

		function U(S) {
			return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), z
		}

		function z(S) {
			return S === null || V(S) ? b(S) : (e.enter("htmlFlowData"), Y(S))
		}

		function X(S) {
			return S === 45 ? (e.consume(S), w) : Y(S)
		}

		function pe(S) {
			return S === 47 ? (e.consume(S), s = "", Ke) : Y(S)
		}

		function Ke(S) {
			if (S === 62) {
				let mt = s.toLowerCase();
				return wm.includes(mt) ? (e.consume(S), Pt) : Y(S)
			}
			return St(S) && s.length < 8 ? (e.consume(S), s += String.fromCharCode(S), Ke) : Y(S)
		}

		function Yt(S) {
			return S === 93 ? (e.consume(S), w) : Y(S)
		}

		function w(S) {
			return S === 62 ? (e.consume(S), Pt) : S === 45 && i === 2 ? (e.consume(S), w) : Y(S)
		}

		function Pt(S) {
			return S === null || V(S) ? (e.exit("htmlFlowData"), on(S)) : (e.consume(S), Pt)
		}

		function on(S) {
			return e.exit("htmlFlow"), t(S)
		}
	}

	function vT(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			return V(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o) : n(s)
		}

		function o(s) {
			return r.parser.lazy[r.now().line] ? n(s) : t(s)
		}
	}

	function xT(e, t, n) {
		return r;

		function r(i) {
			return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Jn, t, n)
		}
	}
	var km = {
		name: "htmlText",
		tokenize: wT
	};

	function wT(e, t, n) {
		let r = this,
			i, o, s;
		return l;

		function l(w) {
			return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), a
		}

		function a(w) {
			return w === 33 ? (e.consume(w), u) : w === 47 ? (e.consume(w), E) : w === 63 ? (e.consume(w), g) : St(w) ? (e.consume(w), I) : n(w)
		}

		function u(w) {
			return w === 45 ? (e.consume(w), c) : w === 91 ? (e.consume(w), o = 0, y) : St(w) ? (e.consume(w), h) : n(w)
		}

		function c(w) {
			return w === 45 ? (e.consume(w), m) : n(w)
		}

		function f(w) {
			return w === null ? n(w) : w === 45 ? (e.consume(w), p) : V(w) ? (s = f, pe(w)) : (e.consume(w), f)
		}

		function p(w) {
			return w === 45 ? (e.consume(w), m) : f(w)
		}

		function m(w) {
			return w === 62 ? X(w) : w === 45 ? p(w) : f(w)
		}

		function y(w) {
			let Pt = "CDATA[";
			return w === Pt.charCodeAt(o++) ? (e.consume(w), o === Pt.length ? v : y) : n(w)
		}

		function v(w) {
			return w === null ? n(w) : w === 93 ? (e.consume(w), C) : V(w) ? (s = v, pe(w)) : (e.consume(w), v)
		}

		function C(w) {
			return w === 93 ? (e.consume(w), d) : v(w)
		}

		function d(w) {
			return w === 62 ? X(w) : w === 93 ? (e.consume(w), d) : v(w)
		}

		function h(w) {
			return w === null || w === 62 ? X(w) : V(w) ? (s = h, pe(w)) : (e.consume(w), h)
		}

		function g(w) {
			return w === null ? n(w) : w === 63 ? (e.consume(w), k) : V(w) ? (s = g, pe(w)) : (e.consume(w), g)
		}

		function k(w) {
			return w === 62 ? X(w) : g(w)
		}

		function E(w) {
			return St(w) ? (e.consume(w), x) : n(w)
		}

		function x(w) {
			return w === 45 || Ie(w) ? (e.consume(w), x) : T(w)
		}

		function T(w) {
			return V(w) ? (s = T, pe(w)) : B(w) ? (e.consume(w), T) : X(w)
		}

		function I(w) {
			return w === 45 || Ie(w) ? (e.consume(w), I) : w === 47 || w === 62 || we(w) ? O(w) : n(w)
		}

		function O(w) {
			return w === 47 ? (e.consume(w), X) : w === 58 || w === 95 || St(w) ? (e.consume(w), R) : V(w) ? (s = O, pe(w)) : B(w) ? (e.consume(w), O) : X(w)
		}

		function R(w) {
			return w === 45 || w === 46 || w === 58 || w === 95 || Ie(w) ? (e.consume(w), R) : Z(w)
		}

		function Z(w) {
			return w === 61 ? (e.consume(w), Y) : V(w) ? (s = Z, pe(w)) : B(w) ? (e.consume(w), Z) : O(w)
		}

		function Y(w) {
			return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? n(w) : w === 34 || w === 39 ? (e.consume(w), i = w, b) : V(w) ? (s = Y, pe(w)) : B(w) ? (e.consume(w), Y) : (e.consume(w), U)
		}

		function b(w) {
			return w === i ? (e.consume(w), i = void 0, z) : w === null ? n(w) : V(w) ? (s = b, pe(w)) : (e.consume(w), b)
		}

		function U(w) {
			return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? n(w) : w === 47 || w === 62 || we(w) ? O(w) : (e.consume(w), U)
		}

		function z(w) {
			return w === 47 || w === 62 || we(w) ? O(w) : n(w)
		}

		function X(w) {
			return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(w)
		}

		function pe(w) {
			return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), Ke
		}

		function Ke(w) {
			return B(w) ? W(e, Yt, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : Yt(w)
		}

		function Yt(w) {
			return e.enter("htmlTextData"), s(w)
		}
	}
	var Fr = {
			name: "labelEnd",
			tokenize: TT,
			resolveTo: PT,
			resolveAll: ET
		},
		ST = {
			tokenize: AT
		},
		kT = {
			tokenize: IT
		},
		CT = {
			tokenize: LT
		};

	function ET(e) {
		let t = -1;
		for (; ++t < e.length;) {
			let n = e[t][1];
			(n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++)
		}
		return e
	}

	function PT(e, t) {
		let n = e.length,
			r = 0,
			i, o, s, l;
		for (; n--;)
			if (i = e[n][1], o) {
				if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
				e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
			} else if (s) {
			if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
				r = 2;
				break
			}
		} else i.type === "labelEnd" && (s = n);
		let a = {
				type: e[o][1].type === "labelLink" ? "link" : "image",
				start: Object.assign({}, e[o][1].start),
				end: Object.assign({}, e[e.length - 1][1].end)
			},
			u = {
				type: "label",
				start: Object.assign({}, e[o][1].start),
				end: Object.assign({}, e[s][1].end)
			},
			c = {
				type: "labelText",
				start: Object.assign({}, e[o + r + 2][1].end),
				end: Object.assign({}, e[s - 2][1].start)
			};
		return l = [
			["enter", a, t],
			["enter", u, t]
		], l = Ze(l, e.slice(o + 1, o + r + 3)), l = Ze(l, [
			["enter", c, t]
		]), l = Ze(l, Ni(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, s - 3), t)), l = Ze(l, [
			["exit", c, t], e[s - 2], e[s - 1],
			["exit", u, t]
		]), l = Ze(l, e.slice(s + 1)), l = Ze(l, [
			["exit", a, t]
		]), je(e, o, e.length, l), e
	}

	function TT(e, t, n) {
		let r = this,
			i = r.events.length,
			o, s;
		for (; i--;)
			if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
				o = r.events[i][1];
				break
			} return l;

		function l(p) {
			return o ? o._inactive ? f(p) : (s = r.parser.defined.includes(wn(r.sliceSerialize({
				start: o.end,
				end: r.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(p)
		}

		function a(p) {
			return p === 40 ? e.attempt(ST, c, s ? c : f)(p) : p === 91 ? e.attempt(kT, c, s ? u : f)(p) : s ? c(p) : f(p)
		}

		function u(p) {
			return e.attempt(CT, c, f)(p)
		}

		function c(p) {
			return t(p)
		}

		function f(p) {
			return o._balanced = !0, n(p)
		}
	}

	function AT(e, t, n) {
		return r;

		function r(f) {
			return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i
		}

		function i(f) {
			return we(f) ? zr(e, o)(f) : o(f)
		}

		function o(f) {
			return f === 41 ? c(f) : _a(e, s, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f)
		}

		function s(f) {
			return we(f) ? zr(e, a)(f) : c(f)
		}

		function l(f) {
			return n(f)
		}

		function a(f) {
			return f === 34 || f === 39 || f === 40 ? Fa(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f)
		}

		function u(f) {
			return we(f) ? zr(e, c)(f) : c(f)
		}

		function c(f) {
			return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f)
		}
	}

	function IT(e, t, n) {
		let r = this;
		return i;

		function i(l) {
			return za.call(r, e, o, s, "reference", "referenceMarker", "referenceString")(l)
		}

		function o(l) {
			return r.parser.defined.includes(wn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l)
		}

		function s(l) {
			return n(l)
		}
	}

	function LT(e, t, n) {
		return r;

		function r(o) {
			return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
		}

		function i(o) {
			return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
		}
	}
	var Cm = {
		name: "labelStartImage",
		tokenize: MT,
		resolveAll: Fr.resolveAll
	};

	function MT(e, t, n) {
		let r = this;
		return i;

		function i(l) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), o
		}

		function o(l) {
			return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), s) : n(l)
		}

		function s(l) {
			return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l)
		}
	}
	var Em = {
		name: "labelStartLink",
		tokenize: DT,
		resolveAll: Fr.resolveAll
	};

	function DT(e, t, n) {
		let r = this;
		return i;

		function i(s) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), o
		}

		function o(s) {
			return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
		}
	}
	var Ts = {
		name: "lineEnding",
		tokenize: RT
	};

	function RT(e, t) {
		return n;

		function n(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), W(e, t, "linePrefix")
		}
	}
	var Br = {
		name: "thematicBreak",
		tokenize: NT
	};

	function NT(e, t, n) {
		let r = 0,
			i;
		return o;

		function o(u) {
			return e.enter("thematicBreak"), s(u)
		}

		function s(u) {
			return i = u, l(u)
		}

		function l(u) {
			return u === i ? (e.enter("thematicBreakSequence"), a(u)) : r >= 3 && (u === null || V(u)) ? (e.exit("thematicBreak"), t(u)) : n(u)
		}

		function a(u) {
			return u === i ? (e.consume(u), r++, a) : (e.exit("thematicBreakSequence"), B(u) ? W(e, l, "whitespace")(u) : l(u))
		}
	}
	var Ue = {
			name: "list",
			tokenize: bT,
			continuation: {
				tokenize: _T
			},
			exit: FT
		},
		VT = {
			tokenize: BT,
			partial: !0
		},
		OT = {
			tokenize: zT,
			partial: !0
		};

	function bT(e, t, n) {
		let r = this,
			i = r.events[r.events.length - 1],
			o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
			s = 0;
		return l;

		function l(m) {
			let y = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
			if (y === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : ks(m)) {
				if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
						_container: !0
					})), y === "listUnordered") return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(Br, n, u)(m) : u(m);
				if (!r.interrupt || m === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), a(m)
			}
			return n(m)
		}

		function a(m) {
			return ks(m) && ++s < 10 ? (e.consume(m), a) : (!r.interrupt || s < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46) ? (e.exit("listItemValue"), u(m)) : n(m)
		}

		function u(m) {
			return e.enter("listItemMarker"), e.consume(m), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || m, e.check(Jn, r.interrupt ? n : c, e.attempt(VT, p, f))
		}

		function c(m) {
			return r.containerState.initialBlankLine = !0, o++, p(m)
		}

		function f(m) {
			return B(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), p) : n(m)
		}

		function p(m) {
			return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(m)
		}
	}

	function _T(e, t, n) {
		let r = this;
		return r.containerState._closeFlow = void 0, e.check(Jn, i, o);

		function i(l) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, W(e, t, "listItemIndent", r.containerState.size + 1)(l)
		}

		function o(l) {
			return r.containerState.furtherBlankLines || !B(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(OT, t, s)(l))
		}

		function s(l) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, W(e, e.attempt(Ue, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l)
		}
	}

	function zT(e, t, n) {
		let r = this;
		return W(e, i, "listItemIndent", r.containerState.size + 1);

		function i(o) {
			let s = r.events[r.events.length - 1];
			return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(o) : n(o)
		}
	}

	function FT(e) {
		e.exit(this.containerState.type)
	}

	function BT(e, t, n) {
		let r = this;
		return W(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);

		function i(o) {
			let s = r.events[r.events.length - 1];
			return !B(o) && s && s[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
		}
	}
	var Ba = {
		name: "setextUnderline",
		tokenize: UT,
		resolveTo: jT
	};

	function jT(e, t) {
		let n = e.length,
			r, i, o;
		for (; n--;)
			if (e[n][0] === "enter") {
				if (e[n][1].type === "content") {
					r = n;
					break
				}
				e[n][1].type === "paragraph" && (i = n)
			} else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
		let s = {
			type: "setextHeading",
			start: Object.assign({}, e[i][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		};
		return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", s, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = s, e.push(["exit", s, t]), e
	}

	function UT(e, t, n) {
		let r = this,
			i;
		return o;

		function o(u) {
			let c = r.events.length,
				f;
			for (; c--;)
				if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
					f = r.events[c][1].type === "paragraph";
					break
				} return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, s(u)) : n(u)
		}

		function s(u) {
			return e.enter("setextHeadingLineSequence"), l(u)
		}

		function l(u) {
			return u === i ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), B(u) ? W(e, a, "lineSuffix")(u) : a(u))
		}

		function a(u) {
			return u === null || V(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u)
		}
	}
	var wx = {
		tokenize: HT
	};

	function HT(e) {
		let t = this,
			n = e.attempt(Jn, r, e.attempt(this.parser.constructs.flowInitial, i, W(e, e.attempt(this.parser.constructs.flow, i, e.attempt(gm, i)), "linePrefix")));
		return n;

		function r(o) {
			if (o === null) {
				e.consume(o);
				return
			}
			return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
		}

		function i(o) {
			if (o === null) {
				e.consume(o);
				return
			}
			return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n
		}
	}
	var Sx = {
			resolveAll: Px()
		},
		kx = Ex("string"),
		Cx = Ex("text");

	function Ex(e) {
		return {
			tokenize: t,
			resolveAll: Px(e === "text" ? WT : void 0)
		};

		function t(n) {
			let r = this,
				i = this.parser.constructs[e],
				o = n.attempt(i, s, l);
			return s;

			function s(c) {
				return u(c) ? o(c) : l(c)
			}

			function l(c) {
				if (c === null) {
					n.consume(c);
					return
				}
				return n.enter("data"), n.consume(c), a
			}

			function a(c) {
				return u(c) ? (n.exit("data"), o(c)) : (n.consume(c), a)
			}

			function u(c) {
				if (c === null) return !0;
				let f = i[c],
					p = -1;
				if (f)
					for (; ++p < f.length;) {
						let m = f[p];
						if (!m.previous || m.previous.call(r, r.previous)) return !0
					}
				return !1
			}
		}
	}

	function Px(e) {
		return t;

		function t(n, r) {
			let i = -1,
				o;
			for (; ++i <= n.length;) o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
			return e ? e(n, r) : n
		}
	}

	function WT(e, t) {
		let n = 0;
		for (; ++n <= e.length;)
			if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
				let r = e[n - 1][1],
					i = t.sliceStream(r),
					o = i.length,
					s = -1,
					l = 0,
					a;
				for (; o--;) {
					let u = i[o];
					if (typeof u == "string") {
						for (s = u.length; u.charCodeAt(s - 1) === 32;) l++, s--;
						if (s) break;
						s = -1
					} else if (u === -2) a = !0, l++;
					else if (u !== -1) {
						o++;
						break
					}
				}
				if (l) {
					let u = {
						type: n === e.length || a || l < 2 ? "lineSuffix" : "hardBreakTrailing",
						start: {
							line: r.end.line,
							column: r.end.column - l,
							offset: r.end.offset - l,
							_index: r.start._index + o,
							_bufferIndex: o ? s : r.start._bufferIndex + s
						},
						end: Object.assign({}, r.end)
					};
					r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2)
				}
				n++
			} return e
	}

	function Tx(e, t, n) {
		let r = Object.assign(n ? Object.assign({}, n) : {
				line: 1,
				column: 1,
				offset: 0
			}, {
				_index: 0,
				_bufferIndex: -1
			}),
			i = {},
			o = [],
			s = [],
			l = [],
			a = !0,
			u = {
				consume: k,
				enter: E,
				exit: x,
				attempt: O(T),
				check: O(I),
				interrupt: O(I, {
					interrupt: !0
				})
			},
			c = {
				previous: null,
				code: null,
				containerState: {},
				events: [],
				parser: e,
				sliceStream: v,
				sliceSerialize: y,
				now: C,
				defineSkip: d,
				write: m
			},
			f = t.tokenize.call(c, u),
			p;
		return t.resolveAll && o.push(t), c;

		function m(b) {
			return s = Ze(s, b), h(), s[s.length - 1] !== null ? [] : (R(t, 0), c.events = Ni(o, c.events, c), c.events)
		}

		function y(b, U) {
			return KT(v(b), U)
		}

		function v(b) {
			return $T(s, b)
		}

		function C() {
			let {
				line: b,
				column: U,
				offset: z,
				_index: X,
				_bufferIndex: pe
			} = r;
			return {
				line: b,
				column: U,
				offset: z,
				_index: X,
				_bufferIndex: pe
			}
		}

		function d(b) {
			i[b.line] = b.column, Y()
		}

		function h() {
			let b;
			for (; r._index < s.length;) {
				let U = s[r._index];
				if (typeof U == "string")
					for (b = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === b && r._bufferIndex < U.length;) g(U.charCodeAt(r._bufferIndex));
				else g(U)
			}
		}

		function g(b) {
			a = void 0, p = b, f = f(b)
		}

		function k(b) {
			V(b) ? (r.line++, r.column = 1, r.offset += b === -3 ? 2 : 1, Y()) : b !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = b, a = !0
		}

		function E(b, U) {
			let z = U || {};
			return z.type = b, z.start = C(), c.events.push(["enter", z, c]), l.push(z), z
		}

		function x(b) {
			let U = l.pop();
			return U.end = C(), c.events.push(["exit", U, c]), U
		}

		function T(b, U) {
			R(b, U.from)
		}

		function I(b, U) {
			U.restore()
		}

		function O(b, U) {
			return z;

			function z(X, pe, Ke) {
				let Yt, w, Pt, on;
				return Array.isArray(X) ? mt(X) : "tokenize" in X ? mt([X]) : S(X);

				function S(Me) {
					return So;

					function So(sn) {
						let vr = sn !== null && Me[sn],
							Zr = sn !== null && Me.null,
							Ic = [...Array.isArray(vr) ? vr : vr ? [vr] : [], ...Array.isArray(Zr) ? Zr : Zr ? [Zr] : []];
						return mt(Ic)(sn)
					}
				}

				function mt(Me) {
					return Yt = Me, w = 0, Me.length === 0 ? Ke : yr(Me[w])
				}

				function yr(Me) {
					return So;

					function So(sn) {
						return on = Z(), Pt = Me, Me.partial || (c.currentConstruct = Me), Me.name && c.parser.constructs.disable.null.includes(Me.name) ? tl(sn) : Me.tokenize.call(U ? Object.assign(Object.create(c), U) : c, u, Ac, tl)(sn)
					}
				}

				function Ac(Me) {
					return a = !0, b(Pt, on), pe
				}

				function tl(Me) {
					return a = !0, on.restore(), ++w < Yt.length ? yr(Yt[w]) : Ke
				}
			}
		}

		function R(b, U) {
			b.resolveAll && !o.includes(b) && o.push(b), b.resolve && je(c.events, U, c.events.length - U, b.resolve(c.events.slice(U), c)), b.resolveTo && (c.events = b.resolveTo(c.events, c))
		}

		function Z() {
			let b = C(),
				U = c.previous,
				z = c.currentConstruct,
				X = c.events.length,
				pe = Array.from(l);
			return {
				restore: Ke,
				from: X
			};

			function Ke() {
				r = b, c.previous = U, c.currentConstruct = z, c.events.length = X, l = pe, Y()
			}
		}

		function Y() {
			r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
		}
	}

	function $T(e, t) {
		let n = t.start._index,
			r = t.start._bufferIndex,
			i = t.end._index,
			o = t.end._bufferIndex,
			s;
		if (n === i) s = [e[n].slice(r, o)];
		else {
			if (s = e.slice(n, i), r > -1) {
				let l = s[0];
				typeof l == "string" ? s[0] = l.slice(r) : s.shift()
			}
			o > 0 && s.push(e[i].slice(0, o))
		}
		return s
	}

	function KT(e, t) {
		let n = -1,
			r = [],
			i;
		for (; ++n < e.length;) {
			let o = e[n],
				s;
			if (typeof o == "string") s = o;
			else switch (o) {
				case -5: {
					s = "\r";
					break
				}
				case -4: {
					s = `
`;
					break
				}
				case -3: {
					s = `\r
`;
					break
				}
				case -2: {
					s = t ? " " : "	";
					break
				}
				case -1: {
					if (!t && i) continue;
					s = " ";
					break
				}
				default:
					s = String.fromCharCode(o)
			}
			i = o === -2, r.push(s)
		}
		return r.join("")
	}
	var Pm = {};
	Zd(Pm, {
		attentionMarkers: () => eA,
		contentInitial: () => YT,
		disable: () => tA,
		document: () => GT,
		flow: () => XT,
		flowInitial: () => QT,
		insideSpan: () => JT,
		string: () => qT,
		text: () => ZT
	});
	var GT = {
			42: Ue,
			43: Ue,
			45: Ue,
			48: Ue,
			49: Ue,
			50: Ue,
			51: Ue,
			52: Ue,
			53: Ue,
			54: Ue,
			55: Ue,
			56: Ue,
			57: Ue,
			62: Da
		},
		YT = {
			91: ym
		},
		QT = {
			[-2]: Es,
			[-1]: Es,
			32: Es
		},
		XT = {
			35: xm,
			42: Br,
			45: [Ba, Br],
			60: Sm,
			61: Ba,
			95: Br,
			96: Va,
			126: Va
		},
		qT = {
			38: Na,
			92: Ra
		},
		ZT = {
			[-5]: Ts,
			[-4]: Ts,
			[-3]: Ts,
			33: Cm,
			38: Na,
			42: Cs,
			60: [dm, km],
			91: Em,
			92: [vm, Ra],
			93: Fr,
			95: Cs,
			96: hm
		},
		JT = {
			null: [Cs, Sx]
		},
		eA = {
			null: [42, 95]
		},
		tA = {
			null: []
		};

	function Tm(e) {
		let n = ax([Pm, ...(e || {}).extensions || []]),
			r = {
				defined: [],
				lazy: {},
				constructs: n,
				content: i(dx),
				document: i(gx),
				flow: i(wx),
				string: i(kx),
				text: i(Cx)
			};
		return r;

		function i(o) {
			return s;

			function s(l) {
				return Tx(r, o, l)
			}
		}
	}

	function Am(e) {
		for (; !ba(e););
		return e
	}
	var Ax = /[\0\t\n\r]/g;

	function Im() {
		let e = 1,
			t = "",
			n = !0,
			r;
		return i;

		function i(o, s, l) {
			let a = [],
				u, c, f, p, m;
			for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(s || void 0).decode(o)), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length;) {
				if (Ax.lastIndex = f, u = Ax.exec(o), p = u && u.index !== void 0 ? u.index : o.length, m = o.charCodeAt(p), !u) {
					t = o.slice(f);
					break
				}
				if (m === 10 && f === p && r) a.push(-3), r = void 0;
				else switch (r && (a.push(-5), r = void 0), f < p && (a.push(o.slice(f, p)), e += p - f), m) {
					case 0: {
						a.push(65533), e++;
						break
					}
					case 9: {
						for (c = Math.ceil(e / 4) * 4, a.push(-2); e++ < c;) a.push(-1);
						break
					}
					case 10: {
						a.push(-4), e = 1;
						break
					}
					default:
						r = !0, e = 1
				}
				f = p + 1
			}
			return l && (r && a.push(-5), t && a.push(t), a.push(null)), a
		}
	}
	var nA = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

	function Ix(e) {
		return e.replace(nA, rA)
	}

	function rA(e, t, n) {
		if (t) return t;
		if (n.charCodeAt(0) === 35) {
			let i = n.charCodeAt(1),
				o = i === 120 || i === 88;
			return Ma(n.slice(o ? 2 : 1), o ? 16 : 10)
		}
		return Ri(n) || e
	}
	var Mx = {}.hasOwnProperty;

	function Lm(e, t, n) {
		return typeof t != "string" && (n = t, t = void 0), iA(n)(Am(Tm(n).document().write(Im()(e, t, !0))))
	}

	function iA(e) {
		let t = {
			transforms: [],
			canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
			enter: {
				autolink: o(Xd),
				autolinkProtocol: O,
				autolinkEmail: O,
				atxHeading: o(Gd),
				blockQuote: o(sn),
				characterEscape: O,
				characterReference: O,
				codeFenced: o(vr),
				codeFencedFenceInfo: s,
				codeFencedFenceMeta: s,
				codeIndented: o(vr, s),
				codeText: o(Zr, s),
				codeTextData: O,
				data: O,
				codeFlowValue: O,
				definition: o(Ic),
				definitionDestinationString: s,
				definitionLabelString: s,
				definitionTitleString: s,
				emphasis: o(sk),
				hardBreakEscape: o(Yd),
				hardBreakTrailing: o(Yd),
				htmlFlow: o(Qd, s),
				htmlFlowData: O,
				htmlText: o(Qd, s),
				htmlTextData: O,
				image: o(lk),
				label: s,
				link: o(Xd),
				listItem: o(ak),
				listItemValue: p,
				listOrdered: o(qd, f),
				listUnordered: o(qd),
				paragraph: o(uk),
				reference: S,
				referenceString: s,
				resourceDestinationString: s,
				resourceTitleString: s,
				setextHeading: o(Gd),
				strong: o(ck),
				thematicBreak: o(pk)
			},
			exit: {
				atxHeading: a(),
				atxHeadingSequence: E,
				autolink: a(),
				autolinkEmail: So,
				autolinkProtocol: Me,
				blockQuote: a(),
				characterEscapeValue: R,
				characterReferenceMarkerHexadecimal: yr,
				characterReferenceMarkerNumeric: yr,
				characterReferenceValue: Ac,
				characterReference: tl,
				codeFenced: a(C),
				codeFencedFence: v,
				codeFencedFenceInfo: m,
				codeFencedFenceMeta: y,
				codeFlowValue: R,
				codeIndented: a(d),
				codeText: a(z),
				codeTextData: R,
				data: R,
				definition: a(),
				definitionDestinationString: k,
				definitionLabelString: h,
				definitionTitleString: g,
				emphasis: a(),
				hardBreakEscape: a(Y),
				hardBreakTrailing: a(Y),
				htmlFlow: a(b),
				htmlFlowData: R,
				htmlText: a(U),
				htmlTextData: R,
				image: a(pe),
				label: Yt,
				labelText: Ke,
				lineEnding: Z,
				link: a(X),
				listItem: a(),
				listOrdered: a(),
				listUnordered: a(),
				paragraph: a(),
				referenceString: mt,
				resourceDestinationString: w,
				resourceTitleString: Pt,
				resource: on,
				setextHeading: a(I),
				setextHeadingLineSequence: T,
				setextHeadingText: x,
				strong: a(),
				thematicBreak: a()
			}
		};
		Dx(t, (e || {}).mdastExtensions || []);
		let n = {};
		return r;

		function r(A) {
			let D = {
					type: "root",
					children: []
				},
				H = {
					stack: [D],
					tokenStack: [],
					config: t,
					enter: l,
					exit: u,
					buffer: s,
					resume: c,
					data: n
				},
				K = [],
				ne = -1;
			for (; ++ne < A.length;)
				if (A[ne][1].type === "listOrdered" || A[ne][1].type === "listUnordered")
					if (A[ne][0] === "enter") K.push(ne);
					else {
						let bt = K.pop();
						ne = i(A, bt, ne)
					} for (ne = -1; ++ne < A.length;) {
				let bt = t[A[ne][0]];
				Mx.call(bt, A[ne][1].type) && bt[A[ne][1].type].call(Object.assign({
					sliceSerialize: A[ne][2].sliceSerialize
				}, H), A[ne][1])
			}
			if (H.tokenStack.length > 0) {
				let bt = H.tokenStack[H.tokenStack.length - 1];
				(bt[1] || Lx).call(H, void 0, bt[0])
			}
			for (D.position = {
					start: er(A.length > 0 ? A[0][1].start : {
						line: 1,
						column: 1,
						offset: 0
					}),
					end: er(A.length > 0 ? A[A.length - 2][1].end : {
						line: 1,
						column: 1,
						offset: 0
					})
				}, ne = -1; ++ne < t.transforms.length;) D = t.transforms[ne](D) || D;
			return D
		}

		function i(A, D, H) {
			let K = D - 1,
				ne = -1,
				bt = !1,
				xr, ln, ko, Co;
			for (; ++K <= H;) {
				let dt = A[K];
				switch (dt[1].type) {
					case "listUnordered":
					case "listOrdered":
					case "blockQuote": {
						dt[0] === "enter" ? ne++ : ne--, Co = void 0;
						break
					}
					case "lineEndingBlank": {
						dt[0] === "enter" && (xr && !Co && !ne && !ko && (ko = K), Co = void 0);
						break
					}
					case "linePrefix":
					case "listItemValue":
					case "listItemMarker":
					case "listItemPrefix":
					case "listItemPrefixWhitespace":
						break;
					default:
						Co = void 0
				}
				if (!ne && dt[0] === "enter" && dt[1].type === "listItemPrefix" || ne === -1 && dt[0] === "exit" && (dt[1].type === "listUnordered" || dt[1].type === "listOrdered")) {
					if (xr) {
						let Jr = K;
						for (ln = void 0; Jr--;) {
							let an = A[Jr];
							if (an[1].type === "lineEnding" || an[1].type === "lineEndingBlank") {
								if (an[0] === "exit") continue;
								ln && (A[ln][1].type = "lineEndingBlank", bt = !0), an[1].type = "lineEnding", ln = Jr
							} else if (!(an[1].type === "linePrefix" || an[1].type === "blockQuotePrefix" || an[1].type === "blockQuotePrefixWhitespace" || an[1].type === "blockQuoteMarker" || an[1].type === "listItemIndent")) break
						}
						ko && (!ln || ko < ln) && (xr._spread = !0), xr.end = Object.assign({}, ln ? A[ln][1].start : dt[1].end), A.splice(ln || K, 0, ["exit", xr, dt[2]]), K++, H++
					}
					if (dt[1].type === "listItemPrefix") {
						let Jr = {
							type: "listItem",
							_spread: !1,
							start: Object.assign({}, dt[1].start),
							end: void 0
						};
						xr = Jr, A.splice(K, 0, ["enter", Jr, dt[2]]), K++, H++, ko = void 0, Co = !0
					}
				}
			}
			return A[D][1]._spread = bt, H
		}

		function o(A, D) {
			return H;

			function H(K) {
				l.call(this, A(K), K), D && D.call(this, K)
			}
		}

		function s() {
			this.stack.push({
				type: "fragment",
				children: []
			})
		}

		function l(A, D, H) {
			this.stack[this.stack.length - 1].children.push(A), this.stack.push(A), this.tokenStack.push([D, H || void 0]), A.position = {
				start: er(D.start),
				end: void 0
			}
		}

		function a(A) {
			return D;

			function D(H) {
				A && A.call(this, H), u.call(this, H)
			}
		}

		function u(A, D) {
			let H = this.stack.pop(),
				K = this.tokenStack.pop();
			if (K) K[0].type !== A.type && (D ? D.call(this, A, K[0]) : (K[1] || Lx).call(this, A, K[0]));
			else throw new Error("Cannot close `" + A.type + "` (" + qn({
				start: A.start,
				end: A.end
			}) + "): it\u2019s not open");
			H.position.end = er(A.end)
		}

		function c() {
			return pm(this.stack.pop())
		}

		function f() {
			this.data.expectingFirstListItemValue = !0
		}

		function p(A) {
			if (this.data.expectingFirstListItemValue) {
				let D = this.stack[this.stack.length - 2];
				D.start = Number.parseInt(this.sliceSerialize(A), 10), this.data.expectingFirstListItemValue = void 0
			}
		}

		function m() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.lang = A
		}

		function y() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.meta = A
		}

		function v() {
			this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
		}

		function C() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.value = A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
		}

		function d() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.value = A.replace(/(\r?\n|\r)$/g, "")
		}

		function h(A) {
			let D = this.resume(),
				H = this.stack[this.stack.length - 1];
			H.label = D, H.identifier = wn(this.sliceSerialize(A)).toLowerCase()
		}

		function g() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.title = A
		}

		function k() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.url = A
		}

		function E(A) {
			let D = this.stack[this.stack.length - 1];
			if (!D.depth) {
				let H = this.sliceSerialize(A).length;
				D.depth = H
			}
		}

		function x() {
			this.data.setextHeadingSlurpLineEnding = !0
		}

		function T(A) {
			let D = this.stack[this.stack.length - 1];
			D.depth = this.sliceSerialize(A).codePointAt(0) === 61 ? 1 : 2
		}

		function I() {
			this.data.setextHeadingSlurpLineEnding = void 0
		}

		function O(A) {
			let H = this.stack[this.stack.length - 1].children,
				K = H[H.length - 1];
			(!K || K.type !== "text") && (K = fk(), K.position = {
				start: er(A.start),
				end: void 0
			}, H.push(K)), this.stack.push(K)
		}

		function R(A) {
			let D = this.stack.pop();
			D.value += this.sliceSerialize(A), D.position.end = er(A.end)
		}

		function Z(A) {
			let D = this.stack[this.stack.length - 1];
			if (this.data.atHardBreak) {
				let H = D.children[D.children.length - 1];
				H.position.end = er(A.end), this.data.atHardBreak = void 0;
				return
			}!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(D.type) && (O.call(this, A), R.call(this, A))
		}

		function Y() {
			this.data.atHardBreak = !0
		}

		function b() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.value = A
		}

		function U() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.value = A
		}

		function z() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.value = A
		}

		function X() {
			let A = this.stack[this.stack.length - 1];
			if (this.data.inReference) {
				let D = this.data.referenceType || "shortcut";
				A.type += "Reference", A.referenceType = D, delete A.url, delete A.title
			} else delete A.identifier, delete A.label;
			this.data.referenceType = void 0
		}

		function pe() {
			let A = this.stack[this.stack.length - 1];
			if (this.data.inReference) {
				let D = this.data.referenceType || "shortcut";
				A.type += "Reference", A.referenceType = D, delete A.url, delete A.title
			} else delete A.identifier, delete A.label;
			this.data.referenceType = void 0
		}

		function Ke(A) {
			let D = this.sliceSerialize(A),
				H = this.stack[this.stack.length - 2];
			H.label = Ix(D), H.identifier = wn(D).toLowerCase()
		}

		function Yt() {
			let A = this.stack[this.stack.length - 1],
				D = this.resume(),
				H = this.stack[this.stack.length - 1];
			if (this.data.inReference = !0, H.type === "link") {
				let K = A.children;
				H.children = K
			} else H.alt = D
		}

		function w() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.url = A
		}

		function Pt() {
			let A = this.resume(),
				D = this.stack[this.stack.length - 1];
			D.title = A
		}

		function on() {
			this.data.inReference = void 0
		}

		function S() {
			this.data.referenceType = "collapsed"
		}

		function mt(A) {
			let D = this.resume(),
				H = this.stack[this.stack.length - 1];
			H.label = D, H.identifier = wn(this.sliceSerialize(A)).toLowerCase(), this.data.referenceType = "full"
		}

		function yr(A) {
			this.data.characterReferenceType = A.type
		}

		function Ac(A) {
			let D = this.sliceSerialize(A),
				H = this.data.characterReferenceType,
				K;
			H ? (K = Ma(D, H === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : K = Ri(D);
			let ne = this.stack[this.stack.length - 1];
			ne.value += K
		}

		function tl(A) {
			let D = this.stack.pop();
			D.position.end = er(A.end)
		}

		function Me(A) {
			R.call(this, A);
			let D = this.stack[this.stack.length - 1];
			D.url = this.sliceSerialize(A)
		}

		function So(A) {
			R.call(this, A);
			let D = this.stack[this.stack.length - 1];
			D.url = "mailto:" + this.sliceSerialize(A)
		}

		function sn() {
			return {
				type: "blockquote",
				children: []
			}
		}

		function vr() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			}
		}

		function Zr() {
			return {
				type: "inlineCode",
				value: ""
			}
		}

		function Ic() {
			return {
				type: "definition",
				identifier: "",
				label: null,
				title: null,
				url: ""
			}
		}

		function sk() {
			return {
				type: "emphasis",
				children: []
			}
		}

		function Gd() {
			return {
				type: "heading",
				depth: 0,
				children: []
			}
		}

		function Yd() {
			return {
				type: "break"
			}
		}

		function Qd() {
			return {
				type: "html",
				value: ""
			}
		}

		function lk() {
			return {
				type: "image",
				title: null,
				url: "",
				alt: null
			}
		}

		function Xd() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			}
		}

		function qd(A) {
			return {
				type: "list",
				ordered: A.type === "listOrdered",
				start: null,
				spread: A._spread,
				children: []
			}
		}

		function ak(A) {
			return {
				type: "listItem",
				spread: A._spread,
				checked: null,
				children: []
			}
		}

		function uk() {
			return {
				type: "paragraph",
				children: []
			}
		}

		function ck() {
			return {
				type: "strong",
				children: []
			}
		}

		function fk() {
			return {
				type: "text",
				value: ""
			}
		}

		function pk() {
			return {
				type: "thematicBreak"
			}
		}
	}

	function er(e) {
		return {
			line: e.line,
			column: e.column,
			offset: e.offset
		}
	}

	function Dx(e, t) {
		let n = -1;
		for (; ++n < t.length;) {
			let r = t[n];
			Array.isArray(r) ? Dx(e, r) : oA(e, r)
		}
	}

	function oA(e, t) {
		let n;
		for (n in t)
			if (Mx.call(t, n)) switch (n) {
				case "canContainEols": {
					let r = t[n];
					r && e[n].push(...r);
					break
				}
				case "transforms": {
					let r = t[n];
					r && e[n].push(...r);
					break
				}
				case "enter":
				case "exit": {
					let r = t[n];
					r && Object.assign(e[n], r);
					break
				}
			}
	}

	function Lx(e, t) {
		throw e ? new Error("Cannot close `" + e.type + "` (" + qn({
			start: e.start,
			end: e.end
		}) + "): a different token (`" + t.type + "`, " + qn({
			start: t.start,
			end: t.end
		}) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + qn({
			start: t.start,
			end: t.end
		}) + ") is still open")
	}

	function ja(e) {
		let t = this;
		t.parser = n;

		function n(r) {
			return Lm(r, {
				...t.data("settings"),
				...e,
				extensions: t.data("micromarkExtensions") || [],
				mdastExtensions: t.data("fromMarkdownExtensions") || []
			})
		}
	}

	function Rx(e, t) {
		let n = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: e.wrap(e.all(t), !0)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function Nx(e, t) {
		let n = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		return e.patch(t, n), [e.applyData(t, n), {
			type: "text",
			value: `
`
		}]
	}

	function Vx(e, t) {
		let n = t.value ? t.value + `
` : "",
			r = {};
		t.lang && (r.className = ["language-" + t.lang]);
		let i = {
			type: "element",
			tagName: "code",
			properties: r,
			children: [{
				type: "text",
				value: n
			}]
		};
		return t.meta && (i.data = {
			meta: t.meta
		}), e.patch(t, i), i = e.applyData(t, i), i = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [i]
		}, e.patch(t, i), i
	}

	function Ox(e, t) {
		let n = {
			type: "element",
			tagName: "del",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function bx(e, t) {
		let n = {
			type: "element",
			tagName: "em",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function _x(e, t) {
		let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
			r = String(t.identifier).toUpperCase(),
			i = Vt(r.toLowerCase()),
			o = e.footnoteOrder.indexOf(r),
			s, l = e.footnoteCounts.get(r);
		l === void 0 ? (l = 0, e.footnoteOrder.push(r), s = e.footnoteOrder.length) : s = o + 1, l += 1, e.footnoteCounts.set(r, l);
		let a = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + n + "fn-" + i,
				id: n + "fnref-" + i + (l > 1 ? "-" + l : ""),
				dataFootnoteRef: !0,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(s)
			}]
		};
		e.patch(t, a);
		let u = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [a]
		};
		return e.patch(t, u), e.applyData(t, u)
	}

	function zx(e, t) {
		let n = {
			type: "element",
			tagName: "h" + t.depth,
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function Fx(e, t) {
		if (e.options.allowDangerousHtml) {
			let n = {
				type: "raw",
				value: t.value
			};
			return e.patch(t, n), e.applyData(t, n)
		}
	}

	function Ua(e, t) {
		let n = t.referenceType,
			r = "]";
		if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
			type: "text",
			value: "![" + t.alt + r
		}];
		let i = e.all(t),
			o = i[0];
		o && o.type === "text" ? o.value = "[" + o.value : i.unshift({
			type: "text",
			value: "["
		});
		let s = i[i.length - 1];
		return s && s.type === "text" ? s.value += r : i.push({
			type: "text",
			value: r
		}), i
	}

	function Bx(e, t) {
		let n = String(t.identifier).toUpperCase(),
			r = e.definitionById.get(n);
		if (!r) return Ua(e, t);
		let i = {
			src: Vt(r.url || ""),
			alt: t.alt
		};
		r.title !== null && r.title !== void 0 && (i.title = r.title);
		let o = {
			type: "element",
			tagName: "img",
			properties: i,
			children: []
		};
		return e.patch(t, o), e.applyData(t, o)
	}

	function jx(e, t) {
		let n = {
			src: Vt(t.url)
		};
		t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "img",
			properties: n,
			children: []
		};
		return e.patch(t, r), e.applyData(t, r)
	}

	function Ux(e, t) {
		let n = {
			type: "text",
			value: t.value.replace(/\r?\n|\r/g, " ")
		};
		e.patch(t, n);
		let r = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [n]
		};
		return e.patch(t, r), e.applyData(t, r)
	}

	function Hx(e, t) {
		let n = String(t.identifier).toUpperCase(),
			r = e.definitionById.get(n);
		if (!r) return Ua(e, t);
		let i = {
			href: Vt(r.url || "")
		};
		r.title !== null && r.title !== void 0 && (i.title = r.title);
		let o = {
			type: "element",
			tagName: "a",
			properties: i,
			children: e.all(t)
		};
		return e.patch(t, o), e.applyData(t, o)
	}

	function Wx(e, t) {
		let n = {
			href: Vt(t.url)
		};
		t.title !== null && t.title !== void 0 && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "a",
			properties: n,
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r)
	}

	function $x(e, t, n) {
		let r = e.all(t),
			i = n ? sA(n) : Kx(t),
			o = {},
			s = [];
		if (typeof t.checked == "boolean") {
			let c = r[0],
				f;
			c && c.type === "element" && c.tagName === "p" ? f = c : (f = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			}, r.unshift(f)), f.children.length > 0 && f.children.unshift({
				type: "text",
				value: " "
			}), f.children.unshift({
				type: "element",
				tagName: "input",
				properties: {
					type: "checkbox",
					checked: t.checked,
					disabled: !0
				},
				children: []
			}), o.className = ["task-list-item"]
		}
		let l = -1;
		for (; ++l < r.length;) {
			let c = r[l];
			(i || l !== 0 || c.type !== "element" || c.tagName !== "p") && s.push({
				type: "text",
				value: `
`
			}), c.type === "element" && c.tagName === "p" && !i ? s.push(...c.children) : s.push(c)
		}
		let a = r[r.length - 1];
		a && (i || a.type !== "element" || a.tagName !== "p") && s.push({
			type: "text",
			value: `
`
		});
		let u = {
			type: "element",
			tagName: "li",
			properties: o,
			children: s
		};
		return e.patch(t, u), e.applyData(t, u)
	}

	function sA(e) {
		let t = !1;
		if (e.type === "list") {
			t = e.spread || !1;
			let n = e.children,
				r = -1;
			for (; !t && ++r < n.length;) t = Kx(n[r])
		}
		return t
	}

	function Kx(e) {
		let t = e.spread;
		return t ?? e.children.length > 1
	}

	function Gx(e, t) {
		let n = {},
			r = e.all(t),
			i = -1;
		for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
			let s = r[i];
			if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
				n.className = ["contains-task-list"];
				break
			}
		}
		let o = {
			type: "element",
			tagName: t.ordered ? "ol" : "ul",
			properties: n,
			children: e.wrap(r, !0)
		};
		return e.patch(t, o), e.applyData(t, o)
	}

	function Yx(e, t) {
		let n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function Qx(e, t) {
		let n = {
			type: "root",
			children: e.wrap(e.all(t))
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function Xx(e, t) {
		let n = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function qx(e, t) {
		let n = e.all(t),
			r = n.shift(),
			i = [];
		if (r) {
			let s = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: e.wrap([r], !0)
			};
			e.patch(t.children[0], s), i.push(s)
		}
		if (n.length > 0) {
			let s = {
					type: "element",
					tagName: "tbody",
					properties: {},
					children: e.wrap(n, !0)
				},
				l = Mi(t.children[1]),
				a = Ia(t.children[t.children.length - 1]);
			l && a && (s.position = {
				start: l,
				end: a
			}), i.push(s)
		}
		let o = {
			type: "element",
			tagName: "table",
			properties: {},
			children: e.wrap(i, !0)
		};
		return e.patch(t, o), e.applyData(t, o)
	}

	function Zx(e, t, n) {
		let r = n ? n.children : void 0,
			o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
			s = n && n.type === "table" ? n.align : void 0,
			l = s ? s.length : t.children.length,
			a = -1,
			u = [];
		for (; ++a < l;) {
			let f = t.children[a],
				p = {},
				m = s ? s[a] : void 0;
			m && (p.align = m);
			let y = {
				type: "element",
				tagName: o,
				properties: p,
				children: []
			};
			f && (y.children = e.all(f), e.patch(f, y), y = e.applyData(f, y)), u.push(y)
		}
		let c = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: e.wrap(u, !0)
		};
		return e.patch(t, c), e.applyData(t, c)
	}

	function Jx(e, t) {
		let n = {
			type: "element",
			tagName: "td",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function t0(e) {
		let t = String(e),
			n = /\r?\n|\r/g,
			r = n.exec(t),
			i = 0,
			o = [];
		for (; r;) o.push(e0(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
		return o.push(e0(t.slice(i), i > 0, !1)), o.join("")
	}

	function e0(e, t, n) {
		let r = 0,
			i = e.length;
		if (t) {
			let o = e.codePointAt(r);
			for (; o === 9 || o === 32;) r++, o = e.codePointAt(r)
		}
		if (n) {
			let o = e.codePointAt(i - 1);
			for (; o === 9 || o === 32;) i--, o = e.codePointAt(i - 1)
		}
		return i > r ? e.slice(r, i) : ""
	}

	function n0(e, t) {
		let n = {
			type: "text",
			value: t0(String(t.value))
		};
		return e.patch(t, n), e.applyData(t, n)
	}

	function r0(e, t) {
		let n = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		return e.patch(t, n), e.applyData(t, n)
	}
	var i0 = {
		blockquote: Rx,
		break: Nx,
		code: Vx,
		delete: Ox,
		emphasis: bx,
		footnoteReference: _x,
		heading: zx,
		html: Fx,
		imageReference: Bx,
		image: jx,
		inlineCode: Ux,
		linkReference: Hx,
		link: Wx,
		listItem: $x,
		list: Gx,
		paragraph: Yx,
		root: Qx,
		strong: Xx,
		table: qx,
		tableCell: Jx,
		tableRow: Zx,
		text: n0,
		thematicBreak: r0,
		toml: Ha,
		yaml: Ha,
		definition: Ha,
		footnoteDefinition: Ha
	};

	function Ha() {}
	var o0 = typeof self == "object" ? self : globalThis,
		lA = (e, t) => {
			let n = (i, o) => (e.set(o, i), i),
				r = i => {
					if (e.has(i)) return e.get(i);
					let [o, s] = t[i];
					switch (o) {
						case 0:
						case -1:
							return n(s, i);
						case 1: {
							let l = n([], i);
							for (let a of s) l.push(r(a));
							return l
						}
						case 2: {
							let l = n({}, i);
							for (let [a, u] of s) l[r(a)] = r(u);
							return l
						}
						case 3:
							return n(new Date(s), i);
						case 4: {
							let {
								source: l,
								flags: a
							} = s;
							return n(new RegExp(l, a), i)
						}
						case 5: {
							let l = n(new Map, i);
							for (let [a, u] of s) l.set(r(a), r(u));
							return l
						}
						case 6: {
							let l = n(new Set, i);
							for (let a of s) l.add(r(a));
							return l
						}
						case 7: {
							let {
								name: l,
								message: a
							} = s;
							return n(new o0[l](a), i)
						}
						case 8:
							return n(BigInt(s), i);
						case "BigInt":
							return n(Object(BigInt(s)), i)
					}
					return n(new o0[o](s), i)
				};
			return r
		},
		Nm = e => lA(new Map, e)(0);
	var Vi = "",
		{
			toString: aA
		} = {},
		{
			keys: uA
		} = Object,
		Ms = e => {
			let t = typeof e;
			if (t !== "object" || !e) return [0, t];
			let n = aA.call(e).slice(8, -1);
			switch (n) {
				case "Array":
					return [1, Vi];
				case "Object":
					return [2, Vi];
				case "Date":
					return [3, Vi];
				case "RegExp":
					return [4, Vi];
				case "Map":
					return [5, Vi];
				case "Set":
					return [6, Vi]
			}
			return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n]
		},
		Ya = ([e, t]) => e === 0 && (t === "function" || t === "symbol"),
		cA = (e, t, n, r) => {
			let i = (s, l) => {
					let a = r.push(s) - 1;
					return n.set(l, a), a
				},
				o = s => {
					if (n.has(s)) return n.get(s);
					let [l, a] = Ms(s);
					switch (l) {
						case 0: {
							let c = s;
							switch (a) {
								case "bigint":
									l = 8, c = s.toString();
									break;
								case "function":
								case "symbol":
									if (e) throw new TypeError("unable to serialize " + a);
									c = null;
									break;
								case "undefined":
									return i([-1], s)
							}
							return i([l, c], s)
						}
						case 1: {
							if (a) return i([a, [...s]], s);
							let c = [],
								f = i([l, c], s);
							for (let p of s) c.push(o(p));
							return f
						}
						case 2: {
							if (a) switch (a) {
								case "BigInt":
									return i([a, s.toString()], s);
								case "Boolean":
								case "Number":
								case "String":
									return i([a, s.valueOf()], s)
							}
							if (t && "toJSON" in s) return o(s.toJSON());
							let c = [],
								f = i([l, c], s);
							for (let p of uA(s))(e || !Ya(Ms(s[p]))) && c.push([o(p), o(s[p])]);
							return f
						}
						case 3:
							return i([l, s.toISOString()], s);
						case 4: {
							let {
								source: c,
								flags: f
							} = s;
							return i([l, {
								source: c,
								flags: f
							}], s)
						}
						case 5: {
							let c = [],
								f = i([l, c], s);
							for (let [p, m] of s)(e || !(Ya(Ms(p)) || Ya(Ms(m)))) && c.push([o(p), o(m)]);
							return f
						}
						case 6: {
							let c = [],
								f = i([l, c], s);
							for (let p of s)(e || !Ya(Ms(p))) && c.push(o(p));
							return f
						}
					}
					let {
						message: u
					} = s;
					return i([l, {
						name: a,
						message: u
					}], s)
				};
			return o
		},
		Vm = (e, {
			json: t,
			lossy: n
		} = {}) => {
			let r = [];
			return cA(!(t || n), !!t, new Map, r)(e), r
		};
	var Oi = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Nm(Vm(e, t)) : structuredClone(e) : (e, t) => Nm(Vm(e, t));

	function fA(e, t) {
		let n = [{
			type: "text",
			value: "\u21A9"
		}];
		return t > 1 && n.push({
			type: "element",
			tagName: "sup",
			properties: {},
			children: [{
				type: "text",
				value: String(t)
			}]
		}), n
	}

	function pA(e, t) {
		return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
	}

	function s0(e) {
		let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
			n = e.options.footnoteBackContent || fA,
			r = e.options.footnoteBackLabel || pA,
			i = e.options.footnoteLabel || "Footnotes",
			o = e.options.footnoteLabelTagName || "h2",
			s = e.options.footnoteLabelProperties || {
				className: ["sr-only"]
			},
			l = [],
			a = -1;
		for (; ++a < e.footnoteOrder.length;) {
			let u = e.footnoteById.get(e.footnoteOrder[a]);
			if (!u) continue;
			let c = e.all(u),
				f = String(u.identifier).toUpperCase(),
				p = Vt(f.toLowerCase()),
				m = 0,
				y = [],
				v = e.footnoteCounts.get(f);
			for (; v !== void 0 && ++m <= v;) {
				y.length > 0 && y.push({
					type: "text",
					value: " "
				});
				let h = typeof n == "string" ? n : n(a, m);
				typeof h == "string" && (h = {
					type: "text",
					value: h
				}), y.push({
					type: "element",
					tagName: "a",
					properties: {
						href: "#" + t + "fnref-" + p + (m > 1 ? "-" + m : ""),
						dataFootnoteBackref: "",
						ariaLabel: typeof r == "string" ? r : r(a, m),
						className: ["data-footnote-backref"]
					},
					children: Array.isArray(h) ? h : [h]
				})
			}
			let C = c[c.length - 1];
			if (C && C.type === "element" && C.tagName === "p") {
				let h = C.children[C.children.length - 1];
				h && h.type === "text" ? h.value += " " : C.children.push({
					type: "text",
					value: " "
				}), C.children.push(...y)
			} else c.push(...y);
			let d = {
				type: "element",
				tagName: "li",
				properties: {
					id: t + "fn-" + p
				},
				children: e.wrap(c, !0)
			};
			e.patch(u, d), l.push(d)
		}
		if (l.length !== 0) return {
			type: "element",
			tagName: "section",
			properties: {
				dataFootnotes: !0,
				className: ["footnotes"]
			},
			children: [{
				type: "element",
				tagName: o,
				properties: {
					...Oi(s),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			}, {
				type: "text",
				value: `
`
			}, {
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(l, !0)
			}, {
				type: "text",
				value: `
`
			}]
		}
	}
	var bi = function(e) {
		if (e == null) return gA;
		if (typeof e == "function") return Qa(e);
		if (typeof e == "object") return Array.isArray(e) ? mA(e) : dA(e);
		if (typeof e == "string") return hA(e);
		throw new Error("Expected function, string, or object as test")
	};

	function mA(e) {
		let t = [],
			n = -1;
		for (; ++n < e.length;) t[n] = bi(e[n]);
		return Qa(r);

		function r(...i) {
			let o = -1;
			for (; ++o < t.length;)
				if (t[o].apply(this, i)) return !0;
			return !1
		}
	}

	function dA(e) {
		let t = e;
		return Qa(n);

		function n(r) {
			let i = r,
				o;
			for (o in e)
				if (i[o] !== t[o]) return !1;
			return !0
		}
	}

	function hA(e) {
		return Qa(t);

		function t(n) {
			return n && n.type === e
		}
	}

	function Qa(e) {
		return t;

		function t(n, r, i) {
			return !!(yA(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0))
		}
	}

	function gA() {
		return !0
	}

	function yA(e) {
		return e !== null && typeof e == "object" && "type" in e
	}
	var l0 = [],
		Om = !0,
		Xa = !1,
		bm = "skip";

	function Ds(e, t, n, r) {
		let i;
		typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
		let o = bi(i),
			s = r ? -1 : 1;
		l(e, void 0, [])();

		function l(a, u, c) {
			let f = a && typeof a == "object" ? a : {};
			if (typeof f.type == "string") {
				let m = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
				Object.defineProperty(p, "name", {
					value: "node (" + (a.type + (m ? "<" + m + ">" : "")) + ")"
				})
			}
			return p;

			function p() {
				let m = l0,
					y, v, C;
				if ((!t || o(a, u, c[c.length - 1] || void 0)) && (m = vA(n(a, c)), m[0] === Xa)) return m;
				if ("children" in a && a.children) {
					let d = a;
					if (d.children && m[0] !== bm)
						for (v = (r ? d.children.length : -1) + s, C = c.concat(d); v > -1 && v < d.children.length;) {
							let h = d.children[v];
							if (y = l(h, v, C)(), y[0] === Xa) return y;
							v = typeof y[1] == "number" ? y[1] : v + s
						}
				}
				return m
			}
		}
	}

	function vA(e) {
		return Array.isArray(e) ? e : typeof e == "number" ? [Om, e] : e == null ? l0 : [e]
	}

	function Rs(e, t, n, r) {
		let i, o, s;
		typeof t == "function" && typeof n != "function" ? (o = void 0, s = t, i = n) : (o = t, s = n, i = r), Ds(e, o, l, i);

		function l(a, u) {
			let c = u[u.length - 1],
				f = c ? c.children.indexOf(a) : void 0;
			return s(a, f, c)
		}
	}
	var _m = {}.hasOwnProperty,
		xA = {};

	function u0(e, t) {
		let n = t || xA,
			r = new Map,
			i = new Map,
			o = new Map,
			s = {
				...i0,
				...n.handlers
			},
			l = {
				all: u,
				applyData: SA,
				definitionById: r,
				footnoteById: i,
				footnoteCounts: o,
				footnoteOrder: [],
				handlers: s,
				one: a,
				options: n,
				patch: wA,
				wrap: CA
			};
		return Rs(e, function(c) {
			if (c.type === "definition" || c.type === "footnoteDefinition") {
				let f = c.type === "definition" ? r : i,
					p = String(c.identifier).toUpperCase();
				f.has(p) || f.set(p, c)
			}
		}), l;

		function a(c, f) {
			let p = c.type,
				m = l.handlers[p];
			if (_m.call(l.handlers, p) && m) return m(l, c, f);
			if (l.options.passThrough && l.options.passThrough.includes(p)) {
				if ("children" in c) {
					let {
						children: v,
						...C
					} = c, d = Oi(C);
					return d.children = l.all(c), d
				}
				return Oi(c)
			}
			return (l.options.unknownHandler || kA)(l, c, f)
		}

		function u(c) {
			let f = [];
			if ("children" in c) {
				let p = c.children,
					m = -1;
				for (; ++m < p.length;) {
					let y = l.one(p[m], c);
					if (y) {
						if (m && p[m - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = a0(y.value)), !Array.isArray(y) && y.type === "element")) {
							let v = y.children[0];
							v && v.type === "text" && (v.value = a0(v.value))
						}
						Array.isArray(y) ? f.push(...y) : f.push(y)
					}
				}
			}
			return f
		}
	}

	function wA(e, t) {
		e.position && (t.position = sm(e))
	}

	function SA(e, t) {
		let n = t;
		if (e && e.data) {
			let r = e.data.hName,
				i = e.data.hChildren,
				o = e.data.hProperties;
			if (typeof r == "string")
				if (n.type === "element") n.tagName = r;
				else {
					let s = "children" in n ? n.children : [n];
					n = {
						type: "element",
						tagName: r,
						properties: {},
						children: s
					}
				} n.type === "element" && o && Object.assign(n.properties, Oi(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
		}
		return n
	}

	function kA(e, t) {
		let n = t.data || {},
			r = "value" in t && !(_m.call(n, "hProperties") || _m.call(n, "hChildren")) ? {
				type: "text",
				value: t.value
			} : {
				type: "element",
				tagName: "div",
				properties: {},
				children: e.all(t)
			};
		return e.patch(t, r), e.applyData(t, r)
	}

	function CA(e, t) {
		let n = [],
			r = -1;
		for (t && n.push({
				type: "text",
				value: `
`
			}); ++r < e.length;) r && n.push({
			type: "text",
			value: `
`
		}), n.push(e[r]);
		return t && e.length > 0 && n.push({
			type: "text",
			value: `
`
		}), n
	}

	function a0(e) {
		let t = 0,
			n = e.charCodeAt(t);
		for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
		return e.slice(t)
	}

	function qa(e, t) {
		let n = u0(e, t),
			r = n.one(e, void 0),
			i = s0(n),
			o = Array.isArray(r) ? {
				type: "root",
				children: r
			} : r || {
				type: "root",
				children: []
			};
		return i && ("children" in o, o.children.push({
			type: "text",
			value: `
`
		}, i)), o
	}

	function Za(e, t) {
		return e && "run" in e ? async function(n, r) {
			let i = qa(n, {
				file: r,
				...t
			});
			await e.run(i, r)
		}: function(n, r) {
			return qa(n, {
				file: r,
				...e || t
			})
		}
	}

	function zm(e) {
		if (e) throw e
	}
	var tu = q(v0(), 1);

	function Ns(e) {
		if (typeof e != "object" || e === null) return !1;
		let t = Object.getPrototypeOf(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
	}

	function Fm() {
		let e = [],
			t = {
				run: n,
				use: r
			};
		return t;

		function n(...i) {
			let o = -1,
				s = i.pop();
			if (typeof s != "function") throw new TypeError("Expected function as last argument, not " + s);
			l(null, ...i);

			function l(a, ...u) {
				let c = e[++o],
					f = -1;
				if (a) {
					s(a);
					return
				}
				for (; ++f < i.length;)(u[f] === null || u[f] === void 0) && (u[f] = i[f]);
				i = u, c ? x0(c, l)(...u) : s(null, ...u)
			}
		}

		function r(i) {
			if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
			return e.push(i), t
		}
	}

	function x0(e, t) {
		let n;
		return r;

		function r(...s) {
			let l = e.length > s.length,
				a;
			l && s.push(i);
			try {
				a = e.apply(this, s)
			} catch (u) {
				let c = u;
				if (l && n) throw c;
				return i(c)
			}
			l || (a && a.then && typeof a.then == "function" ? a.then(o, i) : a instanceof Error ? i(a) : o(a))
		}

		function i(s, ...l) {
			n || (n = !0, t(s, ...l))
		}

		function o(s) {
			i(null, s)
		}
	}
	var $t = {
		basename: EA,
		dirname: PA,
		extname: TA,
		join: AA,
		sep: "/"
	};

	function EA(e, t) {
		if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
		Vs(e);
		let n = 0,
			r = -1,
			i = e.length,
			o;
		if (t === void 0 || t.length === 0 || t.length > e.length) {
			for (; i--;)
				if (e.codePointAt(i) === 47) {
					if (o) {
						n = i + 1;
						break
					}
				} else r < 0 && (o = !0, r = i + 1);
			return r < 0 ? "" : e.slice(n, r)
		}
		if (t === e) return "";
		let s = -1,
			l = t.length - 1;
		for (; i--;)
			if (e.codePointAt(i) === 47) {
				if (o) {
					n = i + 1;
					break
				}
			} else s < 0 && (o = !0, s = i + 1), l > -1 && (e.codePointAt(i) === t.codePointAt(l--) ? l < 0 && (r = i) : (l = -1, r = s));
		return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r)
	}

	function PA(e) {
		if (Vs(e), e.length === 0) return ".";
		let t = -1,
			n = e.length,
			r;
		for (; --n;)
			if (e.codePointAt(n) === 47) {
				if (r) {
					t = n;
					break
				}
			} else r || (r = !0);
		return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t)
	}

	function TA(e) {
		Vs(e);
		let t = e.length,
			n = -1,
			r = 0,
			i = -1,
			o = 0,
			s;
		for (; t--;) {
			let l = e.codePointAt(t);
			if (l === 47) {
				if (s) {
					r = t + 1;
					break
				}
				continue
			}
			n < 0 && (s = !0, n = t + 1), l === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1)
		}
		return i < 0 || n < 0 || o === 0 || o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
	}

	function AA(...e) {
		let t = -1,
			n;
		for (; ++t < e.length;) Vs(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
		return n === void 0 ? "." : IA(n)
	}

	function IA(e) {
		Vs(e);
		let t = e.codePointAt(0) === 47,
			n = LA(e, !t);
		return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
	}

	function LA(e, t) {
		let n = "",
			r = 0,
			i = -1,
			o = 0,
			s = -1,
			l, a;
		for (; ++s <= e.length;) {
			if (s < e.length) l = e.codePointAt(s);
			else {
				if (l === 47) break;
				l = 47
			}
			if (l === 47) {
				if (!(i === s - 1 || o === 1))
					if (i !== s - 1 && o === 2) {
						if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
							if (n.length > 2) {
								if (a = n.lastIndexOf("/"), a !== n.length - 1) {
									a < 0 ? (n = "", r = 0) : (n = n.slice(0, a), r = n.length - 1 - n.lastIndexOf("/")), i = s, o = 0;
									continue
								}
							} else if (n.length > 0) {
								n = "", r = 0, i = s, o = 0;
								continue
							}
						}
						t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
					} else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
				i = s, o = 0
			} else l === 46 && o > -1 ? o++ : o = -1
		}
		return n
	}

	function Vs(e) {
		if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
	}
	var w0 = {
		cwd: MA
	};

	function MA() {
		return "/"
	}

	function _i(e) {
		return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0)
	}

	function S0(e) {
		if (typeof e == "string") e = new URL(e);
		else if (!_i(e)) {
			let t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
			throw t.code = "ERR_INVALID_ARG_TYPE", t
		}
		if (e.protocol !== "file:") {
			let t = new TypeError("The URL must be of scheme file");
			throw t.code = "ERR_INVALID_URL_SCHEME", t
		}
		return DA(e)
	}

	function DA(e) {
		if (e.hostname !== "") {
			let r = new TypeError('File URL host must be "localhost" or empty on darwin');
			throw r.code = "ERR_INVALID_FILE_URL_HOST", r
		}
		let t = e.pathname,
			n = -1;
		for (; ++n < t.length;)
			if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
				let r = t.codePointAt(n + 2);
				if (r === 70 || r === 102) {
					let i = new TypeError("File URL path must not include encoded / characters");
					throw i.code = "ERR_INVALID_FILE_URL_PATH", i
				}
			} return decodeURIComponent(t)
	}
	var Bm = ["history", "path", "basename", "stem", "extname", "dirname"],
		jr = class {
			constructor(t) {
				let n;
				t ? _i(t) ? n = {
					path: t
				} : typeof t == "string" || RA(t) ? n = {
					value: t
				} : n = t : n = {}, this.cwd = "cwd" in n ? "" : w0.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
				let r = -1;
				for (; ++r < Bm.length;) {
					let o = Bm[r];
					o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o])
				}
				let i;
				for (i in n) Bm.includes(i) || (this[i] = n[i])
			}
			get basename() {
				return typeof this.path == "string" ? $t.basename(this.path) : void 0
			}
			set basename(t) {
				Um(t, "basename"), jm(t, "basename"), this.path = $t.join(this.dirname || "", t)
			}
			get dirname() {
				return typeof this.path == "string" ? $t.dirname(this.path) : void 0
			}
			set dirname(t) {
				k0(this.basename, "dirname"), this.path = $t.join(t || "", this.basename)
			}
			get extname() {
				return typeof this.path == "string" ? $t.extname(this.path) : void 0
			}
			set extname(t) {
				if (jm(t, "extname"), k0(this.dirname, "extname"), t) {
					if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
					if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
				}
				this.path = $t.join(this.dirname, this.stem + (t || ""))
			}
			get path() {
				return this.history[this.history.length - 1]
			}
			set path(t) {
				_i(t) && (t = S0(t)), Um(t, "path"), this.path !== t && this.history.push(t)
			}
			get stem() {
				return typeof this.path == "string" ? $t.basename(this.path, this.extname) : void 0
			}
			set stem(t) {
				Um(t, "stem"), jm(t, "stem"), this.path = $t.join(this.dirname || "", t + (this.extname || ""))
			}
			fail(t, n, r) {
				let i = this.message(t, n, r);
				throw i.fatal = !0, i
			}
			info(t, n, r) {
				let i = this.message(t, n, r);
				return i.fatal = void 0, i
			}
			message(t, n, r) {
				let i = new xe(t, n, r);
				return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
			}
			toString(t) {
				return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value)
			}
		};

	function jm(e, t) {
		if (e && e.includes($t.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + $t.sep + "`")
	}

	function Um(e, t) {
		if (!e) throw new Error("`" + t + "` cannot be empty")
	}

	function k0(e, t) {
		if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
	}

	function RA(e) {
		return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
	}
	var C0 = function(e) {
		let r = this.constructor.prototype,
			i = r[e],
			o = function() {
				return i.apply(o, arguments)
			};
		return Object.setPrototypeOf(o, r), o
	};
	var NA = {}.hasOwnProperty,
		Km = class e extends C0 {
			constructor() {
				super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Fm()
			}
			copy() {
				let t = new e,
					n = -1;
				for (; ++n < this.attachers.length;) {
					let r = this.attachers[n];
					t.use(...r)
				}
				return t.data((0, tu.default)(!0, {}, this.namespace)), t
			}
			data(t, n) {
				return typeof t == "string" ? arguments.length === 2 ? ($m("data", this.frozen), this.namespace[t] = n, this) : NA.call(this.namespace, t) && this.namespace[t] || void 0 : t ? ($m("data", this.frozen), this.namespace = t, this) : this.namespace
			}
			freeze() {
				if (this.frozen) return this;
				let t = this;
				for (; ++this.freezeIndex < this.attachers.length;) {
					let [n, ...r] = this.attachers[this.freezeIndex];
					if (r[0] === !1) continue;
					r[0] === !0 && (r[0] = void 0);
					let i = n.call(t, ...r);
					typeof i == "function" && this.transformers.use(i)
				}
				return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
			}
			parse(t) {
				this.freeze();
				let n = eu(t),
					r = this.parser || this.Parser;
				return Hm("parse", r), r(String(n), n)
			}
			process(t, n) {
				let r = this;
				return this.freeze(), Hm("process", this.parser || this.Parser), Wm("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);

				function i(o, s) {
					let l = eu(t),
						a = r.parse(l);
					r.run(a, l, function(c, f, p) {
						if (c || !f || !p) return u(c);
						let m = f,
							y = r.stringify(m, p);
						OA(y) ? p.value = y : p.result = y, u(c, p)
					});

					function u(c, f) {
						c || !f ? s(c) : o ? o(f) : n(void 0, f)
					}
				}
			}
			processSync(t) {
				let n = !1,
					r;
				return this.freeze(), Hm("processSync", this.parser || this.Parser), Wm("processSync", this.compiler || this.Compiler), this.process(t, i), P0("processSync", "process", n), r;

				function i(o, s) {
					n = !0, zm(o), r = s
				}
			}
			run(t, n, r) {
				E0(t), this.freeze();
				let i = this.transformers;
				return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);

				function o(s, l) {
					let a = eu(n);
					i.run(t, a, u);

					function u(c, f, p) {
						let m = f || t;
						c ? l(c) : s ? s(m) : r(void 0, m, p)
					}
				}
			}
			runSync(t, n) {
				let r = !1,
					i;
				return this.run(t, n, o), P0("runSync", "run", r), i;

				function o(s, l) {
					zm(s), i = l, r = !0
				}
			}
			stringify(t, n) {
				this.freeze();
				let r = eu(n),
					i = this.compiler || this.Compiler;
				return Wm("stringify", i), E0(t), i(t, r)
			}
			use(t, ...n) {
				let r = this.attachers,
					i = this.namespace;
				if ($m("use", this.frozen), t != null)
					if (typeof t == "function") a(t, n);
					else if (typeof t == "object") Array.isArray(t) ? l(t) : s(t);
				else throw new TypeError("Expected usable value, not `" + t + "`");
				return this;

				function o(u) {
					if (typeof u == "function") a(u, []);
					else if (typeof u == "object")
						if (Array.isArray(u)) {
							let [c, ...f] = u;
							a(c, f)
						} else s(u);
					else throw new TypeError("Expected usable value, not `" + u + "`")
				}

				function s(u) {
					if (!("plugins" in u) && !("settings" in u)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
					l(u.plugins), u.settings && (i.settings = (0, tu.default)(!0, i.settings, u.settings))
				}

				function l(u) {
					let c = -1;
					if (u != null)
						if (Array.isArray(u))
							for (; ++c < u.length;) {
								let f = u[c];
								o(f)
							} else throw new TypeError("Expected a list of plugins, not `" + u + "`")
				}

				function a(u, c) {
					let f = -1,
						p = -1;
					for (; ++f < r.length;)
						if (r[f][0] === u) {
							p = f;
							break
						} if (p === -1) r.push([u, ...c]);
					else if (c.length > 0) {
						let [m, ...y] = c, v = r[p][1];
						Ns(v) && Ns(m) && (m = (0, tu.default)(!0, v, m)), r[p] = [u, m, ...y]
					}
				}
			}
		},
		Gm = new Km().freeze();

	function Hm(e, t) {
		if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`")
	}

	function Wm(e, t) {
		if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`")
	}

	function $m(e, t) {
		if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
	}

	function E0(e) {
		if (!Ns(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
	}

	function P0(e, t, n) {
		if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
	}

	function eu(e) {
		return VA(e) ? e : new jr(e)
	}

	function VA(e) {
		return !!(e && typeof e == "object" && "message" in e && "messages" in e)
	}

	function OA(e) {
		return typeof e == "string" || bA(e)
	}

	function bA(e) {
		return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
	}
	var _A = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
		T0 = [],
		A0 = {
			allowDangerousHtml: !0
		},
		zA = /^(https?|ircs?|mailto|xmpp)$/i,
		FA = [{
			from: "astPlugins",
			id: "remove-buggy-html-in-markdown-parser"
		}, {
			from: "allowDangerousHtml",
			id: "remove-buggy-html-in-markdown-parser"
		}, {
			from: "allowNode",
			id: "replace-allownode-allowedtypes-and-disallowedtypes",
			to: "allowElement"
		}, {
			from: "allowedTypes",
			id: "replace-allownode-allowedtypes-and-disallowedtypes",
			to: "allowedElements"
		}, {
			from: "disallowedTypes",
			id: "replace-allownode-allowedtypes-and-disallowedtypes",
			to: "disallowedElements"
		}, {
			from: "escapeHtml",
			id: "remove-buggy-html-in-markdown-parser"
		}, {
			from: "includeElementIndex",
			id: "#remove-includeelementindex"
		}, {
			from: "includeNodeIndex",
			id: "change-includenodeindex-to-includeelementindex"
		}, {
			from: "linkTarget",
			id: "remove-linktarget"
		}, {
			from: "plugins",
			id: "change-plugins-to-remarkplugins",
			to: "remarkPlugins"
		}, {
			from: "rawSourcePos",
			id: "#remove-rawsourcepos"
		}, {
			from: "renderers",
			id: "change-renderers-to-components",
			to: "components"
		}, {
			from: "source",
			id: "change-source-to-children",
			to: "children"
		}, {
			from: "sourcePos",
			id: "#remove-sourcepos"
		}, {
			from: "transformImageUri",
			id: "#add-urltransform",
			to: "urlTransform"
		}, {
			from: "transformLinkUri",
			id: "#add-urltransform",
			to: "urlTransform"
		}];

	function Ym(e) {
		let t = e.allowedElements,
			n = e.allowElement,
			r = e.children || "",
			i = e.className,
			o = e.components,
			s = e.disallowedElements,
			l = e.rehypePlugins || T0,
			a = e.remarkPlugins || T0,
			u = e.remarkRehypeOptions ? {
				...e.remarkRehypeOptions,
				...A0
			} : A0,
			c = e.skipHtml,
			f = e.unwrapDisallowed,
			p = e.urlTransform || I0,
			m = Gm().use(ja).use(a).use(Za, u).use(l),
			y = new jr;
		typeof r == "string" ? y.value = r : ("" + r, void 0), t && s && void 0;
		for (let h of FA) Object.hasOwn(e, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + _A + h.id, void 0);
		let v = m.parse(y),
			C = m.runSync(v, y);
		return i && (C = {
			type: "element",
			tagName: "div",
			properties: {
				className: i
			},
			children: C.type === "root" ? C.children : [C]
		}), Rs(C, d), um(C, {
			Fragment: zi.Fragment,
			components: o,
			ignoreInvalidStyle: !0,
			jsx: zi.jsx,
			jsxs: zi.jsxs,
			passKeys: !0,
			passNode: !0
		});

		function d(h, g, k) {
			if (h.type === "raw" && k && typeof g == "number") return c ? k.children.splice(g, 1) : k.children[g] = {
				type: "text",
				value: h.value
			}, g;
			if (h.type === "element") {
				let E;
				for (E in ws)
					if (Object.hasOwn(ws, E) && Object.hasOwn(h.properties, E)) {
						let x = h.properties[E],
							T = ws[E];
						(T === null || T.includes(h.tagName)) && (h.properties[E] = p(String(x || ""), E, h))
					}
			}
			if (h.type === "element") {
				let E = t ? !t.includes(h.tagName) : s ? s.includes(h.tagName) : !1;
				if (!E && n && typeof g == "number" && (E = !n(h, g, k)), E && k && typeof g == "number") return f && h.children ? k.children.splice(g, 1, ...h.children) : k.children.splice(g, 1), g
			}
		}
	}

	function I0(e) {
		let t = e.indexOf(":"),
			n = e.indexOf("?"),
			r = e.indexOf("#"),
			i = e.indexOf("/");
		return t < 0 || i > -1 && t > i || n > -1 && t > n || r > -1 && t > r || zA.test(e.slice(0, t)) ? e : ""
	}
	var Zm = q(F0());

	function Qm(e) {
		if (typeof e != "string") throw new TypeError("Expected a string");
		return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
	}

	function Xm(e, t, n) {
		let i = bi((n || {}).ignore || []),
			o = n2(t),
			s = -1;
		for (; ++s < o.length;) Ds(e, "text", l);

		function l(u, c) {
			let f = -1,
				p;
			for (; ++f < c.length;) {
				let m = c[f],
					y = p ? p.children : void 0;
				if (i(m, y ? y.indexOf(m) : void 0, p)) return;
				p = m
			}
			if (p) return a(u, c)
		}

		function a(u, c) {
			let f = c[c.length - 1],
				p = o[s][0],
				m = o[s][1],
				y = 0,
				C = f.children.indexOf(u),
				d = !1,
				h = [];
			p.lastIndex = 0;
			let g = p.exec(u.value);
			for (; g;) {
				let k = g.index,
					E = {
						index: g.index,
						input: g.input,
						stack: [...c, u]
					},
					x = m(...g, E);
				if (typeof x == "string" && (x = x.length > 0 ? {
						type: "text",
						value: x
					} : void 0), x === !1 ? p.lastIndex = k + 1 : (y !== k && h.push({
						type: "text",
						value: u.value.slice(y, k)
					}), Array.isArray(x) ? h.push(...x) : x && h.push(x), y = k + g[0].length, d = !0), !p.global) break;
				g = p.exec(u.value)
			}
			return d ? (y < u.value.length && h.push({
				type: "text",
				value: u.value.slice(y)
			}), f.children.splice(C, 1, ...h)) : h = [u], C + h.length
		}
	}

	function n2(e) {
		let t = [];
		if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
		let n = !e[0] || Array.isArray(e[0]) ? e : [e],
			r = -1;
		for (; ++r < n.length;) {
			let i = n[r];
			t.push([r2(i[0]), i2(i[1])])
		}
		return t
	}

	function r2(e) {
		return typeof e == "string" ? new RegExp(Qm(e), "g") : e
	}

	function i2(e) {
		return typeof e == "function" ? e : function() {
			return e
		}
	}

	function qm(e) {
		Xm(e, [/\r?\n|\r/g, o2])
	}

	function o2() {
		return {
			type: "break"
		}
	}

	function iu() {
		return function(e) {
			qm(e)
		}
	}
	var s2 = /(?:[a-z][\w\-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'\".,<>?Â«Â»â€œâ€â€˜â€™])/i,
		B0 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

	function l2(e) {
		for (var t = ["http://", "https://"], n = e, r = 0, i = t; r < i.length; r++) {
			var o = i[r];
			n.toLowerCase().startsWith(o) && (n = e.substring(o.length))
		}
		return n.startsWith("www.") && (n = n.substring(4)), n
	}

	function a2(e) {
		var t = l2(e);
		if (t.length <= 23) return t;
		var n = t.indexOf("/"),
			r = Math.max(23, n + 16);
		return t.length > r ? t.substring(0, r - 1) + "\u2026" : t
	}
	var u2 = [(0, Zm.default)(s2), (0, Zm.default)(B0), iu],
		c2 = (0, bs.memo)(function(e) {
			var t = e.href,
				n = e.children,
				r = typeof t == "string" && B0.test(t),
				i = r ? "mailto:" + t : t;
			return bs.default.createElement("a", {
				href: i,
				target: "_blank"
			}, typeof n == "string" && n.startsWith("http") ? a2(n) : n)
		}),
		f2 = {
			a: c2
		},
		ou = function(t) {
			var n = t.text;
			return bs.default.createElement(Ym, {
				components: f2,
				remarkPlugins: u2
			}, n)
		};
	var gu = q(Di(), 1),
		Wi = q(se(), 1);
	var j0 = q(se(), 1),
		Fi = (0, j0.createContext)({
			transformPagePoint: e => e,
			isStatic: !1,
			reducedMotion: "never"
		});
	var U0 = q(se(), 1),
		tr = (0, U0.createContext)({});
	var kt = q(se(), 1);
	var H0 = q(se(), 1),
		Bi = (0, H0.createContext)(null);
	var su = q(se(), 1);
	var ji = typeof window < "u";
	var W0 = ji ? su.useLayoutEffect : su.useEffect;
	var $0 = q(se(), 1),
		lu = (0, $0.createContext)({
			strict: !1
		});
	var nr = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
	var p2 = "framerAppearId",
		au = "data-" + nr(p2);
	var Ui = {
		skipAnimations: !1,
		useManualTiming: !1
	};

	function K0(e) {
		let t = new Set,
			n = new Set,
			r = !1,
			i = !1,
			o = new WeakSet,
			s = {
				delta: 0,
				timestamp: 0,
				isProcessing: !1
			};

		function l(u) {
			o.has(u) && (a.schedule(u), e()), u(s)
		}
		let a = {
			schedule: (u, c = !1, f = !1) => {
				let m = f && r ? t : n;
				return c && o.add(u), m.has(u) || m.add(u), u
			},
			cancel: u => {
				n.delete(u), o.delete(u)
			},
			process: u => {
				if (s = u, r) {
					i = !0;
					return
				}
				r = !0, [t, n] = [n, t], n.clear(), t.forEach(l), r = !1, i && (i = !1, a.process(u))
			}
		};
		return a
	}
	var uu = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
		m2 = 40;

	function cu(e, t) {
		let n = !1,
			r = !0,
			i = {
				delta: 0,
				timestamp: 0,
				isProcessing: !1
			},
			o = () => n = !0,
			s = uu.reduce((d, h) => (d[h] = K0(o), d), {}),
			{
				read: l,
				resolveKeyframes: a,
				update: u,
				preRender: c,
				render: f,
				postRender: p
			} = s,
			m = () => {
				let d = Ui.useManualTiming ? i.timestamp : performance.now();
				n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, m2), 1), i.timestamp = d, i.isProcessing = !0, l.process(i), a.process(i), u.process(i), c.process(i), f.process(i), p.process(i), i.isProcessing = !1, n && t && (r = !1, e(m))
			},
			y = () => {
				n = !0, r = !0, i.isProcessing || e(m)
			};
		return {
			schedule: uu.reduce((d, h) => {
				let g = s[h];
				return d[h] = (k, E = !1, x = !1) => (n || y(), g.schedule(k, E, x)), d
			}, {}),
			cancel: d => {
				for (let h = 0; h < uu.length; h++) s[uu[h]].cancel(d)
			},
			state: i,
			steps: s
		}
	}
	var {
		schedule: Hi,
		cancel: iz
	} = cu(queueMicrotask, !1);

	function Sn(e) {
		return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
	}
	var G0 = q(se(), 1),
		fu = (0, G0.createContext)({});
	var Y0 = !1;

	function Q0(e, t, n, r, i) {
		var o;
		let {
			visualElement: s
		} = (0, kt.useContext)(tr), l = (0, kt.useContext)(lu), a = (0, kt.useContext)(Bi), u = (0, kt.useContext)(Fi).reducedMotion, c = (0, kt.useRef)();
		r = r || l.renderer, !c.current && r && (c.current = r(e, {
			visualState: t,
			parent: s,
			props: n,
			presenceContext: a,
			blockInitialAnimation: a ? a.initial === !1 : !1,
			reducedMotionConfig: u
		}));
		let f = c.current,
			p = (0, kt.useContext)(fu);
		f && !f.projection && i && (f.type === "html" || f.type === "svg") && h2(c.current, n, i, p), (0, kt.useInsertionEffect)(() => {
			f && f.update(n, a)
		});
		let m = n[au],
			y = (0, kt.useRef)(!!m && !window.MotionHandoffIsComplete && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, m)));
		return W0(() => {
			f && (f.updateFeatures(), Hi.render(f.render), y.current && f.animationState && f.animationState.animateChanges())
		}), (0, kt.useEffect)(() => {
			f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current = !1, Y0 || (Y0 = !0, queueMicrotask(d2)))
		}), f
	}

	function d2() {
		window.MotionHandoffIsComplete = !0
	}

	function h2(e, t, n, r) {
		let {
			layoutId: i,
			layout: o,
			drag: s,
			dragConstraints: l,
			layoutScroll: a,
			layoutRoot: u
		} = t;
		e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : X0(e.parent)), e.projection.setOptions({
			layoutId: i,
			layout: o,
			alwaysMeasureLayout: !!s || l && Sn(l),
			visualElement: e,
			animationType: typeof o == "string" ? o : "both",
			initialPromotionConfig: r,
			layoutScroll: a,
			layoutRoot: u
		})
	}

	function X0(e) {
		if (e) return e.options.allowProjection !== !1 ? e.projection : X0(e.parent)
	}
	var q0 = q(se(), 1);

	function Z0(e, t, n) {
		return (0, q0.useCallback)(r => {
			r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Sn(n) && (n.current = r))
		}, [t])
	}
	var du = q(se(), 1);

	function kn(e) {
		return typeof e == "string" || Array.isArray(e)
	}

	function Cn(e) {
		return e !== null && typeof e == "object" && typeof e.start == "function"
	}
	var pu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
		_s = ["initial", ...pu];

	function Ur(e) {
		return Cn(e.animate) || _s.some(t => kn(e[t]))
	}

	function mu(e) {
		return !!(Ur(e) || e.variants)
	}

	function J0(e, t) {
		if (Ur(e)) {
			let {
				initial: n,
				animate: r
			} = e;
			return {
				initial: n === !1 || kn(n) ? n : void 0,
				animate: kn(r) ? r : void 0
			}
		}
		return e.inherit !== !1 ? t : {}
	}

	function t1(e) {
		let {
			initial: t,
			animate: n
		} = J0(e, (0, du.useContext)(tr));
		return (0, du.useMemo)(() => ({
			initial: t,
			animate: n
		}), [e1(t), e1(n)])
	}

	function e1(e) {
		return Array.isArray(e) ? e.join(" ") : e
	}
	var n1 = {
			animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
			exit: ["exit"],
			drag: ["drag", "dragControls"],
			focus: ["whileFocus"],
			hover: ["whileHover", "onHoverStart", "onHoverEnd"],
			tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
			pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
			inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
			layout: ["layout", "layoutId"]
		},
		En = {};
	for (let e in n1) En[e] = {
		isEnabled: t => n1[e].some(n => !!t[n])
	};

	function r1(e) {
		for (let t in e) En[t] = {
			...En[t],
			...e[t]
		}
	}
	var i1 = q(se(), 1),
		hu = (0, i1.createContext)({});
	var o1 = Symbol.for("motionComponentSymbol");
	var te = e => e;
	var rr = te,
		Pn = te;

	function s1({
		preloadedFeatures: e,
		createVisualElement: t,
		useRender: n,
		useVisualState: r,
		Component: i
	}) {
		e && r1(e);

		function o(l, a) {
			let u, c = {
					...(0, Wi.useContext)(Fi),
					...l,
					layoutId: g2(l)
				},
				{
					isStatic: f
				} = c,
				p = t1(l),
				m = r(l, f);
			if (!f && ji) {
				y2(c, e);
				let y = v2(c);
				u = y.MeasureLayout, p.visualElement = Q0(i, m, c, t, y.ProjectionNode)
			}
			return (0, gu.jsxs)(tr.Provider, {
				value: p,
				children: [u && p.visualElement ? (0, gu.jsx)(u, {
					visualElement: p.visualElement,
					...c
				}) : null, n(i, l, Z0(m, p.visualElement, a), m, f, p.visualElement)]
			})
		}
		let s = (0, Wi.forwardRef)(o);
		return s[o1] = i, s
	}

	function g2({
		layoutId: e
	}) {
		let t = (0, Wi.useContext)(hu).id;
		return t && e !== void 0 ? t + "-" + e : e
	}

	function y2(e, t) {
		let n = (0, Wi.useContext)(lu).strict
	}

	function v2(e) {
		let {
			drag: t,
			layout: n
		} = En;
		if (!t && !n) return {};
		let r = {
			...t,
			...n
		};
		return {
			MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
			ProjectionNode: r.ProjectionNode
		}
	}

	function l1(e) {
		function t(r, i = {}) {
			return s1(e(r, i))
		}
		if (typeof Proxy > "u") return t;
		let n = new Map;
		return new Proxy(t, {
			get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
		})
	}
	var a1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

	function $i(e) {
		return typeof e != "string" || e.includes("-") ? !1 : !!(a1.indexOf(e) > -1 || /[A-Z]/u.test(e))
	}
	var eo = q(se(), 1);
	var y1 = q(se(), 1);
	var Ki = {};

	function u1(e) {
		Object.assign(Ki, e)
	}
	var ir = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
		He = new Set(ir);

	function yu(e, {
		layout: t,
		layoutId: n
	}) {
		return He.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ki[e] || e === "opacity")
	}
	var oe = e => !!(e && e.getVelocity);
	var vu = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
	var Je = (e, t, n) => n > t ? t : n < e ? e : n;
	var tn = {
			test: e => typeof e == "number",
			parse: parseFloat,
			transform: e => e
		},
		or = {
			...tn,
			transform: e => Je(0, 1, e)
		},
		zs = {
			...tn,
			default: 1
		};
	var sr = e => Math.round(e * 1e5) / 1e5,
		Gi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
		c1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
		f1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

	function Tn(e) {
		return typeof e == "string"
	}

	function p1(e) {
		return e == null
	}
	var Fs = e => ({
			test: t => Tn(t) && t.endsWith(e) && t.split(" ").length === 1,
			parse: parseFloat,
			transform: t => `${t}${e}`
		}),
		nn = Fs("deg"),
		et = Fs("%"),
		_ = Fs("px"),
		m1 = Fs("vh"),
		d1 = Fs("vw"),
		Jm = {
			...et,
			parse: e => et.parse(e) / 100,
			transform: e => et.transform(e * 100)
		};
	var ed = {
		...tn,
		transform: Math.round
	};
	var Yi = {
		borderWidth: _,
		borderTopWidth: _,
		borderRightWidth: _,
		borderBottomWidth: _,
		borderLeftWidth: _,
		borderRadius: _,
		radius: _,
		borderTopLeftRadius: _,
		borderTopRightRadius: _,
		borderBottomRightRadius: _,
		borderBottomLeftRadius: _,
		width: _,
		maxWidth: _,
		height: _,
		maxHeight: _,
		size: _,
		top: _,
		right: _,
		bottom: _,
		left: _,
		padding: _,
		paddingTop: _,
		paddingRight: _,
		paddingBottom: _,
		paddingLeft: _,
		margin: _,
		marginTop: _,
		marginRight: _,
		marginBottom: _,
		marginLeft: _,
		rotate: nn,
		rotateX: nn,
		rotateY: nn,
		rotateZ: nn,
		scale: zs,
		scaleX: zs,
		scaleY: zs,
		scaleZ: zs,
		skew: nn,
		skewX: nn,
		skewY: nn,
		distance: _,
		translateX: _,
		translateY: _,
		translateZ: _,
		x: _,
		y: _,
		z: _,
		perspective: _,
		transformPerspective: _,
		opacity: or,
		originX: Jm,
		originY: Jm,
		originZ: _,
		zIndex: ed,
		backgroundPositionX: _,
		backgroundPositionY: _,
		fillOpacity: or,
		strokeOpacity: or,
		numOctaves: ed
	};
	var x2 = {
			x: "translateX",
			y: "translateY",
			z: "translateZ",
			transformPerspective: "perspective"
		},
		w2 = ir.length;

	function h1(e, t, n) {
		let r = "",
			i = !0;
		for (let o = 0; o < w2; o++) {
			let s = ir[o],
				l = e[s];
			if (l === void 0) continue;
			let a = !0;
			if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
				let u = vu(l, Yi[s]);
				if (!a) {
					i = !1;
					let c = x2[s] || s;
					r += `${c}(${u}) `
				}
				n && (t[s] = u)
			}
		}
		return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
	}
	var g1 = e => t => typeof t == "string" && t.startsWith(e),
		xu = g1("--"),
		S2 = g1("var(--"),
		Qi = e => S2(e) ? k2.test(e.split("/*")[0].trim()) : !1,
		k2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

	function Xi(e, t, n) {
		let {
			style: r,
			vars: i,
			transformOrigin: o
		} = e, s = !1, l = !1;
		for (let a in t) {
			let u = t[a];
			if (He.has(a)) {
				s = !0;
				continue
			} else if (xu(a)) {
				i[a] = u;
				continue
			} else {
				let c = vu(u, Yi[a]);
				a.startsWith("origin") ? (l = !0, o[a] = c) : r[a] = c
			}
		}
		if (t.transform || (s || n ? r.transform = h1(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
			let {
				originX: a = "50%",
				originY: u = "50%",
				originZ: c = 0
			} = o;
			r.transformOrigin = `${a} ${u} ${c}`
		}
	}
	var qi = () => ({
		style: {},
		transform: {},
		transformOrigin: {},
		vars: {}
	});

	function td(e, t, n) {
		for (let r in t) !oe(t[r]) && !yu(r, n) && (e[r] = t[r])
	}

	function C2({
		transformTemplate: e
	}, t) {
		return (0, y1.useMemo)(() => {
			let n = qi();
			return Xi(n, t, e), Object.assign({}, n.vars, n.style)
		}, [t])
	}

	function E2(e, t) {
		let n = e.style || {},
			r = {};
		return td(r, n, e), Object.assign(r, C2(e, t)), r
	}

	function v1(e, t) {
		let n = {},
			r = E2(e, t);
		return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
	}
	var P2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

	function Bs(e) {
		return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || P2.has(e)
	}
	var x1 = e => !Bs(e);

	function T2(e) {
		e && (x1 = t => t.startsWith("on") ? !Bs(t) : e(t))
	}
	try {
		T2(vk("@emotion/is-prop-valid").default)
	} catch {}

	function w1(e, t, n) {
		let r = {};
		for (let i in e) i === "values" && typeof e.values == "object" || (x1(i) || n === !0 && Bs(i) || !t && !Bs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
		return r
	}
	var E1 = q(se(), 1);

	function S1(e, t, n) {
		return typeof e == "string" ? e : _.transform(t + n * e)
	}

	function k1(e, t, n) {
		let r = S1(t, e.x, e.width),
			i = S1(n, e.y, e.height);
		return `${r} ${i}`
	}
	var A2 = {
			offset: "stroke-dashoffset",
			array: "stroke-dasharray"
		},
		I2 = {
			offset: "strokeDashoffset",
			array: "strokeDasharray"
		};

	function C1(e, t, n = 1, r = 0, i = !0) {
		e.pathLength = 1;
		let o = i ? A2 : I2;
		e[o.offset] = _.transform(-r);
		let s = _.transform(t),
			l = _.transform(n);
		e[o.array] = `${s} ${l}`
	}

	function Zi(e, {
		attrX: t,
		attrY: n,
		attrScale: r,
		originX: i,
		originY: o,
		pathLength: s,
		pathSpacing: l = 1,
		pathOffset: a = 0,
		...u
	}, c, f) {
		if (Xi(e, u, f), c) {
			e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
			return
		}
		e.attrs = e.style, e.style = {};
		let {
			attrs: p,
			style: m,
			dimensions: y
		} = e;
		p.transform && (y && (m.transform = p.transform), delete p.transform), y && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = k1(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), s !== void 0 && C1(p, s, l, a, !1)
	}
	var wu = () => ({
		...qi(),
		attrs: {}
	});
	var Ji = e => typeof e == "string" && e.toLowerCase() === "svg";

	function P1(e, t, n, r) {
		let i = (0, E1.useMemo)(() => {
			let o = wu();
			return Zi(o, t, Ji(r), e.transformTemplate), {
				...o.attrs,
				style: {
					...o.style
				}
			}
		}, [t]);
		if (e.style) {
			let o = {};
			td(o, e.style, e), i.style = {
				...o,
				...i.style
			}
		}
		return i
	}

	function T1(e = !1) {
		return (n, r, i, {
			latestValues: o
		}, s) => {
			let a = ($i(n) ? P1 : v1)(r, o, s, n),
				u = w1(r, typeof n == "string", e),
				c = n !== eo.Fragment ? {
					...u,
					...a,
					ref: i
				} : {},
				{
					children: f
				} = r,
				p = (0, eo.useMemo)(() => oe(f) ? f.get() : f, [f]);
			return (0, eo.createElement)(n, {
				...c,
				children: p
			})
		}
	}

	function Su(e, {
		style: t,
		vars: n
	}, r, i) {
		Object.assign(e.style, t, i && i.getProjectionStyles(r));
		for (let o in n) e.style.setProperty(o, n[o])
	}
	var ku = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

	function Cu(e, t, n, r) {
		Su(e, t, void 0, r);
		for (let i in t.attrs) e.setAttribute(ku.has(i) ? i : nr(i), t.attrs[i])
	}

	function to(e, t, n) {
		var r;
		let {
			style: i
		} = e, o = {};
		for (let s in i)(oe(i[s]) || t.style && oe(t.style[s]) || yu(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
		return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
	}

	function Eu(e, t, n) {
		let r = to(e, t, n);
		for (let i in e)
			if (oe(e[i]) || oe(t[i])) {
				let o = ir.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
				r[o] = e[i]
			} return r
	}
	var nd = q(se(), 1);

	function A1(e) {
		let t = [{}, {}];
		return e?.values.forEach((n, r) => {
			t[0][r] = n.get(), t[1][r] = n.getVelocity()
		}), t
	}

	function no(e, t, n, r) {
		if (typeof t == "function") {
			let [i, o] = A1(r);
			t = t(n !== void 0 ? n : e.custom, i, o)
		}
		if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
			let [i, o] = A1(r);
			t = t(n !== void 0 ? n : e.custom, i, o)
		}
		return t
	}
	var I1 = q(se(), 1);

	function ro(e) {
		let t = (0, I1.useRef)(null);
		return t.current === null && (t.current = e()), t.current
	}
	var js = e => Array.isArray(e);
	var L1 = e => !!(e && typeof e == "object" && e.mix && e.toValue),
		M1 = e => js(e) ? e[e.length - 1] || 0 : e;

	function io(e) {
		let t = oe(e) ? e.get() : e;
		return L1(t) ? t.toValue() : t
	}
	var Pu = new Set(["opacity", "clipPath", "filter", "transform"]);

	function Tu(e) {
		if (He.has(e)) return "transform";
		if (Pu.has(e)) return nr(e)
	}

	function lr(e, t) {
		e.indexOf(t) === -1 && e.push(t)
	}

	function ar(e, t) {
		let n = e.indexOf(t);
		n > -1 && e.splice(n, 1)
	}

	function L2({
		applyWillChange: e = !1,
		scrapeMotionValuesFromProps: t,
		createRenderState: n,
		onMount: r
	}, i, o, s, l) {
		let a = {
			latestValues: D2(i, o, s, l ? !1 : e, t),
			renderState: n()
		};
		return r && (a.mount = u => r(i, u, a)), a
	}
	var Au = e => (t, n) => {
		let r = (0, nd.useContext)(tr),
			i = (0, nd.useContext)(Bi),
			o = () => L2(e, t, r, i, n);
		return n ? o() : ro(o)
	};

	function M2(e, t) {
		let n = Tu(t);
		n && lr(e, n)
	}

	function D1(e, t, n) {
		let r = Array.isArray(t) ? t : [t];
		for (let i = 0; i < r.length; i++) {
			let o = no(e, r[i]);
			if (o) {
				let {
					transitionEnd: s,
					transition: l,
					...a
				} = o;
				n(a, s)
			}
		}
	}

	function D2(e, t, n, r, i) {
		var o;
		let s = {},
			l = [],
			a = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0,
			u = i(e, {});
		for (let C in u) s[C] = io(u[C]);
		let {
			initial: c,
			animate: f
		} = e, p = Ur(e), m = mu(e);
		t && m && !p && e.inherit !== !1 && (c === void 0 && (c = t.initial), f === void 0 && (f = t.animate));
		let y = n ? n.initial === !1 : !1;
		y = y || c === !1;
		let v = y ? f : c;
		return v && typeof v != "boolean" && !Cn(v) && D1(e, v, (C, d) => {
			for (let h in C) {
				let g = C[h];
				if (Array.isArray(g)) {
					let k = y ? g.length - 1 : 0;
					g = g[k]
				}
				g !== null && (s[h] = g)
			}
			for (let h in d) s[h] = d[h]
		}), a && (f && c !== !1 && !Cn(f) && D1(e, f, C => {
			for (let d in C) M2(l, d)
		}), l.length && (s.willChange = l.join(","))), s
	}
	var {
		schedule: j,
		cancel: tt,
		state: Se,
		steps: Iu
	} = cu(typeof requestAnimationFrame < "u" ? requestAnimationFrame : te, !0);
	var R1 = {
		useVisualState: Au({
			scrapeMotionValuesFromProps: Eu,
			createRenderState: wu,
			onMount: (e, t, {
				renderState: n,
				latestValues: r
			}) => {
				j.read(() => {
					try {
						n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
					} catch {
						n.dimensions = {
							x: 0,
							y: 0,
							width: 0,
							height: 0
						}
					}
				}), j.render(() => {
					Zi(n, r, Ji(t.tagName), e.transformTemplate), Cu(t, n)
				})
			}
		})
	};
	var N1 = {
		useVisualState: Au({
			applyWillChange: !0,
			scrapeMotionValuesFromProps: to,
			createRenderState: qi
		})
	};

	function V1(e, {
		forwardMotionProps: t = !1
	}, n, r) {
		return {
			...$i(e) ? R1 : N1,
			preloadedFeatures: n,
			useRender: T1(t),
			createVisualElement: r,
			Component: e
		}
	}

	function ut(e, t, n, r = {
		passive: !0
	}) {
		return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
	}
	var Lu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

	function Hr(e, t = "page") {
		return {
			point: {
				x: e[`${t}X`],
				y: e[`${t}Y`]
			}
		}
	}
	var O1 = e => t => Lu(t) && e(t, Hr(t));

	function ct(e, t, n, r) {
		return ut(e, t, O1(n), r)
	}
	var R2 = (e, t) => n => t(e(n)),
		We = (...e) => e.reduce(R2);

	function z1(e) {
		let t = null;
		return () => {
			let n = () => {
				t = null
			};
			return t === null ? (t = e, n) : !1
		}
	}
	var b1 = z1("dragHorizontal"),
		_1 = z1("dragVertical");

	function rd(e) {
		let t = !1;
		if (e === "y") t = _1();
		else if (e === "x") t = b1();
		else {
			let n = b1(),
				r = _1();
			n && r ? t = () => {
				n(), r()
			} : (n && n(), r && r())
		}
		return t
	}

	function Mu() {
		let e = rd(!0);
		return e ? (e(), !1) : !0
	}
	var Le = class {
		constructor(t) {
			this.isMounted = !1, this.node = t
		}
		update() {}
	};

	function F1(e, t) {
		let n = t ? "pointerenter" : "pointerleave",
			r = t ? "onHoverStart" : "onHoverEnd",
			i = (o, s) => {
				if (o.pointerType === "touch" || Mu()) return;
				let l = e.getProps();
				e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
				let a = l[r];
				a && j.postRender(() => a(o, s))
			};
		return ct(e.current, n, i, {
			passive: !e.getProps()[r]
		})
	}
	var Du = class extends Le {
		mount() {
			this.unmount = We(F1(this.node, !0), F1(this.node, !1))
		}
		unmount() {}
	};
	var Ru = class extends Le {
		constructor() {
			super(...arguments), this.isActive = !1
		}
		onFocus() {
			let t = !1;
			try {
				t = this.node.current.matches(":focus-visible")
			} catch {
				t = !0
			}!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
		}
		onBlur() {
			!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
		}
		mount() {
			this.unmount = We(ut(this.node.current, "focus", () => this.onFocus()), ut(this.node.current, "blur", () => this.onBlur()))
		}
		unmount() {}
	};
	var id = (e, t) => t ? e === t ? !0 : id(e, t.parentElement) : !1;

	function od(e, t) {
		if (!t) return;
		let n = new PointerEvent("pointer" + e);
		t(n, Hr(n))
	}
	var Nu = class extends Le {
		constructor() {
			super(...arguments), this.removeStartListeners = te, this.removeEndListeners = te, this.removeAccessibleListeners = te, this.startPointerPress = (t, n) => {
				if (this.isPressing) return;
				this.removeEndListeners();
				let r = this.node.getProps(),
					o = ct(window, "pointerup", (l, a) => {
						if (!this.checkPressEnd()) return;
						let {
							onTap: u,
							onTapCancel: c,
							globalTapTarget: f
						} = this.node.getProps(), p = !f && !id(this.node.current, l.target) ? c : u;
						p && j.update(() => p(l, a))
					}, {
						passive: !(r.onTap || r.onPointerUp)
					}),
					s = ct(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
						passive: !(r.onTapCancel || r.onPointerCancel)
					});
				this.removeEndListeners = We(o, s), this.startPress(t, n)
			}, this.startAccessiblePress = () => {
				let t = o => {
						if (o.key !== "Enter" || this.isPressing) return;
						let s = l => {
							l.key !== "Enter" || !this.checkPressEnd() || od("up", (a, u) => {
								let {
									onTap: c
								} = this.node.getProps();
								c && j.postRender(() => c(a, u))
							})
						};
						this.removeEndListeners(), this.removeEndListeners = ut(this.node.current, "keyup", s), od("down", (l, a) => {
							this.startPress(l, a)
						})
					},
					n = ut(this.node.current, "keydown", t),
					r = () => {
						this.isPressing && od("cancel", (o, s) => this.cancelPress(o, s))
					},
					i = ut(this.node.current, "blur", r);
				this.removeAccessibleListeners = We(n, i)
			}
		}
		startPress(t, n) {
			this.isPressing = !0;
			let {
				onTapStart: r,
				whileTap: i
			} = this.node.getProps();
			i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && j.postRender(() => r(t, n))
		}
		checkPressEnd() {
			return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Mu()
		}
		cancelPress(t, n) {
			if (!this.checkPressEnd()) return;
			let {
				onTapCancel: r
			} = this.node.getProps();
			r && j.postRender(() => r(t, n))
		}
		mount() {
			let t = this.node.getProps(),
				n = ct(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
					passive: !(t.onTapStart || t.onPointerStart)
				}),
				r = ut(this.node.current, "focus", this.startAccessiblePress);
			this.removeStartListeners = We(n, r)
		}
		unmount() {
			this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
		}
	};
	var ld = new WeakMap,
		sd = new WeakMap,
		N2 = e => {
			let t = ld.get(e.target);
			t && t(e)
		},
		V2 = e => {
			e.forEach(N2)
		};

	function O2({
		root: e,
		...t
	}) {
		let n = e || document;
		sd.has(n) || sd.set(n, {});
		let r = sd.get(n),
			i = JSON.stringify(t);
		return r[i] || (r[i] = new IntersectionObserver(V2, {
			root: e,
			...t
		})), r[i]
	}

	function B1(e, t, n) {
		let r = O2(t);
		return ld.set(e, n), r.observe(e), () => {
			ld.delete(e), r.unobserve(e)
		}
	}
	var b2 = {
			some: 0,
			all: 1
		},
		Vu = class extends Le {
			constructor() {
				super(...arguments), this.hasEnteredView = !1, this.isInView = !1
			}
			startObserver() {
				this.unmount();
				let {
					viewport: t = {}
				} = this.node.getProps(), {
					root: n,
					margin: r,
					amount: i = "some",
					once: o
				} = t, s = {
					root: n ? n.current : void 0,
					rootMargin: r,
					threshold: typeof i == "number" ? i : b2[i]
				}, l = a => {
					let {
						isIntersecting: u
					} = a;
					if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
					u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
					let {
						onViewportEnter: c,
						onViewportLeave: f
					} = this.node.getProps(), p = u ? c : f;
					p && p(a)
				};
				return B1(this.node.current, s, l)
			}
			mount() {
				this.startObserver()
			}
			update() {
				if (typeof IntersectionObserver > "u") return;
				let {
					props: t,
					prevProps: n
				} = this.node;
				["amount", "margin", "root"].some(_2(t, n)) && this.startObserver()
			}
			unmount() {}
		};

	function _2({
		viewport: e = {}
	}, {
		viewport: t = {}
	} = {}) {
		return n => e[n] !== t[n]
	}
	var j1 = {
		inView: {
			Feature: Vu
		},
		tap: {
			Feature: Nu
		},
		focus: {
			Feature: Ru
		},
		hover: {
			Feature: Du
		}
	};

	function ad(e, t) {
		if (!Array.isArray(t)) return !1;
		let n = t.length;
		if (n !== e.length) return !1;
		for (let r = 0; r < n; r++)
			if (t[r] !== e[r]) return !1;
		return !0
	}

	function ur(e, t, n) {
		let r = e.getProps();
		return no(r, t, n !== void 0 ? n : r.custom, e)
	}
	var $e = e => e * 1e3,
		ft = e => e / 1e3;
	var z2 = {
			type: "spring",
			stiffness: 500,
			damping: 25,
			restSpeed: 10
		},
		F2 = e => ({
			type: "spring",
			stiffness: 550,
			damping: e === 0 ? 2 * Math.sqrt(550) : 30,
			restSpeed: 10
		}),
		B2 = {
			type: "keyframes",
			duration: .8
		},
		j2 = {
			type: "keyframes",
			ease: [.25, .1, .35, 1],
			duration: .3
		},
		U1 = (e, {
			keyframes: t
		}) => t.length > 2 ? B2 : He.has(e) ? e.startsWith("scale") ? F2(t[1]) : z2 : j2;

	function H1({
		when: e,
		delay: t,
		delayChildren: n,
		staggerChildren: r,
		staggerDirection: i,
		repeat: o,
		repeatType: s,
		repeatDelay: l,
		from: a,
		elapsed: u,
		...c
	}) {
		return !!Object.keys(c).length
	}

	function oo(e, t) {
		return e[t] || e.default || e
	}
	var Ou = {
		current: !1
	};
	var U2 = e => e !== null;

	function cr(e, {
		repeat: t,
		repeatType: n = "loop"
	}, r) {
		let i = e.filter(U2),
			o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
		return !o || r === void 0 ? i[o] : r
	}
	var bu;

	function H2() {
		bu = void 0
	}
	var Ct = {
		now: () => (bu === void 0 && Ct.set(Se.isProcessing || Ui.useManualTiming ? Se.timestamp : performance.now()), bu),
		set: e => {
			bu = e, queueMicrotask(H2)
		}
	};
	var _u = e => /^0[^.\s]+$/u.test(e);

	function W1(e) {
		return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || _u(e) : !0
	}
	var zu = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
	var W2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

	function $2(e) {
		let t = W2.exec(e);
		if (!t) return [, ];
		let [, n, r, i] = t;
		return [`--${n??r}`, i]
	}
	var K2 = 4;

	function ud(e, t, n = 1) {
		Pn(n <= K2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
		let [r, i] = $2(e);
		if (!r) return;
		let o = window.getComputedStyle(t).getPropertyValue(r);
		if (o) {
			let s = o.trim();
			return zu(s) ? parseFloat(s) : s
		}
		return Qi(i) ? ud(i, t, n + 1) : i
	}
	var G1 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
		cd = e => e === tn || e === _,
		$1 = (e, t) => parseFloat(e.split(", ")[t]),
		K1 = (e, t) => (n, {
			transform: r
		}) => {
			if (r === "none" || !r) return 0;
			let i = r.match(/^matrix3d\((.+)\)$/u);
			if (i) return $1(i[1], t);
			{
				let o = r.match(/^matrix\((.+)\)$/u);
				return o ? $1(o[1], e) : 0
			}
		},
		G2 = new Set(["x", "y", "z"]),
		Y2 = ir.filter(e => !G2.has(e));

	function Y1(e) {
		let t = [];
		return Y2.forEach(n => {
			let r = e.getValue(n);
			r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
		}), t
	}
	var Wr = {
		width: ({
			x: e
		}, {
			paddingLeft: t = "0",
			paddingRight: n = "0"
		}) => e.max - e.min - parseFloat(t) - parseFloat(n),
		height: ({
			y: e
		}, {
			paddingTop: t = "0",
			paddingBottom: n = "0"
		}) => e.max - e.min - parseFloat(t) - parseFloat(n),
		top: (e, {
			top: t
		}) => parseFloat(t),
		left: (e, {
			left: t
		}) => parseFloat(t),
		bottom: ({
			y: e
		}, {
			top: t
		}) => parseFloat(t) + (e.max - e.min),
		right: ({
			x: e
		}, {
			left: t
		}) => parseFloat(t) + (e.max - e.min),
		x: K1(4, 13),
		y: K1(5, 14)
	};
	Wr.translateX = Wr.x;
	Wr.translateY = Wr.y;
	var Fu = e => t => t.test(e);
	var Q1 = {
		test: e => e === "auto",
		parse: e => e
	};
	var fd = [tn, _, et, nn, d1, m1, Q1],
		pd = e => fd.find(Fu(e));
	var $r = new Set,
		md = !1,
		dd = !1;

	function X1() {
		if (dd) {
			let e = Array.from($r).filter(r => r.needsMeasurement),
				t = new Set(e.map(r => r.element)),
				n = new Map;
			t.forEach(r => {
				let i = Y1(r);
				i.length && (n.set(r, i), r.render())
			}), e.forEach(r => r.measureInitialState()), t.forEach(r => {
				r.render();
				let i = n.get(r);
				i && i.forEach(([o, s]) => {
					var l;
					(l = r.getValue(o)) === null || l === void 0 || l.set(s)
				})
			}), e.forEach(r => r.measureEndState()), e.forEach(r => {
				r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
			})
		}
		dd = !1, md = !1, $r.forEach(e => e.complete()), $r.clear()
	}

	function q1() {
		$r.forEach(e => {
			e.readKeyframes(), e.needsMeasurement && (dd = !0)
		})
	}

	function Z1() {
		q1(), X1()
	}
	var fr = class {
		constructor(t, n, r, i, o, s = !1) {
			this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
		}
		scheduleResolve() {
			this.isScheduled = !0, this.isAsync ? ($r.add(this), md || (md = !0, j.read(q1), j.resolveKeyframes(X1))) : (this.readKeyframes(), this.complete())
		}
		readKeyframes() {
			let {
				unresolvedKeyframes: t,
				name: n,
				element: r,
				motionValue: i
			} = this;
			for (let o = 0; o < t.length; o++)
				if (t[o] === null)
					if (o === 0) {
						let s = i?.get(),
							l = t[t.length - 1];
						if (s !== void 0) t[0] = s;
						else if (r && n) {
							let a = r.readValue(n, l);
							a != null && (t[0] = a)
						}
						t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0])
					} else t[o] = t[o - 1]
		}
		setFinalKeyframe() {}
		measureInitialState() {}
		renderEndStyles() {}
		measureEndState() {}
		complete() {
			this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), $r.delete(this)
		}
		cancel() {
			this.isComplete || (this.isScheduled = !1, $r.delete(this))
		}
		resume() {
			this.isComplete || this.scheduleResolve()
		}
	};
	var so = (e, t) => n => !!(Tn(n) && f1.test(n) && n.startsWith(e) || t && !p1(n) && Object.prototype.hasOwnProperty.call(n, t)),
		Bu = (e, t, n) => r => {
			if (!Tn(r)) return r;
			let [i, o, s, l] = r.match(Gi);
			return {
				[e]: parseFloat(i),
				[t]: parseFloat(o),
				[n]: parseFloat(s),
				alpha: l !== void 0 ? parseFloat(l) : 1
			}
		};
	var Q2 = e => Je(0, 255, e),
		hd = {
			...tn,
			transform: e => Math.round(Q2(e))
		},
		rn = {
			test: so("rgb", "red"),
			parse: Bu("red", "green", "blue"),
			transform: ({
				red: e,
				green: t,
				blue: n,
				alpha: r = 1
			}) => "rgba(" + hd.transform(e) + ", " + hd.transform(t) + ", " + hd.transform(n) + ", " + sr(or.transform(r)) + ")"
		};

	function X2(e) {
		let t = "",
			n = "",
			r = "",
			i = "";
		return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1
		}
	}
	var Us = {
		test: so("#"),
		parse: X2,
		transform: rn.transform
	};
	var pr = {
		test: so("hsl", "hue"),
		parse: Bu("hue", "saturation", "lightness"),
		transform: ({
			hue: e,
			saturation: t,
			lightness: n,
			alpha: r = 1
		}) => "hsla(" + Math.round(e) + ", " + et.transform(sr(t)) + ", " + et.transform(sr(n)) + ", " + sr(or.transform(r)) + ")"
	};
	var Ce = {
		test: e => rn.test(e) || Us.test(e) || pr.test(e),
		parse: e => rn.test(e) ? rn.parse(e) : pr.test(e) ? pr.parse(e) : Us.parse(e),
		transform: e => Tn(e) ? e : e.hasOwnProperty("red") ? rn.transform(e) : pr.transform(e)
	};

	function q2(e) {
		var t, n;
		return isNaN(e) && Tn(e) && (((t = e.match(Gi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(c1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
	}
	var ew = "number",
		tw = "color",
		Z2 = "var",
		J2 = "var(",
		J1 = "${}",
		eI = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

	function Kr(e) {
		let t = e.toString(),
			n = [],
			r = {
				color: [],
				number: [],
				var: []
			},
			i = [],
			o = 0,
			l = t.replace(eI, a => (Ce.test(a) ? (r.color.push(o), i.push(tw), n.push(Ce.parse(a))) : a.startsWith(J2) ? (r.var.push(o), i.push(Z2), n.push(a)) : (r.number.push(o), i.push(ew), n.push(parseFloat(a))), ++o, J1)).split(J1);
		return {
			values: n,
			split: l,
			indexes: r,
			types: i
		}
	}

	function nw(e) {
		return Kr(e).values
	}

	function rw(e) {
		let {
			split: t,
			types: n
		} = Kr(e), r = t.length;
		return i => {
			let o = "";
			for (let s = 0; s < r; s++)
				if (o += t[s], i[s] !== void 0) {
					let l = n[s];
					l === ew ? o += sr(i[s]) : l === tw ? o += Ce.transform(i[s]) : o += i[s]
				} return o
		}
	}
	var tI = e => typeof e == "number" ? 0 : e;

	function nI(e) {
		let t = nw(e);
		return rw(e)(t.map(tI))
	}
	var nt = {
		test: q2,
		parse: nw,
		createTransformer: rw,
		getAnimatableNone: nI
	};
	var rI = new Set(["brightness", "contrast", "saturate", "opacity"]);

	function iI(e) {
		let [t, n] = e.slice(0, -1).split("(");
		if (t === "drop-shadow") return e;
		let [r] = n.match(Gi) || [];
		if (!r) return e;
		let i = n.replace(r, ""),
			o = rI.has(t) ? 1 : 0;
		return r !== n && (o *= 100), t + "(" + o + i + ")"
	}
	var oI = /\b([a-z-]*)\(.*?\)/gu,
		Hs = {
			...nt,
			getAnimatableNone: e => {
				let t = e.match(oI);
				return t ? t.map(iI).join(" ") : e
			}
		};
	var sI = {
			...Yi,
			color: Ce,
			backgroundColor: Ce,
			outlineColor: Ce,
			fill: Ce,
			stroke: Ce,
			borderColor: Ce,
			borderTopColor: Ce,
			borderRightColor: Ce,
			borderBottomColor: Ce,
			borderLeftColor: Ce,
			filter: Hs,
			WebkitFilter: Hs
		},
		lo = e => sI[e];

	function ju(e, t) {
		let n = lo(e);
		return n !== Hs && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
	}
	var lI = new Set(["auto", "none", "0"]);

	function iw(e, t, n) {
		let r = 0,
			i;
		for (; r < e.length && !i;) {
			let o = e[r];
			typeof o == "string" && !lI.has(o) && Kr(o).values.length && (i = e[r]), r++
		}
		if (i && n)
			for (let o of t) e[o] = ju(n, i)
	}
	var ao = class extends fr {
		constructor(t, n, r, i) {
			super(t, n, r, i, i?.owner, !0)
		}
		readKeyframes() {
			let {
				unresolvedKeyframes: t,
				element: n,
				name: r
			} = this;
			if (!n.current) return;
			super.readKeyframes();
			for (let a = 0; a < t.length; a++) {
				let u = t[a];
				if (typeof u == "string" && (u = u.trim(), Qi(u))) {
					let c = ud(u, n.current);
					c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u)
				}
			}
			if (this.resolveNoneKeyframes(), !G1.has(r) || t.length !== 2) return;
			let [i, o] = t, s = pd(i), l = pd(o);
			if (s !== l)
				if (cd(s) && cd(l))
					for (let a = 0; a < t.length; a++) {
						let u = t[a];
						typeof u == "string" && (t[a] = parseFloat(u))
					} else this.needsMeasurement = !0
		}
		resolveNoneKeyframes() {
			let {
				unresolvedKeyframes: t,
				name: n
			} = this, r = [];
			for (let i = 0; i < t.length; i++) W1(t[i]) && r.push(i);
			r.length && iw(t, r, n)
		}
		measureInitialState() {
			let {
				element: t,
				unresolvedKeyframes: n,
				name: r
			} = this;
			if (!t.current) return;
			r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Wr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
			let i = n[n.length - 1];
			i !== void 0 && t.getValue(r, i).jump(i, !1)
		}
		measureEndState() {
			var t;
			let {
				element: n,
				name: r,
				unresolvedKeyframes: i
			} = this;
			if (!n.current) return;
			let o = n.getValue(r);
			o && o.jump(this.measuredOrigin, !1);
			let s = i.length - 1,
				l = i[s];
			i[s] = Wr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
				n.getValue(a).set(u)
			}), this.resolveNoneKeyframes()
		}
	};

	function Uu(e) {
		let t;
		return () => (t === void 0 && (t = e()), t)
	}
	var gd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (nt.test(e) || e === "0") && !e.startsWith("url("));

	function aI(e) {
		let t = e[0];
		if (e.length === 1) return !0;
		for (let n = 0; n < e.length; n++)
			if (e[n] !== t) return !0
	}

	function ow(e, t, n, r) {
		let i = e[0];
		if (i === null) return !1;
		if (t === "display" || t === "visibility") return !0;
		let o = e[e.length - 1],
			s = gd(i, t),
			l = gd(o, t);
		return rr(s === l, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !l ? !1 : aI(e) || n === "spring" && r
	}
	var uo = class {
		constructor({
			autoplay: t = !0,
			delay: n = 0,
			type: r = "keyframes",
			repeat: i = 0,
			repeatDelay: o = 0,
			repeatType: s = "loop",
			...l
		}) {
			this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
				autoplay: t,
				delay: n,
				type: r,
				repeat: i,
				repeatDelay: o,
				repeatType: s,
				...l
			}, this.updateFinishedPromise()
		}
		get resolved() {
			return !this._resolved && !this.hasAttemptedResolve && Z1(), this._resolved
		}
		onKeyframesResolved(t, n) {
			this.hasAttemptedResolve = !0;
			let {
				name: r,
				type: i,
				velocity: o,
				delay: s,
				onComplete: l,
				onUpdate: a,
				isGenerator: u
			} = this.options;
			if (!u && !ow(t, r, i, o))
				if (Ou.current || !s) {
					a?.(cr(t, this.options, n)), l?.(), this.resolveFinishedPromise();
					return
				} else this.options.duration = 0;
			let c = this.initPlayback(t, n);
			c !== !1 && (this._resolved = {
				keyframes: t,
				finalKeyframe: n,
				...c
			}, this.onPostResolved())
		}
		onPostResolved() {}
		then(t, n) {
			return this.currentFinishedPromise.then(t, n)
		}
		updateFinishedPromise() {
			this.currentFinishedPromise = new Promise(t => {
				this.resolveFinishedPromise = t
			})
		}
	};

	function Hu(e, t) {
		return t ? e * (1e3 / t) : 0
	}
	var uI = 5;

	function Wu(e, t, n) {
		let r = Math.max(t - uI, 0);
		return Hu(n - e(r), t - r)
	}
	var yd = .001,
		cI = .01,
		sw = 10,
		fI = .05,
		pI = 1;

	function lw({
		duration: e = 800,
		bounce: t = .25,
		velocity: n = 0,
		mass: r = 1
	}) {
		let i, o;
		rr(e <= $e(sw), "Spring duration must be 10 seconds or less");
		let s = 1 - t;
		s = Je(fI, pI, s), e = Je(cI, sw, ft(e)), s < 1 ? (i = u => {
			let c = u * s,
				f = c * e,
				p = c - n,
				m = $u(u, s),
				y = Math.exp(-f);
			return yd - p / m * y
		}, o = u => {
			let f = u * s * e,
				p = f * n + n,
				m = Math.pow(s, 2) * Math.pow(u, 2) * e,
				y = Math.exp(-f),
				v = $u(Math.pow(u, 2), s);
			return (-i(u) + yd > 0 ? -1 : 1) * ((p - m) * y) / v
		}) : (i = u => {
			let c = Math.exp(-u * e),
				f = (u - n) * e + 1;
			return -yd + c * f
		}, o = u => {
			let c = Math.exp(-u * e),
				f = (n - u) * (e * e);
			return c * f
		});
		let l = 5 / e,
			a = dI(i, o, l);
		if (e = $e(e), isNaN(a)) return {
			stiffness: 100,
			damping: 10,
			duration: e
		};
		{
			let u = Math.pow(a, 2) * r;
			return {
				stiffness: u,
				damping: s * 2 * Math.sqrt(r * u),
				duration: e
			}
		}
	}
	var mI = 12;

	function dI(e, t, n) {
		let r = n;
		for (let i = 1; i < mI; i++) r = r - e(r) / t(r);
		return r
	}

	function $u(e, t) {
		return e * Math.sqrt(1 - t * t)
	}
	var hI = ["duration", "bounce"],
		gI = ["stiffness", "damping", "mass"];

	function aw(e, t) {
		return t.some(n => e[n] !== void 0)
	}

	function yI(e) {
		let t = {
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1,
			...e
		};
		if (!aw(e, gI) && aw(e, hI)) {
			let n = lw(e);
			t = {
				...t,
				...n,
				mass: 1
			}, t.isResolvedFromDuration = !0
		}
		return t
	}

	function Ku({
		keyframes: e,
		restDelta: t,
		restSpeed: n,
		...r
	}) {
		let i = e[0],
			o = e[e.length - 1],
			s = {
				done: !1,
				value: i
			},
			{
				stiffness: l,
				damping: a,
				mass: u,
				duration: c,
				velocity: f,
				isResolvedFromDuration: p
			} = yI({
				...r,
				velocity: -ft(r.velocity || 0)
			}),
			m = f || 0,
			y = a / (2 * Math.sqrt(l * u)),
			v = o - i,
			C = ft(Math.sqrt(l / u)),
			d = Math.abs(v) < 5;
		n || (n = d ? .01 : 2), t || (t = d ? .005 : .5);
		let h;
		if (y < 1) {
			let g = $u(C, y);
			h = k => {
				let E = Math.exp(-y * C * k);
				return o - E * ((m + y * C * v) / g * Math.sin(g * k) + v * Math.cos(g * k))
			}
		} else if (y === 1) h = g => o - Math.exp(-C * g) * (v + (m + C * v) * g);
		else {
			let g = C * Math.sqrt(y * y - 1);
			h = k => {
				let E = Math.exp(-y * C * k),
					x = Math.min(g * k, 300);
				return o - E * ((m + y * C * v) * Math.sinh(x) + g * v * Math.cosh(x)) / g
			}
		}
		return {
			calculatedDuration: p && c || null,
			next: g => {
				let k = h(g);
				if (p) s.done = g >= c;
				else {
					let E = 0;
					y < 1 && (E = g === 0 ? $e(m) : Wu(h, g, k));
					let x = Math.abs(E) <= n,
						T = Math.abs(o - k) <= t;
					s.done = x && T
				}
				return s.value = s.done ? o : k, s
			}
		}
	}

	function vd({
		keyframes: e,
		velocity: t = 0,
		power: n = .8,
		timeConstant: r = 325,
		bounceDamping: i = 10,
		bounceStiffness: o = 500,
		modifyTarget: s,
		min: l,
		max: a,
		restDelta: u = .5,
		restSpeed: c
	}) {
		let f = e[0],
			p = {
				done: !1,
				value: f
			},
			m = I => l !== void 0 && I < l || a !== void 0 && I > a,
			y = I => l === void 0 ? a : a === void 0 || Math.abs(l - I) < Math.abs(a - I) ? l : a,
			v = n * t,
			C = f + v,
			d = s === void 0 ? C : s(C);
		d !== C && (v = d - f);
		let h = I => -v * Math.exp(-I / r),
			g = I => d + h(I),
			k = I => {
				let O = h(I),
					R = g(I);
				p.done = Math.abs(O) <= u, p.value = p.done ? d : R
			},
			E, x, T = I => {
				m(p.value) && (E = I, x = Ku({
					keyframes: [p.value, y(p.value)],
					velocity: Wu(g, I, p.value),
					damping: i,
					stiffness: o,
					restDelta: u,
					restSpeed: c
				}))
			};
		return T(0), {
			calculatedDuration: null,
			next: I => {
				let O = !1;
				return !x && E === void 0 && (O = !0, k(I), T(I)), E !== void 0 && I >= E ? x.next(I - E) : (!O && k(I), p)
			}
		}
	}
	var uw = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
		vI = 1e-7,
		xI = 12;

	function wI(e, t, n, r, i) {
		let o, s, l = 0;
		do s = t + (n - t) / 2, o = uw(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > vI && ++l < xI);
		return s
	}

	function mr(e, t, n, r) {
		if (e === t && n === r) return te;
		let i = o => wI(o, 0, 1, e, n);
		return o => o === 0 || o === 1 ? o : uw(i(o), t, r)
	}
	var cw = mr(.42, 0, 1, 1),
		fw = mr(0, 0, .58, 1),
		Gu = mr(.42, 0, .58, 1);
	var pw = e => Array.isArray(e) && typeof e[0] != "number";
	var Yu = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
	var Qu = e => t => 1 - e(1 - t);
	var Xu = e => 1 - Math.sin(Math.acos(e)),
		qu = Qu(Xu),
		mw = Yu(Xu);
	var xd = mr(.33, 1.53, .69, .99),
		Ws = Qu(xd),
		dw = Yu(Ws);
	var hw = e => (e *= 2) < 1 ? .5 * Ws(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
	var gw = {
			linear: te,
			easeIn: cw,
			easeInOut: Gu,
			easeOut: fw,
			circIn: Xu,
			circInOut: mw,
			circOut: qu,
			backIn: Ws,
			backInOut: dw,
			backOut: xd,
			anticipate: hw
		},
		wd = e => {
			if (Array.isArray(e)) {
				Pn(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
				let [t, n, r, i] = e;
				return mr(t, n, r, i)
			} else if (typeof e == "string") return Pn(gw[e] !== void 0, `Invalid easing type '${e}'`), gw[e];
			return e
		};
	var An = (e, t, n) => {
		let r = t - e;
		return r === 0 ? 1 : (n - e) / r
	};
	var G = (e, t, n) => e + (t - e) * n;

	function Sd(e, t, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
	}

	function yw({
		hue: e,
		saturation: t,
		lightness: n,
		alpha: r
	}) {
		e /= 360, t /= 100, n /= 100;
		let i = 0,
			o = 0,
			s = 0;
		if (!t) i = o = s = n;
		else {
			let l = n < .5 ? n * (1 + t) : n + t - n * t,
				a = 2 * n - l;
			i = Sd(a, l, e + 1 / 3), o = Sd(a, l, e), s = Sd(a, l, e - 1 / 3)
		}
		return {
			red: Math.round(i * 255),
			green: Math.round(o * 255),
			blue: Math.round(s * 255),
			alpha: r
		}
	}

	function co(e, t) {
		return n => n > 0 ? t : e
	}
	var kd = (e, t, n) => {
			let r = e * e,
				i = n * (t * t - r) + r;
			return i < 0 ? 0 : Math.sqrt(i)
		},
		SI = [Us, rn, pr],
		kI = e => SI.find(t => t.test(e));

	function vw(e) {
		let t = kI(e);
		if (rr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
		let n = t.parse(e);
		return t === pr && (n = yw(n)), n
	}
	var Cd = (e, t) => {
		let n = vw(e),
			r = vw(t);
		if (!n || !r) return co(e, t);
		let i = {
			...n
		};
		return o => (i.red = kd(n.red, r.red, o), i.green = kd(n.green, r.green, o), i.blue = kd(n.blue, r.blue, o), i.alpha = G(n.alpha, r.alpha, o), rn.transform(i))
	};
	var Zu = new Set(["none", "hidden"]);

	function xw(e, t) {
		return Zu.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
	}

	function CI(e, t) {
		return n => G(e, t, n)
	}

	function Ju(e) {
		return typeof e == "number" ? CI : typeof e == "string" ? Qi(e) ? co : Ce.test(e) ? Cd : TI : Array.isArray(e) ? ww : typeof e == "object" ? Ce.test(e) ? Cd : EI : co
	}

	function ww(e, t) {
		let n = [...e],
			r = n.length,
			i = e.map((o, s) => Ju(o)(o, t[s]));
		return o => {
			for (let s = 0; s < r; s++) n[s] = i[s](o);
			return n
		}
	}

	function EI(e, t) {
		let n = {
				...e,
				...t
			},
			r = {};
		for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ju(e[i])(e[i], t[i]));
		return i => {
			for (let o in r) n[o] = r[o](i);
			return n
		}
	}

	function PI(e, t) {
		var n;
		let r = [],
			i = {
				color: 0,
				var: 0,
				number: 0
			};
		for (let o = 0; o < t.values.length; o++) {
			let s = t.types[o],
				l = e.indexes[s][i[s]],
				a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
			r[o] = a, i[s]++
		}
		return r
	}
	var TI = (e, t) => {
		let n = nt.createTransformer(t),
			r = Kr(e),
			i = Kr(t);
		return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Zu.has(e) && !i.values.length || Zu.has(t) && !r.values.length ? xw(e, t) : We(ww(PI(r, i), i.values), n) : (rr(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), co(e, t))
	};

	function ec(e, t, n) {
		return typeof e == "number" && typeof t == "number" && typeof n == "number" ? G(e, t, n) : Ju(e)(e, t)
	}

	function AI(e, t, n) {
		let r = [],
			i = n || ec,
			o = e.length - 1;
		for (let s = 0; s < o; s++) {
			let l = i(e[s], e[s + 1]);
			if (t) {
				let a = Array.isArray(t) ? t[s] || te : t;
				l = We(a, l)
			}
			r.push(l)
		}
		return r
	}

	function Sw(e, t, {
		clamp: n = !0,
		ease: r,
		mixer: i
	} = {}) {
		let o = e.length;
		if (Pn(o === t.length, "Both input and output ranges must be the same length"), o === 1) return () => t[0];
		if (o === 2 && e[0] === e[1]) return () => t[1];
		e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
		let s = AI(t, r, i),
			l = s.length,
			a = u => {
				let c = 0;
				if (l > 1)
					for (; c < e.length - 2 && !(u < e[c + 1]); c++);
				let f = An(e[c], e[c + 1], u);
				return s[c](f)
			};
		return n ? u => a(Je(e[0], e[o - 1], u)) : a
	}

	function kw(e, t) {
		let n = e[e.length - 1];
		for (let r = 1; r <= t; r++) {
			let i = An(0, t, r);
			e.push(G(n, 1, i))
		}
	}

	function Cw(e) {
		let t = [0];
		return kw(t, e.length - 1), t
	}

	function Ew(e, t) {
		return e.map(n => n * t)
	}

	function II(e, t) {
		return e.map(() => t || Gu).splice(0, e.length - 1)
	}

	function $s({
		duration: e = 300,
		keyframes: t,
		times: n,
		ease: r = "easeInOut"
	}) {
		let i = pw(r) ? r.map(wd) : wd(r),
			o = {
				done: !1,
				value: t[0]
			},
			s = Ew(n && n.length === t.length ? n : Cw(t), e),
			l = Sw(s, t, {
				ease: Array.isArray(i) ? i : II(t, i)
			});
		return {
			calculatedDuration: e,
			next: a => (o.value = l(a), o.done = a >= e, o)
		}
	}

	function Pw(e) {
		let t = 0,
			n = 50,
			r = e.next(t);
		for (; !r.done && t < 2e4;) t += n, r = e.next(t);
		return t >= 2e4 ? 1 / 0 : t
	}
	var Tw = e => {
		let t = ({
			timestamp: n
		}) => e(n);
		return {
			start: () => j.update(t, !0),
			stop: () => tt(t),
			now: () => Se.isProcessing ? Se.timestamp : Ct.now()
		}
	};
	var LI = {
			decay: vd,
			inertia: vd,
			tween: $s,
			keyframes: $s,
			spring: Ku
		},
		MI = e => e / 100,
		Gr = class extends uo {
			constructor({
				KeyframeResolver: t = fr,
				...n
			}) {
				super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
					if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
					this.teardown();
					let {
						onStop: l
					} = this.options;
					l && l()
				};
				let {
					name: r,
					motionValue: i,
					keyframes: o
				} = this.options, s = (l, a) => this.onKeyframesResolved(l, a);
				r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, s, r, i) : this.resolver = new t(o, s, r, i), this.resolver.scheduleResolve()
			}
			initPlayback(t) {
				let {
					type: n = "keyframes",
					repeat: r = 0,
					repeatDelay: i = 0,
					repeatType: o,
					velocity: s = 0
				} = this.options, l = LI[n] || $s, a, u;
				l !== $s && typeof t[0] != "number" && (a = We(MI, ec(t[0], t[1])), t = [0, 100]);
				let c = l({
					...this.options,
					keyframes: t
				});
				o === "mirror" && (u = l({
					...this.options,
					keyframes: [...t].reverse(),
					velocity: -s
				})), c.calculatedDuration === null && (c.calculatedDuration = Pw(c));
				let {
					calculatedDuration: f
				} = c, p = f + i, m = p * (r + 1) - i;
				return {
					generator: c,
					mirroredGenerator: u,
					mapPercentToKeyframes: a,
					calculatedDuration: f,
					resolvedDuration: p,
					totalDuration: m
				}
			}
			onPostResolved() {
				let {
					autoplay: t = !0
				} = this.options;
				this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
			}
			tick(t, n = !1) {
				let {
					resolved: r
				} = this;
				if (!r) {
					let {
						keyframes: I
					} = this.options;
					return {
						done: !0,
						value: I[I.length - 1]
					}
				}
				let {
					finalKeyframe: i,
					generator: o,
					mirroredGenerator: s,
					mapPercentToKeyframes: l,
					keyframes: a,
					calculatedDuration: u,
					totalDuration: c,
					resolvedDuration: f
				} = r;
				if (this.startTime === null) return o.next(0);
				let {
					delay: p,
					repeat: m,
					repeatType: y,
					repeatDelay: v,
					onUpdate: C
				} = this.options;
				this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
				let d = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
					h = this.speed >= 0 ? d < 0 : d > c;
				this.currentTime = Math.max(d, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
				let g = this.currentTime,
					k = o;
				if (m) {
					let I = Math.min(this.currentTime, c) / f,
						O = Math.floor(I),
						R = I % 1;
					!R && I >= 1 && (R = 1), R === 1 && O--, O = Math.min(O, m + 1), !!(O % 2) && (y === "reverse" ? (R = 1 - R, v && (R -= v / f)) : y === "mirror" && (k = s)), g = Je(0, 1, R) * f
				}
				let E = h ? {
					done: !1,
					value: a[0]
				} : k.next(g);
				l && (E.value = l(E.value));
				let {
					done: x
				} = E;
				!h && u !== null && (x = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
				let T = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
				return T && i !== void 0 && (E.value = cr(a, this.options, i)), C && C(E.value), T && this.finish(), E
			}
			get duration() {
				let {
					resolved: t
				} = this;
				return t ? ft(t.calculatedDuration) : 0
			}
			get time() {
				return ft(this.currentTime)
			}
			set time(t) {
				t = $e(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
			}
			get speed() {
				return this.playbackSpeed
			}
			set speed(t) {
				let n = this.playbackSpeed !== t;
				this.playbackSpeed = t, n && (this.time = ft(this.currentTime))
			}
			play() {
				if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
					this.pendingPlayState = "running";
					return
				}
				if (this.isStopped) return;
				let {
					driver: t = Tw,
					onPlay: n
				} = this.options;
				this.driver || (this.driver = t(i => this.tick(i))), n && n();
				let r = this.driver.now();
				this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
			}
			pause() {
				var t;
				if (!this._resolved) {
					this.pendingPlayState = "paused";
					return
				}
				this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
			}
			complete() {
				this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
			}
			finish() {
				this.teardown(), this.state = "finished";
				let {
					onComplete: t
				} = this.options;
				t && t()
			}
			cancel() {
				this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
			}
			teardown() {
				this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
			}
			stopDriver() {
				this.driver && (this.driver.stop(), this.driver = void 0)
			}
			sample(t) {
				return this.startTime = 0, this.tick(t, !0)
			}
		};
	var Ed = e => Array.isArray(e) && typeof e[0] == "number";

	function Pd(e) {
		return !!(!e || typeof e == "string" && e in Td || Ed(e) || Array.isArray(e) && e.every(Pd))
	}
	var Ks = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
		Td = {
			linear: "linear",
			ease: "ease",
			easeIn: "ease-in",
			easeOut: "ease-out",
			easeInOut: "ease-in-out",
			circIn: Ks([0, .65, .55, 1]),
			circOut: Ks([.55, 0, 1, .45]),
			backIn: Ks([.31, .01, .66, -.59]),
			backOut: Ks([.33, 1.53, .69, .99])
		};

	function DI(e) {
		return Ad(e) || Td.easeOut
	}

	function Ad(e) {
		if (e) return Ed(e) ? Ks(e) : Array.isArray(e) ? e.map(DI) : Td[e]
	}

	function Aw(e, t, n, {
		delay: r = 0,
		duration: i = 300,
		repeat: o = 0,
		repeatType: s = "loop",
		ease: l,
		times: a
	} = {}) {
		let u = {
			[t]: n
		};
		a && (u.offset = a);
		let c = Ad(l);
		return Array.isArray(c) && (u.easing = c), e.animate(u, {
			delay: r,
			duration: i,
			easing: Array.isArray(c) ? "linear" : c,
			fill: "both",
			iterations: o + 1,
			direction: s === "reverse" ? "alternate" : "normal"
		})
	}
	var RI = Uu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
		tc = 10,
		NI = 2e4;

	function VI(e) {
		return e.type === "spring" || !Pd(e.ease)
	}

	function OI(e, t) {
		let n = new Gr({
				...t,
				keyframes: e,
				repeat: 0,
				delay: 0,
				isGenerator: !0
			}),
			r = {
				done: !1,
				value: e[0]
			},
			i = [],
			o = 0;
		for (; !r.done && o < NI;) r = n.sample(o), i.push(r.value), o += tc;
		return {
			times: void 0,
			keyframes: i,
			duration: o - tc,
			ease: "linear"
		}
	}
	var Gs = class extends uo {
		constructor(t) {
			super(t);
			let {
				name: n,
				motionValue: r,
				keyframes: i
			} = this.options;
			this.resolver = new ao(i, (o, s) => this.onKeyframesResolved(o, s), n, r), this.resolver.scheduleResolve()
		}
		initPlayback(t, n) {
			var r;
			let {
				duration: i = 300,
				times: o,
				ease: s,
				type: l,
				motionValue: a,
				name: u
			} = this.options;
			if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
			if (VI(this.options)) {
				let {
					onComplete: f,
					onUpdate: p,
					motionValue: m,
					...y
				} = this.options, v = OI(t, y);
				t = v.keyframes, t.length === 1 && (t[1] = t[0]), i = v.duration, o = v.times, s = v.ease, l = "keyframes"
			}
			let c = Aw(a.owner.current, u, t, {
				...this.options,
				duration: i,
				times: o,
				ease: s
			});
			return c.startTime = Ct.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
				let {
					onComplete: f
				} = this.options;
				a.set(cr(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
			}, {
				animation: c,
				duration: i,
				times: o,
				type: l,
				ease: s,
				keyframes: t
			}
		}
		get duration() {
			let {
				resolved: t
			} = this;
			if (!t) return 0;
			let {
				duration: n
			} = t;
			return ft(n)
		}
		get time() {
			let {
				resolved: t
			} = this;
			if (!t) return 0;
			let {
				animation: n
			} = t;
			return ft(n.currentTime || 0)
		}
		set time(t) {
			let {
				resolved: n
			} = this;
			if (!n) return;
			let {
				animation: r
			} = n;
			r.currentTime = $e(t)
		}
		get speed() {
			let {
				resolved: t
			} = this;
			if (!t) return 1;
			let {
				animation: n
			} = t;
			return n.playbackRate
		}
		set speed(t) {
			let {
				resolved: n
			} = this;
			if (!n) return;
			let {
				animation: r
			} = n;
			r.playbackRate = t
		}
		get state() {
			let {
				resolved: t
			} = this;
			if (!t) return "idle";
			let {
				animation: n
			} = t;
			return n.playState
		}
		attachTimeline(t) {
			if (!this._resolved) this.pendingTimeline = t;
			else {
				let {
					resolved: n
				} = this;
				if (!n) return te;
				let {
					animation: r
				} = n;
				r.timeline = t, r.onfinish = null
			}
			return te
		}
		play() {
			if (this.isStopped) return;
			let {
				resolved: t
			} = this;
			if (!t) return;
			let {
				animation: n
			} = t;
			n.playState === "finished" && this.updateFinishedPromise(), n.play()
		}
		pause() {
			let {
				resolved: t
			} = this;
			if (!t) return;
			let {
				animation: n
			} = t;
			n.pause()
		}
		stop() {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.resolveFinishedPromise(), this.updateFinishedPromise();
			let {
				resolved: t
			} = this;
			if (!t) return;
			let {
				animation: n,
				keyframes: r,
				duration: i,
				type: o,
				ease: s,
				times: l
			} = t;
			if (n.playState === "idle" || n.playState === "finished") return;
			if (this.time) {
				let {
					motionValue: u,
					onUpdate: c,
					onComplete: f,
					...p
				} = this.options, m = new Gr({
					...p,
					keyframes: r,
					duration: i,
					type: o,
					ease: s,
					times: l,
					isGenerator: !0
				}), y = $e(this.time);
				u.setWithVelocity(m.sample(y - tc).value, m.sample(y).value, tc)
			}
			let {
				onStop: a
			} = this.options;
			a && a(), this.cancel()
		}
		complete() {
			let {
				resolved: t
			} = this;
			t && t.animation.finish()
		}
		cancel() {
			let {
				resolved: t
			} = this;
			t && t.animation.cancel()
		}
		static supports(t) {
			let {
				motionValue: n,
				name: r,
				repeatDelay: i,
				repeatType: o,
				damping: s,
				type: l
			} = t;
			return RI() && r && Pu.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && l !== "inertia"
		}
	};

	function Iw(e, t) {
		let n, r = () => {
			let {
				currentTime: i
			} = t, s = (i === null ? 0 : i.value) / 100;
			n !== s && e(s), n = s
		};
		return j.update(r, !0), () => tt(r)
	}
	var Lw = Uu(() => window.ScrollTimeline !== void 0);
	var nc = class {
		constructor(t) {
			this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
		}
		then(t, n) {
			return Promise.all(this.animations).then(t).catch(n)
		}
		getAll(t) {
			return this.animations[0][t]
		}
		setAll(t, n) {
			for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
		}
		attachTimeline(t) {
			let n = this.animations.map(r => {
				if (Lw() && r.attachTimeline) r.attachTimeline(t);
				else return r.pause(), Iw(i => {
					r.time = r.duration * i
				}, t)
			});
			return () => {
				n.forEach((r, i) => {
					r && r(), this.animations[i].stop()
				})
			}
		}
		get time() {
			return this.getAll("time")
		}
		set time(t) {
			this.setAll("time", t)
		}
		get speed() {
			return this.getAll("speed")
		}
		set speed(t) {
			this.setAll("speed", t)
		}
		get duration() {
			let t = 0;
			for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
			return t
		}
		runAll(t) {
			this.animations.forEach(n => n[t]())
		}
		play() {
			this.runAll("play")
		}
		pause() {
			this.runAll("pause")
		}
		cancel() {
			this.runAll("cancel")
		}
		complete() {
			this.runAll("complete")
		}
	};
	var fo = (e, t, n, r = {}, i, o, s) => l => {
		let a = oo(r, e) || {},
			u = a.delay || r.delay || 0,
			{
				elapsed: c = 0
			} = r;
		c = c - $e(u);
		let f = {
			keyframes: Array.isArray(n) ? n : [null, n],
			ease: "easeOut",
			velocity: t.getVelocity(),
			...a,
			delay: -c,
			onUpdate: m => {
				t.set(m), a.onUpdate && a.onUpdate(m)
			},
			onComplete: () => {
				l(), a.onComplete && a.onComplete(), s && s()
			},
			onStop: s,
			name: e,
			motionValue: t,
			element: o ? void 0 : i
		};
		H1(a) || (f = {
			...f,
			...U1(e, f)
		}), f.duration && (f.duration = $e(f.duration)), f.repeatDelay && (f.repeatDelay = $e(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
		let p = !1;
		if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (p = !0)), (Ou.current || Ui.skipAnimations) && (p = !0, f.duration = 0, f.delay = 0), p && !o && t.get() !== void 0) {
			let m = cr(f.keyframes, a);
			if (m !== void 0) return j.update(() => {
				f.onUpdate(m), f.onComplete()
			}), new nc([])
		}
		return !o && Gs.supports(f) ? new Gs(f) : new Gr(f)
	};
	var dr = class {
		constructor() {
			this.subscriptions = []
		}
		add(t) {
			return lr(this.subscriptions, t), () => ar(this.subscriptions, t)
		}
		notify(t, n, r) {
			let i = this.subscriptions.length;
			if (i)
				if (i === 1) this.subscriptions[0](t, n, r);
				else
					for (let o = 0; o < i; o++) {
						let s = this.subscriptions[o];
						s && s(t, n, r)
					}
		}
		getSize() {
			return this.subscriptions.length
		}
		clear() {
			this.subscriptions.length = 0
		}
	};
	var Mw = 30,
		bI = e => !isNaN(parseFloat(e)),
		Dw = {
			current: void 0
		},
		Ys = class {
			constructor(t, n = {}) {
				this.version = "11.3.23", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
					let o = Ct.now();
					this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
				}, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
			}
			setCurrent(t) {
				this.current = t, this.updatedAt = Ct.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = bI(this.current))
			}
			setPrevFrameValue(t = this.current) {
				this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
			}
			onChange(t) {
				return this.on("change", t)
			}
			on(t, n) {
				this.events[t] || (this.events[t] = new dr);
				let r = this.events[t].add(n);
				return t === "change" ? () => {
					r(), j.read(() => {
						this.events.change.getSize() || this.stop()
					})
				} : r
			}
			clearListeners() {
				for (let t in this.events) this.events[t].clear()
			}
			attach(t, n) {
				this.passiveEffect = t, this.stopPassiveEffect = n
			}
			set(t, n = !0) {
				!n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
			}
			setWithVelocity(t, n, r) {
				this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
			}
			jump(t, n = !0) {
				this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
			}
			get() {
				return Dw.current && Dw.current.push(this), this.current
			}
			getPrevious() {
				return this.prev
			}
			getVelocity() {
				let t = Ct.now();
				if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Mw) return 0;
				let n = Math.min(this.updatedAt - this.prevUpdatedAt, Mw);
				return Hu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
			}
			start(t) {
				return this.stop(), new Promise(n => {
					this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
				}).then(() => {
					this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
				})
			}
			stop() {
				this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
			}
			isAnimating() {
				return !!this.animation
			}
			clearAnimation() {
				delete this.animation
			}
			destroy() {
				this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
			}
		};

	function Kt(e, t) {
		return new Ys(e, t)
	}

	function _I(e, t, n) {
		e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kt(n))
	}

	function Rw(e, t) {
		let n = ur(e, t),
			{
				transitionEnd: r = {},
				transition: i = {},
				...o
			} = n || {};
		o = {
			...o,
			...r
		};
		for (let s in o) {
			let l = M1(o[s]);
			_I(e, s, l)
		}
	}

	function rc(e) {
		return e.getProps()[au]
	}
	var ic = class extends Ys {
		constructor() {
			super(...arguments), this.output = [], this.counts = new Map
		}
		add(t) {
			let n = Tu(t);
			if (!n) return;
			let r = this.counts.get(n) || 0;
			this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
			let i = !1;
			return () => {
				if (i) return;
				i = !0;
				let o = this.counts.get(n) - 1;
				this.counts.set(n, o), o === 0 && (ar(this.output, n), this.update())
			}
		}
		update() {
			this.set(this.output.length ? this.output.join(", ") : "auto")
		}
	};

	function Nw(e) {
		return !!(oe(e) && e.add)
	}

	function Qs(e, t) {
		var n;
		if (!e.applyWillChange) return;
		let r = e.getValue("willChange");
		if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new ic("auto"), e.addValue("willChange", r)), Nw(r)) return r.add(t)
	}

	function zI({
		protectedKeys: e,
		needsAnimating: t
	}, n) {
		let r = e.hasOwnProperty(n) && t[n] !== !0;
		return t[n] = !1, r
	}

	function oc(e, t, {
		delay: n = 0,
		transitionOverride: r,
		type: i
	} = {}) {
		var o;
		let {
			transition: s = e.getDefaultTransition(),
			transitionEnd: l,
			...a
		} = t;
		r && (s = r);
		let u = [],
			c = i && e.animationState && e.animationState.getState()[i];
		for (let f in a) {
			let p = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null),
				m = a[f];
			if (m === void 0 || c && zI(c, f)) continue;
			let y = {
					delay: n,
					elapsed: 0,
					...oo(s || {}, f)
				},
				v = !1;
			if (window.MotionHandoffAnimation) {
				let d = rc(e);
				if (d) {
					let h = window.MotionHandoffAnimation(d, f, j);
					h !== null && (y.elapsed = h, v = !0)
				}
			}
			p.start(fo(f, p, m, e.shouldReduceMotion && He.has(f) ? {
				type: !1
			} : y, e, v, Qs(e, f)));
			let C = p.animation;
			C && u.push(C)
		}
		return l && Promise.all(u).then(() => {
			j.update(() => {
				l && Rw(e, l)
			})
		}), u
	}

	function sc(e, t, n = {}) {
		var r;
		let i = ur(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0),
			{
				transition: o = e.getDefaultTransition() || {}
			} = i || {};
		n.transitionOverride && (o = n.transitionOverride);
		let s = i ? () => Promise.all(oc(e, i, n)) : () => Promise.resolve(),
			l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
				let {
					delayChildren: c = 0,
					staggerChildren: f,
					staggerDirection: p
				} = o;
				return FI(e, t, c + u, f, p, n)
			} : () => Promise.resolve(),
			{
				when: a
			} = o;
		if (a) {
			let [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
			return u().then(() => c())
		} else return Promise.all([s(), l(n.delay)])
	}

	function FI(e, t, n = 0, r = 0, i = 1, o) {
		let s = [],
			l = (e.variantChildren.size - 1) * r,
			a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
		return Array.from(e.variantChildren).sort(BI).forEach((u, c) => {
			u.notify("AnimationStart", t), s.push(sc(u, t, {
				...o,
				delay: n + a(c)
			}).then(() => u.notify("AnimationComplete", t)))
		}), Promise.all(s)
	}

	function BI(e, t) {
		return e.sortNodePosition(t)
	}

	function Vw(e, t, n = {}) {
		e.notify("AnimationStart", t);
		let r;
		if (Array.isArray(t)) {
			let i = t.map(o => sc(e, o, n));
			r = Promise.all(i)
		} else if (typeof t == "string") r = sc(e, t, n);
		else {
			let i = typeof t == "function" ? ur(e, t, n.custom) : t;
			r = Promise.all(oc(e, i, n))
		}
		return r.then(() => {
			e.notify("AnimationComplete", t)
		})
	}
	var jI = [...pu].reverse(),
		UI = pu.length;

	function HI(e) {
		return t => Promise.all(t.map(({
			animation: n,
			options: r
		}) => Vw(e, n, r)))
	}

	function bw(e) {
		let t = HI(e),
			n = Ow(),
			r = !0,
			i = a => (u, c) => {
				var f;
				let p = ur(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
				if (p) {
					let {
						transition: m,
						transitionEnd: y,
						...v
					} = p;
					u = {
						...u,
						...v,
						...y
					}
				}
				return u
			};

		function o(a) {
			t = a(e)
		}

		function s(a) {
			let u = e.getProps(),
				c = e.getVariantContext(!0) || {},
				f = [],
				p = new Set,
				m = {},
				y = 1 / 0;
			for (let C = 0; C < UI; C++) {
				let d = jI[C],
					h = n[d],
					g = u[d] !== void 0 ? u[d] : c[d],
					k = kn(g),
					E = d === a ? h.isActive : null;
				E === !1 && (y = C);
				let x = g === c[d] && g !== u[d] && k;
				if (x && r && e.manuallyAnimateOnMount && (x = !1), h.protectedKeys = {
						...m
					}, !h.isActive && E === null || !g && !h.prevProp || Cn(g) || typeof g == "boolean") continue;
				let I = WI(h.prevProp, g) || d === a && h.isActive && !x && k || C > y && k,
					O = !1,
					R = Array.isArray(g) ? g : [g],
					Z = R.reduce(i(d), {});
				E === !1 && (Z = {});
				let {
					prevResolvedValues: Y = {}
				} = h, b = {
					...Y,
					...Z
				}, U = z => {
					I = !0, p.has(z) && (O = !0, p.delete(z)), h.needsAnimating[z] = !0;
					let X = e.getValue(z);
					X && (X.liveStyle = !1)
				};
				for (let z in b) {
					let X = Z[z],
						pe = Y[z];
					if (m.hasOwnProperty(z)) continue;
					let Ke = !1;
					js(X) && js(pe) ? Ke = !ad(X, pe) : Ke = X !== pe, Ke ? X != null ? U(z) : p.add(z) : X !== void 0 && p.has(z) ? U(z) : h.protectedKeys[z] = !0
				}
				h.prevProp = g, h.prevResolvedValues = Z, h.isActive && (m = {
					...m,
					...Z
				}), r && e.blockInitialAnimation && (I = !1), I && (!x || O) && f.push(...R.map(z => ({
					animation: z,
					options: {
						type: d
					}
				})))
			}
			if (p.size) {
				let C = {};
				p.forEach(d => {
					let h = e.getBaseTarget(d),
						g = e.getValue(d);
					g && (g.liveStyle = !0), C[d] = h ?? null
				}), f.push({
					animation: C
				})
			}
			let v = !!f.length;
			return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve()
		}

		function l(a, u) {
			var c;
			if (n[a].isActive === u) return Promise.resolve();
			(c = e.variantChildren) === null || c === void 0 || c.forEach(p => {
				var m;
				return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(a, u)
			}), n[a].isActive = u;
			let f = s(a);
			for (let p in n) n[p].protectedKeys = {};
			return f
		}
		return {
			animateChanges: s,
			setActive: l,
			setAnimateFunction: o,
			getState: () => n,
			reset: () => {
				n = Ow(), r = !0
			}
		}
	}

	function WI(e, t) {
		return typeof t == "string" ? t !== e : Array.isArray(t) ? !ad(t, e) : !1
	}

	function Yr(e = !1) {
		return {
			isActive: e,
			protectedKeys: {},
			needsAnimating: {},
			prevResolvedValues: {}
		}
	}

	function Ow() {
		return {
			animate: Yr(!0),
			whileInView: Yr(),
			whileHover: Yr(),
			whileTap: Yr(),
			whileDrag: Yr(),
			whileFocus: Yr(),
			exit: Yr()
		}
	}
	var lc = class extends Le {
		constructor(t) {
			super(t), t.animationState || (t.animationState = bw(t))
		}
		updateAnimationControlsSubscription() {
			let {
				animate: t
			} = this.node.getProps();
			Cn(t) && (this.unmountControls = t.subscribe(this.node))
		}
		mount() {
			this.updateAnimationControlsSubscription()
		}
		update() {
			let {
				animate: t
			} = this.node.getProps(), {
				animate: n
			} = this.node.prevProps || {};
			t !== n && this.updateAnimationControlsSubscription()
		}
		unmount() {
			var t;
			this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
		}
	};
	var $I = 0,
		ac = class extends Le {
			constructor() {
				super(...arguments), this.id = $I++
			}
			update() {
				if (!this.node.presenceContext) return;
				let {
					isPresent: t,
					onExitComplete: n
				} = this.node.presenceContext, {
					isPresent: r
				} = this.node.prevPresenceContext || {};
				if (!this.node.animationState || t === r) return;
				let i = this.node.animationState.setActive("exit", !t);
				n && !t && i.then(() => n(this.id))
			}
			mount() {
				let {
					register: t
				} = this.node.presenceContext || {};
				t && (this.unmount = t(this.id))
			}
			unmount() {}
		};
	var _w = {
		animation: {
			Feature: lc
		},
		exit: {
			Feature: ac
		}
	};
	var zw = (e, t) => Math.abs(e - t);

	function Fw(e, t) {
		let n = zw(e.x, t.x),
			r = zw(e.y, t.y);
		return Math.sqrt(n ** 2 + r ** 2)
	}
	var po = class {
		constructor(t, n, {
			transformPagePoint: r,
			contextWindow: i,
			dragSnapToOrigin: o = !1
		} = {}) {
			if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
					if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
					let f = Ld(this.lastMoveEventInfo, this.history),
						p = this.startEvent !== null,
						m = Fw(f.offset, {
							x: 0,
							y: 0
						}) >= 3;
					if (!p && !m) return;
					let {
						point: y
					} = f, {
						timestamp: v
					} = Se;
					this.history.push({
						...y,
						timestamp: v
					});
					let {
						onStart: C,
						onMove: d
					} = this.handlers;
					p || (C && C(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), d && d(this.lastMoveEvent, f)
				}, this.handlePointerMove = (f, p) => {
					this.lastMoveEvent = f, this.lastMoveEventInfo = Id(p, this.transformPagePoint), j.update(this.updatePoint, !0)
				}, this.handlePointerUp = (f, p) => {
					this.end();
					let {
						onEnd: m,
						onSessionEnd: y,
						resumeAnimation: v
					} = this.handlers;
					if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
					let C = Ld(f.type === "pointercancel" ? this.lastMoveEventInfo : Id(p, this.transformPagePoint), this.history);
					this.startEvent && m && m(f, C), y && y(f, C)
				}, !Lu(t)) return;
			this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
			let s = Hr(t),
				l = Id(s, this.transformPagePoint),
				{
					point: a
				} = l,
				{
					timestamp: u
				} = Se;
			this.history = [{
				...a,
				timestamp: u
			}];
			let {
				onSessionStart: c
			} = n;
			c && c(t, Ld(l, this.history)), this.removeListeners = We(ct(this.contextWindow, "pointermove", this.handlePointerMove), ct(this.contextWindow, "pointerup", this.handlePointerUp), ct(this.contextWindow, "pointercancel", this.handlePointerUp))
		}
		updateHandlers(t) {
			this.handlers = t
		}
		end() {
			this.removeListeners && this.removeListeners(), tt(this.updatePoint)
		}
	};

	function Id(e, t) {
		return t ? {
			point: t(e.point)
		} : e
	}

	function Bw(e, t) {
		return {
			x: e.x - t.x,
			y: e.y - t.y
		}
	}

	function Ld({
		point: e
	}, t) {
		return {
			point: e,
			delta: Bw(e, jw(t)),
			offset: Bw(e, KI(t)),
			velocity: GI(t, .1)
		}
	}

	function KI(e) {
		return e[0]
	}

	function jw(e) {
		return e[e.length - 1]
	}

	function GI(e, t) {
		if (e.length < 2) return {
			x: 0,
			y: 0
		};
		let n = e.length - 1,
			r = null,
			i = jw(e);
		for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > $e(t)));) n--;
		if (!r) return {
			x: 0,
			y: 0
		};
		let o = ft(i.timestamp - r.timestamp);
		if (o === 0) return {
			x: 0,
			y: 0
		};
		let s = {
			x: (i.x - r.x) / o,
			y: (i.y - r.y) / o
		};
		return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
	}
	var $w = 1e-4,
		YI = 1 - $w,
		QI = 1 + $w,
		Kw = .01,
		XI = 0 - Kw,
		qI = 0 + Kw;

	function Ve(e) {
		return e.max - e.min
	}

	function Gw(e, t, n) {
		return Math.abs(e - t) <= n
	}

	function Uw(e, t, n, r = .5) {
		e.origin = r, e.originPoint = G(t.min, t.max, e.origin), e.scale = Ve(n) / Ve(t), e.translate = G(n.min, n.max, e.origin) - e.originPoint, (e.scale >= YI && e.scale <= QI || isNaN(e.scale)) && (e.scale = 1), (e.translate >= XI && e.translate <= qI || isNaN(e.translate)) && (e.translate = 0)
	}

	function mo(e, t, n, r) {
		Uw(e.x, t.x, n.x, r ? r.originX : void 0), Uw(e.y, t.y, n.y, r ? r.originY : void 0)
	}

	function Hw(e, t, n) {
		e.min = n.min + t.min, e.max = e.min + Ve(t)
	}

	function Yw(e, t, n) {
		Hw(e.x, t.x, n.x), Hw(e.y, t.y, n.y)
	}

	function Ww(e, t, n) {
		e.min = t.min - n.min, e.max = e.min + Ve(t)
	}

	function ho(e, t, n) {
		Ww(e.x, t.x, n.x), Ww(e.y, t.y, n.y)
	}

	function Jw(e, {
		min: t,
		max: n
	}, r) {
		return t !== void 0 && e < t ? e = r ? G(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)), e
	}

	function Qw(e, t, n) {
		return {
			min: t !== void 0 ? e.min + t : void 0,
			max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
		}
	}

	function eS(e, {
		top: t,
		left: n,
		bottom: r,
		right: i
	}) {
		return {
			x: Qw(e.x, n, i),
			y: Qw(e.y, t, r)
		}
	}

	function Xw(e, t) {
		let n = t.min - e.min,
			r = t.max - e.max;
		return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
			min: n,
			max: r
		}
	}

	function tS(e, t) {
		return {
			x: Xw(e.x, t.x),
			y: Xw(e.y, t.y)
		}
	}

	function nS(e, t) {
		let n = .5,
			r = Ve(e),
			i = Ve(t);
		return i > r ? n = An(t.min, t.max - r, e.min) : r > i && (n = An(e.min, e.max - i, t.min)), Je(0, 1, n)
	}

	function rS(e, t) {
		let n = {};
		return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
	}
	var uc = .35;

	function iS(e = uc) {
		return e === !1 ? e = 0 : e === !0 && (e = uc), {
			x: qw(e, "left", "right"),
			y: qw(e, "top", "bottom")
		}
	}

	function qw(e, t, n) {
		return {
			min: Zw(e, t),
			max: Zw(e, n)
		}
	}

	function Zw(e, t) {
		return typeof e == "number" ? e : e[t] || 0
	}
	var oS = () => ({
			translate: 0,
			scale: 1,
			origin: 0,
			originPoint: 0
		}),
		Qr = () => ({
			x: oS(),
			y: oS()
		}),
		sS = () => ({
			min: 0,
			max: 0
		}),
		ue = () => ({
			x: sS(),
			y: sS()
		});

	function pt(e) {
		return [e("x"), e("y")]
	}

	function cc({
		top: e,
		left: t,
		right: n,
		bottom: r
	}) {
		return {
			x: {
				min: t,
				max: n
			},
			y: {
				min: e,
				max: r
			}
		}
	}

	function lS({
		x: e,
		y: t
	}) {
		return {
			top: t.min,
			right: e.max,
			bottom: t.max,
			left: e.min
		}
	}

	function aS(e, t) {
		if (!t) return e;
		let n = t({
				x: e.left,
				y: e.top
			}),
			r = t({
				x: e.right,
				y: e.bottom
			});
		return {
			top: n.y,
			left: n.x,
			bottom: r.y,
			right: r.x
		}
	}

	function Md(e) {
		return e === void 0 || e === 1
	}

	function fc({
		scale: e,
		scaleX: t,
		scaleY: n
	}) {
		return !Md(e) || !Md(t) || !Md(n)
	}

	function In(e) {
		return fc(e) || Dd(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
	}

	function Dd(e) {
		return uS(e.x) || uS(e.y)
	}

	function uS(e) {
		return e && e !== "0%"
	}

	function Xs(e, t, n) {
		let r = e - n,
			i = t * r;
		return n + i
	}

	function cS(e, t, n, r, i) {
		return i !== void 0 && (e = Xs(e, i, r)), Xs(e, n, r) + t
	}

	function Rd(e, t = 0, n = 1, r, i) {
		e.min = cS(e.min, t, n, r, i), e.max = cS(e.max, t, n, r, i)
	}

	function Nd(e, {
		x: t,
		y: n
	}) {
		Rd(e.x, t.translate, t.scale, t.originPoint), Rd(e.y, n.translate, n.scale, n.originPoint)
	}
	var fS = .999999999999,
		pS = 1.0000000000001;

	function dS(e, t, n, r = !1) {
		let i = n.length;
		if (!i) return;
		t.x = t.y = 1;
		let o, s;
		for (let l = 0; l < i; l++) {
			o = n[l], s = o.projectionDelta;
			let {
				visualElement: a
			} = o.options;
			a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Xr(e, {
				x: -o.scroll.offset.x,
				y: -o.scroll.offset.y
			}), s && (t.x *= s.x.scale, t.y *= s.y.scale, Nd(e, s)), r && In(o.latestValues) && Xr(e, o.latestValues))
		}
		t.x < pS && t.x > fS && (t.x = 1), t.y < pS && t.y > fS && (t.y = 1)
	}

	function hr(e, t) {
		e.min = e.min + t, e.max = e.max + t
	}

	function mS(e, t, n, r, i = .5) {
		let o = G(e.min, e.max, i);
		Rd(e, t, n, o, r)
	}

	function Xr(e, t) {
		mS(e.x, t.x, t.scaleX, t.scale, t.originX), mS(e.y, t.y, t.scaleY, t.scale, t.originY)
	}

	function Vd(e, t) {
		return cc(aS(e.getBoundingClientRect(), t))
	}

	function hS(e, t, n) {
		let r = Vd(e, n),
			{
				scroll: i
			} = t;
		return i && (hr(r.x, i.offset.x), hr(r.y, i.offset.y)), r
	}
	var pc = ({
		current: e
	}) => e ? e.ownerDocument.defaultView : null;
	var ZI = new WeakMap,
		dc = class {
			constructor(t) {
				this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
					x: 0,
					y: 0
				}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ue(), this.visualElement = t
			}
			start(t, {
				snapToCursor: n = !1
			} = {}) {
				let {
					presenceContext: r
				} = this.visualElement;
				if (r && r.isPresent === !1) return;
				let i = c => {
						let {
							dragSnapToOrigin: f
						} = this.getProps();
						f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Hr(c, "page").point)
					},
					o = (c, f) => {
						var p;
						let {
							drag: m,
							dragPropagation: y,
							onDragStart: v
						} = this.getProps();
						if (m && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = rd(m), !this.openGlobalLock)) return;
						this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), pt(d => {
							let h = this.getAxisMotionValue(d).get() || 0;
							if (et.test(h)) {
								let {
									projection: g
								} = this.visualElement;
								if (g && g.layout) {
									let k = g.layout.layoutBox[d];
									k && (h = Ve(k) * (parseFloat(h) / 100))
								}
							}
							this.originPoint[d] = h
						}), v && j.postRender(() => v(c, f)), (p = this.removeWillChange) === null || p === void 0 || p.call(this), this.removeWillChange = Qs(this.visualElement, "transform");
						let {
							animationState: C
						} = this.visualElement;
						C && C.setActive("whileDrag", !0)
					},
					s = (c, f) => {
						let {
							dragPropagation: p,
							dragDirectionLock: m,
							onDirectionLock: y,
							onDrag: v
						} = this.getProps();
						if (!p && !this.openGlobalLock) return;
						let {
							offset: C
						} = f;
						if (m && this.currentDirection === null) {
							this.currentDirection = JI(C), this.currentDirection !== null && y && y(this.currentDirection);
							return
						}
						this.updateAxis("x", f.point, C), this.updateAxis("y", f.point, C), this.visualElement.render(), v && v(c, f)
					},
					l = (c, f) => this.stop(c, f),
					a = () => pt(c => {
						var f;
						return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
					}),
					{
						dragSnapToOrigin: u
					} = this.getProps();
				this.panSession = new po(t, {
					onSessionStart: i,
					onStart: o,
					onMove: s,
					onSessionEnd: l,
					resumeAnimation: a
				}, {
					transformPagePoint: this.visualElement.getTransformPagePoint(),
					dragSnapToOrigin: u,
					contextWindow: pc(this.visualElement)
				})
			}
			stop(t, n) {
				var r;
				(r = this.removeWillChange) === null || r === void 0 || r.call(this);
				let i = this.isDragging;
				if (this.cancel(), !i) return;
				let {
					velocity: o
				} = n;
				this.startAnimation(o);
				let {
					onDragEnd: s
				} = this.getProps();
				s && j.postRender(() => s(t, n))
			}
			cancel() {
				this.isDragging = !1;
				let {
					projection: t,
					animationState: n
				} = this.visualElement;
				t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
				let {
					dragPropagation: r
				} = this.getProps();
				!r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
			}
			updateAxis(t, n, r) {
				let {
					drag: i
				} = this.getProps();
				if (!r || !mc(t, i, this.currentDirection)) return;
				let o = this.getAxisMotionValue(t),
					s = this.originPoint[t] + r[t];
				this.constraints && this.constraints[t] && (s = Jw(s, this.constraints[t], this.elastic[t])), o.set(s)
			}
			resolveConstraints() {
				var t;
				let {
					dragConstraints: n,
					dragElastic: r
				} = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
				n && Sn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = eS(i.layoutBox, n) : this.constraints = !1, this.elastic = iS(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && pt(s => {
					this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = rS(i.layoutBox[s], this.constraints[s]))
				})
			}
			resolveRefConstraints() {
				let {
					dragConstraints: t,
					onMeasureDragConstraints: n
				} = this.getProps();
				if (!t || !Sn(t)) return !1;
				let r = t.current;
				Pn(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
				let {
					projection: i
				} = this.visualElement;
				if (!i || !i.layout) return !1;
				let o = hS(r, i.root, this.visualElement.getTransformPagePoint()),
					s = tS(i.layout.layoutBox, o);
				if (n) {
					let l = n(lS(s));
					this.hasMutatedConstraints = !!l, l && (s = cc(l))
				}
				return s
			}
			startAnimation(t) {
				let {
					drag: n,
					dragMomentum: r,
					dragElastic: i,
					dragTransition: o,
					dragSnapToOrigin: s,
					onDragTransitionEnd: l
				} = this.getProps(), a = this.constraints || {}, u = pt(c => {
					if (!mc(c, n, this.currentDirection)) return;
					let f = a && a[c] || {};
					s && (f = {
						min: 0,
						max: 0
					});
					let p = i ? 200 : 1e6,
						m = i ? 40 : 1e7,
						y = {
							type: "inertia",
							velocity: r ? t[c] : 0,
							bounceStiffness: p,
							bounceDamping: m,
							timeConstant: 750,
							restDelta: 1,
							restSpeed: 10,
							...o,
							...f
						};
					return this.startAxisValueAnimation(c, y)
				});
				return Promise.all(u).then(l)
			}
			startAxisValueAnimation(t, n) {
				let r = this.getAxisMotionValue(t);
				return r.start(fo(t, r, 0, n, this.visualElement, !1, Qs(this.visualElement, t)))
			}
			stopAnimation() {
				pt(t => this.getAxisMotionValue(t).stop())
			}
			pauseAnimation() {
				pt(t => {
					var n;
					return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
				})
			}
			getAnimationState(t) {
				var n;
				return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
			}
			getAxisMotionValue(t) {
				let n = `_drag${t.toUpperCase()}`,
					r = this.visualElement.getProps(),
					i = r[n];
				return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
			}
			snapToCursor(t) {
				pt(n => {
					let {
						drag: r
					} = this.getProps();
					if (!mc(n, r, this.currentDirection)) return;
					let {
						projection: i
					} = this.visualElement, o = this.getAxisMotionValue(n);
					if (i && i.layout) {
						let {
							min: s,
							max: l
						} = i.layout.layoutBox[n];
						o.set(t[n] - G(s, l, .5))
					}
				})
			}
			scalePositionWithinConstraints() {
				if (!this.visualElement.current) return;
				let {
					drag: t,
					dragConstraints: n
				} = this.getProps(), {
					projection: r
				} = this.visualElement;
				if (!Sn(n) || !r || !this.constraints) return;
				this.stopAnimation();
				let i = {
					x: 0,
					y: 0
				};
				pt(s => {
					let l = this.getAxisMotionValue(s);
					if (l && this.constraints !== !1) {
						let a = l.get();
						i[s] = nS({
							min: a,
							max: a
						}, this.constraints[s])
					}
				});
				let {
					transformTemplate: o
				} = this.visualElement.getProps();
				this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), pt(s => {
					if (!mc(s, t, null)) return;
					let l = this.getAxisMotionValue(s),
						{
							min: a,
							max: u
						} = this.constraints[s];
					l.set(G(a, u, i[s]))
				})
			}
			addListeners() {
				if (!this.visualElement.current) return;
				ZI.set(this.visualElement, this);
				let t = this.visualElement.current,
					n = ct(t, "pointerdown", a => {
						let {
							drag: u,
							dragListener: c = !0
						} = this.getProps();
						u && c && this.start(a)
					}),
					r = () => {
						let {
							dragConstraints: a
						} = this.getProps();
						Sn(a) && a.current && (this.constraints = this.resolveRefConstraints())
					},
					{
						projection: i
					} = this.visualElement,
					o = i.addEventListener("measure", r);
				i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), j.read(r);
				let s = ut(window, "resize", () => this.scalePositionWithinConstraints()),
					l = i.addEventListener("didUpdate", ({
						delta: a,
						hasLayoutChanged: u
					}) => {
						this.isDragging && u && (pt(c => {
							let f = this.getAxisMotionValue(c);
							f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate))
						}), this.visualElement.render())
					});
				return () => {
					s(), n(), o(), l && l()
				}
			}
			getProps() {
				let t = this.visualElement.getProps(),
					{
						drag: n = !1,
						dragDirectionLock: r = !1,
						dragPropagation: i = !1,
						dragConstraints: o = !1,
						dragElastic: s = uc,
						dragMomentum: l = !0
					} = t;
				return {
					...t,
					drag: n,
					dragDirectionLock: r,
					dragPropagation: i,
					dragConstraints: o,
					dragElastic: s,
					dragMomentum: l
				}
			}
		};

	function mc(e, t, n) {
		return (t === !0 || t === e) && (n === null || n === e)
	}

	function JI(e, t = 10) {
		let n = null;
		return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
	}
	var hc = class extends Le {
		constructor(t) {
			super(t), this.removeGroupControls = te, this.removeListeners = te, this.controls = new dc(t)
		}
		mount() {
			let {
				dragControls: t
			} = this.node.getProps();
			t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || te
		}
		unmount() {
			this.removeGroupControls(), this.removeListeners()
		}
	};
	var gS = e => (t, n) => {
			e && j.postRender(() => e(t, n))
		},
		gc = class extends Le {
			constructor() {
				super(...arguments), this.removePointerDownListener = te
			}
			onPointerDown(t) {
				this.session = new po(t, this.createPanHandlers(), {
					transformPagePoint: this.node.getTransformPagePoint(),
					contextWindow: pc(this.node)
				})
			}
			createPanHandlers() {
				let {
					onPanSessionStart: t,
					onPanStart: n,
					onPan: r,
					onPanEnd: i
				} = this.node.getProps();
				return {
					onSessionStart: gS(t),
					onStart: gS(n),
					onMove: r,
					onEnd: (o, s) => {
						delete this.session, i && j.postRender(() => i(o, s))
					}
				}
			}
			mount() {
				this.removePointerDownListener = ct(this.node.current, "pointerdown", t => this.onPointerDown(t))
			}
			update() {
				this.session && this.session.updateHandlers(this.createPanHandlers())
			}
			unmount() {
				this.removePointerDownListener(), this.session && this.session.end()
			}
		};
	var wS = q(Di(), 1),
		qs = q(se(), 1);
	var gr = q(se(), 1);

	function yS() {
		let e = (0, gr.useContext)(Bi);
		if (e === null) return [!0, null];
		let {
			isPresent: t,
			onExitComplete: n,
			register: r
		} = e, i = (0, gr.useId)();
		(0, gr.useEffect)(() => r(i), []);
		let o = (0, gr.useCallback)(() => n && n(i), [i, n]);
		return !t && n ? [!1, o] : [!0]
	}
	var go = {
		hasAnimatedSinceResize: !0,
		hasEverUpdated: !1
	};

	function vS(e, t) {
		return t.max === t.min ? 0 : e / (t.max - t.min) * 100
	}
	var yo = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (_.test(e)) e = parseFloat(e);
				else return e;
			let n = vS(e, t.target.x),
				r = vS(e, t.target.y);
			return `${n}% ${r}%`
		}
	};
	var xS = {
		correct: (e, {
			treeScale: t,
			projectionDelta: n
		}) => {
			let r = e,
				i = nt.parse(e);
			if (i.length > 5) return r;
			let o = nt.createTransformer(e),
				s = typeof i[0] != "number" ? 1 : 0,
				l = n.x.scale * t.x,
				a = n.y.scale * t.y;
			i[0 + s] /= l, i[1 + s] /= a;
			let u = G(l, a, .5);
			return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
		}
	};
	var Od = class extends qs.Component {
		componentDidMount() {
			let {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
				layoutId: i
			} = this.props, {
				projection: o
			} = t;
			u1(eL), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
				this.safeToRemove()
			}), o.setOptions({
				...o.options,
				onExitComplete: () => this.safeToRemove()
			})), go.hasEverUpdated = !0
		}
		getSnapshotBeforeUpdate(t) {
			let {
				layoutDependency: n,
				visualElement: r,
				drag: i,
				isPresent: o
			} = this.props, s = r.projection;
			return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || j.postRender(() => {
				let l = s.getStack();
				(!l || !l.members.length) && this.safeToRemove()
			}))), null
		}
		componentDidUpdate() {
			let {
				projection: t
			} = this.props.visualElement;
			t && (t.root.didUpdate(), Hi.postRender(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove()
			}))
		}
		componentWillUnmount() {
			let {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r
			} = this.props, {
				projection: i
			} = t;
			i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
		}
		safeToRemove() {
			let {
				safeToRemove: t
			} = this.props;
			t && t()
		}
		render() {
			return null
		}
	};

	function yc(e) {
		let [t, n] = yS(), r = (0, qs.useContext)(hu);
		return (0, wS.jsx)(Od, {
			...e,
			layoutGroup: r,
			switchLayoutGroup: (0, qs.useContext)(fu),
			isPresent: t,
			safeToRemove: n
		})
	}
	var eL = {
		borderRadius: {
			...yo,
			applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
		},
		borderTopLeftRadius: yo,
		borderTopRightRadius: yo,
		borderBottomLeftRadius: yo,
		borderBottomRightRadius: yo,
		boxShadow: xS
	};
	var ES = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
		tL = ES.length,
		SS = e => typeof e == "string" ? parseFloat(e) : e,
		kS = e => typeof e == "number" || _.test(e);

	function PS(e, t, n, r, i, o) {
		i ? (e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, nL(r)), e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, rL(r))) : o && (e.opacity = G(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
		for (let s = 0; s < tL; s++) {
			let l = `border${ES[s]}Radius`,
				a = CS(t, l),
				u = CS(n, l);
			if (a === void 0 && u === void 0) continue;
			a || (a = 0), u || (u = 0), a === 0 || u === 0 || kS(a) === kS(u) ? (e[l] = Math.max(G(SS(a), SS(u), r), 0), (et.test(u) || et.test(a)) && (e[l] += "%")) : e[l] = u
		}(t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r))
	}

	function CS(e, t) {
		return e[t] !== void 0 ? e[t] : e.borderRadius
	}
	var nL = TS(0, .5, qu),
		rL = TS(.5, .95, te);

	function TS(e, t, n) {
		return r => r < e ? 0 : r > t ? 1 : n(An(e, t, r))
	}

	function AS(e, t) {
		e.min = t.min, e.max = t.max
	}

	function Et(e, t) {
		AS(e.x, t.x), AS(e.y, t.y)
	}

	function bd(e, t) {
		e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
	}

	function IS(e, t, n, r, i) {
		return e -= t, e = Xs(e, 1 / n, r), i !== void 0 && (e = Xs(e, 1 / i, r)), e
	}

	function iL(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
		if (et.test(t) && (t = parseFloat(t), t = G(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
		let l = G(o.min, o.max, r);
		e === o && (l -= t), e.min = IS(e.min, t, n, l, i), e.max = IS(e.max, t, n, l, i)
	}

	function LS(e, t, [n, r, i], o, s) {
		iL(e, t[n], t[r], t[i], t.scale, o, s)
	}
	var oL = ["x", "scaleX", "originX"],
		sL = ["y", "scaleY", "originY"];

	function _d(e, t, n, r) {
		LS(e.x, t, oL, n ? n.x : void 0, r ? r.x : void 0), LS(e.y, t, sL, n ? n.y : void 0, r ? r.y : void 0)
	}

	function MS(e) {
		return e.translate === 0 && e.scale === 1
	}

	function zd(e) {
		return MS(e.x) && MS(e.y)
	}

	function DS(e, t) {
		return e.min === t.min && e.max === t.max
	}

	function NS(e, t) {
		return DS(e.x, t.x) && DS(e.y, t.y)
	}

	function RS(e, t) {
		return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
	}

	function Fd(e, t) {
		return RS(e.x, t.x) && RS(e.y, t.y)
	}

	function Bd(e) {
		return Ve(e.x) / Ve(e.y)
	}

	function jd(e, t) {
		return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
	}
	var vc = class {
		constructor() {
			this.members = []
		}
		add(t) {
			lr(this.members, t), t.scheduleRender()
		}
		remove(t) {
			if (ar(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
				let n = this.members[this.members.length - 1];
				n && this.promote(n)
			}
		}
		relegate(t) {
			let n = this.members.findIndex(i => t === i);
			if (n === 0) return !1;
			let r;
			for (let i = n; i >= 0; i--) {
				let o = this.members[i];
				if (o.isPresent !== !1) {
					r = o;
					break
				}
			}
			return r ? (this.promote(r), !0) : !1
		}
		promote(t, n) {
			let r = this.lead;
			if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
				r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
				let {
					crossfade: i
				} = t.options;
				i === !1 && r.hide()
			}
		}
		exitAnimationComplete() {
			this.members.forEach(t => {
				let {
					options: n,
					resumingFrom: r
				} = t;
				n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
			})
		}
		scheduleRender() {
			this.members.forEach(t => {
				t.instance && t.scheduleRender(!1)
			})
		}
		removeLeadSnapshot() {
			this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
		}
	};

	function VS(e, t, n) {
		let r = "",
			i = e.x.translate / t.x,
			o = e.y.translate / t.y,
			s = n?.z || 0;
		if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
			let {
				transformPerspective: u,
				rotate: c,
				rotateX: f,
				rotateY: p,
				skewX: m,
				skewY: y
			} = n;
			u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), p && (r += `rotateY(${p}deg) `), m && (r += `skewX(${m}deg) `), y && (r += `skewY(${y}deg) `)
		}
		let l = e.x.scale * t.x,
			a = e.y.scale * t.y;
		return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none"
	}
	var OS = (e, t) => e.depth - t.depth;
	var xc = class {
		constructor() {
			this.children = [], this.isDirty = !1
		}
		add(t) {
			lr(this.children, t), this.isDirty = !0
		}
		remove(t) {
			ar(this.children, t), this.isDirty = !0
		}
		forEach(t) {
			this.isDirty && this.children.sort(OS), this.isDirty = !1, this.children.forEach(t)
		}
	};

	function bS(e, t) {
		let n = Ct.now(),
			r = ({
				timestamp: i
			}) => {
				let o = i - n;
				o >= t && (tt(r), e(o - t))
			};
		return j.read(r, !0), () => tt(r)
	}

	function _S(e) {
		return e instanceof SVGElement && e.tagName !== "svg"
	}

	function zS(e, t, n) {
		let r = oe(e) ? e : Kt(e);
		return r.start(fo("", r, t, n)), r.animation
	}
	var qr = {
			type: "projectionFrame",
			totalNodes: 0,
			resolvedTargetDeltas: 0,
			recalculatedProjection: 0
		},
		Zs = typeof window < "u" && window.MotionDebug !== void 0,
		Ud = ["", "X", "Y", "Z"],
		lL = {
			visibility: "hidden"
		},
		FS = 1e3,
		aL = 0;

	function Hd(e, t, n, r) {
		let {
			latestValues: i
		} = t;
		i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
	}

	function GS(e) {
		if (e.hasCheckedOptimisedAppear = !0, e.root === e) return !1;
		let {
			visualElement: t
		} = e.options;
		return t ? window.MotionHasOptimisedTransformAnimation(rc(t)) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? GS(e.parent) : !1 : !1
	}

	function wc({
		attachResizeListener: e,
		defaultParent: t,
		measureScroll: n,
		checkIsScrollRoot: r,
		resetTransform: i
	}) {
		return class {
			constructor(s = {}, l = t?.()) {
				this.id = aL++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
					x: 1,
					y: 1
				}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
					this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
				}, this.updateProjection = () => {
					this.projectionUpdateScheduled = !1, Zs && (qr.totalNodes = qr.resolvedTargetDeltas = qr.recalculatedProjection = 0), this.nodes.forEach(fL), this.nodes.forEach(gL), this.nodes.forEach(yL), this.nodes.forEach(pL), Zs && window.MotionDebug.record(qr)
				}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
				for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
				this.root === this && (this.nodes = new xc)
			}
			addEventListener(s, l) {
				return this.eventHandlers.has(s) || this.eventHandlers.set(s, new dr), this.eventHandlers.get(s).add(l)
			}
			notifyListeners(s, ...l) {
				let a = this.eventHandlers.get(s);
				a && a.notify(...l)
			}
			hasListeners(s) {
				return this.eventHandlers.has(s)
			}
			mount(s, l = this.root.hasTreeAnimated) {
				if (this.instance) return;
				this.isSVG = _S(s), this.instance = s;
				let {
					layoutId: a,
					layout: u,
					visualElement: c
				} = this.options;
				if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
					let f, p = () => this.root.updateBlockedByResize = !1;
					e(s, () => {
						this.root.updateBlockedByResize = !0, f && f(), f = bS(p, 250), go.hasAnimatedSinceResize && (go.hasAnimatedSinceResize = !1, this.nodes.forEach(jS))
					})
				}
				a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({
					delta: f,
					hasLayoutChanged: p,
					hasRelativeTargetChanged: m,
					layout: y
				}) => {
					if (this.isTreeAnimationBlocked()) {
						this.target = void 0, this.relativeTarget = void 0;
						return
					}
					let v = this.options.transition || c.getDefaultTransition() || kL,
						{
							onLayoutAnimationStart: C,
							onLayoutAnimationComplete: d
						} = c.getProps(),
						h = !this.targetLayout || !Fd(this.targetLayout, y) || m,
						g = !p && m;
					if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || p && (h || !this.currentAnimation)) {
						this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, g);
						let k = {
							...oo(v, "layout"),
							onPlay: C,
							onComplete: d
						};
						(c.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k)
					} else p || jS(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
					this.targetLayout = y
				})
			}
			unmount() {
				this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
				let s = this.getStack();
				s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, tt(this.updateProjection)
			}
			blockUpdate() {
				this.updateManuallyBlocked = !0
			}
			unblockUpdate() {
				this.updateManuallyBlocked = !1
			}
			isUpdateBlocked() {
				return this.updateManuallyBlocked || this.updateBlockedByResize
			}
			isTreeAnimationBlocked() {
				return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
			}
			startUpdate() {
				this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(vL), this.animationId++)
			}
			getTransformTemplate() {
				let {
					visualElement: s
				} = this.options;
				return s && s.getProps().transformTemplate
			}
			willUpdate(s = !0) {
				if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
					this.options.onExitComplete && this.options.onExitComplete();
					return
				}
				if (window.MotionHandoffCancelAll && GS(this) && window.MotionHandoffCancelAll(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
				this.isLayoutDirty = !0;
				for (let c = 0; c < this.path.length; c++) {
					let f = this.path[c];
					f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
				}
				let {
					layoutId: l,
					layout: a
				} = this.options;
				if (l === void 0 && !a) return;
				let u = this.getTransformTemplate();
				this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
			}
			update() {
				if (this.updateScheduled = !1, this.isUpdateBlocked()) {
					this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(BS);
					return
				}
				this.isUpdating || this.nodes.forEach(dL), this.isUpdating = !1, this.nodes.forEach(hL), this.nodes.forEach(uL), this.nodes.forEach(cL), this.clearAllSnapshots();
				let l = Ct.now();
				Se.delta = Je(0, 1e3 / 60, l - Se.timestamp), Se.timestamp = l, Se.isProcessing = !0, Iu.update.process(Se), Iu.preRender.process(Se), Iu.render.process(Se), Se.isProcessing = !1
			}
			didUpdate() {
				this.updateScheduled || (this.updateScheduled = !0, Hi.read(this.scheduleUpdate))
			}
			clearAllSnapshots() {
				this.nodes.forEach(mL), this.sharedNodes.forEach(xL)
			}
			scheduleUpdateProjection() {
				this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, j.preRender(this.updateProjection, !1, !0))
			}
			scheduleCheckAfterUnmount() {
				j.postRender(() => {
					this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
				})
			}
			updateSnapshot() {
				this.snapshot || !this.instance || (this.snapshot = this.measure())
			}
			updateLayout() {
				if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
				if (this.resumeFrom && !this.resumeFrom.instance)
					for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
				let s = this.layout;
				this.layout = this.measure(!1), this.layoutCorrected = ue(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
				let {
					visualElement: l
				} = this.options;
				l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
			}
			updateScroll(s = "measure") {
				let l = !!(this.options.layoutScroll && this.instance);
				if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l) {
					let a = r(this.instance);
					this.scroll = {
						animationId: this.root.animationId,
						phase: s,
						isRoot: a,
						offset: n(this.instance),
						wasRoot: this.scroll ? this.scroll.isRoot : a
					}
				}
			}
			resetTransform() {
				if (!i) return;
				let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
					l = this.projectionDelta && !zd(this.projectionDelta),
					a = this.getTransformTemplate(),
					u = a ? a(this.latestValues, "") : void 0,
					c = u !== this.prevTransformTemplateValue;
				s && (l || In(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
			}
			measure(s = !0) {
				let l = this.measurePageBox(),
					a = this.removeElementScroll(l);
				return s && (a = this.removeTransform(a)), CL(a), {
					animationId: this.root.animationId,
					measuredBox: l,
					layoutBox: a,
					latestValues: {},
					source: this.id
				}
			}
			measurePageBox() {
				var s;
				let {
					visualElement: l
				} = this.options;
				if (!l) return ue();
				let a = l.measureViewportBox();
				if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(EL))) {
					let {
						scroll: c
					} = this.root;
					c && (hr(a.x, c.offset.x), hr(a.y, c.offset.y))
				}
				return a
			}
			removeElementScroll(s) {
				var l;
				let a = ue();
				if (Et(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot) return a;
				for (let u = 0; u < this.path.length; u++) {
					let c = this.path[u],
						{
							scroll: f,
							options: p
						} = c;
					c !== this.root && f && p.layoutScroll && (f.wasRoot && Et(a, s), hr(a.x, f.offset.x), hr(a.y, f.offset.y))
				}
				return a
			}
			applyTransform(s, l = !1) {
				let a = ue();
				Et(a, s);
				for (let u = 0; u < this.path.length; u++) {
					let c = this.path[u];
					!l && c.options.layoutScroll && c.scroll && c !== c.root && Xr(a, {
						x: -c.scroll.offset.x,
						y: -c.scroll.offset.y
					}), In(c.latestValues) && Xr(a, c.latestValues)
				}
				return In(this.latestValues) && Xr(a, this.latestValues), a
			}
			removeTransform(s) {
				let l = ue();
				Et(l, s);
				for (let a = 0; a < this.path.length; a++) {
					let u = this.path[a];
					if (!u.instance || !In(u.latestValues)) continue;
					fc(u.latestValues) && u.updateSnapshot();
					let c = ue(),
						f = u.measurePageBox();
					Et(c, f), _d(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
				}
				return In(this.latestValues) && _d(l, this.latestValues), l
			}
			setTargetDelta(s) {
				this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
			}
			setOptions(s) {
				this.options = {
					...this.options,
					...s,
					crossfade: s.crossfade !== void 0 ? s.crossfade : !0
				}
			}
			clearMeasurements() {
				this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
			}
			forceRelativeParentToResolveTarget() {
				this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp && this.relativeParent.resolveTargetDelta(!0)
			}
			resolveTargetDelta(s = !1) {
				var l;
				let a = this.getLead();
				this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
				let u = !!this.resumingFrom || this !== a;
				if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
				let {
					layout: f,
					layoutId: p
				} = this.options;
				if (!(!this.layout || !(f || p))) {
					if (this.resolvedRelativeTargetAt = Se.timestamp, !this.targetDelta && !this.relativeTarget) {
						let m = this.getClosestProjectingParent();
						m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), ho(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
					}
					if (!(!this.relativeTarget && !this.targetDelta)) {
						if (this.target || (this.target = ue(), this.targetWithTransforms = ue()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Yw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Et(this.target, this.layout.layoutBox), Nd(this.target, this.targetDelta)) : Et(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
							this.attemptToResolveRelativeTarget = !1;
							let m = this.getClosestProjectingParent();
							m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), ho(this.relativeTargetOrigin, this.target, m.target), Et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
						}
						Zs && qr.resolvedTargetDeltas++
					}
				}
			}
			getClosestProjectingParent() {
				if (!(!this.parent || fc(this.parent.latestValues) || Dd(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
			}
			isProjecting() {
				return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
			}
			calcProjection() {
				var s;
				let l = this.getLead(),
					a = !!this.resumingFrom || this !== l,
					u = !0;
				if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Se.timestamp && (u = !1), u) return;
				let {
					layout: c,
					layoutId: f
				} = this.options;
				if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f)) return;
				Et(this.layoutCorrected, this.layout.layoutBox);
				let p = this.treeScale.x,
					m = this.treeScale.y;
				dS(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = ue());
				let {
					target: y
				} = l;
				if (!y) {
					this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
					return
				}!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (bd(this.prevProjectionDelta.x, this.projectionDelta.x), bd(this.prevProjectionDelta.y, this.projectionDelta.y)), mo(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== m || !jd(this.projectionDelta.x, this.prevProjectionDelta.x) || !jd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), Zs && qr.recalculatedProjection++
			}
			hide() {
				this.isVisible = !1
			}
			show() {
				this.isVisible = !0
			}
			scheduleRender(s = !0) {
				var l;
				if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), s) {
					let a = this.getStack();
					a && a.scheduleRender()
				}
				this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
			}
			createProjectionDeltas() {
				this.prevProjectionDelta = Qr(), this.projectionDelta = Qr(), this.projectionDeltaWithTransform = Qr()
			}
			setAnimationOrigin(s, l = !1) {
				let a = this.snapshot,
					u = a ? a.latestValues : {},
					c = {
						...this.latestValues
					},
					f = Qr();
				(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
				let p = ue(),
					m = a ? a.source : void 0,
					y = this.layout ? this.layout.source : void 0,
					v = m !== y,
					C = this.getStack(),
					d = !C || C.members.length <= 1,
					h = !!(v && !d && this.options.crossfade === !0 && !this.path.some(SL));
				this.animationProgress = 0;
				let g;
				this.mixTargetDelta = k => {
					let E = k / 1e3;
					US(f.x, s.x, E), US(f.y, s.y, E), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ho(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), wL(this.relativeTarget, this.relativeTargetOrigin, p, E), g && NS(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = ue()), Et(g, this.relativeTarget)), v && (this.animationValues = c, PS(c, u, this.latestValues, E, h, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E
				}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
			}
			startAnimation(s) {
				this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (tt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = j.update(() => {
					go.hasAnimatedSinceResize = !0, this.currentAnimation = zS(0, FS, {
						...s,
						onUpdate: l => {
							this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l)
						},
						onComplete: () => {
							s.onComplete && s.onComplete(), this.completeAnimation()
						}
					}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
				})
			}
			completeAnimation() {
				this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
				let s = this.getStack();
				s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
			}
			finishAnimation() {
				this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(FS), this.currentAnimation.stop()), this.completeAnimation()
			}
			applyTransformsToTarget() {
				let s = this.getLead(),
					{
						targetWithTransforms: l,
						target: a,
						layout: u,
						latestValues: c
					} = s;
				if (!(!l || !a || !u)) {
					if (this !== s && this.layout && u && YS(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
						a = this.target || ue();
						let f = Ve(this.layout.layoutBox.x);
						a.x.min = s.target.x.min, a.x.max = a.x.min + f;
						let p = Ve(this.layout.layoutBox.y);
						a.y.min = s.target.y.min, a.y.max = a.y.min + p
					}
					Et(l, a), Xr(l, c), mo(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
				}
			}
			registerSharedNode(s, l) {
				this.sharedNodes.has(s) || this.sharedNodes.set(s, new vc), this.sharedNodes.get(s).add(l);
				let u = l.options.initialPromotionConfig;
				l.promote({
					transition: u ? u.transition : void 0,
					preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
				})
			}
			isLead() {
				let s = this.getStack();
				return s ? s.lead === this : !0
			}
			getLead() {
				var s;
				let {
					layoutId: l
				} = this.options;
				return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
			}
			getPrevLead() {
				var s;
				let {
					layoutId: l
				} = this.options;
				return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
			}
			getStack() {
				let {
					layoutId: s
				} = this.options;
				if (s) return this.root.sharedNodes.get(s)
			}
			promote({
				needsReset: s,
				transition: l,
				preserveFollowOpacity: a
			} = {}) {
				let u = this.getStack();
				u && u.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
					transition: l
				})
			}
			relegate() {
				let s = this.getStack();
				return s ? s.relegate(this) : !1
			}
			resetSkewAndRotation() {
				let {
					visualElement: s
				} = this.options;
				if (!s) return;
				let l = !1,
					{
						latestValues: a
					} = s;
				if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l) return;
				let u = {};
				a.z && Hd("z", s, u, this.animationValues);
				for (let c = 0; c < Ud.length; c++) Hd(`rotate${Ud[c]}`, s, u, this.animationValues), Hd(`skew${Ud[c]}`, s, u, this.animationValues);
				s.render();
				for (let c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
				s.scheduleRender()
			}
			getProjectionStyles(s) {
				var l, a;
				if (!this.instance || this.isSVG) return;
				if (!this.isVisible) return lL;
				let u = {
						visibility: ""
					},
					c = this.getTransformTemplate();
				if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = io(s?.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
				let f = this.getLead();
				if (!this.projectionDelta || !this.layout || !f.target) {
					let v = {};
					return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = io(s?.pointerEvents) || ""), this.hasProjected && !In(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v
				}
				let p = f.animationValues || f.latestValues;
				this.applyTransformsToTarget(), u.transform = VS(this.projectionDeltaWithTransform, this.treeScale, p), c && (u.transform = c(p, u.transform));
				let {
					x: m,
					y
				} = this.projectionDelta;
				u.transformOrigin = `${m.origin*100}% ${y.origin*100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = p.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : u.opacity = f === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
				for (let v in Ki) {
					if (p[v] === void 0) continue;
					let {
						correct: C,
						applyTo: d
					} = Ki[v], h = u.transform === "none" ? p[v] : C(p[v], f);
					if (d) {
						let g = d.length;
						for (let k = 0; k < g; k++) u[d[k]] = h
					} else u[v] = h
				}
				return this.options.layoutId && (u.pointerEvents = f === this ? io(s?.pointerEvents) || "" : "none"), u
			}
			clearSnapshot() {
				this.resumeFrom = this.snapshot = void 0
			}
			resetTree() {
				this.root.nodes.forEach(s => {
					var l;
					return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
				}), this.root.nodes.forEach(BS), this.root.sharedNodes.clear()
			}
		}
	}

	function uL(e) {
		e.updateLayout()
	}

	function cL(e) {
		var t;
		let n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
		if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
			let {
				layoutBox: r,
				measuredBox: i
			} = e.layout, {
				animationType: o
			} = e.options, s = n.source !== e.layout.source;
			o === "size" ? pt(f => {
				let p = s ? n.measuredBox[f] : n.layoutBox[f],
					m = Ve(p);
				p.min = r[f].min, p.max = p.min + m
			}) : YS(o, n.layoutBox, r) && pt(f => {
				let p = s ? n.measuredBox[f] : n.layoutBox[f],
					m = Ve(r[f]);
				p.max = p.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + m)
			});
			let l = Qr();
			mo(l, r, n.layoutBox);
			let a = Qr();
			s ? mo(a, e.applyTransform(i, !0), n.measuredBox) : mo(a, r, n.layoutBox);
			let u = !zd(l),
				c = !1;
			if (!e.resumeFrom) {
				let f = e.getClosestProjectingParent();
				if (f && !f.resumeFrom) {
					let {
						snapshot: p,
						layout: m
					} = f;
					if (p && m) {
						let y = ue();
						ho(y, n.layoutBox, p.layoutBox);
						let v = ue();
						ho(v, r, m.layoutBox), Fd(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f)
					}
				}
			}
			e.notifyListeners("didUpdate", {
				layout: r,
				snapshot: n,
				delta: a,
				layoutDelta: l,
				hasLayoutChanged: u,
				hasRelativeTargetChanged: c
			})
		} else if (e.isLead()) {
			let {
				onExitComplete: r
			} = e.options;
			r && r()
		}
		e.options.transition = void 0
	}

	function fL(e) {
		Zs && qr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
	}

	function pL(e) {
		e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
	}

	function mL(e) {
		e.clearSnapshot()
	}

	function BS(e) {
		e.clearMeasurements()
	}

	function dL(e) {
		e.isLayoutDirty = !1
	}

	function hL(e) {
		let {
			visualElement: t
		} = e.options;
		t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
	}

	function jS(e) {
		e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
	}

	function gL(e) {
		e.resolveTargetDelta()
	}

	function yL(e) {
		e.calcProjection()
	}

	function vL(e) {
		e.resetSkewAndRotation()
	}

	function xL(e) {
		e.removeLeadSnapshot()
	}

	function US(e, t, n) {
		e.translate = G(t.translate, 0, n), e.scale = G(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
	}

	function HS(e, t, n, r) {
		e.min = G(t.min, n.min, r), e.max = G(t.max, n.max, r)
	}

	function wL(e, t, n, r) {
		HS(e.x, t.x, n.x, r), HS(e.y, t.y, n.y, r)
	}

	function SL(e) {
		return e.animationValues && e.animationValues.opacityExit !== void 0
	}
	var kL = {
			duration: .45,
			ease: [.4, 0, .1, 1]
		},
		WS = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
		$S = WS("applewebkit/") && !WS("chrome/") ? Math.round : te;

	function KS(e) {
		e.min = $S(e.min), e.max = $S(e.max)
	}

	function CL(e) {
		KS(e.x), KS(e.y)
	}

	function YS(e, t, n) {
		return e === "position" || e === "preserve-aspect" && !Gw(Bd(t), Bd(n), .2)
	}

	function EL(e) {
		var t;
		return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
	}
	var QS = wc({
		attachResizeListener: (e, t) => ut(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop
		}),
		checkIsScrollRoot: () => !0
	});
	var Wd = {
			current: void 0
		},
		Sc = wc({
			measureScroll: e => ({
				x: e.scrollLeft,
				y: e.scrollTop
			}),
			defaultParent: () => {
				if (!Wd.current) {
					let e = new QS({});
					e.mount(window), e.setOptions({
						layoutScroll: !0
					}), Wd.current = e
				}
				return Wd.current
			},
			resetTransform: (e, t) => {
				e.style.transform = t !== void 0 ? t : "none"
			},
			checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
		});
	var XS = {
		pan: {
			Feature: gc
		},
		drag: {
			Feature: hc,
			ProjectionNode: Sc,
			MeasureLayout: yc
		}
	};
	var tk = q(se(), 1);
	var Js = {
			current: null
		},
		kc = {
			current: !1
		};

	function qS() {
		if (kc.current = !0, !!ji)
			if (window.matchMedia) {
				let e = window.matchMedia("(prefers-reduced-motion)"),
					t = () => Js.current = e.matches;
				e.addListener(t), t()
			} else Js.current = !1
	}

	function ZS(e, t, n) {
		for (let r in t) {
			let i = t[r],
				o = n[r];
			if (oe(i)) e.addValue(r, i);
			else if (oe(o)) e.addValue(r, Kt(i, {
				owner: e
			}));
			else if (o !== i)
				if (e.hasValue(r)) {
					let s = e.getValue(r);
					s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
				} else {
					let s = e.getStaticValue(r);
					e.addValue(r, Kt(s !== void 0 ? s : i, {
						owner: e
					}))
				}
		}
		for (let r in n) t[r] === void 0 && e.removeValue(r);
		return t
	}
	var $d = new WeakMap;
	var PL = [...fd, Ce, nt],
		JS = e => PL.find(Fu(e));
	var ek = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
		TL = _s.length,
		Cc = class {
			scrapeMotionValuesFromProps(t, n, r) {
				return {}
			}
			constructor({
				parent: t,
				props: n,
				presenceContext: r,
				reducedMotionConfig: i,
				blockInitialAnimation: o,
				visualState: s
			}, l = {}) {
				this.applyWillChange = !1, this.resolveKeyframes = (p, m, y, v) => new this.KeyframeResolver(p, m, y, v, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = fr, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
					this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
				}, this.isRenderScheduled = !1, this.scheduleRender = () => {
					this.isRenderScheduled || (this.isRenderScheduled = !0, j.render(this.render, !1, !0))
				};
				let {
					latestValues: a,
					renderState: u
				} = s;
				this.latestValues = a, this.baseTarget = {
					...a
				}, this.initialValues = n.initial ? {
					...a
				} : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = Ur(n), this.isVariantNode = mu(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
				let {
					willChange: c,
					...f
				} = this.scrapeMotionValuesFromProps(n, {}, this);
				for (let p in f) {
					let m = f[p];
					a[p] !== void 0 && oe(m) && m.set(a[p], !1)
				}
			}
			mount(t) {
				this.current = t, $d.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), kc.current || qS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Js.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
			}
			unmount() {
				$d.delete(this.current), this.projection && this.projection.unmount(), tt(this.notifyUpdate), tt(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
				for (let t in this.events) this.events[t].clear();
				for (let t in this.features) {
					let n = this.features[t];
					n && (n.unmount(), n.isMounted = !1)
				}
				this.current = null
			}
			bindToMotionValue(t, n) {
				let r = He.has(t),
					i = n.on("change", s => {
						this.latestValues[t] = s, this.props.onUpdate && j.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
					}),
					o = n.on("renderRequest", this.scheduleRender);
				this.valueSubscriptions.set(t, () => {
					i(), o(), n.owner && n.stop()
				})
			}
			sortNodePosition(t) {
				return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
			}
			updateFeatures() {
				let t = "animation";
				for (t in En) {
					let n = En[t];
					if (!n) continue;
					let {
						isEnabled: r,
						Feature: i
					} = n;
					if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
						let o = this.features[t];
						o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
					}
				}
			}
			triggerBuild() {
				this.build(this.renderState, this.latestValues, this.props)
			}
			measureViewportBox() {
				return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue()
			}
			getStaticValue(t) {
				return this.latestValues[t]
			}
			setStaticValue(t, n) {
				this.latestValues[t] = n
			}
			update(t, n) {
				(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
				for (let r = 0; r < ek.length; r++) {
					let i = ek[r];
					this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
					let o = "on" + i,
						s = t[o];
					s && (this.propEventSubscriptions[i] = this.on(i, s))
				}
				this.prevMotionValues = ZS(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
			}
			getProps() {
				return this.props
			}
			getVariant(t) {
				return this.props.variants ? this.props.variants[t] : void 0
			}
			getDefaultTransition() {
				return this.props.transition
			}
			getTransformPagePoint() {
				return this.props.transformPagePoint
			}
			getClosestVariantNode() {
				return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
			}
			getVariantContext(t = !1) {
				if (t) return this.parent ? this.parent.getVariantContext() : void 0;
				if (!this.isControllingVariants) {
					let r = this.parent ? this.parent.getVariantContext() || {} : {};
					return this.props.initial !== void 0 && (r.initial = this.props.initial), r
				}
				let n = {};
				for (let r = 0; r < TL; r++) {
					let i = _s[r],
						o = this.props[i];
					(kn(o) || o === !1) && (n[i] = o)
				}
				return n
			}
			addVariantChild(t) {
				let n = this.getClosestVariantNode();
				if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
			}
			addValue(t, n) {
				let r = this.values.get(t);
				n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
			}
			removeValue(t) {
				this.values.delete(t);
				let n = this.valueSubscriptions.get(t);
				n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
			}
			hasValue(t) {
				return this.values.has(t)
			}
			getValue(t, n) {
				if (this.props.values && this.props.values[t]) return this.props.values[t];
				let r = this.values.get(t);
				return r === void 0 && n !== void 0 && (r = Kt(n === null ? void 0 : n, {
					owner: this
				}), this.addValue(t, r)), r
			}
			readValue(t, n) {
				var r;
				let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
				return i != null && (typeof i == "string" && (zu(i) || _u(i)) ? i = parseFloat(i) : !JS(i) && nt.test(n) && (i = ju(t, n)), this.setBaseTarget(t, oe(i) ? i.get() : i)), oe(i) ? i.get() : i
			}
			setBaseTarget(t, n) {
				this.baseTarget[t] = n
			}
			getBaseTarget(t) {
				var n;
				let {
					initial: r
				} = this.props, i;
				if (typeof r == "string" || typeof r == "object") {
					let s = no(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
					s && (i = s[t])
				}
				if (r && i !== void 0) return i;
				let o = this.getBaseTargetFromProps(this.props, t);
				return o !== void 0 && !oe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
			}
			on(t, n) {
				return this.events[t] || (this.events[t] = new dr), this.events[t].add(n)
			}
			notify(t, ...n) {
				this.events[t] && this.events[t].notify(...n)
			}
		};
	var vo = class extends Cc {
		constructor() {
			super(...arguments), this.KeyframeResolver = ao
		}
		sortInstanceNodePosition(t, n) {
			return t.compareDocumentPosition(n) & 2 ? 1 : -1
		}
		getBaseTargetFromProps(t, n) {
			return t.style ? t.style[n] : void 0
		}
		removeValueFromRenderState(t, {
			vars: n,
			style: r
		}) {
			delete n[t], delete r[t]
		}
	};

	function AL(e) {
		return window.getComputedStyle(e)
	}
	var Ec = class extends vo {
		constructor() {
			super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = Su
		}
		readValueFromInstance(t, n) {
			if (He.has(n)) {
				let r = lo(n);
				return r && r.default || 0
			} else {
				let r = AL(t),
					i = (xu(n) ? r.getPropertyValue(n) : r[n]) || 0;
				return typeof i == "string" ? i.trim() : i
			}
		}
		measureInstanceViewportBox(t, {
			transformPagePoint: n
		}) {
			return Vd(t, n)
		}
		build(t, n, r) {
			Xi(t, n, r.transformTemplate)
		}
		scrapeMotionValuesFromProps(t, n, r) {
			return to(t, n, r)
		}
		handleChildMotionValue() {
			this.childSubscription && (this.childSubscription(), delete this.childSubscription);
			let {
				children: t
			} = this.props;
			oe(t) && (this.childSubscription = t.on("change", n => {
				this.current && (this.current.textContent = `${n}`)
			}))
		}
	};
	var Pc = class extends vo {
		constructor() {
			super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ue
		}
		getBaseTargetFromProps(t, n) {
			return t[n]
		}
		readValueFromInstance(t, n) {
			if (He.has(n)) {
				let r = lo(n);
				return r && r.default || 0
			}
			return n = ku.has(n) ? n : nr(n), t.getAttribute(n)
		}
		scrapeMotionValuesFromProps(t, n, r) {
			return Eu(t, n, r)
		}
		build(t, n, r) {
			Zi(t, n, this.isSVGTag, r.transformTemplate)
		}
		renderInstance(t, n, r, i) {
			Cu(t, n, r, i)
		}
		mount(t) {
			this.isSVGTag = Ji(t.tagName), super.mount(t)
		}
	};
	var nk = (e, t) => $i(e) ? new Pc(t) : new Ec(t, {
		allowProjection: e !== tk.Fragment
	});
	var rk = {
		layout: {
			ProjectionNode: Sc,
			MeasureLayout: yc
		}
	};
	var IL = {
			..._w,
			...j1,
			...XS,
			...rk
		},
		Gt = l1((e, t) => V1(e, t, IL, nk));
	var xo = q(se(), 1);

	function wo(e) {
		let t = ro(() => Kt(e)),
			{
				isStatic: n
			} = (0, xo.useContext)(Fi);
		if (n) {
			let [, r] = (0, xo.useState)(e);
			(0, xo.useEffect)(() => t.on("change", r), [])
		}
		return t
	}
	var Tc = class {
			constructor() {
				this.componentControls = new Set
			}
			subscribe(t) {
				return this.componentControls.add(t), () => this.componentControls.delete(t)
			}
			start(t, n) {
				this.componentControls.forEach(r => {
					r.start(t.nativeEvent || t, n)
				})
			}
		},
		LL = () => new Tc;

	function Kd() {
		return ro(LL)
	}
	var P = q(Di());

	function ML(e) {
		return (0, P.jsx)("div", {
			className: "about",
			children: (0, P.jsxs)("div", {
				className: "aboutContent",
				children: [(0, P.jsxs)("div", {
					className: "aboutHeader",
					children: [(0, P.jsx)("div", {
						className: "pfp",
						children: (0, P.jsx)("img", {
							src: cv.general.profilePhoto
						})
					}), (0, P.jsxs)("div", {
						children: [(0, P.jsx)("h2", {
							children: cv.general.displayName
						}), cv.general.byline ? (0, P.jsx)("p", {
							children: cv.general.byline
						}) : null]
					})]
				}), cv.contact && cv.contact.length > 0 || cv.general.about ? (0, P.jsxs)("div", {
					className: "contactItems",
					children: [cv.contact && cv.contact.length > 0 ? (0, P.jsx)(P.Fragment, {
						children: cv.contact.map((t, n) => (0, P.jsxs)(P.Fragment, {
							children: [(0, P.jsx)("div", {
								className: "contactLabel",
								children: t.platform
							}, t.id), (0, P.jsx)("div", {
								className: "contactItem",
								children: (0, P.jsx)("a", {
									href: t.url,
									target: "_blank",
									children: t.handle
								})
							}), n !== cv.contact.length - 1 ? (0, P.jsx)("hr", {}) : null]
						}))
					}) : null, cv.general.about ? (0, P.jsxs)(P.Fragment, {
						children: [(0, P.jsx)("hr", {}), (0, P.jsx)("div", {
							className: "contactLabel",
							children: "About"
						}), (0, P.jsx)("div", {
							className: "contactItem",
							children: (0, P.jsx)(ou, {
								text: cv.general.about
							})
						})]
					}) : null]
				}) : null]
			})
		})
	}

	function DL(e) {
		let [t, n] = (0, ce.useState)([]), [r, i] = (0, ce.useState)([]), o = a => {
			let u = t[a];
			i(c => [...c.filter(f => f !== u), u])
		}, s = a => {
			let u = t[a];
			n(c => c.filter(f => f !== u)), i(c => c.filter(f => f !== u))
		}, l = a => {
			n(u => [...u, a]), i(u => [...u, a])
		};
		return (0, P.jsxs)("div", {
			className: "desktop",
			children: [(0, P.jsxs)("div", {
				className: "icons",
				children: [(0, P.jsx)(el, {
					icon: cv.general.profilePhoto ? (0, P.jsx)("div", {
						className: "profilePhoto",
						children: (0, P.jsx)("img", {
							src: cv.general.profilePhoto,
							draggable: !1
						})
					}) : (0, P.jsx)("img", {
						src: cv.media("contact.png"),
						draggable: !1
					}),
					collection: {
						name: "About Me"
					},
					open: () => {
						if (t.some(a => a.id === cv.general.username)) {
							let a = t.findIndex(u => u.id === cv.general.username);
							o(a);
							return
						}
						l({
							type: "about",
							name: "About Me",
							id: cv.general.username
						})
					}
				}), (0, P.jsx)(el, {
					icon: (0, P.jsx)("img", {
						src: cv.media("contact.png"),
						draggable: !1
					}),
					collection: {
						name: "Contact"
					},
					open: () => {
						window.location.href = "https://oktayevin.com/contact"
					}
				}), cv.allCollections.map((a, u) => {
					if (a.name !== "Contact") return (0, P.jsx)(el, {
						open: () => {
							if (t.some(c => c.collection === a)) {
								let c = t.findIndex(f => f.collection === a);
								o(c);
								return
							}
							l({
								type: "folder",
								name: a.name,
								collection: a
							})
						},
						icon: (0, P.jsx)("img", {
							src: cv.media("folder.png"),
							draggable: !1
						}),
						collection: a
					}, a.name)
				}), cv.general.status && cv.general.status.text ? (0, P.jsx)(el, {
					open: () => {
						if (t.some(a => a.status === cv.general.status)) {
							let a = t.findIndex(u => u.status === cv.general.status);
							o(a);
							return
						}
						l({
							type: "status",
							name: "Status",
							status: cv.general.status
						})
					},
					icon: (0, P.jsx)("div", {
						className: "statusIcon",
						children: cv.general.status.emoji
					}),
					collection: {
						type: "status",
						name: "Status",
						status: cv.general.status
					}
				}) : null, Ot.soundtrack ? (0, P.jsx)(el, {
					open: () => {
						if (t.some(a => a.track === Ot.soundtrack)) {
							let a = t.findIndex(u => u.track === Ot.soundtrack);
							o(a);
							return
						}
						l({
							type: "soundtrack",
							name: "Soundtrack",
							track: Ot.soundtrack
						})
					},
					icon: (0, P.jsx)("img", {
						src: cv.media("listen.png"),
						draggable: !1
					}),
					collection: {
						name: "Listen"
					}
				}) : null]
			}), t.length > 0 ? (0, P.jsx)("div", {
				className: "windows",
				children: t.map((a, u) => {
					let c = window.innerWidth - 12,
						f, p, m;
					return a.type === "folder" ? (f = (0, P.jsx)(RL, {
						collection: a.collection,
						open: l,
						focus: o,
						windows: t
					}), p = {
						width: Math.min(480, c),
						height: 360
					}) : a.type === "experience" ? (f = (0, P.jsx)(VL, {
						experience: a.experience,
						open: l,
						windows: t
					}), p = {
						width: Math.min(684, c),
						height: 540
					}, m = a.experience.id) : a.type === "status" ? (f = (0, P.jsx)(jL, {
						status: a.status
					}), p = {
						width: Math.min(320, c),
						height: 280
					}) : a.type === "media" ? (f = (0, P.jsx)(NL, {
						media: a.attachment
					}), p = {
						width: Math.min(684, c),
						height: Math.min(684, c) * (a.attachment.height / a.attachment.width) + 44
					}, m = a.attachment.url) : a.type === "about" ? (f = (0, P.jsx)(ML, {}), p = {
						width: Math.min(480, c),
						height: 360
					}) : a.type === "soundtrack" && (f = (0, P.jsx)(bL, {
						close: () => s(u)
					}), p = {
						width: 220,
						height: 220
					}), (0, P.jsx)(HL, {
						width: p.width,
						height: p.height,
						focus: () => o(u),
						close: () => s(u),
						title: a.name,
						type: a.type,
						zIndex: r.indexOf(a),
						index: u,
						children: f
					}, m || a.name)
				})
			}) : null]
		})
	}

	function el(e) {
		return (0, P.jsxs)("div", {
			onDoubleClick: e.open,
			tabindex: 0,
			className: "desktopItem",
			children: [(0, P.jsx)("div", {
				className: "icon",
				children: e.icon ? e.icon : null
			}), (0, P.jsx)("div", {
				className: "label",
				children: e.collection.name
			})]
		})
	}

	function RL(e) {
		let [t, n] = (0, ce.useState)();
		return (0, P.jsxs)(P.Fragment, {
			children: [(0, P.jsxs)("div", {
				className: "fileHeader",
				children: [(0, P.jsx)("div", {
					style: {
						paddingLeft: 24
					},
					children: "Name"
				}), (0, P.jsx)("div", {
					children: "Date"
				})]
			}), (0, P.jsx)("ul", {
				className: "fileList",
				children: e.collection && e.collection.items.map((r, i) => (0, P.jsxs)("li", {
					className: t === i ? "focused" : void 0,
					onDoubleClick: () => {
						if (e.windows.some(o => o.experience === r)) {
							let o = e.windows.findIndex(s => s.experience === r);
							e.focus(o);
							return
						}
						e.open({
							type: "experience",
							name: r.heading,
							experience: r
						})
					},
					onMouseDown: () => n(i),
					children: [(0, P.jsxs)("div", {
						className: "name",
						children: [(0, P.jsx)("div", {
							className: "fileIcon",
							children: (0, P.jsx)("img", {
								src: cv.media("document.png"),
								draggable: !1
							})
						}), (0, P.jsx)("span", {
							children: r.heading
						})]
					}), (0, P.jsx)("div", {
						className: "year",
						children: r.year
					})]
				}, r.heading))
			})]
		})
	}

	function NL(e) {
		let t = e.media.type === "image" ? (0, P.jsx)("img", {
			src: e.media.url
		}) : (0, P.jsx)("video", {
			src: e.media.url,
			autoPlay: !0,
			muted: !0,
			playsInline: !0,
			loop: !0
		});
		return (0, P.jsx)("div", {
			className: "fullScreenMedia",
			children: t
		})
	}

	function VL(e) {
		return (0, P.jsx)("div", {
			className: "note",
			children: (0, P.jsxs)("div", {
				className: "noteContent",
				children: [(0, P.jsx)("h2", {
					children: e.experience.heading
				}), e.experience.year || e.experience.location ? (0, P.jsxs)("p", {
					children: [e.experience.year ? e.experience.year : null, e.experience.year && e.experience.location ? ", " : null, e.experience.location ? e.experience.location : null]
				}) : null, e.experience.description ? (0, P.jsx)(ou, {
					text: e.experience.description
				}) : null, e.experience.url ? (0, P.jsx)("p", {
					children: (0, P.jsx)("a", {
						href: e.experience.url,
						target: "_blank",
						children: "View link"
					})
				}) : null, e.experience.attachments && e.experience.attachments.length > 0 ? (0, P.jsx)(OL, {
					attachments: e.experience.attachments,
					open: e.open,
					windows: e.windows
				}) : null]
			})
		})
	}

	function OL(e) {
		return (0, P.jsx)("div", {
			className: "noteAttachments",
			children: e.attachments.map((t, n) => {
				let r = t.type === "image" ? (0, P.jsx)("img", {
					src: t.url
				}) : (0, P.jsx)("video", {
					src: t.url,
					autoPlay: !0,
					muted: !0,
					playsInline: !0,
					loop: !0
				});
				return (0, P.jsx)("div", {
					tabindex: 0,
					class: "media",
					style: {
						aspectRatio: t.width / t.height
					},
					onDoubleClick: () => {
						e.windows.some(i => i.attachment === t) || e.open({
							type: "media",
							name: t.width + " \xD7 " + t.height,
							attachment: t
						})
					},
					children: r
				}, t.url)
			})
		})
	}

	function bL(e) {
		let t = (0, ce.useRef)(null),
			[n, r] = (0, ce.useState)(!0),
			[i, o] = (0, ce.useState)(0),
			s = () => {
				n ? t.current.pause() : t.current.play(), r(!n)
			},
			l = () => {
				let {
					currentTime: a,
					duration: u
				} = t.current;
				u > 0 && o(a / u * 100)
			};
		return (0, ce.useEffect)(() => {
			let a = t.current;
			return a.addEventListener("timeupdate", l), () => {
				a.removeEventListener("timeupdate", l)
			}
		}, []), (0, P.jsxs)("div", {
			className: "soundtrack",
			"data-theme": Ot.soundtrack.playerColor,
			"data-paused": !n,
			children: [(0, P.jsxs)("div", {
				className: "controls",
				children: [(0, P.jsx)(ik, {
					className: "closeSoundtrack",
					onClick: e.close,
					children: (0, P.jsx)(FL, {})
				}), (0, P.jsxs)(ik, {
					className: "playToggle",
					onClick: s,
					children: [n ? (0, P.jsx)(_L, {}) : (0, P.jsx)(zL, {}), (0, P.jsx)("div", {
						className: "progress",
						children: (0, P.jsx)(BL, {
							percentage: i
						})
					})]
				})]
			}), (0, P.jsx)("img", {
				src: Ot.soundtrack.artwork,
				draggable: !1
			}), (0, P.jsx)("audio", {
				ref: t,
				autoplay: "true",
				src: Ot.soundtrack.track
			})]
		})
	}

	function ik(e) {
		return (0, P.jsx)("button", {
			className: "playerButton " + e.className,
			onClick: e.onClick,
			children: e.children
		})
	}

	function _L(e) {
		return (0, P.jsx)("svg", {
			width: "12",
			height: "12",
			viewBox: "0 0 12 12",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: (0, P.jsx)("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z",
				fill: Ot.soundtrack.playerColor === "light" ? "#fff" : "#000"
			})
		})
	}

	function zL(e) {
		return (0, P.jsx)("svg", {
			width: "12",
			height: "12",
			viewBox: "0 0 12 12",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: (0, P.jsx)("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2.748 1.068a.5.5 0 01.497-.004l8 4.5a.5.5 0 010 .872l-8 4.5A.5.5 0 012.5 10.5v-9a.5.5 0 01.248-.432z",
				fill: Ot.soundtrack.playerColor === "light" ? "#fff" : "#000"
			})
		})
	}

	function FL(e) {
		return (0, P.jsx)("svg", {
			width: "12",
			height: "12",
			viewBox: "0 0 12 12",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: (0, P.jsx)("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.793 1.793c.214-.215.547-.231.742-.036l.707.707c.195.196.18.528-.035.743L7.414 6l2.793 2.793c.214.215.23.547.035.743l-.707.707c-.195.195-.528.18-.742-.036L5.999 7.414l-2.792 2.793c-.215.215-.548.23-.743.036l-.707-.708c-.195-.195-.18-.527.035-.742L4.585 6 1.792 3.207c-.215-.215-.23-.547-.035-.742l.707-.708c.195-.195.528-.179.742.036L6 4.586z",
				fill: Ot.soundtrack.playerColor === "light" ? "#fff" : "#000"
			})
		})
	}

	function BL(e) {
		let t = (0, ce.useRef)(null),
			[n, r] = (0, ce.useState)(0);
		return (0, ce.useEffect)(() => {
			if (t.current) {
				let i = t.current.getTotalLength();
				r(i), t.current.style.strokeDasharray = `${e.percentage/100*i} ${i}`, t.current.style.strokeDashoffset = 0
			}
		}, [e.percentage]), (0, P.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: 24,
			height: 24,
			fill: "none",
			children: (0, P.jsx)("circle", {
				ref: t,
				cx: 12,
				cy: 12,
				r: 11.5,
				stroke: "#fff",
				style: {
					stroke: Ot.soundtrack.playerColor === "light" ? "#fff" : "#000",
					strokeOpacity: 1
				}
			})
		})
	}
	var Ot = {
		toolbarColor: "dark",
		soundtrack: {
			track: cv.media("soundtrack.mp3"),
			artwork: cv.media("soundtrack-cover.jpg"),
			playerColor: "light"
		}
	};

	function jL(e) {
		let t = new Date(e.status.timestamp),
			n = t.toLocaleString("en-En", {
				weekday: "short"
			}),
			r = t.toLocaleString("en-En", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		return (0, P.jsxs)("div", {
			className: "sticky",
			children: [(0, P.jsx)(ou, {
				text: e.status.text
			}), (0, P.jsxs)("p", {
				children: ["\u2013 ", n, " ", r]
			})]
		})
	}

	function UL(e) {
		let [t, n] = (0, ce.useState)(new Date);
		(0, ce.useEffect)(() => {
			let i = setInterval(() => {
				n(new Date)
			}, 1e3);
			return () => clearInterval(i)
		}, []);
		let r = i => {
			let o = i.toLocaleString("en-En", {
					weekday: "short"
				}),
				s = i.toLocaleString("en-En", {
					month: "short",
					day: "numeric"
				}),
				l = i.toLocaleTimeString("en-En", {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					hour12: !0
				});
			return (0, P.jsxs)("div", {
				style: {
					display: "flex"
				},
				children: [(0, P.jsxs)("span", {
					children: [o, "\xA0", s]
				}), (0, P.jsx)("div", {
					style: {
						width: "0.5em"
					}
				}), (0, P.jsx)("span", {
					children: l
				})]
			})
		};
		return (0, P.jsxs)("div", {
			className: "toolbar",
			"data-theme": Ot.toolbarColor,
			children: [(0, P.jsx)("h1", {
				children: cv.general.displayName
			}), (0, P.jsx)("div", {
				style: {
					marginLeft: "auto"
				},
				children: (0, P.jsx)("div", {
					children: r(t)
				})
			})]
		})
	}

	function HL(e) {
		let t = Kd(),
			n = (0, ce.useRef)(null),
			r = (0, ce.useRef)(null),
			i = wo(24 + e.index * 24),
			o = wo(24 + e.index * 24),
			s = wo(e.width),
			l = wo(e.height),
			[a, u] = (0, ce.useState)(!1);
		(0, ce.useEffect)(() => {
			n.current && n.current.focus()
		}, []), (0, ce.useEffect)(() => {
			if (!r.current || e.type === "soundtrack") return;
			let x = window.innerHeight - 148,
				T = Math.min(e.width * 1.334, r.current.scrollHeight + 53);
			l.set(Math.min(T, x)), i.get() + e.width > window.innerWidth && i.set((window.innerWidth - e.width) / 2)
		}, []), (0, ce.useEffect)(() => {
			let x = r.current,
				T = I => {
					x.scrollTop > 0 ? u(!0) : u(!1)
				};
			return x && x.addEventListener("scroll", T), () => {
				x && x.removeEventListener("scroll", T)
			}
		}, []);

		function c(x) {
			t.start(x)
		}

		function f(x, T, I, O) {
			x.set(x.get() + I * T.delta.x)
		}

		function p(x, T, I) {
			x.set(x.get() + I * T.delta.y)
		}

		function m(x, T, I, O, R, Z, Y, b) {
			let U = Math.round(x + O * b);
			U >= T && (I.set(U), Z.set(Math.round(R + Y * b)))
		}
		let y = (0, ce.useRef)(void 0);

		function v() {
			y.current === void 0 && (y.current = {
				x: i.get(),
				y: o.get(),
				width: s.get(),
				height: l.get()
			})
		}

		function C() {
			y.current = void 0
		}
		let d = (0, ce.useRef)(void 0),
			h = (0, ce.useRef)(void 0),
			g = (0, ce.useRef)(0);

		function k(x, T) {
			document.body.style.userSelect = "none"
		}

		function E() {
			document.body.style.userSelect = void 0, C()
		}
		return (0, P.jsxs)(Gt.div, {
			drag: !0,
			dragMomentum: !1,
			dragListener: e.type !== "soundtrack" ? !1 : void 0,
			dragConstraints: {
				top: -6
			},
			dragElastic: 0,
			tabindex: 0,
			preventScroll: !0,
			ref: n,
			onFocus: () => e.focus(),
			style: {
				zIndex: e.zIndex,
				x: i,
				y: o,
				width: s,
				height: l
			},
			dragControls: t,
			onDrag: (x, T) => {
				i.set(Math.round(i.get())), o.set(Math.round(o.get())), s.set(Math.round(s.get())), l.set(Math.round(l.get()))
			},
			className: "windowWrap",
			children: [e.type !== "soundtrack" ? (0, P.jsxs)(P.Fragment, {
				children: [(0, P.jsx)(Gt.div, {
					className: "dragHandle n",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.height, 180, l, -1, y.current.y, o, 1, T.offset.y)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle s",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.height, 180, l, 1, y.current.y, o, 0, T.offset.y)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle e",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.width, 220, s, 1, y.current.x, i, 0, T.offset.x)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle w",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.width, 220, s, -1, y.current.x, i, 1, T.offset.x)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle ne",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.height, 180, l, -1, y.current.y, o, 1, T.offset.y), m(y.current.width, 220, s, 1, y.current.x, i, 0, T.offset.x)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle nw",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.height, 180, l, -1, y.current.y, o, 1, T.offset.y), m(y.current.width, 220, s, -1, y.current.x, i, 1, T.offset.x)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle se",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.height, 180, l, 1, y.current.y, o, 0, T.offset.y), m(y.current.width, 220, s, 1, y.current.x, i, 0, T.offset.x)
					}
				}), (0, P.jsx)(Gt.div, {
					className: "dragHandle sw",
					onPanStart: k,
					onPanEnd: E,
					onPan: (x, T) => {
						v(), m(y.current.height, 180, l, 1, y.current.y, o, 0, T.offset.y), m(y.current.width, 220, s, -1, y.current.x, i, 1, T.offset.x)
					}
				})]
			}) : null, (0, P.jsxs)("div", {
				className: "window",
				"data-scrolled": a,
				"data-type": e.type,
				children: [(0, P.jsxs)("div", {
					className: "windowHeader",
					style: {
						touchAction: "none"
					},
					onPointerDown: c,
					children: [(0, P.jsxs)("div", {
						className: "trafficLights",
						children: [(0, P.jsx)("button", {
							onClick: e.close,
							children: (0, P.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: 12,
								height: 12,
								fill: "none",
								children: (0, P.jsx)("path", {
									fill: "#4D0000",
									d: "M3.172 8.121a.5.5 0 1 0 .707.707L6 6.707l2.122 2.121a.5.5 0 0 0 .707-.707L6.707 6 8.83 3.878a.5.5 0 0 0-.707-.707L6 5.293 3.88 3.17a.5.5 0 1 0-.707.708l2.121 2.12z",
									style: {
										fill: "#4d0000"
									}
								})
							})
						}), (0, P.jsx)("button", {
							children: (0, P.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: 12,
								height: 12,
								fill: "none",
								children: (0, P.jsx)("path", {
									fill: "#995700",
									d: "M2 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 2 6",
									style: {
										fill: "#995700"
									}
								})
							})
						}), (0, P.jsx)("button", {
							children: (0, P.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: 12,
								height: 12,
								fill: "none",
								children: (0, P.jsx)("path", {
									fill: "#006500",
									d: "M7.5 9 3 4.5v4a.5.5 0 0 0 .5.5zM4.5 3h4a.5.5 0 0 1 .5.5v4z",
									style: {
										fill: "#006500"
									}
								})
							})
						})]
					}), (0, P.jsx)("div", {
						className: "title",
						children: e.title
					})]
				}), (0, P.jsx)("div", {
					ref: r,
					className: "windowContent",
					children: e.children
				})]
			})]
		})
	}

	function WL() {
		return (0, P.jsxs)("div", {
			className: "container",
			children: [(0, P.jsx)(UL, {}), (0, P.jsx)(DL, {})]
		})
	}
	var $L = ok.default.createRoot(document.getElementById("root"));
	$L.render((0, P.jsx)(WL, {}));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/