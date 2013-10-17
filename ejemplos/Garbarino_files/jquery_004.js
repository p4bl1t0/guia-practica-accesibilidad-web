/*!
 * jQuery UI @VERSION
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function ($, undefined) {
  // prevent duplicate loading
  // this is only a problem because we proxy existing functions
  // and we don't want to double proxy them
  $.ui = $.ui || {};
  if ($.ui.version) {
    return;
  }
  $.extend($.ui, {
    version: "@VERSION",
    keyCode: {
      ALT: 18,
      BACKSPACE: 8,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      // COMMAND
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      // COMMAND_RIGHT
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91 // COMMAND
    }
  });
  // plugins
  $.fn.extend({
    propAttr: $.fn.prop || $.fn.attr,
    _focus: $.fn.focus,
    focus: function (delay, fn) {
      return typeof delay === "number" ? this.each(function () {
        var elem = this;
        setTimeout(function () {
          $(elem).focus();
          if (fn) {
            fn.call(elem);
          }
        }, delay);
      }) : this._focus.apply(this, arguments);
    },
    scrollParent: function () {
      var scrollParent;
      if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
        scrollParent = this.parents().filter(function () {
          return (/(relative|absolute|fixed)/).test($.curCSS(this, 'position', 1)) && (/(auto|scroll)/).test($.curCSS(this, 'overflow', 1) + $.curCSS(this, 'overflow-y', 1) + $.curCSS(this, 'overflow-x', 1));
        }).eq(0);
      } else {
        scrollParent = this.parents().filter(function () {
          return (/(auto|scroll)/).test($.curCSS(this, 'overflow', 1) + $.curCSS(this, 'overflow-y', 1) + $.curCSS(this, 'overflow-x', 1));
        }).eq(0);
      }
      return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
    },
    zIndex: function (zIndex) {
      if (zIndex !== undefined) {
        return this.css("zIndex", zIndex);
      }
      if (this.length) {
        var elem = $(this[0]),
          position, value;
        while (elem.length && elem[0] !== document) {
          // Ignore z-index if position is set to a value where z-index is ignored by the browser
          // This makes behavior of this function consistent across browsers
          // WebKit always returns auto if the element is positioned
          position = elem.css("position");
          if (position === "absolute" || position === "relative" || position === "fixed") {
            // IE returns 0 when zIndex is not specified
            // other browsers return a string
            // we ignore the case of nested elements with an explicit value of 0
            // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
            value = parseInt(elem.css("zIndex"), 10);
            if (!isNaN(value) && value !== 0) {
              return value;
            }
          }
          elem = elem.parent();
        }
      }
      return 0;
    },
    disableSelection: function () {
      return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (event) {
        event.preventDefault();
      });
    },
    enableSelection: function () {
      return this.unbind(".ui-disableSelection");
    }
  });
  $.each(["Width", "Height"], function (i, name) {
    var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
      type = name.toLowerCase(),
      orig = {
        innerWidth: $.fn.innerWidth,
        innerHeight: $.fn.innerHeight,
        outerWidth: $.fn.outerWidth,
        outerHeight: $.fn.outerHeight
      };

    function reduce(elem, size, border, margin) {
      $.each(side, function () {
        size -= parseFloat($.curCSS(elem, "padding" + this, true)) || 0;
        if (border) {
          size -= parseFloat($.curCSS(elem, "border" + this + "Width", true)) || 0;
        }
        if (margin) {
          size -= parseFloat($.curCSS(elem, "margin" + this, true)) || 0;
        }
      });
      return size;
    }
    $.fn["inner" + name] = function (size) {
      if (size === undefined) {
        return orig["inner" + name].call(this);
      }
      return this.each(function () {
        $(this).css(type, reduce(this, size) + "px");
      });
    };
    $.fn["outer" + name] = function (size, margin) {
      if (typeof size !== "number") {
        return orig["outer" + name].call(this, size);
      }
      return this.each(function () {
        $(this).css(type, reduce(this, size, true, margin) + "px");
      });
    };
  });
  // selectors

  function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    if ("area" === nodeName) {
      var map = element.parentNode,
        mapName = map.name,
        img;
      if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
        return false;
      }
      img = $("img[usemap=#" + mapName + "]")[0];
      return !!img && visible(img);
    }
    return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" == nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
    // the element and all of its ancestors must be visible
    && visible(element);
  }

  function visible(element) {
    return !$(element).parents().andSelf().filter(function () {
      return $.curCSS(this, "visibility") === "hidden" || $.expr.filters.hidden(this);
    }).length;
  }
  $.extend($.expr[":"], {
    data: function (elem, i, match) {
      return !!$.data(elem, match[3]);
    },
    focusable: function (element) {
      return focusable(element, !isNaN($.attr(element, "tabindex")));
    },
    tabbable: function (element) {
      var tabIndex = $.attr(element, "tabindex"),
        isTabIndexNaN = isNaN(tabIndex);
      return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
    }
  });
  // support
  $(function () {
    var body = document.body,
      div = body.appendChild(div = document.createElement("div"));
    $.extend(div.style, {
      minHeight: "100px",
      height: "auto",
      padding: 0,
      borderWidth: 0
    });
    $.support.minHeight = div.offsetHeight === 100;
    $.support.selectstart = "onselectstart" in div;
    // set display to none to avoid a layout bug in IE
    // http://dev.jquery.com/ticket/4014
    body.removeChild(div).style.display = "none";
  });
  // deprecated
  $.extend($.ui, {
    // $.ui.plugin is deprecated.  Use the proxy pattern instead.
    plugin: {
      add: function (module, option, set) {
        var proto = $.ui[module].prototype;
        for (var i in set) {
          proto.plugins[i] = proto.plugins[i] || [];
          proto.plugins[i].push([option, set[i]]);
        }
      },
      call: function (instance, name, args) {
        var set = instance.plugins[name];
        if (!set || !instance.element[0].parentNode) {
          return;
        }
        for (var i = 0; i < set.length; i++) {
          if (instance.options[set[i][0]]) {
            set[i][1].apply(instance.element, args);
          }
        }
      }
    },
    // will be deprecated when we switch to jQuery 1.4 - use jQuery.contains()
    contains: function (a, b) {
      return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b);
    },
    // only used by resizable
    hasScroll: function (el, a) {
      //If overflow is hidden, the element might have extra content, but the user wants to hide it
      if ($(el).css("overflow") === "hidden") {
        return false;
      }
      var scroll = (a && a === "left") ? "scrollLeft" : "scrollTop",
        has = false;
      if (el[scroll] > 0) {
        return true;
      }
      // TODO: determine which cases actually cause this to happen
      // if the element doesn't have the scroll set, see if it's possible to
      // set the scroll
      el[scroll] = 1;
      has = (el[scroll] > 0);
      el[scroll] = 0;
      return has;
    },
    // these are odd functions, fix the API or move into individual plugins
    isOverAxis: function (x, reference, size) {
      //Determines when x coordinate is over "b" element axis
      return (x > reference) && (x < (reference + size));
    },
    isOver: function (y, x, top, left, height, width) {
      //Determines when x, y coordinates is over "b" element
      return $.ui.isOverAxis(y, top, height) && $.ui.isOverAxis(x, left, width);
    }
  });
})(jQuery);

/*!
 * jQuery UI Widget @VERSION
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function ($, undefined) {
  // jQuery 1.4+
  if ($.cleanData) {
    var _cleanData = $.cleanData;
    $.cleanData = function (elems) {
      for (var i = 0, elem;
      (elem = elems[i]) != null; i++) {
        try {
          $(elem).triggerHandler("remove");
          // http://bugs.jquery.com/ticket/8235
        } catch (e) {}
      }
      _cleanData(elems);
    };
  } else {
    var _remove = $.fn.remove;
    $.fn.remove = function (selector, keepData) {
      return this.each(function () {
        if (!keepData) {
          if (!selector || $.filter(selector, [this]).length) {
            $("*", this).add([this]).each(function () {
              try {
                $(this).triggerHandler("remove");
                // http://bugs.jquery.com/ticket/8235
              } catch (e) {}
            });
          }
        }
        return _remove.call($(this), selector, keepData);
      });
    };
  }
  $.widget = function (name, base, prototype) {
    var namespace = name.split(".")[0],
      fullName;
    name = name.split(".")[1];
    fullName = namespace + "-" + name;
    if (!prototype) {
      prototype = base;
      base = $.Widget;
    }
    // create selector for plugin
    $.expr[":"][fullName] = function (elem) {
      return !!$.data(elem, name);
    };
    $[namespace] = $[namespace] || {};
    $[namespace][name] = function (options, element) {
      // allow instantiation without initializing for simple inheritance
      if (arguments.length) {
        this._createWidget(options, element);
      }
    };
    var basePrototype = new base();
    // we need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    //	$.each( basePrototype, function( key, val ) {
    //		if ( $.isPlainObject(val) ) {
    //			basePrototype[ key ] = $.extend( {}, val );
    //		}
    //	});
    basePrototype.options = $.extend(true, {}, basePrototype.options);
    $[namespace][name].prototype = $.extend(true, basePrototype, {
      namespace: namespace,
      widgetName: name,
      widgetEventPrefix: $[namespace][name].prototype.widgetEventPrefix || name,
      widgetBaseClass: fullName
    }, prototype);
    $.widget.bridge(name, $[namespace][name]);
  };
  $.widget.bridge = function (name, object) {
    $.fn[name] = function (options) {
      var isMethodCall = typeof options === "string",
        args = Array.prototype.slice.call(arguments, 1),
        returnValue = this;
      // allow multiple hashes to be passed on init
      options = !isMethodCall && args.length ? $.extend.apply(null, [true, options].concat(args)) : options;
      // prevent calls to internal methods
      if (isMethodCall && options.charAt(0) === "_") {
        return returnValue;
      }
      if (isMethodCall) {
        this.each(function () {
          var instance = $.data(this, name),
            methodValue = instance && $.isFunction(instance[options]) ? instance[options].apply(instance, args) : instance;
          // TODO: add this back in 1.9 and use $.error() (see #5972)
          //				if ( !instance ) {
          //					throw "cannot call methods on " + name + " prior to initialization; " +
          //						"attempted to call method '" + options + "'";
          //				}
          //				if ( !$.isFunction( instance[options] ) ) {
          //					throw "no such method '" + options + "' for " + name + " widget instance";
          //				}
          //				var methodValue = instance[ options ].apply( instance, args );
          if (methodValue !== instance && methodValue !== undefined) {
            returnValue = methodValue;
            return false;
          }
        });
      } else {
        this.each(function () {
          var instance = $.data(this, name);
          if (instance) {
            instance.option(options || {})._init();
          } else {
            $.data(this, name, new object(options, this));
          }
        });
      }
      return returnValue;
    };
  };
  $.Widget = function (options, element) {
    // allow instantiation without initializing for simple inheritance
    if (arguments.length) {
      this._createWidget(options, element);
    }
  };
  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    options: {
      disabled: false
    },
    _createWidget: function (options, element) {
      // $.widget.bridge stores the plugin instance, but we do it anyway
      // so that it's stored even before the _create function runs
      $.data(element, this.widgetName, this);
      this.element = $(element);
      this.options = $.extend(true, {}, this.options, this._getCreateOptions(), options);
      var self = this;
      this.element.bind("remove." + this.widgetName, function () {
        self.destroy();
      });
      this._create();
      this._trigger("create");
      this._init();
    },
    _getCreateOptions: function () {
      return $.metadata && $.metadata.get(this.element[0])[this.widgetName];
    },
    _create: function () {},
    _init: function () {},
    destroy: function () {
      this.element.unbind("." + this.widgetName).removeData(this.widgetName);
      this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(
      this.widgetBaseClass + "-disabled " + "ui-state-disabled");
    },
    widget: function () {
      return this.element;
    },
    option: function (key, value) {
      var options = key;
      if (arguments.length === 0) {
        // don't return a reference to the internal hash
        return $.extend({}, this.options);
      }
      if (typeof key === "string") {
        if (value === undefined) {
          return this.options[key];
        }
        options = {};
        options[key] = value;
      }
      this._setOptions(options);
      return this;
    },
    _setOptions: function (options) {
      var self = this;
      $.each(options, function (key, value) {
        self._setOption(key, value);
      });
      return this;
    },
    _setOption: function (key, value) {
      this.options[key] = value;
      if (key === "disabled") {
        this.widget()[value ? "addClass" : "removeClass"](
        this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", value);
      }
      return this;
    },
    enable: function () {
      return this._setOption("disabled", false);
    },
    disable: function () {
      return this._setOption("disabled", true);
    },
    _trigger: function (type, event, data) {
      var callback = this.options[type];
      event = $.Event(event);
      event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
      data = data || {};
      // copy original event properties over to the new event
      // this would happen if we could call $.event.fix instead of $.Event
      // but we don't have a way to force an event to be fixed multiple times
      if (event.originalEvent) {
        for (var i = $.event.props.length, prop; i;) {
          prop = $.event.props[--i];
          event[prop] = event.originalEvent[prop];
        }
      }
      this.element.trigger(event, data);
      return !($.isFunction(callback) && callback.call(this.element[0], event, data) === false || event.isDefaultPrevented());
    }
  };
})(jQuery);
 /*
 * jQuery UI selectmenu dev version
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 * https://github.com/fnagel/jquery-ui/wiki/Selectmenu
 */

