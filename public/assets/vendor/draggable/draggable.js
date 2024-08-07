!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("Draggable", [], t)
    : "object" == typeof exports
    ? (exports.Draggable = t())
    : (e.Draggable = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if (
          (1 & t && (e = r(e)),
          8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
        )
          return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 66))
    );
  })([
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(64)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(60)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(51);
      Object.defineProperty(t, "closest", {
        enumerable: !0,
        get: function () {
          return s(n).default;
        },
      });
      var i = r(49);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "requestNextAnimationFrame", {
        enumerable: !0,
        get: function () {
          return s(i).default;
        },
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(44);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(47)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(14);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
      var i = r(13);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            },
          });
      });
      var s = r(12);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return s[e];
            },
          });
      });
      var o = r(6);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
      var a,
        l = (a = r(37)) && a.__esModule ? a : { default: a };
      t.default = l.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(4);
      Object.defineProperty(t, "Sensor", {
        enumerable: !0,
        get: function () {
          return u(n).default;
        },
      });
      var i = r(46);
      Object.defineProperty(t, "MouseSensor", {
        enumerable: !0,
        get: function () {
          return u(i).default;
        },
      });
      var s = r(43);
      Object.defineProperty(t, "TouchSensor", {
        enumerable: !0,
        get: function () {
          return u(s).default;
        },
      });
      var o = r(41);
      Object.defineProperty(t, "DragSensor", {
        enumerable: !0,
        get: function () {
          return u(o).default;
        },
      });
      var a = r(39);
      Object.defineProperty(t, "ForceTouchSensor", {
        enumerable: !0,
        get: function () {
          return u(a).default;
        },
      });
      var l = r(3);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return l[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(18);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(23);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(27);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(30);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(33);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(62);
      Object.defineProperty(t, "Announcement", {
        enumerable: !0,
        get: function () {
          return a(n).default;
        },
      }),
        Object.defineProperty(t, "defaultAnnouncementOptions", {
          enumerable: !0,
          get: function () {
            return n.defaultOptions;
          },
        });
      var i = r(59);
      Object.defineProperty(t, "Focusable", {
        enumerable: !0,
        get: function () {
          return a(i).default;
        },
      });
      var s = r(57);
      Object.defineProperty(t, "Mirror", {
        enumerable: !0,
        get: function () {
          return a(s).default;
        },
      }),
        Object.defineProperty(t, "defaultMirrorOptions", {
          enumerable: !0,
          get: function () {
            return s.defaultOptions;
          },
        });
      var o = r(53);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "Scrollable", {
        enumerable: !0,
        get: function () {
          return a(o).default;
        },
      }),
        Object.defineProperty(t, "defaultScrollableOptions", {
          enumerable: !0,
          get: function () {
            return o.defaultOptions;
          },
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(63);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(65);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(1)) && n.__esModule ? n : { default: n };
      let o = Symbol("onSortableSorted"),
        a = (t.defaultOptions = {
          duration: 150,
          easingFunction: "ease-in-out",
          horizontal: !1,
        });
      class l extends s.default {
        constructor(e) {
          super(e),
            (this.options = i({}, a, this.getOptions())),
            (this.lastAnimationFrame = null),
            (this[o] = this[o].bind(this));
        }
        attach() {
          this.draggable.on("sortable:sorted", this[o]);
        }
        detach() {
          this.draggable.off("sortable:sorted", this[o]);
        }
        getOptions() {
          return this.draggable.options.swapAnimation || {};
        }
        [o]({ oldIndex: e, newIndex: t, dragEvent: r }) {
          let { source: n, over: i } = r;
          cancelAnimationFrame(this.lastAnimationFrame),
            (this.lastAnimationFrame = requestAnimationFrame(() => {
              e >= t ? u(n, i, this.options) : u(i, n, this.options);
            }));
        }
      }
      function u(e, t, { duration: r, easingFunction: n, horizontal: i }) {
        for (let s of [e, t]) s.style.pointerEvents = "none";
        if (i) {
          let o = e.offsetWidth;
          (e.style.transform = `translate3d(${o}px, 0, 0)`),
            (t.style.transform = `translate3d(-${o}px, 0, 0)`);
        } else {
          let a = e.offsetHeight;
          (e.style.transform = `translate3d(0, ${a}px, 0)`),
            (t.style.transform = `translate3d(0, -${a}px, 0)`);
        }
        requestAnimationFrame(() => {
          for (let i of [e, t])
            i.addEventListener("transitionend", c),
              (i.style.transition = `transform ${r}ms ${n}`),
              (i.style.transform = "");
        });
      }
      function c(e) {
        (e.target.style.transition = ""),
          (e.target.style.pointerEvents = ""),
          e.target.removeEventListener("transitionend", c);
      }
      t.default = l;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i = r(15),
        s = (n = i) && n.__esModule ? n : { default: n };
      (t.default = s.default), (t.defaultOptions = i.defaultOptions);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(1)) && n.__esModule ? n : { default: n },
        s = r(7);
      let o = Symbol("onDragStart"),
        a = Symbol("onDragStop"),
        l = Symbol("onDragOver"),
        u = Symbol("onDragOut"),
        c = Symbol("onMirrorCreated"),
        d = Symbol("onMirrorDestroy");
      class h extends i.default {
        constructor(e) {
          super(e),
            (this.firstSource = null),
            (this.mirror = null),
            (this[o] = this[o].bind(this)),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this)),
            (this[d] = this[d].bind(this));
        }
        attach() {
          this.draggable
            .on("drag:start", this[o])
            .on("drag:stop", this[a])
            .on("drag:over", this[l])
            .on("drag:out", this[u])
            .on("droppable:over", this[l])
            .on("droppable:out", this[u])
            .on("mirror:created", this[c])
            .on("mirror:destroy", this[d]);
        }
        detach() {
          this.draggable
            .off("drag:start", this[o])
            .off("drag:stop", this[a])
            .off("drag:over", this[l])
            .off("drag:out", this[u])
            .off("droppable:over", this[l])
            .off("droppable:out", this[u])
            .off("mirror:created", this[c])
            .off("mirror:destroy", this[d]);
        }
        [o](e) {
          e.canceled() || (this.firstSource = e.source);
        }
        [a]() {
          this.firstSource = null;
        }
        [l](e) {
          if (e.canceled()) return;
          let t = e.source || e.dragEvent.source;
          if (t === this.firstSource) return void (this.firstSource = null);
          let r = new s.SnapInEvent({
            dragEvent: e,
            snappable: e.over || e.droppable,
          });
          this.draggable.trigger(r),
            r.canceled() ||
              (this.mirror && (this.mirror.style.display = "none"),
              t.classList.remove(
                this.draggable.getClassNameFor("source:dragging")
              ),
              t.classList.add(this.draggable.getClassNameFor("source:placed")),
              setTimeout(() => {
                t.classList.remove(
                  this.draggable.getClassNameFor("source:placed")
                );
              }, this.draggable.options.placedTimeout));
        }
        [u](e) {
          if (e.canceled()) return;
          let t = e.source || e.dragEvent.source,
            r = new s.SnapOutEvent({
              dragEvent: e,
              snappable: e.over || e.droppable,
            });
          this.draggable.trigger(r),
            r.canceled() ||
              (this.mirror && (this.mirror.style.display = ""),
              t.classList.add(
                this.draggable.getClassNameFor("source:dragging")
              ));
        }
        [c]({ mirror: e }) {
          this.mirror = e;
        }
        [d]() {
          this.mirror = null;
        }
      }
      t.default = h;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get dragEvent() {
          return this.data.dragEvent;
        }
        get snappable() {
          return this.data.snappable;
        }
      }
      (t.SnapEvent = s), (s.type = "snap");
      class o extends s {}
      (t.SnapInEvent = o), (o.type = "snap:in"), (o.cancelable = !0);
      class a extends s {}
      (t.SnapOutEvent = a), (a.type = "snap:out"), (a.cancelable = !0);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(7);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
      var i,
        s = (i = r(17)) && i.__esModule ? i : { default: i };
      t.default = s.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(1)) && n.__esModule ? n : { default: n },
        o = r(2);
      let a = Symbol("onMirrorCreated"),
        l = Symbol("onMirrorDestroy"),
        u = Symbol("onDragOver"),
        c = Symbol("resize"),
        d = (t.defaultOptions = {});
      class h extends s.default {
        constructor(e) {
          super(e),
            (this.options = i({}, d, this.getOptions())),
            (this.lastWidth = 0),
            (this.lastHeight = 0),
            (this.mirror = null),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this));
        }
        attach() {
          this.draggable
            .on("mirror:created", this[a])
            .on("drag:over", this[u])
            .on("drag:over:container", this[u]);
        }
        detach() {
          this.draggable
            .off("mirror:created", this[a])
            .off("mirror:destroy", this[l])
            .off("drag:over", this[u])
            .off("drag:over:container", this[u]);
        }
        getOptions() {
          return this.draggable.options.resizeMirror || {};
        }
        [a]({ mirror: e }) {
          this.mirror = e;
        }
        [l]() {
          this.mirror = null;
        }
        [u](e) {
          this[c](e);
        }
        [c]({ overContainer: e, over: t }) {
          requestAnimationFrame(() => {
            this.mirror.parentNode !== e && e.appendChild(this.mirror);
            let r = t || this.draggable.getDraggableElementsForContainer(e)[0];
            r &&
              (0, o.requestNextAnimationFrame)(() => {
                let e = r.getBoundingClientRect();
                (this.lastHeight === e.height && this.lastWidth === e.width) ||
                  ((this.mirror.style.width = `${e.width}px`),
                  (this.mirror.style.height = `${e.height}px`),
                  (this.lastWidth = e.width),
                  (this.lastHeight = e.height));
              });
          });
        }
      }
      t.default = h;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i = r(20),
        s = (n = i) && n.__esModule ? n : { default: n };
      (t.default = s.default), (t.defaultOptions = i.defaultOptions);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(1)) && n.__esModule ? n : { default: n },
        s = r(2),
        o = r(8);
      let a = Symbol("onDragMove"),
        l = Symbol("onDragStop"),
        u = Symbol("onRequestAnimationFrame");
      class c extends i.default {
        constructor(e) {
          super(e),
            (this.currentlyCollidingElement = null),
            (this.lastCollidingElement = null),
            (this.currentAnimationFrame = null),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this));
        }
        attach() {
          this.draggable.on("drag:move", this[a]).on("drag:stop", this[l]);
        }
        detach() {
          this.draggable.off("drag:move", this[a]).off("drag:stop", this[l]);
        }
        getCollidables() {
          let e = this.draggable.options.collidables;
          return "string" == typeof e
            ? Array.prototype.slice.call(document.querySelectorAll(e))
            : e instanceof NodeList || e instanceof Array
            ? Array.prototype.slice.call(e)
            : e instanceof HTMLElement
            ? [e]
            : "function" == typeof e
            ? e()
            : [];
        }
        [a](e) {
          let t = e.sensorEvent.target;
          (this.currentAnimationFrame = requestAnimationFrame(this[u](t))),
            this.currentlyCollidingElement && e.cancel();
          let r = new o.CollidableInEvent({
              dragEvent: e,
              collidingElement: this.currentlyCollidingElement,
            }),
            n = new o.CollidableOutEvent({
              dragEvent: e,
              collidingElement: this.lastCollidingElement,
            }),
            i = Boolean(
              this.currentlyCollidingElement &&
                this.lastCollidingElement !== this.currentlyCollidingElement
            ),
            s = Boolean(
              !this.currentlyCollidingElement && this.lastCollidingElement
            );
          i
            ? (this.lastCollidingElement && this.draggable.trigger(n),
              this.draggable.trigger(r))
            : s && this.draggable.trigger(n),
            (this.lastCollidingElement = this.currentlyCollidingElement);
        }
        [l](e) {
          let t = this.currentlyCollidingElement || this.lastCollidingElement,
            r = new o.CollidableOutEvent({ dragEvent: e, collidingElement: t });
          t && this.draggable.trigger(r),
            (this.lastCollidingElement = null),
            (this.currentlyCollidingElement = null);
        }
        [u](e) {
          return () => {
            let t = this.getCollidables();
            this.currentlyCollidingElement = (0, s.closest)(e, (e) =>
              t.includes(e)
            );
          };
        }
      }
      t.default = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CollidableOutEvent =
          t.CollidableInEvent =
          t.CollidableEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      (t.CollidableEvent = s), (s.type = "collidable");
      class o extends s {
        get collidingElement() {
          return this.data.collidingElement;
        }
      }
      (t.CollidableInEvent = o), (o.type = "collidable:in");
      class a extends s {
        get collidingElement() {
          return this.data.collidingElement;
        }
      }
      (t.CollidableOutEvent = a), (a.type = "collidable:out");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(8);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
      var i,
        s = (i = r(22)) && i.__esModule ? i : { default: i };
      t.default = s.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(24);
      Object.defineProperty(t, "Collidable", {
        enumerable: !0,
        get: function () {
          return a(n).default;
        },
      });
      var i = r(21);
      Object.defineProperty(t, "ResizeMirror", {
        enumerable: !0,
        get: function () {
          return a(i).default;
        },
      }),
        Object.defineProperty(t, "defaultResizeMirrorOptions", {
          enumerable: !0,
          get: function () {
            return i.defaultOptions;
          },
        });
      var s = r(19);
      Object.defineProperty(t, "Snappable", {
        enumerable: !0,
        get: function () {
          return a(s).default;
        },
      });
      var o = r(16);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "SwapAnimation", {
        enumerable: !0,
        get: function () {
          return a(o).default;
        },
      }),
        Object.defineProperty(t, "defaultSwapAnimationOptions", {
          enumerable: !0,
          get: function () {
            return o.defaultOptions;
          },
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(5)) && n.__esModule ? n : { default: n },
        o = r(9);
      let a = Symbol("onDragStart"),
        l = Symbol("onDragOverContainer"),
        u = Symbol("onDragOver"),
        c = Symbol("onDragStop");
      class d extends s.default {
        constructor(e = [], t = {}) {
          super(
            e,
            i({}, t, {
              announcements: i(
                {},
                {
                  "sortable:sorted": function ({ dragEvent: e }) {
                    let t =
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "sortable element";
                    if (e.over) {
                      let r =
                        e.over.textContent.trim() ||
                        e.over.id ||
                        "sortable element";
                      return e.source.compareDocumentPosition(e.over) &
                        Node.DOCUMENT_POSITION_FOLLOWING
                        ? `Placed ${t} after ${r}`
                        : `Placed ${t} before ${r}`;
                    }
                    return `Placed ${t} into a different container`;
                  },
                },
                t.announcements || {}
              ),
            })
          ),
            (this.startIndex = null),
            (this.startContainer = null),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this)),
            this.on("drag:start", this[a])
              .on("drag:over:container", this[l])
              .on("drag:over", this[u])
              .on("drag:stop", this[c]);
        }
        destroy() {
          super.destroy(),
            this.off("drag:start", this[a])
              .off("drag:over:container", this[l])
              .off("drag:over", this[u])
              .off("drag:stop", this[c]);
        }
        index(e) {
          return this.getDraggableElementsForContainer(e.parentNode).indexOf(e);
        }
        [a](e) {
          (this.startContainer = e.source.parentNode),
            (this.startIndex = this.index(e.source));
          let t = new o.SortableStartEvent({
            dragEvent: e,
            startIndex: this.startIndex,
            startContainer: this.startContainer,
          });
          this.trigger(t), t.canceled() && e.cancel();
        }
        [l](e) {
          if (e.canceled()) return;
          let { source: t, over: r, overContainer: n } = e,
            i = this.index(t),
            s = new o.SortableSortEvent({
              dragEvent: e,
              currentIndex: i,
              source: t,
              over: r,
            });
          if ((this.trigger(s), s.canceled())) return;
          let a = g({
            source: t,
            over: r,
            overContainer: n,
            children: this.getDraggableElementsForContainer(n),
          });
          if (!a) return;
          let { oldContainer: l, newContainer: u } = a,
            c = this.index(e.source),
            d = new o.SortableSortedEvent({
              dragEvent: e,
              oldIndex: i,
              newIndex: c,
              oldContainer: l,
              newContainer: u,
            });
          this.trigger(d);
        }
        [u](e) {
          if (e.over === e.originalSource || e.over === e.source) return;
          let { source: t, over: r, overContainer: n } = e,
            i = this.index(t),
            s = new o.SortableSortEvent({
              dragEvent: e,
              currentIndex: i,
              source: t,
              over: r,
            });
          if ((this.trigger(s), s.canceled())) return;
          let a = g({
            source: t,
            over: r,
            overContainer: n,
            children: this.getDraggableElementsForContainer(n),
          });
          if (!a) return;
          let { oldContainer: l, newContainer: u } = a,
            c = this.index(t),
            d = new o.SortableSortedEvent({
              dragEvent: e,
              oldIndex: i,
              newIndex: c,
              oldContainer: l,
              newContainer: u,
            });
          this.trigger(d);
        }
        [c](e) {
          let t = new o.SortableStopEvent({
            dragEvent: e,
            oldIndex: this.startIndex,
            newIndex: this.index(e.source),
            oldContainer: this.startContainer,
            newContainer: e.source.parentNode,
          });
          this.trigger(t),
            (this.startIndex = null),
            (this.startContainer = null);
        }
      }
      function h(e) {
        return Array.prototype.indexOf.call(e.parentNode.children, e);
      }
      function g({ source: e, over: t, overContainer: r, children: n }) {
        let i = !n.length,
          s = e.parentNode !== r;
        return i
          ? (function (e, t) {
              let r = e.parentNode;
              return t.appendChild(e), { oldContainer: r, newContainer: t };
            })(e, r)
          : t && !s
          ? (function (e, t) {
              let r = h(e),
                n = h(t);
              return (
                r < n
                  ? e.parentNode.insertBefore(e, t.nextElementSibling)
                  : e.parentNode.insertBefore(e, t),
                { oldContainer: e.parentNode, newContainer: e.parentNode }
              );
            })(e, t)
          : s
          ? (function (e, t, r) {
              let n = e.parentNode;
              return (
                t ? t.parentNode.insertBefore(e, t) : r.appendChild(e),
                { oldContainer: n, newContainer: e.parentNode }
              );
            })(e, t, r)
          : null;
      }
      t.default = d;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SortableStopEvent =
          t.SortableSortedEvent =
          t.SortableSortEvent =
          t.SortableStartEvent =
          t.SortableEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      (t.SortableEvent = s), (s.type = "sortable");
      class o extends s {
        get startIndex() {
          return this.data.startIndex;
        }
        get startContainer() {
          return this.data.startContainer;
        }
      }
      (t.SortableStartEvent = o),
        (o.type = "sortable:start"),
        (o.cancelable = !0);
      class a extends s {
        get currentIndex() {
          return this.data.currentIndex;
        }
        get over() {
          return this.data.oldIndex;
        }
        get overContainer() {
          return this.data.newIndex;
        }
      }
      (t.SortableSortEvent = a),
        (a.type = "sortable:sort"),
        (a.cancelable = !0);
      class l extends s {
        get oldIndex() {
          return this.data.oldIndex;
        }
        get newIndex() {
          return this.data.newIndex;
        }
        get oldContainer() {
          return this.data.oldContainer;
        }
        get newContainer() {
          return this.data.newContainer;
        }
      }
      (t.SortableSortedEvent = l), (l.type = "sortable:sorted");
      class u extends s {
        get oldIndex() {
          return this.data.oldIndex;
        }
        get newIndex() {
          return this.data.newIndex;
        }
        get oldContainer() {
          return this.data.oldContainer;
        }
        get newContainer() {
          return this.data.newContainer;
        }
      }
      (t.SortableStopEvent = u), (u.type = "sortable:stop");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
      var i,
        s = (i = r(26)) && i.__esModule ? i : { default: i };
      t.default = s.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(5)) && n.__esModule ? n : { default: n },
        o = r(10);
      let a = Symbol("onDragStart"),
        l = Symbol("onDragOver"),
        u = Symbol("onDragStop");
      class c extends s.default {
        constructor(e = [], t = {}) {
          super(
            e,
            i({}, t, {
              announcements: i(
                {},
                {
                  "swappabled:swapped": function ({
                    dragEvent: e,
                    swappedElement: t,
                  }) {
                    return `Swapped ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "swappable element"
                    } with ${
                      t.textContent.trim() || t.id || "swappable element"
                    }`;
                  },
                },
                t.announcements || {}
              ),
            })
          ),
            (this.lastOver = null),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            this.on("drag:start", this[a])
              .on("drag:over", this[l])
              .on("drag:stop", this[u]);
        }
        destroy() {
          super.destroy(),
            this.off("drag:start", this._onDragStart)
              .off("drag:over", this._onDragOver)
              .off("drag:stop", this._onDragStop);
        }
        [a](e) {
          let t = new o.SwappableStartEvent({ dragEvent: e });
          this.trigger(t), t.canceled() && e.cancel();
        }
        [l](e) {
          if (
            e.over === e.originalSource ||
            e.over === e.source ||
            e.canceled()
          )
            return;
          let t = new o.SwappableSwapEvent({
            dragEvent: e,
            over: e.over,
            overContainer: e.overContainer,
          });
          if ((this.trigger(t), t.canceled())) return;
          this.lastOver &&
            this.lastOver !== e.over &&
            d(this.lastOver, e.source),
            this.lastOver === e.over
              ? (this.lastOver = null)
              : (this.lastOver = e.over),
            d(e.source, e.over);
          let r = new o.SwappableSwappedEvent({
            dragEvent: e,
            swappedElement: e.over,
          });
          this.trigger(r);
        }
        [u](e) {
          let t = new o.SwappableStopEvent({ dragEvent: e });
          this.trigger(t), (this.lastOver = null);
        }
      }
      function d(e, t) {
        let r = t.parentNode,
          n = e.parentNode;
        !(function (e) {
          let t = document.createElement("div");
          e(t), t.parentNode.removeChild(t);
        })((i) => {
          n.insertBefore(i, e), r.insertBefore(e, t), n.insertBefore(t, i);
        });
      }
      t.default = c;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SwappableStopEvent =
          t.SwappableSwappedEvent =
          t.SwappableSwapEvent =
          t.SwappableStartEvent =
          t.SwappableEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      (t.SwappableEvent = s), (s.type = "swappable");
      class o extends s {}
      (t.SwappableStartEvent = o),
        (o.type = "swappable:start"),
        (o.cancelable = !0);
      class a extends s {
        get over() {
          return this.data.over;
        }
        get overContainer() {
          return this.data.overContainer;
        }
      }
      (t.SwappableSwapEvent = a),
        (a.type = "swappable:swap"),
        (a.cancelable = !0);
      class l extends s {
        get swappedElement() {
          return this.data.swappedElement;
        }
      }
      (t.SwappableSwappedEvent = l), (l.type = "swappable:swapped");
      class u extends s {}
      (t.SwappableStopEvent = u), (u.type = "swappable:stop");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
      var i,
        s = (i = r(29)) && i.__esModule ? i : { default: i };
      t.default = s.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = r(2),
        o = (n = r(5)) && n.__esModule ? n : { default: n },
        a = r(11);
      let l = Symbol("onDragStart"),
        u = Symbol("onDragMove"),
        c = Symbol("onDragStop"),
        d = Symbol("dropInDropZone"),
        h = Symbol("returnToOriginalDropzone"),
        g = Symbol("closestDropzone"),
        f = Symbol("getDropzones");
      class p extends o.default {
        constructor(e = [], t = {}) {
          super(
            e,
            i({}, { dropzone: ".draggable-droppable" }, t, {
              classes: i(
                {},
                {
                  "droppable:active": "draggable-dropzone--active",
                  "droppable:occupied": "draggable-dropzone--occupied",
                },
                t.classes || {}
              ),
              announcements: i(
                {},
                {
                  "droppable:dropped": function ({
                    dragEvent: e,
                    dropzone: t,
                  }) {
                    return `Dropped ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    } into ${
                      t.textContent.trim() || t.id || "droppable element"
                    }`;
                  },
                  "droppable:returned": function ({
                    dragEvent: e,
                    dropzone: t,
                  }) {
                    return `Returned ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    } from ${
                      t.textContent.trim() || t.id || "droppable element"
                    }`;
                  },
                },
                t.announcements || {}
              ),
            })
          ),
            (this.dropzones = null),
            (this.lastDropzone = null),
            (this.initialDropzone = null),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this)),
            this.on("drag:start", this[l])
              .on("drag:move", this[u])
              .on("drag:stop", this[c]);
        }
        destroy() {
          super.destroy(),
            this.off("drag:start", this[l])
              .off("drag:move", this[u])
              .off("drag:stop", this[c]);
        }
        [l](e) {
          if (e.canceled()) return;
          this.dropzones = [...this[f]()];
          let t = (0, s.closest)(e.sensorEvent.target, this.options.dropzone);
          if (!t) return void e.cancel();
          let r = new a.DroppableStartEvent({ dragEvent: e, dropzone: t });
          if ((this.trigger(r), r.canceled())) e.cancel();
          else
            for (let n of ((this.initialDropzone = t), this.dropzones))
              n.classList.contains(
                this.getClassNameFor("droppable:occupied")
              ) || n.classList.add(this.getClassNameFor("droppable:active"));
        }
        [u](e) {
          if (e.canceled()) return;
          let t = this[g](e.sensorEvent.target);
          t &&
          !t.classList.contains(this.getClassNameFor("droppable:occupied")) &&
          this[d](e, t)
            ? (this.lastDropzone = t)
            : (t && t !== this.initialDropzone) ||
              !this.lastDropzone ||
              (this[h](e), (this.lastDropzone = null));
        }
        [c](e) {
          let t = new a.DroppableStopEvent({
            dragEvent: e,
            dropzone: this.lastDropzone || this.initialDropzone,
          });
          this.trigger(t);
          let r = this.getClassNameFor("droppable:occupied");
          for (let n of this.dropzones)
            n.classList.remove(this.getClassNameFor("droppable:active"));
          this.lastDropzone &&
            this.lastDropzone !== this.initialDropzone &&
            this.initialDropzone.classList.remove(r),
            (this.dropzones = null),
            (this.lastDropzone = null),
            (this.initialDropzone = null);
        }
        [d](e, t) {
          let r = new a.DroppableDroppedEvent({ dragEvent: e, dropzone: t });
          if ((this.trigger(r), r.canceled())) return !1;
          let n = this.getClassNameFor("droppable:occupied");
          return (
            this.lastDropzone && this.lastDropzone.classList.remove(n),
            t.appendChild(e.source),
            t.classList.add(n),
            !0
          );
        }
        [h](e) {
          let t = new a.DroppableReturnedEvent({
            dragEvent: e,
            dropzone: this.lastDropzone,
          });
          this.trigger(t),
            t.canceled() ||
              (this.initialDropzone.appendChild(e.source),
              this.lastDropzone.classList.remove(
                this.getClassNameFor("droppable:occupied")
              ));
        }
        [g](e) {
          return this.dropzones ? (0, s.closest)(e, this.dropzones) : null;
        }
        [f]() {
          let e = this.options.dropzone;
          return "string" == typeof e
            ? document.querySelectorAll(e)
            : e instanceof NodeList || e instanceof Array
            ? e
            : "function" == typeof e
            ? e()
            : [];
        }
      }
      t.default = p;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DroppableStopEvent =
          t.DroppableReturnedEvent =
          t.DroppableDroppedEvent =
          t.DroppableStartEvent =
          t.DroppableEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      (t.DroppableEvent = s), (s.type = "droppable");
      class o extends s {
        get dropzone() {
          return this.data.dropzone;
        }
      }
      (t.DroppableStartEvent = o),
        (o.type = "droppable:start"),
        (o.cancelable = !0);
      class a extends s {
        get dropzone() {
          return this.data.dropzone;
        }
      }
      (t.DroppableDroppedEvent = a),
        (a.type = "droppable:dropped"),
        (a.cancelable = !0);
      class l extends s {
        get dropzone() {
          return this.data.dropzone;
        }
      }
      (t.DroppableReturnedEvent = l),
        (l.type = "droppable:returned"),
        (l.cancelable = !0);
      class u extends s {
        get dropzone() {
          return this.data.dropzone;
        }
      }
      (t.DroppableStopEvent = u),
        (u.type = "droppable:stop"),
        (u.cancelable = !0);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(11);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
      var i,
        s = (i = r(32)) && i.__esModule ? i : { default: i };
      t.default = s.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = class {
          constructor() {
            this.callbacks = {};
          }
          on(e, ...t) {
            return (
              this.callbacks[e] || (this.callbacks[e] = []),
              this.callbacks[e].push(...t),
              this
            );
          }
          off(e, t) {
            if (!this.callbacks[e]) return null;
            let r = this.callbacks[e].slice(0);
            for (let n = 0; n < r.length; n++)
              t === r[n] && this.callbacks[e].splice(n, 1);
            return this;
          }
          trigger(e) {
            if (!this.callbacks[e.type]) return null;
            let t = [...this.callbacks[e.type]],
              r = [];
            for (let n = t.length - 1; n >= 0; n--) {
              let i = t[n];
              try {
                i(e);
              } catch (s) {
                r.push(s);
              }
            }
            return (
              r.length &&
                console.error(
                  `Draggable caught errors while triggering '${e.type}'`,
                  r
                ),
              this
            );
          }
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(35)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = r(2),
        o = r(12),
        a = (n = r(36)) && n.__esModule ? n : { default: n },
        l = r(6),
        u = r(13),
        c = r(14);
      let d = Symbol("onDragStart"),
        h = Symbol("onDragMove"),
        g = Symbol("onDragStop"),
        f = Symbol("onDragPressure"),
        p = (t.defaultOptions = {
          draggable: ".draggable-source",
          handle: null,
          delay: 100,
          placedTimeout: 800,
          plugins: [],
          sensors: [],
        });
      class v {
        constructor(e = [document.body], t = {}) {
          if (e instanceof NodeList || e instanceof Array)
            this.containers = [...e];
          else {
            if (!(e instanceof HTMLElement))
              throw Error(
                "Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`"
              );
            this.containers = [e];
          }
          (this.options = i({}, p, t, {
            classes: i(
              {},
              {
                "container:dragging": "draggable-container--is-dragging",
                "source:dragging": "draggable-source--is-dragging",
                "source:placed": "draggable-source--placed",
                "container:placed": "draggable-container--placed",
                "body:dragging": "draggable--is-dragging",
                "draggable:over": "draggable--over",
                "container:over": "draggable-container--over",
                "source:original": "draggable--original",
                mirror: "draggable-mirror",
              },
              t.classes || {}
            ),
            announcements: i(
              {},
              {
                "drag:start": (e) =>
                  `Picked up ${
                    e.source.textContent.trim() ||
                    e.source.id ||
                    "draggable element"
                  }`,
                "drag:stop": (e) =>
                  `Released ${
                    e.source.textContent.trim() ||
                    e.source.id ||
                    "draggable element"
                  }`,
              },
              t.announcements || {}
            ),
          })),
            (this.emitter = new a.default()),
            (this.dragging = !1),
            (this.plugins = []),
            (this.sensors = []),
            (this[d] = this[d].bind(this)),
            (this[h] = this[h].bind(this)),
            (this[g] = this[g].bind(this)),
            (this[f] = this[f].bind(this)),
            document.addEventListener("drag:start", this[d], !0),
            document.addEventListener("drag:move", this[h], !0),
            document.addEventListener("drag:stop", this[g], !0),
            document.addEventListener("drag:pressure", this[f], !0);
          let r = Object.values(v.Plugins).map((e) => e),
            n = [l.MouseSensor, l.TouchSensor];
          this.addPlugin(...r, ...this.options.plugins),
            this.addSensor(...n, ...this.options.sensors);
          let s = new u.DraggableInitializedEvent({ draggable: this });
          this.on("mirror:created", ({ mirror: e }) => (this.mirror = e)),
            this.on("mirror:destroy", () => (this.mirror = null)),
            this.trigger(s);
        }
        destroy() {
          document.removeEventListener("drag:start", this[d], !0),
            document.removeEventListener("drag:move", this[h], !0),
            document.removeEventListener("drag:stop", this[g], !0),
            document.removeEventListener("drag:pressure", this[f], !0);
          let e = new u.DraggableDestroyEvent({ draggable: this });
          this.trigger(e),
            this.removePlugin(...this.plugins.map((e) => e.constructor)),
            this.removeSensor(...this.sensors.map((e) => e.constructor));
        }
        addPlugin(...e) {
          let t = e.map((e) => new e(this));
          return (
            t.forEach((e) => e.attach()),
            (this.plugins = [...this.plugins, ...t]),
            this
          );
        }
        removePlugin(...e) {
          return (
            this.plugins
              .filter((t) => e.includes(t.constructor))
              .forEach((e) => e.detach()),
            (this.plugins = this.plugins.filter(
              (t) => !e.includes(t.constructor)
            )),
            this
          );
        }
        addSensor(...e) {
          let t = e.map((e) => new e(this.containers, this.options));
          return (
            t.forEach((e) => e.attach()),
            (this.sensors = [...this.sensors, ...t]),
            this
          );
        }
        removeSensor(...e) {
          return (
            this.sensors
              .filter((t) => e.includes(t.constructor))
              .forEach((e) => e.detach()),
            (this.sensors = this.sensors.filter(
              (t) => !e.includes(t.constructor)
            )),
            this
          );
        }
        addContainer(...e) {
          return (
            (this.containers = [...this.containers, ...e]),
            this.sensors.forEach((t) => t.addContainer(...e)),
            this
          );
        }
        removeContainer(...e) {
          return (
            (this.containers = this.containers.filter((t) => !e.includes(t))),
            this.sensors.forEach((t) => t.removeContainer(...e)),
            this
          );
        }
        on(e, ...t) {
          return this.emitter.on(e, ...t), this;
        }
        off(e, t) {
          return this.emitter.off(e, t), this;
        }
        trigger(e) {
          return this.emitter.trigger(e), this;
        }
        getClassNameFor(e) {
          return this.options.classes[e];
        }
        isDragging() {
          return Boolean(this.dragging);
        }
        getDraggableElements() {
          return this.containers.reduce(
            (e, t) => [...e, ...this.getDraggableElementsForContainer(t)],
            []
          );
        }
        getDraggableElementsForContainer(e) {
          return [...e.querySelectorAll(this.options.draggable)].filter(
            (e) => e !== this.originalSource && e !== this.mirror
          );
        }
        [d](e) {
          let t = m(e),
            { target: r, container: n } = t;
          if (!this.containers.includes(n)) return;
          if (
            (this.options.handle &&
              r &&
              !(0, s.closest)(r, this.options.handle)) ||
            ((this.originalSource = (0, s.closest)(r, this.options.draggable)),
            (this.sourceContainer = n),
            !this.originalSource)
          )
            return void t.cancel();
          this.lastPlacedSource &&
            this.lastPlacedContainer &&
            (clearTimeout(this.placedTimeoutID),
            this.lastPlacedSource.classList.remove(
              this.getClassNameFor("source:placed")
            ),
            this.lastPlacedContainer.classList.remove(
              this.getClassNameFor("container:placed")
            )),
            (this.source = this.originalSource.cloneNode(!0)),
            this.originalSource.parentNode.insertBefore(
              this.source,
              this.originalSource
            ),
            (this.originalSource.style.display = "none");
          let o = new c.DragStartEvent({
            source: this.source,
            originalSource: this.originalSource,
            sourceContainer: n,
            sensorEvent: t,
          });
          if ((this.trigger(o), (this.dragging = !o.canceled()), o.canceled()))
            return (
              this.source.parentNode.removeChild(this.source),
              void (this.originalSource.style.display = null)
            );
          this.originalSource.classList.add(
            this.getClassNameFor("source:original")
          ),
            this.source.classList.add(this.getClassNameFor("source:dragging")),
            this.sourceContainer.classList.add(
              this.getClassNameFor("container:dragging")
            ),
            document.body.classList.add(this.getClassNameFor("body:dragging")),
            b(document.body, "none"),
            requestAnimationFrame(() => {
              let t = m(e).clone({ target: this.source });
              this[h](i({}, e, { detail: t }));
            });
        }
        [h](e) {
          if (!this.dragging) return;
          let t = m(e),
            { container: r } = t,
            n = t.target,
            i = new c.DragMoveEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: r,
              sensorEvent: t,
            });
          this.trigger(i),
            i.canceled() && t.cancel(),
            (n = (0, s.closest)(n, this.options.draggable));
          let o = (0, s.closest)(t.target, this.containers),
            a = t.overContainer || o,
            l = this.currentOverContainer && a !== this.currentOverContainer,
            u = this.currentOver && n !== this.currentOver,
            d = a && this.currentOverContainer !== a,
            h = o && n && this.currentOver !== n;
          if (u) {
            let g = new c.DragOutEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: r,
              sensorEvent: t,
              over: this.currentOver,
            });
            this.currentOver.classList.remove(
              this.getClassNameFor("draggable:over")
            ),
              (this.currentOver = null),
              this.trigger(g);
          }
          if (l) {
            let f = new c.DragOutContainerEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: r,
              sensorEvent: t,
              overContainer: this.currentOverContainer,
            });
            this.currentOverContainer.classList.remove(
              this.getClassNameFor("container:over")
            ),
              (this.currentOverContainer = null),
              this.trigger(f);
          }
          if (d) {
            a.classList.add(this.getClassNameFor("container:over"));
            let p = new c.DragOverContainerEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: r,
              sensorEvent: t,
              overContainer: a,
            });
            (this.currentOverContainer = a), this.trigger(p);
          }
          if (h) {
            n.classList.add(this.getClassNameFor("draggable:over"));
            let v = new c.DragOverEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: r,
              sensorEvent: t,
              overContainer: a,
              over: n,
            });
            (this.currentOver = n), this.trigger(v);
          }
        }
        [g](e) {
          if (!this.dragging) return;
          this.dragging = !1;
          let t = new c.DragStopEvent({
            source: this.source,
            originalSource: this.originalSource,
            sensorEvent: e.sensorEvent,
            sourceContainer: this.sourceContainer,
          });
          this.trigger(t),
            this.source.parentNode.insertBefore(
              this.originalSource,
              this.source
            ),
            this.source.parentNode.removeChild(this.source),
            (this.originalSource.style.display = ""),
            this.source.classList.remove(
              this.getClassNameFor("source:dragging")
            ),
            this.originalSource.classList.remove(
              this.getClassNameFor("source:original")
            ),
            this.originalSource.classList.add(
              this.getClassNameFor("source:placed")
            ),
            this.sourceContainer.classList.add(
              this.getClassNameFor("container:placed")
            ),
            this.sourceContainer.classList.remove(
              this.getClassNameFor("container:dragging")
            ),
            document.body.classList.remove(
              this.getClassNameFor("body:dragging")
            ),
            b(document.body, ""),
            this.currentOver &&
              this.currentOver.classList.remove(
                this.getClassNameFor("draggable:over")
              ),
            this.currentOverContainer &&
              this.currentOverContainer.classList.remove(
                this.getClassNameFor("container:over")
              ),
            (this.lastPlacedSource = this.originalSource),
            (this.lastPlacedContainer = this.sourceContainer),
            (this.placedTimeoutID = setTimeout(() => {
              this.lastPlacedSource &&
                this.lastPlacedSource.classList.remove(
                  this.getClassNameFor("source:placed")
                ),
                this.lastPlacedContainer &&
                  this.lastPlacedContainer.classList.remove(
                    this.getClassNameFor("container:placed")
                  ),
                (this.lastPlacedSource = null),
                (this.lastPlacedContainer = null);
            }, this.options.placedTimeout)),
            (this.source = null),
            (this.originalSource = null),
            (this.currentOverContainer = null),
            (this.currentOver = null),
            (this.sourceContainer = null);
        }
        [f](e) {
          if (!this.dragging) return;
          let t = m(e),
            r =
              this.source ||
              (0, s.closest)(t.originalEvent.target, this.options.draggable),
            n = new c.DragPressureEvent({
              sensorEvent: t,
              source: r,
              pressure: t.pressure,
            });
          this.trigger(n);
        }
      }
      function m(e) {
        return e.detail;
      }
      function b(e, t) {
        (e.style.webkitUserSelect = t),
          (e.style.mozUserSelect = t),
          (e.style.msUserSelect = t),
          (e.style.oUserSelect = t),
          (e.style.userSelect = t);
      }
      (t.default = v),
        (v.Plugins = {
          Announcement: o.Announcement,
          Focusable: o.Focusable,
          Mirror: o.Mirror,
          Scrollable: o.Scrollable,
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(4)) && n.__esModule ? n : { default: n },
        s = r(3);
      let o = Symbol("onMouseForceWillBegin"),
        a = Symbol("onMouseForceDown"),
        l = Symbol("onMouseDown"),
        u = Symbol("onMouseForceChange"),
        c = Symbol("onMouseMove"),
        d = Symbol("onMouseUp"),
        h = Symbol("onMouseForceGlobalChange");
      class g extends i.default {
        constructor(e = [], t = {}) {
          super(e, t),
            (this.mightDrag = !1),
            (this[o] = this[o].bind(this)),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this)),
            (this[d] = this[d].bind(this));
        }
        attach() {
          for (let e of this.containers)
            e.addEventListener("webkitmouseforcewillbegin", this[o], !1),
              e.addEventListener("webkitmouseforcedown", this[a], !1),
              e.addEventListener("mousedown", this[l], !0),
              e.addEventListener("webkitmouseforcechanged", this[u], !1);
          document.addEventListener("mousemove", this[c]),
            document.addEventListener("mouseup", this[d]);
        }
        detach() {
          for (let e of this.containers)
            e.removeEventListener("webkitmouseforcewillbegin", this[o], !1),
              e.removeEventListener("webkitmouseforcedown", this[a], !1),
              e.removeEventListener("mousedown", this[l], !0),
              e.removeEventListener("webkitmouseforcechanged", this[u], !1);
          document.removeEventListener("mousemove", this[c]),
            document.removeEventListener("mouseup", this[d]);
        }
        [o](e) {
          e.preventDefault(), (this.mightDrag = !0);
        }
        [a](e) {
          if (this.dragging) return;
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = e.currentTarget,
            n = new s.DragStartSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: r,
              originalEvent: e,
            });
          this.trigger(r, n),
            (this.currentContainer = r),
            (this.dragging = !n.canceled()),
            (this.mightDrag = !1);
        }
        [d](e) {
          if (!this.dragging) return;
          let t = new s.DragStopSensorEvent({
            clientX: e.clientX,
            clientY: e.clientY,
            target: null,
            container: this.currentContainer,
            originalEvent: e,
          });
          this.trigger(this.currentContainer, t),
            (this.currentContainer = null),
            (this.dragging = !1),
            (this.mightDrag = !1);
        }
        [l](e) {
          this.mightDrag &&
            (e.stopPropagation(),
            e.stopImmediatePropagation(),
            e.preventDefault());
        }
        [c](e) {
          if (!this.dragging) return;
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = new s.DragMoveSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
          this.trigger(this.currentContainer, r);
        }
        [u](e) {
          if (this.dragging) return;
          let t = e.target,
            r = e.currentTarget,
            n = new s.DragPressureSensorEvent({
              pressure: e.webkitForce,
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: r,
              originalEvent: e,
            });
          this.trigger(r, n);
        }
        [h](e) {
          if (!this.dragging) return;
          let t = e.target,
            r = new s.DragPressureSensorEvent({
              pressure: e.webkitForce,
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
          this.trigger(this.currentContainer, r);
        }
      }
      t.default = g;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(38)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = r(2),
        s = (n = r(4)) && n.__esModule ? n : { default: n },
        o = r(3);
      let a = Symbol("onMouseDown"),
        l = Symbol("onMouseUp"),
        u = Symbol("onDragStart"),
        c = Symbol("onDragOver"),
        d = Symbol("onDragEnd"),
        h = Symbol("onDrop"),
        g = Symbol("reset");
      class f extends s.default {
        constructor(e = [], t = {}) {
          super(e, t),
            (this.mouseDownTimeout = null),
            (this.draggableElement = null),
            (this.nativeDraggableElement = null),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this)),
            (this[d] = this[d].bind(this)),
            (this[h] = this[h].bind(this));
        }
        attach() {
          document.addEventListener("mousedown", this[a], !0);
        }
        detach() {
          document.removeEventListener("mousedown", this[a], !0);
        }
        [u](e) {
          e.dataTransfer.setData("text", ""),
            (e.dataTransfer.effectAllowed = this.options.type);
          let t = document.elementFromPoint(e.clientX, e.clientY);
          if (
            ((this.currentContainer = (0, i.closest)(
              e.target,
              this.containers
            )),
            !this.currentContainer)
          )
            return;
          let r = new o.DragStartSensorEvent({
            clientX: e.clientX,
            clientY: e.clientY,
            target: t,
            container: this.currentContainer,
            originalEvent: e,
          });
          setTimeout(() => {
            this.trigger(this.currentContainer, r),
              r.canceled() ? (this.dragging = !1) : (this.dragging = !0);
          }, 0);
        }
        [c](e) {
          if (!this.dragging) return;
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = this.currentContainer,
            n = new o.DragMoveSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: r,
              originalEvent: e,
            });
          this.trigger(r, n),
            n.canceled() ||
              (e.preventDefault(),
              (e.dataTransfer.dropEffect = this.options.type));
        }
        [d](e) {
          if (!this.dragging) return;
          document.removeEventListener("mouseup", this[l], !0);
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = this.currentContainer,
            n = new o.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: r,
              originalEvent: e,
            });
          this.trigger(r, n), (this.dragging = !1), this[g]();
        }
        [h](e) {
          e.preventDefault();
        }
        [a](e) {
          if (e.target && (e.target.form || e.target.contenteditable)) return;
          let t = (0, i.closest)(e.target, (e) => e.draggable);
          t && ((t.draggable = !1), (this.nativeDraggableElement = t)),
            document.addEventListener("mouseup", this[l], !0),
            document.addEventListener("dragstart", this[u], !1),
            document.addEventListener("dragover", this[c], !1),
            document.addEventListener("dragend", this[d], !1),
            document.addEventListener("drop", this[h], !1);
          let r = (0, i.closest)(e.target, this.options.draggable);
          r &&
            (this.mouseDownTimeout = setTimeout(() => {
              (r.draggable = !0), (this.draggableElement = r);
            }, this.options.delay));
        }
        [l]() {
          this[g]();
        }
        [g]() {
          clearTimeout(this.mouseDownTimeout),
            document.removeEventListener("mouseup", this[l], !0),
            document.removeEventListener("dragstart", this[u], !1),
            document.removeEventListener("dragover", this[c], !1),
            document.removeEventListener("dragend", this[d], !1),
            document.removeEventListener("drop", this[h], !1),
            this.nativeDraggableElement &&
              ((this.nativeDraggableElement.draggable = !0),
              (this.nativeDraggableElement = null)),
            this.draggableElement &&
              ((this.draggableElement.draggable = !1),
              (this.draggableElement = null));
        }
      }
      t.default = f;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(40)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = r(2),
        s = (n = r(4)) && n.__esModule ? n : { default: n },
        o = r(3);
      let a = Symbol("onTouchStart"),
        l = Symbol("onTouchHold"),
        u = Symbol("onTouchEnd"),
        c = Symbol("onTouchMove"),
        d = !1;
      window.addEventListener(
        "touchmove",
        (e) => {
          d && e.preventDefault();
        },
        { passive: !1 }
      );
      class h extends s.default {
        constructor(e = [], t = {}) {
          super(e, t),
            (this.currentScrollableParent = null),
            (this.tapTimeout = null),
            (this.touchMoved = !1),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this));
        }
        attach() {
          document.addEventListener("touchstart", this[a]);
        }
        detach() {
          document.removeEventListener("touchstart", this[a]);
        }
        [a](e) {
          let t = (0, i.closest)(e.target, this.containers);
          t &&
            (document.addEventListener("touchmove", this[c]),
            document.addEventListener("touchend", this[u]),
            document.addEventListener("touchcancel", this[u]),
            t.addEventListener("contextmenu", g),
            (this.currentContainer = t),
            (this.tapTimeout = setTimeout(this[l](e, t), this.options.delay)));
        }
        [l](e, t) {
          return () => {
            if (this.touchMoved) return;
            let r = e.touches[0] || e.changedTouches[0],
              n = e.target,
              i = new o.DragStartSensorEvent({
                clientX: r.pageX,
                clientY: r.pageY,
                target: n,
                container: t,
                originalEvent: e,
              });
            this.trigger(t, i),
              (this.dragging = !i.canceled()),
              (d = this.dragging);
          };
        }
        [c](e) {
          if (((this.touchMoved = !0), !this.dragging)) return;
          let t = e.touches[0] || e.changedTouches[0],
            r = document.elementFromPoint(
              t.pageX - window.scrollX,
              t.pageY - window.scrollY
            ),
            n = new o.DragMoveSensorEvent({
              clientX: t.pageX,
              clientY: t.pageY,
              target: r,
              container: this.currentContainer,
              originalEvent: e,
            });
          this.trigger(this.currentContainer, n);
        }
        [u](e) {
          if (
            ((this.touchMoved = !1),
            (d = !1),
            document.removeEventListener("touchend", this[u]),
            document.removeEventListener("touchcancel", this[u]),
            document.removeEventListener("touchmove", this[c]),
            this.currentContainer &&
              this.currentContainer.removeEventListener("contextmenu", g),
            clearTimeout(this.tapTimeout),
            !this.dragging)
          )
            return;
          let t = e.touches[0] || e.changedTouches[0],
            r = document.elementFromPoint(
              t.pageX - window.scrollX,
              t.pageY - window.scrollY
            );
          e.preventDefault();
          let n = new o.DragStopSensorEvent({
            clientX: t.pageX,
            clientY: t.pageY,
            target: r,
            container: this.currentContainer,
            originalEvent: e,
          });
          this.trigger(this.currentContainer, n),
            (this.currentContainer = null),
            (this.dragging = !1);
        }
      }
      function g(e) {
        e.preventDefault(), e.stopPropagation();
      }
      t.default = h;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(42)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DragPressureSensorEvent =
          t.DragStopSensorEvent =
          t.DragMoveSensorEvent =
          t.DragStartSensorEvent =
          t.SensorEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get originalEvent() {
          return this.data.originalEvent;
        }
        get clientX() {
          return this.data.clientX;
        }
        get clientY() {
          return this.data.clientY;
        }
        get target() {
          return this.data.target;
        }
        get container() {
          return this.data.container;
        }
        get pressure() {
          return this.data.pressure;
        }
      }
      t.SensorEvent = s;
      class o extends s {}
      (t.DragStartSensorEvent = o), (o.type = "drag:start");
      class a extends s {}
      (t.DragMoveSensorEvent = a), (a.type = "drag:move");
      class l extends s {}
      (t.DragStopSensorEvent = l), (l.type = "drag:stop");
      class u extends s {}
      (t.DragPressureSensorEvent = u), (u.type = "drag:pressure");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = r(2),
        s = (n = r(4)) && n.__esModule ? n : { default: n },
        o = r(3);
      let a = Symbol("onContextMenuWhileDragging"),
        l = Symbol("onMouseDown"),
        u = Symbol("onMouseMove"),
        c = Symbol("onMouseUp");
      class d extends s.default {
        constructor(e = [], t = {}) {
          super(e, t),
            (this.mouseDown = !1),
            (this.mouseDownTimeout = null),
            (this.openedContextMenu = !1),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this));
        }
        attach() {
          document.addEventListener("mousedown", this[l], !0);
        }
        detach() {
          document.removeEventListener("mousedown", this[l], !0);
        }
        [l](e) {
          if (0 !== e.button || e.ctrlKey || e.metaKey) return;
          document.addEventListener("mouseup", this[c]);
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = (0, i.closest)(t, this.containers);
          r &&
            (document.addEventListener("dragstart", h),
            (this.mouseDown = !0),
            clearTimeout(this.mouseDownTimeout),
            (this.mouseDownTimeout = setTimeout(() => {
              if (!this.mouseDown) return;
              let n = new o.DragStartSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
              this.trigger(r, n),
                (this.currentContainer = r),
                (this.dragging = !n.canceled()),
                this.dragging &&
                  (document.addEventListener("contextmenu", this[a]),
                  document.addEventListener("mousemove", this[u]));
            }, this.options.delay)));
        }
        [u](e) {
          if (!this.dragging) return;
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = new o.DragMoveSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
          this.trigger(this.currentContainer, r);
        }
        [c](e) {
          if (
            ((this.mouseDown = Boolean(this.openedContextMenu)),
            this.openedContextMenu)
          )
            return void (this.openedContextMenu = !1);
          if (
            (document.removeEventListener("mouseup", this[c]),
            document.removeEventListener("dragstart", h),
            !this.dragging)
          )
            return;
          let t = document.elementFromPoint(e.clientX, e.clientY),
            r = new o.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
          this.trigger(this.currentContainer, r),
            document.removeEventListener("contextmenu", this[a]),
            document.removeEventListener("mousemove", this[u]),
            (this.currentContainer = null),
            (this.dragging = !1);
        }
        [a](e) {
          e.preventDefault(), (this.openedContextMenu = !0);
        }
      }
      function h(e) {
        e.preventDefault();
      }
      t.default = d;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(45)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
      t.default = class {
        constructor(e = [], t = {}) {
          (this.containers = [...e]),
            (this.options = n({}, t)),
            (this.dragging = !1),
            (this.currentContainer = null);
        }
        attach() {
          return this;
        }
        detach() {
          return this;
        }
        addContainer(...e) {
          this.containers = [...this.containers, ...e];
        }
        removeContainer(...e) {
          this.containers = this.containers.filter((t) => !e.includes(t));
        }
        trigger(e, t) {
          let r = document.createEvent("Event");
          return (
            (r.detail = t),
            r.initEvent(t.type, !0, !0),
            e.dispatchEvent(r),
            (this.lastEvent = t),
            t
          );
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return requestAnimationFrame(() => {
            requestAnimationFrame(e);
          });
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(48)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var r;
          if (!e) return null;
          let i = t,
            s = t,
            o = t,
            a = t,
            l = Boolean("string" == typeof t),
            u = Boolean("function" == typeof t),
            c = Boolean(t instanceof NodeList || t instanceof Array),
            d = Boolean(t instanceof HTMLElement),
            h = e;
          do {
            if (
              (r = h = h.correspondingUseElement || h.correspondingElement || h)
                ? l
                  ? n.call(r, i)
                  : c
                  ? [...o].includes(r)
                  : d
                  ? a === r
                  : u && s(r)
                : r
            )
              return h;
            h = h.parentNode;
          } while (h && h !== document.body && h !== document);
          return null;
        });
      let n =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(50)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions =
          t.scroll =
          t.onDragStop =
          t.onDragMove =
          t.onDragStart =
            void 0);
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(1)) && n.__esModule ? n : { default: n },
        o = r(2);
      let a = (t.onDragStart = Symbol("onDragStart")),
        l = (t.onDragMove = Symbol("onDragMove")),
        u = (t.onDragStop = Symbol("onDragStop")),
        c = (t.scroll = Symbol("scroll")),
        d = (t.defaultOptions = {
          speed: 6,
          sensitivity: 50,
          scrollableElements: [],
        });
      class h extends s.default {
        constructor(e) {
          super(e),
            (this.options = i({}, d, this.getOptions())),
            (this.currentMousePosition = null),
            (this.scrollAnimationFrame = null),
            (this.scrollableElement = null),
            (this.findScrollableElementFrame = null),
            (this[a] = this[a].bind(this)),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this));
        }
        attach() {
          this.draggable
            .on("drag:start", this[a])
            .on("drag:move", this[l])
            .on("drag:stop", this[u]);
        }
        detach() {
          this.draggable
            .off("drag:start", this[a])
            .off("drag:move", this[l])
            .off("drag:stop", this[u]);
        }
        getOptions() {
          return this.draggable.options.scrollable || {};
        }
        getScrollableElement(e) {
          return this.hasDefinedScrollableElements()
            ? (0, o.closest)(e, this.options.scrollableElements) ||
                document.documentElement
            : (function (e) {
                if (!e) return g();
                let t = getComputedStyle(e).getPropertyValue("position"),
                  r = "absolute" === t,
                  n = (0, o.closest)(e, (e) => {
                    var t;
                    return (
                      (!r ||
                        "static" !==
                          getComputedStyle((t = e)).getPropertyValue(
                            "position"
                          )) &&
                      (function (e) {
                        let t = getComputedStyle(e, null),
                          r =
                            t.getPropertyValue("overflow") +
                            t.getPropertyValue("overflow-y") +
                            t.getPropertyValue("overflow-x");
                        return /(auto|scroll)/.test(r);
                      })(e)
                    );
                  });
                return "fixed" !== t && n ? n : g();
              })(e);
        }
        hasDefinedScrollableElements() {
          return Boolean(0 !== this.options.scrollableElements.length);
        }
        [a](e) {
          this.findScrollableElementFrame = requestAnimationFrame(() => {
            this.scrollableElement = this.getScrollableElement(e.source);
          });
        }
        [l](e) {
          if (
            ((this.findScrollableElementFrame = requestAnimationFrame(() => {
              this.scrollableElement = this.getScrollableElement(
                e.sensorEvent.target
              );
            })),
            !this.scrollableElement)
          )
            return;
          let t = e.sensorEvent,
            r = { x: 0, y: 0 };
          "ontouchstart" in window &&
            ((r.y =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0),
            (r.x =
              window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0)),
            (this.currentMousePosition = {
              clientX: t.clientX - r.x,
              clientY: t.clientY - r.y,
            }),
            (this.scrollAnimationFrame = requestAnimationFrame(this[c]));
        }
        [u]() {
          cancelAnimationFrame(this.scrollAnimationFrame),
            cancelAnimationFrame(this.findScrollableElementFrame),
            (this.scrollableElement = null),
            (this.scrollAnimationFrame = null),
            (this.findScrollableElementFrame = null),
            (this.currentMousePosition = null);
        }
        [c]() {
          if (!this.scrollableElement || !this.currentMousePosition) return;
          cancelAnimationFrame(this.scrollAnimationFrame);
          let { speed: e, sensitivity: t } = this.options,
            r = this.scrollableElement.getBoundingClientRect(),
            n = r.bottom > window.innerHeight,
            i = r.top < 0 || n,
            s = g(),
            o = this.scrollableElement,
            a = this.currentMousePosition.clientX,
            l = this.currentMousePosition.clientY;
          if (o === document.body || o === document.documentElement || i) {
            let { innerHeight: u, innerWidth: d } = window;
            l < t ? (s.scrollTop -= e) : u - l < t && (s.scrollTop += e),
              a < t ? (s.scrollLeft -= e) : d - a < t && (s.scrollLeft += e);
          } else {
            let { offsetHeight: h, offsetWidth: f } = o;
            r.top + h - l < t
              ? (o.scrollTop += e)
              : l - r.top < t && (o.scrollTop -= e),
              r.left + f - a < t
                ? (o.scrollLeft += e)
                : a - r.left < t && (o.scrollLeft -= e);
          }
          this.scrollAnimationFrame = requestAnimationFrame(this[c]);
        }
      }
      function g() {
        return document.scrollingElement || document.documentElement;
      }
      t.default = h;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i = r(52),
        s = (n = i) && n.__esModule ? n : { default: n };
      (t.default = s.default), (t.defaultOptions = i.defaultOptions);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MirrorDestroyEvent =
          t.MirrorMoveEvent =
          t.MirrorAttachedEvent =
          t.MirrorCreatedEvent =
          t.MirrorCreateEvent =
          t.MirrorEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get source() {
          return this.data.source;
        }
        get originalSource() {
          return this.data.originalSource;
        }
        get sourceContainer() {
          return this.data.sourceContainer;
        }
        get sensorEvent() {
          return this.data.sensorEvent;
        }
        get dragEvent() {
          return this.data.dragEvent;
        }
        get originalEvent() {
          return this.sensorEvent ? this.sensorEvent.originalEvent : null;
        }
      }
      t.MirrorEvent = s;
      class o extends s {}
      (t.MirrorCreateEvent = o), (o.type = "mirror:create");
      class a extends s {
        get mirror() {
          return this.data.mirror;
        }
      }
      (t.MirrorCreatedEvent = a), (a.type = "mirror:created");
      class l extends s {
        get mirror() {
          return this.data.mirror;
        }
      }
      (t.MirrorAttachedEvent = l), (l.type = "mirror:attached");
      class u extends s {
        get mirror() {
          return this.data.mirror;
        }
      }
      (t.MirrorMoveEvent = u), (u.type = "mirror:move"), (u.cancelable = !0);
      class c extends s {
        get mirror() {
          return this.data.mirror;
        }
      }
      (t.MirrorDestroyEvent = c),
        (c.type = "mirror:destroy"),
        (c.cancelable = !0);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(54);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return n[e];
            },
          });
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions =
          t.getAppendableContainer =
          t.onScroll =
          t.onMirrorMove =
          t.onMirrorCreated =
          t.onDragStop =
          t.onDragMove =
          t.onDragStart =
            void 0);
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(1)) && n.__esModule ? n : { default: n },
        o = r(55);
      function a(e, t) {
        var r = {};
        for (var n in e)
          t.indexOf(n) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      }
      let l = (t.onDragStart = Symbol("onDragStart")),
        u = (t.onDragMove = Symbol("onDragMove")),
        c = (t.onDragStop = Symbol("onDragStop")),
        d = (t.onMirrorCreated = Symbol("onMirrorCreated")),
        h = (t.onMirrorMove = Symbol("onMirrorMove")),
        g = (t.onScroll = Symbol("onScroll")),
        f = (t.getAppendableContainer = Symbol("getAppendableContainer")),
        p = (t.defaultOptions = {
          constrainDimensions: !1,
          xAxis: !0,
          yAxis: !0,
          cursorOffsetX: null,
          cursorOffsetY: null,
        });
      class v extends s.default {
        constructor(e) {
          super(e),
            (this.options = i({}, p, this.getOptions())),
            (this.scrollOffset = { x: 0, y: 0 }),
            (this.initialScrollOffset = {
              x: window.scrollX,
              y: window.scrollY,
            }),
            (this[l] = this[l].bind(this)),
            (this[u] = this[u].bind(this)),
            (this[c] = this[c].bind(this)),
            (this[d] = this[d].bind(this)),
            (this[h] = this[h].bind(this)),
            (this[g] = this[g].bind(this));
        }
        attach() {
          this.draggable
            .on("drag:start", this[l])
            .on("drag:move", this[u])
            .on("drag:stop", this[c])
            .on("mirror:created", this[d])
            .on("mirror:move", this[h]);
        }
        detach() {
          this.draggable
            .off("drag:start", this[l])
            .off("drag:move", this[u])
            .off("drag:stop", this[c])
            .off("mirror:created", this[d])
            .off("mirror:move", this[h]);
        }
        getOptions() {
          return this.draggable.options.mirror || {};
        }
        [l](e) {
          var t;
          if (e.canceled()) return;
          "ontouchstart" in window &&
            document.addEventListener("scroll", this[g], !0),
            (this.initialScrollOffset = {
              x: window.scrollX,
              y: window.scrollY,
            });
          let {
              source: r,
              originalSource: n,
              sourceContainer: i,
              sensorEvent: s,
            } = e,
            a = new o.MirrorCreateEvent({
              source: r,
              originalSource: n,
              sourceContainer: i,
              sensorEvent: s,
              dragEvent: e,
            });
          if (
            (this.draggable.trigger(a),
            (t = s),
            /^drag/.test(t.originalEvent.type) || a.canceled())
          )
            return;
          let l = this[f](r) || i;
          this.mirror = r.cloneNode(!0);
          let u = new o.MirrorCreatedEvent({
              source: r,
              originalSource: n,
              sourceContainer: i,
              sensorEvent: s,
              dragEvent: e,
              mirror: this.mirror,
            }),
            c = new o.MirrorAttachedEvent({
              source: r,
              originalSource: n,
              sourceContainer: i,
              sensorEvent: s,
              dragEvent: e,
              mirror: this.mirror,
            });
          this.draggable.trigger(u),
            l.appendChild(this.mirror),
            this.draggable.trigger(c);
        }
        [u](e) {
          if (!this.mirror || e.canceled()) return;
          let {
              source: t,
              originalSource: r,
              sourceContainer: n,
              sensorEvent: i,
            } = e,
            s = new o.MirrorMoveEvent({
              source: t,
              originalSource: r,
              sourceContainer: n,
              sensorEvent: i,
              dragEvent: e,
              mirror: this.mirror,
            });
          this.draggable.trigger(s);
        }
        [c](e) {
          if (
            ("ontouchstart" in window &&
              document.removeEventListener("scroll", this[g], !0),
            (this.initialScrollOffset = { x: 0, y: 0 }),
            (this.scrollOffset = { x: 0, y: 0 }),
            !this.mirror)
          )
            return;
          let { source: t, sourceContainer: r, sensorEvent: n } = e,
            i = new o.MirrorDestroyEvent({
              source: t,
              mirror: this.mirror,
              sourceContainer: r,
              sensorEvent: n,
              dragEvent: e,
            });
          this.draggable.trigger(i),
            i.canceled() || this.mirror.parentNode.removeChild(this.mirror);
        }
        [g]() {
          this.scrollOffset = {
            x: window.scrollX - this.initialScrollOffset.x,
            y: window.scrollY - this.initialScrollOffset.y,
          };
        }
        [d]({ mirror: e, source: t, sensorEvent: r }) {
          let n = {
            mirror: e,
            source: t,
            sensorEvent: r,
            mirrorClass: this.draggable.getClassNameFor("mirror"),
            scrollOffset: this.scrollOffset,
            options: this.options,
          };
          return Promise.resolve(n)
            .then(m)
            .then(b)
            .then(E)
            .then(y)
            .then(M({ initial: !0 }))
            .then($)
            .then((e) => {
              let { mirrorOffset: t, initialX: r, initialY: n } = e,
                s = a(e, ["mirrorOffset", "initialX", "initialY"]);
              return (
                (this.mirrorOffset = t),
                (this.initialX = r),
                (this.initialY = n),
                i({ mirrorOffset: t, initialX: r, initialY: n }, s)
              );
            });
        }
        [h](e) {
          if (e.canceled()) return null;
          let t = {
            mirror: e.mirror,
            sensorEvent: e.sensorEvent,
            mirrorOffset: this.mirrorOffset,
            options: this.options,
            initialX: this.initialX,
            initialY: this.initialY,
            scrollOffset: this.scrollOffset,
          };
          return Promise.resolve(t).then(M({ raf: !0 }));
        }
        [f](e) {
          let t = this.options.appendTo;
          return "string" == typeof t
            ? document.querySelector(t)
            : t instanceof HTMLElement
            ? t
            : "function" == typeof t
            ? t(e)
            : e.parentNode;
        }
      }
      function m(e) {
        let { source: t } = e,
          r = a(e, ["source"]);
        return S((e) => {
          let n = t.getBoundingClientRect();
          e(i({ source: t, sourceRect: n }, r));
        });
      }
      function b(e) {
        let { sensorEvent: t, sourceRect: r, options: n } = e,
          s = a(e, ["sensorEvent", "sourceRect", "options"]);
        return S((e) => {
          let o =
              null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
            a = null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
          e(
            i(
              {
                sensorEvent: t,
                sourceRect: r,
                mirrorOffset: { top: o, left: a },
                options: n,
              },
              s
            )
          );
        });
      }
      function E(e) {
        let { mirror: t, source: r, options: n } = e,
          s = a(e, ["mirror", "source", "options"]);
        return S((e) => {
          let o, a;
          if (n.constrainDimensions) {
            let l = getComputedStyle(r);
            (o = l.getPropertyValue("height")),
              (a = l.getPropertyValue("width"));
          }
          (t.style.position = "fixed"),
            (t.style.pointerEvents = "none"),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.margin = 0),
            n.constrainDimensions &&
              ((t.style.height = o), (t.style.width = a)),
            e(i({ mirror: t, source: r, options: n }, s));
        });
      }
      function y(e) {
        let { mirror: t, mirrorClass: r } = e,
          n = a(e, ["mirror", "mirrorClass"]);
        return S((e) => {
          t.classList.add(r), e(i({ mirror: t, mirrorClass: r }, n));
        });
      }
      function $(e) {
        let { mirror: t } = e,
          r = a(e, ["mirror"]);
        return S((e) => {
          t.removeAttribute("id"), delete t.id, e(i({ mirror: t }, r));
        });
      }
      function M({ withFrame: e = !1, initial: t = !1 } = {}) {
        return (r) => {
          let {
              mirror: n,
              sensorEvent: s,
              mirrorOffset: o,
              initialY: l,
              initialX: u,
              scrollOffset: c,
              options: d,
            } = r,
            h = a(r, [
              "mirror",
              "sensorEvent",
              "mirrorOffset",
              "initialY",
              "initialX",
              "scrollOffset",
              "options",
            ]);
          return S(
            (e) => {
              let r = i(
                { mirror: n, sensorEvent: s, mirrorOffset: o, options: d },
                h
              );
              if (o) {
                let a = s.clientX - o.left - c.x,
                  g = s.clientY - o.top - c.y;
                (d.xAxis && d.yAxis) || t
                  ? (n.style.transform = `translate3d(${a}px, ${g}px, 0)`)
                  : d.xAxis && !d.yAxis
                  ? (n.style.transform = `translate3d(${a}px, ${l}px, 0)`)
                  : d.yAxis &&
                    !d.xAxis &&
                    (n.style.transform = `translate3d(${u}px, ${g}px, 0)`),
                  t && ((r.initialX = a), (r.initialY = g));
              }
              e(r);
            },
            { frame: e }
          );
        };
      }
      function S(e, { raf: t = !1 } = {}) {
        return new Promise((r, n) => {
          t
            ? requestAnimationFrame(() => {
                e(r, n);
              })
            : e(r, n);
        });
      }
      t.default = v;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i = r(56),
        s = (n = i) && n.__esModule ? n : { default: n };
      (t.default = s.default), (t.defaultOptions = i.defaultOptions);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(1)) && n.__esModule ? n : { default: n };
      let o = Symbol("onInitialize"),
        a = Symbol("onDestroy");
      class l extends s.default {
        constructor(e) {
          super(e),
            (this.options = i({}, {}, this.getOptions())),
            (this[o] = this[o].bind(this)),
            (this[a] = this[a].bind(this));
        }
        attach() {
          this.draggable
            .on("draggable:initialize", this[o])
            .on("draggable:destroy", this[a]);
        }
        detach() {
          this.draggable
            .off("draggable:initialize", this[o])
            .off("draggable:destroy", this[a]);
        }
        getOptions() {
          return this.draggable.options.focusable || {};
        }
        getElements() {
          return [
            ...this.draggable.containers,
            ...this.draggable.getDraggableElements(),
          ];
        }
        [o]() {
          requestAnimationFrame(() => {
            this.getElements().forEach((e) => {
              var t;
              Boolean(!(t = e).getAttribute("tabindex") && -1 === t.tabIndex) &&
                (u.push(t), (t.tabIndex = 0));
            });
          });
        }
        [a]() {
          requestAnimationFrame(() => {
            this.getElements().forEach((e) =>
              (function (e) {
                let t = u.indexOf(e);
                -1 !== t && ((e.tabIndex = -1), u.splice(t, 1));
              })(e)
            );
          });
        }
      }
      t.default = l;
      let u = [];
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = (n = r(58)) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = class {
          constructor(e) {
            this.draggable = e;
          }
          attach() {
            throw Error("Not Implemented");
          }
          detach() {
            throw Error("Not Implemented");
          }
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (n = r(1)) && n.__esModule ? n : { default: n };
      let o = Symbol("onInitialize"),
        a = Symbol("onDestroy"),
        l = Symbol("announceEvent"),
        u = Symbol("announceMessage"),
        c = (t.defaultOptions = { expire: 7e3 });
      class d extends s.default {
        constructor(e) {
          super(e),
            (this.options = i({}, c, this.getOptions())),
            (this.originalTriggerMethod = this.draggable.trigger),
            (this[o] = this[o].bind(this)),
            (this[a] = this[a].bind(this));
        }
        attach() {
          this.draggable.on("draggable:initialize", this[o]);
        }
        detach() {
          this.draggable.off("draggable:destroy", this[a]);
        }
        getOptions() {
          return this.draggable.options.announcements || {};
        }
        [l](e) {
          let t = this.options[e.type];
          t && "string" == typeof t && this[u](t),
            t && "function" == typeof t && this[u](t(e));
        }
        [u](e) {
          !(function (e, { expire: t }) {
            let r = document.createElement("div");
            (r.textContent = e),
              h.appendChild(r),
              setTimeout(() => {
                h.removeChild(r);
              }, t);
          })(e, { expire: this.options.expire });
        }
        [o]() {
          this.draggable.trigger = (e) => {
            try {
              this[l](e);
            } finally {
              this.originalTriggerMethod.call(this.draggable, e);
            }
          };
        }
        [a]() {
          this.draggable.trigger = this.originalTriggerMethod;
        }
      }
      t.default = d;
      let h = (function () {
        let e = document.createElement("div");
        return (
          e.setAttribute("id", "draggable-live-region"),
          e.setAttribute("aria-relevant", "additions"),
          e.setAttribute("aria-atomic", "true"),
          e.setAttribute("aria-live", "assertive"),
          e.setAttribute("role", "log"),
          (e.style.position = "fixed"),
          (e.style.width = "1px"),
          (e.style.height = "1px"),
          (e.style.top = "-1px"),
          (e.style.overflow = "hidden"),
          e
        );
      })();
      document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(h);
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultOptions = void 0);
      var n,
        i = r(61),
        s = (n = i) && n.__esModule ? n : { default: n };
      (t.default = s.default), (t.defaultOptions = i.defaultOptions);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DraggableDestroyEvent =
          t.DraggableInitializedEvent =
          t.DraggableEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get draggable() {
          return this.data.draggable;
        }
      }
      (t.DraggableEvent = s), (s.type = "draggable");
      class o extends s {}
      (t.DraggableInitializedEvent = o), (o.type = "draggable:initialize");
      class a extends s {}
      (t.DraggableDestroyEvent = a), (a.type = "draggable:destroy");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
      let i = Symbol("canceled");
      class s {
        constructor(e) {
          (this[i] = !1), (this.data = e);
        }
        get type() {
          return this.constructor.type;
        }
        get cancelable() {
          return this.constructor.cancelable;
        }
        cancel() {
          this[i] = !0;
        }
        canceled() {
          return Boolean(this[i]);
        }
        clone(e) {
          return new this.constructor(n({}, this.data, e));
        }
      }
      (t.default = s), (s.type = "event"), (s.cancelable = !1);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DragStopEvent =
          t.DragPressureEvent =
          t.DragOutContainerEvent =
          t.DragOverContainerEvent =
          t.DragOutEvent =
          t.DragOverEvent =
          t.DragMoveEvent =
          t.DragStartEvent =
          t.DragEvent =
            void 0);
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n };
      class s extends i.default {
        get source() {
          return this.data.source;
        }
        get originalSource() {
          return this.data.originalSource;
        }
        get mirror() {
          return this.data.mirror;
        }
        get sourceContainer() {
          return this.data.sourceContainer;
        }
        get sensorEvent() {
          return this.data.sensorEvent;
        }
        get originalEvent() {
          return this.sensorEvent ? this.sensorEvent.originalEvent : null;
        }
      }
      (t.DragEvent = s), (s.type = "drag");
      class o extends s {}
      (t.DragStartEvent = o), (o.type = "drag:start"), (o.cancelable = !0);
      class a extends s {}
      (t.DragMoveEvent = a), (a.type = "drag:move");
      class l extends s {
        get overContainer() {
          return this.data.overContainer;
        }
        get over() {
          return this.data.over;
        }
      }
      (t.DragOverEvent = l), (l.type = "drag:over"), (l.cancelable = !0);
      class u extends s {
        get overContainer() {
          return this.data.overContainer;
        }
        get over() {
          return this.data.over;
        }
      }
      (t.DragOutEvent = u), (u.type = "drag:out");
      class c extends s {
        get overContainer() {
          return this.data.overContainer;
        }
      }
      (t.DragOverContainerEvent = c), (c.type = "drag:over:container");
      class d extends s {
        get overContainer() {
          return this.data.overContainer;
        }
      }
      (t.DragOutContainerEvent = d), (d.type = "drag:out:container");
      class h extends s {
        get pressure() {
          return this.data.pressure;
        }
      }
      (t.DragPressureEvent = h), (h.type = "drag:pressure");
      class g extends s {}
      (t.DragStopEvent = g), (g.type = "drag:stop");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Plugins =
          t.Sensors =
          t.Sortable =
          t.Swappable =
          t.Droppable =
          t.Draggable =
          t.BasePlugin =
          t.BaseEvent =
            void 0);
      var n = r(5);
      Object.defineProperty(t, "Draggable", {
        enumerable: !0,
        get: function () {
          return h(n).default;
        },
      });
      var i = r(34);
      Object.defineProperty(t, "Droppable", {
        enumerable: !0,
        get: function () {
          return h(i).default;
        },
      });
      var s = r(31);
      Object.defineProperty(t, "Swappable", {
        enumerable: !0,
        get: function () {
          return h(s).default;
        },
      });
      var o = r(28);
      Object.defineProperty(t, "Sortable", {
        enumerable: !0,
        get: function () {
          return h(o).default;
        },
      });
      var a = h(r(0)),
        l = h(r(1)),
        u = d(r(6)),
        c = d(r(25));
      function d(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.BaseEvent = a.default),
        (t.BasePlugin = l.default),
        (t.Sensors = u),
        (t.Plugins = c);
    },
  ]);
}),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Draggable", [], t)
      : "object" == typeof exports
      ? (exports.Draggable = t())
      : (e.Draggable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 154))
      );
    })([
      function (e, t, r) {
        var n = r(36)("wks"),
          i = r(22),
          s = r(1).Symbol,
          o = "function" == typeof s;
        (e.exports = function (e) {
          return n[e] || (n[e] = (o && s[e]) || (o ? s : i)("Symbol." + e));
        }).store = n;
      },
      function (e, t) {
        var r = (e.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = r);
      },
      function (e, t) {
        var r = (e.exports = { version: "2.5.7" });
        "number" == typeof __e && (__e = r);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(112)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(111)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(107);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(105);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        var n = r(8);
        e.exports = function (e) {
          if (!n(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      function (e, t, r) {
        var n = r(58),
          i = r(35);
        e.exports = function (e) {
          return n(i(e));
        };
      },
      function (e, t) {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      function (e, t, r) {
        var n = r(6),
          i = r(61),
          s = r(37),
          o = Object.defineProperty;
        t.f = r(11)
          ? Object.defineProperty
          : function (e, t, r) {
              if ((n(e), (t = s(t, !0)), n(r), i))
                try {
                  return o(e, t, r);
                } catch (a) {}
              if ("get" in r || "set" in r)
                throw TypeError("Accessors not supported!");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      function (e, t, r) {
        var n = r(9),
          i = r(28);
        e.exports = r(11)
          ? function (e, t, r) {
              return n.f(e, t, i(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      function (e, t, r) {
        e.exports = !r(23)(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      function (e, t) {
        var r = {}.hasOwnProperty;
        e.exports = function (e, t) {
          return r.call(e, t);
        };
      },
      function (e, t, r) {
        var n = r(59),
          i = r(32);
        e.exports =
          Object.keys ||
          function (e) {
            return n(e, i);
          };
      },
      function (e, t, r) {
        var n = r(1),
          i = r(10),
          s = r(12),
          o = r(22)("src"),
          a = "toString",
          l = Function.toString,
          u = ("" + l).split(a);
        (r(2).inspectSource = function (e) {
          return l.call(e);
        }),
          (e.exports = function (e, t, r, a) {
            var l = "function" == typeof r;
            l && (s(r, "name") || i(r, "name", t)),
              e[t] !== r &&
                (l &&
                  (s(r, o) || i(r, o, e[t] ? "" + e[t] : u.join(String(t)))),
                e === n
                  ? (e[t] = r)
                  : a
                  ? e[t]
                    ? (e[t] = r)
                    : i(e, t, r)
                  : (delete e[t], i(e, t, r)));
          })(Function.prototype, a, function () {
            return ("function" == typeof this && this[o]) || l.call(this);
          });
      },
      function (e, t, r) {
        var n = r(1),
          i = r(2),
          s = r(10),
          o = r(14),
          a = r(27),
          l = function (e, t, r) {
            var u,
              c,
              d,
              h,
              g = e & l.F,
              f = e & l.G,
              p = e & l.S,
              v = e & l.P,
              m = e & l.B,
              b = f ? n : p ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
              E = f ? i : i[t] || (i[t] = {}),
              y = E.prototype || (E.prototype = {});
            for (u in (f && (r = t), r))
              (d = ((c = !g && b && void 0 !== b[u]) ? b : r)[u]),
                (h =
                  m && c
                    ? a(d, n)
                    : v && "function" == typeof d
                    ? a(Function.call, d)
                    : d),
                b && o(b, u, d, e & l.U),
                E[u] != d && s(E, u, h),
                v && y[u] != d && (y[u] = d);
          };
        (n.core = i),
          (l.F = 1),
          (l.G = 2),
          (l.S = 4),
          (l.P = 8),
          (l.B = 16),
          (l.W = 32),
          (l.U = 64),
          (l.R = 128),
          (e.exports = l);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(103);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(110)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t) {
        e.exports = {};
      },
      function (e, t) {
        t.f = {}.propertyIsEnumerable;
      },
      function (e, t) {
        var r = {}.toString;
        e.exports = function (e) {
          return r.call(e).slice(8, -1);
        };
      },
      function (e, t) {
        e.exports = !1;
      },
      function (e, t) {
        var r = 0,
          n = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(
            void 0 === e ? "" : e,
            ")_",
            (++r + n).toString(36)
          );
        };
      },
      function (e, t) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (t) {
            return !0;
          }
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(44);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i = r(43);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
        var s = r(42);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            });
        });
        var o = r(29);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
        var a,
          l = (a = r(73)) && a.__esModule ? a : { default: a };
        t.default = l.default;
      },
      function (e, t, r) {
        var n = r(9).f,
          i = r(12),
          s = r(0)("toStringTag");
        e.exports = function (e, t, r) {
          e &&
            !i((e = r ? e : e.prototype), s) &&
            n(e, s, { configurable: !0, value: t });
        };
      },
      function (e, t) {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
          return e;
        };
      },
      function (e, t, r) {
        var n = r(26);
        e.exports = function (e, t, r) {
          if ((n(e), void 0 === t)) return e;
          switch (r) {
            case 1:
              return function (r) {
                return e.call(t, r);
              };
            case 2:
              return function (r, n) {
                return e.call(t, r, n);
              };
            case 3:
              return function (r, n, i) {
                return e.call(t, r, n, i);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      function (e, t) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(17);
        Object.defineProperty(t, "Sensor", {
          enumerable: !0,
          get: function () {
            return u(n).default;
          },
        });
        var i = r(109);
        Object.defineProperty(t, "MouseSensor", {
          enumerable: !0,
          get: function () {
            return u(i).default;
          },
        });
        var s = r(102);
        Object.defineProperty(t, "TouchSensor", {
          enumerable: !0,
          get: function () {
            return u(s).default;
          },
        });
        var o = r(100);
        Object.defineProperty(t, "DragSensor", {
          enumerable: !0,
          get: function () {
            return u(o).default;
          },
        });
        var a = r(98);
        Object.defineProperty(t, "ForceTouchSensor", {
          enumerable: !0,
          get: function () {
            return u(a).default;
          },
        });
        var l = r(16);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            });
        });
      },
      function (e, t, r) {
        var n = r(20),
          i = r(0)("toStringTag"),
          s =
            "Arguments" ==
            n(
              (function () {
                return arguments;
              })()
            );
        e.exports = function (e) {
          var t, r, o;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (r = (function (e, t) {
                try {
                  return e[t];
                } catch (r) {}
              })((t = Object(e)), i))
            ? r
            : s
            ? n(t)
            : "Object" == (o = n(t)) && "function" == typeof t.callee
            ? "Arguments"
            : o;
        };
      },
      function (e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      function (e, t) {
        e.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      function (e, t, r) {
        var n = r(36)("keys"),
          i = r(22);
        e.exports = function (e) {
          return n[e] || (n[e] = i(e));
        };
      },
      function (e, t) {
        var r = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
        };
      },
      function (e, t) {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      function (e, t, r) {
        var n = r(2),
          i = r(1),
          s = "__core-js_shared__",
          o = i[s] || (i[s] = {});
        (e.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: n.version,
          mode: r(21) ? "pure" : "global",
          copyright: "\xc2\xa9 2018 Denis Pushkarev (zloirock.ru)",
        });
      },
      function (e, t, r) {
        var n = r(8);
        e.exports = function (e, t) {
          var r, i;
          if (!n(e)) return e;
          if (
            (t &&
              "function" == typeof (r = e.toString) &&
              !n((i = r.call(e)))) ||
            ("function" == typeof (r = e.valueOf) && !n((i = r.call(e)))) ||
            (!t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
          )
            return i;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (e, t, r) {
        var n = r(8),
          i = r(1).document,
          s = n(i) && n(i.createElement);
        e.exports = function (e) {
          return s ? i.createElement(e) : {};
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(63);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(66);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(69);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(83);
        Object.defineProperty(t, "Announcement", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        }),
          Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function () {
              return n.defaultOptions;
            },
          });
        var i = r(81);
        Object.defineProperty(t, "Focusable", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        });
        var s = r(79);
        Object.defineProperty(t, "Mirror", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        }),
          Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function () {
              return s.defaultOptions;
            },
          });
        var o = r(75);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "Scrollable", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(84);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(85);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(89);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(94);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        var n = r(26);
        function i(e) {
          var t, r;
          (this.promise = new e(function (e, n) {
            if (void 0 !== t || void 0 !== r)
              throw TypeError("Bad Promise constructor");
            (t = e), (r = n);
          })),
            (this.resolve = n(t)),
            (this.reject = n(r));
        }
        e.exports.f = function (e) {
          return new i(e);
        };
      },
      function (e, t, r) {
        var n,
          i,
          s,
          o = r(27),
          a = r(128),
          l = r(54),
          u = r(38),
          c = r(1),
          d = c.process,
          h = c.setImmediate,
          g = c.clearImmediate,
          f = c.MessageChannel,
          p = c.Dispatch,
          v = 0,
          m = {},
          b = function () {
            var e = +this;
            if (m.hasOwnProperty(e)) {
              var t = m[e];
              delete m[e], t();
            }
          },
          E = function (e) {
            b.call(e.data);
          };
        (h && g) ||
          ((h = function (e) {
            for (var t = [], r = 1; arguments.length > r; )
              t.push(arguments[r++]);
            return (
              (m[++v] = function () {
                a("function" == typeof e ? e : Function(e), t);
              }),
              n(v),
              v
            );
          }),
          (g = function (e) {
            delete m[e];
          }),
          "process" == r(20)(d)
            ? (n = function (e) {
                d.nextTick(o(b, e, 1));
              })
            : p && p.now
            ? (n = function (e) {
                p.now(o(b, e, 1));
              })
            : f
            ? ((s = (i = new f()).port2),
              (i.port1.onmessage = E),
              (n = o(s.postMessage, s, 1)))
            : c.addEventListener &&
              "function" == typeof postMessage &&
              !c.importScripts
            ? ((n = function (e) {
                c.postMessage(e + "", "*");
              }),
              c.addEventListener("message", E, !1))
            : (n =
                "onreadystatechange" in u("script")
                  ? function (e) {
                      l.appendChild(u("script")).onreadystatechange =
                        function () {
                          l.removeChild(this), b.call(e);
                        };
                    }
                  : function (e) {
                      setTimeout(o(b, e, 1), 0);
                    })),
          (e.exports = { set: h, clear: g });
      },
      function (e, t, r) {
        var n = r(0)("unscopables"),
          i = Array.prototype;
        null == i[n] && r(10)(i, n, {}),
          (e.exports = function (e) {
            i[n][e] = !0;
          });
      },
      function (e, t, r) {
        var n = r(35);
        e.exports = function (e) {
          return Object(n(e));
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(21),
          i = r(15),
          s = r(14),
          o = r(10),
          a = r(18),
          l = r(140),
          u = r(25),
          c = r(139),
          d = r(0)("iterator"),
          h = !([].keys && "next" in [].keys()),
          g = "values",
          f = function () {
            return this;
          };
        e.exports = function (e, t, r, p, v, m, b) {
          l(r, t, p);
          var E,
            y,
            $,
            M = function (e) {
              return !h && e in P
                ? P[e]
                : function () {
                    return new r(this, e);
                  };
            },
            S = t + " Iterator",
            C = v == g,
            D = !1,
            P = e.prototype,
            x = P[d] || P["@@iterator"] || (v && P[v]),
            w = x || M(v),
            O = v ? (C ? M("entries") : w) : void 0,
            _ = ("Array" == t && P.entries) || x;
          if (
            (_ &&
              ($ = c(_.call(new e()))) !== Object.prototype &&
              $.next &&
              (u($, S, !0), n || "function" == typeof $[d] || o($, d, f)),
            C &&
              x &&
              x.name !== g &&
              ((D = !0),
              (w = function () {
                return x.call(this);
              })),
            (!n || b) && (h || D || !P[d]) && o(P, d, w),
            (a[t] = w),
            (a[S] = f),
            v)
          ) {
            if (
              ((E = {
                values: C ? w : M(g),
                keys: m ? w : M("keys"),
                entries: O,
              }),
              b)
            )
              for (y in E) y in P || s(P, y, E[y]);
            else i(i.P + i.F * (h || D), t, E);
          }
          return E;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(30),
          i = {};
        (i[r(0)("toStringTag")] = "z"),
          i + "" != "[object z]" &&
            r(14)(
              Object.prototype,
              "toString",
              function () {
                return "[object " + n(this) + "]";
              },
              !0
            );
      },
      function (e, t, r) {
        var n = r(59),
          i = r(32).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return n(e, i);
          };
      },
      function (e, t, r) {
        var n = r(1).document;
        e.exports = n && n.documentElement;
      },
      function (e, t, r) {
        var n = r(6),
          i = r(146),
          s = r(32),
          o = r(33)("IE_PROTO"),
          a = function () {},
          l = function () {
            var e,
              t = r(38)("iframe"),
              n = s.length;
            for (
              t.style.display = "none",
                r(54).appendChild(t),
                t.src = "javascript:",
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                l = e.F;
              n--;

            )
              delete l.prototype[s[n]];
            return l();
          };
        e.exports =
          Object.create ||
          function (e, t) {
            var r;
            return (
              null !== e
                ? ((a.prototype = n(e)),
                  (r = new a()),
                  (a.prototype = null),
                  (r[o] = e))
                : (r = l()),
              void 0 === t ? r : i(r, t)
            );
          };
      },
      function (e, t, r) {
        var n = r(34),
          i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(n(e), 9007199254740991) : 0;
        };
      },
      function (e, t, r) {
        var n = r(7),
          i = r(56),
          s = r(148);
        e.exports = function (e) {
          return function (t, r, o) {
            var a,
              l = n(t),
              u = i(l.length),
              c = s(o, u);
            if (e && r != r) {
              for (; u > c; ) if ((a = l[c++]) != a) return !0;
            } else
              for (; u > c; c++)
                if ((e || c in l) && l[c] === r) return e || c || 0;
            return !e && -1;
          };
        };
      },
      function (e, t, r) {
        var n = r(20);
        e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == n(e) ? e.split("") : Object(e);
            };
      },
      function (e, t, r) {
        var n = r(12),
          i = r(7),
          s = r(57)(!1),
          o = r(33)("IE_PROTO");
        e.exports = function (e, t) {
          var r,
            a = i(e),
            l = 0,
            u = [];
          for (r in a) r != o && n(a, r) && u.push(r);
          for (; t.length > l; ) n(a, (r = t[l++])) && (~s(u, r) || u.push(r));
          return u;
        };
      },
      function (e, t, r) {
        t.f = r(0);
      },
      function (e, t, r) {
        e.exports =
          !r(11) &&
          !r(23)(function () {
            return (
              7 !=
              Object.defineProperty(r(38)("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(24)) && n.__esModule ? n : { default: n },
          o = r(39);
        let a = Symbol("onDragStart"),
          l = Symbol("onDragOverContainer"),
          u = Symbol("onDragOver"),
          c = Symbol("onDragStop");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(
              e,
              i({}, t, {
                announcements: i(
                  {},
                  {
                    "sortable:sorted": function ({ dragEvent: e }) {
                      let t =
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "sortable element";
                      if (e.over) {
                        let r =
                          e.over.textContent.trim() ||
                          e.over.id ||
                          "sortable element";
                        return e.source.compareDocumentPosition(e.over) &
                          Node.DOCUMENT_POSITION_FOLLOWING
                          ? `Placed ${t} after ${r}`
                          : `Placed ${t} before ${r}`;
                      }
                      return `Placed ${t} into a different container`;
                    },
                  },
                  t.announcements || {}
                ),
              })
            ),
              (this.startIndex = null),
              (this.startContainer = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              this.on("drag:start", this[a])
                .on("drag:over:container", this[l])
                .on("drag:over", this[u])
                .on("drag:stop", this[c]);
          }
          destroy() {
            super.destroy(),
              this.off("drag:start", this[a])
                .off("drag:over:container", this[l])
                .off("drag:over", this[u])
                .off("drag:stop", this[c]);
          }
          index(e) {
            return this.getDraggableElementsForContainer(e.parentNode).indexOf(
              e
            );
          }
          [a](e) {
            (this.startContainer = e.source.parentNode),
              (this.startIndex = this.index(e.source));
            let t = new o.SortableStartEvent({
              dragEvent: e,
              startIndex: this.startIndex,
              startContainer: this.startContainer,
            });
            this.trigger(t), t.canceled() && e.cancel();
          }
          [l](e) {
            if (e.canceled()) return;
            let { source: t, over: r, overContainer: n } = e,
              i = this.index(t),
              s = new o.SortableSortEvent({
                dragEvent: e,
                currentIndex: i,
                source: t,
                over: r,
              });
            if ((this.trigger(s), s.canceled())) return;
            let a = g({
              source: t,
              over: r,
              overContainer: n,
              children: this.getDraggableElementsForContainer(n),
            });
            if (!a) return;
            let { oldContainer: l, newContainer: u } = a,
              c = this.index(e.source),
              d = new o.SortableSortedEvent({
                dragEvent: e,
                oldIndex: i,
                newIndex: c,
                oldContainer: l,
                newContainer: u,
              });
            this.trigger(d);
          }
          [u](e) {
            if (e.over === e.originalSource || e.over === e.source) return;
            let { source: t, over: r, overContainer: n } = e,
              i = this.index(t),
              s = new o.SortableSortEvent({
                dragEvent: e,
                currentIndex: i,
                source: t,
                over: r,
              });
            if ((this.trigger(s), s.canceled())) return;
            let a = g({
              source: t,
              over: r,
              overContainer: n,
              children: this.getDraggableElementsForContainer(n),
            });
            if (!a) return;
            let { oldContainer: l, newContainer: u } = a,
              c = this.index(t),
              d = new o.SortableSortedEvent({
                dragEvent: e,
                oldIndex: i,
                newIndex: c,
                oldContainer: l,
                newContainer: u,
              });
            this.trigger(d);
          }
          [c](e) {
            let t = new o.SortableStopEvent({
              dragEvent: e,
              oldIndex: this.startIndex,
              newIndex: this.index(e.source),
              oldContainer: this.startContainer,
              newContainer: e.source.parentNode,
            });
            this.trigger(t),
              (this.startIndex = null),
              (this.startContainer = null);
          }
        }
        function h(e) {
          return Array.prototype.indexOf.call(e.parentNode.children, e);
        }
        function g({ source: e, over: t, overContainer: r, children: n }) {
          let i = !n.length,
            s = e.parentNode !== r;
          return i
            ? (function (e, t) {
                let r = e.parentNode;
                return t.appendChild(e), { oldContainer: r, newContainer: t };
              })(e, r)
            : t && !s
            ? (function (e, t) {
                let r = h(e),
                  n = h(t);
                return (
                  r < n
                    ? e.parentNode.insertBefore(e, t.nextElementSibling)
                    : e.parentNode.insertBefore(e, t),
                  { oldContainer: e.parentNode, newContainer: e.parentNode }
                );
              })(e, t)
            : s
            ? (function (e, t, r) {
                let n = e.parentNode;
                return (
                  t ? t.parentNode.insertBefore(e, t) : r.appendChild(e),
                  { oldContainer: n, newContainer: e.parentNode }
                );
              })(e, t, r)
            : null;
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SortableStopEvent =
            t.SortableSortedEvent =
            t.SortableSortEvent =
            t.SortableStartEvent =
            t.SortableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.SortableEvent = s), (s.type = "sortable");
        class o extends s {
          get startIndex() {
            return this.data.startIndex;
          }
          get startContainer() {
            return this.data.startContainer;
          }
        }
        (t.SortableStartEvent = o),
          (o.type = "sortable:start"),
          (o.cancelable = !0);
        class a extends s {
          get currentIndex() {
            return this.data.currentIndex;
          }
          get over() {
            return this.data.oldIndex;
          }
          get overContainer() {
            return this.data.newIndex;
          }
        }
        (t.SortableSortEvent = a),
          (a.type = "sortable:sort"),
          (a.cancelable = !0);
        class l extends s {
          get oldIndex() {
            return this.data.oldIndex;
          }
          get newIndex() {
            return this.data.newIndex;
          }
          get oldContainer() {
            return this.data.oldContainer;
          }
          get newContainer() {
            return this.data.newContainer;
          }
        }
        (t.SortableSortedEvent = l), (l.type = "sortable:sorted");
        class u extends s {
          get oldIndex() {
            return this.data.oldIndex;
          }
          get newIndex() {
            return this.data.newIndex;
          }
          get oldContainer() {
            return this.data.oldContainer;
          }
          get newContainer() {
            return this.data.newContainer;
          }
        }
        (t.SortableStopEvent = u), (u.type = "sortable:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(39);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(62)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(24)) && n.__esModule ? n : { default: n },
          o = r(40);
        let a = Symbol("onDragStart"),
          l = Symbol("onDragOver"),
          u = Symbol("onDragStop");
        class c extends s.default {
          constructor(e = [], t = {}) {
            super(
              e,
              i({}, t, {
                announcements: i(
                  {},
                  {
                    "swappabled:swapped": function ({
                      dragEvent: e,
                      swappedElement: t,
                    }) {
                      return `Swapped ${
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "swappable element"
                      } with ${
                        t.textContent.trim() || t.id || "swappable element"
                      }`;
                    },
                  },
                  t.announcements || {}
                ),
              })
            ),
              (this.lastOver = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              this.on("drag:start", this[a])
                .on("drag:over", this[l])
                .on("drag:stop", this[u]);
          }
          destroy() {
            super.destroy(),
              this.off("drag:start", this._onDragStart)
                .off("drag:over", this._onDragOver)
                .off("drag:stop", this._onDragStop);
          }
          [a](e) {
            let t = new o.SwappableStartEvent({ dragEvent: e });
            this.trigger(t), t.canceled() && e.cancel();
          }
          [l](e) {
            if (
              e.over === e.originalSource ||
              e.over === e.source ||
              e.canceled()
            )
              return;
            let t = new o.SwappableSwapEvent({
              dragEvent: e,
              over: e.over,
              overContainer: e.overContainer,
            });
            if ((this.trigger(t), t.canceled())) return;
            this.lastOver &&
              this.lastOver !== e.over &&
              d(this.lastOver, e.source),
              this.lastOver === e.over
                ? (this.lastOver = null)
                : (this.lastOver = e.over),
              d(e.source, e.over);
            let r = new o.SwappableSwappedEvent({
              dragEvent: e,
              swappedElement: e.over,
            });
            this.trigger(r);
          }
          [u](e) {
            let t = new o.SwappableStopEvent({ dragEvent: e });
            this.trigger(t), (this.lastOver = null);
          }
        }
        function d(e, t) {
          let r = t.parentNode,
            n = e.parentNode;
          !(function (e) {
            let t = document.createElement("div");
            e(t), t.parentNode.removeChild(t);
          })((i) => {
            n.insertBefore(i, e), r.insertBefore(e, t), n.insertBefore(t, i);
          });
        }
        t.default = c;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SwappableStopEvent =
            t.SwappableSwappedEvent =
            t.SwappableSwapEvent =
            t.SwappableStartEvent =
            t.SwappableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.SwappableEvent = s), (s.type = "swappable");
        class o extends s {}
        (t.SwappableStartEvent = o),
          (o.type = "swappable:start"),
          (o.cancelable = !0);
        class a extends s {
          get over() {
            return this.data.over;
          }
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.SwappableSwapEvent = a),
          (a.type = "swappable:swap"),
          (a.cancelable = !0);
        class l extends s {
          get swappedElement() {
            return this.data.swappedElement;
          }
        }
        (t.SwappableSwappedEvent = l), (l.type = "swappable:swapped");
        class u extends s {}
        (t.SwappableStopEvent = u), (u.type = "swappable:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(40);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(65)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(5),
          o = (n = r(24)) && n.__esModule ? n : { default: n },
          a = r(41);
        let l = Symbol("onDragStart"),
          u = Symbol("onDragMove"),
          c = Symbol("onDragStop"),
          d = Symbol("dropInDropZone"),
          h = Symbol("returnToOriginalDropzone"),
          g = Symbol("closestDropzone"),
          f = Symbol("getDropzones");
        class p extends o.default {
          constructor(e = [], t = {}) {
            super(
              e,
              i({}, { dropzone: ".draggable-droppable" }, t, {
                classes: i(
                  {},
                  {
                    "droppable:active": "draggable-dropzone--active",
                    "droppable:occupied": "draggable-dropzone--occupied",
                  },
                  t.classes || {}
                ),
                announcements: i(
                  {},
                  {
                    "droppable:dropped": function ({
                      dragEvent: e,
                      dropzone: t,
                    }) {
                      return `Dropped ${
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "draggable element"
                      } into ${
                        t.textContent.trim() || t.id || "droppable element"
                      }`;
                    },
                    "droppable:returned": function ({
                      dragEvent: e,
                      dropzone: t,
                    }) {
                      return `Returned ${
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "draggable element"
                      } from ${
                        t.textContent.trim() || t.id || "droppable element"
                      }`;
                    },
                  },
                  t.announcements || {}
                ),
              })
            ),
              (this.dropzones = null),
              (this.lastDropzone = null),
              (this.initialDropzone = null),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              this.on("drag:start", this[l])
                .on("drag:move", this[u])
                .on("drag:stop", this[c]);
          }
          destroy() {
            super.destroy(),
              this.off("drag:start", this[l])
                .off("drag:move", this[u])
                .off("drag:stop", this[c]);
          }
          [l](e) {
            if (e.canceled()) return;
            this.dropzones = [...this[f]()];
            let t = (0, s.closest)(e.sensorEvent.target, this.options.dropzone);
            if (!t) return void e.cancel();
            let r = new a.DroppableStartEvent({ dragEvent: e, dropzone: t });
            if ((this.trigger(r), r.canceled())) e.cancel();
            else
              for (let n of ((this.initialDropzone = t), this.dropzones))
                n.classList.contains(
                  this.getClassNameFor("droppable:occupied")
                ) || n.classList.add(this.getClassNameFor("droppable:active"));
          }
          [u](e) {
            if (e.canceled()) return;
            let t = this[g](e.sensorEvent.target);
            t &&
            !t.classList.contains(this.getClassNameFor("droppable:occupied")) &&
            this[d](e, t)
              ? (this.lastDropzone = t)
              : (t && t !== this.initialDropzone) ||
                !this.lastDropzone ||
                (this[h](e), (this.lastDropzone = null));
          }
          [c](e) {
            let t = new a.DroppableStopEvent({
              dragEvent: e,
              dropzone: this.lastDropzone || this.initialDropzone,
            });
            this.trigger(t);
            let r = this.getClassNameFor("droppable:occupied");
            for (let n of this.dropzones)
              n.classList.remove(this.getClassNameFor("droppable:active"));
            this.lastDropzone &&
              this.lastDropzone !== this.initialDropzone &&
              this.initialDropzone.classList.remove(r),
              (this.dropzones = null),
              (this.lastDropzone = null),
              (this.initialDropzone = null);
          }
          [d](e, t) {
            let r = new a.DroppableDroppedEvent({ dragEvent: e, dropzone: t });
            if ((this.trigger(r), r.canceled())) return !1;
            let n = this.getClassNameFor("droppable:occupied");
            return (
              this.lastDropzone && this.lastDropzone.classList.remove(n),
              t.appendChild(e.source),
              t.classList.add(n),
              !0
            );
          }
          [h](e) {
            let t = new a.DroppableReturnedEvent({
              dragEvent: e,
              dropzone: this.lastDropzone,
            });
            this.trigger(t),
              t.canceled() ||
                (this.initialDropzone.appendChild(e.source),
                this.lastDropzone.classList.remove(
                  this.getClassNameFor("droppable:occupied")
                ));
          }
          [g](e) {
            return this.dropzones ? (0, s.closest)(e, this.dropzones) : null;
          }
          [f]() {
            let e = this.options.dropzone;
            return "string" == typeof e
              ? document.querySelectorAll(e)
              : e instanceof NodeList || e instanceof Array
              ? e
              : "function" == typeof e
              ? e()
              : [];
          }
        }
        t.default = p;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DroppableStopEvent =
            t.DroppableReturnedEvent =
            t.DroppableDroppedEvent =
            t.DroppableStartEvent =
            t.DroppableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.DroppableEvent = s), (s.type = "droppable");
        class o extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableStartEvent = o),
          (o.type = "droppable:start"),
          (o.cancelable = !0);
        class a extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableDroppedEvent = a),
          (a.type = "droppable:dropped"),
          (a.cancelable = !0);
        class l extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableReturnedEvent = l),
          (l.type = "droppable:returned"),
          (l.cancelable = !0);
        class u extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableStopEvent = u),
          (u.type = "droppable:stop"),
          (u.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(41);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(68)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor() {
              this.callbacks = {};
            }
            on(e, ...t) {
              return (
                this.callbacks[e] || (this.callbacks[e] = []),
                this.callbacks[e].push(...t),
                this
              );
            }
            off(e, t) {
              if (!this.callbacks[e]) return null;
              let r = this.callbacks[e].slice(0);
              for (let n = 0; n < r.length; n++)
                t === r[n] && this.callbacks[e].splice(n, 1);
              return this;
            }
            trigger(e) {
              if (!this.callbacks[e.type]) return null;
              let t = [...this.callbacks[e.type]],
                r = [];
              for (let n = t.length - 1; n >= 0; n--) {
                let i = t[n];
                try {
                  i(e);
                } catch (s) {
                  r.push(s);
                }
              }
              return (
                r.length &&
                  console.error(
                    `Draggable caught errors while triggering '${e.type}'`,
                    r
                  ),
                this
              );
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(71)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(5),
          o = r(42),
          a = (n = r(72)) && n.__esModule ? n : { default: n },
          l = r(29),
          u = r(43),
          c = r(44);
        let d = Symbol("onDragStart"),
          h = Symbol("onDragMove"),
          g = Symbol("onDragStop"),
          f = Symbol("onDragPressure"),
          p = (t.defaultOptions = {
            draggable: ".draggable-source",
            handle: null,
            delay: 100,
            placedTimeout: 800,
            plugins: [],
            sensors: [],
          });
        class v {
          constructor(e = [document.body], t = {}) {
            if (e instanceof NodeList || e instanceof Array)
              this.containers = [...e];
            else {
              if (!(e instanceof HTMLElement))
                throw Error(
                  "Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`"
                );
              this.containers = [e];
            }
            (this.options = i({}, p, t, {
              classes: i(
                {},
                {
                  "container:dragging": "draggable-container--is-dragging",
                  "source:dragging": "draggable-source--is-dragging",
                  "source:placed": "draggable-source--placed",
                  "container:placed": "draggable-container--placed",
                  "body:dragging": "draggable--is-dragging",
                  "draggable:over": "draggable--over",
                  "container:over": "draggable-container--over",
                  "source:original": "draggable--original",
                  mirror: "draggable-mirror",
                },
                t.classes || {}
              ),
              announcements: i(
                {},
                {
                  "drag:start": (e) =>
                    `Picked up ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                  "drag:stop": (e) =>
                    `Released ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                },
                t.announcements || {}
              ),
            })),
              (this.emitter = new a.default()),
              (this.dragging = !1),
              (this.plugins = []),
              (this.sensors = []),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this)),
              (this[f] = this[f].bind(this)),
              document.addEventListener("drag:start", this[d], !0),
              document.addEventListener("drag:move", this[h], !0),
              document.addEventListener("drag:stop", this[g], !0),
              document.addEventListener("drag:pressure", this[f], !0);
            let r = Object.values(v.Plugins).map((e) => e),
              n = [l.MouseSensor, l.TouchSensor];
            this.addPlugin(...r, ...this.options.plugins),
              this.addSensor(...n, ...this.options.sensors);
            let s = new u.DraggableInitializedEvent({ draggable: this });
            this.on("mirror:created", ({ mirror: e }) => (this.mirror = e)),
              this.on("mirror:destroy", () => (this.mirror = null)),
              this.trigger(s);
          }
          destroy() {
            document.removeEventListener("drag:start", this[d], !0),
              document.removeEventListener("drag:move", this[h], !0),
              document.removeEventListener("drag:stop", this[g], !0),
              document.removeEventListener("drag:pressure", this[f], !0);
            let e = new u.DraggableDestroyEvent({ draggable: this });
            this.trigger(e),
              this.removePlugin(...this.plugins.map((e) => e.constructor)),
              this.removeSensor(...this.sensors.map((e) => e.constructor));
          }
          addPlugin(...e) {
            let t = e.map((e) => new e(this));
            return (
              t.forEach((e) => e.attach()),
              (this.plugins = [...this.plugins, ...t]),
              this
            );
          }
          removePlugin(...e) {
            return (
              this.plugins
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.plugins = this.plugins.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addSensor(...e) {
            let t = e.map((e) => new e(this.containers, this.options));
            return (
              t.forEach((e) => e.attach()),
              (this.sensors = [...this.sensors, ...t]),
              this
            );
          }
          removeSensor(...e) {
            return (
              this.sensors
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.sensors = this.sensors.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addContainer(...e) {
            return (
              (this.containers = [...this.containers, ...e]),
              this.sensors.forEach((t) => t.addContainer(...e)),
              this
            );
          }
          removeContainer(...e) {
            return (
              (this.containers = this.containers.filter((t) => !e.includes(t))),
              this.sensors.forEach((t) => t.removeContainer(...e)),
              this
            );
          }
          on(e, ...t) {
            return this.emitter.on(e, ...t), this;
          }
          off(e, t) {
            return this.emitter.off(e, t), this;
          }
          trigger(e) {
            return this.emitter.trigger(e), this;
          }
          getClassNameFor(e) {
            return this.options.classes[e];
          }
          isDragging() {
            return Boolean(this.dragging);
          }
          getDraggableElements() {
            return this.containers.reduce(
              (e, t) => [...e, ...this.getDraggableElementsForContainer(t)],
              []
            );
          }
          getDraggableElementsForContainer(e) {
            return [...e.querySelectorAll(this.options.draggable)].filter(
              (e) => e !== this.originalSource && e !== this.mirror
            );
          }
          [d](e) {
            let t = m(e),
              { target: r, container: n } = t;
            if (!this.containers.includes(n)) return;
            if (
              (this.options.handle &&
                r &&
                !(0, s.closest)(r, this.options.handle)) ||
              ((this.originalSource = (0, s.closest)(
                r,
                this.options.draggable
              )),
              (this.sourceContainer = n),
              !this.originalSource)
            )
              return void t.cancel();
            this.lastPlacedSource &&
              this.lastPlacedContainer &&
              (clearTimeout(this.placedTimeoutID),
              this.lastPlacedSource.classList.remove(
                this.getClassNameFor("source:placed")
              ),
              this.lastPlacedContainer.classList.remove(
                this.getClassNameFor("container:placed")
              )),
              (this.source = this.originalSource.cloneNode(!0)),
              this.originalSource.parentNode.insertBefore(
                this.source,
                this.originalSource
              ),
              (this.originalSource.style.display = "none");
            let o = new c.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: n,
              sensorEvent: t,
            });
            if (
              (this.trigger(o), (this.dragging = !o.canceled()), o.canceled())
            )
              return (
                this.source.parentNode.removeChild(this.source),
                void (this.originalSource.style.display = null)
              );
            this.originalSource.classList.add(
              this.getClassNameFor("source:original")
            ),
              this.source.classList.add(
                this.getClassNameFor("source:dragging")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.add(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, "none"),
              requestAnimationFrame(() => {
                let t = m(e).clone({ target: this.source });
                this[h](i({}, e, { detail: t }));
              });
          }
          [h](e) {
            if (!this.dragging) return;
            let t = m(e),
              { container: r } = t,
              n = t.target,
              i = new c.DragMoveEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
              });
            this.trigger(i),
              i.canceled() && t.cancel(),
              (n = (0, s.closest)(n, this.options.draggable));
            let o = (0, s.closest)(t.target, this.containers),
              a = t.overContainer || o,
              l = this.currentOverContainer && a !== this.currentOverContainer,
              u = this.currentOver && n !== this.currentOver,
              d = a && this.currentOverContainer !== a,
              h = o && n && this.currentOver !== n;
            if (u) {
              let g = new c.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                over: this.currentOver,
              });
              this.currentOver.classList.remove(
                this.getClassNameFor("draggable:over")
              ),
                (this.currentOver = null),
                this.trigger(g);
            }
            if (l) {
              let f = new c.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: this.currentOverContainer,
              });
              this.currentOverContainer.classList.remove(
                this.getClassNameFor("container:over")
              ),
                (this.currentOverContainer = null),
                this.trigger(f);
            }
            if (d) {
              a.classList.add(this.getClassNameFor("container:over"));
              let p = new c.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
              });
              (this.currentOverContainer = a), this.trigger(p);
            }
            if (h) {
              n.classList.add(this.getClassNameFor("draggable:over"));
              let v = new c.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
                over: n,
              });
              (this.currentOver = n), this.trigger(v);
            }
          }
          [g](e) {
            if (!this.dragging) return;
            this.dragging = !1;
            let t = new c.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: e.sensorEvent,
              sourceContainer: this.sourceContainer,
            });
            this.trigger(t),
              this.source.parentNode.insertBefore(
                this.originalSource,
                this.source
              ),
              this.source.parentNode.removeChild(this.source),
              (this.originalSource.style.display = ""),
              this.source.classList.remove(
                this.getClassNameFor("source:dragging")
              ),
              this.originalSource.classList.remove(
                this.getClassNameFor("source:original")
              ),
              this.originalSource.classList.add(
                this.getClassNameFor("source:placed")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:placed")
              ),
              this.sourceContainer.classList.remove(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.remove(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, ""),
              this.currentOver &&
                this.currentOver.classList.remove(
                  this.getClassNameFor("draggable:over")
                ),
              this.currentOverContainer &&
                this.currentOverContainer.classList.remove(
                  this.getClassNameFor("container:over")
                ),
              (this.lastPlacedSource = this.originalSource),
              (this.lastPlacedContainer = this.sourceContainer),
              (this.placedTimeoutID = setTimeout(() => {
                this.lastPlacedSource &&
                  this.lastPlacedSource.classList.remove(
                    this.getClassNameFor("source:placed")
                  ),
                  this.lastPlacedContainer &&
                    this.lastPlacedContainer.classList.remove(
                      this.getClassNameFor("container:placed")
                    ),
                  (this.lastPlacedSource = null),
                  (this.lastPlacedContainer = null);
              }, this.options.placedTimeout)),
              (this.source = null),
              (this.originalSource = null),
              (this.currentOverContainer = null),
              (this.currentOver = null),
              (this.sourceContainer = null);
          }
          [f](e) {
            if (!this.dragging) return;
            let t = m(e),
              r =
                this.source ||
                (0, s.closest)(t.originalEvent.target, this.options.draggable),
              n = new c.DragPressureEvent({
                sensorEvent: t,
                source: r,
                pressure: t.pressure,
              });
            this.trigger(n);
          }
        }
        function m(e) {
          return e.detail;
        }
        function b(e, t) {
          (e.style.webkitUserSelect = t),
            (e.style.mozUserSelect = t),
            (e.style.msUserSelect = t),
            (e.style.oUserSelect = t),
            (e.style.userSelect = t);
        }
        (t.default = v),
          (v.Plugins = {
            Announcement: o.Announcement,
            Focusable: o.Focusable,
            Mirror: o.Mirror,
            Scrollable: o.Scrollable,
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.scroll =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(5);
        let a = (t.onDragStart = Symbol("onDragStart")),
          l = (t.onDragMove = Symbol("onDragMove")),
          u = (t.onDragStop = Symbol("onDragStop")),
          c = (t.scroll = Symbol("scroll")),
          d = (t.defaultOptions = {
            speed: 6,
            sensitivity: 50,
            scrollableElements: [],
          });
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.currentMousePosition = null),
              (this.scrollAnimationFrame = null),
              (this.scrollableElement = null),
              (this.findScrollableElementFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[a])
              .on("drag:move", this[l])
              .on("drag:stop", this[u]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[a])
              .off("drag:move", this[l])
              .off("drag:stop", this[u]);
          }
          getOptions() {
            return this.draggable.options.scrollable || {};
          }
          getScrollableElement(e) {
            return this.hasDefinedScrollableElements()
              ? (0, o.closest)(e, this.options.scrollableElements) ||
                  document.documentElement
              : (function (e) {
                  if (!e) return g();
                  let t = getComputedStyle(e).getPropertyValue("position"),
                    r = "absolute" === t,
                    n = (0, o.closest)(e, (e) => {
                      var t;
                      return (
                        (!r ||
                          "static" !==
                            getComputedStyle((t = e)).getPropertyValue(
                              "position"
                            )) &&
                        (function (e) {
                          let t = getComputedStyle(e, null),
                            r =
                              t.getPropertyValue("overflow") +
                              t.getPropertyValue("overflow-y") +
                              t.getPropertyValue("overflow-x");
                          return /(auto|scroll)/.test(r);
                        })(e)
                      );
                    });
                  return "fixed" !== t && n ? n : g();
                })(e);
          }
          hasDefinedScrollableElements() {
            return Boolean(0 !== this.options.scrollableElements.length);
          }
          [a](e) {
            this.findScrollableElementFrame = requestAnimationFrame(() => {
              this.scrollableElement = this.getScrollableElement(e.source);
            });
          }
          [l](e) {
            if (
              ((this.findScrollableElementFrame = requestAnimationFrame(() => {
                this.scrollableElement = this.getScrollableElement(
                  e.sensorEvent.target
                );
              })),
              !this.scrollableElement)
            )
              return;
            let t = e.sensorEvent,
              r = { x: 0, y: 0 };
            "ontouchstart" in window &&
              ((r.y =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
              (r.x =
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0)),
              (this.currentMousePosition = {
                clientX: t.clientX - r.x,
                clientY: t.clientY - r.y,
              }),
              (this.scrollAnimationFrame = requestAnimationFrame(this[c]));
          }
          [u]() {
            cancelAnimationFrame(this.scrollAnimationFrame),
              cancelAnimationFrame(this.findScrollableElementFrame),
              (this.scrollableElement = null),
              (this.scrollAnimationFrame = null),
              (this.findScrollableElementFrame = null),
              (this.currentMousePosition = null);
          }
          [c]() {
            if (!this.scrollableElement || !this.currentMousePosition) return;
            cancelAnimationFrame(this.scrollAnimationFrame);
            let { speed: e, sensitivity: t } = this.options,
              r = this.scrollableElement.getBoundingClientRect(),
              n = r.bottom > window.innerHeight,
              i = r.top < 0 || n,
              s = g(),
              o = this.scrollableElement,
              a = this.currentMousePosition.clientX,
              l = this.currentMousePosition.clientY;
            if (o === document.body || o === document.documentElement || i) {
              let { innerHeight: u, innerWidth: d } = window;
              l < t ? (s.scrollTop -= e) : u - l < t && (s.scrollTop += e),
                a < t ? (s.scrollLeft -= e) : d - a < t && (s.scrollLeft += e);
            } else {
              let { offsetHeight: h, offsetWidth: f } = o;
              r.top + h - l < t
                ? (o.scrollTop += e)
                : l - r.top < t && (o.scrollTop -= e),
                r.left + f - a < t
                  ? (o.scrollLeft += e)
                  : a - r.left < t && (o.scrollLeft -= e);
            }
            this.scrollAnimationFrame = requestAnimationFrame(this[c]);
          }
        }
        function g() {
          return document.scrollingElement || document.documentElement;
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(74),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MirrorDestroyEvent =
            t.MirrorMoveEvent =
            t.MirrorAttachedEvent =
            t.MirrorCreatedEvent =
            t.MirrorCreateEvent =
            t.MirrorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get dragEvent() {
            return this.data.dragEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        t.MirrorEvent = s;
        class o extends s {}
        (t.MirrorCreateEvent = o), (o.type = "mirror:create");
        class a extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorCreatedEvent = a), (a.type = "mirror:created");
        class l extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorAttachedEvent = l), (l.type = "mirror:attached");
        class u extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorMoveEvent = u), (u.type = "mirror:move"), (u.cancelable = !0);
        class c extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorDestroyEvent = c),
          (c.type = "mirror:destroy"),
          (c.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(76);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.getAppendableContainer =
            t.onScroll =
            t.onMirrorMove =
            t.onMirrorCreated =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(77);
        function a(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        let l = (t.onDragStart = Symbol("onDragStart")),
          u = (t.onDragMove = Symbol("onDragMove")),
          c = (t.onDragStop = Symbol("onDragStop")),
          d = (t.onMirrorCreated = Symbol("onMirrorCreated")),
          h = (t.onMirrorMove = Symbol("onMirrorMove")),
          g = (t.onScroll = Symbol("onScroll")),
          f = (t.getAppendableContainer = Symbol("getAppendableContainer")),
          p = (t.defaultOptions = {
            constrainDimensions: !1,
            xAxis: !0,
            yAxis: !0,
            cursorOffsetX: null,
            cursorOffsetY: null,
          });
        class v extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, p, this.getOptions())),
              (this.scrollOffset = { x: 0, y: 0 }),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              }),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[l])
              .on("drag:move", this[u])
              .on("drag:stop", this[c])
              .on("mirror:created", this[d])
              .on("mirror:move", this[h]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[l])
              .off("drag:move", this[u])
              .off("drag:stop", this[c])
              .off("mirror:created", this[d])
              .off("mirror:move", this[h]);
          }
          getOptions() {
            return this.draggable.options.mirror || {};
          }
          [l](e) {
            var t;
            if (e.canceled()) return;
            "ontouchstart" in window &&
              document.addEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              });
            let {
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
              } = e,
              a = new o.MirrorCreateEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
              });
            if (
              (this.draggable.trigger(a),
              (t = s),
              /^drag/.test(t.originalEvent.type) || a.canceled())
            )
              return;
            let l = this[f](r) || i;
            this.mirror = r.cloneNode(!0);
            let u = new o.MirrorCreatedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              }),
              c = new o.MirrorAttachedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(u),
              l.appendChild(this.mirror),
              this.draggable.trigger(c);
          }
          [u](e) {
            if (!this.mirror || e.canceled()) return;
            let {
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
              } = e,
              s = new o.MirrorMoveEvent({
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(s);
          }
          [c](e) {
            if (
              ("ontouchstart" in window &&
                document.removeEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = { x: 0, y: 0 }),
              (this.scrollOffset = { x: 0, y: 0 }),
              !this.mirror)
            )
              return;
            let { source: t, sourceContainer: r, sensorEvent: n } = e,
              i = new o.MirrorDestroyEvent({
                source: t,
                mirror: this.mirror,
                sourceContainer: r,
                sensorEvent: n,
                dragEvent: e,
              });
            this.draggable.trigger(i),
              i.canceled() || this.mirror.parentNode.removeChild(this.mirror);
          }
          [g]() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y,
            };
          }
          [d]({ mirror: e, source: t, sensorEvent: r }) {
            let n = {
              mirror: e,
              source: t,
              sensorEvent: r,
              mirrorClass: this.draggable.getClassNameFor("mirror"),
              scrollOffset: this.scrollOffset,
              options: this.options,
            };
            return Promise.resolve(n)
              .then(m)
              .then(b)
              .then(E)
              .then(y)
              .then(M({ initial: !0 }))
              .then($)
              .then((e) => {
                let { mirrorOffset: t, initialX: r, initialY: n } = e,
                  s = a(e, ["mirrorOffset", "initialX", "initialY"]);
                return (
                  (this.mirrorOffset = t),
                  (this.initialX = r),
                  (this.initialY = n),
                  i({ mirrorOffset: t, initialX: r, initialY: n }, s)
                );
              });
          }
          [h](e) {
            if (e.canceled()) return null;
            let t = {
              mirror: e.mirror,
              sensorEvent: e.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset,
            };
            return Promise.resolve(t).then(M({ raf: !0 }));
          }
          [f](e) {
            let t = this.options.appendTo;
            return "string" == typeof t
              ? document.querySelector(t)
              : t instanceof HTMLElement
              ? t
              : "function" == typeof t
              ? t(e)
              : e.parentNode;
          }
        }
        function m(e) {
          let { source: t } = e,
            r = a(e, ["source"]);
          return S((e) => {
            let n = t.getBoundingClientRect();
            e(i({ source: t, sourceRect: n }, r));
          });
        }
        function b(e) {
          let { sensorEvent: t, sourceRect: r, options: n } = e,
            s = a(e, ["sensorEvent", "sourceRect", "options"]);
          return S((e) => {
            let o =
                null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
              a =
                null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
            e(
              i(
                {
                  sensorEvent: t,
                  sourceRect: r,
                  mirrorOffset: { top: o, left: a },
                  options: n,
                },
                s
              )
            );
          });
        }
        function E(e) {
          let { mirror: t, source: r, options: n } = e,
            s = a(e, ["mirror", "source", "options"]);
          return S((e) => {
            let o, a;
            if (n.constrainDimensions) {
              let l = getComputedStyle(r);
              (o = l.getPropertyValue("height")),
                (a = l.getPropertyValue("width"));
            }
            (t.style.position = "fixed"),
              (t.style.pointerEvents = "none"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.margin = 0),
              n.constrainDimensions &&
                ((t.style.height = o), (t.style.width = a)),
              e(i({ mirror: t, source: r, options: n }, s));
          });
        }
        function y(e) {
          let { mirror: t, mirrorClass: r } = e,
            n = a(e, ["mirror", "mirrorClass"]);
          return S((e) => {
            t.classList.add(r), e(i({ mirror: t, mirrorClass: r }, n));
          });
        }
        function $(e) {
          let { mirror: t } = e,
            r = a(e, ["mirror"]);
          return S((e) => {
            t.removeAttribute("id"), delete t.id, e(i({ mirror: t }, r));
          });
        }
        function M({ withFrame: e = !1, initial: t = !1 } = {}) {
          return (r) => {
            let {
                mirror: n,
                sensorEvent: s,
                mirrorOffset: o,
                initialY: l,
                initialX: u,
                scrollOffset: c,
                options: d,
              } = r,
              h = a(r, [
                "mirror",
                "sensorEvent",
                "mirrorOffset",
                "initialY",
                "initialX",
                "scrollOffset",
                "options",
              ]);
            return S(
              (e) => {
                let r = i(
                  { mirror: n, sensorEvent: s, mirrorOffset: o, options: d },
                  h
                );
                if (o) {
                  let a = s.clientX - o.left - c.x,
                    g = s.clientY - o.top - c.y;
                  (d.xAxis && d.yAxis) || t
                    ? (n.style.transform = `translate3d(${a}px, ${g}px, 0)`)
                    : d.xAxis && !d.yAxis
                    ? (n.style.transform = `translate3d(${a}px, ${l}px, 0)`)
                    : d.yAxis &&
                      !d.xAxis &&
                      (n.style.transform = `translate3d(${u}px, ${g}px, 0)`),
                    t && ((r.initialX = a), (r.initialY = g));
                }
                e(r);
              },
              { frame: e }
            );
          };
        }
        function S(e, { raf: t = !1 } = {}) {
          return new Promise((r, n) => {
            t
              ? requestAnimationFrame(() => {
                  e(r, n);
                })
              : e(r, n);
          });
        }
        t.default = v;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(78),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy");
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, {}, this.getOptions())),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable
              .on("draggable:initialize", this[o])
              .on("draggable:destroy", this[a]);
          }
          detach() {
            this.draggable
              .off("draggable:initialize", this[o])
              .off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.focusable || {};
          }
          getElements() {
            return [
              ...this.draggable.containers,
              ...this.draggable.getDraggableElements(),
            ];
          }
          [o]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) => {
                var t;
                Boolean(
                  !(t = e).getAttribute("tabindex") && -1 === t.tabIndex
                ) && (u.push(t), (t.tabIndex = 0));
              });
            });
          }
          [a]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) =>
                (function (e) {
                  let t = u.indexOf(e);
                  -1 !== t && ((e.tabIndex = -1), u.splice(t, 1));
                })(e)
              );
            });
          }
        }
        t.default = l;
        let u = [];
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(80)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy"),
          l = Symbol("announceEvent"),
          u = Symbol("announceMessage"),
          c = (t.defaultOptions = { expire: 7e3 });
        class d extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, c, this.getOptions())),
              (this.originalTriggerMethod = this.draggable.trigger),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable.on("draggable:initialize", this[o]);
          }
          detach() {
            this.draggable.off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.announcements || {};
          }
          [l](e) {
            let t = this.options[e.type];
            t && "string" == typeof t && this[u](t),
              t && "function" == typeof t && this[u](t(e));
          }
          [u](e) {
            !(function (e, { expire: t }) {
              let r = document.createElement("div");
              (r.textContent = e),
                h.appendChild(r),
                setTimeout(() => {
                  h.removeChild(r);
                }, t);
            })(e, { expire: this.options.expire });
          }
          [o]() {
            this.draggable.trigger = (e) => {
              try {
                this[l](e);
              } finally {
                this.originalTriggerMethod.call(this.draggable, e);
              }
            };
          }
          [a]() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }
        t.default = d;
        let h = (function () {
          let e = document.createElement("div");
          return (
            e.setAttribute("id", "draggable-live-region"),
            e.setAttribute("aria-relevant", "additions"),
            e.setAttribute("aria-atomic", "true"),
            e.setAttribute("aria-live", "assertive"),
            e.setAttribute("role", "log"),
            (e.style.position = "fixed"),
            (e.style.width = "1px"),
            (e.style.height = "1px"),
            (e.style.top = "-1px"),
            (e.style.overflow = "hidden"),
            e
          );
        })();
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(h);
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(82),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DraggableDestroyEvent =
            t.DraggableInitializedEvent =
            t.DraggableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get draggable() {
            return this.data.draggable;
          }
        }
        (t.DraggableEvent = s), (s.type = "draggable");
        class o extends s {}
        (t.DraggableInitializedEvent = o), (o.type = "draggable:initialize");
        class a extends s {}
        (t.DraggableDestroyEvent = a), (a.type = "draggable:destroy");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragStopEvent =
            t.DragPressureEvent =
            t.DragOutContainerEvent =
            t.DragOverContainerEvent =
            t.DragOutEvent =
            t.DragOverEvent =
            t.DragMoveEvent =
            t.DragStartEvent =
            t.DragEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get mirror() {
            return this.data.mirror;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        (t.DragEvent = s), (s.type = "drag");
        class o extends s {}
        (t.DragStartEvent = o), (o.type = "drag:start"), (o.cancelable = !0);
        class a extends s {}
        (t.DragMoveEvent = a), (a.type = "drag:move");
        class l extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOverEvent = l), (l.type = "drag:over"), (l.cancelable = !0);
        class u extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOutEvent = u), (u.type = "drag:out");
        class c extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOverContainerEvent = c), (c.type = "drag:over:container");
        class d extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOutContainerEvent = d), (d.type = "drag:out:container");
        class h extends s {
          get pressure() {
            return this.data.pressure;
          }
        }
        (t.DragPressureEvent = h), (h.type = "drag:pressure");
        class g extends s {}
        (t.DragStopEvent = g), (g.type = "drag:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onSortableSorted"),
          a = (t.defaultOptions = {
            duration: 150,
            easingFunction: "ease-in-out",
            horizontal: !1,
          });
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, a, this.getOptions())),
              (this.lastAnimationFrame = null),
              (this[o] = this[o].bind(this));
          }
          attach() {
            this.draggable.on("sortable:sorted", this[o]);
          }
          detach() {
            this.draggable.off("sortable:sorted", this[o]);
          }
          getOptions() {
            return this.draggable.options.swapAnimation || {};
          }
          [o]({ oldIndex: e, newIndex: t, dragEvent: r }) {
            let { source: n, over: i } = r;
            cancelAnimationFrame(this.lastAnimationFrame),
              (this.lastAnimationFrame = requestAnimationFrame(() => {
                e >= t ? u(n, i, this.options) : u(i, n, this.options);
              }));
          }
        }
        function u(e, t, { duration: r, easingFunction: n, horizontal: i }) {
          for (let s of [e, t]) s.style.pointerEvents = "none";
          if (i) {
            let o = e.offsetWidth;
            (e.style.transform = `translate3d(${o}px, 0, 0)`),
              (t.style.transform = `translate3d(-${o}px, 0, 0)`);
          } else {
            let a = e.offsetHeight;
            (e.style.transform = `translate3d(0, ${a}px, 0)`),
              (t.style.transform = `translate3d(0, -${a}px, 0)`);
          }
          requestAnimationFrame(() => {
            for (let i of [e, t])
              i.addEventListener("transitionend", c),
                (i.style.transition = `transform ${r}ms ${n}`),
                (i.style.transform = "");
          });
        }
        function c(e) {
          (e.target.style.transition = ""),
            (e.target.style.pointerEvents = ""),
            e.target.removeEventListener("transitionend", c);
        }
        t.default = l;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(86),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n },
          s = r(45);
        let o = Symbol("onDragStart"),
          a = Symbol("onDragStop"),
          l = Symbol("onDragOver"),
          u = Symbol("onDragOut"),
          c = Symbol("onMirrorCreated"),
          d = Symbol("onMirrorDestroy");
        class h extends i.default {
          constructor(e) {
            super(e),
              (this.firstSource = null),
              (this.mirror = null),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[o])
              .on("drag:stop", this[a])
              .on("drag:over", this[l])
              .on("drag:out", this[u])
              .on("droppable:over", this[l])
              .on("droppable:out", this[u])
              .on("mirror:created", this[c])
              .on("mirror:destroy", this[d]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[o])
              .off("drag:stop", this[a])
              .off("drag:over", this[l])
              .off("drag:out", this[u])
              .off("droppable:over", this[l])
              .off("droppable:out", this[u])
              .off("mirror:created", this[c])
              .off("mirror:destroy", this[d]);
          }
          [o](e) {
            e.canceled() || (this.firstSource = e.source);
          }
          [a]() {
            this.firstSource = null;
          }
          [l](e) {
            if (e.canceled()) return;
            let t = e.source || e.dragEvent.source;
            if (t === this.firstSource) return void (this.firstSource = null);
            let r = new s.SnapInEvent({
              dragEvent: e,
              snappable: e.over || e.droppable,
            });
            this.draggable.trigger(r),
              r.canceled() ||
                (this.mirror && (this.mirror.style.display = "none"),
                t.classList.remove(
                  this.draggable.getClassNameFor("source:dragging")
                ),
                t.classList.add(
                  this.draggable.getClassNameFor("source:placed")
                ),
                setTimeout(() => {
                  t.classList.remove(
                    this.draggable.getClassNameFor("source:placed")
                  );
                }, this.draggable.options.placedTimeout));
          }
          [u](e) {
            if (e.canceled()) return;
            let t = e.source || e.dragEvent.source,
              r = new s.SnapOutEvent({
                dragEvent: e,
                snappable: e.over || e.droppable,
              });
            this.draggable.trigger(r),
              r.canceled() ||
                (this.mirror && (this.mirror.style.display = ""),
                t.classList.add(
                  this.draggable.getClassNameFor("source:dragging")
                ));
          }
          [c]({ mirror: e }) {
            this.mirror = e;
          }
          [d]() {
            this.mirror = null;
          }
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
          get snappable() {
            return this.data.snappable;
          }
        }
        (t.SnapEvent = s), (s.type = "snap");
        class o extends s {}
        (t.SnapInEvent = o), (o.type = "snap:in"), (o.cancelable = !0);
        class a extends s {}
        (t.SnapOutEvent = a), (a.type = "snap:out"), (a.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(45);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(88)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(5);
        let a = Symbol("onMirrorCreated"),
          l = Symbol("onMirrorDestroy"),
          u = Symbol("onDragOver"),
          c = Symbol("resize"),
          d = (t.defaultOptions = {});
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.lastWidth = 0),
              (this.lastHeight = 0),
              (this.mirror = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this));
          }
          attach() {
            this.draggable
              .on("mirror:created", this[a])
              .on("drag:over", this[u])
              .on("drag:over:container", this[u]);
          }
          detach() {
            this.draggable
              .off("mirror:created", this[a])
              .off("mirror:destroy", this[l])
              .off("drag:over", this[u])
              .off("drag:over:container", this[u]);
          }
          getOptions() {
            return this.draggable.options.resizeMirror || {};
          }
          [a]({ mirror: e }) {
            this.mirror = e;
          }
          [l]() {
            this.mirror = null;
          }
          [u](e) {
            this[c](e);
          }
          [c]({ overContainer: e, over: t }) {
            requestAnimationFrame(() => {
              this.mirror.parentNode !== e && e.appendChild(this.mirror);
              let r =
                t || this.draggable.getDraggableElementsForContainer(e)[0];
              r &&
                (0, o.requestNextAnimationFrame)(() => {
                  let e = r.getBoundingClientRect();
                  (this.lastHeight === e.height &&
                    this.lastWidth === e.width) ||
                    ((this.mirror.style.width = `${e.width}px`),
                    (this.mirror.style.height = `${e.height}px`),
                    (this.lastWidth = e.width),
                    (this.lastHeight = e.height));
                });
            });
          }
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(91),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n },
          s = r(5),
          o = r(46);
        let a = Symbol("onDragMove"),
          l = Symbol("onDragStop"),
          u = Symbol("onRequestAnimationFrame");
        class c extends i.default {
          constructor(e) {
            super(e),
              (this.currentlyCollidingElement = null),
              (this.lastCollidingElement = null),
              (this.currentAnimationFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this));
          }
          attach() {
            this.draggable.on("drag:move", this[a]).on("drag:stop", this[l]);
          }
          detach() {
            this.draggable.off("drag:move", this[a]).off("drag:stop", this[l]);
          }
          getCollidables() {
            let e = this.draggable.options.collidables;
            return "string" == typeof e
              ? Array.prototype.slice.call(document.querySelectorAll(e))
              : e instanceof NodeList || e instanceof Array
              ? Array.prototype.slice.call(e)
              : e instanceof HTMLElement
              ? [e]
              : "function" == typeof e
              ? e()
              : [];
          }
          [a](e) {
            let t = e.sensorEvent.target;
            (this.currentAnimationFrame = requestAnimationFrame(this[u](t))),
              this.currentlyCollidingElement && e.cancel();
            let r = new o.CollidableInEvent({
                dragEvent: e,
                collidingElement: this.currentlyCollidingElement,
              }),
              n = new o.CollidableOutEvent({
                dragEvent: e,
                collidingElement: this.lastCollidingElement,
              }),
              i = Boolean(
                this.currentlyCollidingElement &&
                  this.lastCollidingElement !== this.currentlyCollidingElement
              ),
              s = Boolean(
                !this.currentlyCollidingElement && this.lastCollidingElement
              );
            i
              ? (this.lastCollidingElement && this.draggable.trigger(n),
                this.draggable.trigger(r))
              : s && this.draggable.trigger(n),
              (this.lastCollidingElement = this.currentlyCollidingElement);
          }
          [l](e) {
            let t = this.currentlyCollidingElement || this.lastCollidingElement,
              r = new o.CollidableOutEvent({
                dragEvent: e,
                collidingElement: t,
              });
            t && this.draggable.trigger(r),
              (this.lastCollidingElement = null),
              (this.currentlyCollidingElement = null);
          }
          [u](e) {
            return () => {
              let t = this.getCollidables();
              this.currentlyCollidingElement = (0, s.closest)(e, (e) =>
                t.includes(e)
              );
            };
          }
        }
        t.default = c;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CollidableOutEvent =
            t.CollidableInEvent =
            t.CollidableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.CollidableEvent = s), (s.type = "collidable");
        class o extends s {
          get collidingElement() {
            return this.data.collidingElement;
          }
        }
        (t.CollidableInEvent = o), (o.type = "collidable:in");
        class a extends s {
          get collidingElement() {
            return this.data.collidingElement;
          }
        }
        (t.CollidableOutEvent = a), (a.type = "collidable:out");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(46);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(93)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(95);
        Object.defineProperty(t, "Collidable", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        });
        var i = r(92);
        Object.defineProperty(t, "ResizeMirror", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        }),
          Object.defineProperty(t, "defaultResizeMirrorOptions", {
            enumerable: !0,
            get: function () {
              return i.defaultOptions;
            },
          });
        var s = r(90);
        Object.defineProperty(t, "Snappable", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        });
        var o = r(87);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "SwapAnimation", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultSwapAnimationOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(17)) && n.__esModule ? n : { default: n },
          s = r(16);
        let o = Symbol("onMouseForceWillBegin"),
          a = Symbol("onMouseForceDown"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseForceChange"),
          c = Symbol("onMouseMove"),
          d = Symbol("onMouseUp"),
          h = Symbol("onMouseForceGlobalChange");
        class g extends i.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mightDrag = !1),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            for (let e of this.containers)
              e.addEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.addEventListener("webkitmouseforcedown", this[a], !1),
                e.addEventListener("mousedown", this[l], !0),
                e.addEventListener("webkitmouseforcechanged", this[u], !1);
            document.addEventListener("mousemove", this[c]),
              document.addEventListener("mouseup", this[d]);
          }
          detach() {
            for (let e of this.containers)
              e.removeEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.removeEventListener("webkitmouseforcedown", this[a], !1),
                e.removeEventListener("mousedown", this[l], !0),
                e.removeEventListener("webkitmouseforcechanged", this[u], !1);
            document.removeEventListener("mousemove", this[c]),
              document.removeEventListener("mouseup", this[d]);
          }
          [o](e) {
            e.preventDefault(), (this.mightDrag = !0);
          }
          [a](e) {
            if (this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = e.currentTarget,
              n = new s.DragStartSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              (this.currentContainer = r),
              (this.dragging = !n.canceled()),
              (this.mightDrag = !1);
          }
          [d](e) {
            if (!this.dragging) return;
            let t = new s.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, t),
              (this.currentContainer = null),
              (this.dragging = !1),
              (this.mightDrag = !1);
          }
          [l](e) {
            this.mightDrag &&
              (e.stopPropagation(),
              e.stopImmediatePropagation(),
              e.preventDefault());
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new s.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [u](e) {
            if (this.dragging) return;
            let t = e.target,
              r = e.currentTarget,
              n = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n);
          }
          [h](e) {
            if (!this.dragging) return;
            let t = e.target,
              r = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
        }
        t.default = g;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(97)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(5),
          s = (n = r(17)) && n.__esModule ? n : { default: n },
          o = r(16);
        let a = Symbol("onMouseDown"),
          l = Symbol("onMouseUp"),
          u = Symbol("onDragStart"),
          c = Symbol("onDragOver"),
          d = Symbol("onDragEnd"),
          h = Symbol("onDrop"),
          g = Symbol("reset");
        class f extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDownTimeout = null),
              (this.draggableElement = null),
              (this.nativeDraggableElement = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[a], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[a], !0);
          }
          [u](e) {
            e.dataTransfer.setData("text", ""),
              (e.dataTransfer.effectAllowed = this.options.type);
            let t = document.elementFromPoint(e.clientX, e.clientY);
            if (
              ((this.currentContainer = (0, i.closest)(
                e.target,
                this.containers
              )),
              !this.currentContainer)
            )
              return;
            let r = new o.DragStartSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
            setTimeout(() => {
              this.trigger(this.currentContainer, r),
                r.canceled() ? (this.dragging = !1) : (this.dragging = !0);
            }, 0);
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              n.canceled() ||
                (e.preventDefault(),
                (e.dataTransfer.dropEffect = this.options.type));
          }
          [d](e) {
            if (!this.dragging) return;
            document.removeEventListener("mouseup", this[l], !0);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n), (this.dragging = !1), this[g]();
          }
          [h](e) {
            e.preventDefault();
          }
          [a](e) {
            if (e.target && (e.target.form || e.target.contenteditable)) return;
            let t = (0, i.closest)(e.target, (e) => e.draggable);
            t && ((t.draggable = !1), (this.nativeDraggableElement = t)),
              document.addEventListener("mouseup", this[l], !0),
              document.addEventListener("dragstart", this[u], !1),
              document.addEventListener("dragover", this[c], !1),
              document.addEventListener("dragend", this[d], !1),
              document.addEventListener("drop", this[h], !1);
            let r = (0, i.closest)(e.target, this.options.draggable);
            r &&
              (this.mouseDownTimeout = setTimeout(() => {
                (r.draggable = !0), (this.draggableElement = r);
              }, this.options.delay));
          }
          [l]() {
            this[g]();
          }
          [g]() {
            clearTimeout(this.mouseDownTimeout),
              document.removeEventListener("mouseup", this[l], !0),
              document.removeEventListener("dragstart", this[u], !1),
              document.removeEventListener("dragover", this[c], !1),
              document.removeEventListener("dragend", this[d], !1),
              document.removeEventListener("drop", this[h], !1),
              this.nativeDraggableElement &&
                ((this.nativeDraggableElement.draggable = !0),
                (this.nativeDraggableElement = null)),
              this.draggableElement &&
                ((this.draggableElement.draggable = !1),
                (this.draggableElement = null));
          }
        }
        t.default = f;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(99)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(5),
          s = (n = r(17)) && n.__esModule ? n : { default: n },
          o = r(16);
        let a = Symbol("onTouchStart"),
          l = Symbol("onTouchHold"),
          u = Symbol("onTouchEnd"),
          c = Symbol("onTouchMove"),
          d = !1;
        window.addEventListener(
          "touchmove",
          (e) => {
            d && e.preventDefault();
          },
          { passive: !1 }
        );
        class h extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.currentScrollableParent = null),
              (this.tapTimeout = null),
              (this.touchMoved = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("touchstart", this[a]);
          }
          detach() {
            document.removeEventListener("touchstart", this[a]);
          }
          [a](e) {
            let t = (0, i.closest)(e.target, this.containers);
            t &&
              (document.addEventListener("touchmove", this[c]),
              document.addEventListener("touchend", this[u]),
              document.addEventListener("touchcancel", this[u]),
              t.addEventListener("contextmenu", g),
              (this.currentContainer = t),
              (this.tapTimeout = setTimeout(
                this[l](e, t),
                this.options.delay
              )));
          }
          [l](e, t) {
            return () => {
              if (this.touchMoved) return;
              let r = e.touches[0] || e.changedTouches[0],
                n = e.target,
                i = new o.DragStartSensorEvent({
                  clientX: r.pageX,
                  clientY: r.pageY,
                  target: n,
                  container: t,
                  originalEvent: e,
                });
              this.trigger(t, i),
                (this.dragging = !i.canceled()),
                (d = this.dragging);
            };
          }
          [c](e) {
            if (((this.touchMoved = !0), !this.dragging)) return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              ),
              n = new o.DragMoveSensorEvent({
                clientX: t.pageX,
                clientY: t.pageY,
                target: r,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, n);
          }
          [u](e) {
            if (
              ((this.touchMoved = !1),
              (d = !1),
              document.removeEventListener("touchend", this[u]),
              document.removeEventListener("touchcancel", this[u]),
              document.removeEventListener("touchmove", this[c]),
              this.currentContainer &&
                this.currentContainer.removeEventListener("contextmenu", g),
              clearTimeout(this.tapTimeout),
              !this.dragging)
            )
              return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              );
            e.preventDefault();
            let n = new o.DragStopSensorEvent({
              clientX: t.pageX,
              clientY: t.pageY,
              target: r,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, n),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
        }
        function g(e) {
          e.preventDefault(), e.stopPropagation();
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(101)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragPressureSensorEvent =
            t.DragStopSensorEvent =
            t.DragMoveSensorEvent =
            t.DragStartSensorEvent =
            t.SensorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get originalEvent() {
            return this.data.originalEvent;
          }
          get clientX() {
            return this.data.clientX;
          }
          get clientY() {
            return this.data.clientY;
          }
          get target() {
            return this.data.target;
          }
          get container() {
            return this.data.container;
          }
          get pressure() {
            return this.data.pressure;
          }
        }
        t.SensorEvent = s;
        class o extends s {}
        (t.DragStartSensorEvent = o), (o.type = "drag:start");
        class a extends s {}
        (t.DragMoveSensorEvent = a), (a.type = "drag:move");
        class l extends s {}
        (t.DragStopSensorEvent = l), (l.type = "drag:stop");
        class u extends s {}
        (t.DragPressureSensorEvent = u), (u.type = "drag:pressure");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(104)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(106)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(5),
          s = (n = r(17)) && n.__esModule ? n : { default: n },
          o = r(16);
        let a = Symbol("onContextMenuWhileDragging"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseMove"),
          c = Symbol("onMouseUp");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDown = !1),
              (this.mouseDownTimeout = null),
              (this.openedContextMenu = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[l], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[l], !0);
          }
          [l](e) {
            if (0 !== e.button || e.ctrlKey || e.metaKey) return;
            document.addEventListener("mouseup", this[c]);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = (0, i.closest)(t, this.containers);
            r &&
              (document.addEventListener("dragstart", h),
              (this.mouseDown = !0),
              clearTimeout(this.mouseDownTimeout),
              (this.mouseDownTimeout = setTimeout(() => {
                if (!this.mouseDown) return;
                let n = new o.DragStartSensorEvent({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  target: t,
                  container: r,
                  originalEvent: e,
                });
                this.trigger(r, n),
                  (this.currentContainer = r),
                  (this.dragging = !n.canceled()),
                  this.dragging &&
                    (document.addEventListener("contextmenu", this[a]),
                    document.addEventListener("mousemove", this[u]));
              }, this.options.delay)));
          }
          [u](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [c](e) {
            if (
              ((this.mouseDown = Boolean(this.openedContextMenu)),
              this.openedContextMenu)
            )
              return void (this.openedContextMenu = !1);
            if (
              (document.removeEventListener("mouseup", this[c]),
              document.removeEventListener("dragstart", h),
              !this.dragging)
            )
              return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r),
              document.removeEventListener("contextmenu", this[a]),
              document.removeEventListener("mousemove", this[u]),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
          [a](e) {
            e.preventDefault(), (this.openedContextMenu = !0);
          }
        }
        function h(e) {
          e.preventDefault();
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(108)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        t.default = class {
          constructor(e = [], t = {}) {
            (this.containers = [...e]),
              (this.options = n({}, t)),
              (this.dragging = !1),
              (this.currentContainer = null);
          }
          attach() {
            return this;
          }
          detach() {
            return this;
          }
          addContainer(...e) {
            this.containers = [...this.containers, ...e];
          }
          removeContainer(...e) {
            this.containers = this.containers.filter((t) => !e.includes(t));
          }
          trigger(e, t) {
            let r = document.createEvent("Event");
            return (
              (r.detail = t),
              r.initEvent(t.type, !0, !0),
              e.dispatchEvent(r),
              (this.lastEvent = t),
              t
            );
          }
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        var n = r(15),
          i = r(57)(!0);
        n(n.P, "Array", {
          includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
          r(49)("includes");
      },
      function (e, t, r) {
        r(113), (e.exports = r(2).Array.includes);
      },
      function (e, t, r) {
        var n = r(13),
          i = r(7),
          s = r(19).f;
        e.exports = function (e) {
          return function (t) {
            for (
              var r, o = i(t), a = n(o), l = a.length, u = 0, c = [];
              l > u;

            )
              s.call(o, (r = a[u++])) && c.push(e ? [r, o[r]] : o[r]);
            return c;
          };
        };
      },
      function (e, t, r) {
        var n = r(15),
          i = r(115)(!1);
        n(n.S, "Object", {
          values: function (e) {
            return i(e);
          },
        });
      },
      function (e, t, r) {
        r(116), (e.exports = r(2).Object.values);
      },
      function (e, t, r) {
        "use strict";
        var n = r(13),
          i = r(31),
          s = r(19),
          o = r(50),
          a = r(58),
          l = Object.assign;
        e.exports =
          !l ||
          r(23)(function () {
            var e = {},
              t = {},
              r = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (e[r] = 7),
              n.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != l({}, e)[r] || Object.keys(l({}, t)).join("") != n
            );
          })
            ? function (e, t) {
                for (
                  var r = o(e), l = arguments.length, u = 1, c = i.f, d = s.f;
                  l > u;

                )
                  for (
                    var h,
                      g = a(arguments[u++]),
                      f = c ? n(g).concat(c(g)) : n(g),
                      p = f.length,
                      v = 0;
                    p > v;

                  )
                    d.call(g, (h = f[v++])) && (r[h] = g[h]);
                return r;
              }
            : l;
      },
      function (e, t, r) {
        var n = r(15);
        n(n.S + n.F, "Object", { assign: r(118) });
      },
      function (e, t, r) {
        r(119), (e.exports = r(2).Object.assign);
      },
      function (e, t, r) {
        var n = r(0)("iterator"),
          i = !1;
        try {
          var s = [7][n]();
          (s.return = function () {
            i = !0;
          }),
            Array.from(s, function () {
              throw 2;
            });
        } catch (o) {}
        e.exports = function (e, t) {
          if (!t && !i) return !1;
          var r = !1;
          try {
            var s = [7],
              o = s[n]();
            (o.next = function () {
              return { done: (r = !0) };
            }),
              (s[n] = function () {
                return o;
              }),
              e(s);
          } catch (a) {}
          return r;
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(1),
          i = r(9),
          s = r(11),
          o = r(0)("species");
        e.exports = function (e) {
          var t = n[e];
          s &&
            t &&
            !t[o] &&
            i.f(t, o, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (e, t, r) {
        var n = r(14);
        e.exports = function (e, t, r) {
          for (var i in t) n(e, i, t[i], r);
          return e;
        };
      },
      function (e, t, r) {
        var n = r(6),
          i = r(8),
          s = r(47);
        e.exports = function (e, t) {
          if ((n(e), i(t) && t.constructor === e)) return t;
          var r = s.f(e);
          return (0, r.resolve)(t), r.promise;
        };
      },
      function (e, t, r) {
        var n = r(1).navigator;
        e.exports = (n && n.userAgent) || "";
      },
      function (e, t) {
        e.exports = function (e) {
          try {
            return { e: !1, v: e() };
          } catch (t) {
            return { e: !0, v: t };
          }
        };
      },
      function (e, t, r) {
        var n = r(1),
          i = r(48).set,
          s = n.MutationObserver || n.WebKitMutationObserver,
          o = n.process,
          a = n.Promise,
          l = "process" == r(20)(o);
        e.exports = function () {
          var e,
            t,
            r,
            u = function () {
              var n, i;
              for (l && (n = o.domain) && n.exit(); e; ) {
                (i = e.fn), (e = e.next);
                try {
                  i();
                } catch (s) {
                  throw (e ? r() : (t = void 0), s);
                }
              }
              (t = void 0), n && n.enter();
            };
          if (l)
            r = function () {
              o.nextTick(u);
            };
          else if (!s || (n.navigator && n.navigator.standalone)) {
            if (a && a.resolve) {
              var c = a.resolve(void 0);
              r = function () {
                c.then(u);
              };
            } else
              r = function () {
                i.call(n, u);
              };
          } else {
            var d = !0,
              h = document.createTextNode("");
            new s(u).observe(h, { characterData: !0 }),
              (r = function () {
                h.data = d = !d;
              });
          }
          return function (n) {
            var i = { fn: n, next: void 0 };
            t && (t.next = i), e || ((e = i), r()), (t = i);
          };
        };
      },
      function (e, t) {
        e.exports = function (e, t, r) {
          var n = void 0 === r;
          switch (t.length) {
            case 0:
              return n ? e() : e.call(r);
            case 1:
              return n ? e(t[0]) : e.call(r, t[0]);
            case 2:
              return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
            case 3:
              return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
            case 4:
              return n
                ? e(t[0], t[1], t[2], t[3])
                : e.call(r, t[0], t[1], t[2], t[3]);
          }
          return e.apply(r, t);
        };
      },
      function (e, t, r) {
        var n = r(6),
          i = r(26),
          s = r(0)("species");
        e.exports = function (e, t) {
          var r,
            o = n(e).constructor;
          return void 0 === o || null == (r = n(o)[s]) ? t : i(r);
        };
      },
      function (e, t, r) {
        var n = r(30),
          i = r(0)("iterator"),
          s = r(18);
        e.exports = r(2).getIteratorMethod = function (e) {
          if (null != e) return e[i] || e["@@iterator"] || s[n(e)];
        };
      },
      function (e, t, r) {
        var n = r(18),
          i = r(0)("iterator"),
          s = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (n.Array === e || s[i] === e);
        };
      },
      function (e, t, r) {
        var n = r(6);
        e.exports = function (e, t, r, i) {
          try {
            return i ? t(n(r)[0], r[1]) : t(r);
          } catch (s) {
            var o = e.return;
            throw (void 0 !== o && n(o.call(e)), s);
          }
        };
      },
      function (e, t, r) {
        var n = r(27),
          i = r(132),
          s = r(131),
          o = r(6),
          a = r(56),
          l = r(130),
          u = {},
          c = {};
        ((t = e.exports =
          function (e, t, r, d, h) {
            var g,
              f,
              p,
              v,
              m = h
                ? function () {
                    return e;
                  }
                : l(e),
              b = n(r, d, t ? 2 : 1),
              E = 0;
            if ("function" != typeof m)
              throw TypeError(e + " is not iterable!");
            if (s(m)) {
              for (g = a(e.length); g > E; E++)
                if (
                  (v = t ? b(o((f = e[E]))[0], f[1]) : b(e[E])) === u ||
                  v === c
                )
                  return v;
            } else
              for (p = m.call(e); !(f = p.next()).done; )
                if ((v = i(p, b, f.value, t)) === u || v === c) return v;
          }).BREAK = u),
          (t.RETURN = c);
      },
      function (e, t) {
        e.exports = function (e, t, r, n) {
          if (!(e instanceof t) || (void 0 !== n && n in e))
            throw TypeError(r + ": incorrect invocation!");
          return e;
        };
      },
      function (e, t, r) {
        "use strict";
        var n,
          i,
          s,
          o,
          a = r(21),
          l = r(1),
          u = r(27),
          c = r(30),
          d = r(15),
          h = r(8),
          g = r(26),
          f = r(134),
          p = r(133),
          v = r(129),
          m = r(48).set,
          b = r(127)(),
          E = r(47),
          y = r(126),
          $ = r(125),
          M = r(124),
          S = "Promise",
          C = l.TypeError,
          D = l.process,
          P = D && D.versions,
          x = (P && P.v8) || "",
          w = l.Promise,
          O = "process" == c(D),
          _ = function () {},
          L = (i = E.f),
          F = !!(function () {
            try {
              var e = w.resolve(1),
                t = ((e.constructor = {})[r(0)("species")] = function (e) {
                  e(_, _);
                });
              return (
                (O || "function" == typeof PromiseRejectionEvent) &&
                e.then(_) instanceof t &&
                0 !== x.indexOf("6.6") &&
                -1 === $.indexOf("Chrome/66")
              );
            } catch (n) {}
          })(),
          Y = function (e) {
            var t;
            return !(!h(e) || "function" != typeof (t = e.then)) && t;
          },
          X = function (e, t) {
            if (!e._n) {
              e._n = !0;
              var r = e._c;
              b(function () {
                for (
                  var n = e._v,
                    i = 1 == e._s,
                    s = 0,
                    o = function (t) {
                      var r,
                        s,
                        o,
                        a = i ? t.ok : t.fail,
                        l = t.resolve,
                        u = t.reject,
                        c = t.domain;
                      try {
                        a
                          ? (i || (2 == e._h && A(e), (e._h = 1)),
                            !0 === a
                              ? (r = n)
                              : (c && c.enter(),
                                (r = a(n)),
                                c && (c.exit(), (o = !0))),
                            r === t.promise
                              ? u(C("Promise-chain cycle"))
                              : (s = Y(r))
                              ? s.call(r, l, u)
                              : l(r))
                          : u(n);
                      } catch (d) {
                        c && !o && c.exit(), u(d);
                      }
                    };
                  r.length > s;

                )
                  o(r[s++]);
                (e._c = []), (e._n = !1), t && !e._h && N(e);
              });
            }
          },
          N = function (e) {
            m.call(l, function () {
              var t,
                r,
                n,
                i = e._v,
                s = T(e);
              if (
                (s &&
                  ((t = y(function () {
                    O
                      ? D.emit("unhandledRejection", i, e)
                      : (r = l.onunhandledrejection)
                      ? r({ promise: e, reason: i })
                      : (n = l.console) &&
                        n.error &&
                        n.error("Unhandled promise rejection", i);
                  })),
                  (e._h = O || T(e) ? 2 : 1)),
                (e._a = void 0),
                s && t.e)
              )
                throw t.v;
            });
          },
          T = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length;
          },
          A = function (e) {
            m.call(l, function () {
              var t;
              O
                ? D.emit("rejectionHandled", e)
                : (t = l.onrejectionhandled) && t({ promise: e, reason: e._v });
            });
          },
          z = function (e) {
            var t = this;
            t._d ||
              ((t._d = !0),
              ((t = t._w || t)._v = e),
              (t._s = 2),
              t._a || (t._a = t._c.slice()),
              X(t, !0));
          },
          k = function (e) {
            var t,
              r = this;
            if (!r._d) {
              (r._d = !0), (r = r._w || r);
              try {
                if (r === e) throw C("Promise can't be resolved itself");
                (t = Y(e))
                  ? b(function () {
                      var n = { _w: r, _d: !1 };
                      try {
                        t.call(e, u(k, n, 1), u(z, n, 1));
                      } catch (i) {
                        z.call(n, i);
                      }
                    })
                  : ((r._v = e), (r._s = 1), X(r, !1));
              } catch (n) {
                z.call({ _w: r, _d: !1 }, n);
              }
            }
          };
        F ||
          ((w = function (e) {
            f(this, w, S, "_h"), g(e), n.call(this);
            try {
              e(u(k, this, 1), u(z, this, 1));
            } catch (t) {
              z.call(this, t);
            }
          }),
          ((n = function (e) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }).prototype = r(123)(w.prototype, {
            then: function (e, t) {
              var r = L(v(this, w));
              return (
                (r.ok = "function" != typeof e || e),
                (r.fail = "function" == typeof t && t),
                (r.domain = O ? D.domain : void 0),
                this._c.push(r),
                this._a && this._a.push(r),
                this._s && X(this, !1),
                r.promise
              );
            },
            catch: function (e) {
              return this.then(void 0, e);
            },
          })),
          (s = function () {
            var e = new n();
            (this.promise = e),
              (this.resolve = u(k, e, 1)),
              (this.reject = u(z, e, 1));
          }),
          (E.f = L =
            function (e) {
              return e === w || e === o ? new s(e) : i(e);
            })),
          d(d.G + d.W + !F * d.F, { Promise: w }),
          r(25)(w, S),
          r(122)(S),
          (o = r(2).Promise),
          d(d.S + !F * d.F, S, {
            reject: function (e) {
              var t = L(this);
              return (0, t.reject)(e), t.promise;
            },
          }),
          d(d.S + d.F * (a || !F), S, {
            resolve: function (e) {
              return M(a && this === o ? w : this, e);
            },
          }),
          d(
            d.S +
              !(
                F &&
                r(121)(function (e) {
                  w.all(e).catch(_);
                })
              ) *
                d.F,
            S,
            {
              all: function (e) {
                var t = this,
                  r = L(t),
                  n = r.resolve,
                  i = r.reject,
                  s = y(function () {
                    var r = [],
                      s = 0,
                      o = 1;
                    p(e, !1, function (e) {
                      var a = s++,
                        l = !1;
                      r.push(void 0),
                        o++,
                        t.resolve(e).then(function (e) {
                          l || ((l = !0), (r[a] = e), --o || n(r));
                        }, i);
                    }),
                      --o || n(r);
                  });
                return s.e && i(s.v), r.promise;
              },
              race: function (e) {
                var t = this,
                  r = L(t),
                  n = r.reject,
                  i = y(function () {
                    p(e, !1, function (e) {
                      t.resolve(e).then(r.resolve, n);
                    });
                  });
                return i.e && n(i.v), r.promise;
              },
            }
          );
      },
      function (e, t) {
        e.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(49),
          i = r(136),
          s = r(18),
          o = r(7);
        (e.exports = r(51)(
          Array,
          "Array",
          function (e, t) {
            (this._t = o(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              r = this._i++;
            return !e || r >= e.length
              ? ((this._t = void 0), i(1))
              : i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
          },
          "values"
        )),
          (s.Arguments = s.Array),
          n("keys"),
          n("values"),
          n("entries");
      },
      function (e, t, r) {
        for (
          var n = r(137),
            i = r(13),
            s = r(14),
            o = r(1),
            a = r(10),
            l = r(18),
            u = r(0),
            c = u("iterator"),
            d = u("toStringTag"),
            h = l.Array,
            g = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1,
            },
            f = i(g),
            p = 0;
          p < f.length;
          p++
        ) {
          var v,
            m = f[p],
            b = g[m],
            E = o[m],
            y = E && E.prototype;
          if (y && (y[c] || a(y, c, h), y[d] || a(y, d, m), (l[m] = h), b))
            for (v in n) y[v] || s(y, v, n[v], !0);
        }
      },
      function (e, t, r) {
        var n = r(12),
          i = r(50),
          s = r(33)("IE_PROTO"),
          o = Object.prototype;
        e.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = i(e)),
              n(e, s)
                ? e[s]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? o
                : null
            );
          };
      },
      function (e, t, r) {
        "use strict";
        var n = r(55),
          i = r(28),
          s = r(25),
          o = {};
        r(10)(o, r(0)("iterator"), function () {
          return this;
        }),
          (e.exports = function (e, t, r) {
            (e.prototype = n(o, { next: i(1, r) })), s(e, t + " Iterator");
          });
      },
      function (e, t, r) {
        var n = r(34),
          i = r(35);
        e.exports = function (e) {
          return function (t, r) {
            var s,
              o,
              a = String(i(t)),
              l = n(r),
              u = a.length;
            return l < 0 || l >= u
              ? e
                ? ""
                : void 0
              : (s = a.charCodeAt(l)) < 55296 ||
                s > 56319 ||
                l + 1 === u ||
                (o = a.charCodeAt(l + 1)) < 56320 ||
                o > 57343
              ? e
                ? a.charAt(l)
                : s
              : e
              ? a.slice(l, l + 2)
              : o - 56320 + ((s - 55296) << 10) + 65536;
          };
        };
      },
      function (e, t, r) {
        "use strict";
        var n = r(141)(!0);
        r(51)(
          String,
          "String",
          function (e) {
            (this._t = String(e)), (this._i = 0);
          },
          function () {
            var e,
              t = this._t,
              r = this._i;
            return r >= t.length
              ? { value: void 0, done: !0 }
              : ((e = n(t, r)), (this._i += e.length), { value: e, done: !1 });
          }
        );
      },
      function (e, t, r) {
        r(52), r(142), r(138), r(135), (e.exports = r(2).Promise);
      },
      function (e, t, r) {
        var n = r(19),
          i = r(28),
          s = r(7),
          o = r(37),
          a = r(12),
          l = r(61),
          u = Object.getOwnPropertyDescriptor;
        t.f = r(11)
          ? u
          : function (e, t) {
              if (((e = s(e)), (t = o(t, !0)), l))
                try {
                  return u(e, t);
                } catch (r) {}
              if (a(e, t)) return i(!n.f.call(e, t), e[t]);
            };
      },
      function (e, t, r) {
        var n = r(7),
          i = r(53).f,
          s = {}.toString,
          o =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return o && "[object Window]" == s.call(e)
            ? (function (e) {
                try {
                  return i(e);
                } catch (t) {
                  return o.slice();
                }
              })(e)
            : i(n(e));
        };
      },
      function (e, t, r) {
        var n = r(9),
          i = r(6),
          s = r(13);
        e.exports = r(11)
          ? Object.defineProperties
          : function (e, t) {
              i(e);
              for (var r, o = s(t), a = o.length, l = 0; a > l; )
                n.f(e, (r = o[l++]), t[r]);
              return e;
            };
      },
      function (e, t, r) {
        var n = r(20);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == n(e);
          };
      },
      function (e, t, r) {
        var n = r(34),
          i = Math.max,
          s = Math.min;
        e.exports = function (e, t) {
          return (e = n(e)) < 0 ? i(e + t, 0) : s(e, t);
        };
      },
      function (e, t, r) {
        var n = r(13),
          i = r(31),
          s = r(19);
        e.exports = function (e) {
          var t = n(e),
            r = i.f;
          if (r)
            for (var o, a = r(e), l = s.f, u = 0; a.length > u; )
              l.call(e, (o = a[u++])) && t.push(o);
          return t;
        };
      },
      function (e, t, r) {
        var n = r(1),
          i = r(2),
          s = r(21),
          o = r(60),
          a = r(9).f;
        e.exports = function (e) {
          var t = i.Symbol || (i.Symbol = s ? {} : n.Symbol || {});
          "_" == e.charAt(0) || e in t || a(t, e, { value: o.f(e) });
        };
      },
      function (e, t, r) {
        var n = r(22)("meta"),
          i = r(8),
          s = r(12),
          o = r(9).f,
          a = 0,
          l =
            Object.isExtensible ||
            function () {
              return !0;
            },
          u = !r(23)(function () {
            return l(Object.preventExtensions({}));
          }),
          c = function (e) {
            o(e, n, { value: { i: "O" + ++a, w: {} } });
          },
          d = (e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function (e, t) {
              if (!i(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!s(e, n)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                c(e);
              }
              return e[n].i;
            },
            getWeak: function (e, t) {
              if (!s(e, n)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                c(e);
              }
              return e[n].w;
            },
            onFreeze: function (e) {
              return u && d.NEED && l(e) && !s(e, n) && c(e), e;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        var n = r(1),
          i = r(12),
          s = r(11),
          o = r(15),
          a = r(14),
          l = r(151).KEY,
          u = r(23),
          c = r(36),
          d = r(25),
          h = r(22),
          g = r(0),
          f = r(60),
          p = r(150),
          v = r(149),
          m = r(147),
          b = r(6),
          E = r(8),
          y = r(7),
          $ = r(37),
          M = r(28),
          S = r(55),
          C = r(145),
          D = r(144),
          P = r(9),
          x = r(13),
          w = D.f,
          O = P.f,
          _ = C.f,
          L = n.Symbol,
          F = n.JSON,
          Y = F && F.stringify,
          X = g("_hidden"),
          N = g("toPrimitive"),
          T = {}.propertyIsEnumerable,
          A = c("symbol-registry"),
          z = c("symbols"),
          k = c("op-symbols"),
          I = Object.prototype,
          R = "function" == typeof L,
          j = n.QObject,
          B = !j || !j.prototype || !j.prototype.findChild,
          U =
            s &&
            u(function () {
              return (
                7 !=
                S(
                  O({}, "a", {
                    get: function () {
                      return O(this, "a", { value: 7 }).a;
                    },
                  })
                ).a
              );
            })
              ? function (e, t, r) {
                  var n = w(I, t);
                  n && delete I[t], O(e, t, r), n && e !== I && O(I, t, n);
                }
              : O,
          H = function (e) {
            var t = (z[e] = S(L.prototype));
            return (t._k = e), t;
          },
          W =
            R && "symbol" == typeof L.iterator
              ? function (e) {
                  return "symbol" == typeof e;
                }
              : function (e) {
                  return e instanceof L;
                },
          V = function (e, t, r) {
            return (
              e === I && V(k, t, r),
              b(e),
              (t = $(t, !0)),
              b(r),
              i(z, t)
                ? (r.enumerable
                    ? (i(e, X) && e[X][t] && (e[X][t] = !1),
                      (r = S(r, { enumerable: M(0, !1) })))
                    : (i(e, X) || O(e, X, M(1, {})), (e[X][t] = !0)),
                  U(e, t, r))
                : O(e, t, r)
            );
          },
          q = function (e, t) {
            b(e);
            for (var r, n = v((t = y(t))), i = 0, s = n.length; s > i; )
              V(e, (r = n[i++]), t[r]);
            return e;
          },
          G = function (e) {
            var t = T.call(this, (e = $(e, !0)));
            return (
              !(this === I && i(z, e) && !i(k, e)) &&
              (!(t || !i(this, e) || !i(z, e) || (i(this, X) && this[X][e])) ||
                t)
            );
          },
          K = function (e, t) {
            if (((e = y(e)), (t = $(t, !0)), e !== I || !i(z, t) || i(k, t))) {
              var r = w(e, t);
              return (
                !r || !i(z, t) || (i(e, X) && e[X][t]) || (r.enumerable = !0), r
              );
            }
          },
          J = function (e) {
            for (var t, r = _(y(e)), n = [], s = 0; r.length > s; )
              i(z, (t = r[s++])) || t == X || t == l || n.push(t);
            return n;
          },
          Z = function (e) {
            for (
              var t, r = e === I, n = _(r ? k : y(e)), s = [], o = 0;
              n.length > o;

            )
              i(z, (t = n[o++])) && (!r || i(I, t)) && s.push(z[t]);
            return s;
          };
        R ||
          (a(
            (L = function () {
              if (this instanceof L)
                throw TypeError("Symbol is not a constructor!");
              var e = h(arguments.length > 0 ? arguments[0] : void 0),
                t = function (r) {
                  this === I && t.call(k, r),
                    i(this, X) && i(this[X], e) && (this[X][e] = !1),
                    U(this, e, M(1, r));
                };
              return s && B && U(I, e, { configurable: !0, set: t }), H(e);
            }).prototype,
            "toString",
            function () {
              return this._k;
            }
          ),
          (D.f = K),
          (P.f = V),
          (r(53).f = C.f = J),
          (r(19).f = G),
          (r(31).f = Z),
          s && !r(21) && a(I, "propertyIsEnumerable", G, !0),
          (f.f = function (e) {
            return H(g(e));
          })),
          o(o.G + o.W + !R * o.F, { Symbol: L });
        for (
          var Q =
              "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                ","
              ),
            ee = 0;
          Q.length > ee;

        )
          g(Q[ee++]);
        for (var et = x(g.store), er = 0; et.length > er; ) p(et[er++]);
        o(o.S + !R * o.F, "Symbol", {
          for: function (e) {
            return i(A, (e += "")) ? A[e] : (A[e] = L(e));
          },
          keyFor: function (e) {
            if (!W(e)) throw TypeError(e + " is not a symbol!");
            for (var t in A) if (A[t] === e) return t;
          },
          useSetter: function () {
            B = !0;
          },
          useSimple: function () {
            B = !1;
          },
        }),
          o(o.S + !R * o.F, "Object", {
            create: function (e, t) {
              return void 0 === t ? S(e) : q(S(e), t);
            },
            defineProperty: V,
            defineProperties: q,
            getOwnPropertyDescriptor: K,
            getOwnPropertyNames: J,
            getOwnPropertySymbols: Z,
          }),
          F &&
            o(
              o.S +
                o.F *
                  (!R ||
                    u(function () {
                      var e = L();
                      return (
                        "[null]" != Y([e]) ||
                        "{}" != Y({ a: e }) ||
                        "{}" != Y(Object(e))
                      );
                    })),
              "JSON",
              {
                stringify: function (e) {
                  for (var t, r, n = [e], i = 1; arguments.length > i; )
                    n.push(arguments[i++]);
                  if (((r = t = n[1]), (E(t) || void 0 !== e) && !W(e)))
                    return (
                      m(t) ||
                        (t = function (e, t) {
                          if (
                            ("function" == typeof r && (t = r.call(this, e, t)),
                            !W(t))
                          )
                            return t;
                        }),
                      (n[1] = t),
                      Y.apply(F, n)
                    );
                },
              }
            ),
          L.prototype[N] || r(10)(L.prototype, N, L.prototype.valueOf),
          d(L, "Symbol"),
          d(Math, "Math", !0),
          d(n.JSON, "JSON", !0);
      },
      function (e, t, r) {
        r(152), r(52), (e.exports = r(2).Symbol);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Plugins =
            t.Sensors =
            t.Sortable =
            t.Swappable =
            t.Droppable =
            t.Draggable =
            t.BasePlugin =
            t.BaseEvent =
              void 0),
          r(153),
          r(143),
          r(120),
          r(117),
          r(114);
        var n = h(r(3)),
          i = h(r(4)),
          s = d(r(29)),
          o = d(r(96)),
          a = h(r(24)),
          l = h(r(70)),
          u = h(r(67)),
          c = h(r(64));
        function d(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        }
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.BaseEvent = n.default),
          (t.BasePlugin = i.default),
          (t.Draggable = a.default),
          (t.Droppable = l.default),
          (t.Swappable = u.default),
          (t.Sortable = c.default),
          (t.Sensors = s),
          (t.Plugins = o);
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Draggable", [], t)
      : "object" == typeof exports
      ? (exports.Draggable = t())
      : (e.Draggable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 40))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(18);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(21)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(25);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(23);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(34)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(38)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(1);
        Object.defineProperty(t, "Sensor", {
          enumerable: !0,
          get: function () {
            return u(n).default;
          },
        });
        var i = r(20);
        Object.defineProperty(t, "MouseSensor", {
          enumerable: !0,
          get: function () {
            return u(i).default;
          },
        });
        var s = r(17);
        Object.defineProperty(t, "TouchSensor", {
          enumerable: !0,
          get: function () {
            return u(s).default;
          },
        });
        var o = r(15);
        Object.defineProperty(t, "DragSensor", {
          enumerable: !0,
          get: function () {
            return u(o).default;
          },
        });
        var a = r(13);
        Object.defineProperty(t, "ForceTouchSensor", {
          enumerable: !0,
          get: function () {
            return u(a).default;
          },
        });
        var l = r(0);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(36);
        Object.defineProperty(t, "Announcement", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        }),
          Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function () {
              return n.defaultOptions;
            },
          });
        var i = r(33);
        Object.defineProperty(t, "Focusable", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        });
        var s = r(31);
        Object.defineProperty(t, "Mirror", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        }),
          Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function () {
              return s.defaultOptions;
            },
          });
        var o = r(27);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "Scrollable", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(37);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(39);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor() {
              this.callbacks = {};
            }
            on(e, ...t) {
              return (
                this.callbacks[e] || (this.callbacks[e] = []),
                this.callbacks[e].push(...t),
                this
              );
            }
            off(e, t) {
              if (!this.callbacks[e]) return null;
              let r = this.callbacks[e].slice(0);
              for (let n = 0; n < r.length; n++)
                t === r[n] && this.callbacks[e].splice(n, 1);
              return this;
            }
            trigger(e) {
              if (!this.callbacks[e.type]) return null;
              let t = [...this.callbacks[e.type]],
                r = [];
              for (let n = t.length - 1; n >= 0; n--) {
                let i = t[n];
                try {
                  i(e);
                } catch (s) {
                  r.push(s);
                }
              }
              return (
                r.length &&
                  console.error(
                    `Draggable caught errors while triggering '${e.type}'`,
                    r
                  ),
                this
              );
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(9)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(2),
          o = r(6),
          a = (n = r(10)) && n.__esModule ? n : { default: n },
          l = r(5),
          u = r(7),
          c = r(8);
        let d = Symbol("onDragStart"),
          h = Symbol("onDragMove"),
          g = Symbol("onDragStop"),
          f = Symbol("onDragPressure"),
          p = (t.defaultOptions = {
            draggable: ".draggable-source",
            handle: null,
            delay: 100,
            placedTimeout: 800,
            plugins: [],
            sensors: [],
          });
        class v {
          constructor(e = [document.body], t = {}) {
            if (e instanceof NodeList || e instanceof Array)
              this.containers = [...e];
            else {
              if (!(e instanceof HTMLElement))
                throw Error(
                  "Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`"
                );
              this.containers = [e];
            }
            (this.options = i({}, p, t, {
              classes: i(
                {},
                {
                  "container:dragging": "draggable-container--is-dragging",
                  "source:dragging": "draggable-source--is-dragging",
                  "source:placed": "draggable-source--placed",
                  "container:placed": "draggable-container--placed",
                  "body:dragging": "draggable--is-dragging",
                  "draggable:over": "draggable--over",
                  "container:over": "draggable-container--over",
                  "source:original": "draggable--original",
                  mirror: "draggable-mirror",
                },
                t.classes || {}
              ),
              announcements: i(
                {},
                {
                  "drag:start": (e) =>
                    `Picked up ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                  "drag:stop": (e) =>
                    `Released ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                },
                t.announcements || {}
              ),
            })),
              (this.emitter = new a.default()),
              (this.dragging = !1),
              (this.plugins = []),
              (this.sensors = []),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this)),
              (this[f] = this[f].bind(this)),
              document.addEventListener("drag:start", this[d], !0),
              document.addEventListener("drag:move", this[h], !0),
              document.addEventListener("drag:stop", this[g], !0),
              document.addEventListener("drag:pressure", this[f], !0);
            let r = Object.values(v.Plugins).map((e) => e),
              n = [l.MouseSensor, l.TouchSensor];
            this.addPlugin(...r, ...this.options.plugins),
              this.addSensor(...n, ...this.options.sensors);
            let s = new u.DraggableInitializedEvent({ draggable: this });
            this.on("mirror:created", ({ mirror: e }) => (this.mirror = e)),
              this.on("mirror:destroy", () => (this.mirror = null)),
              this.trigger(s);
          }
          destroy() {
            document.removeEventListener("drag:start", this[d], !0),
              document.removeEventListener("drag:move", this[h], !0),
              document.removeEventListener("drag:stop", this[g], !0),
              document.removeEventListener("drag:pressure", this[f], !0);
            let e = new u.DraggableDestroyEvent({ draggable: this });
            this.trigger(e),
              this.removePlugin(...this.plugins.map((e) => e.constructor)),
              this.removeSensor(...this.sensors.map((e) => e.constructor));
          }
          addPlugin(...e) {
            let t = e.map((e) => new e(this));
            return (
              t.forEach((e) => e.attach()),
              (this.plugins = [...this.plugins, ...t]),
              this
            );
          }
          removePlugin(...e) {
            return (
              this.plugins
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.plugins = this.plugins.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addSensor(...e) {
            let t = e.map((e) => new e(this.containers, this.options));
            return (
              t.forEach((e) => e.attach()),
              (this.sensors = [...this.sensors, ...t]),
              this
            );
          }
          removeSensor(...e) {
            return (
              this.sensors
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.sensors = this.sensors.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addContainer(...e) {
            return (
              (this.containers = [...this.containers, ...e]),
              this.sensors.forEach((t) => t.addContainer(...e)),
              this
            );
          }
          removeContainer(...e) {
            return (
              (this.containers = this.containers.filter((t) => !e.includes(t))),
              this.sensors.forEach((t) => t.removeContainer(...e)),
              this
            );
          }
          on(e, ...t) {
            return this.emitter.on(e, ...t), this;
          }
          off(e, t) {
            return this.emitter.off(e, t), this;
          }
          trigger(e) {
            return this.emitter.trigger(e), this;
          }
          getClassNameFor(e) {
            return this.options.classes[e];
          }
          isDragging() {
            return Boolean(this.dragging);
          }
          getDraggableElements() {
            return this.containers.reduce(
              (e, t) => [...e, ...this.getDraggableElementsForContainer(t)],
              []
            );
          }
          getDraggableElementsForContainer(e) {
            return [...e.querySelectorAll(this.options.draggable)].filter(
              (e) => e !== this.originalSource && e !== this.mirror
            );
          }
          [d](e) {
            let t = m(e),
              { target: r, container: n } = t;
            if (!this.containers.includes(n)) return;
            if (
              (this.options.handle &&
                r &&
                !(0, s.closest)(r, this.options.handle)) ||
              ((this.originalSource = (0, s.closest)(
                r,
                this.options.draggable
              )),
              (this.sourceContainer = n),
              !this.originalSource)
            )
              return void t.cancel();
            this.lastPlacedSource &&
              this.lastPlacedContainer &&
              (clearTimeout(this.placedTimeoutID),
              this.lastPlacedSource.classList.remove(
                this.getClassNameFor("source:placed")
              ),
              this.lastPlacedContainer.classList.remove(
                this.getClassNameFor("container:placed")
              )),
              (this.source = this.originalSource.cloneNode(!0)),
              this.originalSource.parentNode.insertBefore(
                this.source,
                this.originalSource
              ),
              (this.originalSource.style.display = "none");
            let o = new c.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: n,
              sensorEvent: t,
            });
            if (
              (this.trigger(o), (this.dragging = !o.canceled()), o.canceled())
            )
              return (
                this.source.parentNode.removeChild(this.source),
                void (this.originalSource.style.display = null)
              );
            this.originalSource.classList.add(
              this.getClassNameFor("source:original")
            ),
              this.source.classList.add(
                this.getClassNameFor("source:dragging")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.add(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, "none"),
              requestAnimationFrame(() => {
                let t = m(e).clone({ target: this.source });
                this[h](i({}, e, { detail: t }));
              });
          }
          [h](e) {
            if (!this.dragging) return;
            let t = m(e),
              { container: r } = t,
              n = t.target,
              i = new c.DragMoveEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
              });
            this.trigger(i),
              i.canceled() && t.cancel(),
              (n = (0, s.closest)(n, this.options.draggable));
            let o = (0, s.closest)(t.target, this.containers),
              a = t.overContainer || o,
              l = this.currentOverContainer && a !== this.currentOverContainer,
              u = this.currentOver && n !== this.currentOver,
              d = a && this.currentOverContainer !== a,
              h = o && n && this.currentOver !== n;
            if (u) {
              let g = new c.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                over: this.currentOver,
              });
              this.currentOver.classList.remove(
                this.getClassNameFor("draggable:over")
              ),
                (this.currentOver = null),
                this.trigger(g);
            }
            if (l) {
              let f = new c.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: this.currentOverContainer,
              });
              this.currentOverContainer.classList.remove(
                this.getClassNameFor("container:over")
              ),
                (this.currentOverContainer = null),
                this.trigger(f);
            }
            if (d) {
              a.classList.add(this.getClassNameFor("container:over"));
              let p = new c.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
              });
              (this.currentOverContainer = a), this.trigger(p);
            }
            if (h) {
              n.classList.add(this.getClassNameFor("draggable:over"));
              let v = new c.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
                over: n,
              });
              (this.currentOver = n), this.trigger(v);
            }
          }
          [g](e) {
            if (!this.dragging) return;
            this.dragging = !1;
            let t = new c.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: e.sensorEvent,
              sourceContainer: this.sourceContainer,
            });
            this.trigger(t),
              this.source.parentNode.insertBefore(
                this.originalSource,
                this.source
              ),
              this.source.parentNode.removeChild(this.source),
              (this.originalSource.style.display = ""),
              this.source.classList.remove(
                this.getClassNameFor("source:dragging")
              ),
              this.originalSource.classList.remove(
                this.getClassNameFor("source:original")
              ),
              this.originalSource.classList.add(
                this.getClassNameFor("source:placed")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:placed")
              ),
              this.sourceContainer.classList.remove(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.remove(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, ""),
              this.currentOver &&
                this.currentOver.classList.remove(
                  this.getClassNameFor("draggable:over")
                ),
              this.currentOverContainer &&
                this.currentOverContainer.classList.remove(
                  this.getClassNameFor("container:over")
                ),
              (this.lastPlacedSource = this.originalSource),
              (this.lastPlacedContainer = this.sourceContainer),
              (this.placedTimeoutID = setTimeout(() => {
                this.lastPlacedSource &&
                  this.lastPlacedSource.classList.remove(
                    this.getClassNameFor("source:placed")
                  ),
                  this.lastPlacedContainer &&
                    this.lastPlacedContainer.classList.remove(
                      this.getClassNameFor("container:placed")
                    ),
                  (this.lastPlacedSource = null),
                  (this.lastPlacedContainer = null);
              }, this.options.placedTimeout)),
              (this.source = null),
              (this.originalSource = null),
              (this.currentOverContainer = null),
              (this.currentOver = null),
              (this.sourceContainer = null);
          }
          [f](e) {
            if (!this.dragging) return;
            let t = m(e),
              r =
                this.source ||
                (0, s.closest)(t.originalEvent.target, this.options.draggable),
              n = new c.DragPressureEvent({
                sensorEvent: t,
                source: r,
                pressure: t.pressure,
              });
            this.trigger(n);
          }
        }
        function m(e) {
          return e.detail;
        }
        function b(e, t) {
          (e.style.webkitUserSelect = t),
            (e.style.mozUserSelect = t),
            (e.style.msUserSelect = t),
            (e.style.oUserSelect = t),
            (e.style.userSelect = t);
        }
        (t.default = v),
          (v.Plugins = {
            Announcement: o.Announcement,
            Focusable: o.Focusable,
            Mirror: o.Mirror,
            Scrollable: o.Scrollable,
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(1)) && n.__esModule ? n : { default: n },
          s = r(0);
        let o = Symbol("onMouseForceWillBegin"),
          a = Symbol("onMouseForceDown"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseForceChange"),
          c = Symbol("onMouseMove"),
          d = Symbol("onMouseUp"),
          h = Symbol("onMouseForceGlobalChange");
        class g extends i.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mightDrag = !1),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            for (let e of this.containers)
              e.addEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.addEventListener("webkitmouseforcedown", this[a], !1),
                e.addEventListener("mousedown", this[l], !0),
                e.addEventListener("webkitmouseforcechanged", this[u], !1);
            document.addEventListener("mousemove", this[c]),
              document.addEventListener("mouseup", this[d]);
          }
          detach() {
            for (let e of this.containers)
              e.removeEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.removeEventListener("webkitmouseforcedown", this[a], !1),
                e.removeEventListener("mousedown", this[l], !0),
                e.removeEventListener("webkitmouseforcechanged", this[u], !1);
            document.removeEventListener("mousemove", this[c]),
              document.removeEventListener("mouseup", this[d]);
          }
          [o](e) {
            e.preventDefault(), (this.mightDrag = !0);
          }
          [a](e) {
            if (this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = e.currentTarget,
              n = new s.DragStartSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              (this.currentContainer = r),
              (this.dragging = !n.canceled()),
              (this.mightDrag = !1);
          }
          [d](e) {
            if (!this.dragging) return;
            let t = new s.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, t),
              (this.currentContainer = null),
              (this.dragging = !1),
              (this.mightDrag = !1);
          }
          [l](e) {
            this.mightDrag &&
              (e.stopPropagation(),
              e.stopImmediatePropagation(),
              e.preventDefault());
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new s.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [u](e) {
            if (this.dragging) return;
            let t = e.target,
              r = e.currentTarget,
              n = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n);
          }
          [h](e) {
            if (!this.dragging) return;
            let t = e.target,
              r = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
        }
        t.default = g;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(12)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onMouseDown"),
          l = Symbol("onMouseUp"),
          u = Symbol("onDragStart"),
          c = Symbol("onDragOver"),
          d = Symbol("onDragEnd"),
          h = Symbol("onDrop"),
          g = Symbol("reset");
        class f extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDownTimeout = null),
              (this.draggableElement = null),
              (this.nativeDraggableElement = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[a], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[a], !0);
          }
          [u](e) {
            e.dataTransfer.setData("text", ""),
              (e.dataTransfer.effectAllowed = this.options.type);
            let t = document.elementFromPoint(e.clientX, e.clientY);
            if (
              ((this.currentContainer = (0, i.closest)(
                e.target,
                this.containers
              )),
              !this.currentContainer)
            )
              return;
            let r = new o.DragStartSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
            setTimeout(() => {
              this.trigger(this.currentContainer, r),
                r.canceled() ? (this.dragging = !1) : (this.dragging = !0);
            }, 0);
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              n.canceled() ||
                (e.preventDefault(),
                (e.dataTransfer.dropEffect = this.options.type));
          }
          [d](e) {
            if (!this.dragging) return;
            document.removeEventListener("mouseup", this[l], !0);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n), (this.dragging = !1), this[g]();
          }
          [h](e) {
            e.preventDefault();
          }
          [a](e) {
            if (e.target && (e.target.form || e.target.contenteditable)) return;
            let t = (0, i.closest)(e.target, (e) => e.draggable);
            t && ((t.draggable = !1), (this.nativeDraggableElement = t)),
              document.addEventListener("mouseup", this[l], !0),
              document.addEventListener("dragstart", this[u], !1),
              document.addEventListener("dragover", this[c], !1),
              document.addEventListener("dragend", this[d], !1),
              document.addEventListener("drop", this[h], !1);
            let r = (0, i.closest)(e.target, this.options.draggable);
            r &&
              (this.mouseDownTimeout = setTimeout(() => {
                (r.draggable = !0), (this.draggableElement = r);
              }, this.options.delay));
          }
          [l]() {
            this[g]();
          }
          [g]() {
            clearTimeout(this.mouseDownTimeout),
              document.removeEventListener("mouseup", this[l], !0),
              document.removeEventListener("dragstart", this[u], !1),
              document.removeEventListener("dragover", this[c], !1),
              document.removeEventListener("dragend", this[d], !1),
              document.removeEventListener("drop", this[h], !1),
              this.nativeDraggableElement &&
                ((this.nativeDraggableElement.draggable = !0),
                (this.nativeDraggableElement = null)),
              this.draggableElement &&
                ((this.draggableElement.draggable = !1),
                (this.draggableElement = null));
          }
        }
        t.default = f;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(14)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onTouchStart"),
          l = Symbol("onTouchHold"),
          u = Symbol("onTouchEnd"),
          c = Symbol("onTouchMove"),
          d = !1;
        window.addEventListener(
          "touchmove",
          (e) => {
            d && e.preventDefault();
          },
          { passive: !1 }
        );
        class h extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.currentScrollableParent = null),
              (this.tapTimeout = null),
              (this.touchMoved = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("touchstart", this[a]);
          }
          detach() {
            document.removeEventListener("touchstart", this[a]);
          }
          [a](e) {
            let t = (0, i.closest)(e.target, this.containers);
            t &&
              (document.addEventListener("touchmove", this[c]),
              document.addEventListener("touchend", this[u]),
              document.addEventListener("touchcancel", this[u]),
              t.addEventListener("contextmenu", g),
              (this.currentContainer = t),
              (this.tapTimeout = setTimeout(
                this[l](e, t),
                this.options.delay
              )));
          }
          [l](e, t) {
            return () => {
              if (this.touchMoved) return;
              let r = e.touches[0] || e.changedTouches[0],
                n = e.target,
                i = new o.DragStartSensorEvent({
                  clientX: r.pageX,
                  clientY: r.pageY,
                  target: n,
                  container: t,
                  originalEvent: e,
                });
              this.trigger(t, i),
                (this.dragging = !i.canceled()),
                (d = this.dragging);
            };
          }
          [c](e) {
            if (((this.touchMoved = !0), !this.dragging)) return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              ),
              n = new o.DragMoveSensorEvent({
                clientX: t.pageX,
                clientY: t.pageY,
                target: r,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, n);
          }
          [u](e) {
            if (
              ((this.touchMoved = !1),
              (d = !1),
              document.removeEventListener("touchend", this[u]),
              document.removeEventListener("touchcancel", this[u]),
              document.removeEventListener("touchmove", this[c]),
              this.currentContainer &&
                this.currentContainer.removeEventListener("contextmenu", g),
              clearTimeout(this.tapTimeout),
              !this.dragging)
            )
              return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              );
            e.preventDefault();
            let n = new o.DragStopSensorEvent({
              clientX: t.pageX,
              clientY: t.pageY,
              target: r,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, n),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
        }
        function g(e) {
          e.preventDefault(), e.stopPropagation();
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(16)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragPressureSensorEvent =
            t.DragStopSensorEvent =
            t.DragMoveSensorEvent =
            t.DragStartSensorEvent =
            t.SensorEvent =
              void 0);
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get originalEvent() {
            return this.data.originalEvent;
          }
          get clientX() {
            return this.data.clientX;
          }
          get clientY() {
            return this.data.clientY;
          }
          get target() {
            return this.data.target;
          }
          get container() {
            return this.data.container;
          }
          get pressure() {
            return this.data.pressure;
          }
        }
        t.SensorEvent = s;
        class o extends s {}
        (t.DragStartSensorEvent = o), (o.type = "drag:start");
        class a extends s {}
        (t.DragMoveSensorEvent = a), (a.type = "drag:move");
        class l extends s {}
        (t.DragStopSensorEvent = l), (l.type = "drag:stop");
        class u extends s {}
        (t.DragPressureSensorEvent = u), (u.type = "drag:pressure");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onContextMenuWhileDragging"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseMove"),
          c = Symbol("onMouseUp");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDown = !1),
              (this.mouseDownTimeout = null),
              (this.openedContextMenu = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[l], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[l], !0);
          }
          [l](e) {
            if (0 !== e.button || e.ctrlKey || e.metaKey) return;
            document.addEventListener("mouseup", this[c]);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = (0, i.closest)(t, this.containers);
            r &&
              (document.addEventListener("dragstart", h),
              (this.mouseDown = !0),
              clearTimeout(this.mouseDownTimeout),
              (this.mouseDownTimeout = setTimeout(() => {
                if (!this.mouseDown) return;
                let n = new o.DragStartSensorEvent({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  target: t,
                  container: r,
                  originalEvent: e,
                });
                this.trigger(r, n),
                  (this.currentContainer = r),
                  (this.dragging = !n.canceled()),
                  this.dragging &&
                    (document.addEventListener("contextmenu", this[a]),
                    document.addEventListener("mousemove", this[u]));
              }, this.options.delay)));
          }
          [u](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [c](e) {
            if (
              ((this.mouseDown = Boolean(this.openedContextMenu)),
              this.openedContextMenu)
            )
              return void (this.openedContextMenu = !1);
            if (
              (document.removeEventListener("mouseup", this[c]),
              document.removeEventListener("dragstart", h),
              !this.dragging)
            )
              return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r),
              document.removeEventListener("contextmenu", this[a]),
              document.removeEventListener("mousemove", this[u]),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
          [a](e) {
            e.preventDefault(), (this.openedContextMenu = !0);
          }
        }
        function h(e) {
          e.preventDefault();
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(19)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        t.default = class {
          constructor(e = [], t = {}) {
            (this.containers = [...e]),
              (this.options = n({}, t)),
              (this.dragging = !1),
              (this.currentContainer = null);
          }
          attach() {
            return this;
          }
          detach() {
            return this;
          }
          addContainer(...e) {
            this.containers = [...this.containers, ...e];
          }
          removeContainer(...e) {
            this.containers = this.containers.filter((t) => !e.includes(t));
          }
          trigger(e, t) {
            let r = document.createEvent("Event");
            return (
              (r.detail = t),
              r.initEvent(t.type, !0, !0),
              e.dispatchEvent(r),
              (this.lastEvent = t),
              t
            );
          }
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(22)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(24)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.scroll =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(3)) && n.__esModule ? n : { default: n },
          o = r(2);
        let a = (t.onDragStart = Symbol("onDragStart")),
          l = (t.onDragMove = Symbol("onDragMove")),
          u = (t.onDragStop = Symbol("onDragStop")),
          c = (t.scroll = Symbol("scroll")),
          d = (t.defaultOptions = {
            speed: 6,
            sensitivity: 50,
            scrollableElements: [],
          });
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.currentMousePosition = null),
              (this.scrollAnimationFrame = null),
              (this.scrollableElement = null),
              (this.findScrollableElementFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[a])
              .on("drag:move", this[l])
              .on("drag:stop", this[u]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[a])
              .off("drag:move", this[l])
              .off("drag:stop", this[u]);
          }
          getOptions() {
            return this.draggable.options.scrollable || {};
          }
          getScrollableElement(e) {
            return this.hasDefinedScrollableElements()
              ? (0, o.closest)(e, this.options.scrollableElements) ||
                  document.documentElement
              : (function (e) {
                  if (!e) return g();
                  let t = getComputedStyle(e).getPropertyValue("position"),
                    r = "absolute" === t,
                    n = (0, o.closest)(e, (e) => {
                      var t;
                      return (
                        (!r ||
                          "static" !==
                            getComputedStyle((t = e)).getPropertyValue(
                              "position"
                            )) &&
                        (function (e) {
                          let t = getComputedStyle(e, null),
                            r =
                              t.getPropertyValue("overflow") +
                              t.getPropertyValue("overflow-y") +
                              t.getPropertyValue("overflow-x");
                          return /(auto|scroll)/.test(r);
                        })(e)
                      );
                    });
                  return "fixed" !== t && n ? n : g();
                })(e);
          }
          hasDefinedScrollableElements() {
            return Boolean(0 !== this.options.scrollableElements.length);
          }
          [a](e) {
            this.findScrollableElementFrame = requestAnimationFrame(() => {
              this.scrollableElement = this.getScrollableElement(e.source);
            });
          }
          [l](e) {
            if (
              ((this.findScrollableElementFrame = requestAnimationFrame(() => {
                this.scrollableElement = this.getScrollableElement(
                  e.sensorEvent.target
                );
              })),
              !this.scrollableElement)
            )
              return;
            let t = e.sensorEvent,
              r = { x: 0, y: 0 };
            "ontouchstart" in window &&
              ((r.y =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
              (r.x =
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0)),
              (this.currentMousePosition = {
                clientX: t.clientX - r.x,
                clientY: t.clientY - r.y,
              }),
              (this.scrollAnimationFrame = requestAnimationFrame(this[c]));
          }
          [u]() {
            cancelAnimationFrame(this.scrollAnimationFrame),
              cancelAnimationFrame(this.findScrollableElementFrame),
              (this.scrollableElement = null),
              (this.scrollAnimationFrame = null),
              (this.findScrollableElementFrame = null),
              (this.currentMousePosition = null);
          }
          [c]() {
            if (!this.scrollableElement || !this.currentMousePosition) return;
            cancelAnimationFrame(this.scrollAnimationFrame);
            let { speed: e, sensitivity: t } = this.options,
              r = this.scrollableElement.getBoundingClientRect(),
              n = r.bottom > window.innerHeight,
              i = r.top < 0 || n,
              s = g(),
              o = this.scrollableElement,
              a = this.currentMousePosition.clientX,
              l = this.currentMousePosition.clientY;
            if (o === document.body || o === document.documentElement || i) {
              let { innerHeight: u, innerWidth: d } = window;
              l < t ? (s.scrollTop -= e) : u - l < t && (s.scrollTop += e),
                a < t ? (s.scrollLeft -= e) : d - a < t && (s.scrollLeft += e);
            } else {
              let { offsetHeight: h, offsetWidth: f } = o;
              r.top + h - l < t
                ? (o.scrollTop += e)
                : l - r.top < t && (o.scrollTop -= e),
                r.left + f - a < t
                  ? (o.scrollLeft += e)
                  : a - r.left < t && (o.scrollLeft -= e);
            }
            this.scrollAnimationFrame = requestAnimationFrame(this[c]);
          }
        }
        function g() {
          return document.scrollingElement || document.documentElement;
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(26),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MirrorDestroyEvent =
            t.MirrorMoveEvent =
            t.MirrorAttachedEvent =
            t.MirrorCreatedEvent =
            t.MirrorCreateEvent =
            t.MirrorEvent =
              void 0);
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get dragEvent() {
            return this.data.dragEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        t.MirrorEvent = s;
        class o extends s {}
        (t.MirrorCreateEvent = o), (o.type = "mirror:create");
        class a extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorCreatedEvent = a), (a.type = "mirror:created");
        class l extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorAttachedEvent = l), (l.type = "mirror:attached");
        class u extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorMoveEvent = u), (u.type = "mirror:move"), (u.cancelable = !0);
        class c extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorDestroyEvent = c),
          (c.type = "mirror:destroy"),
          (c.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(28);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.getAppendableContainer =
            t.onScroll =
            t.onMirrorMove =
            t.onMirrorCreated =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(3)) && n.__esModule ? n : { default: n },
          o = r(29);
        function a(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        let l = (t.onDragStart = Symbol("onDragStart")),
          u = (t.onDragMove = Symbol("onDragMove")),
          c = (t.onDragStop = Symbol("onDragStop")),
          d = (t.onMirrorCreated = Symbol("onMirrorCreated")),
          h = (t.onMirrorMove = Symbol("onMirrorMove")),
          g = (t.onScroll = Symbol("onScroll")),
          f = (t.getAppendableContainer = Symbol("getAppendableContainer")),
          p = (t.defaultOptions = {
            constrainDimensions: !1,
            xAxis: !0,
            yAxis: !0,
            cursorOffsetX: null,
            cursorOffsetY: null,
          });
        class v extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, p, this.getOptions())),
              (this.scrollOffset = { x: 0, y: 0 }),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              }),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[l])
              .on("drag:move", this[u])
              .on("drag:stop", this[c])
              .on("mirror:created", this[d])
              .on("mirror:move", this[h]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[l])
              .off("drag:move", this[u])
              .off("drag:stop", this[c])
              .off("mirror:created", this[d])
              .off("mirror:move", this[h]);
          }
          getOptions() {
            return this.draggable.options.mirror || {};
          }
          [l](e) {
            var t;
            if (e.canceled()) return;
            "ontouchstart" in window &&
              document.addEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              });
            let {
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
              } = e,
              a = new o.MirrorCreateEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
              });
            if (
              (this.draggable.trigger(a),
              (t = s),
              /^drag/.test(t.originalEvent.type) || a.canceled())
            )
              return;
            let l = this[f](r) || i;
            this.mirror = r.cloneNode(!0);
            let u = new o.MirrorCreatedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              }),
              c = new o.MirrorAttachedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(u),
              l.appendChild(this.mirror),
              this.draggable.trigger(c);
          }
          [u](e) {
            if (!this.mirror || e.canceled()) return;
            let {
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
              } = e,
              s = new o.MirrorMoveEvent({
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(s);
          }
          [c](e) {
            if (
              ("ontouchstart" in window &&
                document.removeEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = { x: 0, y: 0 }),
              (this.scrollOffset = { x: 0, y: 0 }),
              !this.mirror)
            )
              return;
            let { source: t, sourceContainer: r, sensorEvent: n } = e,
              i = new o.MirrorDestroyEvent({
                source: t,
                mirror: this.mirror,
                sourceContainer: r,
                sensorEvent: n,
                dragEvent: e,
              });
            this.draggable.trigger(i),
              i.canceled() || this.mirror.parentNode.removeChild(this.mirror);
          }
          [g]() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y,
            };
          }
          [d]({ mirror: e, source: t, sensorEvent: r }) {
            let n = {
              mirror: e,
              source: t,
              sensorEvent: r,
              mirrorClass: this.draggable.getClassNameFor("mirror"),
              scrollOffset: this.scrollOffset,
              options: this.options,
            };
            return Promise.resolve(n)
              .then(m)
              .then(b)
              .then(E)
              .then(y)
              .then(M({ initial: !0 }))
              .then($)
              .then((e) => {
                let { mirrorOffset: t, initialX: r, initialY: n } = e,
                  s = a(e, ["mirrorOffset", "initialX", "initialY"]);
                return (
                  (this.mirrorOffset = t),
                  (this.initialX = r),
                  (this.initialY = n),
                  i({ mirrorOffset: t, initialX: r, initialY: n }, s)
                );
              });
          }
          [h](e) {
            if (e.canceled()) return null;
            let t = {
              mirror: e.mirror,
              sensorEvent: e.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset,
            };
            return Promise.resolve(t).then(M({ raf: !0 }));
          }
          [f](e) {
            let t = this.options.appendTo;
            return "string" == typeof t
              ? document.querySelector(t)
              : t instanceof HTMLElement
              ? t
              : "function" == typeof t
              ? t(e)
              : e.parentNode;
          }
        }
        function m(e) {
          let { source: t } = e,
            r = a(e, ["source"]);
          return S((e) => {
            let n = t.getBoundingClientRect();
            e(i({ source: t, sourceRect: n }, r));
          });
        }
        function b(e) {
          let { sensorEvent: t, sourceRect: r, options: n } = e,
            s = a(e, ["sensorEvent", "sourceRect", "options"]);
          return S((e) => {
            let o =
                null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
              a =
                null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
            e(
              i(
                {
                  sensorEvent: t,
                  sourceRect: r,
                  mirrorOffset: { top: o, left: a },
                  options: n,
                },
                s
              )
            );
          });
        }
        function E(e) {
          let { mirror: t, source: r, options: n } = e,
            s = a(e, ["mirror", "source", "options"]);
          return S((e) => {
            let o, a;
            if (n.constrainDimensions) {
              let l = getComputedStyle(r);
              (o = l.getPropertyValue("height")),
                (a = l.getPropertyValue("width"));
            }
            (t.style.position = "fixed"),
              (t.style.pointerEvents = "none"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.margin = 0),
              n.constrainDimensions &&
                ((t.style.height = o), (t.style.width = a)),
              e(i({ mirror: t, source: r, options: n }, s));
          });
        }
        function y(e) {
          let { mirror: t, mirrorClass: r } = e,
            n = a(e, ["mirror", "mirrorClass"]);
          return S((e) => {
            t.classList.add(r), e(i({ mirror: t, mirrorClass: r }, n));
          });
        }
        function $(e) {
          let { mirror: t } = e,
            r = a(e, ["mirror"]);
          return S((e) => {
            t.removeAttribute("id"), delete t.id, e(i({ mirror: t }, r));
          });
        }
        function M({ withFrame: e = !1, initial: t = !1 } = {}) {
          return (r) => {
            let {
                mirror: n,
                sensorEvent: s,
                mirrorOffset: o,
                initialY: l,
                initialX: u,
                scrollOffset: c,
                options: d,
              } = r,
              h = a(r, [
                "mirror",
                "sensorEvent",
                "mirrorOffset",
                "initialY",
                "initialX",
                "scrollOffset",
                "options",
              ]);
            return S(
              (e) => {
                let r = i(
                  { mirror: n, sensorEvent: s, mirrorOffset: o, options: d },
                  h
                );
                if (o) {
                  let a = s.clientX - o.left - c.x,
                    g = s.clientY - o.top - c.y;
                  (d.xAxis && d.yAxis) || t
                    ? (n.style.transform = `translate3d(${a}px, ${g}px, 0)`)
                    : d.xAxis && !d.yAxis
                    ? (n.style.transform = `translate3d(${a}px, ${l}px, 0)`)
                    : d.yAxis &&
                      !d.xAxis &&
                      (n.style.transform = `translate3d(${u}px, ${g}px, 0)`),
                    t && ((r.initialX = a), (r.initialY = g));
                }
                e(r);
              },
              { frame: e }
            );
          };
        }
        function S(e, { raf: t = !1 } = {}) {
          return new Promise((r, n) => {
            t
              ? requestAnimationFrame(() => {
                  e(r, n);
                })
              : e(r, n);
          });
        }
        t.default = v;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(30),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(3)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy");
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, {}, this.getOptions())),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable
              .on("draggable:initialize", this[o])
              .on("draggable:destroy", this[a]);
          }
          detach() {
            this.draggable
              .off("draggable:initialize", this[o])
              .off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.focusable || {};
          }
          getElements() {
            return [
              ...this.draggable.containers,
              ...this.draggable.getDraggableElements(),
            ];
          }
          [o]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) => {
                var t;
                Boolean(
                  !(t = e).getAttribute("tabindex") && -1 === t.tabIndex
                ) && (u.push(t), (t.tabIndex = 0));
              });
            });
          }
          [a]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) =>
                (function (e) {
                  let t = u.indexOf(e);
                  -1 !== t && ((e.tabIndex = -1), u.splice(t, 1));
                })(e)
              );
            });
          }
        }
        t.default = l;
        let u = [];
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(32)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(3)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy"),
          l = Symbol("announceEvent"),
          u = Symbol("announceMessage"),
          c = (t.defaultOptions = { expire: 7e3 });
        class d extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, c, this.getOptions())),
              (this.originalTriggerMethod = this.draggable.trigger),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable.on("draggable:initialize", this[o]);
          }
          detach() {
            this.draggable.off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.announcements || {};
          }
          [l](e) {
            let t = this.options[e.type];
            t && "string" == typeof t && this[u](t),
              t && "function" == typeof t && this[u](t(e));
          }
          [u](e) {
            !(function (e, { expire: t }) {
              let r = document.createElement("div");
              (r.textContent = e),
                h.appendChild(r),
                setTimeout(() => {
                  h.removeChild(r);
                }, t);
            })(e, { expire: this.options.expire });
          }
          [o]() {
            this.draggable.trigger = (e) => {
              try {
                this[l](e);
              } finally {
                this.originalTriggerMethod.call(this.draggable, e);
              }
            };
          }
          [a]() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }
        t.default = d;
        let h = (function () {
          let e = document.createElement("div");
          return (
            e.setAttribute("id", "draggable-live-region"),
            e.setAttribute("aria-relevant", "additions"),
            e.setAttribute("aria-atomic", "true"),
            e.setAttribute("aria-live", "assertive"),
            e.setAttribute("role", "log"),
            (e.style.position = "fixed"),
            (e.style.width = "1px"),
            (e.style.height = "1px"),
            (e.style.top = "-1px"),
            (e.style.overflow = "hidden"),
            e
          );
        })();
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(h);
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(35),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DraggableDestroyEvent =
            t.DraggableInitializedEvent =
            t.DraggableEvent =
              void 0);
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get draggable() {
            return this.data.draggable;
          }
        }
        (t.DraggableEvent = s), (s.type = "draggable");
        class o extends s {}
        (t.DraggableInitializedEvent = o), (o.type = "draggable:initialize");
        class a extends s {}
        (t.DraggableDestroyEvent = a), (a.type = "draggable:destroy");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragStopEvent =
            t.DragPressureEvent =
            t.DragOutContainerEvent =
            t.DragOverContainerEvent =
            t.DragOutEvent =
            t.DragOverEvent =
            t.DragMoveEvent =
            t.DragStartEvent =
            t.DragEvent =
              void 0);
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get mirror() {
            return this.data.mirror;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        (t.DragEvent = s), (s.type = "drag");
        class o extends s {}
        (t.DragStartEvent = o), (o.type = "drag:start"), (o.cancelable = !0);
        class a extends s {}
        (t.DragMoveEvent = a), (a.type = "drag:move");
        class l extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOverEvent = l), (l.type = "drag:over"), (l.cancelable = !0);
        class u extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOutEvent = u), (u.type = "drag:out");
        class c extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOverContainerEvent = c), (c.type = "drag:over:container");
        class d extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOutContainerEvent = d), (d.type = "drag:out:container");
        class h extends s {
          get pressure() {
            return this.data.pressure;
          }
        }
        (t.DragPressureEvent = h), (h.type = "drag:pressure");
        class g extends s {}
        (t.DragStopEvent = g), (g.type = "drag:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(8);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i = r(7);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
        var s = r(6);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            });
        });
        var o = r(5);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
        var a,
          l = (a = r(11)) && a.__esModule ? a : { default: a };
        t.default = l.default;
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Sortable", [], t)
      : "object" == typeof exports
      ? (exports.Sortable = t())
      : (e.Sortable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 44))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(19);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(22)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(26);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(24);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(42)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(35)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(1);
        Object.defineProperty(t, "Sensor", {
          enumerable: !0,
          get: function () {
            return u(n).default;
          },
        });
        var i = r(21);
        Object.defineProperty(t, "MouseSensor", {
          enumerable: !0,
          get: function () {
            return u(i).default;
          },
        });
        var s = r(18);
        Object.defineProperty(t, "TouchSensor", {
          enumerable: !0,
          get: function () {
            return u(s).default;
          },
        });
        var o = r(16);
        Object.defineProperty(t, "DragSensor", {
          enumerable: !0,
          get: function () {
            return u(o).default;
          },
        });
        var a = r(14);
        Object.defineProperty(t, "ForceTouchSensor", {
          enumerable: !0,
          get: function () {
            return u(a).default;
          },
        });
        var l = r(0);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(37);
        Object.defineProperty(t, "Announcement", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        }),
          Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function () {
              return n.defaultOptions;
            },
          });
        var i = r(34);
        Object.defineProperty(t, "Focusable", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        });
        var s = r(32);
        Object.defineProperty(t, "Mirror", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        }),
          Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function () {
              return s.defaultOptions;
            },
          });
        var o = r(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "Scrollable", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(38);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(39);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(43);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor() {
              this.callbacks = {};
            }
            on(e, ...t) {
              return (
                this.callbacks[e] || (this.callbacks[e] = []),
                this.callbacks[e].push(...t),
                this
              );
            }
            off(e, t) {
              if (!this.callbacks[e]) return null;
              let r = this.callbacks[e].slice(0);
              for (let n = 0; n < r.length; n++)
                t === r[n] && this.callbacks[e].splice(n, 1);
              return this;
            }
            trigger(e) {
              if (!this.callbacks[e.type]) return null;
              let t = [...this.callbacks[e.type]],
                r = [];
              for (let n = t.length - 1; n >= 0; n--) {
                let i = t[n];
                try {
                  i(e);
                } catch (s) {
                  r.push(s);
                }
              }
              return (
                r.length &&
                  console.error(
                    `Draggable caught errors while triggering '${e.type}'`,
                    r
                  ),
                this
              );
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(10)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(2),
          o = r(6),
          a = (n = r(11)) && n.__esModule ? n : { default: n },
          l = r(5),
          u = r(7),
          c = r(8);
        let d = Symbol("onDragStart"),
          h = Symbol("onDragMove"),
          g = Symbol("onDragStop"),
          f = Symbol("onDragPressure"),
          p = (t.defaultOptions = {
            draggable: ".draggable-source",
            handle: null,
            delay: 100,
            placedTimeout: 800,
            plugins: [],
            sensors: [],
          });
        class v {
          constructor(e = [document.body], t = {}) {
            if (e instanceof NodeList || e instanceof Array)
              this.containers = [...e];
            else {
              if (!(e instanceof HTMLElement))
                throw Error(
                  "Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`"
                );
              this.containers = [e];
            }
            (this.options = i({}, p, t, {
              classes: i(
                {},
                {
                  "container:dragging": "draggable-container--is-dragging",
                  "source:dragging": "draggable-source--is-dragging",
                  "source:placed": "draggable-source--placed",
                  "container:placed": "draggable-container--placed",
                  "body:dragging": "draggable--is-dragging",
                  "draggable:over": "draggable--over",
                  "container:over": "draggable-container--over",
                  "source:original": "draggable--original",
                  mirror: "draggable-mirror",
                },
                t.classes || {}
              ),
              announcements: i(
                {},
                {
                  "drag:start": (e) =>
                    `Picked up ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                  "drag:stop": (e) =>
                    `Released ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                },
                t.announcements || {}
              ),
            })),
              (this.emitter = new a.default()),
              (this.dragging = !1),
              (this.plugins = []),
              (this.sensors = []),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this)),
              (this[f] = this[f].bind(this)),
              document.addEventListener("drag:start", this[d], !0),
              document.addEventListener("drag:move", this[h], !0),
              document.addEventListener("drag:stop", this[g], !0),
              document.addEventListener("drag:pressure", this[f], !0);
            let r = Object.values(v.Plugins).map((e) => e),
              n = [l.MouseSensor, l.TouchSensor];
            this.addPlugin(...r, ...this.options.plugins),
              this.addSensor(...n, ...this.options.sensors);
            let s = new u.DraggableInitializedEvent({ draggable: this });
            this.on("mirror:created", ({ mirror: e }) => (this.mirror = e)),
              this.on("mirror:destroy", () => (this.mirror = null)),
              this.trigger(s);
          }
          destroy() {
            document.removeEventListener("drag:start", this[d], !0),
              document.removeEventListener("drag:move", this[h], !0),
              document.removeEventListener("drag:stop", this[g], !0),
              document.removeEventListener("drag:pressure", this[f], !0);
            let e = new u.DraggableDestroyEvent({ draggable: this });
            this.trigger(e),
              this.removePlugin(...this.plugins.map((e) => e.constructor)),
              this.removeSensor(...this.sensors.map((e) => e.constructor));
          }
          addPlugin(...e) {
            let t = e.map((e) => new e(this));
            return (
              t.forEach((e) => e.attach()),
              (this.plugins = [...this.plugins, ...t]),
              this
            );
          }
          removePlugin(...e) {
            return (
              this.plugins
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.plugins = this.plugins.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addSensor(...e) {
            let t = e.map((e) => new e(this.containers, this.options));
            return (
              t.forEach((e) => e.attach()),
              (this.sensors = [...this.sensors, ...t]),
              this
            );
          }
          removeSensor(...e) {
            return (
              this.sensors
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.sensors = this.sensors.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addContainer(...e) {
            return (
              (this.containers = [...this.containers, ...e]),
              this.sensors.forEach((t) => t.addContainer(...e)),
              this
            );
          }
          removeContainer(...e) {
            return (
              (this.containers = this.containers.filter((t) => !e.includes(t))),
              this.sensors.forEach((t) => t.removeContainer(...e)),
              this
            );
          }
          on(e, ...t) {
            return this.emitter.on(e, ...t), this;
          }
          off(e, t) {
            return this.emitter.off(e, t), this;
          }
          trigger(e) {
            return this.emitter.trigger(e), this;
          }
          getClassNameFor(e) {
            return this.options.classes[e];
          }
          isDragging() {
            return Boolean(this.dragging);
          }
          getDraggableElements() {
            return this.containers.reduce(
              (e, t) => [...e, ...this.getDraggableElementsForContainer(t)],
              []
            );
          }
          getDraggableElementsForContainer(e) {
            return [...e.querySelectorAll(this.options.draggable)].filter(
              (e) => e !== this.originalSource && e !== this.mirror
            );
          }
          [d](e) {
            let t = m(e),
              { target: r, container: n } = t;
            if (!this.containers.includes(n)) return;
            if (
              (this.options.handle &&
                r &&
                !(0, s.closest)(r, this.options.handle)) ||
              ((this.originalSource = (0, s.closest)(
                r,
                this.options.draggable
              )),
              (this.sourceContainer = n),
              !this.originalSource)
            )
              return void t.cancel();
            this.lastPlacedSource &&
              this.lastPlacedContainer &&
              (clearTimeout(this.placedTimeoutID),
              this.lastPlacedSource.classList.remove(
                this.getClassNameFor("source:placed")
              ),
              this.lastPlacedContainer.classList.remove(
                this.getClassNameFor("container:placed")
              )),
              (this.source = this.originalSource.cloneNode(!0)),
              this.originalSource.parentNode.insertBefore(
                this.source,
                this.originalSource
              ),
              (this.originalSource.style.display = "none");
            let o = new c.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: n,
              sensorEvent: t,
            });
            if (
              (this.trigger(o), (this.dragging = !o.canceled()), o.canceled())
            )
              return (
                this.source.parentNode.removeChild(this.source),
                void (this.originalSource.style.display = null)
              );
            this.originalSource.classList.add(
              this.getClassNameFor("source:original")
            ),
              this.source.classList.add(
                this.getClassNameFor("source:dragging")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.add(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, "none"),
              requestAnimationFrame(() => {
                let t = m(e).clone({ target: this.source });
                this[h](i({}, e, { detail: t }));
              });
          }
          [h](e) {
            if (!this.dragging) return;
            let t = m(e),
              { container: r } = t,
              n = t.target,
              i = new c.DragMoveEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
              });
            this.trigger(i),
              i.canceled() && t.cancel(),
              (n = (0, s.closest)(n, this.options.draggable));
            let o = (0, s.closest)(t.target, this.containers),
              a = t.overContainer || o,
              l = this.currentOverContainer && a !== this.currentOverContainer,
              u = this.currentOver && n !== this.currentOver,
              d = a && this.currentOverContainer !== a,
              h = o && n && this.currentOver !== n;
            if (u) {
              let g = new c.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                over: this.currentOver,
              });
              this.currentOver.classList.remove(
                this.getClassNameFor("draggable:over")
              ),
                (this.currentOver = null),
                this.trigger(g);
            }
            if (l) {
              let f = new c.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: this.currentOverContainer,
              });
              this.currentOverContainer.classList.remove(
                this.getClassNameFor("container:over")
              ),
                (this.currentOverContainer = null),
                this.trigger(f);
            }
            if (d) {
              a.classList.add(this.getClassNameFor("container:over"));
              let p = new c.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
              });
              (this.currentOverContainer = a), this.trigger(p);
            }
            if (h) {
              n.classList.add(this.getClassNameFor("draggable:over"));
              let v = new c.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
                over: n,
              });
              (this.currentOver = n), this.trigger(v);
            }
          }
          [g](e) {
            if (!this.dragging) return;
            this.dragging = !1;
            let t = new c.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: e.sensorEvent,
              sourceContainer: this.sourceContainer,
            });
            this.trigger(t),
              this.source.parentNode.insertBefore(
                this.originalSource,
                this.source
              ),
              this.source.parentNode.removeChild(this.source),
              (this.originalSource.style.display = ""),
              this.source.classList.remove(
                this.getClassNameFor("source:dragging")
              ),
              this.originalSource.classList.remove(
                this.getClassNameFor("source:original")
              ),
              this.originalSource.classList.add(
                this.getClassNameFor("source:placed")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:placed")
              ),
              this.sourceContainer.classList.remove(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.remove(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, ""),
              this.currentOver &&
                this.currentOver.classList.remove(
                  this.getClassNameFor("draggable:over")
                ),
              this.currentOverContainer &&
                this.currentOverContainer.classList.remove(
                  this.getClassNameFor("container:over")
                ),
              (this.lastPlacedSource = this.originalSource),
              (this.lastPlacedContainer = this.sourceContainer),
              (this.placedTimeoutID = setTimeout(() => {
                this.lastPlacedSource &&
                  this.lastPlacedSource.classList.remove(
                    this.getClassNameFor("source:placed")
                  ),
                  this.lastPlacedContainer &&
                    this.lastPlacedContainer.classList.remove(
                      this.getClassNameFor("container:placed")
                    ),
                  (this.lastPlacedSource = null),
                  (this.lastPlacedContainer = null);
              }, this.options.placedTimeout)),
              (this.source = null),
              (this.originalSource = null),
              (this.currentOverContainer = null),
              (this.currentOver = null),
              (this.sourceContainer = null);
          }
          [f](e) {
            if (!this.dragging) return;
            let t = m(e),
              r =
                this.source ||
                (0, s.closest)(t.originalEvent.target, this.options.draggable),
              n = new c.DragPressureEvent({
                sensorEvent: t,
                source: r,
                pressure: t.pressure,
              });
            this.trigger(n);
          }
        }
        function m(e) {
          return e.detail;
        }
        function b(e, t) {
          (e.style.webkitUserSelect = t),
            (e.style.mozUserSelect = t),
            (e.style.msUserSelect = t),
            (e.style.oUserSelect = t),
            (e.style.userSelect = t);
        }
        (t.default = v),
          (v.Plugins = {
            Announcement: o.Announcement,
            Focusable: o.Focusable,
            Mirror: o.Mirror,
            Scrollable: o.Scrollable,
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(1)) && n.__esModule ? n : { default: n },
          s = r(0);
        let o = Symbol("onMouseForceWillBegin"),
          a = Symbol("onMouseForceDown"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseForceChange"),
          c = Symbol("onMouseMove"),
          d = Symbol("onMouseUp"),
          h = Symbol("onMouseForceGlobalChange");
        class g extends i.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mightDrag = !1),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            for (let e of this.containers)
              e.addEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.addEventListener("webkitmouseforcedown", this[a], !1),
                e.addEventListener("mousedown", this[l], !0),
                e.addEventListener("webkitmouseforcechanged", this[u], !1);
            document.addEventListener("mousemove", this[c]),
              document.addEventListener("mouseup", this[d]);
          }
          detach() {
            for (let e of this.containers)
              e.removeEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.removeEventListener("webkitmouseforcedown", this[a], !1),
                e.removeEventListener("mousedown", this[l], !0),
                e.removeEventListener("webkitmouseforcechanged", this[u], !1);
            document.removeEventListener("mousemove", this[c]),
              document.removeEventListener("mouseup", this[d]);
          }
          [o](e) {
            e.preventDefault(), (this.mightDrag = !0);
          }
          [a](e) {
            if (this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = e.currentTarget,
              n = new s.DragStartSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              (this.currentContainer = r),
              (this.dragging = !n.canceled()),
              (this.mightDrag = !1);
          }
          [d](e) {
            if (!this.dragging) return;
            let t = new s.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, t),
              (this.currentContainer = null),
              (this.dragging = !1),
              (this.mightDrag = !1);
          }
          [l](e) {
            this.mightDrag &&
              (e.stopPropagation(),
              e.stopImmediatePropagation(),
              e.preventDefault());
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new s.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [u](e) {
            if (this.dragging) return;
            let t = e.target,
              r = e.currentTarget,
              n = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n);
          }
          [h](e) {
            if (!this.dragging) return;
            let t = e.target,
              r = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
        }
        t.default = g;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(13)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onMouseDown"),
          l = Symbol("onMouseUp"),
          u = Symbol("onDragStart"),
          c = Symbol("onDragOver"),
          d = Symbol("onDragEnd"),
          h = Symbol("onDrop"),
          g = Symbol("reset");
        class f extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDownTimeout = null),
              (this.draggableElement = null),
              (this.nativeDraggableElement = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[a], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[a], !0);
          }
          [u](e) {
            e.dataTransfer.setData("text", ""),
              (e.dataTransfer.effectAllowed = this.options.type);
            let t = document.elementFromPoint(e.clientX, e.clientY);
            if (
              ((this.currentContainer = (0, i.closest)(
                e.target,
                this.containers
              )),
              !this.currentContainer)
            )
              return;
            let r = new o.DragStartSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
            setTimeout(() => {
              this.trigger(this.currentContainer, r),
                r.canceled() ? (this.dragging = !1) : (this.dragging = !0);
            }, 0);
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              n.canceled() ||
                (e.preventDefault(),
                (e.dataTransfer.dropEffect = this.options.type));
          }
          [d](e) {
            if (!this.dragging) return;
            document.removeEventListener("mouseup", this[l], !0);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n), (this.dragging = !1), this[g]();
          }
          [h](e) {
            e.preventDefault();
          }
          [a](e) {
            if (e.target && (e.target.form || e.target.contenteditable)) return;
            let t = (0, i.closest)(e.target, (e) => e.draggable);
            t && ((t.draggable = !1), (this.nativeDraggableElement = t)),
              document.addEventListener("mouseup", this[l], !0),
              document.addEventListener("dragstart", this[u], !1),
              document.addEventListener("dragover", this[c], !1),
              document.addEventListener("dragend", this[d], !1),
              document.addEventListener("drop", this[h], !1);
            let r = (0, i.closest)(e.target, this.options.draggable);
            r &&
              (this.mouseDownTimeout = setTimeout(() => {
                (r.draggable = !0), (this.draggableElement = r);
              }, this.options.delay));
          }
          [l]() {
            this[g]();
          }
          [g]() {
            clearTimeout(this.mouseDownTimeout),
              document.removeEventListener("mouseup", this[l], !0),
              document.removeEventListener("dragstart", this[u], !1),
              document.removeEventListener("dragover", this[c], !1),
              document.removeEventListener("dragend", this[d], !1),
              document.removeEventListener("drop", this[h], !1),
              this.nativeDraggableElement &&
                ((this.nativeDraggableElement.draggable = !0),
                (this.nativeDraggableElement = null)),
              this.draggableElement &&
                ((this.draggableElement.draggable = !1),
                (this.draggableElement = null));
          }
        }
        t.default = f;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(15)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onTouchStart"),
          l = Symbol("onTouchHold"),
          u = Symbol("onTouchEnd"),
          c = Symbol("onTouchMove"),
          d = !1;
        window.addEventListener(
          "touchmove",
          (e) => {
            d && e.preventDefault();
          },
          { passive: !1 }
        );
        class h extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.currentScrollableParent = null),
              (this.tapTimeout = null),
              (this.touchMoved = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("touchstart", this[a]);
          }
          detach() {
            document.removeEventListener("touchstart", this[a]);
          }
          [a](e) {
            let t = (0, i.closest)(e.target, this.containers);
            t &&
              (document.addEventListener("touchmove", this[c]),
              document.addEventListener("touchend", this[u]),
              document.addEventListener("touchcancel", this[u]),
              t.addEventListener("contextmenu", g),
              (this.currentContainer = t),
              (this.tapTimeout = setTimeout(
                this[l](e, t),
                this.options.delay
              )));
          }
          [l](e, t) {
            return () => {
              if (this.touchMoved) return;
              let r = e.touches[0] || e.changedTouches[0],
                n = e.target,
                i = new o.DragStartSensorEvent({
                  clientX: r.pageX,
                  clientY: r.pageY,
                  target: n,
                  container: t,
                  originalEvent: e,
                });
              this.trigger(t, i),
                (this.dragging = !i.canceled()),
                (d = this.dragging);
            };
          }
          [c](e) {
            if (((this.touchMoved = !0), !this.dragging)) return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              ),
              n = new o.DragMoveSensorEvent({
                clientX: t.pageX,
                clientY: t.pageY,
                target: r,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, n);
          }
          [u](e) {
            if (
              ((this.touchMoved = !1),
              (d = !1),
              document.removeEventListener("touchend", this[u]),
              document.removeEventListener("touchcancel", this[u]),
              document.removeEventListener("touchmove", this[c]),
              this.currentContainer &&
                this.currentContainer.removeEventListener("contextmenu", g),
              clearTimeout(this.tapTimeout),
              !this.dragging)
            )
              return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              );
            e.preventDefault();
            let n = new o.DragStopSensorEvent({
              clientX: t.pageX,
              clientY: t.pageY,
              target: r,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, n),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
        }
        function g(e) {
          e.preventDefault(), e.stopPropagation();
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(17)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragPressureSensorEvent =
            t.DragStopSensorEvent =
            t.DragMoveSensorEvent =
            t.DragStartSensorEvent =
            t.SensorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get originalEvent() {
            return this.data.originalEvent;
          }
          get clientX() {
            return this.data.clientX;
          }
          get clientY() {
            return this.data.clientY;
          }
          get target() {
            return this.data.target;
          }
          get container() {
            return this.data.container;
          }
          get pressure() {
            return this.data.pressure;
          }
        }
        t.SensorEvent = s;
        class o extends s {}
        (t.DragStartSensorEvent = o), (o.type = "drag:start");
        class a extends s {}
        (t.DragMoveSensorEvent = a), (a.type = "drag:move");
        class l extends s {}
        (t.DragStopSensorEvent = l), (l.type = "drag:stop");
        class u extends s {}
        (t.DragPressureSensorEvent = u), (u.type = "drag:pressure");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onContextMenuWhileDragging"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseMove"),
          c = Symbol("onMouseUp");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDown = !1),
              (this.mouseDownTimeout = null),
              (this.openedContextMenu = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[l], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[l], !0);
          }
          [l](e) {
            if (0 !== e.button || e.ctrlKey || e.metaKey) return;
            document.addEventListener("mouseup", this[c]);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = (0, i.closest)(t, this.containers);
            r &&
              (document.addEventListener("dragstart", h),
              (this.mouseDown = !0),
              clearTimeout(this.mouseDownTimeout),
              (this.mouseDownTimeout = setTimeout(() => {
                if (!this.mouseDown) return;
                let n = new o.DragStartSensorEvent({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  target: t,
                  container: r,
                  originalEvent: e,
                });
                this.trigger(r, n),
                  (this.currentContainer = r),
                  (this.dragging = !n.canceled()),
                  this.dragging &&
                    (document.addEventListener("contextmenu", this[a]),
                    document.addEventListener("mousemove", this[u]));
              }, this.options.delay)));
          }
          [u](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [c](e) {
            if (
              ((this.mouseDown = Boolean(this.openedContextMenu)),
              this.openedContextMenu)
            )
              return void (this.openedContextMenu = !1);
            if (
              (document.removeEventListener("mouseup", this[c]),
              document.removeEventListener("dragstart", h),
              !this.dragging)
            )
              return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r),
              document.removeEventListener("contextmenu", this[a]),
              document.removeEventListener("mousemove", this[u]),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
          [a](e) {
            e.preventDefault(), (this.openedContextMenu = !0);
          }
        }
        function h(e) {
          e.preventDefault();
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(20)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        t.default = class {
          constructor(e = [], t = {}) {
            (this.containers = [...e]),
              (this.options = n({}, t)),
              (this.dragging = !1),
              (this.currentContainer = null);
          }
          attach() {
            return this;
          }
          detach() {
            return this;
          }
          addContainer(...e) {
            this.containers = [...this.containers, ...e];
          }
          removeContainer(...e) {
            this.containers = this.containers.filter((t) => !e.includes(t));
          }
          trigger(e, t) {
            let r = document.createEvent("Event");
            return (
              (r.detail = t),
              r.initEvent(t.type, !0, !0),
              e.dispatchEvent(r),
              (this.lastEvent = t),
              t
            );
          }
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(23)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(25)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.scroll =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(2);
        let a = (t.onDragStart = Symbol("onDragStart")),
          l = (t.onDragMove = Symbol("onDragMove")),
          u = (t.onDragStop = Symbol("onDragStop")),
          c = (t.scroll = Symbol("scroll")),
          d = (t.defaultOptions = {
            speed: 6,
            sensitivity: 50,
            scrollableElements: [],
          });
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.currentMousePosition = null),
              (this.scrollAnimationFrame = null),
              (this.scrollableElement = null),
              (this.findScrollableElementFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[a])
              .on("drag:move", this[l])
              .on("drag:stop", this[u]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[a])
              .off("drag:move", this[l])
              .off("drag:stop", this[u]);
          }
          getOptions() {
            return this.draggable.options.scrollable || {};
          }
          getScrollableElement(e) {
            return this.hasDefinedScrollableElements()
              ? (0, o.closest)(e, this.options.scrollableElements) ||
                  document.documentElement
              : (function (e) {
                  if (!e) return g();
                  let t = getComputedStyle(e).getPropertyValue("position"),
                    r = "absolute" === t,
                    n = (0, o.closest)(e, (e) => {
                      var t;
                      return (
                        (!r ||
                          "static" !==
                            getComputedStyle((t = e)).getPropertyValue(
                              "position"
                            )) &&
                        (function (e) {
                          let t = getComputedStyle(e, null),
                            r =
                              t.getPropertyValue("overflow") +
                              t.getPropertyValue("overflow-y") +
                              t.getPropertyValue("overflow-x");
                          return /(auto|scroll)/.test(r);
                        })(e)
                      );
                    });
                  return "fixed" !== t && n ? n : g();
                })(e);
          }
          hasDefinedScrollableElements() {
            return Boolean(0 !== this.options.scrollableElements.length);
          }
          [a](e) {
            this.findScrollableElementFrame = requestAnimationFrame(() => {
              this.scrollableElement = this.getScrollableElement(e.source);
            });
          }
          [l](e) {
            if (
              ((this.findScrollableElementFrame = requestAnimationFrame(() => {
                this.scrollableElement = this.getScrollableElement(
                  e.sensorEvent.target
                );
              })),
              !this.scrollableElement)
            )
              return;
            let t = e.sensorEvent,
              r = { x: 0, y: 0 };
            "ontouchstart" in window &&
              ((r.y =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
              (r.x =
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0)),
              (this.currentMousePosition = {
                clientX: t.clientX - r.x,
                clientY: t.clientY - r.y,
              }),
              (this.scrollAnimationFrame = requestAnimationFrame(this[c]));
          }
          [u]() {
            cancelAnimationFrame(this.scrollAnimationFrame),
              cancelAnimationFrame(this.findScrollableElementFrame),
              (this.scrollableElement = null),
              (this.scrollAnimationFrame = null),
              (this.findScrollableElementFrame = null),
              (this.currentMousePosition = null);
          }
          [c]() {
            if (!this.scrollableElement || !this.currentMousePosition) return;
            cancelAnimationFrame(this.scrollAnimationFrame);
            let { speed: e, sensitivity: t } = this.options,
              r = this.scrollableElement.getBoundingClientRect(),
              n = r.bottom > window.innerHeight,
              i = r.top < 0 || n,
              s = g(),
              o = this.scrollableElement,
              a = this.currentMousePosition.clientX,
              l = this.currentMousePosition.clientY;
            if (o === document.body || o === document.documentElement || i) {
              let { innerHeight: u, innerWidth: d } = window;
              l < t ? (s.scrollTop -= e) : u - l < t && (s.scrollTop += e),
                a < t ? (s.scrollLeft -= e) : d - a < t && (s.scrollLeft += e);
            } else {
              let { offsetHeight: h, offsetWidth: f } = o;
              r.top + h - l < t
                ? (o.scrollTop += e)
                : l - r.top < t && (o.scrollTop -= e),
                r.left + f - a < t
                  ? (o.scrollLeft += e)
                  : a - r.left < t && (o.scrollLeft -= e);
            }
            this.scrollAnimationFrame = requestAnimationFrame(this[c]);
          }
        }
        function g() {
          return document.scrollingElement || document.documentElement;
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(27),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MirrorDestroyEvent =
            t.MirrorMoveEvent =
            t.MirrorAttachedEvent =
            t.MirrorCreatedEvent =
            t.MirrorCreateEvent =
            t.MirrorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get dragEvent() {
            return this.data.dragEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        t.MirrorEvent = s;
        class o extends s {}
        (t.MirrorCreateEvent = o), (o.type = "mirror:create");
        class a extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorCreatedEvent = a), (a.type = "mirror:created");
        class l extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorAttachedEvent = l), (l.type = "mirror:attached");
        class u extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorMoveEvent = u), (u.type = "mirror:move"), (u.cancelable = !0);
        class c extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorDestroyEvent = c),
          (c.type = "mirror:destroy"),
          (c.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(29);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.getAppendableContainer =
            t.onScroll =
            t.onMirrorMove =
            t.onMirrorCreated =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(30);
        function a(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        let l = (t.onDragStart = Symbol("onDragStart")),
          u = (t.onDragMove = Symbol("onDragMove")),
          c = (t.onDragStop = Symbol("onDragStop")),
          d = (t.onMirrorCreated = Symbol("onMirrorCreated")),
          h = (t.onMirrorMove = Symbol("onMirrorMove")),
          g = (t.onScroll = Symbol("onScroll")),
          f = (t.getAppendableContainer = Symbol("getAppendableContainer")),
          p = (t.defaultOptions = {
            constrainDimensions: !1,
            xAxis: !0,
            yAxis: !0,
            cursorOffsetX: null,
            cursorOffsetY: null,
          });
        class v extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, p, this.getOptions())),
              (this.scrollOffset = { x: 0, y: 0 }),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              }),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[l])
              .on("drag:move", this[u])
              .on("drag:stop", this[c])
              .on("mirror:created", this[d])
              .on("mirror:move", this[h]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[l])
              .off("drag:move", this[u])
              .off("drag:stop", this[c])
              .off("mirror:created", this[d])
              .off("mirror:move", this[h]);
          }
          getOptions() {
            return this.draggable.options.mirror || {};
          }
          [l](e) {
            var t;
            if (e.canceled()) return;
            "ontouchstart" in window &&
              document.addEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              });
            let {
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
              } = e,
              a = new o.MirrorCreateEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
              });
            if (
              (this.draggable.trigger(a),
              (t = s),
              /^drag/.test(t.originalEvent.type) || a.canceled())
            )
              return;
            let l = this[f](r) || i;
            this.mirror = r.cloneNode(!0);
            let u = new o.MirrorCreatedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              }),
              c = new o.MirrorAttachedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(u),
              l.appendChild(this.mirror),
              this.draggable.trigger(c);
          }
          [u](e) {
            if (!this.mirror || e.canceled()) return;
            let {
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
              } = e,
              s = new o.MirrorMoveEvent({
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(s);
          }
          [c](e) {
            if (
              ("ontouchstart" in window &&
                document.removeEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = { x: 0, y: 0 }),
              (this.scrollOffset = { x: 0, y: 0 }),
              !this.mirror)
            )
              return;
            let { source: t, sourceContainer: r, sensorEvent: n } = e,
              i = new o.MirrorDestroyEvent({
                source: t,
                mirror: this.mirror,
                sourceContainer: r,
                sensorEvent: n,
                dragEvent: e,
              });
            this.draggable.trigger(i),
              i.canceled() || this.mirror.parentNode.removeChild(this.mirror);
          }
          [g]() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y,
            };
          }
          [d]({ mirror: e, source: t, sensorEvent: r }) {
            let n = {
              mirror: e,
              source: t,
              sensorEvent: r,
              mirrorClass: this.draggable.getClassNameFor("mirror"),
              scrollOffset: this.scrollOffset,
              options: this.options,
            };
            return Promise.resolve(n)
              .then(m)
              .then(b)
              .then(E)
              .then(y)
              .then(M({ initial: !0 }))
              .then($)
              .then((e) => {
                let { mirrorOffset: t, initialX: r, initialY: n } = e,
                  s = a(e, ["mirrorOffset", "initialX", "initialY"]);
                return (
                  (this.mirrorOffset = t),
                  (this.initialX = r),
                  (this.initialY = n),
                  i({ mirrorOffset: t, initialX: r, initialY: n }, s)
                );
              });
          }
          [h](e) {
            if (e.canceled()) return null;
            let t = {
              mirror: e.mirror,
              sensorEvent: e.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset,
            };
            return Promise.resolve(t).then(M({ raf: !0 }));
          }
          [f](e) {
            let t = this.options.appendTo;
            return "string" == typeof t
              ? document.querySelector(t)
              : t instanceof HTMLElement
              ? t
              : "function" == typeof t
              ? t(e)
              : e.parentNode;
          }
        }
        function m(e) {
          let { source: t } = e,
            r = a(e, ["source"]);
          return S((e) => {
            let n = t.getBoundingClientRect();
            e(i({ source: t, sourceRect: n }, r));
          });
        }
        function b(e) {
          let { sensorEvent: t, sourceRect: r, options: n } = e,
            s = a(e, ["sensorEvent", "sourceRect", "options"]);
          return S((e) => {
            let o =
                null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
              a =
                null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
            e(
              i(
                {
                  sensorEvent: t,
                  sourceRect: r,
                  mirrorOffset: { top: o, left: a },
                  options: n,
                },
                s
              )
            );
          });
        }
        function E(e) {
          let { mirror: t, source: r, options: n } = e,
            s = a(e, ["mirror", "source", "options"]);
          return S((e) => {
            let o, a;
            if (n.constrainDimensions) {
              let l = getComputedStyle(r);
              (o = l.getPropertyValue("height")),
                (a = l.getPropertyValue("width"));
            }
            (t.style.position = "fixed"),
              (t.style.pointerEvents = "none"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.margin = 0),
              n.constrainDimensions &&
                ((t.style.height = o), (t.style.width = a)),
              e(i({ mirror: t, source: r, options: n }, s));
          });
        }
        function y(e) {
          let { mirror: t, mirrorClass: r } = e,
            n = a(e, ["mirror", "mirrorClass"]);
          return S((e) => {
            t.classList.add(r), e(i({ mirror: t, mirrorClass: r }, n));
          });
        }
        function $(e) {
          let { mirror: t } = e,
            r = a(e, ["mirror"]);
          return S((e) => {
            t.removeAttribute("id"), delete t.id, e(i({ mirror: t }, r));
          });
        }
        function M({ withFrame: e = !1, initial: t = !1 } = {}) {
          return (r) => {
            let {
                mirror: n,
                sensorEvent: s,
                mirrorOffset: o,
                initialY: l,
                initialX: u,
                scrollOffset: c,
                options: d,
              } = r,
              h = a(r, [
                "mirror",
                "sensorEvent",
                "mirrorOffset",
                "initialY",
                "initialX",
                "scrollOffset",
                "options",
              ]);
            return S(
              (e) => {
                let r = i(
                  { mirror: n, sensorEvent: s, mirrorOffset: o, options: d },
                  h
                );
                if (o) {
                  let a = s.clientX - o.left - c.x,
                    g = s.clientY - o.top - c.y;
                  (d.xAxis && d.yAxis) || t
                    ? (n.style.transform = `translate3d(${a}px, ${g}px, 0)`)
                    : d.xAxis && !d.yAxis
                    ? (n.style.transform = `translate3d(${a}px, ${l}px, 0)`)
                    : d.yAxis &&
                      !d.xAxis &&
                      (n.style.transform = `translate3d(${u}px, ${g}px, 0)`),
                    t && ((r.initialX = a), (r.initialY = g));
                }
                e(r);
              },
              { frame: e }
            );
          };
        }
        function S(e, { raf: t = !1 } = {}) {
          return new Promise((r, n) => {
            t
              ? requestAnimationFrame(() => {
                  e(r, n);
                })
              : e(r, n);
          });
        }
        t.default = v;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(31),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy");
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, {}, this.getOptions())),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable
              .on("draggable:initialize", this[o])
              .on("draggable:destroy", this[a]);
          }
          detach() {
            this.draggable
              .off("draggable:initialize", this[o])
              .off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.focusable || {};
          }
          getElements() {
            return [
              ...this.draggable.containers,
              ...this.draggable.getDraggableElements(),
            ];
          }
          [o]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) => {
                var t;
                Boolean(
                  !(t = e).getAttribute("tabindex") && -1 === t.tabIndex
                ) && (u.push(t), (t.tabIndex = 0));
              });
            });
          }
          [a]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) =>
                (function (e) {
                  let t = u.indexOf(e);
                  -1 !== t && ((e.tabIndex = -1), u.splice(t, 1));
                })(e)
              );
            });
          }
        }
        t.default = l;
        let u = [];
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(33)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy"),
          l = Symbol("announceEvent"),
          u = Symbol("announceMessage"),
          c = (t.defaultOptions = { expire: 7e3 });
        class d extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, c, this.getOptions())),
              (this.originalTriggerMethod = this.draggable.trigger),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable.on("draggable:initialize", this[o]);
          }
          detach() {
            this.draggable.off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.announcements || {};
          }
          [l](e) {
            let t = this.options[e.type];
            t && "string" == typeof t && this[u](t),
              t && "function" == typeof t && this[u](t(e));
          }
          [u](e) {
            !(function (e, { expire: t }) {
              let r = document.createElement("div");
              (r.textContent = e),
                h.appendChild(r),
                setTimeout(() => {
                  h.removeChild(r);
                }, t);
            })(e, { expire: this.options.expire });
          }
          [o]() {
            this.draggable.trigger = (e) => {
              try {
                this[l](e);
              } finally {
                this.originalTriggerMethod.call(this.draggable, e);
              }
            };
          }
          [a]() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }
        t.default = d;
        let h = (function () {
          let e = document.createElement("div");
          return (
            e.setAttribute("id", "draggable-live-region"),
            e.setAttribute("aria-relevant", "additions"),
            e.setAttribute("aria-atomic", "true"),
            e.setAttribute("aria-live", "assertive"),
            e.setAttribute("role", "log"),
            (e.style.position = "fixed"),
            (e.style.width = "1px"),
            (e.style.height = "1px"),
            (e.style.top = "-1px"),
            (e.style.overflow = "hidden"),
            e
          );
        })();
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(h);
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(36),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DraggableDestroyEvent =
            t.DraggableInitializedEvent =
            t.DraggableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get draggable() {
            return this.data.draggable;
          }
        }
        (t.DraggableEvent = s), (s.type = "draggable");
        class o extends s {}
        (t.DraggableInitializedEvent = o), (o.type = "draggable:initialize");
        class a extends s {}
        (t.DraggableDestroyEvent = a), (a.type = "draggable:destroy");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragStopEvent =
            t.DragPressureEvent =
            t.DragOutContainerEvent =
            t.DragOverContainerEvent =
            t.DragOutEvent =
            t.DragOverEvent =
            t.DragMoveEvent =
            t.DragStartEvent =
            t.DragEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get mirror() {
            return this.data.mirror;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        (t.DragEvent = s), (s.type = "drag");
        class o extends s {}
        (t.DragStartEvent = o), (o.type = "drag:start"), (o.cancelable = !0);
        class a extends s {}
        (t.DragMoveEvent = a), (a.type = "drag:move");
        class l extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOverEvent = l), (l.type = "drag:over"), (l.cancelable = !0);
        class u extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOutEvent = u), (u.type = "drag:out");
        class c extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOverContainerEvent = c), (c.type = "drag:over:container");
        class d extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOutContainerEvent = d), (d.type = "drag:out:container");
        class h extends s {
          get pressure() {
            return this.data.pressure;
          }
        }
        (t.DragPressureEvent = h), (h.type = "drag:pressure");
        class g extends s {}
        (t.DragStopEvent = g), (g.type = "drag:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(8);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i = r(7);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
        var s = r(6);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            });
        });
        var o = r(5);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
        var a,
          l = (a = r(12)) && a.__esModule ? a : { default: a };
        t.default = l.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(40)) && n.__esModule ? n : { default: n },
          o = r(9);
        let a = Symbol("onDragStart"),
          l = Symbol("onDragOverContainer"),
          u = Symbol("onDragOver"),
          c = Symbol("onDragStop");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(
              e,
              i({}, t, {
                announcements: i(
                  {},
                  {
                    "sortable:sorted": function ({ dragEvent: e }) {
                      let t =
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "sortable element";
                      if (e.over) {
                        let r =
                          e.over.textContent.trim() ||
                          e.over.id ||
                          "sortable element";
                        return e.source.compareDocumentPosition(e.over) &
                          Node.DOCUMENT_POSITION_FOLLOWING
                          ? `Placed ${t} after ${r}`
                          : `Placed ${t} before ${r}`;
                      }
                      return `Placed ${t} into a different container`;
                    },
                  },
                  t.announcements || {}
                ),
              })
            ),
              (this.startIndex = null),
              (this.startContainer = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              this.on("drag:start", this[a])
                .on("drag:over:container", this[l])
                .on("drag:over", this[u])
                .on("drag:stop", this[c]);
          }
          destroy() {
            super.destroy(),
              this.off("drag:start", this[a])
                .off("drag:over:container", this[l])
                .off("drag:over", this[u])
                .off("drag:stop", this[c]);
          }
          index(e) {
            return this.getDraggableElementsForContainer(e.parentNode).indexOf(
              e
            );
          }
          [a](e) {
            (this.startContainer = e.source.parentNode),
              (this.startIndex = this.index(e.source));
            let t = new o.SortableStartEvent({
              dragEvent: e,
              startIndex: this.startIndex,
              startContainer: this.startContainer,
            });
            this.trigger(t), t.canceled() && e.cancel();
          }
          [l](e) {
            if (e.canceled()) return;
            let { source: t, over: r, overContainer: n } = e,
              i = this.index(t),
              s = new o.SortableSortEvent({
                dragEvent: e,
                currentIndex: i,
                source: t,
                over: r,
              });
            if ((this.trigger(s), s.canceled())) return;
            let a = g({
              source: t,
              over: r,
              overContainer: n,
              children: this.getDraggableElementsForContainer(n),
            });
            if (!a) return;
            let { oldContainer: l, newContainer: u } = a,
              c = this.index(e.source),
              d = new o.SortableSortedEvent({
                dragEvent: e,
                oldIndex: i,
                newIndex: c,
                oldContainer: l,
                newContainer: u,
              });
            this.trigger(d);
          }
          [u](e) {
            if (e.over === e.originalSource || e.over === e.source) return;
            let { source: t, over: r, overContainer: n } = e,
              i = this.index(t),
              s = new o.SortableSortEvent({
                dragEvent: e,
                currentIndex: i,
                source: t,
                over: r,
              });
            if ((this.trigger(s), s.canceled())) return;
            let a = g({
              source: t,
              over: r,
              overContainer: n,
              children: this.getDraggableElementsForContainer(n),
            });
            if (!a) return;
            let { oldContainer: l, newContainer: u } = a,
              c = this.index(t),
              d = new o.SortableSortedEvent({
                dragEvent: e,
                oldIndex: i,
                newIndex: c,
                oldContainer: l,
                newContainer: u,
              });
            this.trigger(d);
          }
          [c](e) {
            let t = new o.SortableStopEvent({
              dragEvent: e,
              oldIndex: this.startIndex,
              newIndex: this.index(e.source),
              oldContainer: this.startContainer,
              newContainer: e.source.parentNode,
            });
            this.trigger(t),
              (this.startIndex = null),
              (this.startContainer = null);
          }
        }
        function h(e) {
          return Array.prototype.indexOf.call(e.parentNode.children, e);
        }
        function g({ source: e, over: t, overContainer: r, children: n }) {
          let i = !n.length,
            s = e.parentNode !== r;
          return i
            ? (function (e, t) {
                let r = e.parentNode;
                return t.appendChild(e), { oldContainer: r, newContainer: t };
              })(e, r)
            : t && !s
            ? (function (e, t) {
                let r = h(e),
                  n = h(t);
                return (
                  r < n
                    ? e.parentNode.insertBefore(e, t.nextElementSibling)
                    : e.parentNode.insertBefore(e, t),
                  { oldContainer: e.parentNode, newContainer: e.parentNode }
                );
              })(e, t)
            : s
            ? (function (e, t, r) {
                let n = e.parentNode;
                return (
                  t ? t.parentNode.insertBefore(e, t) : r.appendChild(e),
                  { oldContainer: n, newContainer: e.parentNode }
                );
              })(e, t, r)
            : null;
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SortableStopEvent =
            t.SortableSortedEvent =
            t.SortableSortEvent =
            t.SortableStartEvent =
            t.SortableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.SortableEvent = s), (s.type = "sortable");
        class o extends s {
          get startIndex() {
            return this.data.startIndex;
          }
          get startContainer() {
            return this.data.startContainer;
          }
        }
        (t.SortableStartEvent = o),
          (o.type = "sortable:start"),
          (o.cancelable = !0);
        class a extends s {
          get currentIndex() {
            return this.data.currentIndex;
          }
          get over() {
            return this.data.oldIndex;
          }
          get overContainer() {
            return this.data.newIndex;
          }
        }
        (t.SortableSortEvent = a),
          (a.type = "sortable:sort"),
          (a.cancelable = !0);
        class l extends s {
          get oldIndex() {
            return this.data.oldIndex;
          }
          get newIndex() {
            return this.data.newIndex;
          }
          get oldContainer() {
            return this.data.oldContainer;
          }
          get newContainer() {
            return this.data.newContainer;
          }
        }
        (t.SortableSortedEvent = l), (l.type = "sortable:sorted");
        class u extends s {
          get oldIndex() {
            return this.data.oldIndex;
          }
          get newIndex() {
            return this.data.newIndex;
          }
          get oldContainer() {
            return this.data.oldContainer;
          }
          get newContainer() {
            return this.data.newContainer;
          }
        }
        (t.SortableStopEvent = u), (u.type = "sortable:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(9);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(41)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Droppable", [], t)
      : "object" == typeof exports
      ? (exports.Droppable = t())
      : (e.Droppable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 44))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(40);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(38);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(19);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(22)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(42)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(31)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(2);
        Object.defineProperty(t, "Sensor", {
          enumerable: !0,
          get: function () {
            return u(n).default;
          },
        });
        var i = r(21);
        Object.defineProperty(t, "MouseSensor", {
          enumerable: !0,
          get: function () {
            return u(i).default;
          },
        });
        var s = r(18);
        Object.defineProperty(t, "TouchSensor", {
          enumerable: !0,
          get: function () {
            return u(s).default;
          },
        });
        var o = r(16);
        Object.defineProperty(t, "DragSensor", {
          enumerable: !0,
          get: function () {
            return u(o).default;
          },
        });
        var a = r(14);
        Object.defineProperty(t, "ForceTouchSensor", {
          enumerable: !0,
          get: function () {
            return u(a).default;
          },
        });
        var l = r(1);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(33);
        Object.defineProperty(t, "Announcement", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        }),
          Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function () {
              return n.defaultOptions;
            },
          });
        var i = r(30);
        Object.defineProperty(t, "Focusable", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        });
        var s = r(28);
        Object.defineProperty(t, "Mirror", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        }),
          Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function () {
              return s.defaultOptions;
            },
          });
        var o = r(24);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "Scrollable", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(34);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(35);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(43);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor() {
              this.callbacks = {};
            }
            on(e, ...t) {
              return (
                this.callbacks[e] || (this.callbacks[e] = []),
                this.callbacks[e].push(...t),
                this
              );
            }
            off(e, t) {
              if (!this.callbacks[e]) return null;
              let r = this.callbacks[e].slice(0);
              for (let n = 0; n < r.length; n++)
                t === r[n] && this.callbacks[e].splice(n, 1);
              return this;
            }
            trigger(e) {
              if (!this.callbacks[e.type]) return null;
              let t = [...this.callbacks[e.type]],
                r = [];
              for (let n = t.length - 1; n >= 0; n--) {
                let i = t[n];
                try {
                  i(e);
                } catch (s) {
                  r.push(s);
                }
              }
              return (
                r.length &&
                  console.error(
                    `Draggable caught errors while triggering '${e.type}'`,
                    r
                  ),
                this
              );
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(10)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(0),
          o = r(6),
          a = (n = r(11)) && n.__esModule ? n : { default: n },
          l = r(5),
          u = r(7),
          c = r(8);
        let d = Symbol("onDragStart"),
          h = Symbol("onDragMove"),
          g = Symbol("onDragStop"),
          f = Symbol("onDragPressure"),
          p = (t.defaultOptions = {
            draggable: ".draggable-source",
            handle: null,
            delay: 100,
            placedTimeout: 800,
            plugins: [],
            sensors: [],
          });
        class v {
          constructor(e = [document.body], t = {}) {
            if (e instanceof NodeList || e instanceof Array)
              this.containers = [...e];
            else {
              if (!(e instanceof HTMLElement))
                throw Error(
                  "Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`"
                );
              this.containers = [e];
            }
            (this.options = i({}, p, t, {
              classes: i(
                {},
                {
                  "container:dragging": "draggable-container--is-dragging",
                  "source:dragging": "draggable-source--is-dragging",
                  "source:placed": "draggable-source--placed",
                  "container:placed": "draggable-container--placed",
                  "body:dragging": "draggable--is-dragging",
                  "draggable:over": "draggable--over",
                  "container:over": "draggable-container--over",
                  "source:original": "draggable--original",
                  mirror: "draggable-mirror",
                },
                t.classes || {}
              ),
              announcements: i(
                {},
                {
                  "drag:start": (e) =>
                    `Picked up ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                  "drag:stop": (e) =>
                    `Released ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                },
                t.announcements || {}
              ),
            })),
              (this.emitter = new a.default()),
              (this.dragging = !1),
              (this.plugins = []),
              (this.sensors = []),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this)),
              (this[f] = this[f].bind(this)),
              document.addEventListener("drag:start", this[d], !0),
              document.addEventListener("drag:move", this[h], !0),
              document.addEventListener("drag:stop", this[g], !0),
              document.addEventListener("drag:pressure", this[f], !0);
            let r = Object.values(v.Plugins).map((e) => e),
              n = [l.MouseSensor, l.TouchSensor];
            this.addPlugin(...r, ...this.options.plugins),
              this.addSensor(...n, ...this.options.sensors);
            let s = new u.DraggableInitializedEvent({ draggable: this });
            this.on("mirror:created", ({ mirror: e }) => (this.mirror = e)),
              this.on("mirror:destroy", () => (this.mirror = null)),
              this.trigger(s);
          }
          destroy() {
            document.removeEventListener("drag:start", this[d], !0),
              document.removeEventListener("drag:move", this[h], !0),
              document.removeEventListener("drag:stop", this[g], !0),
              document.removeEventListener("drag:pressure", this[f], !0);
            let e = new u.DraggableDestroyEvent({ draggable: this });
            this.trigger(e),
              this.removePlugin(...this.plugins.map((e) => e.constructor)),
              this.removeSensor(...this.sensors.map((e) => e.constructor));
          }
          addPlugin(...e) {
            let t = e.map((e) => new e(this));
            return (
              t.forEach((e) => e.attach()),
              (this.plugins = [...this.plugins, ...t]),
              this
            );
          }
          removePlugin(...e) {
            return (
              this.plugins
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.plugins = this.plugins.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addSensor(...e) {
            let t = e.map((e) => new e(this.containers, this.options));
            return (
              t.forEach((e) => e.attach()),
              (this.sensors = [...this.sensors, ...t]),
              this
            );
          }
          removeSensor(...e) {
            return (
              this.sensors
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.sensors = this.sensors.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addContainer(...e) {
            return (
              (this.containers = [...this.containers, ...e]),
              this.sensors.forEach((t) => t.addContainer(...e)),
              this
            );
          }
          removeContainer(...e) {
            return (
              (this.containers = this.containers.filter((t) => !e.includes(t))),
              this.sensors.forEach((t) => t.removeContainer(...e)),
              this
            );
          }
          on(e, ...t) {
            return this.emitter.on(e, ...t), this;
          }
          off(e, t) {
            return this.emitter.off(e, t), this;
          }
          trigger(e) {
            return this.emitter.trigger(e), this;
          }
          getClassNameFor(e) {
            return this.options.classes[e];
          }
          isDragging() {
            return Boolean(this.dragging);
          }
          getDraggableElements() {
            return this.containers.reduce(
              (e, t) => [...e, ...this.getDraggableElementsForContainer(t)],
              []
            );
          }
          getDraggableElementsForContainer(e) {
            return [...e.querySelectorAll(this.options.draggable)].filter(
              (e) => e !== this.originalSource && e !== this.mirror
            );
          }
          [d](e) {
            let t = m(e),
              { target: r, container: n } = t;
            if (!this.containers.includes(n)) return;
            if (
              (this.options.handle &&
                r &&
                !(0, s.closest)(r, this.options.handle)) ||
              ((this.originalSource = (0, s.closest)(
                r,
                this.options.draggable
              )),
              (this.sourceContainer = n),
              !this.originalSource)
            )
              return void t.cancel();
            this.lastPlacedSource &&
              this.lastPlacedContainer &&
              (clearTimeout(this.placedTimeoutID),
              this.lastPlacedSource.classList.remove(
                this.getClassNameFor("source:placed")
              ),
              this.lastPlacedContainer.classList.remove(
                this.getClassNameFor("container:placed")
              )),
              (this.source = this.originalSource.cloneNode(!0)),
              this.originalSource.parentNode.insertBefore(
                this.source,
                this.originalSource
              ),
              (this.originalSource.style.display = "none");
            let o = new c.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: n,
              sensorEvent: t,
            });
            if (
              (this.trigger(o), (this.dragging = !o.canceled()), o.canceled())
            )
              return (
                this.source.parentNode.removeChild(this.source),
                void (this.originalSource.style.display = null)
              );
            this.originalSource.classList.add(
              this.getClassNameFor("source:original")
            ),
              this.source.classList.add(
                this.getClassNameFor("source:dragging")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.add(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, "none"),
              requestAnimationFrame(() => {
                let t = m(e).clone({ target: this.source });
                this[h](i({}, e, { detail: t }));
              });
          }
          [h](e) {
            if (!this.dragging) return;
            let t = m(e),
              { container: r } = t,
              n = t.target,
              i = new c.DragMoveEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
              });
            this.trigger(i),
              i.canceled() && t.cancel(),
              (n = (0, s.closest)(n, this.options.draggable));
            let o = (0, s.closest)(t.target, this.containers),
              a = t.overContainer || o,
              l = this.currentOverContainer && a !== this.currentOverContainer,
              u = this.currentOver && n !== this.currentOver,
              d = a && this.currentOverContainer !== a,
              h = o && n && this.currentOver !== n;
            if (u) {
              let g = new c.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                over: this.currentOver,
              });
              this.currentOver.classList.remove(
                this.getClassNameFor("draggable:over")
              ),
                (this.currentOver = null),
                this.trigger(g);
            }
            if (l) {
              let f = new c.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: this.currentOverContainer,
              });
              this.currentOverContainer.classList.remove(
                this.getClassNameFor("container:over")
              ),
                (this.currentOverContainer = null),
                this.trigger(f);
            }
            if (d) {
              a.classList.add(this.getClassNameFor("container:over"));
              let p = new c.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
              });
              (this.currentOverContainer = a), this.trigger(p);
            }
            if (h) {
              n.classList.add(this.getClassNameFor("draggable:over"));
              let v = new c.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
                over: n,
              });
              (this.currentOver = n), this.trigger(v);
            }
          }
          [g](e) {
            if (!this.dragging) return;
            this.dragging = !1;
            let t = new c.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: e.sensorEvent,
              sourceContainer: this.sourceContainer,
            });
            this.trigger(t),
              this.source.parentNode.insertBefore(
                this.originalSource,
                this.source
              ),
              this.source.parentNode.removeChild(this.source),
              (this.originalSource.style.display = ""),
              this.source.classList.remove(
                this.getClassNameFor("source:dragging")
              ),
              this.originalSource.classList.remove(
                this.getClassNameFor("source:original")
              ),
              this.originalSource.classList.add(
                this.getClassNameFor("source:placed")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:placed")
              ),
              this.sourceContainer.classList.remove(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.remove(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, ""),
              this.currentOver &&
                this.currentOver.classList.remove(
                  this.getClassNameFor("draggable:over")
                ),
              this.currentOverContainer &&
                this.currentOverContainer.classList.remove(
                  this.getClassNameFor("container:over")
                ),
              (this.lastPlacedSource = this.originalSource),
              (this.lastPlacedContainer = this.sourceContainer),
              (this.placedTimeoutID = setTimeout(() => {
                this.lastPlacedSource &&
                  this.lastPlacedSource.classList.remove(
                    this.getClassNameFor("source:placed")
                  ),
                  this.lastPlacedContainer &&
                    this.lastPlacedContainer.classList.remove(
                      this.getClassNameFor("container:placed")
                    ),
                  (this.lastPlacedSource = null),
                  (this.lastPlacedContainer = null);
              }, this.options.placedTimeout)),
              (this.source = null),
              (this.originalSource = null),
              (this.currentOverContainer = null),
              (this.currentOver = null),
              (this.sourceContainer = null);
          }
          [f](e) {
            if (!this.dragging) return;
            let t = m(e),
              r =
                this.source ||
                (0, s.closest)(t.originalEvent.target, this.options.draggable),
              n = new c.DragPressureEvent({
                sensorEvent: t,
                source: r,
                pressure: t.pressure,
              });
            this.trigger(n);
          }
        }
        function m(e) {
          return e.detail;
        }
        function b(e, t) {
          (e.style.webkitUserSelect = t),
            (e.style.mozUserSelect = t),
            (e.style.msUserSelect = t),
            (e.style.oUserSelect = t),
            (e.style.userSelect = t);
        }
        (t.default = v),
          (v.Plugins = {
            Announcement: o.Announcement,
            Focusable: o.Focusable,
            Mirror: o.Mirror,
            Scrollable: o.Scrollable,
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(2)) && n.__esModule ? n : { default: n },
          s = r(1);
        let o = Symbol("onMouseForceWillBegin"),
          a = Symbol("onMouseForceDown"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseForceChange"),
          c = Symbol("onMouseMove"),
          d = Symbol("onMouseUp"),
          h = Symbol("onMouseForceGlobalChange");
        class g extends i.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mightDrag = !1),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            for (let e of this.containers)
              e.addEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.addEventListener("webkitmouseforcedown", this[a], !1),
                e.addEventListener("mousedown", this[l], !0),
                e.addEventListener("webkitmouseforcechanged", this[u], !1);
            document.addEventListener("mousemove", this[c]),
              document.addEventListener("mouseup", this[d]);
          }
          detach() {
            for (let e of this.containers)
              e.removeEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.removeEventListener("webkitmouseforcedown", this[a], !1),
                e.removeEventListener("mousedown", this[l], !0),
                e.removeEventListener("webkitmouseforcechanged", this[u], !1);
            document.removeEventListener("mousemove", this[c]),
              document.removeEventListener("mouseup", this[d]);
          }
          [o](e) {
            e.preventDefault(), (this.mightDrag = !0);
          }
          [a](e) {
            if (this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = e.currentTarget,
              n = new s.DragStartSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              (this.currentContainer = r),
              (this.dragging = !n.canceled()),
              (this.mightDrag = !1);
          }
          [d](e) {
            if (!this.dragging) return;
            let t = new s.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, t),
              (this.currentContainer = null),
              (this.dragging = !1),
              (this.mightDrag = !1);
          }
          [l](e) {
            this.mightDrag &&
              (e.stopPropagation(),
              e.stopImmediatePropagation(),
              e.preventDefault());
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new s.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [u](e) {
            if (this.dragging) return;
            let t = e.target,
              r = e.currentTarget,
              n = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n);
          }
          [h](e) {
            if (!this.dragging) return;
            let t = e.target,
              r = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
        }
        t.default = g;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(13)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(0),
          s = (n = r(2)) && n.__esModule ? n : { default: n },
          o = r(1);
        let a = Symbol("onMouseDown"),
          l = Symbol("onMouseUp"),
          u = Symbol("onDragStart"),
          c = Symbol("onDragOver"),
          d = Symbol("onDragEnd"),
          h = Symbol("onDrop"),
          g = Symbol("reset");
        class f extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDownTimeout = null),
              (this.draggableElement = null),
              (this.nativeDraggableElement = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[a], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[a], !0);
          }
          [u](e) {
            e.dataTransfer.setData("text", ""),
              (e.dataTransfer.effectAllowed = this.options.type);
            let t = document.elementFromPoint(e.clientX, e.clientY);
            if (
              ((this.currentContainer = (0, i.closest)(
                e.target,
                this.containers
              )),
              !this.currentContainer)
            )
              return;
            let r = new o.DragStartSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
            setTimeout(() => {
              this.trigger(this.currentContainer, r),
                r.canceled() ? (this.dragging = !1) : (this.dragging = !0);
            }, 0);
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              n.canceled() ||
                (e.preventDefault(),
                (e.dataTransfer.dropEffect = this.options.type));
          }
          [d](e) {
            if (!this.dragging) return;
            document.removeEventListener("mouseup", this[l], !0);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n), (this.dragging = !1), this[g]();
          }
          [h](e) {
            e.preventDefault();
          }
          [a](e) {
            if (e.target && (e.target.form || e.target.contenteditable)) return;
            let t = (0, i.closest)(e.target, (e) => e.draggable);
            t && ((t.draggable = !1), (this.nativeDraggableElement = t)),
              document.addEventListener("mouseup", this[l], !0),
              document.addEventListener("dragstart", this[u], !1),
              document.addEventListener("dragover", this[c], !1),
              document.addEventListener("dragend", this[d], !1),
              document.addEventListener("drop", this[h], !1);
            let r = (0, i.closest)(e.target, this.options.draggable);
            r &&
              (this.mouseDownTimeout = setTimeout(() => {
                (r.draggable = !0), (this.draggableElement = r);
              }, this.options.delay));
          }
          [l]() {
            this[g]();
          }
          [g]() {
            clearTimeout(this.mouseDownTimeout),
              document.removeEventListener("mouseup", this[l], !0),
              document.removeEventListener("dragstart", this[u], !1),
              document.removeEventListener("dragover", this[c], !1),
              document.removeEventListener("dragend", this[d], !1),
              document.removeEventListener("drop", this[h], !1),
              this.nativeDraggableElement &&
                ((this.nativeDraggableElement.draggable = !0),
                (this.nativeDraggableElement = null)),
              this.draggableElement &&
                ((this.draggableElement.draggable = !1),
                (this.draggableElement = null));
          }
        }
        t.default = f;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(15)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(0),
          s = (n = r(2)) && n.__esModule ? n : { default: n },
          o = r(1);
        let a = Symbol("onTouchStart"),
          l = Symbol("onTouchHold"),
          u = Symbol("onTouchEnd"),
          c = Symbol("onTouchMove"),
          d = !1;
        window.addEventListener(
          "touchmove",
          (e) => {
            d && e.preventDefault();
          },
          { passive: !1 }
        );
        class h extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.currentScrollableParent = null),
              (this.tapTimeout = null),
              (this.touchMoved = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("touchstart", this[a]);
          }
          detach() {
            document.removeEventListener("touchstart", this[a]);
          }
          [a](e) {
            let t = (0, i.closest)(e.target, this.containers);
            t &&
              (document.addEventListener("touchmove", this[c]),
              document.addEventListener("touchend", this[u]),
              document.addEventListener("touchcancel", this[u]),
              t.addEventListener("contextmenu", g),
              (this.currentContainer = t),
              (this.tapTimeout = setTimeout(
                this[l](e, t),
                this.options.delay
              )));
          }
          [l](e, t) {
            return () => {
              if (this.touchMoved) return;
              let r = e.touches[0] || e.changedTouches[0],
                n = e.target,
                i = new o.DragStartSensorEvent({
                  clientX: r.pageX,
                  clientY: r.pageY,
                  target: n,
                  container: t,
                  originalEvent: e,
                });
              this.trigger(t, i),
                (this.dragging = !i.canceled()),
                (d = this.dragging);
            };
          }
          [c](e) {
            if (((this.touchMoved = !0), !this.dragging)) return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              ),
              n = new o.DragMoveSensorEvent({
                clientX: t.pageX,
                clientY: t.pageY,
                target: r,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, n);
          }
          [u](e) {
            if (
              ((this.touchMoved = !1),
              (d = !1),
              document.removeEventListener("touchend", this[u]),
              document.removeEventListener("touchcancel", this[u]),
              document.removeEventListener("touchmove", this[c]),
              this.currentContainer &&
                this.currentContainer.removeEventListener("contextmenu", g),
              clearTimeout(this.tapTimeout),
              !this.dragging)
            )
              return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              );
            e.preventDefault();
            let n = new o.DragStopSensorEvent({
              clientX: t.pageX,
              clientY: t.pageY,
              target: r,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, n),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
        }
        function g(e) {
          e.preventDefault(), e.stopPropagation();
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(17)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragPressureSensorEvent =
            t.DragStopSensorEvent =
            t.DragMoveSensorEvent =
            t.DragStartSensorEvent =
            t.SensorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get originalEvent() {
            return this.data.originalEvent;
          }
          get clientX() {
            return this.data.clientX;
          }
          get clientY() {
            return this.data.clientY;
          }
          get target() {
            return this.data.target;
          }
          get container() {
            return this.data.container;
          }
          get pressure() {
            return this.data.pressure;
          }
        }
        t.SensorEvent = s;
        class o extends s {}
        (t.DragStartSensorEvent = o), (o.type = "drag:start");
        class a extends s {}
        (t.DragMoveSensorEvent = a), (a.type = "drag:move");
        class l extends s {}
        (t.DragStopSensorEvent = l), (l.type = "drag:stop");
        class u extends s {}
        (t.DragPressureSensorEvent = u), (u.type = "drag:pressure");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(0),
          s = (n = r(2)) && n.__esModule ? n : { default: n },
          o = r(1);
        let a = Symbol("onContextMenuWhileDragging"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseMove"),
          c = Symbol("onMouseUp");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDown = !1),
              (this.mouseDownTimeout = null),
              (this.openedContextMenu = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[l], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[l], !0);
          }
          [l](e) {
            if (0 !== e.button || e.ctrlKey || e.metaKey) return;
            document.addEventListener("mouseup", this[c]);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = (0, i.closest)(t, this.containers);
            r &&
              (document.addEventListener("dragstart", h),
              (this.mouseDown = !0),
              clearTimeout(this.mouseDownTimeout),
              (this.mouseDownTimeout = setTimeout(() => {
                if (!this.mouseDown) return;
                let n = new o.DragStartSensorEvent({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  target: t,
                  container: r,
                  originalEvent: e,
                });
                this.trigger(r, n),
                  (this.currentContainer = r),
                  (this.dragging = !n.canceled()),
                  this.dragging &&
                    (document.addEventListener("contextmenu", this[a]),
                    document.addEventListener("mousemove", this[u]));
              }, this.options.delay)));
          }
          [u](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [c](e) {
            if (
              ((this.mouseDown = Boolean(this.openedContextMenu)),
              this.openedContextMenu)
            )
              return void (this.openedContextMenu = !1);
            if (
              (document.removeEventListener("mouseup", this[c]),
              document.removeEventListener("dragstart", h),
              !this.dragging)
            )
              return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r),
              document.removeEventListener("contextmenu", this[a]),
              document.removeEventListener("mousemove", this[u]),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
          [a](e) {
            e.preventDefault(), (this.openedContextMenu = !0);
          }
        }
        function h(e) {
          e.preventDefault();
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(20)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        t.default = class {
          constructor(e = [], t = {}) {
            (this.containers = [...e]),
              (this.options = n({}, t)),
              (this.dragging = !1),
              (this.currentContainer = null);
          }
          attach() {
            return this;
          }
          detach() {
            return this;
          }
          addContainer(...e) {
            this.containers = [...this.containers, ...e];
          }
          removeContainer(...e) {
            this.containers = this.containers.filter((t) => !e.includes(t));
          }
          trigger(e, t) {
            let r = document.createEvent("Event");
            return (
              (r.detail = t),
              r.initEvent(t.type, !0, !0),
              e.dispatchEvent(r),
              (this.lastEvent = t),
              t
            );
          }
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.scroll =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = (t.onDragStart = Symbol("onDragStart")),
          l = (t.onDragMove = Symbol("onDragMove")),
          u = (t.onDragStop = Symbol("onDragStop")),
          c = (t.scroll = Symbol("scroll")),
          d = (t.defaultOptions = {
            speed: 6,
            sensitivity: 50,
            scrollableElements: [],
          });
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.currentMousePosition = null),
              (this.scrollAnimationFrame = null),
              (this.scrollableElement = null),
              (this.findScrollableElementFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[a])
              .on("drag:move", this[l])
              .on("drag:stop", this[u]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[a])
              .off("drag:move", this[l])
              .off("drag:stop", this[u]);
          }
          getOptions() {
            return this.draggable.options.scrollable || {};
          }
          getScrollableElement(e) {
            return this.hasDefinedScrollableElements()
              ? (0, o.closest)(e, this.options.scrollableElements) ||
                  document.documentElement
              : (function (e) {
                  if (!e) return g();
                  let t = getComputedStyle(e).getPropertyValue("position"),
                    r = "absolute" === t,
                    n = (0, o.closest)(e, (e) => {
                      var t;
                      return (
                        (!r ||
                          "static" !==
                            getComputedStyle((t = e)).getPropertyValue(
                              "position"
                            )) &&
                        (function (e) {
                          let t = getComputedStyle(e, null),
                            r =
                              t.getPropertyValue("overflow") +
                              t.getPropertyValue("overflow-y") +
                              t.getPropertyValue("overflow-x");
                          return /(auto|scroll)/.test(r);
                        })(e)
                      );
                    });
                  return "fixed" !== t && n ? n : g();
                })(e);
          }
          hasDefinedScrollableElements() {
            return Boolean(0 !== this.options.scrollableElements.length);
          }
          [a](e) {
            this.findScrollableElementFrame = requestAnimationFrame(() => {
              this.scrollableElement = this.getScrollableElement(e.source);
            });
          }
          [l](e) {
            if (
              ((this.findScrollableElementFrame = requestAnimationFrame(() => {
                this.scrollableElement = this.getScrollableElement(
                  e.sensorEvent.target
                );
              })),
              !this.scrollableElement)
            )
              return;
            let t = e.sensorEvent,
              r = { x: 0, y: 0 };
            "ontouchstart" in window &&
              ((r.y =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
              (r.x =
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0)),
              (this.currentMousePosition = {
                clientX: t.clientX - r.x,
                clientY: t.clientY - r.y,
              }),
              (this.scrollAnimationFrame = requestAnimationFrame(this[c]));
          }
          [u]() {
            cancelAnimationFrame(this.scrollAnimationFrame),
              cancelAnimationFrame(this.findScrollableElementFrame),
              (this.scrollableElement = null),
              (this.scrollAnimationFrame = null),
              (this.findScrollableElementFrame = null),
              (this.currentMousePosition = null);
          }
          [c]() {
            if (!this.scrollableElement || !this.currentMousePosition) return;
            cancelAnimationFrame(this.scrollAnimationFrame);
            let { speed: e, sensitivity: t } = this.options,
              r = this.scrollableElement.getBoundingClientRect(),
              n = r.bottom > window.innerHeight,
              i = r.top < 0 || n,
              s = g(),
              o = this.scrollableElement,
              a = this.currentMousePosition.clientX,
              l = this.currentMousePosition.clientY;
            if (o === document.body || o === document.documentElement || i) {
              let { innerHeight: u, innerWidth: d } = window;
              l < t ? (s.scrollTop -= e) : u - l < t && (s.scrollTop += e),
                a < t ? (s.scrollLeft -= e) : d - a < t && (s.scrollLeft += e);
            } else {
              let { offsetHeight: h, offsetWidth: f } = o;
              r.top + h - l < t
                ? (o.scrollTop += e)
                : l - r.top < t && (o.scrollTop -= e),
                r.left + f - a < t
                  ? (o.scrollLeft += e)
                  : a - r.left < t && (o.scrollLeft -= e);
            }
            this.scrollAnimationFrame = requestAnimationFrame(this[c]);
          }
        }
        function g() {
          return document.scrollingElement || document.documentElement;
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(23),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MirrorDestroyEvent =
            t.MirrorMoveEvent =
            t.MirrorAttachedEvent =
            t.MirrorCreatedEvent =
            t.MirrorCreateEvent =
            t.MirrorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get dragEvent() {
            return this.data.dragEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        t.MirrorEvent = s;
        class o extends s {}
        (t.MirrorCreateEvent = o), (o.type = "mirror:create");
        class a extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorCreatedEvent = a), (a.type = "mirror:created");
        class l extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorAttachedEvent = l), (l.type = "mirror:attached");
        class u extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorMoveEvent = u), (u.type = "mirror:move"), (u.cancelable = !0);
        class c extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorDestroyEvent = c),
          (c.type = "mirror:destroy"),
          (c.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(25);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.getAppendableContainer =
            t.onScroll =
            t.onMirrorMove =
            t.onMirrorCreated =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(26);
        function a(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        let l = (t.onDragStart = Symbol("onDragStart")),
          u = (t.onDragMove = Symbol("onDragMove")),
          c = (t.onDragStop = Symbol("onDragStop")),
          d = (t.onMirrorCreated = Symbol("onMirrorCreated")),
          h = (t.onMirrorMove = Symbol("onMirrorMove")),
          g = (t.onScroll = Symbol("onScroll")),
          f = (t.getAppendableContainer = Symbol("getAppendableContainer")),
          p = (t.defaultOptions = {
            constrainDimensions: !1,
            xAxis: !0,
            yAxis: !0,
            cursorOffsetX: null,
            cursorOffsetY: null,
          });
        class v extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, p, this.getOptions())),
              (this.scrollOffset = { x: 0, y: 0 }),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              }),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[l])
              .on("drag:move", this[u])
              .on("drag:stop", this[c])
              .on("mirror:created", this[d])
              .on("mirror:move", this[h]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[l])
              .off("drag:move", this[u])
              .off("drag:stop", this[c])
              .off("mirror:created", this[d])
              .off("mirror:move", this[h]);
          }
          getOptions() {
            return this.draggable.options.mirror || {};
          }
          [l](e) {
            var t;
            if (e.canceled()) return;
            "ontouchstart" in window &&
              document.addEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              });
            let {
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
              } = e,
              a = new o.MirrorCreateEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
              });
            if (
              (this.draggable.trigger(a),
              (t = s),
              /^drag/.test(t.originalEvent.type) || a.canceled())
            )
              return;
            let l = this[f](r) || i;
            this.mirror = r.cloneNode(!0);
            let u = new o.MirrorCreatedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              }),
              c = new o.MirrorAttachedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(u),
              l.appendChild(this.mirror),
              this.draggable.trigger(c);
          }
          [u](e) {
            if (!this.mirror || e.canceled()) return;
            let {
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
              } = e,
              s = new o.MirrorMoveEvent({
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(s);
          }
          [c](e) {
            if (
              ("ontouchstart" in window &&
                document.removeEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = { x: 0, y: 0 }),
              (this.scrollOffset = { x: 0, y: 0 }),
              !this.mirror)
            )
              return;
            let { source: t, sourceContainer: r, sensorEvent: n } = e,
              i = new o.MirrorDestroyEvent({
                source: t,
                mirror: this.mirror,
                sourceContainer: r,
                sensorEvent: n,
                dragEvent: e,
              });
            this.draggable.trigger(i),
              i.canceled() || this.mirror.parentNode.removeChild(this.mirror);
          }
          [g]() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y,
            };
          }
          [d]({ mirror: e, source: t, sensorEvent: r }) {
            let n = {
              mirror: e,
              source: t,
              sensorEvent: r,
              mirrorClass: this.draggable.getClassNameFor("mirror"),
              scrollOffset: this.scrollOffset,
              options: this.options,
            };
            return Promise.resolve(n)
              .then(m)
              .then(b)
              .then(E)
              .then(y)
              .then(M({ initial: !0 }))
              .then($)
              .then((e) => {
                let { mirrorOffset: t, initialX: r, initialY: n } = e,
                  s = a(e, ["mirrorOffset", "initialX", "initialY"]);
                return (
                  (this.mirrorOffset = t),
                  (this.initialX = r),
                  (this.initialY = n),
                  i({ mirrorOffset: t, initialX: r, initialY: n }, s)
                );
              });
          }
          [h](e) {
            if (e.canceled()) return null;
            let t = {
              mirror: e.mirror,
              sensorEvent: e.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset,
            };
            return Promise.resolve(t).then(M({ raf: !0 }));
          }
          [f](e) {
            let t = this.options.appendTo;
            return "string" == typeof t
              ? document.querySelector(t)
              : t instanceof HTMLElement
              ? t
              : "function" == typeof t
              ? t(e)
              : e.parentNode;
          }
        }
        function m(e) {
          let { source: t } = e,
            r = a(e, ["source"]);
          return S((e) => {
            let n = t.getBoundingClientRect();
            e(i({ source: t, sourceRect: n }, r));
          });
        }
        function b(e) {
          let { sensorEvent: t, sourceRect: r, options: n } = e,
            s = a(e, ["sensorEvent", "sourceRect", "options"]);
          return S((e) => {
            let o =
                null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
              a =
                null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
            e(
              i(
                {
                  sensorEvent: t,
                  sourceRect: r,
                  mirrorOffset: { top: o, left: a },
                  options: n,
                },
                s
              )
            );
          });
        }
        function E(e) {
          let { mirror: t, source: r, options: n } = e,
            s = a(e, ["mirror", "source", "options"]);
          return S((e) => {
            let o, a;
            if (n.constrainDimensions) {
              let l = getComputedStyle(r);
              (o = l.getPropertyValue("height")),
                (a = l.getPropertyValue("width"));
            }
            (t.style.position = "fixed"),
              (t.style.pointerEvents = "none"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.margin = 0),
              n.constrainDimensions &&
                ((t.style.height = o), (t.style.width = a)),
              e(i({ mirror: t, source: r, options: n }, s));
          });
        }
        function y(e) {
          let { mirror: t, mirrorClass: r } = e,
            n = a(e, ["mirror", "mirrorClass"]);
          return S((e) => {
            t.classList.add(r), e(i({ mirror: t, mirrorClass: r }, n));
          });
        }
        function $(e) {
          let { mirror: t } = e,
            r = a(e, ["mirror"]);
          return S((e) => {
            t.removeAttribute("id"), delete t.id, e(i({ mirror: t }, r));
          });
        }
        function M({ withFrame: e = !1, initial: t = !1 } = {}) {
          return (r) => {
            let {
                mirror: n,
                sensorEvent: s,
                mirrorOffset: o,
                initialY: l,
                initialX: u,
                scrollOffset: c,
                options: d,
              } = r,
              h = a(r, [
                "mirror",
                "sensorEvent",
                "mirrorOffset",
                "initialY",
                "initialX",
                "scrollOffset",
                "options",
              ]);
            return S(
              (e) => {
                let r = i(
                  { mirror: n, sensorEvent: s, mirrorOffset: o, options: d },
                  h
                );
                if (o) {
                  let a = s.clientX - o.left - c.x,
                    g = s.clientY - o.top - c.y;
                  (d.xAxis && d.yAxis) || t
                    ? (n.style.transform = `translate3d(${a}px, ${g}px, 0)`)
                    : d.xAxis && !d.yAxis
                    ? (n.style.transform = `translate3d(${a}px, ${l}px, 0)`)
                    : d.yAxis &&
                      !d.xAxis &&
                      (n.style.transform = `translate3d(${u}px, ${g}px, 0)`),
                    t && ((r.initialX = a), (r.initialY = g));
                }
                e(r);
              },
              { frame: e }
            );
          };
        }
        function S(e, { raf: t = !1 } = {}) {
          return new Promise((r, n) => {
            t
              ? requestAnimationFrame(() => {
                  e(r, n);
                })
              : e(r, n);
          });
        }
        t.default = v;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(27),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy");
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, {}, this.getOptions())),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable
              .on("draggable:initialize", this[o])
              .on("draggable:destroy", this[a]);
          }
          detach() {
            this.draggable
              .off("draggable:initialize", this[o])
              .off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.focusable || {};
          }
          getElements() {
            return [
              ...this.draggable.containers,
              ...this.draggable.getDraggableElements(),
            ];
          }
          [o]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) => {
                var t;
                Boolean(
                  !(t = e).getAttribute("tabindex") && -1 === t.tabIndex
                ) && (u.push(t), (t.tabIndex = 0));
              });
            });
          }
          [a]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) =>
                (function (e) {
                  let t = u.indexOf(e);
                  -1 !== t && ((e.tabIndex = -1), u.splice(t, 1));
                })(e)
              );
            });
          }
        }
        t.default = l;
        let u = [];
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(29)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy"),
          l = Symbol("announceEvent"),
          u = Symbol("announceMessage"),
          c = (t.defaultOptions = { expire: 7e3 });
        class d extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, c, this.getOptions())),
              (this.originalTriggerMethod = this.draggable.trigger),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable.on("draggable:initialize", this[o]);
          }
          detach() {
            this.draggable.off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.announcements || {};
          }
          [l](e) {
            let t = this.options[e.type];
            t && "string" == typeof t && this[u](t),
              t && "function" == typeof t && this[u](t(e));
          }
          [u](e) {
            !(function (e, { expire: t }) {
              let r = document.createElement("div");
              (r.textContent = e),
                h.appendChild(r),
                setTimeout(() => {
                  h.removeChild(r);
                }, t);
            })(e, { expire: this.options.expire });
          }
          [o]() {
            this.draggable.trigger = (e) => {
              try {
                this[l](e);
              } finally {
                this.originalTriggerMethod.call(this.draggable, e);
              }
            };
          }
          [a]() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }
        t.default = d;
        let h = (function () {
          let e = document.createElement("div");
          return (
            e.setAttribute("id", "draggable-live-region"),
            e.setAttribute("aria-relevant", "additions"),
            e.setAttribute("aria-atomic", "true"),
            e.setAttribute("aria-live", "assertive"),
            e.setAttribute("role", "log"),
            (e.style.position = "fixed"),
            (e.style.width = "1px"),
            (e.style.height = "1px"),
            (e.style.top = "-1px"),
            (e.style.overflow = "hidden"),
            e
          );
        })();
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(h);
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(32),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DraggableDestroyEvent =
            t.DraggableInitializedEvent =
            t.DraggableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get draggable() {
            return this.data.draggable;
          }
        }
        (t.DraggableEvent = s), (s.type = "draggable");
        class o extends s {}
        (t.DraggableInitializedEvent = o), (o.type = "draggable:initialize");
        class a extends s {}
        (t.DraggableDestroyEvent = a), (a.type = "draggable:destroy");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragStopEvent =
            t.DragPressureEvent =
            t.DragOutContainerEvent =
            t.DragOverContainerEvent =
            t.DragOutEvent =
            t.DragOverEvent =
            t.DragMoveEvent =
            t.DragStartEvent =
            t.DragEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get mirror() {
            return this.data.mirror;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        (t.DragEvent = s), (s.type = "drag");
        class o extends s {}
        (t.DragStartEvent = o), (o.type = "drag:start"), (o.cancelable = !0);
        class a extends s {}
        (t.DragMoveEvent = a), (a.type = "drag:move");
        class l extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOverEvent = l), (l.type = "drag:over"), (l.cancelable = !0);
        class u extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOutEvent = u), (u.type = "drag:out");
        class c extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOverContainerEvent = c), (c.type = "drag:over:container");
        class d extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOutContainerEvent = d), (d.type = "drag:out:container");
        class h extends s {
          get pressure() {
            return this.data.pressure;
          }
        }
        (t.DragPressureEvent = h), (h.type = "drag:pressure");
        class g extends s {}
        (t.DragStopEvent = g), (g.type = "drag:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(8);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i = r(7);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
        var s = r(6);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            });
        });
        var o = r(5);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
        var a,
          l = (a = r(12)) && a.__esModule ? a : { default: a };
        t.default = l.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(37)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(39)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(0),
          o = (n = r(36)) && n.__esModule ? n : { default: n },
          a = r(9);
        let l = Symbol("onDragStart"),
          u = Symbol("onDragMove"),
          c = Symbol("onDragStop"),
          d = Symbol("dropInDropZone"),
          h = Symbol("returnToOriginalDropzone"),
          g = Symbol("closestDropzone"),
          f = Symbol("getDropzones");
        class p extends o.default {
          constructor(e = [], t = {}) {
            super(
              e,
              i({}, { dropzone: ".draggable-droppable" }, t, {
                classes: i(
                  {},
                  {
                    "droppable:active": "draggable-dropzone--active",
                    "droppable:occupied": "draggable-dropzone--occupied",
                  },
                  t.classes || {}
                ),
                announcements: i(
                  {},
                  {
                    "droppable:dropped": function ({
                      dragEvent: e,
                      dropzone: t,
                    }) {
                      return `Dropped ${
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "draggable element"
                      } into ${
                        t.textContent.trim() || t.id || "droppable element"
                      }`;
                    },
                    "droppable:returned": function ({
                      dragEvent: e,
                      dropzone: t,
                    }) {
                      return `Returned ${
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "draggable element"
                      } from ${
                        t.textContent.trim() || t.id || "droppable element"
                      }`;
                    },
                  },
                  t.announcements || {}
                ),
              })
            ),
              (this.dropzones = null),
              (this.lastDropzone = null),
              (this.initialDropzone = null),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              this.on("drag:start", this[l])
                .on("drag:move", this[u])
                .on("drag:stop", this[c]);
          }
          destroy() {
            super.destroy(),
              this.off("drag:start", this[l])
                .off("drag:move", this[u])
                .off("drag:stop", this[c]);
          }
          [l](e) {
            if (e.canceled()) return;
            this.dropzones = [...this[f]()];
            let t = (0, s.closest)(e.sensorEvent.target, this.options.dropzone);
            if (!t) return void e.cancel();
            let r = new a.DroppableStartEvent({ dragEvent: e, dropzone: t });
            if ((this.trigger(r), r.canceled())) e.cancel();
            else
              for (let n of ((this.initialDropzone = t), this.dropzones))
                n.classList.contains(
                  this.getClassNameFor("droppable:occupied")
                ) || n.classList.add(this.getClassNameFor("droppable:active"));
          }
          [u](e) {
            if (e.canceled()) return;
            let t = this[g](e.sensorEvent.target);
            t &&
            !t.classList.contains(this.getClassNameFor("droppable:occupied")) &&
            this[d](e, t)
              ? (this.lastDropzone = t)
              : (t && t !== this.initialDropzone) ||
                !this.lastDropzone ||
                (this[h](e), (this.lastDropzone = null));
          }
          [c](e) {
            let t = new a.DroppableStopEvent({
              dragEvent: e,
              dropzone: this.lastDropzone || this.initialDropzone,
            });
            this.trigger(t);
            let r = this.getClassNameFor("droppable:occupied");
            for (let n of this.dropzones)
              n.classList.remove(this.getClassNameFor("droppable:active"));
            this.lastDropzone &&
              this.lastDropzone !== this.initialDropzone &&
              this.initialDropzone.classList.remove(r),
              (this.dropzones = null),
              (this.lastDropzone = null),
              (this.initialDropzone = null);
          }
          [d](e, t) {
            let r = new a.DroppableDroppedEvent({ dragEvent: e, dropzone: t });
            if ((this.trigger(r), r.canceled())) return !1;
            let n = this.getClassNameFor("droppable:occupied");
            return (
              this.lastDropzone && this.lastDropzone.classList.remove(n),
              t.appendChild(e.source),
              t.classList.add(n),
              !0
            );
          }
          [h](e) {
            let t = new a.DroppableReturnedEvent({
              dragEvent: e,
              dropzone: this.lastDropzone,
            });
            this.trigger(t),
              t.canceled() ||
                (this.initialDropzone.appendChild(e.source),
                this.lastDropzone.classList.remove(
                  this.getClassNameFor("droppable:occupied")
                ));
          }
          [g](e) {
            return this.dropzones ? (0, s.closest)(e, this.dropzones) : null;
          }
          [f]() {
            let e = this.options.dropzone;
            return "string" == typeof e
              ? document.querySelectorAll(e)
              : e instanceof NodeList || e instanceof Array
              ? e
              : "function" == typeof e
              ? e()
              : [];
          }
        }
        t.default = p;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DroppableStopEvent =
            t.DroppableReturnedEvent =
            t.DroppableDroppedEvent =
            t.DroppableStartEvent =
            t.DroppableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.DroppableEvent = s), (s.type = "droppable");
        class o extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableStartEvent = o),
          (o.type = "droppable:start"),
          (o.cancelable = !0);
        class a extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableDroppedEvent = a),
          (a.type = "droppable:dropped"),
          (a.cancelable = !0);
        class l extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableReturnedEvent = l),
          (l.type = "droppable:returned"),
          (l.cancelable = !0);
        class u extends s {
          get dropzone() {
            return this.data.dropzone;
          }
        }
        (t.DroppableStopEvent = u),
          (u.type = "droppable:stop"),
          (u.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(9);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(41)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Swappable", [], t)
      : "object" == typeof exports
      ? (exports.Swappable = t())
      : (e.Swappable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 44))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(19);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(22)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(26);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(24);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(42)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(35)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(1);
        Object.defineProperty(t, "Sensor", {
          enumerable: !0,
          get: function () {
            return u(n).default;
          },
        });
        var i = r(21);
        Object.defineProperty(t, "MouseSensor", {
          enumerable: !0,
          get: function () {
            return u(i).default;
          },
        });
        var s = r(18);
        Object.defineProperty(t, "TouchSensor", {
          enumerable: !0,
          get: function () {
            return u(s).default;
          },
        });
        var o = r(16);
        Object.defineProperty(t, "DragSensor", {
          enumerable: !0,
          get: function () {
            return u(o).default;
          },
        });
        var a = r(14);
        Object.defineProperty(t, "ForceTouchSensor", {
          enumerable: !0,
          get: function () {
            return u(a).default;
          },
        });
        var l = r(0);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(37);
        Object.defineProperty(t, "Announcement", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        }),
          Object.defineProperty(t, "defaultAnnouncementOptions", {
            enumerable: !0,
            get: function () {
              return n.defaultOptions;
            },
          });
        var i = r(34);
        Object.defineProperty(t, "Focusable", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        });
        var s = r(32);
        Object.defineProperty(t, "Mirror", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        }),
          Object.defineProperty(t, "defaultMirrorOptions", {
            enumerable: !0,
            get: function () {
              return s.defaultOptions;
            },
          });
        var o = r(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "Scrollable", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultScrollableOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(38);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(39);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(43);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor() {
              this.callbacks = {};
            }
            on(e, ...t) {
              return (
                this.callbacks[e] || (this.callbacks[e] = []),
                this.callbacks[e].push(...t),
                this
              );
            }
            off(e, t) {
              if (!this.callbacks[e]) return null;
              let r = this.callbacks[e].slice(0);
              for (let n = 0; n < r.length; n++)
                t === r[n] && this.callbacks[e].splice(n, 1);
              return this;
            }
            trigger(e) {
              if (!this.callbacks[e.type]) return null;
              let t = [...this.callbacks[e.type]],
                r = [];
              for (let n = t.length - 1; n >= 0; n--) {
                let i = t[n];
                try {
                  i(e);
                } catch (s) {
                  r.push(s);
                }
              }
              return (
                r.length &&
                  console.error(
                    `Draggable caught errors while triggering '${e.type}'`,
                    r
                  ),
                this
              );
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(10)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = r(2),
          o = r(6),
          a = (n = r(11)) && n.__esModule ? n : { default: n },
          l = r(5),
          u = r(7),
          c = r(8);
        let d = Symbol("onDragStart"),
          h = Symbol("onDragMove"),
          g = Symbol("onDragStop"),
          f = Symbol("onDragPressure"),
          p = (t.defaultOptions = {
            draggable: ".draggable-source",
            handle: null,
            delay: 100,
            placedTimeout: 800,
            plugins: [],
            sensors: [],
          });
        class v {
          constructor(e = [document.body], t = {}) {
            if (e instanceof NodeList || e instanceof Array)
              this.containers = [...e];
            else {
              if (!(e instanceof HTMLElement))
                throw Error(
                  "Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`"
                );
              this.containers = [e];
            }
            (this.options = i({}, p, t, {
              classes: i(
                {},
                {
                  "container:dragging": "draggable-container--is-dragging",
                  "source:dragging": "draggable-source--is-dragging",
                  "source:placed": "draggable-source--placed",
                  "container:placed": "draggable-container--placed",
                  "body:dragging": "draggable--is-dragging",
                  "draggable:over": "draggable--over",
                  "container:over": "draggable-container--over",
                  "source:original": "draggable--original",
                  mirror: "draggable-mirror",
                },
                t.classes || {}
              ),
              announcements: i(
                {},
                {
                  "drag:start": (e) =>
                    `Picked up ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                  "drag:stop": (e) =>
                    `Released ${
                      e.source.textContent.trim() ||
                      e.source.id ||
                      "draggable element"
                    }`,
                },
                t.announcements || {}
              ),
            })),
              (this.emitter = new a.default()),
              (this.dragging = !1),
              (this.plugins = []),
              (this.sensors = []),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this)),
              (this[f] = this[f].bind(this)),
              document.addEventListener("drag:start", this[d], !0),
              document.addEventListener("drag:move", this[h], !0),
              document.addEventListener("drag:stop", this[g], !0),
              document.addEventListener("drag:pressure", this[f], !0);
            let r = Object.values(v.Plugins).map((e) => e),
              n = [l.MouseSensor, l.TouchSensor];
            this.addPlugin(...r, ...this.options.plugins),
              this.addSensor(...n, ...this.options.sensors);
            let s = new u.DraggableInitializedEvent({ draggable: this });
            this.on("mirror:created", ({ mirror: e }) => (this.mirror = e)),
              this.on("mirror:destroy", () => (this.mirror = null)),
              this.trigger(s);
          }
          destroy() {
            document.removeEventListener("drag:start", this[d], !0),
              document.removeEventListener("drag:move", this[h], !0),
              document.removeEventListener("drag:stop", this[g], !0),
              document.removeEventListener("drag:pressure", this[f], !0);
            let e = new u.DraggableDestroyEvent({ draggable: this });
            this.trigger(e),
              this.removePlugin(...this.plugins.map((e) => e.constructor)),
              this.removeSensor(...this.sensors.map((e) => e.constructor));
          }
          addPlugin(...e) {
            let t = e.map((e) => new e(this));
            return (
              t.forEach((e) => e.attach()),
              (this.plugins = [...this.plugins, ...t]),
              this
            );
          }
          removePlugin(...e) {
            return (
              this.plugins
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.plugins = this.plugins.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addSensor(...e) {
            let t = e.map((e) => new e(this.containers, this.options));
            return (
              t.forEach((e) => e.attach()),
              (this.sensors = [...this.sensors, ...t]),
              this
            );
          }
          removeSensor(...e) {
            return (
              this.sensors
                .filter((t) => e.includes(t.constructor))
                .forEach((e) => e.detach()),
              (this.sensors = this.sensors.filter(
                (t) => !e.includes(t.constructor)
              )),
              this
            );
          }
          addContainer(...e) {
            return (
              (this.containers = [...this.containers, ...e]),
              this.sensors.forEach((t) => t.addContainer(...e)),
              this
            );
          }
          removeContainer(...e) {
            return (
              (this.containers = this.containers.filter((t) => !e.includes(t))),
              this.sensors.forEach((t) => t.removeContainer(...e)),
              this
            );
          }
          on(e, ...t) {
            return this.emitter.on(e, ...t), this;
          }
          off(e, t) {
            return this.emitter.off(e, t), this;
          }
          trigger(e) {
            return this.emitter.trigger(e), this;
          }
          getClassNameFor(e) {
            return this.options.classes[e];
          }
          isDragging() {
            return Boolean(this.dragging);
          }
          getDraggableElements() {
            return this.containers.reduce(
              (e, t) => [...e, ...this.getDraggableElementsForContainer(t)],
              []
            );
          }
          getDraggableElementsForContainer(e) {
            return [...e.querySelectorAll(this.options.draggable)].filter(
              (e) => e !== this.originalSource && e !== this.mirror
            );
          }
          [d](e) {
            let t = m(e),
              { target: r, container: n } = t;
            if (!this.containers.includes(n)) return;
            if (
              (this.options.handle &&
                r &&
                !(0, s.closest)(r, this.options.handle)) ||
              ((this.originalSource = (0, s.closest)(
                r,
                this.options.draggable
              )),
              (this.sourceContainer = n),
              !this.originalSource)
            )
              return void t.cancel();
            this.lastPlacedSource &&
              this.lastPlacedContainer &&
              (clearTimeout(this.placedTimeoutID),
              this.lastPlacedSource.classList.remove(
                this.getClassNameFor("source:placed")
              ),
              this.lastPlacedContainer.classList.remove(
                this.getClassNameFor("container:placed")
              )),
              (this.source = this.originalSource.cloneNode(!0)),
              this.originalSource.parentNode.insertBefore(
                this.source,
                this.originalSource
              ),
              (this.originalSource.style.display = "none");
            let o = new c.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: n,
              sensorEvent: t,
            });
            if (
              (this.trigger(o), (this.dragging = !o.canceled()), o.canceled())
            )
              return (
                this.source.parentNode.removeChild(this.source),
                void (this.originalSource.style.display = null)
              );
            this.originalSource.classList.add(
              this.getClassNameFor("source:original")
            ),
              this.source.classList.add(
                this.getClassNameFor("source:dragging")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.add(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, "none"),
              requestAnimationFrame(() => {
                let t = m(e).clone({ target: this.source });
                this[h](i({}, e, { detail: t }));
              });
          }
          [h](e) {
            if (!this.dragging) return;
            let t = m(e),
              { container: r } = t,
              n = t.target,
              i = new c.DragMoveEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
              });
            this.trigger(i),
              i.canceled() && t.cancel(),
              (n = (0, s.closest)(n, this.options.draggable));
            let o = (0, s.closest)(t.target, this.containers),
              a = t.overContainer || o,
              l = this.currentOverContainer && a !== this.currentOverContainer,
              u = this.currentOver && n !== this.currentOver,
              d = a && this.currentOverContainer !== a,
              h = o && n && this.currentOver !== n;
            if (u) {
              let g = new c.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                over: this.currentOver,
              });
              this.currentOver.classList.remove(
                this.getClassNameFor("draggable:over")
              ),
                (this.currentOver = null),
                this.trigger(g);
            }
            if (l) {
              let f = new c.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: this.currentOverContainer,
              });
              this.currentOverContainer.classList.remove(
                this.getClassNameFor("container:over")
              ),
                (this.currentOverContainer = null),
                this.trigger(f);
            }
            if (d) {
              a.classList.add(this.getClassNameFor("container:over"));
              let p = new c.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
              });
              (this.currentOverContainer = a), this.trigger(p);
            }
            if (h) {
              n.classList.add(this.getClassNameFor("draggable:over"));
              let v = new c.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: r,
                sensorEvent: t,
                overContainer: a,
                over: n,
              });
              (this.currentOver = n), this.trigger(v);
            }
          }
          [g](e) {
            if (!this.dragging) return;
            this.dragging = !1;
            let t = new c.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: e.sensorEvent,
              sourceContainer: this.sourceContainer,
            });
            this.trigger(t),
              this.source.parentNode.insertBefore(
                this.originalSource,
                this.source
              ),
              this.source.parentNode.removeChild(this.source),
              (this.originalSource.style.display = ""),
              this.source.classList.remove(
                this.getClassNameFor("source:dragging")
              ),
              this.originalSource.classList.remove(
                this.getClassNameFor("source:original")
              ),
              this.originalSource.classList.add(
                this.getClassNameFor("source:placed")
              ),
              this.sourceContainer.classList.add(
                this.getClassNameFor("container:placed")
              ),
              this.sourceContainer.classList.remove(
                this.getClassNameFor("container:dragging")
              ),
              document.body.classList.remove(
                this.getClassNameFor("body:dragging")
              ),
              b(document.body, ""),
              this.currentOver &&
                this.currentOver.classList.remove(
                  this.getClassNameFor("draggable:over")
                ),
              this.currentOverContainer &&
                this.currentOverContainer.classList.remove(
                  this.getClassNameFor("container:over")
                ),
              (this.lastPlacedSource = this.originalSource),
              (this.lastPlacedContainer = this.sourceContainer),
              (this.placedTimeoutID = setTimeout(() => {
                this.lastPlacedSource &&
                  this.lastPlacedSource.classList.remove(
                    this.getClassNameFor("source:placed")
                  ),
                  this.lastPlacedContainer &&
                    this.lastPlacedContainer.classList.remove(
                      this.getClassNameFor("container:placed")
                    ),
                  (this.lastPlacedSource = null),
                  (this.lastPlacedContainer = null);
              }, this.options.placedTimeout)),
              (this.source = null),
              (this.originalSource = null),
              (this.currentOverContainer = null),
              (this.currentOver = null),
              (this.sourceContainer = null);
          }
          [f](e) {
            if (!this.dragging) return;
            let t = m(e),
              r =
                this.source ||
                (0, s.closest)(t.originalEvent.target, this.options.draggable),
              n = new c.DragPressureEvent({
                sensorEvent: t,
                source: r,
                pressure: t.pressure,
              });
            this.trigger(n);
          }
        }
        function m(e) {
          return e.detail;
        }
        function b(e, t) {
          (e.style.webkitUserSelect = t),
            (e.style.mozUserSelect = t),
            (e.style.msUserSelect = t),
            (e.style.oUserSelect = t),
            (e.style.userSelect = t);
        }
        (t.default = v),
          (v.Plugins = {
            Announcement: o.Announcement,
            Focusable: o.Focusable,
            Mirror: o.Mirror,
            Scrollable: o.Scrollable,
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(1)) && n.__esModule ? n : { default: n },
          s = r(0);
        let o = Symbol("onMouseForceWillBegin"),
          a = Symbol("onMouseForceDown"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseForceChange"),
          c = Symbol("onMouseMove"),
          d = Symbol("onMouseUp"),
          h = Symbol("onMouseForceGlobalChange");
        class g extends i.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mightDrag = !1),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            for (let e of this.containers)
              e.addEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.addEventListener("webkitmouseforcedown", this[a], !1),
                e.addEventListener("mousedown", this[l], !0),
                e.addEventListener("webkitmouseforcechanged", this[u], !1);
            document.addEventListener("mousemove", this[c]),
              document.addEventListener("mouseup", this[d]);
          }
          detach() {
            for (let e of this.containers)
              e.removeEventListener("webkitmouseforcewillbegin", this[o], !1),
                e.removeEventListener("webkitmouseforcedown", this[a], !1),
                e.removeEventListener("mousedown", this[l], !0),
                e.removeEventListener("webkitmouseforcechanged", this[u], !1);
            document.removeEventListener("mousemove", this[c]),
              document.removeEventListener("mouseup", this[d]);
          }
          [o](e) {
            e.preventDefault(), (this.mightDrag = !0);
          }
          [a](e) {
            if (this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = e.currentTarget,
              n = new s.DragStartSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              (this.currentContainer = r),
              (this.dragging = !n.canceled()),
              (this.mightDrag = !1);
          }
          [d](e) {
            if (!this.dragging) return;
            let t = new s.DragStopSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, t),
              (this.currentContainer = null),
              (this.dragging = !1),
              (this.mightDrag = !1);
          }
          [l](e) {
            this.mightDrag &&
              (e.stopPropagation(),
              e.stopImmediatePropagation(),
              e.preventDefault());
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new s.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [u](e) {
            if (this.dragging) return;
            let t = e.target,
              r = e.currentTarget,
              n = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n);
          }
          [h](e) {
            if (!this.dragging) return;
            let t = e.target,
              r = new s.DragPressureSensorEvent({
                pressure: e.webkitForce,
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
        }
        t.default = g;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(13)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onMouseDown"),
          l = Symbol("onMouseUp"),
          u = Symbol("onDragStart"),
          c = Symbol("onDragOver"),
          d = Symbol("onDragEnd"),
          h = Symbol("onDrop"),
          g = Symbol("reset");
        class f extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDownTimeout = null),
              (this.draggableElement = null),
              (this.nativeDraggableElement = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[a], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[a], !0);
          }
          [u](e) {
            e.dataTransfer.setData("text", ""),
              (e.dataTransfer.effectAllowed = this.options.type);
            let t = document.elementFromPoint(e.clientX, e.clientY);
            if (
              ((this.currentContainer = (0, i.closest)(
                e.target,
                this.containers
              )),
              !this.currentContainer)
            )
              return;
            let r = new o.DragStartSensorEvent({
              clientX: e.clientX,
              clientY: e.clientY,
              target: t,
              container: this.currentContainer,
              originalEvent: e,
            });
            setTimeout(() => {
              this.trigger(this.currentContainer, r),
                r.canceled() ? (this.dragging = !1) : (this.dragging = !0);
            }, 0);
          }
          [c](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n),
              n.canceled() ||
                (e.preventDefault(),
                (e.dataTransfer.dropEffect = this.options.type));
          }
          [d](e) {
            if (!this.dragging) return;
            document.removeEventListener("mouseup", this[l], !0);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = this.currentContainer,
              n = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: r,
                originalEvent: e,
              });
            this.trigger(r, n), (this.dragging = !1), this[g]();
          }
          [h](e) {
            e.preventDefault();
          }
          [a](e) {
            if (e.target && (e.target.form || e.target.contenteditable)) return;
            let t = (0, i.closest)(e.target, (e) => e.draggable);
            t && ((t.draggable = !1), (this.nativeDraggableElement = t)),
              document.addEventListener("mouseup", this[l], !0),
              document.addEventListener("dragstart", this[u], !1),
              document.addEventListener("dragover", this[c], !1),
              document.addEventListener("dragend", this[d], !1),
              document.addEventListener("drop", this[h], !1);
            let r = (0, i.closest)(e.target, this.options.draggable);
            r &&
              (this.mouseDownTimeout = setTimeout(() => {
                (r.draggable = !0), (this.draggableElement = r);
              }, this.options.delay));
          }
          [l]() {
            this[g]();
          }
          [g]() {
            clearTimeout(this.mouseDownTimeout),
              document.removeEventListener("mouseup", this[l], !0),
              document.removeEventListener("dragstart", this[u], !1),
              document.removeEventListener("dragover", this[c], !1),
              document.removeEventListener("dragend", this[d], !1),
              document.removeEventListener("drop", this[h], !1),
              this.nativeDraggableElement &&
                ((this.nativeDraggableElement.draggable = !0),
                (this.nativeDraggableElement = null)),
              this.draggableElement &&
                ((this.draggableElement.draggable = !1),
                (this.draggableElement = null));
          }
        }
        t.default = f;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(15)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onTouchStart"),
          l = Symbol("onTouchHold"),
          u = Symbol("onTouchEnd"),
          c = Symbol("onTouchMove"),
          d = !1;
        window.addEventListener(
          "touchmove",
          (e) => {
            d && e.preventDefault();
          },
          { passive: !1 }
        );
        class h extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.currentScrollableParent = null),
              (this.tapTimeout = null),
              (this.touchMoved = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("touchstart", this[a]);
          }
          detach() {
            document.removeEventListener("touchstart", this[a]);
          }
          [a](e) {
            let t = (0, i.closest)(e.target, this.containers);
            t &&
              (document.addEventListener("touchmove", this[c]),
              document.addEventListener("touchend", this[u]),
              document.addEventListener("touchcancel", this[u]),
              t.addEventListener("contextmenu", g),
              (this.currentContainer = t),
              (this.tapTimeout = setTimeout(
                this[l](e, t),
                this.options.delay
              )));
          }
          [l](e, t) {
            return () => {
              if (this.touchMoved) return;
              let r = e.touches[0] || e.changedTouches[0],
                n = e.target,
                i = new o.DragStartSensorEvent({
                  clientX: r.pageX,
                  clientY: r.pageY,
                  target: n,
                  container: t,
                  originalEvent: e,
                });
              this.trigger(t, i),
                (this.dragging = !i.canceled()),
                (d = this.dragging);
            };
          }
          [c](e) {
            if (((this.touchMoved = !0), !this.dragging)) return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              ),
              n = new o.DragMoveSensorEvent({
                clientX: t.pageX,
                clientY: t.pageY,
                target: r,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, n);
          }
          [u](e) {
            if (
              ((this.touchMoved = !1),
              (d = !1),
              document.removeEventListener("touchend", this[u]),
              document.removeEventListener("touchcancel", this[u]),
              document.removeEventListener("touchmove", this[c]),
              this.currentContainer &&
                this.currentContainer.removeEventListener("contextmenu", g),
              clearTimeout(this.tapTimeout),
              !this.dragging)
            )
              return;
            let t = e.touches[0] || e.changedTouches[0],
              r = document.elementFromPoint(
                t.pageX - window.scrollX,
                t.pageY - window.scrollY
              );
            e.preventDefault();
            let n = new o.DragStopSensorEvent({
              clientX: t.pageX,
              clientY: t.pageY,
              target: r,
              container: this.currentContainer,
              originalEvent: e,
            });
            this.trigger(this.currentContainer, n),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
        }
        function g(e) {
          e.preventDefault(), e.stopPropagation();
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(17)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragPressureSensorEvent =
            t.DragStopSensorEvent =
            t.DragMoveSensorEvent =
            t.DragStartSensorEvent =
            t.SensorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get originalEvent() {
            return this.data.originalEvent;
          }
          get clientX() {
            return this.data.clientX;
          }
          get clientY() {
            return this.data.clientY;
          }
          get target() {
            return this.data.target;
          }
          get container() {
            return this.data.container;
          }
          get pressure() {
            return this.data.pressure;
          }
        }
        t.SensorEvent = s;
        class o extends s {}
        (t.DragStartSensorEvent = o), (o.type = "drag:start");
        class a extends s {}
        (t.DragMoveSensorEvent = a), (a.type = "drag:move");
        class l extends s {}
        (t.DragStopSensorEvent = l), (l.type = "drag:stop");
        class u extends s {}
        (t.DragPressureSensorEvent = u), (u.type = "drag:pressure");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = r(2),
          s = (n = r(1)) && n.__esModule ? n : { default: n },
          o = r(0);
        let a = Symbol("onContextMenuWhileDragging"),
          l = Symbol("onMouseDown"),
          u = Symbol("onMouseMove"),
          c = Symbol("onMouseUp");
        class d extends s.default {
          constructor(e = [], t = {}) {
            super(e, t),
              (this.mouseDown = !1),
              (this.mouseDownTimeout = null),
              (this.openedContextMenu = !1),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            document.addEventListener("mousedown", this[l], !0);
          }
          detach() {
            document.removeEventListener("mousedown", this[l], !0);
          }
          [l](e) {
            if (0 !== e.button || e.ctrlKey || e.metaKey) return;
            document.addEventListener("mouseup", this[c]);
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = (0, i.closest)(t, this.containers);
            r &&
              (document.addEventListener("dragstart", h),
              (this.mouseDown = !0),
              clearTimeout(this.mouseDownTimeout),
              (this.mouseDownTimeout = setTimeout(() => {
                if (!this.mouseDown) return;
                let n = new o.DragStartSensorEvent({
                  clientX: e.clientX,
                  clientY: e.clientY,
                  target: t,
                  container: r,
                  originalEvent: e,
                });
                this.trigger(r, n),
                  (this.currentContainer = r),
                  (this.dragging = !n.canceled()),
                  this.dragging &&
                    (document.addEventListener("contextmenu", this[a]),
                    document.addEventListener("mousemove", this[u]));
              }, this.options.delay)));
          }
          [u](e) {
            if (!this.dragging) return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragMoveSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r);
          }
          [c](e) {
            if (
              ((this.mouseDown = Boolean(this.openedContextMenu)),
              this.openedContextMenu)
            )
              return void (this.openedContextMenu = !1);
            if (
              (document.removeEventListener("mouseup", this[c]),
              document.removeEventListener("dragstart", h),
              !this.dragging)
            )
              return;
            let t = document.elementFromPoint(e.clientX, e.clientY),
              r = new o.DragStopSensorEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                target: t,
                container: this.currentContainer,
                originalEvent: e,
              });
            this.trigger(this.currentContainer, r),
              document.removeEventListener("contextmenu", this[a]),
              document.removeEventListener("mousemove", this[u]),
              (this.currentContainer = null),
              (this.dragging = !1);
          }
          [a](e) {
            e.preventDefault(), (this.openedContextMenu = !0);
          }
        }
        function h(e) {
          e.preventDefault();
        }
        t.default = d;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(20)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        t.default = class {
          constructor(e = [], t = {}) {
            (this.containers = [...e]),
              (this.options = n({}, t)),
              (this.dragging = !1),
              (this.currentContainer = null);
          }
          attach() {
            return this;
          }
          detach() {
            return this;
          }
          addContainer(...e) {
            this.containers = [...this.containers, ...e];
          }
          removeContainer(...e) {
            this.containers = this.containers.filter((t) => !e.includes(t));
          }
          trigger(e, t) {
            let r = document.createEvent("Event");
            return (
              (r.detail = t),
              r.initEvent(t.type, !0, !0),
              e.dispatchEvent(r),
              (this.lastEvent = t),
              t
            );
          }
        };
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(23)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(25)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.scroll =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(2);
        let a = (t.onDragStart = Symbol("onDragStart")),
          l = (t.onDragMove = Symbol("onDragMove")),
          u = (t.onDragStop = Symbol("onDragStop")),
          c = (t.scroll = Symbol("scroll")),
          d = (t.defaultOptions = {
            speed: 6,
            sensitivity: 50,
            scrollableElements: [],
          });
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.currentMousePosition = null),
              (this.scrollAnimationFrame = null),
              (this.scrollableElement = null),
              (this.findScrollableElementFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[a])
              .on("drag:move", this[l])
              .on("drag:stop", this[u]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[a])
              .off("drag:move", this[l])
              .off("drag:stop", this[u]);
          }
          getOptions() {
            return this.draggable.options.scrollable || {};
          }
          getScrollableElement(e) {
            return this.hasDefinedScrollableElements()
              ? (0, o.closest)(e, this.options.scrollableElements) ||
                  document.documentElement
              : (function (e) {
                  if (!e) return g();
                  let t = getComputedStyle(e).getPropertyValue("position"),
                    r = "absolute" === t,
                    n = (0, o.closest)(e, (e) => {
                      var t;
                      return (
                        (!r ||
                          "static" !==
                            getComputedStyle((t = e)).getPropertyValue(
                              "position"
                            )) &&
                        (function (e) {
                          let t = getComputedStyle(e, null),
                            r =
                              t.getPropertyValue("overflow") +
                              t.getPropertyValue("overflow-y") +
                              t.getPropertyValue("overflow-x");
                          return /(auto|scroll)/.test(r);
                        })(e)
                      );
                    });
                  return "fixed" !== t && n ? n : g();
                })(e);
          }
          hasDefinedScrollableElements() {
            return Boolean(0 !== this.options.scrollableElements.length);
          }
          [a](e) {
            this.findScrollableElementFrame = requestAnimationFrame(() => {
              this.scrollableElement = this.getScrollableElement(e.source);
            });
          }
          [l](e) {
            if (
              ((this.findScrollableElementFrame = requestAnimationFrame(() => {
                this.scrollableElement = this.getScrollableElement(
                  e.sensorEvent.target
                );
              })),
              !this.scrollableElement)
            )
              return;
            let t = e.sensorEvent,
              r = { x: 0, y: 0 };
            "ontouchstart" in window &&
              ((r.y =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0),
              (r.x =
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0)),
              (this.currentMousePosition = {
                clientX: t.clientX - r.x,
                clientY: t.clientY - r.y,
              }),
              (this.scrollAnimationFrame = requestAnimationFrame(this[c]));
          }
          [u]() {
            cancelAnimationFrame(this.scrollAnimationFrame),
              cancelAnimationFrame(this.findScrollableElementFrame),
              (this.scrollableElement = null),
              (this.scrollAnimationFrame = null),
              (this.findScrollableElementFrame = null),
              (this.currentMousePosition = null);
          }
          [c]() {
            if (!this.scrollableElement || !this.currentMousePosition) return;
            cancelAnimationFrame(this.scrollAnimationFrame);
            let { speed: e, sensitivity: t } = this.options,
              r = this.scrollableElement.getBoundingClientRect(),
              n = r.bottom > window.innerHeight,
              i = r.top < 0 || n,
              s = g(),
              o = this.scrollableElement,
              a = this.currentMousePosition.clientX,
              l = this.currentMousePosition.clientY;
            if (o === document.body || o === document.documentElement || i) {
              let { innerHeight: u, innerWidth: d } = window;
              l < t ? (s.scrollTop -= e) : u - l < t && (s.scrollTop += e),
                a < t ? (s.scrollLeft -= e) : d - a < t && (s.scrollLeft += e);
            } else {
              let { offsetHeight: h, offsetWidth: f } = o;
              r.top + h - l < t
                ? (o.scrollTop += e)
                : l - r.top < t && (o.scrollTop -= e),
                r.left + f - a < t
                  ? (o.scrollLeft += e)
                  : a - r.left < t && (o.scrollLeft -= e);
            }
            this.scrollAnimationFrame = requestAnimationFrame(this[c]);
          }
        }
        function g() {
          return document.scrollingElement || document.documentElement;
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(27),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MirrorDestroyEvent =
            t.MirrorMoveEvent =
            t.MirrorAttachedEvent =
            t.MirrorCreatedEvent =
            t.MirrorCreateEvent =
            t.MirrorEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get dragEvent() {
            return this.data.dragEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        t.MirrorEvent = s;
        class o extends s {}
        (t.MirrorCreateEvent = o), (o.type = "mirror:create");
        class a extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorCreatedEvent = a), (a.type = "mirror:created");
        class l extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorAttachedEvent = l), (l.type = "mirror:attached");
        class u extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorMoveEvent = u), (u.type = "mirror:move"), (u.cancelable = !0);
        class c extends s {
          get mirror() {
            return this.data.mirror;
          }
        }
        (t.MirrorDestroyEvent = c),
          (c.type = "mirror:destroy"),
          (c.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(29);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions =
            t.getAppendableContainer =
            t.onScroll =
            t.onMirrorMove =
            t.onMirrorCreated =
            t.onDragStop =
            t.onDragMove =
            t.onDragStart =
              void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n },
          o = r(30);
        function a(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        let l = (t.onDragStart = Symbol("onDragStart")),
          u = (t.onDragMove = Symbol("onDragMove")),
          c = (t.onDragStop = Symbol("onDragStop")),
          d = (t.onMirrorCreated = Symbol("onMirrorCreated")),
          h = (t.onMirrorMove = Symbol("onMirrorMove")),
          g = (t.onScroll = Symbol("onScroll")),
          f = (t.getAppendableContainer = Symbol("getAppendableContainer")),
          p = (t.defaultOptions = {
            constrainDimensions: !1,
            xAxis: !0,
            yAxis: !0,
            cursorOffsetX: null,
            cursorOffsetY: null,
          });
        class v extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, p, this.getOptions())),
              (this.scrollOffset = { x: 0, y: 0 }),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              }),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this)),
              (this[h] = this[h].bind(this)),
              (this[g] = this[g].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[l])
              .on("drag:move", this[u])
              .on("drag:stop", this[c])
              .on("mirror:created", this[d])
              .on("mirror:move", this[h]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[l])
              .off("drag:move", this[u])
              .off("drag:stop", this[c])
              .off("mirror:created", this[d])
              .off("mirror:move", this[h]);
          }
          getOptions() {
            return this.draggable.options.mirror || {};
          }
          [l](e) {
            var t;
            if (e.canceled()) return;
            "ontouchstart" in window &&
              document.addEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = {
                x: window.scrollX,
                y: window.scrollY,
              });
            let {
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
              } = e,
              a = new o.MirrorCreateEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
              });
            if (
              (this.draggable.trigger(a),
              (t = s),
              /^drag/.test(t.originalEvent.type) || a.canceled())
            )
              return;
            let l = this[f](r) || i;
            this.mirror = r.cloneNode(!0);
            let u = new o.MirrorCreatedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              }),
              c = new o.MirrorAttachedEvent({
                source: r,
                originalSource: n,
                sourceContainer: i,
                sensorEvent: s,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(u),
              l.appendChild(this.mirror),
              this.draggable.trigger(c);
          }
          [u](e) {
            if (!this.mirror || e.canceled()) return;
            let {
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
              } = e,
              s = new o.MirrorMoveEvent({
                source: t,
                originalSource: r,
                sourceContainer: n,
                sensorEvent: i,
                dragEvent: e,
                mirror: this.mirror,
              });
            this.draggable.trigger(s);
          }
          [c](e) {
            if (
              ("ontouchstart" in window &&
                document.removeEventListener("scroll", this[g], !0),
              (this.initialScrollOffset = { x: 0, y: 0 }),
              (this.scrollOffset = { x: 0, y: 0 }),
              !this.mirror)
            )
              return;
            let { source: t, sourceContainer: r, sensorEvent: n } = e,
              i = new o.MirrorDestroyEvent({
                source: t,
                mirror: this.mirror,
                sourceContainer: r,
                sensorEvent: n,
                dragEvent: e,
              });
            this.draggable.trigger(i),
              i.canceled() || this.mirror.parentNode.removeChild(this.mirror);
          }
          [g]() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y,
            };
          }
          [d]({ mirror: e, source: t, sensorEvent: r }) {
            let n = {
              mirror: e,
              source: t,
              sensorEvent: r,
              mirrorClass: this.draggable.getClassNameFor("mirror"),
              scrollOffset: this.scrollOffset,
              options: this.options,
            };
            return Promise.resolve(n)
              .then(m)
              .then(b)
              .then(E)
              .then(y)
              .then(M({ initial: !0 }))
              .then($)
              .then((e) => {
                let { mirrorOffset: t, initialX: r, initialY: n } = e,
                  s = a(e, ["mirrorOffset", "initialX", "initialY"]);
                return (
                  (this.mirrorOffset = t),
                  (this.initialX = r),
                  (this.initialY = n),
                  i({ mirrorOffset: t, initialX: r, initialY: n }, s)
                );
              });
          }
          [h](e) {
            if (e.canceled()) return null;
            let t = {
              mirror: e.mirror,
              sensorEvent: e.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset,
            };
            return Promise.resolve(t).then(M({ raf: !0 }));
          }
          [f](e) {
            let t = this.options.appendTo;
            return "string" == typeof t
              ? document.querySelector(t)
              : t instanceof HTMLElement
              ? t
              : "function" == typeof t
              ? t(e)
              : e.parentNode;
          }
        }
        function m(e) {
          let { source: t } = e,
            r = a(e, ["source"]);
          return S((e) => {
            let n = t.getBoundingClientRect();
            e(i({ source: t, sourceRect: n }, r));
          });
        }
        function b(e) {
          let { sensorEvent: t, sourceRect: r, options: n } = e,
            s = a(e, ["sensorEvent", "sourceRect", "options"]);
          return S((e) => {
            let o =
                null === n.cursorOffsetY ? t.clientY - r.top : n.cursorOffsetY,
              a =
                null === n.cursorOffsetX ? t.clientX - r.left : n.cursorOffsetX;
            e(
              i(
                {
                  sensorEvent: t,
                  sourceRect: r,
                  mirrorOffset: { top: o, left: a },
                  options: n,
                },
                s
              )
            );
          });
        }
        function E(e) {
          let { mirror: t, source: r, options: n } = e,
            s = a(e, ["mirror", "source", "options"]);
          return S((e) => {
            let o, a;
            if (n.constrainDimensions) {
              let l = getComputedStyle(r);
              (o = l.getPropertyValue("height")),
                (a = l.getPropertyValue("width"));
            }
            (t.style.position = "fixed"),
              (t.style.pointerEvents = "none"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.margin = 0),
              n.constrainDimensions &&
                ((t.style.height = o), (t.style.width = a)),
              e(i({ mirror: t, source: r, options: n }, s));
          });
        }
        function y(e) {
          let { mirror: t, mirrorClass: r } = e,
            n = a(e, ["mirror", "mirrorClass"]);
          return S((e) => {
            t.classList.add(r), e(i({ mirror: t, mirrorClass: r }, n));
          });
        }
        function $(e) {
          let { mirror: t } = e,
            r = a(e, ["mirror"]);
          return S((e) => {
            t.removeAttribute("id"), delete t.id, e(i({ mirror: t }, r));
          });
        }
        function M({ withFrame: e = !1, initial: t = !1 } = {}) {
          return (r) => {
            let {
                mirror: n,
                sensorEvent: s,
                mirrorOffset: o,
                initialY: l,
                initialX: u,
                scrollOffset: c,
                options: d,
              } = r,
              h = a(r, [
                "mirror",
                "sensorEvent",
                "mirrorOffset",
                "initialY",
                "initialX",
                "scrollOffset",
                "options",
              ]);
            return S(
              (e) => {
                let r = i(
                  { mirror: n, sensorEvent: s, mirrorOffset: o, options: d },
                  h
                );
                if (o) {
                  let a = s.clientX - o.left - c.x,
                    g = s.clientY - o.top - c.y;
                  (d.xAxis && d.yAxis) || t
                    ? (n.style.transform = `translate3d(${a}px, ${g}px, 0)`)
                    : d.xAxis && !d.yAxis
                    ? (n.style.transform = `translate3d(${a}px, ${l}px, 0)`)
                    : d.yAxis &&
                      !d.xAxis &&
                      (n.style.transform = `translate3d(${u}px, ${g}px, 0)`),
                    t && ((r.initialX = a), (r.initialY = g));
                }
                e(r);
              },
              { frame: e }
            );
          };
        }
        function S(e, { raf: t = !1 } = {}) {
          return new Promise((r, n) => {
            t
              ? requestAnimationFrame(() => {
                  e(r, n);
                })
              : e(r, n);
          });
        }
        t.default = v;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(31),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy");
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, {}, this.getOptions())),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable
              .on("draggable:initialize", this[o])
              .on("draggable:destroy", this[a]);
          }
          detach() {
            this.draggable
              .off("draggable:initialize", this[o])
              .off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.focusable || {};
          }
          getElements() {
            return [
              ...this.draggable.containers,
              ...this.draggable.getDraggableElements(),
            ];
          }
          [o]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) => {
                var t;
                Boolean(
                  !(t = e).getAttribute("tabindex") && -1 === t.tabIndex
                ) && (u.push(t), (t.tabIndex = 0));
              });
            });
          }
          [a]() {
            requestAnimationFrame(() => {
              this.getElements().forEach((e) =>
                (function (e) {
                  let t = u.indexOf(e);
                  -1 !== t && ((e.tabIndex = -1), u.splice(t, 1));
                })(e)
              );
            });
          }
        }
        t.default = l;
        let u = [];
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(33)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(4)) && n.__esModule ? n : { default: n };
        let o = Symbol("onInitialize"),
          a = Symbol("onDestroy"),
          l = Symbol("announceEvent"),
          u = Symbol("announceMessage"),
          c = (t.defaultOptions = { expire: 7e3 });
        class d extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, c, this.getOptions())),
              (this.originalTriggerMethod = this.draggable.trigger),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this));
          }
          attach() {
            this.draggable.on("draggable:initialize", this[o]);
          }
          detach() {
            this.draggable.off("draggable:destroy", this[a]);
          }
          getOptions() {
            return this.draggable.options.announcements || {};
          }
          [l](e) {
            let t = this.options[e.type];
            t && "string" == typeof t && this[u](t),
              t && "function" == typeof t && this[u](t(e));
          }
          [u](e) {
            !(function (e, { expire: t }) {
              let r = document.createElement("div");
              (r.textContent = e),
                h.appendChild(r),
                setTimeout(() => {
                  h.removeChild(r);
                }, t);
            })(e, { expire: this.options.expire });
          }
          [o]() {
            this.draggable.trigger = (e) => {
              try {
                this[l](e);
              } finally {
                this.originalTriggerMethod.call(this.draggable, e);
              }
            };
          }
          [a]() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }
        t.default = d;
        let h = (function () {
          let e = document.createElement("div");
          return (
            e.setAttribute("id", "draggable-live-region"),
            e.setAttribute("aria-relevant", "additions"),
            e.setAttribute("aria-atomic", "true"),
            e.setAttribute("aria-live", "assertive"),
            e.setAttribute("role", "log"),
            (e.style.position = "fixed"),
            (e.style.width = "1px"),
            (e.style.height = "1px"),
            (e.style.top = "-1px"),
            (e.style.overflow = "hidden"),
            e
          );
        })();
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(h);
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(36),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DraggableDestroyEvent =
            t.DraggableInitializedEvent =
            t.DraggableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get draggable() {
            return this.data.draggable;
          }
        }
        (t.DraggableEvent = s), (s.type = "draggable");
        class o extends s {}
        (t.DraggableInitializedEvent = o), (o.type = "draggable:initialize");
        class a extends s {}
        (t.DraggableDestroyEvent = a), (a.type = "draggable:destroy");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragStopEvent =
            t.DragPressureEvent =
            t.DragOutContainerEvent =
            t.DragOverContainerEvent =
            t.DragOutEvent =
            t.DragOverEvent =
            t.DragMoveEvent =
            t.DragStartEvent =
            t.DragEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get source() {
            return this.data.source;
          }
          get originalSource() {
            return this.data.originalSource;
          }
          get mirror() {
            return this.data.mirror;
          }
          get sourceContainer() {
            return this.data.sourceContainer;
          }
          get sensorEvent() {
            return this.data.sensorEvent;
          }
          get originalEvent() {
            return this.sensorEvent ? this.sensorEvent.originalEvent : null;
          }
        }
        (t.DragEvent = s), (s.type = "drag");
        class o extends s {}
        (t.DragStartEvent = o), (o.type = "drag:start"), (o.cancelable = !0);
        class a extends s {}
        (t.DragMoveEvent = a), (a.type = "drag:move");
        class l extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOverEvent = l), (l.type = "drag:over"), (l.cancelable = !0);
        class u extends s {
          get overContainer() {
            return this.data.overContainer;
          }
          get over() {
            return this.data.over;
          }
        }
        (t.DragOutEvent = u), (u.type = "drag:out");
        class c extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOverContainerEvent = c), (c.type = "drag:over:container");
        class d extends s {
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.DragOutContainerEvent = d), (d.type = "drag:out:container");
        class h extends s {
          get pressure() {
            return this.data.pressure;
          }
        }
        (t.DragPressureEvent = h), (h.type = "drag:pressure");
        class g extends s {}
        (t.DragStopEvent = g), (g.type = "drag:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(8);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i = r(7);
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
        var s = r(6);
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            });
        });
        var o = r(5);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
        var a,
          l = (a = r(12)) && a.__esModule ? a : { default: a };
        t.default = l.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(40)) && n.__esModule ? n : { default: n },
          o = r(9);
        let a = Symbol("onDragStart"),
          l = Symbol("onDragOver"),
          u = Symbol("onDragStop");
        class c extends s.default {
          constructor(e = [], t = {}) {
            super(
              e,
              i({}, t, {
                announcements: i(
                  {},
                  {
                    "swappabled:swapped": function ({
                      dragEvent: e,
                      swappedElement: t,
                    }) {
                      return `Swapped ${
                        e.source.textContent.trim() ||
                        e.source.id ||
                        "swappable element"
                      } with ${
                        t.textContent.trim() || t.id || "swappable element"
                      }`;
                    },
                  },
                  t.announcements || {}
                ),
              })
            ),
              (this.lastOver = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              this.on("drag:start", this[a])
                .on("drag:over", this[l])
                .on("drag:stop", this[u]);
          }
          destroy() {
            super.destroy(),
              this.off("drag:start", this._onDragStart)
                .off("drag:over", this._onDragOver)
                .off("drag:stop", this._onDragStop);
          }
          [a](e) {
            let t = new o.SwappableStartEvent({ dragEvent: e });
            this.trigger(t), t.canceled() && e.cancel();
          }
          [l](e) {
            if (
              e.over === e.originalSource ||
              e.over === e.source ||
              e.canceled()
            )
              return;
            let t = new o.SwappableSwapEvent({
              dragEvent: e,
              over: e.over,
              overContainer: e.overContainer,
            });
            if ((this.trigger(t), t.canceled())) return;
            this.lastOver &&
              this.lastOver !== e.over &&
              d(this.lastOver, e.source),
              this.lastOver === e.over
                ? (this.lastOver = null)
                : (this.lastOver = e.over),
              d(e.source, e.over);
            let r = new o.SwappableSwappedEvent({
              dragEvent: e,
              swappedElement: e.over,
            });
            this.trigger(r);
          }
          [u](e) {
            let t = new o.SwappableStopEvent({ dragEvent: e });
            this.trigger(t), (this.lastOver = null);
          }
        }
        function d(e, t) {
          let r = t.parentNode,
            n = e.parentNode;
          !(function (e) {
            let t = document.createElement("div");
            e(t), t.parentNode.removeChild(t);
          })((i) => {
            n.insertBefore(i, e), r.insertBefore(e, t), n.insertBefore(t, i);
          });
        }
        t.default = c;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SwappableStopEvent =
            t.SwappableSwappedEvent =
            t.SwappableSwapEvent =
            t.SwappableStartEvent =
            t.SwappableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.SwappableEvent = s), (s.type = "swappable");
        class o extends s {}
        (t.SwappableStartEvent = o),
          (o.type = "swappable:start"),
          (o.cancelable = !0);
        class a extends s {
          get over() {
            return this.data.over;
          }
          get overContainer() {
            return this.data.overContainer;
          }
        }
        (t.SwappableSwapEvent = a),
          (a.type = "swappable:swap"),
          (a.cancelable = !0);
        class l extends s {
          get swappedElement() {
            return this.data.swappedElement;
          }
        }
        (t.SwappableSwappedEvent = l), (l.type = "swappable:swapped");
        class u extends s {}
        (t.SwappableStopEvent = u), (u.type = "swappable:stop");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(9);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(41)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plugins", [], t)
      : "object" == typeof exports
      ? (exports.Plugins = t())
      : (e.Plugins = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 21))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(16)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(8);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(15);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(13);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(18)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(19);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(0)) && n.__esModule ? n : { default: n };
        let o = Symbol("onSortableSorted"),
          a = (t.defaultOptions = {
            duration: 150,
            easingFunction: "ease-in-out",
            horizontal: !1,
          });
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, a, this.getOptions())),
              (this.lastAnimationFrame = null),
              (this[o] = this[o].bind(this));
          }
          attach() {
            this.draggable.on("sortable:sorted", this[o]);
          }
          detach() {
            this.draggable.off("sortable:sorted", this[o]);
          }
          getOptions() {
            return this.draggable.options.swapAnimation || {};
          }
          [o]({ oldIndex: e, newIndex: t, dragEvent: r }) {
            let { source: n, over: i } = r;
            cancelAnimationFrame(this.lastAnimationFrame),
              (this.lastAnimationFrame = requestAnimationFrame(() => {
                e >= t ? u(n, i, this.options) : u(i, n, this.options);
              }));
          }
        }
        function u(e, t, { duration: r, easingFunction: n, horizontal: i }) {
          for (let s of [e, t]) s.style.pointerEvents = "none";
          if (i) {
            let o = e.offsetWidth;
            (e.style.transform = `translate3d(${o}px, 0, 0)`),
              (t.style.transform = `translate3d(-${o}px, 0, 0)`);
          } else {
            let a = e.offsetHeight;
            (e.style.transform = `translate3d(0, ${a}px, 0)`),
              (t.style.transform = `translate3d(0, -${a}px, 0)`);
          }
          requestAnimationFrame(() => {
            for (let i of [e, t])
              i.addEventListener("transitionend", c),
                (i.style.transition = `transform ${r}ms ${n}`),
                (i.style.transform = "");
          });
        }
        function c(e) {
          (e.target.style.transition = ""),
            (e.target.style.pointerEvents = ""),
            e.target.removeEventListener("transitionend", c);
        }
        t.default = l;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(5),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(0)) && n.__esModule ? n : { default: n },
          s = r(1);
        let o = Symbol("onDragStart"),
          a = Symbol("onDragStop"),
          l = Symbol("onDragOver"),
          u = Symbol("onDragOut"),
          c = Symbol("onMirrorCreated"),
          d = Symbol("onMirrorDestroy");
        class h extends i.default {
          constructor(e) {
            super(e),
              (this.firstSource = null),
              (this.mirror = null),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[o])
              .on("drag:stop", this[a])
              .on("drag:over", this[l])
              .on("drag:out", this[u])
              .on("droppable:over", this[l])
              .on("droppable:out", this[u])
              .on("mirror:created", this[c])
              .on("mirror:destroy", this[d]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[o])
              .off("drag:stop", this[a])
              .off("drag:over", this[l])
              .off("drag:out", this[u])
              .off("droppable:over", this[l])
              .off("droppable:out", this[u])
              .off("mirror:created", this[c])
              .off("mirror:destroy", this[d]);
          }
          [o](e) {
            e.canceled() || (this.firstSource = e.source);
          }
          [a]() {
            this.firstSource = null;
          }
          [l](e) {
            if (e.canceled()) return;
            let t = e.source || e.dragEvent.source;
            if (t === this.firstSource) return void (this.firstSource = null);
            let r = new s.SnapInEvent({
              dragEvent: e,
              snappable: e.over || e.droppable,
            });
            this.draggable.trigger(r),
              r.canceled() ||
                (this.mirror && (this.mirror.style.display = "none"),
                t.classList.remove(
                  this.draggable.getClassNameFor("source:dragging")
                ),
                t.classList.add(
                  this.draggable.getClassNameFor("source:placed")
                ),
                setTimeout(() => {
                  t.classList.remove(
                    this.draggable.getClassNameFor("source:placed")
                  );
                }, this.draggable.options.placedTimeout));
          }
          [u](e) {
            if (e.canceled()) return;
            let t = e.source || e.dragEvent.source,
              r = new s.SnapOutEvent({
                dragEvent: e,
                snappable: e.over || e.droppable,
              });
            this.draggable.trigger(r),
              r.canceled() ||
                (this.mirror && (this.mirror.style.display = ""),
                t.classList.add(
                  this.draggable.getClassNameFor("source:dragging")
                ));
          }
          [c]({ mirror: e }) {
            this.mirror = e;
          }
          [d]() {
            this.mirror = null;
          }
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
          get snappable() {
            return this.data.snappable;
          }
        }
        (t.SnapEvent = s), (s.type = "snap");
        class o extends s {}
        (t.SnapInEvent = o), (o.type = "snap:in"), (o.cancelable = !0);
        class a extends s {}
        (t.SnapOutEvent = a), (a.type = "snap:out"), (a.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(1);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(7)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(0)) && n.__esModule ? n : { default: n },
          o = r(2);
        let a = Symbol("onMirrorCreated"),
          l = Symbol("onMirrorDestroy"),
          u = Symbol("onDragOver"),
          c = Symbol("resize"),
          d = (t.defaultOptions = {});
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.lastWidth = 0),
              (this.lastHeight = 0),
              (this.mirror = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this));
          }
          attach() {
            this.draggable
              .on("mirror:created", this[a])
              .on("drag:over", this[u])
              .on("drag:over:container", this[u]);
          }
          detach() {
            this.draggable
              .off("mirror:created", this[a])
              .off("mirror:destroy", this[l])
              .off("drag:over", this[u])
              .off("drag:over:container", this[u]);
          }
          getOptions() {
            return this.draggable.options.resizeMirror || {};
          }
          [a]({ mirror: e }) {
            this.mirror = e;
          }
          [l]() {
            this.mirror = null;
          }
          [u](e) {
            this[c](e);
          }
          [c]({ overContainer: e, over: t }) {
            requestAnimationFrame(() => {
              this.mirror.parentNode !== e && e.appendChild(this.mirror);
              let r =
                t || this.draggable.getDraggableElementsForContainer(e)[0];
              r &&
                (0, o.requestNextAnimationFrame)(() => {
                  let e = r.getBoundingClientRect();
                  (this.lastHeight === e.height &&
                    this.lastWidth === e.width) ||
                    ((this.mirror.style.width = `${e.width}px`),
                    (this.mirror.style.height = `${e.height}px`),
                    (this.lastWidth = e.width),
                    (this.lastHeight = e.height));
                });
            });
          }
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(10),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(12)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(14)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(0)) && n.__esModule ? n : { default: n },
          s = r(2),
          o = r(4);
        let a = Symbol("onDragMove"),
          l = Symbol("onDragStop"),
          u = Symbol("onRequestAnimationFrame");
        class c extends i.default {
          constructor(e) {
            super(e),
              (this.currentlyCollidingElement = null),
              (this.lastCollidingElement = null),
              (this.currentAnimationFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this));
          }
          attach() {
            this.draggable.on("drag:move", this[a]).on("drag:stop", this[l]);
          }
          detach() {
            this.draggable.off("drag:move", this[a]).off("drag:stop", this[l]);
          }
          getCollidables() {
            let e = this.draggable.options.collidables;
            return "string" == typeof e
              ? Array.prototype.slice.call(document.querySelectorAll(e))
              : e instanceof NodeList || e instanceof Array
              ? Array.prototype.slice.call(e)
              : e instanceof HTMLElement
              ? [e]
              : "function" == typeof e
              ? e()
              : [];
          }
          [a](e) {
            let t = e.sensorEvent.target;
            (this.currentAnimationFrame = requestAnimationFrame(this[u](t))),
              this.currentlyCollidingElement && e.cancel();
            let r = new o.CollidableInEvent({
                dragEvent: e,
                collidingElement: this.currentlyCollidingElement,
              }),
              n = new o.CollidableOutEvent({
                dragEvent: e,
                collidingElement: this.lastCollidingElement,
              }),
              i = Boolean(
                this.currentlyCollidingElement &&
                  this.lastCollidingElement !== this.currentlyCollidingElement
              ),
              s = Boolean(
                !this.currentlyCollidingElement && this.lastCollidingElement
              );
            i
              ? (this.lastCollidingElement && this.draggable.trigger(n),
                this.draggable.trigger(r))
              : s && this.draggable.trigger(n),
              (this.lastCollidingElement = this.currentlyCollidingElement);
          }
          [l](e) {
            let t = this.currentlyCollidingElement || this.lastCollidingElement,
              r = new o.CollidableOutEvent({
                dragEvent: e,
                collidingElement: t,
              });
            t && this.draggable.trigger(r),
              (this.lastCollidingElement = null),
              (this.currentlyCollidingElement = null);
          }
          [u](e) {
            return () => {
              let t = this.getCollidables();
              this.currentlyCollidingElement = (0, s.closest)(e, (e) =>
                t.includes(e)
              );
            };
          }
        }
        t.default = c;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CollidableOutEvent =
            t.CollidableInEvent =
            t.CollidableEvent =
              void 0);
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.CollidableEvent = s), (s.type = "collidable");
        class o extends s {
          get collidingElement() {
            return this.data.collidingElement;
          }
        }
        (t.CollidableInEvent = o), (o.type = "collidable:in");
        class a extends s {
          get collidingElement() {
            return this.data.collidingElement;
          }
        }
        (t.CollidableOutEvent = a), (a.type = "collidable:out");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(4);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(17)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(20);
        Object.defineProperty(t, "Collidable", {
          enumerable: !0,
          get: function () {
            return a(n).default;
          },
        });
        var i = r(11);
        Object.defineProperty(t, "ResizeMirror", {
          enumerable: !0,
          get: function () {
            return a(i).default;
          },
        }),
          Object.defineProperty(t, "defaultResizeMirrorOptions", {
            enumerable: !0,
            get: function () {
              return i.defaultOptions;
            },
          });
        var s = r(9);
        Object.defineProperty(t, "Snappable", {
          enumerable: !0,
          get: function () {
            return a(s).default;
          },
        });
        var o = r(6);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "SwapAnimation", {
          enumerable: !0,
          get: function () {
            return a(o).default;
          },
        }),
          Object.defineProperty(t, "defaultSwapAnimationOptions", {
            enumerable: !0,
            get: function () {
              return o.defaultOptions;
            },
          });
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Collidable", [], t)
      : "object" == typeof exports
      ? (exports.Collidable = t())
      : (e.Collidable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 12))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(11);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(1)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(3)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(4);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(2);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(6)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(7)) && n.__esModule ? n : { default: n },
          s = r(5),
          o = r(0);
        let a = Symbol("onDragMove"),
          l = Symbol("onDragStop"),
          u = Symbol("onRequestAnimationFrame");
        class c extends i.default {
          constructor(e) {
            super(e),
              (this.currentlyCollidingElement = null),
              (this.lastCollidingElement = null),
              (this.currentAnimationFrame = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this));
          }
          attach() {
            this.draggable.on("drag:move", this[a]).on("drag:stop", this[l]);
          }
          detach() {
            this.draggable.off("drag:move", this[a]).off("drag:stop", this[l]);
          }
          getCollidables() {
            let e = this.draggable.options.collidables;
            return "string" == typeof e
              ? Array.prototype.slice.call(document.querySelectorAll(e))
              : e instanceof NodeList || e instanceof Array
              ? Array.prototype.slice.call(e)
              : e instanceof HTMLElement
              ? [e]
              : "function" == typeof e
              ? e()
              : [];
          }
          [a](e) {
            let t = e.sensorEvent.target;
            (this.currentAnimationFrame = requestAnimationFrame(this[u](t))),
              this.currentlyCollidingElement && e.cancel();
            let r = new o.CollidableInEvent({
                dragEvent: e,
                collidingElement: this.currentlyCollidingElement,
              }),
              n = new o.CollidableOutEvent({
                dragEvent: e,
                collidingElement: this.lastCollidingElement,
              }),
              i = Boolean(
                this.currentlyCollidingElement &&
                  this.lastCollidingElement !== this.currentlyCollidingElement
              ),
              s = Boolean(
                !this.currentlyCollidingElement && this.lastCollidingElement
              );
            i
              ? (this.lastCollidingElement && this.draggable.trigger(n),
                this.draggable.trigger(r))
              : s && this.draggable.trigger(n),
              (this.lastCollidingElement = this.currentlyCollidingElement);
          }
          [l](e) {
            let t = this.currentlyCollidingElement || this.lastCollidingElement,
              r = new o.CollidableOutEvent({
                dragEvent: e,
                collidingElement: t,
              });
            t && this.draggable.trigger(r),
              (this.lastCollidingElement = null),
              (this.currentlyCollidingElement = null);
          }
          [u](e) {
            return () => {
              let t = this.getCollidables();
              this.currentlyCollidingElement = (0, s.closest)(e, (e) =>
                t.includes(e)
              );
            };
          }
        }
        t.default = c;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(9)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CollidableOutEvent =
            t.CollidableInEvent =
            t.CollidableEvent =
              void 0);
        var n,
          i = (n = r(10)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
        }
        (t.CollidableEvent = s), (s.type = "collidable");
        class o extends s {
          get collidingElement() {
            return this.data.collidingElement;
          }
        }
        (t.CollidableInEvent = o), (o.type = "collidable:in");
        class a extends s {
          get collidingElement() {
            return this.data.collidingElement;
          }
        }
        (t.CollidableOutEvent = a), (a.type = "collidable:out");
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(0);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(8)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("ResizeMirror", [], t)
      : "object" == typeof exports
      ? (exports.ResizeMirror = t())
      : (e.ResizeMirror = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 8))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return requestAnimationFrame(() => {
              requestAnimationFrame(e);
            });
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(0)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r;
            if (!e) return null;
            let i = t,
              s = t,
              o = t,
              a = t,
              l = Boolean("string" == typeof t),
              u = Boolean("function" == typeof t),
              c = Boolean(t instanceof NodeList || t instanceof Array),
              d = Boolean(t instanceof HTMLElement),
              h = e;
            do {
              if (
                (r = h =
                  h.correspondingUseElement || h.correspondingElement || h)
                  ? l
                    ? n.call(r, i)
                    : c
                    ? [...o].includes(r)
                    : d
                    ? a === r
                    : u && s(r)
                  : r
              )
                return h;
              h = h.parentNode;
            } while (h && h !== document.body && h !== document);
            return null;
          });
        let n =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(2)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(3);
        Object.defineProperty(t, "closest", {
          enumerable: !0,
          get: function () {
            return s(n).default;
          },
        });
        var i = r(1);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "requestNextAnimationFrame", {
          enumerable: !0,
          get: function () {
            return s(i).default;
          },
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(5)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(6)) && n.__esModule ? n : { default: n },
          o = r(4);
        let a = Symbol("onMirrorCreated"),
          l = Symbol("onMirrorDestroy"),
          u = Symbol("onDragOver"),
          c = Symbol("resize"),
          d = (t.defaultOptions = {});
        class h extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, d, this.getOptions())),
              (this.lastWidth = 0),
              (this.lastHeight = 0),
              (this.mirror = null),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this));
          }
          attach() {
            this.draggable
              .on("mirror:created", this[a])
              .on("drag:over", this[u])
              .on("drag:over:container", this[u]);
          }
          detach() {
            this.draggable
              .off("mirror:created", this[a])
              .off("mirror:destroy", this[l])
              .off("drag:over", this[u])
              .off("drag:over:container", this[u]);
          }
          getOptions() {
            return this.draggable.options.resizeMirror || {};
          }
          [a]({ mirror: e }) {
            this.mirror = e;
          }
          [l]() {
            this.mirror = null;
          }
          [u](e) {
            this[c](e);
          }
          [c]({ overContainer: e, over: t }) {
            requestAnimationFrame(() => {
              this.mirror.parentNode !== e && e.appendChild(this.mirror);
              let r =
                t || this.draggable.getDraggableElementsForContainer(e)[0];
              r &&
                (0, o.requestNextAnimationFrame)(() => {
                  let e = r.getBoundingClientRect();
                  (this.lastHeight === e.height &&
                    this.lastWidth === e.width) ||
                    ((this.mirror.style.width = `${e.width}px`),
                    (this.mirror.style.height = `${e.height}px`),
                    (this.lastWidth = e.width),
                    (this.lastHeight = e.height));
                });
            });
          }
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(7),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Snappable", [], t)
      : "object" == typeof exports
      ? (exports.Snappable = t())
      : (e.Snappable = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 7))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(6);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(1)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(2)) && n.__esModule ? n : { default: n },
          s = r(0);
        let o = Symbol("onDragStart"),
          a = Symbol("onDragStop"),
          l = Symbol("onDragOver"),
          u = Symbol("onDragOut"),
          c = Symbol("onMirrorCreated"),
          d = Symbol("onMirrorDestroy");
        class h extends i.default {
          constructor(e) {
            super(e),
              (this.firstSource = null),
              (this.mirror = null),
              (this[o] = this[o].bind(this)),
              (this[a] = this[a].bind(this)),
              (this[l] = this[l].bind(this)),
              (this[u] = this[u].bind(this)),
              (this[c] = this[c].bind(this)),
              (this[d] = this[d].bind(this));
          }
          attach() {
            this.draggable
              .on("drag:start", this[o])
              .on("drag:stop", this[a])
              .on("drag:over", this[l])
              .on("drag:out", this[u])
              .on("droppable:over", this[l])
              .on("droppable:out", this[u])
              .on("mirror:created", this[c])
              .on("mirror:destroy", this[d]);
          }
          detach() {
            this.draggable
              .off("drag:start", this[o])
              .off("drag:stop", this[a])
              .off("drag:over", this[l])
              .off("drag:out", this[u])
              .off("droppable:over", this[l])
              .off("droppable:out", this[u])
              .off("mirror:created", this[c])
              .off("mirror:destroy", this[d]);
          }
          [o](e) {
            e.canceled() || (this.firstSource = e.source);
          }
          [a]() {
            this.firstSource = null;
          }
          [l](e) {
            if (e.canceled()) return;
            let t = e.source || e.dragEvent.source;
            if (t === this.firstSource) return void (this.firstSource = null);
            let r = new s.SnapInEvent({
              dragEvent: e,
              snappable: e.over || e.droppable,
            });
            this.draggable.trigger(r),
              r.canceled() ||
                (this.mirror && (this.mirror.style.display = "none"),
                t.classList.remove(
                  this.draggable.getClassNameFor("source:dragging")
                ),
                t.classList.add(
                  this.draggable.getClassNameFor("source:placed")
                ),
                setTimeout(() => {
                  t.classList.remove(
                    this.draggable.getClassNameFor("source:placed")
                  );
                }, this.draggable.options.placedTimeout));
          }
          [u](e) {
            if (e.canceled()) return;
            let t = e.source || e.dragEvent.source,
              r = new s.SnapOutEvent({
                dragEvent: e,
                snappable: e.over || e.droppable,
              });
            this.draggable.trigger(r),
              r.canceled() ||
                (this.mirror && (this.mirror.style.display = ""),
                t.classList.add(
                  this.draggable.getClassNameFor("source:dragging")
                ));
          }
          [c]({ mirror: e }) {
            this.mirror = e;
          }
          [d]() {
            this.mirror = null;
          }
        }
        t.default = h;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
        let i = Symbol("canceled");
        class s {
          constructor(e) {
            (this[i] = !1), (this.data = e);
          }
          get type() {
            return this.constructor.type;
          }
          get cancelable() {
            return this.constructor.cancelable;
          }
          cancel() {
            this[i] = !0;
          }
          canceled() {
            return Boolean(this[i]);
          }
          clone(e) {
            return new this.constructor(n({}, this.data, e));
          }
        }
        (t.default = s), (s.type = "event"), (s.cancelable = !1);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(4)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SnapOutEvent = t.SnapInEvent = t.SnapEvent = void 0);
        var n,
          i = (n = r(5)) && n.__esModule ? n : { default: n };
        class s extends i.default {
          get dragEvent() {
            return this.data.dragEvent;
          }
          get snappable() {
            return this.data.snappable;
          }
        }
        (t.SnapEvent = s), (s.type = "snap");
        class o extends s {}
        (t.SnapInEvent = o), (o.type = "snap:in"), (o.cancelable = !0);
        class a extends s {}
        (t.SnapOutEvent = a), (a.type = "snap:out"), (a.cancelable = !0);
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(0);
        Object.keys(n).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
        var i,
          s = (i = r(3)) && i.__esModule ? i : { default: i };
        t.default = s.default;
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("SwapAnimation", [], t)
      : "object" == typeof exports
      ? (exports.SwapAnimation = t())
      : (e.SwapAnimation = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if (
            (1 & t && (e = r(e)),
            8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 3))
      );
    })([
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.draggable = e;
            }
            attach() {
              throw Error("Not Implemented");
            }
            detach() {
              throw Error("Not Implemented");
            }
          });
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = (n = r(0)) && n.__esModule ? n : { default: n };
        t.default = i.default;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (n = r(1)) && n.__esModule ? n : { default: n };
        let o = Symbol("onSortableSorted"),
          a = (t.defaultOptions = {
            duration: 150,
            easingFunction: "ease-in-out",
            horizontal: !1,
          });
        class l extends s.default {
          constructor(e) {
            super(e),
              (this.options = i({}, a, this.getOptions())),
              (this.lastAnimationFrame = null),
              (this[o] = this[o].bind(this));
          }
          attach() {
            this.draggable.on("sortable:sorted", this[o]);
          }
          detach() {
            this.draggable.off("sortable:sorted", this[o]);
          }
          getOptions() {
            return this.draggable.options.swapAnimation || {};
          }
          [o]({ oldIndex: e, newIndex: t, dragEvent: r }) {
            let { source: n, over: i } = r;
            cancelAnimationFrame(this.lastAnimationFrame),
              (this.lastAnimationFrame = requestAnimationFrame(() => {
                e >= t ? u(n, i, this.options) : u(i, n, this.options);
              }));
          }
        }
        function u(e, t, { duration: r, easingFunction: n, horizontal: i }) {
          for (let s of [e, t]) s.style.pointerEvents = "none";
          if (i) {
            let o = e.offsetWidth;
            (e.style.transform = `translate3d(${o}px, 0, 0)`),
              (t.style.transform = `translate3d(-${o}px, 0, 0)`);
          } else {
            let a = e.offsetHeight;
            (e.style.transform = `translate3d(0, ${a}px, 0)`),
              (t.style.transform = `translate3d(0, -${a}px, 0)`);
          }
          requestAnimationFrame(() => {
            for (let i of [e, t])
              i.addEventListener("transitionend", c),
                (i.style.transition = `transform ${r}ms ${n}`),
                (i.style.transform = "");
          });
        }
        function c(e) {
          (e.target.style.transition = ""),
            (e.target.style.pointerEvents = ""),
            e.target.removeEventListener("transitionend", c);
        }
        t.default = l;
      },
      function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = void 0);
        var n,
          i = r(2),
          s = (n = i) && n.__esModule ? n : { default: n };
        (t.default = s.default), (t.defaultOptions = i.defaultOptions);
      },
    ]);
  });