(function($) {

$.widget("ui.selectmenu", {
	getter: "value",
	version: "1.8",
	eventPrefix: "selectmenu",
	options: {
		transferClasses: true,
		typeAhead: "sequential",
		style: 'dropdown',
		positionOptions: {
			my: "left top",
			at: "left bottom",
			offset: null
		},
		width: null,
		menuWidth: null,
		handleWidth: 26,
		maxHeight: null,
		icons: null,
		format: null,
		bgImage: function() {},
		wrapperElement: "<div />"
	},

	_create: function() {
		var self = this, o = this.options;

		// set a default id value, generate a new random one if not set by developer
		var selectmenuId = (this.element.attr( 'id' ) || 'ui-selectmenu-' + Math.random().toString( 16 ).slice( 2, 10 )).replace(':', '\\:');
		
		// quick array of button and menu id's
		this.ids = [ selectmenuId, selectmenuId + '-button', selectmenuId + '-menu' ];

		// define safe mouseup for future toggling
		this._safemouseup = true;

		// create menu button wrapper
		this.newelement = $( '<a />', {
			'class': this.widgetBaseClass + ' ui-widget ui-state-default ui-corner-all',
			'id' : this.ids[ 1 ],
			'role': 'button',
			'href': '#nogo',
			'tabindex': this.element.attr( 'disabled' ) ? 1 : 0,
			'aria-haspopup': true,
			'aria-owns': this.ids[ 2 ]
		});
		this.newelementWrap = $( o.wrapperElement )
			.append( this.newelement )
			.insertAfter( this.element );
		
		// transfer tabindex
		var tabindex = this.element.attr( 'tabindex' );
		if ( tabindex ) {
			this.newelement.attr( 'tabindex', tabindex );
		}

		// save reference to select in data for ease in calling methods
		this.newelement.data( 'selectelement', this.element );

		// menu icon
		this.selectmenuIcon = $( '<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>' )
			.prependTo( this.newelement );

		// append status span to button
		this.newelement.prepend( '<span class="' + self.widgetBaseClass + '-status" />' );

		// make associated form label trigger focus
		this.element.bind({
			'click.selectmenu':  function( event ) {
				self.newelement.focus();
				event.preventDefault();
			}
		});
		
		// click toggle for menu visibility
		this.newelement
			.bind('mousedown.selectmenu', function(event) {
				self._toggle(event, true);
				// make sure a click won't open/close instantly
				if (o.style == "popup") {
					self._safemouseup = false;
					setTimeout(function() { self._safemouseup = true; }, 300);
				}
				return false;
			})
			.bind('click.selectmenu', function() {
				return false;
			})
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.ENTER:
						ret = true;
						break;
					case $.ui.keyCode.SPACE:
						self._toggle(event);
						break;
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveSelection(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveSelection(1);
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				self._typeAhead(event.which, 'mouseup');
				return true;
			})
			.bind('mouseover.selectmenu focus.selectmenu', function() {
				if (!o.disabled) {
					$(this).addClass(self.widgetBaseClass + '-focus ui-state-hover');
				}
			})
			.bind('mouseout.selectmenu blur.selectmenu', function() {
				if (!o.disabled) {
					$(this).removeClass(self.widgetBaseClass + '-focus ui-state-hover');
				}
			});

		// document click closes menu
		$(document).bind("mousedown.selectmenu-" + this.ids[0], function(event) {
			self.close(event);
		});

		// change event on original selectmenu
		this.element
			.bind("click.selectmenu", function() {
				self._refreshValue();
			})
			// FIXME: newelement can be null under unclear circumstances in IE8
			// TODO not sure if this is still a problem (fnagel 20.03.11)
			.bind("focus.selectmenu", function() {
				if (self.newelement) {
					self.newelement[0].focus();
				}
			});

		// set width when not set via options
		if (!o.width) {
			o.width = this.element.outerWidth();
		}
		// set menu button width
		this.newelement.width(o.width);

		// hide original selectmenu element
		this.element.hide();

		// create menu portion, append to body		
		this.list = $( '<ul />', {
			'class': 'ui-widget ui-widget-content',
			'aria-hidden': true,
			'role': 'listbox',
			'aria-labelledby': this.ids[1],
			'id': this.ids[2]
		});
		this.listWrap = $( o.wrapperElement )
			.addClass( self.widgetBaseClass + '-menu' )
			.append( this.list )
			.appendTo( 'body' );
		
		// transfer menu click to menu button
		this.list
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveFocus(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveFocus(1);
						break;
					case $.ui.keyCode.HOME:
						self._moveFocus(':first');
						break;
					case $.ui.keyCode.PAGE_UP:
						self._scrollPage('up');
						break;
					case $.ui.keyCode.PAGE_DOWN:
						self._scrollPage('down');
						break;
					case $.ui.keyCode.END:
						self._moveFocus(':last');
						break;
					case $.ui.keyCode.ENTER:
					case $.ui.keyCode.SPACE:
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.ESCAPE:
						self.close(event, true);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				self._typeAhead(event.which, 'focus');
				return true;
			})
			// this allows for using the scrollbar in an overflowed list
			.bind( 'mousedown.selectmenu mouseup.selectmenu', function() { return false; });

		// needed when window is resized
		$(window).bind( "resize.selectmenu-" + this.ids[0], $.proxy( self.close, this ) );
	},

	_init: function() {
		var self = this, o = this.options;

		// serialize selectmenu element options
		var selectOptionData = [];
		this.element
			.find('option')
			.each(function() {
				var opt = $(this);
				selectOptionData.push({
					value: opt.attr('value'),
					text: self._formatText(opt.text()),
					selected: opt.attr('selected'),
					disabled: opt.attr('disabled'),
					classes: opt.attr('class'),
					typeahead: opt.attr('typeahead'),
					parentOptGroup: opt.parent('optgroup'),
					bgImage: o.bgImage.call(opt)
				});
			});

		// active state class is only used in popup style
		var activeClass = (self.options.style == "popup") ? " ui-state-active" : "";

		// empty list so we can refresh the selectmenu via selectmenu()
		this.list.html("");

		// write li's
		if (selectOptionData.length) {
			for (var i = 0; i < selectOptionData.length; i++) {
				var thisLiAttr = { role : 'presentation' };
				if ( selectOptionData[ i ].disabled ) {
					thisLiAttr[ 'class' ] = this.namespace + '-state-disabled';
				}					
				var thisAAttr = {
					html: selectOptionData[i].text,
					href : '#nogo', 
					tabindex : -1, 
					role : 'option',
					'aria-selected' : false
				};
				if ( selectOptionData[ i ].disabled ) {
					thisAAttr[ 'aria-disabled' ] = selectOptionData[ i ].disabled;
				}
				if ( selectOptionData[ i ].typeahead ) {
					thisAAttr[ 'typeahead' ] = selectOptionData[ i ].typeahead;
				}				
				var thisA = $('<a/>', thisAAttr);
				var thisLi = $('<li/>', thisLiAttr)	
					.append(thisA)				
					.data('index', i)
					.addClass(selectOptionData[i].classes)
					.data('optionClasses', selectOptionData[i].classes || '')
					.bind("mouseup.selectmenu", function(event) {
						if (self._safemouseup && !self._disabled(event.currentTarget) && !self._disabled($( event.currentTarget ).parents( "ul>li." + self.widgetBaseClass + "-group " )) ) {
							var changed = $(this).data('index') != self._selectedIndex();
							self.index($(this).data('index'));
							self.select(event);
							if (changed) {
								self.change(event);
							}
							self.close(event, true);
						}
						return false;
					})
					.bind("click.selectmenu", function() {
						return false;
					})
					.bind('mouseover.selectmenu focus.selectmenu', function(e) {
						// no hover if diabled
						if (!$(e.currentTarget).hasClass(self.namespace + '-state-disabled') && !$(e.currentTarget).parent("ul").parent("li").hasClass(self.namespace + '-state-disabled')) {
							self._selectedOptionLi().addClass(activeClass);
							self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
							$(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover');
						}
					})
					.bind('mouseout.selectmenu blur.selectmenu', function() {
						if ($(this).is(self._selectedOptionLi().selector)) {
							$(this).addClass(activeClass);
						}
						$(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
					});

				// optgroup or not...
				if ( selectOptionData[i].parentOptGroup.length ) {
					var optGroupName = self.widgetBaseClass + '-group-' + this.element.find( 'optgroup' ).index( selectOptionData[i].parentOptGroup );
					if (this.list.find( 'li.' + optGroupName ).length ) {
						this.list.find( 'li.' + optGroupName + ':last ul' ).append( thisLi );
					} else {
						$(' <li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + (selectOptionData[i].parentOptGroup.attr("disabled") ? ' ' + this.namespace + '-state-disabled" aria-disabled="true"' : '"' ) + '><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup.attr('label') + '</span><ul></ul></li> ')
							.appendTo( this.list )
							.find( 'ul' )
							.append( thisLi );
					}
				} else {
					thisLi.appendTo(this.list);
				}

				// append icon if option is specified
				if (o.icons) {
					for (var j in o.icons) {
						if (thisLi.is(o.icons[j].find)) {
							thisLi
								.data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon')
								.addClass(self.widgetBaseClass + '-hasIcon');
							var iconClass = o.icons[j].icon || "";
							thisLi
								.find('a:eq(0)')
								.prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>');
							if (selectOptionData[i].bgImage) {
								thisLi.find('span').css('background-image', selectOptionData[i].bgImage);
							}
						}
					}
				}
			}
		} else {
			$('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
		}
		// we need to set and unset the CSS classes for dropdown and popup style
		var isDropDown = ( o.style == 'dropdown' );
		this.newelement
			.toggleClass( self.widgetBaseClass + '-dropdown', isDropDown )
			.toggleClass( self.widgetBaseClass + '-popup', !isDropDown );
		this.list
			.toggleClass( self.widgetBaseClass + '-menu-dropdown ui-corner-bottom', isDropDown )
			.toggleClass( self.widgetBaseClass + '-menu-popup ui-corner-all', !isDropDown )
			// add corners to top and bottom menu items
			.find( 'li:first' )
			.toggleClass( 'ui-corner-top', !isDropDown )
			.end().find( 'li:last' )
			.addClass( 'ui-corner-bottom' );
		this.selectmenuIcon
			.toggleClass( 'ui-icon-triangle-1-s', isDropDown )
			.toggleClass( 'ui-icon-triangle-2-n-s', !isDropDown );

		// transfer classes to selectmenu and list
		if ( o.transferClasses ) {
			var transferClasses = this.element.attr( 'class' ) || '';
			this.newelement.add( this.list ).addClass( transferClasses );
		}

		// set menu width to either menuWidth option value, width option value, or select width
		if ( o.style == 'dropdown' ) {
			this.list.width( o.menuWidth ? o.menuWidth : o.width );
		} else {
			this.list.width( o.menuWidth ? o.menuWidth : o.width - o.handleWidth );
		}

		// reset height to auto
		this.list.css( 'height', 'auto' );
		var listH = this.listWrap.height();
		// calculate default max height
		if ( o.maxHeight && o.maxHeight < listH ) {
			this.list.height( o.maxHeight );
		} else {
			var winH = $( window ).height() / 3;
			if ( winH < listH ) this.list.height( winH );
		}
		
		// save reference to actionable li's (not group label li's)
		this._optionLis = this.list.find( 'li:not(.' + self.widgetBaseClass + '-group)' );

		// transfer disabled state
		if ( this.element.attr( 'disabled' ) ) {
			this.disable();
		} else {
			this.enable()
		}
		
		// update value
		this.index( this._selectedIndex() );

		// needed when selectmenu is placed at the very bottom / top of the page
		window.setTimeout( function() {
			self._refreshPosition();
		}, 200 );
	},

	destroy: function() {
		this.element.removeData( this.widgetName )
			.removeClass( this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled' )
			.removeAttr( 'aria-disabled' )
			.unbind( ".selectmenu" );

		$( window ).unbind( ".selectmenu-" + this.ids[0] );
		$( document ).unbind( ".selectmenu-" + this.ids[0] );
		
		this.newelementWrap.remove();
		this.listWrap.remove();
		
		// unbind click event and show original select
		this.element
			.unbind(".selectmenu")
			.show();

		// call widget destroy function
		$.Widget.prototype.destroy.apply(this, arguments);
	},

	_typeAhead: function( code, eventType ){
		var self = this, focusFound = false, C = String.fromCharCode(code).toUpperCase();
		c = C.toLowerCase();

		if ( self.options.typeAhead == 'sequential' ) {
			// clear the timeout so we can use _prevChar
			window.clearTimeout('ui.selectmenu-' + self.selectmenuId);

			// define our find var
			var find = typeof( self._prevChar ) == 'undefined' ? '' : self._prevChar.join( '' );

			function focusOptSeq( elem, ind, c ){
				focusFound = true;
				$( elem ).trigger( eventType );
				typeof( self._prevChar ) == 'undefined' ? self._prevChar = [ c ] : self._prevChar[ self._prevChar.length ] = c;
			}
			this.list.find( 'li a' ).each( function( i ) {
				if ( !focusFound ) {
					// allow the typeahead attribute on the option tag for a more specific lookup
					var thisText = $( this ).attr( 'typeahead' ) || $(this).text();
					if ( thisText.indexOf( find + C ) === 0 ) {
						focusOptSeq( this, i, C );
					} else if (thisText.indexOf(find+c) === 0 ) {
						focusOptSeq( this, i, c );
					}
				}
			});
			// set a 1 second timeout for sequenctial typeahead
			// keep this set even if we have no matches so it doesnt typeahead somewhere else
			window.setTimeout( function( el ) {
				self._prevChar = undefined;
			}, 1000, self );

		} else {
			// define self._prevChar if needed
			if ( !self._prevChar ) { self._prevChar = [ '' , 0 ]; }

			focusFound = false;
			function focusOpt( elem, ind ){
				focusFound = true;
				$( elem ).trigger( eventType );
				self._prevChar[ 1 ] = ind;
			}
			this.list.find( 'li a' ).each(function( i ){
				if (!focusFound){
					var thisText = $(this).text();
					if ( thisText.indexOf( C ) === 0 || thisText.indexOf( c ) === 0 ) {
						if (self._prevChar[0] == C){
							if ( self._prevChar[ 1 ] < i ){ focusOpt( this, i ); }
						} else{ 
							focusOpt( this, i ); 
						}
					}
				}
			});
			this._prevChar[ 0 ] = C;
		}
	},

	// returns some usefull information, called by callbacks only
	_uiHash: function() {
		var index = this.index();
		return {
			index: index,
			option: $("option", this.element).get(index),
			value: this.element[0].value
		};
	},

	open: function(event) {
		var self = this, o = this.options;
		if ( self.newelement.attr("aria-disabled") != 'true' ) {
			self._closeOthers(event);
			self.newelement.addClass('ui-state-active');
				
			self.listWrap.appendTo( o.appendTo );
			self.list.attr('aria-hidden', false);
			
			if ( o.style == "dropdown" ) {
				self.newelement.removeClass('ui-corner-all').addClass('ui-corner-top');
			}
			
			self.listWrap.addClass( self.widgetBaseClass + '-open' );
			// positioning needed for IE7 (tested 01.08.11 on MS VPC Image)
			// see https://github.com/fnagel/jquery-ui/issues/147
			if ( $.browser.msie && $.browser.version.substr( 0,1 ) == 7 ) {
				self._refreshPosition();
			}
			var selected = self.list.attr('aria-hidden', false).find('li:not(.' + self.widgetBaseClass + '-group):eq(' + self._selectedIndex() + '):visible a');
			if (selected.length) selected[0].focus();
			// positioning needed for FF, Chrome, IE8, IE7, IE6 (tested 01.08.11 on MS VPC Image)
			self._refreshPosition();			
			
			self._trigger("open", event, self._uiHash());
		}
	},

	close: function(event, retainFocus) {
		if ( this.newelement.is('.ui-state-active') ) {
			this.newelement
				.removeClass('ui-state-active');
			this.listWrap.removeClass(this.widgetBaseClass + '-open');
			this.list.attr('aria-hidden', true);
			if ( this.options.style == "dropdown" ) {
				this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all');
			}
			if ( retainFocus ) {
				this.newelement.focus();
			}
			this._trigger("close", event, this._uiHash());
		}
	},

	change: function(event) {
		this.element.trigger("change");
		this._trigger("change", event, this._uiHash());
	},

	select: function(event) {
		if (this._disabled(event.currentTarget)) { return false; }
		this._trigger("select", event, this._uiHash());
	},

	_closeOthers: function(event) {
		$('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function() {
			$(this).data('selectelement').selectmenu('close', event);
		});
		$('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout');
	},

	_toggle: function(event, retainFocus) {
		if ( this.listWrap.is('.' + this.widgetBaseClass + '-open') ) {
			this.close(event, retainFocus);
		} else {
			this.open(event);
		}
	},

	_formatText: function(text) {
		return (this.options.format ? this.options.format(text) : text);
	},

	_selectedIndex: function() {
		return this.element[0].selectedIndex;
	},

	_selectedOptionLi: function() {
		return this._optionLis.eq(this._selectedIndex());
	},

	_focusedOptionLi: function() {
		return this.list.find('.' + this.widgetBaseClass + '-item-focus');
	},

	_moveSelection: function(amt, recIndex) {
		// do nothing if disabled
		if (!this.options.disabled) {
			var currIndex = parseInt(this._selectedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
			// do not loop when using up key

			if (newIndex < 0) {
				newIndex = 0;
			}
			if (newIndex > this._optionLis.size() - 1) {
				newIndex = this._optionLis.size() - 1;
			}
			// Occurs when a full loop has been made
			if (newIndex === recIndex) { return false; }

			if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
				// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
				(amt > 0) ? ++amt : --amt;
				this._moveSelection(amt, newIndex);
			} else {
				return this._optionLis.eq(newIndex).trigger('mouseup');
			}
		}
	},

	_moveFocus: function(amt, recIndex) {
		if (!isNaN(amt)) {
			var currIndex = parseInt(this._focusedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
		} else {
			var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10);
		}

		if (newIndex < 0) {
			newIndex = 0;
		}
		if (newIndex > this._optionLis.size() - 1) {
			newIndex = this._optionLis.size() - 1;
		}

		//Occurs when a full loop has been made
		if (newIndex === recIndex) { return false; }

		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);

		this._focusedOptionLi().find('a:eq(0)').attr('id', '');

		if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
			// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
			(amt > 0) ? ++amt : --amt;
			this._moveFocus(amt, newIndex);
		} else {
			this._optionLis.eq(newIndex).find('a:eq(0)').attr('id',activeID).focus();
		}

		this.list.attr('aria-activedescendant', activeID);
	},

	_scrollPage: function(direction) {
		var numPerPage = Math.floor(this.list.outerHeight() / this.list.find('li:first').outerHeight());
		numPerPage = (direction == 'up' ? -numPerPage : numPerPage);
		this._moveFocus(numPerPage);
	},

	_setOption: function(key, value) {
		this.options[key] = value;
		// set
		if (key == 'disabled') {
			this.close();
			this.element
				.add(this.newelement)
				.add(this.list)[value ? 'addClass' : 'removeClass'](
					this.widgetBaseClass + '-disabled' + ' ' +
					this.namespace + '-state-disabled')
				.attr("aria-disabled", value);
		}
	},

	disable: function(index, type){
			// if options is not provided, call the parents disable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption( 'disabled', true );
			} else {
				if ( type == "optgroup" ) {
					this._disableOptgroup(index);
				} else {
					this._disableOption(index);
				}
			}
	},

	enable: function(index, type) {
			// if options is not provided, call the parents enable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption('disabled', false);
			} else {
				if ( type == "optgroup" ) {
					this._enableOptgroup(index);
				} else {
					this._enableOption(index);
				}
			}
	},

	_disabled: function(elem) {
			return $(elem).hasClass( this.namespace + '-state-disabled' );
	},


	_disableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.addClass(this.namespace + '-state-disabled')
					.find("a").attr("aria-disabled", true);
				this.element.find("option").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.removeClass( this.namespace + '-state-disabled' )
					.find("a").attr("aria-disabled", false);
				this.element.find("option").eq(index).removeAttr("disabled");
			}
	},

	_disableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.addClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", true);
				this.element.find("optgroup").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.removeClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", false);
				this.element.find("optgroup").eq(index).removeAttr("disabled");
			}
	},

	index: function(newValue) {
		if (arguments.length) {
			if (!this._disabled($(this._optionLis[newValue]))) {
				this.element[0].selectedIndex = newValue;
				this._refreshValue();
			} else {
				return false;
			}
		} else {
			return this._selectedIndex();
		}
	},

	value: function(newValue) {
		if (arguments.length) {
			this.element[0].value = newValue;
			this._refreshValue();
		} else {
			return this.element[0].value;
		}
	},

	_refreshValue: function() {
		var activeClass = (this.options.style == "popup") ? " ui-state-active" : "";
		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
		// deselect previous
		this.list
			.find('.' + this.widgetBaseClass + '-item-selected')
			.removeClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'false')
			.attr('id', '');
		// select new
		this._selectedOptionLi()
			.addClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'true')
			.attr('id', activeID);

		// toggle any class brought in from option
		var currentOptionClasses = (this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : "");
		var newOptionClasses = (this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : "");
		this.newelement
			.removeClass(currentOptionClasses)
			.data('optionClasses', newOptionClasses)
			.addClass( newOptionClasses )
			.find('.' + this.widgetBaseClass + '-status')
			.html(
				this._selectedOptionLi()
					.find('a:eq(0)')
					.html()
			);

		this.list.attr('aria-activedescendant', activeID);
	},

	_refreshPosition: function() {
		var o = this.options;

		// if its a native pop-up we need to calculate the position of the selected li
		if ( o.style == "popup" && !o.positionOptions.offset ) {
			var selected = this._selectedOptionLi();
			var _offset = "0 -" + ( selected.outerHeight() + selected.offset().top - this.list.offset().top );
		}
		// update zIndex if jQuery UI is able to process
		var zIndexElement = this.element.zIndex();
		if ( zIndexElement ) {
			this.listWrap.css( 'zIndex', zIndexElement );
		}
		this.listWrap.position({
			// set options for position plugin
			of: o.positionOptions.of || this.newelement,
			my: o.positionOptions.my,
			at: o.positionOptions.at,
			offset: o.positionOptions.offset || _offset,
			collision: o.positionOptions.collision || 'flip'
		});
	}
});

})(jQuery);
