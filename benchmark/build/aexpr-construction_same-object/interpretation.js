'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var common = require('../common.js');
var isCI = _interopDefault(require('is-ci'));

function createRectangle(width = 10, height = 20) {
    return {
        width,
        height,
        area() {
            return this.width * this.height;
        },
        aspectRatio() {
            return this.width / this.height;
        }
    }
    ;
}

let aexprConstruction = {
  numAExpr: [isCI ? 1e2 : 1e3]
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var aexprInterpretation = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _interpretationActiveExpressions = __webpack_require__(1);
	
	Object.defineProperty(exports, 'aexpr', {
	  enumerable: true,
	  get: function get() {
	    return _interpretationActiveExpressions.aexpr;
	  }
	});
	/*istanbul ignore next*/Object.defineProperty(exports, 'aexprInterpretation', {
	  enumerable: true,
	  get: function get() {
	    return _interpretationActiveExpressions.aexpr;
	  }
	});
	/*istanbul ignore next*/Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interpretationActiveExpressions.aexpr;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ActiveExpressionInterpreter = undefined;
	
	var _keys = __webpack_require__(2);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _get2 = __webpack_require__(37);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _toConsumableArray2 = __webpack_require__(47);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _set = __webpack_require__(69);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _getPrototypeOf = __webpack_require__(38);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _createClass2 = __webpack_require__(91);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(111);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(119);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	exports.aexpr = aexpr;
	
	var /*istanbul ignore next*/_interpreter = __webpack_require__(120);
	
	/*istanbul ignore next*/var _interpreter2 = _interopRequireDefault(_interpreter);
	
	var /*istanbul ignore next*/_stackEs2015Modules = __webpack_require__(128);
	
	/*istanbul ignore next*/var _stackEs2015Modules2 = _interopRequireDefault(_stackEs2015Modules);
	
	var /*istanbul ignore next*/_listener = __webpack_require__(129);
	
	var /*istanbul ignore next*/_activeExpressions = __webpack_require__(132);
	
	/*istanbul ignore next*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AEXPR_STACK = new /*istanbul ignore next*/_stackEs2015Modules2.default();
	
	/*istanbul ignore next*/var InterpreterActiveExpression = function (_BaseActiveExpression) {
	    (0, _inherits3.default)(InterpreterActiveExpression, _BaseActiveExpression);
	
	    function /*istanbul ignore next*/InterpreterActiveExpression(func, scope) {
	        /*istanbul ignore next*/var _ref;
	
	        (0, _classCallCheck3.default)(this, InterpreterActiveExpression);
	
	        for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            params[_key - 2] = arguments[_key];
	        }
	
	        /*istanbul ignore next*/var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = InterpreterActiveExpression.__proto__ || (0, _getPrototypeOf2.default)(InterpreterActiveExpression)).call.apply(_ref, [this, func].concat(params)));
	
	        /*istanbul ignore next*/_this.scope = scope;
	        /*istanbul ignore next*/_this.propertyAccessors = new /*istanbul ignore next*/_set2.default();
	
	        /*istanbul ignore next*/_this.installListeners();
	        /*istanbul ignore next*/return _this;
	    }
	
	    // TODO: remove indirection
	
	
	    (0, _createClass3.default)(InterpreterActiveExpression, [{
	        key: 'propertyAssigned',
	        value: function propertyAssigned() {
	            this.checkAndNotify();
	        }
	    }, {
	        key: 'revoke',
	        value: function revoke() {
	            this.removeListeners();
	        }
	    }, {
	        key: 'installListeners',
	        value: function installListeners() {
	            /*istanbul ignore next*/var _this2 = this;
	
	            AEXPR_STACK.withElement(this, function () {
	                /*istanbul ignore next*/ActiveExpressionInterpreter.runAndReturn. /*istanbul ignore next*/apply(ActiveExpressionInterpreter, /*istanbul ignore next*/[/*istanbul ignore next*/_this2.func, /*istanbul ignore next*/_this2.scope].concat((0, _toConsumableArray3.default)( /*istanbul ignore next*/_this2.params)));
	            });
	        }
	    }, {
	        key: 'removeListeners',
	        value: function removeListeners() {
	            this.propertyAccessors.forEach(function (propertyAccessor) {
	                propertyAccessor.selectionItems.delete(this);
	            }, this);
	            this.propertyAccessors.clear();
	        }
	    }]);
	    return InterpreterActiveExpression;
	}(_activeExpressions.BaseActiveExpression);
	
	function aexpr(func, scope) {
	    /*istanbul ignore next*/for (var _len2 = arguments.length, params = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        params[_key2 - 2] = arguments[_key2];
	    }
	
	    return (/*istanbul ignore next*/new (Function.prototype.bind.apply(InterpreterActiveExpression, [null].concat([func, scope], params)))()
	    );
	}
	
	/*istanbul ignore next*/var ActiveExpressionInterpreter = exports.ActiveExpressionInterpreter = function (_Interpreter) {
	    (0, _inherits3.default)(ActiveExpressionInterpreter, _Interpreter);
	
	    function ActiveExpressionInterpreter() {
	        (0, _classCallCheck3.default)(this, ActiveExpressionInterpreter);
	        return (0, _possibleConstructorReturn3.default)(this, (ActiveExpressionInterpreter.__proto__ || (0, _getPrototypeOf2.default)(ActiveExpressionInterpreter)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(ActiveExpressionInterpreter, [{
	        key: 'getProperty',
	        value: function getProperty(obj, name) {
	            var object = obj.valueOf(),
	                prop = name.valueOf();
	
	            /*istanbul ignore next*/_listener.Listener.watchProperty(object, prop).addHandler(AEXPR_STACK.top());
	
	            return (/*istanbul ignore next*/(0, _get3.default)(ActiveExpressionInterpreter.prototype.__proto__ || (0, _getPrototypeOf2.default)(ActiveExpressionInterpreter.prototype), 'getProperty', this).call(this, obj, name)
	            );
	        }
	    }, {
	        key: 'stepCallExpression',
	        value: function stepCallExpression() {
	            if (this.stateStack[0].arguments > 0) {
	                console.log('call expression');
	                debugger;
	            }
	            var stateStack = this.stateStack,
	                state = stateStack[0],
	                node = state.node,
	                func = state.func_;
	
	            return (/*istanbul ignore next*/(0, _get3.default)(ActiveExpressionInterpreter.prototype.__proto__ || (0, _getPrototypeOf2.default)(ActiveExpressionInterpreter.prototype), 'stepCallExpression', this).call(this)
	            );
	        }
	    }], [{
	        key: 'runAndReturn',
	        value: function runAndReturn(func) {
	            /*istanbul ignore next*/for (var _len3 = arguments.length, params = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	                params[_key3 - 2] = arguments[_key3];
	            }
	
	            /*istanbul ignore next*/var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            function argumentNameForIndex(key) {
	                return '__arg__' + key;
	            }
	
	            var i = new ActiveExpressionInterpreter( /*istanbul ignore next*/'var returnValue = (' + func.toString() + ')(' + params.map(function (value, key) /*istanbul ignore next*/{
	                return argumentNameForIndex(key);
	            }).join(', ') + ');', function (self, rootScope) {
	                //console.log('scope', scope);
	                /*istanbul ignore next*/(0, _keys2.default)(scope).forEach(function (k) {
	                    var value = scope[k];
	                    //console.log(k, value);
	                    self.setProperty(rootScope, k, self.createPseudoObject(value));
	                });
	                // TODO: delete as the relevant global objects can be inferred by analysing the local scope
	                // ["__lvVarRecorder", "jQuery", "$", "_", "lively"].forEach((k) => {
	                //     self.setProperty(rootScope, k, self.createPseudoObject(window[k]));
	                // });
	
	                params.forEach(function (value, key) {
	                    var name = argumentNameForIndex(key);
	                    self.setProperty(rootScope, name, self.createPseudoObject(value));
	                });
	            });
	            i.run();
	            return i.stateStack[0].scope.properties.returnValue.valueOf();
	        }
	    }]);
	    return ActiveExpressionInterpreter;
	}(_interpreter2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(24).Object.keys;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(5)
	  , $keys    = __webpack_require__(7);
	
	__webpack_require__(22)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(8)
	  , enumBugKeys = __webpack_require__(21);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(9)
	  , toIObject    = __webpack_require__(10)
	  , arrayIndexOf = __webpack_require__(13)(false)
	  , IE_PROTO     = __webpack_require__(17)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(11)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(12);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(10)
	  , toLength  = __webpack_require__(14)
	  , toIndex   = __webpack_require__(16);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(15)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(15)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(18)('keys')
	  , uid    = __webpack_require__(20);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(19)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(23)
	  , core    = __webpack_require__(24)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(19)
	  , core      = __webpack_require__(24)
	  , ctx       = __webpack_require__(25)
	  , hide      = __webpack_require__(27)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 24 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(28)
	  , createDesc = __webpack_require__(36);
	module.exports = __webpack_require__(32) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(35)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(32) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(32) && !__webpack_require__(33)(function(){
	  return Object.defineProperty(__webpack_require__(34)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(33)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , document = __webpack_require__(19).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(30);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(38);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(42);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	module.exports = __webpack_require__(24).Object.getPrototypeOf;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(5)
	  , $getPrototypeOf = __webpack_require__(41);
	
	__webpack_require__(22)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(9)
	  , toObject    = __webpack_require__(5)
	  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	var $Object = __webpack_require__(24).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(10)
	  , $getOwnPropertyDescriptor = __webpack_require__(45).f;
	
	__webpack_require__(22)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(36)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(35)
	  , has            = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(32) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(48);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(62);
	module.exports = __webpack_require__(24).Array.from;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {
	var $at  = __webpack_require__(51)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(52)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(15)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {
	var LIBRARY        = __webpack_require__(53)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(54)
	  , hide           = __webpack_require__(27)
	  , has            = __webpack_require__(9)
	  , Iterators      = __webpack_require__(55)
	  , $iterCreate    = __webpack_require__(56)
	  , setToStringTag = __webpack_require__(60)
	  , getPrototypeOf = __webpack_require__(41)
	  , ITERATOR       = __webpack_require__(61)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {
	var create         = __webpack_require__(57)
	  , descriptor     = __webpack_require__(36)
	  , setToStringTag = __webpack_require__(60)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(27)(IteratorPrototype, __webpack_require__(61)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(29)
	  , dPs         = __webpack_require__(58)
	  , enumBugKeys = __webpack_require__(21)
	  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(34)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(59).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(28)
	  , anObject = __webpack_require__(29)
	  , getKeys  = __webpack_require__(7);
	
	module.exports = __webpack_require__(32) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19).document && document.documentElement;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(28).f
	  , has = __webpack_require__(9)
	  , TAG = __webpack_require__(61)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(18)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(19).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {
	var ctx            = __webpack_require__(25)
	  , $export        = __webpack_require__(23)
	  , toObject       = __webpack_require__(5)
	  , call           = __webpack_require__(63)
	  , isArrayIter    = __webpack_require__(64)
	  , toLength       = __webpack_require__(14)
	  , createProperty = __webpack_require__(65)
	  , getIterFn      = __webpack_require__(66);
	
	$export($export.S + $export.F * !__webpack_require__(68)(function(iter){ }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(29);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(55)
	  , ITERATOR   = __webpack_require__(61)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {
	var $defineProperty = __webpack_require__(28)
	  , createDesc      = __webpack_require__(36);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(67)
	  , ITERATOR  = __webpack_require__(61)('iterator')
	  , Iterators = __webpack_require__(55);
	module.exports = __webpack_require__(24).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(12)
	  , TAG = __webpack_require__(61)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(61)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	__webpack_require__(50);
	__webpack_require__(72);
	__webpack_require__(76);
	__webpack_require__(88);
	module.exports = __webpack_require__(24).Set;

/***/ },
/* 71 */
/***/ function(module, exports) {



/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var global        = __webpack_require__(19)
	  , hide          = __webpack_require__(27)
	  , Iterators     = __webpack_require__(55)
	  , TO_STRING_TAG = __webpack_require__(61)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {
	var addToUnscopables = __webpack_require__(74)
	  , step             = __webpack_require__(75)
	  , Iterators        = __webpack_require__(55)
	  , toIObject        = __webpack_require__(10);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(52)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {
	var strong = __webpack_require__(77);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(83)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {
	var dP          = __webpack_require__(28).f
	  , create      = __webpack_require__(57)
	  , redefineAll = __webpack_require__(78)
	  , ctx         = __webpack_require__(25)
	  , anInstance  = __webpack_require__(79)
	  , defined     = __webpack_require__(6)
	  , forOf       = __webpack_require__(80)
	  , $iterDefine = __webpack_require__(52)
	  , step        = __webpack_require__(75)
	  , setSpecies  = __webpack_require__(81)
	  , DESCRIPTORS = __webpack_require__(32)
	  , fastKey     = __webpack_require__(82).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(27);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(25)
	  , call        = __webpack_require__(63)
	  , isArrayIter = __webpack_require__(64)
	  , anObject    = __webpack_require__(29)
	  , toLength    = __webpack_require__(14)
	  , getIterFn   = __webpack_require__(66)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {
	var global      = __webpack_require__(19)
	  , core        = __webpack_require__(24)
	  , dP          = __webpack_require__(28)
	  , DESCRIPTORS = __webpack_require__(32)
	  , SPECIES     = __webpack_require__(61)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(20)('meta')
	  , isObject = __webpack_require__(30)
	  , has      = __webpack_require__(9)
	  , setDesc  = __webpack_require__(28).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(33)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {
	var global         = __webpack_require__(19)
	  , $export        = __webpack_require__(23)
	  , meta           = __webpack_require__(82)
	  , fails          = __webpack_require__(33)
	  , hide           = __webpack_require__(27)
	  , redefineAll    = __webpack_require__(78)
	  , forOf          = __webpack_require__(80)
	  , anInstance     = __webpack_require__(79)
	  , isObject       = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(60)
	  , dP             = __webpack_require__(28).f
	  , each           = __webpack_require__(84)(0)
	  , DESCRIPTORS    = __webpack_require__(32);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(25)
	  , IObject  = __webpack_require__(11)
	  , toObject = __webpack_require__(5)
	  , toLength = __webpack_require__(14)
	  , asc      = __webpack_require__(85);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(86);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , isArray  = __webpack_require__(87)
	  , SPECIES  = __webpack_require__(61)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(12);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(23);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(89)('Set')});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(67)
	  , from    = __webpack_require__(90);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(80);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(92);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	var $Object = __webpack_require__(24).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(23);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(32), 'Object', {defineProperty: __webpack_require__(28).f});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(96);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(97);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(100);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(72);
	module.exports = __webpack_require__(99).f('iterator');

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(61);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102);
	__webpack_require__(71);
	__webpack_require__(109);
	__webpack_require__(110);
	module.exports = __webpack_require__(24).Symbol;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(19)
	  , has            = __webpack_require__(9)
	  , DESCRIPTORS    = __webpack_require__(32)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(54)
	  , META           = __webpack_require__(82).KEY
	  , $fails         = __webpack_require__(33)
	  , shared         = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(60)
	  , uid            = __webpack_require__(20)
	  , wks            = __webpack_require__(61)
	  , wksExt         = __webpack_require__(99)
	  , wksDefine      = __webpack_require__(103)
	  , keyOf          = __webpack_require__(104)
	  , enumKeys       = __webpack_require__(105)
	  , isArray        = __webpack_require__(87)
	  , anObject       = __webpack_require__(29)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(35)
	  , createDesc     = __webpack_require__(36)
	  , _create        = __webpack_require__(57)
	  , gOPNExt        = __webpack_require__(107)
	  , $GOPD          = __webpack_require__(45)
	  , $DP            = __webpack_require__(28)
	  , $keys          = __webpack_require__(7)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(108).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(46).f  = $propertyIsEnumerable;
	  __webpack_require__(106).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(53)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(27)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(19)
	  , core           = __webpack_require__(24)
	  , LIBRARY        = __webpack_require__(53)
	  , wksExt         = __webpack_require__(99)
	  , defineProperty = __webpack_require__(28).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(7)
	  , toIObject = __webpack_require__(10);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(7)
	  , gOPS    = __webpack_require__(106)
	  , pIE     = __webpack_require__(46);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(10)
	  , gOPN      = __webpack_require__(108).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(8)
	  , hiddenKeys = __webpack_require__(21).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103)('asyncIterator');

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103)('observable');

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(112);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(116);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(96);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114);
	module.exports = __webpack_require__(24).Object.setPrototypeOf;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(23);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(115).set});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(30)
	  , anObject = __webpack_require__(29);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(25)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(118);
	var $Object = __webpack_require__(24).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(23);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(57)});

/***/ },
/* 119 */
/***/ function(module, exports) {
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {
	
	/**
	 * Create a new interpreter.
	 * @param {string|!Object} code Raw JavaScript text or AST.
	 * @param {Function} opt_initFunc Optional initialization function.  Used to
	 *     define APIs.  When called it is passed the interpreter object and the
	 *     global scope object.
	 * @constructor
	 */
	
	/*istanbul ignore next*/Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(116);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _stringify = __webpack_require__(121);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _typeof2 = __webpack_require__(96);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _map = __webpack_require__(123);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _classCallCheck2 = __webpack_require__(119);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(91);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var /*istanbul ignore next*/_acornEs = __webpack_require__(127);
	
	/*istanbul ignore next*/var acorn = _interopRequireWildcard(_acornEs);
	
	/*istanbul ignore next*/function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Interpreter = function () {
	  function /*istanbul ignore next*/Interpreter(code, opt_initFunc) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, Interpreter);
	
	    if (typeof code == 'string') {
	      code = acorn.parse(code);
	    }
	    this.objectMap = new /*istanbul ignore next*/_map2.default();
	    this.ast = code;
	    this.initFunc_ = opt_initFunc;
	    this.paused_ = false;
	    // Predefine some common primitives for performance.
	    this.UNDEFINED = new Interpreter.Primitive(undefined, this);
	    this.NULL = new Interpreter.Primitive(null, this);
	    this.TRUE = new Interpreter.Primitive(true, this);
	    this.FALSE = new Interpreter.Primitive(false, this);
	    this.NUMBER_ZERO = new Interpreter.Primitive(0, this);
	    this.NUMBER_ONE = new Interpreter.Primitive(1, this);
	    this.STRING_EMPTY = new Interpreter.Primitive('', this);
	    var scope = this.createScope(this.ast, null);
	    // Fix the parent properties now that the global scope exists.
	    //this.UNDEFINED.parent = undefined;
	    //this.NULL.parent = undefined;
	    this.TRUE.parent = this.BOOLEAN;
	    this.FALSE.parent = this.BOOLEAN;
	    this.NUMBER_ZERO.parent = this.NUMBER;
	    this.NUMBER_ONE.parent = this.NUMBER;
	    this.STRING_EMPTY.parent = this.STRING;
	    this.stateStack = [{
	      node: this.ast,
	      scope: scope,
	      thisExpression: scope,
	      done: false
	    }];
	  }
	
	  /**
	   * Add more code to the interpreter.
	   * @param {string|!Object} code Raw JavaScript text or AST.
	   */
	
	
	  (0, _createClass3.default)(Interpreter, [{
	    key: 'appendCode',
	    value: function appendCode(code) {
	      var state = this.stateStack[this.stateStack.length - 1];
	      if (!state || state.node.type != 'Program') {
	        throw Error('Expecting original AST to start with a Program node.');
	      }
	      if (typeof code == 'string') {
	        code = acorn.parse(code);
	      }
	      if (!code || code.type != 'Program') {
	        throw Error('Expecting new AST to start with a Program node.');
	      }
	      // Append the new program to the old one.
	      for (var i = 0, node; node = code.body[i]; i++) {
	        state.node.body.push(node);
	      }
	      state.done = false;
	    }
	
	    /**
	     * Execute one step of the interpreter.
	     * @return {boolean} True if a step was executed, false if no more instructions.
	     */
	
	  }, {
	    key: 'step',
	    value: function step() {
	      var state = this.stateStack[0];
	      if (!state || state.node.type == 'Program' && state.done) {
	        return false;
	      } else if (this.paused_) {
	        return true;
	      }
	      this['step' + state.node.type]();
	      return true;
	    }
	
	    /**
	     * Execute the interpreter to program completion.  Vulnerable to infinite loops.
	     * @return {boolean} True if a execution is asynchonously blocked,
	     *     false if no more instructions.
	     */
	
	  }, {
	    key: 'run',
	    value: function run() {
	      while (!this.paused_ && this.step()) {}
	      return this.paused_;
	    }
	
	    /**
	     * Initialize the global scope with buitin properties and functions.
	     * @param {!Object} scope Global scope.
	     */
	
	  }, {
	    key: 'initGlobalScope',
	    value: function initGlobalScope(scope) {
	      // Initialize uneditable global properties.
	      this.setProperty(scope, 'Infinity', this.createPrimitive(Infinity), true);
	      this.setProperty(scope, 'NaN', this.createPrimitive(NaN), true);
	      this.setProperty(scope, 'undefined', this.UNDEFINED, true);
	      this.setProperty(scope, 'window', scope, true);
	      this.setProperty(scope, 'self', scope, false); // Editable.
	
	      // Initialize global objects.
	      this.initFunction(scope);
	      this.initObject(scope);
	      // Unable to set scope's parent prior (this.OBJECT did not exist).
	      scope.parent = this.OBJECT;
	      this.initArray(scope);
	      this.initNumber(scope);
	      this.initString(scope);
	      this.initBoolean(scope);
	      this.initDate(scope);
	      this.initMath(scope);
	      this.initRegExp(scope);
	      this.initJSON(scope);
	      this.initError(scope);
	
	      // Initialize global functions.
	      var thisInterpreter = this;
	      var wrapper;
	      wrapper = function /*istanbul ignore next*/wrapper(num) {
	        num = num || thisInterpreter.UNDEFINED;
	        return thisInterpreter.createPrimitive(isNaN(num.toNumber()));
	      };
	      this.setProperty(scope, 'isNaN', this.createNativeFunction(wrapper));
	      wrapper = function /*istanbul ignore next*/wrapper(num) {
	        num = num || thisInterpreter.UNDEFINED;
	        return thisInterpreter.createPrimitive(isFinite(num.toNumber()));
	      };
	      this.setProperty(scope, 'isFinite', this.createNativeFunction(wrapper));
	      wrapper = function /*istanbul ignore next*/wrapper(str) {
	        str = str || thisInterpreter.UNDEFINED;
	        return thisInterpreter.createPrimitive(parseFloat(str.toNumber()));
	      };
	      this.setProperty(scope, 'parseFloat', this.createNativeFunction(wrapper));
	      wrapper = function /*istanbul ignore next*/wrapper(str, radix) {
	        str = str || thisInterpreter.UNDEFINED;
	        radix = radix || thisInterpreter.UNDEFINED;
	        return thisInterpreter.createPrimitive(parseInt(str.toString(), radix.toNumber()));
	      };
	      this.setProperty(scope, 'parseInt', this.createNativeFunction(wrapper));
	
	      var func = this.createObject(this.FUNCTION);
	      func.eval = true;
	      this.setProperty(func, 'length', this.NUMBER_ONE, true);
	      this.setProperty(scope, 'eval', func);
	
	      var strFunctions = [[escape, 'escape'], [unescape, 'unescape'], [decodeURI, 'decodeURI'], [decodeURIComponent, 'decodeURIComponent'], [encodeURI, 'encodeURI'], [encodeURIComponent, 'encodeURIComponent']];
	      for (var i = 0; i < strFunctions.length; i++) {
	        wrapper = function (nativeFunc) {
	          return function (str) {
	            str = (str || thisInterpreter.UNDEFINED).toString();
	            try {
	              str = nativeFunc(str);
	            } catch (e) {
	              // decodeURI('%xy') will throw an error.  Catch and rethrow.
	              thisInterpreter.throwException(thisInterpreter.URI_ERROR, e.message);
	            }
	            return thisInterpreter.createPrimitive(str);
	          };
	        }(strFunctions[i][0]);
	        this.setProperty(scope, strFunctions[i][1], this.createNativeFunction(wrapper));
	      }
	
	      // Run any user-provided initialization.
	      if (this.initFunc_) {
	        this.initFunc_(this, scope);
	      }
	    }
	
	    /**
	     * Initialize the Function class.
	     * @param {!Object} scope Global scope.
	     */
	
	  }, {
	    key: 'initFunction',
	    value: function initFunction(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Function constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        if (this.parent == thisInterpreter.FUNCTION) {
	          // Called with new.
	          var newFunc = this;
	        } else {
	          var newFunc = thisInterpreter.createObject(thisInterpreter.FUNCTION);
	        }
	        if (arguments.length) {
	          var code = arguments[arguments.length - 1].toString();
	        } else {
	          var code = '';
	        }
	        var args = [];
	        for (var i = 0; i < arguments.length - 1; i++) {
	          args.push(arguments[i].toString());
	        }
	        args = args.join(', ');
	        if (args.indexOf(')') != -1) {
	          throw SyntaxError('Function arg string contains parenthesis');
	        }
	        // Interestingly, the scope for constructed functions is the global scope,
	        // even if they were constructed in some other scope.
	        newFunc.parentScope = thisInterpreter.stateStack[thisInterpreter.stateStack.length - 1].scope;
	        var ast = acorn.parse('$ = function(' + args + ') {' + code + '}');
	        newFunc.node = ast.body[0].expression.right;
	        thisInterpreter.setProperty(newFunc, 'length', thisInterpreter.createPrimitive(newFunc.node.length), true);
	        return newFunc;
	      };
	      this.FUNCTION = this.createObject(null);
	      this.setProperty(scope, 'Function', this.FUNCTION);
	      // Manually setup type and prototype because createObj doesn't recognize
	      // this object as a function (this.FUNCTION did not exist).
	      this.FUNCTION.type = 'function';
	      this.setProperty(this.FUNCTION, 'prototype', this.createObject(null));
	      this.FUNCTION.nativeFunc = wrapper;
	
	      // Create stub functions for apply and call.
	      // These are processed as special cases in stepCallExpression.
	      var node = {
	        type: 'FunctionApply_',
	        params: [],
	        id: null,
	        body: null,
	        start: 0,
	        end: 0
	      };
	      this.setProperty(this.FUNCTION.properties.prototype, 'apply', this.createFunction(node, {}), false, true);
	      node = {
	        type: 'FunctionCall_',
	        params: [],
	        id: null,
	        body: null,
	        start: 0,
	        end: 0
	      };
	      this.setProperty(this.FUNCTION.properties.prototype, 'call', this.createFunction(node, {}), false, true);
	
	      // Function has no parent to inherit from, so it needs its own mandatory
	      // toString and valueOf functions.
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        return thisInterpreter.createPrimitive(this.toString());
	      };
	      this.setProperty(this.FUNCTION.properties.prototype, 'toString', this.createNativeFunction(wrapper), false, true);
	      this.setProperty(this.FUNCTION, 'toString', this.createNativeFunction(wrapper), false, true);
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        return thisInterpreter.createPrimitive(this.valueOf());
	      };
	      this.setProperty(this.FUNCTION.properties.prototype, 'valueOf', this.createNativeFunction(wrapper), false, true);
	      this.setProperty(this.FUNCTION, 'valueOf', this.createNativeFunction(wrapper), false, true);
	    }
	
	    /**
	     * Initialize the Object class.
	     * @param {!Object} scope Global scope.
	     */
	
	  }, {
	    key: 'initObject',
	    value: function initObject(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Object constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        if (this.parent == thisInterpreter.OBJECT) {
	          // Called with new.
	          var newObj = this;
	        } else {
	          var newObj = thisInterpreter.createObject(thisInterpreter.OBJECT);
	        }
	        return newObj;
	      };
	      this.OBJECT = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'Object', this.OBJECT);
	
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        return thisInterpreter.createPrimitive(this.toString());
	      };
	      this.setProperty(this.OBJECT.properties.prototype, 'toString', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        return thisInterpreter.createPrimitive(this.valueOf());
	      };
	      this.setProperty(this.OBJECT.properties.prototype, 'valueOf', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(prop) {
	        prop = (prop || thisInterpreter.UNDEFINED).toString();
	        for (var key in this.properties) {
	          if (key == prop) {
	            return thisInterpreter.TRUE;
	          }
	        }
	        return thisInterpreter.FALSE;
	      };
	      this.setProperty(this.OBJECT.properties.prototype, 'hasOwnProperty', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(key) {
	        key = (key || thisInterpreter.UNDEFINED).toString();
	        return thisInterpreter.createPrimitive(!(key in this.nonenumerable));
	      };
	      this.setProperty(this.OBJECT.properties.prototype, 'propertyIsEnumerable', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(obj) {
	        var pseudoList = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        var i = 0;
	        for (var key in obj.properties) {
	          thisInterpreter.setProperty(pseudoList, i, thisInterpreter.createPrimitive(key));
	          i++;
	        }
	        return pseudoList;
	      };
	      this.setProperty(this.OBJECT, 'getOwnPropertyNames', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(obj) {
	        var pseudoList = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        var i = 0;
	        for (var key in obj.properties) {
	          if (key in obj.nonenumerable) {
	            continue;
	          }
	          thisInterpreter.setProperty(pseudoList, i, thisInterpreter.createPrimitive(key));
	          i++;
	        }
	        return pseudoList;
	      };
	      this.setProperty(this.OBJECT, 'keys', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(obj, prop, descriptor) {
	        prop = (prop || thisInterpreter.UNDEFINED).toString();
	        if (!(descriptor instanceof Interpreter.Object)) {
	          throw Error('Property description must be an object.');
	        }
	        return obj;
	      };
	      this.setProperty(this.OBJECT, 'defineProperty', this.createNativeFunction(wrapper), false, true);
	    }
	
	    /**
	     * Initialize the Array class.
	     * @param {!Object} scope Global scope.
	     */
	
	  }, {
	    key: 'initArray',
	    value: function initArray(scope) {
	      var thisInterpreter = this;
	      var getInt = function getInt(obj, def) {
	        // Return an integer, or the default.
	        var n = obj ? Math.floor(obj.toNumber()) : def;
	        if (isNaN(n)) {
	          n = def;
	        }
	        return n;
	      };
	      var strictComp = function strictComp(a, b) {
	        // Strict === comparison.
	        if (a.isPrimitive && b.isPrimitive) {
	          return a.data === b.data;
	        }
	        return a === b;
	      };
	      var wrapper;
	      // Array constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        if (this.parent == thisInterpreter.ARRAY) {
	          // Called with new.
	          var newArray = this;
	        } else {
	          var newArray = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        }
	        var first = arguments[0];
	        if (first && first.type == 'number') {
	          if (isNaN(thisInterpreter.arrayIndex(first))) {
	            thisInterpreter.throwException(thisInterpreter.RANGE_ERROR, 'Invalid array length');
	          }
	          newArray.length = first.data;
	        } else {
	          for (var i = 0; i < arguments.length; i++) {
	            newArray.properties[i] = arguments[i];
	          }
	          newArray.length = i;
	        }
	        return newArray;
	      };
	      this.ARRAY = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'Array', this.ARRAY);
	
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        if (this.length) {
	          var value = this.properties[this.length - 1];
	          delete this.properties[this.length - 1];
	          this.length--;
	        } else {
	          var value = thisInterpreter.UNDEFINED;
	        }
	        return value;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'pop', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        for (var i = 0; i < arguments.length; i++) {
	          this.properties[this.length] = arguments[i];
	          this.length++;
	        }
	        return thisInterpreter.createPrimitive(this.length);
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'push', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        if (this.length) {
	          var value = this.properties[0];
	          for (var i = 1; i < this.length; i++) {
	            this.properties[i - 1] = this.properties[i];
	          }
	          this.length--;
	          delete this.properties[this.length];
	        } else {
	          var value = thisInterpreter.UNDEFINED;
	        }
	        return value;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'shift', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        for (var i = this.length - 1; i >= 0; i--) {
	          this.properties[i + arguments.length] = this.properties[i];
	        }
	        this.length += arguments.length;
	        for (var i = 0; i < arguments.length; i++) {
	          this.properties[i] = arguments[i];
	        }
	        return thisInterpreter.createPrimitive(this.length);
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'unshift', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        for (var i = 0; i < this.length / 2; i++) {
	          var tmp = this.properties[this.length - i - 1];
	          this.properties[this.length - i - 1] = this.properties[i];
	          this.properties[i] = tmp;
	        }
	        return thisInterpreter.UNDEFINED;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'reverse', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(index, howmany, var_args) {
	        index = getInt(index, 0);
	        if (index < 0) {
	          index = Math.max(this.length + index, 0);
	        } else {
	          index = Math.min(index, this.length);
	        }
	        howmany = getInt(howmany, Infinity);
	        howmany = Math.min(howmany, this.length - index);
	        var removed = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        // Remove specified elements.
	        for (var i = index; i < index + howmany; i++) {
	          removed.properties[removed.length++] = this.properties[i];
	          this.properties[i] = this.properties[i + howmany];
	        }
	        // Move other element to fill the gap.
	        for (var i = index + howmany; i < this.length - howmany; i++) {
	          this.properties[i] = this.properties[i + howmany];
	        }
	        // Delete superfluous properties.
	        for (var i = this.length - howmany; i < this.length; i++) {
	          delete this.properties[i];
	        }
	        this.length -= howmany;
	        // Insert specified items.
	        for (var i = this.length - 1; i >= index; i--) {
	          this.properties[i + arguments.length - 2] = this.properties[i];
	        }
	        this.length += arguments.length - 2;
	        for (var i = 2; i < arguments.length; i++) {
	          this.properties[index + i - 2] = arguments[i];
	        }
	        return removed;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'splice', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(opt_begin, opt_end) {
	        var list = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        var begin = getInt(opt_begin, 0);
	        if (begin < 0) {
	          begin = this.length + begin;
	        }
	        begin = Math.max(0, Math.min(begin, this.length));
	        var end = getInt(opt_end, this.length);
	        if (end < 0) {
	          end = this.length + end;
	        }
	        end = Math.max(0, Math.min(end, this.length));
	        var length = 0;
	        for (var i = begin; i < end; i++) {
	          var element = thisInterpreter.getProperty(this, i);
	          thisInterpreter.setProperty(list, length++, element);
	        }
	        return list;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'slice', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(opt_separator) {
	        if (!opt_separator || opt_separator.data === undefined) {
	          var sep = undefined;
	        } else {
	          var sep = opt_separator.toString();
	        }
	        var text = [];
	        for (var i = 0; i < this.length; i++) {
	          text[i] = this.properties[i];
	        }
	        return thisInterpreter.createPrimitive(text.join(sep));
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'join', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        var list = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        var length = 0;
	        // Start by copying the current array.
	        for (var i = 0; i < this.length; i++) {
	          var element = thisInterpreter.getProperty(this, i);
	          thisInterpreter.setProperty(list, length++, element);
	        }
	        // Loop through all arguments and copy them in.
	        for (var i = 0; i < arguments.length; i++) {
	          var value = arguments[i];
	          if (thisInterpreter.isa(value, thisInterpreter.ARRAY)) {
	            for (var j = 0; j < value.length; j++) {
	              var element = thisInterpreter.getProperty(value, j);
	              thisInterpreter.setProperty(list, length++, element);
	            }
	          } else {
	            thisInterpreter.setProperty(list, length++, value);
	          }
	        }
	        return list;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'concat', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(searchElement, opt_fromIndex) {
	        searchElement = searchElement || thisInterpreter.UNDEFINED;
	        var fromIndex = getInt(opt_fromIndex, 0);
	        if (fromIndex < 0) {
	          fromIndex = this.length + fromIndex;
	        }
	        fromIndex = Math.max(0, fromIndex);
	        for (var i = fromIndex; i < this.length; i++) {
	          var element = thisInterpreter.getProperty(this, i);
	          if (strictComp(element, searchElement)) {
	            return thisInterpreter.createPrimitive(i);
	          }
	        }
	        return thisInterpreter.createPrimitive(-1);
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'indexOf', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(searchElement, opt_fromIndex) {
	        searchElement = searchElement || thisInterpreter.UNDEFINED;
	        var fromIndex = getInt(opt_fromIndex, this.length);
	        if (fromIndex < 0) {
	          fromIndex = this.length + fromIndex;
	        }
	        fromIndex = Math.min(fromIndex, this.length - 1);
	        for (var i = fromIndex; i >= 0; i--) {
	          var element = thisInterpreter.getProperty(this, i);
	          if (strictComp(element, searchElement)) {
	            return thisInterpreter.createPrimitive(i);
	          }
	        }
	        return thisInterpreter.createPrimitive(-1);
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'lastIndexOf', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(opt_compFunc) {
	        var jsList = [];
	        for (var i = 0; i < this.length; i++) {
	          jsList[i] = this.properties[i];
	        }
	        // TODO: Add custom sort comparison function(opt_compFunc).
	        jsList.sort();
	        for (var i = 0; i < jsList.length; i++) {
	          thisInterpreter.setProperty(this, i, jsList[i]);
	        }
	        return this;
	      };
	      this.setProperty(this.ARRAY.properties.prototype, 'sort', this.createNativeFunction(wrapper), false, true);
	    }
	  }, {
	    key: 'initNumber',
	
	
	    /**
	     * Initialize the Number class.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initNumber(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Number constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(value) {
	        value = value ? value.toNumber() : 0;
	        if (this.parent != thisInterpreter.NUMBER) {
	          // Called as Number().
	          return thisInterpreter.createPrimitive(value);
	        }
	        // Called as new Number().
	        this.data = value;
	        return this;
	      };
	      this.NUMBER = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'Number', this.NUMBER);
	
	      var numConsts = ['MAX_VALUE', 'MIN_VALUE', 'NaN', 'NEGATIVE_INFINITY', 'POSITIVE_INFINITY'];
	      for (var i = 0; i < numConsts.length; i++) {
	        this.setProperty(this.NUMBER, numConsts[i], this.createPrimitive(Number[numConsts[i]]));
	      }
	
	      wrapper = function /*istanbul ignore next*/wrapper(fractionDigits) {
	        fractionDigits = fractionDigits ? fractionDigits.toNumber() : undefined;
	        var n = this.toNumber();
	        return thisInterpreter.createPrimitive(n.toExponential(fractionDigits));
	      };
	      this.setProperty(this.NUMBER.properties.prototype, 'toExponential', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(digits) {
	        digits = digits ? digits.toNumber() : undefined;
	        var n = this.toNumber();
	        return thisInterpreter.createPrimitive(n.toFixed(digits));
	      };
	      this.setProperty(this.NUMBER.properties.prototype, 'toFixed', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(precision) {
	        precision = precision ? precision.toNumber() : undefined;
	        var n = this.toNumber();
	        return thisInterpreter.createPrimitive(n.toPrecision(precision));
	      };
	      this.setProperty(this.NUMBER.properties.prototype, 'toPrecision', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(radix) {
	        radix = radix ? radix.toNumber() : 10;
	        var n = this.toNumber();
	        return thisInterpreter.createPrimitive(n.toString(radix));
	      };
	      this.setProperty(this.NUMBER.properties.prototype, 'toString', this.createNativeFunction(wrapper), false, true);
	    }
	  }, {
	    key: 'initString',
	
	
	    /**
	     * Initialize the String class.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initString(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // String constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(value) {
	        value = value ? value.toString() : '';
	        if (this.parent != thisInterpreter.STRING) {
	          // Called as String().
	          return thisInterpreter.createPrimitive(value);
	        }
	        // Called as new String().
	        this.data = value;
	        return this;
	      };
	      this.STRING = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'String', this.STRING);
	
	      var functions = ['toLowerCase', 'toUpperCase', 'toLocaleLowerCase', 'toLocaleUpperCase'];
	      for (var i = 0; i < functions.length; i++) {
	        wrapper = function (nativeFunc) {
	          return function () {
	            return thisInterpreter.createPrimitive(nativeFunc.apply(this));
	          };
	        }(String.prototype[functions[i]]);
	        this.setProperty(this.STRING.properties.prototype, functions[i], this.createNativeFunction(wrapper), false, true);
	      }
	
	      // Trim function may not exist in host browser.  Write them from scratch.
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        var str = this.toString();
	        return thisInterpreter.createPrimitive(str.replace(/^\s+|\s+$/g, ''));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'trim', this.createNativeFunction(wrapper), false, true);
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        var str = this.toString();
	        return thisInterpreter.createPrimitive(str.replace(/^\s+/g, ''));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'trimLeft', this.createNativeFunction(wrapper), false, true);
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        var str = this.toString();
	        return thisInterpreter.createPrimitive(str.replace(/\s+$/g, ''));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'trimRight', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(num) {
	        var str = this.toString();
	        num = (num || thisInterpreter.UNDEFINED).toNumber();
	        return thisInterpreter.createPrimitive(str.charAt(num));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'charAt', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(num) {
	        var str = this.toString();
	        num = (num || thisInterpreter.UNDEFINED).toNumber();
	        return thisInterpreter.createPrimitive(str.charCodeAt(num));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'charCodeAt', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(searchValue, fromIndex) {
	        var str = this.toString();
	        searchValue = (searchValue || thisInterpreter.UNDEFINED).toString();
	        fromIndex = fromIndex ? fromIndex.toNumber() : undefined;
	        return thisInterpreter.createPrimitive(str.indexOf(searchValue, fromIndex));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'indexOf', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(searchValue, fromIndex) {
	        var str = this.toString();
	        searchValue = (searchValue || thisInterpreter.UNDEFINED).toString();
	        fromIndex = fromIndex ? fromIndex.toNumber() : undefined;
	        return thisInterpreter.createPrimitive(str.lastIndexOf(searchValue, fromIndex));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'lastIndexOf', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(compareString) {
	        var str = this.toString();
	        compareString = (compareString || thisInterpreter.UNDEFINED).toString();
	        return thisInterpreter.createPrimitive(str.localeCompare(compareString));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'localeCompare', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(separator, limit) {
	        var str = this.toString();
	        if (separator) {
	          separator = thisInterpreter.isa(separator, thisInterpreter.REGEXP) ? separator.data : separator.toString();
	        } else {
	          // is this really necessary?
	          separator = undefined;
	        }
	        limit = limit ? limit.toNumber() : undefined;
	        var jsList = str.split(separator, limit);
	        var pseudoList = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        for (var i = 0; i < jsList.length; i++) {
	          thisInterpreter.setProperty(pseudoList, i, thisInterpreter.createPrimitive(jsList[i]));
	        }
	        return pseudoList;
	      };
	      this.setProperty(this.STRING.properties.prototype, 'split', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(indexA, indexB) {
	        var str = this.toString();
	        indexA = indexA ? indexA.toNumber() : undefined;
	        indexB = indexB ? indexB.toNumber() : undefined;
	        return thisInterpreter.createPrimitive(str.substring(indexA, indexB));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'substring', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(start, length) {
	        var str = this.toString();
	        start = start ? start.toNumber() : undefined;
	        length = length ? length.toNumber() : undefined;
	        return thisInterpreter.createPrimitive(str.substr(start, length));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'substr', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        var str = this.toString();
	        for (var i = 0; i < arguments.length; i++) {
	          str += arguments[i].toString();
	        }
	        return thisInterpreter.createPrimitive(str);
	      };
	      this.setProperty(this.STRING.properties.prototype, 'concat', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(beginSlice, endSlice) {
	        var str = this.toString();
	        beginSlice = beginSlice ? beginSlice.toNumber() : undefined;
	        endSlice = endSlice ? endSlice.toNumber() : undefined;
	        return thisInterpreter.createPrimitive(str.slice(beginSlice, endSlice));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'slice', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(regexp) {
	        var str = this.toString();
	        regexp = regexp ? regexp.data : undefined;
	        var match = str.match(regexp);
	        if (match === null) {
	          return thisInterpreter.NULL;
	        }
	        var pseudoList = thisInterpreter.createObject(thisInterpreter.ARRAY);
	        for (var i = 0; i < match.length; i++) {
	          thisInterpreter.setProperty(pseudoList, i, thisInterpreter.createPrimitive(match[i]));
	        }
	        return pseudoList;
	      };
	      this.setProperty(this.STRING.properties.prototype, 'match', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(regexp) {
	        var str = this.toString();
	        regexp = regexp ? regexp.data : undefined;
	        return thisInterpreter.createPrimitive(str.search(regexp));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'search', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(substr, newSubStr) {
	        var str = this.toString();
	        substr = (substr || thisInterpreter.UNDEFINED).valueOf();
	        newSubStr = (newSubStr || thisInterpreter.UNDEFINED).toString();
	        return thisInterpreter.createPrimitive(str.replace(substr, newSubStr));
	      };
	      this.setProperty(this.STRING.properties.prototype, 'replace', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(var_args) {
	        for (var i = 0; i < arguments.length; i++) {
	          arguments[i] = arguments[i].toNumber();
	        }
	        return thisInterpreter.createPrimitive(String.fromCharCode.apply(String, arguments));
	      };
	      this.setProperty(this.STRING, 'fromCharCode', this.createNativeFunction(wrapper), false, true);
	    }
	  }, {
	    key: 'initBoolean',
	
	
	    /**
	     * Initialize the Boolean class.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initBoolean(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Boolean constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(value) {
	        value = value ? value.toBoolean() : false;
	        if (this.parent != thisInterpreter.BOOLEAN) {
	          // Called as Boolean().
	          return thisInterpreter.createPrimitive(value);
	        }
	        // Called as new Boolean().
	        this.data = value;
	        return this;
	      };
	      this.BOOLEAN = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'Boolean', this.BOOLEAN);
	    }
	  }, {
	    key: 'initDate',
	
	
	    /**
	     * Initialize the Date class.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initDate(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Date constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(a, b, c, d, e, f, h) {
	        if (this.parent == thisInterpreter.DATE) {
	          // Called with new.
	          var newDate = this;
	        } else {
	          var newDate = thisInterpreter.createObject(thisInterpreter.DATE);
	        }
	        if (!arguments.length) {
	          newDate.data = new Date();
	        } else if (arguments.length == 1 && (a.type == 'string' || thisInterpreter.isa(a, thisInterpreter.STRING))) {
	          newDate.data = new Date(a.toString());
	        } else {
	          var args = [null];
	          for (var i = 0; i < arguments.length; i++) {
	            args[i + 1] = arguments[i] ? arguments[i].toNumber() : undefined;
	          }
	          newDate.data = new (Function.prototype.bind.apply(Date, args))();
	        }
	        return newDate;
	      };
	      this.DATE = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'Date', this.DATE);
	
	      // Static methods on Date.
	      wrapper = function /*istanbul ignore next*/wrapper() {
	        return thisInterpreter.createPrimitive(new Date().getTime());
	      };
	      this.setProperty(this.DATE, 'now', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(dateString) {
	        dateString = dateString ? dateString.toString() : undefined;
	        return thisInterpreter.createPrimitive(Date.parse(dateString));
	      };
	      this.setProperty(this.DATE, 'parse', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(a, b, c, d, e, f, h) {
	        var args = [];
	        for (var i = 0; i < arguments.length; i++) {
	          args[i] = arguments[i] ? arguments[i].toNumber() : undefined;
	        }
	        return thisInterpreter.createPrimitive(Date.UTC.apply(Date, args));
	      };
	      this.setProperty(this.DATE, 'UTC', this.createNativeFunction(wrapper), false, true);
	
	      // Getter methods.
	      var getFunctions = ['getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds', 'getMinutes', 'getMonth', 'getSeconds', 'getTime', 'getTimezoneOffset', 'getUTCDate', 'getUTCDay', 'getUTCFullYear', 'getUTCHours', 'getUTCMilliseconds', 'getUTCMinutes', 'getUTCMonth', 'getUTCSeconds', 'getYear'];
	      for (var i = 0; i < getFunctions.length; i++) {
	        wrapper = function (nativeFunc) {
	          return function () {
	            return thisInterpreter.createPrimitive(this.data[nativeFunc]());
	          };
	        }(getFunctions[i]);
	        this.setProperty(this.DATE.properties.prototype, getFunctions[i], this.createNativeFunction(wrapper), false, true);
	      }
	
	      // Setter methods.
	      var setFunctions = ['setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds', 'setYear'];
	      for (var i = 0; i < setFunctions.length; i++) {
	        wrapper = function (nativeFunc) {
	          return function (var_args) {
	            var args = [];
	            for (var i = 0; i < arguments.length; i++) {
	              args[i] = arguments[i] ? arguments[i].toNumber() : undefined;
	            }
	            return thisInterpreter.createPrimitive(this.data[nativeFunc].apply(this.data, args));
	          };
	        }(setFunctions[i]);
	        this.setProperty(this.DATE.properties.prototype, setFunctions[i], this.createNativeFunction(wrapper), false, true);
	      }
	
	      // Conversion getter methods.
	      getFunctions = ['toDateString', 'toISOString', 'toGMTString', 'toLocaleDateString', 'toLocaleString', 'toLocaleTimeString', 'toTimeString', 'toUTCString'];
	      for (var i = 0; i < getFunctions.length; i++) {
	        wrapper = function (nativeFunc) {
	          return function () {
	            return thisInterpreter.createPrimitive(this.data[nativeFunc]());
	          };
	        }(getFunctions[i]);
	        this.setProperty(this.DATE.properties.prototype, getFunctions[i], this.createNativeFunction(wrapper), false, true);
	      }
	    }
	  }, {
	    key: 'initMath',
	
	
	    /**
	     * Initialize Math object.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initMath(scope) {
	      var thisInterpreter = this;
	      var myMath = this.createObject(this.OBJECT);
	      this.setProperty(scope, 'Math', myMath);
	      var mathConsts = ['E', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'PI', 'SQRT1_2', 'SQRT2'];
	      for (var i = 0; i < mathConsts.length; i++) {
	        this.setProperty(myMath, mathConsts[i], this.createPrimitive(Math[mathConsts[i]]), false, true);
	      }
	      var numFunctions = ['abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor', 'log', 'max', 'min', 'pow', 'random', 'round', 'sin', 'sqrt', 'tan'];
	      for (var i = 0; i < numFunctions.length; i++) {
	        var wrapper = function (nativeFunc) {
	          return function () {
	            for (var j = 0; j < arguments.length; j++) {
	              arguments[j] = arguments[j].toNumber();
	            }
	            return thisInterpreter.createPrimitive(nativeFunc.apply(Math, arguments));
	          };
	        }(Math[numFunctions[i]]);
	        this.setProperty(myMath, numFunctions[i], this.createNativeFunction(wrapper), false, true);
	      }
	    }
	  }, {
	    key: 'initRegExp',
	
	
	    /**
	     * Initialize Regular Expression object.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initRegExp(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Regex constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(pattern, flags) {
	        if (this.parent == thisInterpreter.REGEXP) {
	          // Called with new.
	          var rgx = this;
	        } else {
	          var rgx = thisInterpreter.createObject(thisInterpreter.REGEXP);
	        }
	        pattern = pattern ? pattern.toString() : '';
	        flags = flags ? flags.toString() : '';
	        thisInterpreter.createRegExp(rgx, new RegExp(pattern, flags));
	        return rgx;
	      };
	      this.REGEXP = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'RegExp', this.REGEXP);
	
	      wrapper = function /*istanbul ignore next*/wrapper(str) {
	        str = str.toString();
	        return thisInterpreter.createPrimitive(this.data.test(str));
	      };
	      this.setProperty(this.REGEXP.properties.prototype, 'test', this.createNativeFunction(wrapper), false, true);
	
	      wrapper = function /*istanbul ignore next*/wrapper(str) {
	        str = str.toString();
	        // Get lastIndex from wrapped regex, since this is settable.
	        this.data.lastIndex = thisInterpreter.getProperty(this, 'lastIndex').toNumber();
	        var match = this.data.exec(str);
	        thisInterpreter.setProperty(this, 'lastIndex', thisInterpreter.createPrimitive(this.data.lastIndex));
	
	        if (match) {
	          var result = thisInterpreter.createObject(thisInterpreter.ARRAY);
	          for (var i = 0; i < match.length; i++) {
	            thisInterpreter.setProperty(result, i, thisInterpreter.createPrimitive(match[i]));
	          }
	          // match has additional properties.
	          thisInterpreter.setProperty(result, 'index', thisInterpreter.createPrimitive(match.index));
	          thisInterpreter.setProperty(result, 'input', thisInterpreter.createPrimitive(match.input));
	          return result;
	        }
	        return thisInterpreter.NULL;
	      };
	      this.setProperty(this.REGEXP.properties.prototype, 'exec', this.createNativeFunction(wrapper), false, true);
	    }
	  }, {
	    key: 'createPseudoObject',
	
	
	    /**
	     * Converts from native JS value to a JS interpreter object.
	     * @param {*} nativeObj The native JS object to be converted.
	     * @return {!Object} The equivalent this.OBJECT.
	     */
	    value: function createPseudoObject(nativeObj) {
	      var pseudoObject = this.objectMap.get(nativeObj);
	      if (pseudoObject) {
	        return pseudoObject;
	      } else if (typeof nativeObj === 'function') {
	        pseudoObject = this.createNativeFunction(nativeObj);
	      } else if ( /*istanbul ignore next*/(typeof nativeObj === 'undefined' ? 'undefined' : (0, _typeof3.default)(nativeObj)) !== 'object') {
	        return this.createPrimitive(nativeObj);
	      } else if (nativeObj instanceof Array) {
	        // Array.
	        pseudoObject = this.createObject(this.ARRAY);
	        for (var i = 0; i < nativeObj.length; i++) {
	          this.setProperty(pseudoObject, i, this.createPseudoObject(nativeObj[i]));
	        }
	      } else {
	        // Object.
	        pseudoObject = this.createObject(this.OBJECT);
	        pseudoObject.isInitialized = false;
	      }
	      this.objectMap.set(nativeObj, pseudoObject);
	      pseudoObject.data = nativeObj;
	      return pseudoObject;
	    }
	
	    /**
	     * Initialize JSON object.
	     * @param {!Object} scope Global scope.
	     */
	
	  }, {
	    key: 'initJSON',
	    value: function initJSON(scope) {
	      var thisInterpreter = this;
	      var myJSON = thisInterpreter.createObject(this.OBJECT);
	      this.setProperty(scope, 'JSON', myJSON);
	
	      var wrapper = function (nativeFunc) {
	        return function () {
	          var arg = arguments[0].data;
	          var nativeObj = nativeFunc.call(JSON, arg);
	          return thisInterpreter.createPseudoObject(nativeObj);
	        };
	      }(JSON.parse);
	      this.setProperty(myJSON, 'parse', this.createNativeFunction(wrapper));
	
	      /**
	       * Converts from this.OBJECT object to native JS object.
	       * @param {!Object} obj The this.OBJECT object to be converted.
	       * @return {*} The equivalent native JS object or value.
	       */
	      function toNativeObject(obj) {
	        if (obj.isPrimitive) {
	          return obj.data;
	        }
	
	        var nativeObj;
	        if (obj.length) {
	          // Array.
	          nativeObj = [];
	          for (var i = 0; i < obj.length; i++) {
	            nativeObj[i] = toNativeObject(obj.properties[i]);
	          }
	        } else {
	          // Object.
	          nativeObj = {};
	          for (var key in obj.properties) {
	            nativeObj[key] = toNativeObject(obj.properties[key]);
	          }
	        }
	
	        return nativeObj;
	      }
	
	      wrapper = function (nativeFunc) {
	        return function () {
	          var arg = toNativeObject(arguments[0]);
	          return thisInterpreter.createPrimitive(nativeFunc.call(JSON, arg));
	        };
	      }( /*istanbul ignore next*/_stringify2.default);
	      this.setProperty(myJSON, 'stringify', this.createNativeFunction(wrapper));
	    }
	  }, {
	    key: 'initError',
	
	
	    /**
	     * Initialize the Error class.
	     * @param {!Object} scope Global scope.
	     */
	    value: function initError(scope) {
	      var thisInterpreter = this;
	      var wrapper;
	      // Error constructor.
	      wrapper = function /*istanbul ignore next*/wrapper(opt_message) {
	        if (this.parent == thisInterpreter.ERROR) {
	          // Called with new.
	          var newError = this;
	        } else {
	          var newError = thisInterpreter.createObject(thisInterpreter.ERROR);
	        }
	        if (opt_message) {
	          thisInterpreter.setProperty(newError, 'message', thisInterpreter.createPrimitive(String(opt_message)), false, true);
	        }
	        return newError;
	      };
	      this.ERROR = this.createNativeFunction(wrapper);
	      this.setProperty(scope, 'Error', this.ERROR);
	      this.setProperty(this.ERROR.properties.prototype, 'message', this.STRING_EMPTY, false, true);
	      this.setProperty(this.ERROR.properties.prototype, 'name', this.createPrimitive('Error'), false, true);
	
	      // Create half a dozen error subclasses.
	      var errors = {
	        EVAL_ERROR: 'EvalError',
	        RANGE_ERROR: 'RangeError',
	        REFERENCE_ERROR: 'ReferenceError',
	        SYNTAX_ERROR: 'SyntaxError',
	        TYPE_ERROR: 'TypeError',
	        URI_ERROR: 'URIError'
	      };
	      for (var constName in errors) {
	        var errorName = errors[constName];
	        //EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
	        wrapper = function /*istanbul ignore next*/wrapper(name) {
	          return function (opt_message) {
	            if (thisInterpreter.isa(this.parent, thisInterpreter.ERROR)) {
	              // Called with new.
	              var newError = this;
	            } else {
	              var newError = thisInterpreter.createObject(thisInterpreter[name]);
	            }
	            if (opt_message) {
	              thisInterpreter.setProperty(newError, 'message', thisInterpreter.createPrimitive(String(opt_message)), false, true);
	            }
	            return newError;
	          };
	        };
	        this[constName] = this.createNativeFunction(wrapper(constName));
	        this.setProperty(this[constName], 'prototype', this.createObject(this.ERROR));
	        this.setProperty(this[constName].properties.prototype, 'name', this.createPrimitive(errorName), false, true);
	        this.setProperty(scope, errorName, this[constName]);
	      }
	    }
	  }, {
	    key: 'isa',
	
	
	    /**
	     * Is an object of a certain class?
	     * @param {Object} child Object to check.
	     * @param {Object} parent Constructor of object.
	     * @return {boolean} True if object is the class or inherits from it.
	     *     False otherwise.
	     */
	    value: function isa(child, parent) {
	      if (!child || !parent) {
	        return false;
	      }
	      while (child.parent != parent) {
	        if (!child.parent || !child.parent.properties.prototype) {
	          return false;
	        }
	        child = child.parent.properties.prototype;
	      }
	      return true;
	    }
	  }, {
	    key: 'comp',
	
	
	    /**
	     * Compares two objects against each other.
	     * @param {!Object} a First object.
	     * @param {!Object} b Second object.
	     * @return {number} -1 if a is smaller, 0 if a == b, 1 if a is bigger,
	     *     NaN if they are not comparable.
	     */
	    value: function comp(a, b) {
	      if (a.isPrimitive && typeof a == 'number' && isNaN(a.data) || b.isPrimitive && typeof b == 'number' && isNaN(b.data)) {
	        return NaN;
	      }
	      if (a.isPrimitive && b.isPrimitive) {
	        a = a.data;
	        b = b.data;
	      } else {
	        // TODO: Handle other types.
	        return NaN;
	      }
	      if (a < b) {
	        return -1;
	      } else if (a > b) {
	        return 1;
	      }
	      return 0;
	    }
	  }, {
	    key: 'arrayIndex',
	
	
	    /**
	     * Is a value a legal integer for an array?
	     * @param {*} n Value to check.
	     * @return {number} Zero, or a positive integer if the value can be
	     *     converted to such.  NaN otherwise.
	     */
	    value: function arrayIndex(n) {
	      n = Number(n);
	      if (!isFinite(n) || n != Math.floor(n) || n < 0) {
	        return NaN;
	      }
	      return n;
	    }
	  }, {
	    key: 'createPrimitive',
	
	
	    /**
	     * Create a new data object for a primitive.
	     * @param {number|string|boolean|null|undefined|RegExp} data Data to
	     *     encapsulate.
	     * @return {!Object} New data object.
	     */
	    value: function createPrimitive(data) {
	      // Reuse a predefined primitive constant if possible.
	      if (data === undefined) {
	        return this.UNDEFINED;
	      } else if (data === null) {
	        return this.NULL;
	      } else if (data === true) {
	        return this.TRUE;
	      } else if (data === false) {
	        return this.FALSE;
	      } else if (data === 0) {
	        return this.NUMBER_ZERO;
	      } else if (data === 1) {
	        return this.NUMBER_ONE;
	      } else if (data === '') {
	        return this.STRING_EMPTY;
	      } else if (data instanceof RegExp) {
	        return this.createRegExp(this.createObject(this.REGEXP), data);
	      }
	      return new Interpreter.Primitive(data, this);
	    }
	  }, {
	    key: 'createObject',
	
	
	    /**
	     * Create a new data object.
	     * @param {Object} parent Parent constructor function.
	     * @return {!Object} New data object.
	     */
	    value: function createObject(parent) {
	      var obj = new Interpreter.Object(parent);
	      // Functions have prototype objects.
	      if (this.isa(obj, this.FUNCTION)) {
	        obj.type = 'function';
	        this.setProperty(obj, 'prototype', this.createObject(this.OBJECT || null));
	      }
	      // Arrays have length.
	      if (this.isa(obj, this.ARRAY)) {
	        obj.length = 0;
	        obj.toString = function () {
	          var strs = [];
	          for (var i = 0; i < this.length; i++) {
	            strs[i] = this.properties[i] == undefined || this.properties[i] == null ? '' : this.properties[i].toString();
	          }
	          return strs.join(',');
	        };
	      }
	      return obj;
	    }
	  }, {
	    key: 'createRegExp',
	
	
	    /**
	     * Creates a new regular expression object.
	     * @param {Object} obj The existing object to set.
	     * @param {Object} data The native regular expression.
	     * @return {!Object} New regular expression object.
	     */
	    value: function createRegExp(obj, data) {
	      obj.data = data;
	      // lastIndex is settable, all others are read-only attributes
	      this.setProperty(obj, 'lastIndex', this.createPrimitive(obj.data.lastIndex), false, true);
	      this.setProperty(obj, 'source', this.createPrimitive(obj.data.source), true, true);
	      this.setProperty(obj, 'global', this.createPrimitive(obj.data.global), true, true);
	      this.setProperty(obj, 'ignoreCase', this.createPrimitive(obj.data.ignoreCase), true, true);
	      this.setProperty(obj, 'multiline', this.createPrimitive(obj.data.multiline), true, true);
	      // Override a couple of Object's conversion functions.
	      obj.toString = function () {
	        return String(this.data);
	      };
	      obj.valueOf = function () {
	        return this.data;
	      };
	      return obj;
	    }
	  }, {
	    key: 'createFunction',
	
	
	    /**
	     * Create a new function.
	     * @param {Object} node AST node defining the function.
	     * @param {Object} opt_scope Optional parent scope.
	     * @return {!Object} New function.
	     */
	    value: function createFunction(node, opt_scope) {
	      var func = this.createObject(this.FUNCTION);
	      func.parentScope = opt_scope || this.getScope();
	      func.node = node;
	      this.setProperty(func, 'length', this.createPrimitive(func.node.params.length), true);
	      return func;
	    }
	  }, {
	    key: 'createNativeFunction',
	
	
	    /**
	     * Create a new native function.
	     * @param {!Function} nativeFunc JavaScript function.
	     * @return {!Object} New function.
	     */
	    value: function createNativeFunction(nativeFunc) {
	      var func = this.createObject(this.FUNCTION);
	      func.nativeFunc = nativeFunc;
	      this.setProperty(func, 'length', this.createPrimitive(nativeFunc.length), true);
	      return func;
	    }
	  }, {
	    key: 'createAsyncFunction',
	
	
	    /**
	     * Create a new native asynchronous function.
	     * @param {!Function} asyncFunc JavaScript function.
	     * @return {!Object} New function.
	     */
	    value: function createAsyncFunction(asyncFunc) {
	      var func = this.createObject(this.FUNCTION);
	      func.asyncFunc = asyncFunc;
	      this.setProperty(func, 'length', this.createPrimitive(asyncFunc.length), true);
	      return func;
	    }
	  }, {
	    key: 'getProperty',
	
	
	    /**
	     * Fetch a property value from a data object.
	     * @param {!Object} obj Data object.
	     * @param {*} name Name of property.
	     * @return {!Object} Property value (may be UNDEFINED).
	     */
	    value: function getProperty(obj, name) {
	      name = name.toString();
	      if (obj == this.UNDEFINED || obj == this.NULL) {
	        this.throwException(this.TYPE_ERROR, "Cannot read property '" + name + "' of " + obj);
	      }
	      // Special cases for magic length property.
	      if (this.isa(obj, this.STRING)) {
	        if (name == 'length') {
	          return this.createPrimitive(obj.data.length);
	        }
	        var n = this.arrayIndex(name);
	        if (!isNaN(n) && n < obj.data.length) {
	          return this.createPrimitive(obj.data[n]);
	        }
	      } else if (this.isa(obj, this.ARRAY) && name == 'length') {
	        return this.createPrimitive(obj.length);
	      }
	      while (true) {
	        if (obj.isInitialized === false) {
	          // lazy wrapping
	          var nativeObject = obj.data;
	          for (var key in nativeObject) {
	            this.setProperty(obj, key, this.createPseudoObject(nativeObject[key]));
	          }
	          obj.isInitialized = true;
	        }
	        if (obj.properties && name in obj.properties) {
	          return obj.properties[name];
	        }
	        if (obj.parent && obj.parent.properties && obj.parent.properties.prototype) {
	          obj = obj.parent.properties.prototype;
	        } else {
	          // No parent, reached the top.
	          break;
	        }
	      }
	      return this.UNDEFINED;
	    }
	  }, {
	    key: 'hasProperty',
	
	
	    /**
	     * Does the named property exist on a data object.
	     * @param {!Object} obj Data object.
	     * @param {*} name Name of property.
	     * @return {boolean} True if property exists.
	     */
	    value: function hasProperty(obj, name) {
	      name = name.toString();
	      if (obj.isPrimitive) {
	        throw TypeError('Primitive data type has no properties');
	      }
	      if (name == 'length' && (this.isa(obj, this.STRING) || this.isa(obj, this.ARRAY))) {
	        return true;
	      }
	      if (this.isa(obj, this.STRING)) {
	        var n = this.arrayIndex(name);
	        if (!isNaN(n) && n < obj.data.length) {
	          return true;
	        }
	      }
	      while (true) {
	        if (obj.properties && name in obj.properties) {
	          return true;
	        }
	        if (obj.parent && obj.parent.properties && obj.parent.properties.prototype) {
	          obj = obj.parent.properties.prototype;
	        } else {
	          // No parent, reached the top.
	          break;
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'setProperty',
	
	
	    /**
	     * Set a property value on a data object.
	     * @param {!Object} obj Data object.
	     * @param {*} name Name of property.
	     * @param {!Object} value New property value.
	     * @param {boolean} opt_fixed Unchangeable property if true.
	     * @param {boolean} opt_nonenum Non-enumerable property if true.
	     */
	    value: function setProperty(obj, name, value, opt_fixed, opt_nonenum) {
	      name = name.toString();
	      if ( /*istanbul ignore next*/(typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) != 'object') {
	        throw Error('Failure to wrap a value: ' + value);
	      }
	      if (obj == this.UNDEFINED || obj == this.NULL) {
	        this.throwException(this.TYPE_ERROR, "Cannot set property '" + name + "' of " + obj);
	      }
	      if (obj.isPrimitive || obj.fixed[name]) {
	        return;
	      }
	      if (this.isa(obj, this.STRING)) {
	        var n = this.arrayIndex(name);
	        if (name == 'length' || !isNaN(n) && n < obj.data.length) {
	          // Can't set length or letters on Strings.
	          return;
	        }
	      }
	      if (this.isa(obj, this.ARRAY)) {
	        // Arrays have a magic length variable that is bound to the elements.
	        var i;
	        if (name == 'length') {
	          // Delete elements if length is smaller.
	          var newLength = this.arrayIndex(value.toNumber());
	          if (isNaN(newLength)) {
	            this.throwException(this.RANGE_ERROR, 'Invalid array length');
	          }
	          if (newLength < obj.length) {
	            for (i in obj.properties) {
	              i = this.arrayIndex(i);
	              if (!isNaN(i) && newLength <= i) {
	                delete obj.properties[i];
	              }
	            }
	          }
	          obj.length = newLength;
	          return; // Don't set a real length property.
	        } else if (!isNaN(i = this.arrayIndex(name))) {
	          // Increase length if this index is larger.
	          obj.length = Math.max(obj.length, i + 1);
	        }
	      }
	      // Set the property.
	      obj.properties[name] = value;
	      if (opt_fixed) {
	        obj.fixed[name] = true;
	      }
	      if (opt_nonenum) {
	        obj.nonenumerable[name] = true;
	      }
	    }
	  }, {
	    key: 'deleteProperty',
	
	
	    /**
	     * Delete a property value on a data object.
	     * @param {!Object} obj Data object.
	     * @param {*} name Name of property.
	     * @return {boolean} True if deleted, false if undeletable.
	     */
	    value: function deleteProperty(obj, name) {
	      name = name.toString();
	      if (obj.isPrimitive || obj.fixed[name]) {
	        return false;
	      }
	      if (name == 'length' && this.isa(obj, this.ARRAY)) {
	        return false;
	      }
	      return delete obj.properties[name];
	    }
	  }, {
	    key: 'getScope',
	
	
	    /**
	     * Returns the current scope from the stateStack.
	     * @return {!Object} Current scope dictionary.
	     */
	    value: function getScope() {
	      for (var i = 0; i < this.stateStack.length; i++) {
	        if (this.stateStack[i].scope) {
	          return this.stateStack[i].scope;
	        }
	      }
	      throw Error('No scope found.');
	    }
	  }, {
	    key: 'createScope',
	
	
	    /**
	     * Create a new scope dictionary.
	     * @param {!Object} node AST node defining the scope container
	     *     (e.g. a function).
	     * @param {Object} parentScope Scope to link to.
	     * @return {!Object} New scope.
	     */
	    value: function createScope(node, parentScope) {
	      var scope = this.createObject(null);
	      scope.parentScope = parentScope;
	      if (!parentScope) {
	        this.initGlobalScope(scope);
	      }
	      this.populateScope_(node, scope);
	
	      // Determine if this scope starts with 'use strict'.
	      scope.strict = false;
	      if (parentScope && parentScope.strict) {
	        scope.strict = true;
	      } else {
	        var firstNode = node.body && node.body[0];
	        if (firstNode && firstNode.expression && firstNode.expression.type == 'Literal' && firstNode.expression.value == 'use strict') {
	          scope.strict = true;
	        }
	      }
	      return scope;
	    }
	  }, {
	    key: 'createSpecialScope',
	
	
	    /**
	     * Create a new special scope dictionary. Similar to createScope(), but
	     * doesn't assume that the scope is for a function body. This is used for
	     * the catch clause and with statement.
	     * @param {!Object} parentScope Scope to link to.
	     * @param {Object=} opt_scope Optional object to transform into scope.
	     * @return {!Object} New scope.
	     */
	    value: function createSpecialScope(parentScope, opt_scope) {
	      if (!parentScope) {
	        throw Error('parentScope required');
	      }
	      var scope = opt_scope || this.createObject(null);
	      scope.parentScope = parentScope;
	      scope.strict = parentScope.strict;
	      return scope;
	    }
	  }, {
	    key: 'getValueFromScope',
	
	
	    /**
	     * Retrieves a value from the scope chain.
	     * @param {!Object} name Name of variable.
	     * @return {!Object} The value.
	     */
	    value: function getValueFromScope(name) {
	      var scope = this.getScope();
	      var nameStr = name.toString();
	      while (scope) {
	        if (nameStr in scope.properties) {
	          return scope.properties[nameStr];
	        }
	        scope = scope.parentScope;
	      }
	      /**
	       * Lazy lookup for global variables
	       */
	      // TODO: support other js environments like service worker and node by checking what the global scope is
	      if (nameStr in window) {
	        return this.createPseudoObject(window[nameStr]);
	      }
	      console.log(nameStr, this);
	      this.throwException(this.REFERENCE_ERROR, nameStr + ' is not defined');
	      return this.UNDEFINED;
	    }
	  }, {
	    key: 'setValueToScope',
	
	
	    /**
	     * Sets a value to the current scope.
	     * @param {!Object} name Name of variable.
	     * @param {!Object} value Value.
	     */
	    value: function setValueToScope(name, value) {
	      var scope = this.getScope();
	      var strict = scope.strict;
	      var nameStr = name.toString();
	      while (scope) {
	        if (nameStr in scope.properties || !strict && !scope.parentScope) {
	          if (!scope.fixed[nameStr]) {
	            scope.properties[nameStr] = value;
	          }
	          return;
	        }
	        scope = scope.parentScope;
	      }
	      this.throwException(this.REFERENCE_ERROR, nameStr + ' is not defined');
	    }
	  }, {
	    key: 'populateScope_',
	
	
	    /**
	     * Create a new scope for the given node.
	     * @param {!Object} node AST node (program or function).
	     * @param {!Object} scope Scope dictionary to populate.
	     * @private
	     */
	    value: function populateScope_(node, scope) {
	      if (node.type == 'VariableDeclaration') {
	        for (var i = 0; i < node.declarations.length; i++) {
	          this.setProperty(scope, node.declarations[i].id.name, this.UNDEFINED);
	        }
	      } else if (node.type == 'FunctionDeclaration') {
	        this.setProperty(scope, node.id.name, this.createFunction(node, scope));
	        return; // Do not recurse into function.
	      } else if (node.type == 'FunctionExpression') {
	        return; // Do not recurse into function.
	      }
	      var thisIterpreter = this;
	      function recurse(child) {
	        if (child.constructor == thisIterpreter.ast.constructor) {
	          thisIterpreter.populateScope_(child, scope);
	        }
	      }
	      for (var name in node) {
	        var prop = node[name];
	        if (prop && /*istanbul ignore next*/(typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop)) == 'object') {
	          if (typeof prop.length == 'number' && prop.splice) {
	            // Prop is an array.
	            for (var i = 0; i < prop.length; i++) {
	              recurse(prop[i]);
	            }
	          } else {
	            recurse(prop);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'getValue',
	
	
	    /**
	     * Gets a value from the scope chain or from an object property.
	     * @param {!Object|!Array} left Name of variable or object/propname tuple.
	     * @return {!Object} Value.
	     */
	    value: function getValue(left) {
	      if (left.length) {
	        var obj = left[0];
	        var prop = left[1];
	        return this.getProperty(obj, prop);
	      } else {
	        return this.getValueFromScope(left);
	      }
	    }
	  }, {
	    key: 'setValue',
	
	
	    /**
	     * Sets a value to the scope chain or to an object property.
	     * @param {!Object|!Array} left Name of variable or object/propname tuple.
	     * @param {!Object} value Value.
	     */
	    value: function setValue(left, value) {
	      if (left.length) {
	        var obj = left[0];
	        var prop = left[1];
	        this.setProperty(obj, prop, value);
	      } else {
	        this.setValueToScope(left, value);
	      }
	    }
	  }, {
	    key: 'throwException',
	
	
	    /**
	     * Throw an exception in the interpreter that can be handled by a
	     * interpreter try/catch statement.  If unhandled, a real exception will
	     * be thrown.  Can be called with either an error class and a message, or
	     * with an actual object to be thrown.
	     * @param {!Object} errorClass Type of error (if message is provided) or the
	     *   value to throw (if no message).
	     * @param {string} opt_message Message being thrown.
	     */
	    value: function throwException(errorClass, opt_message) {
	      if (this.stateStack[0].interpreter) {
	        // This is the wrong interpreter, we are spinning on an eval.
	        try {
	          this.stateStack[0].interpreter.throwException(errorClass, opt_message);
	          return;
	        } catch (e) {
	          // The eval threw an error and did not catch it.
	          // Continue to see if this level can catch it.
	        }
	      }
	      if (opt_message === undefined) {
	        var error = errorClass;
	      } else {
	        var error = this.createObject(errorClass);
	        this.setProperty(error, 'message', this.createPrimitive(opt_message), false, true);
	      }
	      // Search for a try statement.
	      do {
	        var state = this.stateStack.shift();
	      } while (state && state.node.type !== 'TryStatement');
	      if (state) {
	        // Error is being trapped.
	        this.stateStack.unshift({
	          node: state.node.handler,
	          throwValue: error
	        });
	      } else {
	        // Throw a real error.
	        var realError;
	        if (this.isa(error, this.ERROR)) {
	          var errorTable = {
	            'EvalError': EvalError,
	            'RangeError': RangeError,
	            'ReferenceError': ReferenceError,
	            'SyntaxError': SyntaxError,
	            'TypeError': TypeError,
	            'URIError': URIError
	          };
	          var type = errorTable[this.getProperty(error, 'name')] || Error;
	          realError = type(this.getProperty(error, 'message'));
	        } else {
	          realError = error.toString();
	        }
	        throw realError;
	      }
	    }
	  }, {
	    key: 'stepArrayExpression',
	
	
	    // Functions to handle each node type.
	
	    value: function stepArrayExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      var n = state.n || 0;
	      if (!state.array) {
	        state.array = this.createObject(this.ARRAY);
	      } else {
	        this.setProperty(state.array, n - 1, state.value);
	      }
	      if (node.elements[n]) {
	        state.n = n + 1;
	        this.stateStack.unshift({ node: node.elements[n] });
	      } else {
	        state.array.length = state.n || 0;
	        this.stateStack.shift();
	        this.stateStack[0].value = state.array;
	      }
	    }
	  }, {
	    key: 'stepAssignmentExpression',
	    value: function stepAssignmentExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneLeft) {
	        state.doneLeft = true;
	        this.stateStack.unshift({ node: node.left, components: true });
	      } else if (!state.doneRight) {
	        state.doneRight = true;
	        state.leftSide = state.value;
	        this.stateStack.unshift({ node: node.right });
	      } else {
	        this.stateStack.shift();
	        var leftSide = state.leftSide;
	        var rightSide = state.value;
	        var value;
	        if (node.operator == '=') {
	          value = rightSide;
	        } else {
	          var leftValue = this.getValue(leftSide);
	          var rightValue = rightSide;
	          var leftNumber = leftValue.toNumber();
	          var rightNumber = rightValue.toNumber();
	          if (node.operator == '+=') {
	            var left, right;
	            if (leftValue.type == 'string' || rightValue.type == 'string') {
	              left = leftValue.toString();
	              right = rightValue.toString();
	            } else {
	              left = leftNumber;
	              right = rightNumber;
	            }
	            value = left + right;
	          } else if (node.operator == '-=') {
	            value = leftNumber - rightNumber;
	          } else if (node.operator == '*=') {
	            value = leftNumber * rightNumber;
	          } else if (node.operator == '/=') {
	            value = leftNumber / rightNumber;
	          } else if (node.operator == '%=') {
	            value = leftNumber % rightNumber;
	          } else if (node.operator == '<<=') {
	            value = leftNumber << rightNumber;
	          } else if (node.operator == '>>=') {
	            value = leftNumber >> rightNumber;
	          } else if (node.operator == '>>>=') {
	            value = leftNumber >>> rightNumber;
	          } else if (node.operator == '&=') {
	            value = leftNumber & rightNumber;
	          } else if (node.operator == '^=') {
	            value = leftNumber ^ rightNumber;
	          } else if (node.operator == '|=') {
	            value = leftNumber | rightNumber;
	          } else {
	            throw SyntaxError('Unknown assignment expression: ' + node.operator);
	          }
	          value = this.createPrimitive(value);
	        }
	        this.setValue(leftSide, value);
	        this.stateStack[0].value = value;
	      }
	    }
	  }, {
	    key: 'stepBinaryExpression',
	    value: function stepBinaryExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneLeft) {
	        state.doneLeft = true;
	        this.stateStack.unshift({ node: node.left });
	      } else if (!state.doneRight) {
	        state.doneRight = true;
	        state.leftValue = state.value;
	        this.stateStack.unshift({ node: node.right });
	      } else {
	        this.stateStack.shift();
	        var leftSide = state.leftValue;
	        var rightSide = state.value;
	        var value;
	        var comp = this.comp(leftSide, rightSide);
	        if (node.operator == '==' || node.operator == '!=') {
	          if (leftSide.isPrimitive && rightSide.isPrimitive) {
	            value = leftSide.data == rightSide.data;
	          } else {
	            value = comp === 0;
	          }
	          if (node.operator == '!=') {
	            value = !value;
	          }
	        } else if (node.operator == '===' || node.operator == '!==') {
	          if (leftSide.isPrimitive && rightSide.isPrimitive) {
	            value = leftSide.data === rightSide.data;
	          } else {
	            value = leftSide === rightSide;
	          }
	          if (node.operator == '!==') {
	            value = !value;
	          }
	        } else if (node.operator == '>') {
	          value = comp == 1;
	        } else if (node.operator == '>=') {
	          value = comp == 1 || comp === 0;
	        } else if (node.operator == '<') {
	          value = comp == -1;
	        } else if (node.operator == '<=') {
	          value = comp == -1 || comp === 0;
	        } else if (node.operator == '+') {
	          if (leftSide.type == 'string' || rightSide.type == 'string') {
	            var leftValue = leftSide.toString();
	            var rightValue = rightSide.toString();
	          } else {
	            var leftValue = leftSide.toNumber();
	            var rightValue = rightSide.toNumber();
	          }
	          value = leftValue + rightValue;
	        } else if (node.operator == 'in') {
	          value = this.hasProperty(rightSide, leftSide);
	        } else if (node.operator == 'instanceof') {
	          if (!this.isa(rightSide, this.FUNCTION)) {
	            this.throwException(this.TYPE_ERROR, 'Expecting a function in instanceof check');
	          }
	          value = this.isa(leftSide, rightSide);
	        } else {
	          var leftValue = leftSide.toNumber();
	          var rightValue = rightSide.toNumber();
	          if (node.operator == '-') {
	            value = leftValue - rightValue;
	          } else if (node.operator == '*') {
	            value = leftValue * rightValue;
	          } else if (node.operator == '/') {
	            value = leftValue / rightValue;
	          } else if (node.operator == '%') {
	            value = leftValue % rightValue;
	          } else if (node.operator == '&') {
	            value = leftValue & rightValue;
	          } else if (node.operator == '|') {
	            value = leftValue | rightValue;
	          } else if (node.operator == '^') {
	            value = leftValue ^ rightValue;
	          } else if (node.operator == '<<') {
	            value = leftValue << rightValue;
	          } else if (node.operator == '>>') {
	            value = leftValue >> rightValue;
	          } else if (node.operator == '>>>') {
	            value = leftValue >>> rightValue;
	          } else {
	            throw SyntaxError('Unknown binary operator: ' + node.operator);
	          }
	        }
	        this.stateStack[0].value = this.createPrimitive(value);
	      }
	    }
	  }, {
	    key: 'stepBlockStatement',
	    value: function stepBlockStatement() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      var n = state.n_ || 0;
	      if (node.body[n]) {
	        state.done = false;
	        state.n_ = n + 1;
	        this.stateStack.unshift({ node: node.body[n] });
	      } else {
	        state.done = true;
	        if (state.node.type != 'Program') {
	          // Leave the root scope on the tree in case the program is appended to.
	          this.stateStack.shift();
	        }
	      }
	    }
	  }, {
	    key: 'stepBreakStatement',
	    value: function stepBreakStatement() {
	      var state = this.stateStack.shift();
	      var node = state.node;
	      var label = null;
	      if (node.label) {
	        label = node.label.name;
	      }
	      state = this.stateStack.shift();
	      while (state && state.node.type != 'CallExpression' && state.node.type != 'NewExpression') {
	        if (label ? label == state.label : state.isLoop || state.isSwitch) {
	          return;
	        }
	        state = this.stateStack.shift();
	      }
	      // Syntax error, do not allow this error to be trapped.
	      throw SyntaxError('Illegal break statement');
	    }
	  }, {
	    key: 'stepCallExpression',
	    value: function stepCallExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneCallee_) {
	        state.doneCallee_ = true;
	        this.stateStack.unshift({ node: node.callee, components: true });
	      } else {
	        if (!state.func_) {
	          // Determine value of the function.
	          if (state.value.type == 'function') {
	            state.func_ = state.value;
	          } else {
	            if (state.value.length) {
	              state.member_ = state.value[0];
	            }
	            state.func_ = this.getValue(state.value);
	            if (!state.func_ || state.func_.type != 'function') {
	              this.throwException(this.TYPE_ERROR, (state.value && state.value.type) + ' is not a function');
	              return;
	            }
	          }
	          // Determine value of 'this' in function.
	          if (state.node.type == 'NewExpression') {
	            state.funcThis_ = this.createObject(state.func_);
	            state.isConstructor_ = true;
	          } else if (state.value.length) {
	            state.funcThis_ = state.value[0];
	          } else {
	            state.funcThis_ = this.stateStack[this.stateStack.length - 1].thisExpression;
	          }
	          state.arguments = [];
	          var n = 0;
	        } else {
	          var n = state.n_;
	          if (state.arguments.length != node.arguments.length) {
	            state.arguments[n - 1] = state.value;
	          }
	        }
	        if (node.arguments[n]) {
	          state.n_ = n + 1;
	          this.stateStack.unshift({ node: node.arguments[n] });
	        } else if (!state.doneExec) {
	          this.executeFunction();
	        } else {
	          this.stateStack.shift();
	          if (state.isConstructor_ && state.value.type !== 'object') {
	            this.stateStack[0].value = state.funcThis_;
	          } else {
	            this.stateStack[0].value = state.value;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'executeFunction',
	    value: function executeFunction() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      state.doneExec = true;
	      if (state.func_.node && (state.func_.node.type == 'FunctionApply_' || state.func_.node.type == 'FunctionCall_')) {
	        state.funcThis_ = state.arguments.shift();
	        if (state.func_.node.type == 'FunctionApply_') {
	          // Unpack all the arguments from the provided array.
	          var argsList = state.arguments.shift();
	          if (argsList && this.isa(argsList, this.ARRAY)) {
	            state.arguments = [];
	            for (var i = 0; i < argsList.length; i++) {
	              state.arguments[i] = this.getProperty(argsList, i);
	            }
	          } else {
	            state.arguments = [];
	          }
	        }
	        state.func_ = state.member_;
	      }
	      if (state.func_.node) {
	        var scope = this.createScope(state.func_.node.body, state.func_.parentScope);
	        // Add all arguments.
	        for (var i = 0; i < state.func_.node.params.length; i++) {
	          var paramName = this.createPrimitive(state.func_.node.params[i].name);
	          var paramValue = state.arguments.length > i ? state.arguments[i] : this.UNDEFINED;
	          this.setProperty(scope, paramName, paramValue);
	        }
	        // Build arguments variable.
	        var argsList = this.createObject(this.ARRAY);
	        for (var i = 0; i < state.arguments.length; i++) {
	          this.setProperty(argsList, this.createPrimitive(i), state.arguments[i]);
	        }
	        this.setProperty(scope, 'arguments', argsList);
	        var funcState = {
	          node: state.func_.node.body,
	          scope: scope,
	          thisExpression: state.funcThis_
	        };
	        this.stateStack.unshift(funcState);
	        state.value = this.UNDEFINED; // Default value if no explicit return.
	      } else if (state.func_.nativeFunc) {
	        state.value = state.func_.nativeFunc.apply(state.funcThis_, state.arguments);
	      } else if (state.func_.asyncFunc) {
	        var thisInterpreter = this;
	        var callback = function callback(value) {
	          state.value = value || thisInterpreter.UNDEFINED;
	          thisInterpreter.paused_ = false;
	        };
	        var argsWithCallback = state.arguments.concat(callback);
	        state.func_.asyncFunc.apply(state.funcThis_, argsWithCallback);
	        this.paused_ = true;
	        return;
	      } else if (state.func_.eval) {
	        var code = state.arguments[0];
	        if (!code) {
	          state.value = this.UNDEFINED;
	        } else if (!code.isPrimitive) {
	          // JS does not parse String objects:
	          // eval(new String('1 + 1')) -> '1 + 1'
	          state.value = code;
	        } else {
	          var evalInterpreter = new Interpreter(code.toString());
	          evalInterpreter.stateStack[0].scope.parentScope = this.getScope();
	          state = {
	            node: { type: 'Eval_' },
	            interpreter: evalInterpreter
	          };
	          this.stateStack.unshift(state);
	        }
	      } else {
	        throw TypeError('function not a function (huh?)');
	      }
	    }
	  }, {
	    key: 'stepCatchClause',
	    value: function stepCatchClause() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneBody) {
	        state.doneBody = true;
	        var scope;
	        if (node.param) {
	          scope = this.createSpecialScope(this.getScope());
	          // Add the argument.
	          var paramName = this.createPrimitive(node.param.name);
	          this.setProperty(scope, paramName, state.throwValue);
	        }
	        this.stateStack.unshift({ node: node.body, scope: scope });
	      } else {
	        this.stateStack.shift();
	      }
	    }
	  }, {
	    key: 'stepConditionalExpression',
	    value: function stepConditionalExpression() {
	      var state = this.stateStack[0];
	      if (!state.done) {
	        if (!state.test) {
	          state.test = true;
	          this.stateStack.unshift({ node: state.node.test });
	        } else {
	          state.done = true;
	          if (state.value.toBoolean() && state.node.consequent) {
	            this.stateStack.unshift({ node: state.node.consequent });
	          } else if (!state.value.toBoolean() && state.node.alternate) {
	            this.stateStack.unshift({ node: state.node.alternate });
	          }
	        }
	      } else {
	        this.stateStack.shift();
	        if (state.node.type == 'ConditionalExpression') {
	          this.stateStack[0].value = state.value;
	        }
	      }
	    }
	  }, {
	    key: 'stepContinueStatement',
	    value: function stepContinueStatement() {
	      var node = this.stateStack[0].node;
	      var label = null;
	      if (node.label) {
	        label = node.label.name;
	      }
	      var state = this.stateStack[0];
	      while (state && state.node.type != 'CallExpression' && state.node.type != 'NewExpression') {
	        if (state.isLoop) {
	          if (!label || label == state.label) {
	            return;
	          }
	        }
	        this.stateStack.shift();
	        state = this.stateStack[0];
	      }
	      // Syntax error, do not allow this error to be trapped.
	      throw SyntaxError('Illegal continue statement');
	    }
	  }, {
	    key: 'stepDoWhileStatement',
	    value: function stepDoWhileStatement() {
	      var state = this.stateStack[0];
	      state.isLoop = true;
	      if (state.node.type == 'DoWhileStatement' && state.test === undefined) {
	        // First iteration of do/while executes without checking test.
	        state.value = this.TRUE;
	        state.test = true;
	      }
	      if (!state.test) {
	        state.test = true;
	        this.stateStack.unshift({ node: state.node.test });
	      } else {
	        state.test = false;
	        if (!state.value.toBoolean()) {
	          this.stateStack.shift();
	        } else if (state.node.body) {
	          this.stateStack.unshift({ node: state.node.body });
	        }
	      }
	    }
	  }, {
	    key: 'stepEmptyStatement',
	    value: function stepEmptyStatement() {
	      this.stateStack.shift();
	    }
	  }, {
	    key: 'stepEval_',
	    value: function stepEval_() {
	      var state = this.stateStack[0];
	      if (!state.interpreter.step()) {
	        this.stateStack.shift();
	        this.stateStack[0].value = state.interpreter.value || this.UNDEFINED;
	      }
	    }
	  }, {
	    key: 'stepExpressionStatement',
	    value: function stepExpressionStatement() {
	      var state = this.stateStack[0];
	      if (!state.done) {
	        state.done = true;
	        this.stateStack.unshift({ node: state.node.expression });
	      } else {
	        this.stateStack.shift();
	        // Save this value to the interpreter for use as a return value if
	        // this code is inside an eval function.
	        this.value = state.value;
	      }
	    }
	  }, {
	    key: 'stepForInStatement',
	    value: function stepForInStatement() {
	      var state = this.stateStack[0];
	      state.isLoop = true;
	      var node = state.node;
	      if (!state.doneVariable_) {
	        state.doneVariable_ = true;
	        var left = node.left;
	        if (left.type == 'VariableDeclaration') {
	          // Inline variable declaration: for (var x in y)
	          left = left.declarations[0].id;
	        }
	        this.stateStack.unshift({ node: left, components: true });
	      } else if (!state.doneObject_) {
	        state.doneObject_ = true;
	        state.variable = state.value;
	        this.stateStack.unshift({ node: node.right });
	      } else {
	        if (typeof state.iterator == 'undefined') {
	          // First iteration.
	          state.object = state.value;
	          state.iterator = 0;
	        }
	        var name = null;
	        done: do {
	          var i = state.iterator;
	          for (var prop in state.object.properties) {
	            if (prop in state.object.nonenumerable) {
	              continue;
	            }
	            if (i == 0) {
	              name = prop;
	              break done;
	            }
	            i--;
	          }
	          state.object = state.object.parent && state.object.parent.properties.prototype;
	          state.iterator = 0;
	        } while (state.object);
	        state.iterator++;
	        if (name === null) {
	          this.stateStack.shift();
	        } else {
	          this.setValueToScope(state.variable, this.createPrimitive(name));
	          if (node.body) {
	            this.stateStack.unshift({ node: node.body });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'stepForStatement',
	    value: function stepForStatement() {
	      var state = this.stateStack[0];
	      state.isLoop = true;
	      var node = state.node;
	      var mode = state.mode || 0;
	      if (mode == 0) {
	        state.mode = 1;
	        if (node.init) {
	          this.stateStack.unshift({ node: node.init });
	        }
	      } else if (mode == 1) {
	        state.mode = 2;
	        if (node.test) {
	          this.stateStack.unshift({ node: node.test });
	        }
	      } else if (mode == 2) {
	        state.mode = 3;
	        if (node.test && state.value && !state.value.toBoolean()) {
	          // Loop complete.  Bail out.
	          this.stateStack.shift();
	        } else if (node.body) {
	          this.stateStack.unshift({ node: node.body });
	        }
	      } else if (mode == 3) {
	        state.mode = 1;
	        if (node.update) {
	          this.stateStack.unshift({ node: node.update });
	        }
	      }
	    }
	  }, {
	    key: 'stepFunctionDeclaration',
	    value: function stepFunctionDeclaration() {
	      this.stateStack.shift();
	    }
	  }, {
	    key: 'stepFunctionExpression',
	    value: function stepFunctionExpression() {
	      var state = this.stateStack.shift();
	      this.stateStack[0].value = this.createFunction(state.node);
	    }
	  }, {
	    key: 'stepIdentifier',
	    value: function stepIdentifier() {
	      var state = this.stateStack.shift();
	      var name = this.createPrimitive(state.node.name);
	      this.stateStack[0].value = state.components ? name : this.getValueFromScope(name);
	    }
	  }, {
	    key: 'stepIfStatement',
	    value: function stepIfStatement() {
	      return this.stepConditionalExpression();
	    }
	  }, {
	    key: 'stepLabeledStatement',
	    value: function stepLabeledStatement() {
	      // No need to hit this node again on the way back up the stack.
	      var state = this.stateStack.shift();
	      this.stateStack.unshift({ node: state.node.body,
	        label: state.node.label.name });
	    }
	  }, {
	    key: 'stepLiteral',
	    value: function stepLiteral() {
	      var state = this.stateStack.shift();
	      this.stateStack[0].value = this.createPrimitive(state.node.value);
	    }
	  }, {
	    key: 'stepLogicalExpression',
	    value: function stepLogicalExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (node.operator != '&&' && node.operator != '||') {
	        throw SyntaxError('Unknown logical operator: ' + node.operator);
	      }
	      if (!state.doneLeft_) {
	        state.doneLeft_ = true;
	        this.stateStack.unshift({ node: node.left });
	      } else if (!state.doneRight_) {
	        if (node.operator == '&&' && !state.value.toBoolean() || node.operator == '||' && state.value.toBoolean()) {
	          // Shortcut evaluation.
	          this.stateStack.shift();
	          this.stateStack[0].value = state.value;
	        } else {
	          state.doneRight_ = true;
	          this.stateStack.unshift({ node: node.right });
	        }
	      } else {
	        this.stateStack.shift();
	        this.stateStack[0].value = state.value;
	      }
	    }
	  }, {
	    key: 'stepMemberExpression',
	    value: function stepMemberExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneObject_) {
	        state.doneObject_ = true;
	        this.stateStack.unshift({ node: node.object });
	      } else if (!state.doneProperty_) {
	        state.doneProperty_ = true;
	        state.object = state.value;
	        this.stateStack.unshift({
	          node: node.property,
	          components: !node.computed
	        });
	      } else {
	        this.stateStack.shift();
	        if (state.components) {
	          this.stateStack[0].value = [state.object, state.value];
	        } else {
	          this.stateStack[0].value = this.getProperty(state.object, state.value);
	        }
	      }
	    }
	  }, {
	    key: 'stepNewExpression',
	    value: function stepNewExpression() {
	      return this.stepCallExpression();
	    }
	  }, {
	    key: 'stepObjectExpression',
	    value: function stepObjectExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      var valueToggle = state.valueToggle;
	      var n = state.n || 0;
	      if (!state.object) {
	        state.object = this.createObject(this.OBJECT);
	      } else {
	        if (valueToggle) {
	          state.key = state.value;
	        } else {
	          this.setProperty(state.object, state.key, state.value);
	        }
	      }
	      if (node.properties[n]) {
	        if (valueToggle) {
	          state.n = n + 1;
	          this.stateStack.unshift({ node: node.properties[n].value });
	        } else {
	          this.stateStack.unshift({ node: node.properties[n].key, components: true });
	        }
	        state.valueToggle = !valueToggle;
	      } else {
	        this.stateStack.shift();
	        this.stateStack[0].value = state.object;
	      }
	    }
	  }, {
	    key: 'stepProgram',
	    value: function stepProgram() {
	      return this.stepBlockStatement();
	    }
	  }, {
	    key: 'stepReturnStatement',
	    value: function stepReturnStatement() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (node.argument && !state.done) {
	        state.done = true;
	        this.stateStack.unshift({ node: node.argument });
	      } else {
	        var value = state.value || this.UNDEFINED;
	        do {
	          this.stateStack.shift();
	          if (this.stateStack.length == 0) {
	            // Syntax error, do not allow this error to be trapped.
	            throw SyntaxError('Illegal return statement');
	          }
	          state = this.stateStack[0];
	        } while (state.node.type != 'CallExpression' && state.node.type != 'NewExpression');
	        state.value = value;
	      }
	    }
	  }, {
	    key: 'stepSequenceExpression',
	    value: function stepSequenceExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      var n = state.n || 0;
	      if (node.expressions[n]) {
	        state.n = n + 1;
	        this.stateStack.unshift({ node: node.expressions[n] });
	      } else {
	        this.stateStack.shift();
	        this.stateStack[0].value = state.value;
	      }
	    }
	  }, {
	    key: 'stepSwitchStatement',
	    value: function stepSwitchStatement() {
	      var state = this.stateStack[0];
	      state.checked = state.checked || [];
	      state.isSwitch = true;
	
	      if (!state.test) {
	        state.test = true;
	        this.stateStack.unshift({ node: state.node.discriminant });
	      } else {
	        if (!state.switchValue) {
	          // Preserve switch value between case tests.
	          state.switchValue = state.value;
	        }
	
	        var index = state.index || 0;
	        var currentCase = state.node.cases[index];
	        if (currentCase) {
	          if (!state.done && !state.checked[index] && currentCase.test) {
	            state.checked[index] = true;
	            this.stateStack.unshift({ node: currentCase.test });
	          } else {
	            // Test on the default case will be null.
	            if (state.done || !currentCase.test || this.comp(state.value, state.switchValue) == 0) {
	              state.done = true;
	              var n = state.n || 0;
	              if (currentCase.consequent[n]) {
	                this.stateStack.unshift({ node: currentCase.consequent[n] });
	                state.n = n + 1;
	                return;
	              }
	            }
	            state.n = 0;
	            state.index = index + 1;
	          }
	        } else {
	          this.stateStack.shift();
	        }
	      }
	    }
	  }, {
	    key: 'stepThisExpression',
	    value: function stepThisExpression() {
	      this.stateStack.shift();
	      for (var i = 0; i < this.stateStack.length; i++) {
	        if (this.stateStack[i].thisExpression) {
	          this.stateStack[0].value = this.stateStack[i].thisExpression;
	          return;
	        }
	      }
	      throw Error('No this expression found.');
	    }
	  }, {
	    key: 'stepThrowStatement',
	    value: function stepThrowStatement() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.argument) {
	        state.argument = true;
	        this.stateStack.unshift({ node: node.argument });
	      } else {
	        this.throwException(state.value);
	      }
	    }
	  }, {
	    key: 'stepTryStatement',
	    value: function stepTryStatement() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneBlock) {
	        state.doneBlock = true;
	        this.stateStack.unshift({ node: node.block });
	      } else if (!state.doneFinalizer && node.finalizer) {
	        state.doneFinalizer = true;
	        this.stateStack.unshift({ node: node.finalizer });
	      } else {
	        this.stateStack.shift();
	      }
	    }
	  }, {
	    key: 'stepUnaryExpression',
	    value: function stepUnaryExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.done) {
	        state.done = true;
	        var nextState = { node: node.argument };
	        if (node.operator == 'delete') {
	          nextState.components = true;
	        }
	        this.stateStack.unshift(nextState);
	      } else {
	        this.stateStack.shift();
	        var value;
	        if (node.operator == '-') {
	          value = -state.value.toNumber();
	        } else if (node.operator == '+') {
	          value = state.value.toNumber();
	        } else if (node.operator == '!') {
	          value = !state.value.toBoolean();
	        } else if (node.operator == '~') {
	          value = ~state.value.toNumber();
	        } else if (node.operator == 'typeof') {
	          value = state.value.type;
	        } else if (node.operator == 'delete') {
	          if (state.value.length) {
	            var obj = state.value[0];
	            var name = state.value[1];
	          } else {
	            var obj = this.getScope();
	            var name = state.value;
	          }
	          value = this.deleteProperty(obj, name);
	        } else if (node.operator == 'void') {
	          value = undefined;
	        } else {
	          throw SyntaxError('Unknown unary operator: ' + node.operator);
	        }
	        this.stateStack[0].value = this.createPrimitive(value);
	      }
	    }
	  }, {
	    key: 'stepUpdateExpression',
	    value: function stepUpdateExpression() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.done) {
	        state.done = true;
	        this.stateStack.unshift({ node: node.argument, components: true });
	      } else {
	        this.stateStack.shift();
	        var leftSide = state.value;
	        var leftValue = this.getValue(leftSide).toNumber();
	        var changeValue;
	        if (node.operator == '++') {
	          changeValue = this.createPrimitive(leftValue + 1);
	        } else if (node.operator == '--') {
	          changeValue = this.createPrimitive(leftValue - 1);
	        } else {
	          throw SyntaxError('Unknown update expression: ' + node.operator);
	        }
	        this.setValue(leftSide, changeValue);
	        this.stateStack[0].value = node.prefix ? changeValue : this.createPrimitive(leftValue);
	      }
	    }
	  }, {
	    key: 'stepVariableDeclaration',
	    value: function stepVariableDeclaration() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      var n = state.n || 0;
	      if (node.declarations[n]) {
	        state.n = n + 1;
	        this.stateStack.unshift({ node: node.declarations[n] });
	      } else {
	        this.stateStack.shift();
	      }
	    }
	  }, {
	    key: 'stepVariableDeclarator',
	    value: function stepVariableDeclarator() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (node.init && !state.done) {
	        state.done = true;
	        this.stateStack.unshift({ node: node.init });
	      } else {
	        if (!this.hasProperty(this, node.id.name) || node.init) {
	          var value = node.init ? state.value : this.UNDEFINED;
	          this.setValue(this.createPrimitive(node.id.name), value);
	        }
	        this.stateStack.shift();
	      }
	    }
	  }, {
	    key: 'stepWithStatement',
	    value: function stepWithStatement() {
	      var state = this.stateStack[0];
	      var node = state.node;
	      if (!state.doneObject) {
	        state.doneObject = true;
	        this.stateStack.unshift({ node: node.object });
	      } else if (!state.doneBody) {
	        state.doneBody = true;
	        var scope = this.createSpecialScope(this.getScope(), state.value);
	        this.stateStack.unshift({ node: node.body, scope: scope });
	      } else {
	        this.stateStack.shift();
	      }
	    }
	  }, {
	    key: 'stepWhileStatement',
	    value: function stepWhileStatement() {
	      return this.stepDoWhileStatement();
	    }
	  }]);
	  return Interpreter;
	}();
	
	/**
	 * Class for a number, string, boolean, null, or undefined.
	 * @param {number|string|boolean|null|undefined} data Primitive value.
	 * @param {!Interpreter} interpreter The JS Interpreter to bind to.
	 * @constructor
	 */
	
	
	/*istanbul ignore next*/exports.default = Interpreter;
	
	/*istanbul ignore next*/var Primitive = function () {
	  function /*istanbul ignore next*/Primitive(data, interpreter) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, Primitive);
	
	    var type = /*istanbul ignore next*/typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data);
	    this.data = data;
	    this.type = type;
	    if (type == 'number') {
	      this.parent = interpreter.NUMBER;
	    } else if (type == 'string') {
	      this.parent = interpreter.STRING;
	    } else if (type == 'boolean') {
	      this.parent = interpreter.BOOLEAN;
	    }
	    this.isPrimitive = true;
	  }
	
	  (0, _createClass3.default)(Primitive, [{
	    key: 'toBoolean',
	
	
	    /**
	     * Convert this primitive into a boolean.
	     * @return {boolean} Boolean value.
	     */
	    value: function toBoolean() {
	      return Boolean(this.data);
	    }
	  }, {
	    key: 'toNumber',
	
	
	    /**
	     * Convert this primitive into a number.
	     * @return {number} Number value.
	     */
	    value: function toNumber() {
	      return Number(this.data);
	    }
	  }, {
	    key: 'toString',
	
	
	    /**
	     * Convert this primitive into a string.
	     * @return {string} String value.
	     */
	    value: function toString() {
	      return String(this.data);
	    }
	  }, {
	    key: 'valueOf',
	
	
	    /**
	     * Return the primitive value.
	     * @return {number|string|boolean|null|undefined} Primitive value.
	     */
	    value: function valueOf() {
	      return this.data;
	    }
	  }]);
	  return Primitive;
	}();
	
	/**
	 * Class for an object.
	 * @param {Object} parent Parent constructor function.
	 * @constructor
	 */
	
	
	/*istanbul ignore next*/var InterpreterObject = function () {
	  function /*istanbul ignore next*/InterpreterObject(parent) {
	    /*istanbul ignore next*/(0, _classCallCheck3.default)(this, InterpreterObject);
	
	    this.fixed = /*istanbul ignore next*/(0, _create2.default)(null);
	    this.nonenumerable = /*istanbul ignore next*/(0, _create2.default)(null);
	    this.properties = /*istanbul ignore next*/(0, _create2.default)(null);
	    this.parent = parent;
	    this.type = 'object';
	    this.isPrimitive = false;
	  }
	
	  (0, _createClass3.default)(InterpreterObject, [{
	    key: 'toBoolean',
	
	
	    /**
	     * Convert this object into a boolean.
	     * @return {boolean} Boolean value.
	     */
	    value: function toBoolean() {
	      return true;
	    }
	  }, {
	    key: 'toNumber',
	
	
	    /**
	     * Convert this object into a number.
	     * @return {number} Number value.
	     */
	    value: function toNumber() {
	      return Number(this.data === undefined ? this.toString() : this.data);
	    }
	  }, {
	    key: 'toString',
	
	
	    /**
	     * Convert this object into a string.
	     * @return {string} String value.
	     */
	    value: function toString() {
	      return this.data === undefined ? '[' + this.type + ']' : String(this.data);
	    }
	  }, {
	    key: 'valueOf',
	
	
	    /**
	     * Return the object value.
	     * @return {!Object} Value.
	     */
	    value: function valueOf() {
	      return this.data === undefined ? this : this.data;
	    }
	  }]);
	  return InterpreterObject;
	}();
	
	Interpreter.Primitive = Primitive;
	Interpreter.Object = InterpreterObject;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(24)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	__webpack_require__(50);
	__webpack_require__(72);
	__webpack_require__(125);
	__webpack_require__(126);
	module.exports = __webpack_require__(24).Map;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {
	var strong = __webpack_require__(77);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(83)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(23);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(89)('Map')});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {
Object.defineProperty(exports,"__esModule",{value:true});exports.lineBreakG=exports.lineBreak=exports.isNewLine=exports.Token=exports.isIdentifierStart=exports.isIdentifierChar=exports.tokContexts=exports.TokContext=exports.tokTypes=exports.TokenType=exports.Node=exports.getLineInfo=exports.SourceLocation=exports.Position=exports.defaultOptions=exports.plugins=exports.Parser=exports.tokenizer=exports.parseExpressionAt=exports.parse=exports.version=undefined;var _iterator=__webpack_require__(97);var _iterator2=_interopRequireDefault(_iterator);var _symbol=__webpack_require__(100);var _symbol2=_interopRequireDefault(_symbol);var _typeof2=__webpack_require__(96);var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Reserved word lists for various dialects of the language
	var reservedWords={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",7:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"};// And the keywords
	var ecma5AndLessKeywords="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";var keywords={5:ecma5AndLessKeywords,6:ecma5AndLessKeywords+" const class extends export import super"};// ## Character categories
	// Big ugly regular expressions that match characters in the
	// whitespace, identifier, and identifier-start categories. These
	// are only applied when a character is found to actually have a
	// code point above 128.
	// Generated by `bin/generate-identifier-regex.js`.
	var nonASCIIidentifierStartChars="\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";var nonASCIIidentifierChars="\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";var nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]");var nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;// These are a run-length and offset encoded representation of the
	// >0xffff code points that are a valid part of identifiers. The
	// offset starts at 0x10000, and each pair of numbers represents an
	// offset to the next range, and then a size of the range. They were
	// generated by bin/generate-identifier-regex.js
	var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541];var astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];// This has a complexity linear to the value of the code. The
	// assumption is that looking up astral identifier characters is
	// rare.
	function isInAstralSet(code,set){var pos=0x10000;for(var i=0;i<set.length;i+=2){pos+=set[i];if(pos>code)return false;pos+=set[i+1];if(pos>=code)return true;}}// Test whether a given character code starts an identifier.
	function isIdentifierStart(code,astral){if(code<65)return code===36;if(code<91)return true;if(code<97)return code===95;if(code<123)return true;if(code<=0xffff)return code>=0xaa&&nonASCIIidentifierStart.test(String.fromCharCode(code));if(astral===false)return false;return isInAstralSet(code,astralIdentifierStartCodes);}// Test whether a given character is part of an identifier.
	function isIdentifierChar(code,astral){if(code<48)return code===36;if(code<58)return true;if(code<65)return false;if(code<91)return true;if(code<97)return code===95;if(code<123)return true;if(code<=0xffff)return code>=0xaa&&nonASCIIidentifier.test(String.fromCharCode(code));if(astral===false)return false;return isInAstralSet(code,astralIdentifierStartCodes)||isInAstralSet(code,astralIdentifierCodes);}// ## Token types
	// The assignment of fine-grained, information-carrying type objects
	// allows the tokenizer to store the information it has about a
	// token in a way that is very cheap for the parser to look up.
	// All token type variables start with an underscore, to make them
	// easy to recognize.
	// The `beforeExpr` property is used to disambiguate between regular
	// expressions and divisions. It is set on all token types that can
	// be followed by an expression (thus, a slash after them would be a
	// regular expression).
	//
	// The `startsExpr` property is used to check if the token ends a
	// `yield` expression. It is set on all token types that either can
	// directly start an expression (like a quotation mark) or can
	// continue an expression (like the body of a string).
	//
	// `isLoop` marks a keyword as starting a loop, which is important
	// to know when parsing a label, in order to allow or disallow
	// continue jumps to that label.
	var TokenType=function TokenType(label,conf){if(conf===void 0)conf={};this.label=label;this.keyword=conf.keyword;this.beforeExpr=!!conf.beforeExpr;this.startsExpr=!!conf.startsExpr;this.isLoop=!!conf.isLoop;this.isAssign=!!conf.isAssign;this.prefix=!!conf.prefix;this.postfix=!!conf.postfix;this.binop=conf.binop||null;this.updateContext=null;};function binop(name,prec){return new TokenType(name,{beforeExpr:true,binop:prec});}var beforeExpr={beforeExpr:true};var startsExpr={startsExpr:true};// Map keyword names to token types.
	var keywordTypes={};// Succinct definitions of keyword token types
	function kw(name,options){if(options===void 0)options={};options.keyword=name;return keywordTypes[name]=new TokenType(name,options);}var tt={num:new TokenType("num",startsExpr),regexp:new TokenType("regexp",startsExpr),string:new TokenType("string",startsExpr),name:new TokenType("name",startsExpr),eof:new TokenType("eof"),// Punctuation token types.
	bracketL:new TokenType("[",{beforeExpr:true,startsExpr:true}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:true,startsExpr:true}),braceR:new TokenType("}"),parenL:new TokenType("(",{beforeExpr:true,startsExpr:true}),parenR:new TokenType(")"),comma:new TokenType(",",beforeExpr),semi:new TokenType(";",beforeExpr),colon:new TokenType(":",beforeExpr),dot:new TokenType("."),question:new TokenType("?",beforeExpr),arrow:new TokenType("=>",beforeExpr),template:new TokenType("template"),ellipsis:new TokenType("...",beforeExpr),backQuote:new TokenType("`",startsExpr),dollarBraceL:new TokenType("${",{beforeExpr:true,startsExpr:true}),// Operators. These carry several kinds of properties to help the
	// parser use them properly (the presence of these properties is
	// what categorizes them as operators).
	//
	// `binop`, when present, specifies that this operator is a binary
	// operator, and will refer to its precedence.
	//
	// `prefix` and `postfix` mark the operator as a prefix or postfix
	// unary operator.
	//
	// `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
	// binary operators with a very low precedence, that should result
	// in AssignmentExpression nodes.
	eq:new TokenType("=",{beforeExpr:true,isAssign:true}),assign:new TokenType("_=",{beforeExpr:true,isAssign:true}),incDec:new TokenType("++/--",{prefix:true,postfix:true,startsExpr:true}),prefix:new TokenType("prefix",{beforeExpr:true,prefix:true,startsExpr:true}),logicalOR:binop("||",1),logicalAND:binop("&&",2),bitwiseOR:binop("|",3),bitwiseXOR:binop("^",4),bitwiseAND:binop("&",5),equality:binop("==/!=",6),relational:binop("</>",7),bitShift:binop("<</>>",8),plusMin:new TokenType("+/-",{beforeExpr:true,binop:9,prefix:true,startsExpr:true}),modulo:binop("%",10),star:binop("*",10),slash:binop("/",10),starstar:new TokenType("**",{beforeExpr:true}),// Keyword token types.
	_break:kw("break"),_case:kw("case",beforeExpr),_catch:kw("catch"),_continue:kw("continue"),_debugger:kw("debugger"),_default:kw("default",beforeExpr),_do:kw("do",{isLoop:true,beforeExpr:true}),_else:kw("else",beforeExpr),_finally:kw("finally"),_for:kw("for",{isLoop:true}),_function:kw("function",startsExpr),_if:kw("if"),_return:kw("return",beforeExpr),_switch:kw("switch"),_throw:kw("throw",beforeExpr),_try:kw("try"),_var:kw("var"),_const:kw("const"),_while:kw("while",{isLoop:true}),_with:kw("with"),_new:kw("new",{beforeExpr:true,startsExpr:true}),_this:kw("this",startsExpr),_super:kw("super",startsExpr),_class:kw("class"),_extends:kw("extends",beforeExpr),_export:kw("export"),_import:kw("import"),_null:kw("null",startsExpr),_true:kw("true",startsExpr),_false:kw("false",startsExpr),_in:kw("in",{beforeExpr:true,binop:7}),_instanceof:kw("instanceof",{beforeExpr:true,binop:7}),_typeof:kw("typeof",{beforeExpr:true,prefix:true,startsExpr:true}),_void:kw("void",{beforeExpr:true,prefix:true,startsExpr:true}),_delete:kw("delete",{beforeExpr:true,prefix:true,startsExpr:true})};// Matches a whole line break (where CRLF is considered a single
	// line break). Used to count lines.
	var lineBreak=/\r\n?|\n|\u2028|\u2029/;var lineBreakG=new RegExp(lineBreak.source,"g");function isNewLine(code){return code===10||code===13||code===0x2028||code==0x2029;}var nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;var skipWhiteSpace=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;function isArray(obj){return Object.prototype.toString.call(obj)==="[object Array]";}// Checks if an object has a property.
	function has(obj,propName){return Object.prototype.hasOwnProperty.call(obj,propName);}// These are used when `options.locations` is on, for the
	// `startLoc` and `endLoc` properties.
	var Position=function Position(line,col){this.line=line;this.column=col;};Position.prototype.offset=function offset(n){return new Position(this.line,this.column+n);};var SourceLocation=function SourceLocation(p,start,end){this.start=start;this.end=end;if(p.sourceFile!==null)this.source=p.sourceFile;};// The `getLineInfo` function is mostly useful when the
	// `locations` option is off (for performance reasons) and you
	// want to find the line/column position for a given character
	// offset. `input` should be the code string that the offset refers
	// into.
	function getLineInfo(input,offset){for(var line=1,cur=0;;){lineBreakG.lastIndex=cur;var match=lineBreakG.exec(input);if(match&&match.index<offset){++line;cur=match.index+match[0].length;}else{return new Position(line,offset-cur);}}}// A second optional argument can be given to further configure
	// the parser process. These options are recognized:
	var defaultOptions={// `ecmaVersion` indicates the ECMAScript version to parse. Must
	// be either 3, or 5, or 6. This influences support for strict
	// mode, the set of reserved words, support for getters and
	// setters and other features. The default is 6.
	ecmaVersion:6,// Source type ("script" or "module") for different semantics
	sourceType:"script",// `onInsertedSemicolon` can be a callback that will be called
	// when a semicolon is automatically inserted. It will be passed
	// th position of the comma as an offset, and if `locations` is
	// enabled, it is given the location as a `{line, column}` object
	// as second argument.
	onInsertedSemicolon:null,// `onTrailingComma` is similar to `onInsertedSemicolon`, but for
	// trailing commas.
	onTrailingComma:null,// By default, reserved words are only enforced if ecmaVersion >= 5.
	// Set `allowReserved` to a boolean value to explicitly turn this on
	// an off. When this option has the value "never", reserved words
	// and keywords can also not be used as property names.
	allowReserved:null,// When enabled, a return at the top level is not considered an
	// error.
	allowReturnOutsideFunction:false,// When enabled, import/export statements are not constrained to
	// appearing at the top of the program.
	allowImportExportEverywhere:false,// When enabled, hashbang directive in the beginning of file
	// is allowed and treated as a line comment.
	allowHashBang:false,// When `locations` is on, `loc` properties holding objects with
	// `start` and `end` properties in `{line, column}` form (with
	// line being 1-based and column 0-based) will be attached to the
	// nodes.
	locations:false,// A function can be passed as `onToken` option, which will
	// cause Acorn to call that function with object in the same
	// format as tokens returned from `tokenizer().getToken()`. Note
	// that you are not allowed to call the parser from the
	// callback—that will corrupt its internal state.
	onToken:null,// A function can be passed as `onComment` option, which will
	// cause Acorn to call that function with `(block, text, start,
	// end)` parameters whenever a comment is skipped. `block` is a
	// boolean indicating whether this is a block (`/* */`) comment,
	// `text` is the content of the comment, and `start` and `end` are
	// character offsets that denote the start and end of the comment.
	// When the `locations` option is on, two more parameters are
	// passed, the full `{line, column}` locations of the start and
	// end of the comments. Note that you are not allowed to call the
	// parser from the callback—that will corrupt its internal state.
	onComment:null,// Nodes have their start and end characters offsets recorded in
	// `start` and `end` properties (directly on the node, rather than
	// the `loc` object, which holds line/column data. To also add a
	// [semi-standardized][range] `range` property holding a `[start,
	// end]` array with the same numbers, set the `ranges` option to
	// `true`.
	//
	// [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
	ranges:false,// It is possible to parse multiple files into a single AST by
	// passing the tree produced by parsing the first file as
	// `program` option in subsequent parses. This will add the
	// toplevel forms of the parsed file to the `Program` (top) node
	// of an existing parse tree.
	program:null,// When `locations` is on, you can pass this to record the source
	// file in every node's `loc` object.
	sourceFile:null,// This value, if given, is stored in every node, whether
	// `locations` is on or off.
	directSourceFile:null,// When enabled, parenthesized expressions are represented by
	// (non-standard) ParenthesizedExpression nodes
	preserveParens:false,plugins:{}};// Interpret and default an options object
	function getOptions(opts){var options={};for(var opt in defaultOptions)/*istanbul ignore next*/{options[opt]=opts&&has(opts,opt)?opts[opt]:defaultOptions[opt];}if(options.allowReserved==null)options.allowReserved=options.ecmaVersion<5;if(isArray(options.onToken)){var tokens=options.onToken;options.onToken=function(token){return tokens.push(token);};}if(isArray(options.onComment))options.onComment=pushComment(options,options.onComment);return options;}function pushComment(options,array){return function(block,text,start,end,startLoc,endLoc){var comment={type:block?'Block':'Line',value:text,start:start,end:end};if(options.locations)comment.loc=new SourceLocation(this,startLoc,endLoc);if(options.ranges)comment.range=[start,end];array.push(comment);};}// Registered plugins
	var plugins={};function keywordRegexp(words){return new RegExp("^("+words.replace(/ /g,"|")+")$");}var Parser=function Parser(options,input,startPos){this.options=options=getOptions(options);this.sourceFile=options.sourceFile;this.keywords=keywordRegexp(keywords[options.ecmaVersion>=6?6:5]);var reserved=options.allowReserved?"":reservedWords[options.ecmaVersion]+(options.sourceType=="module"?" await":"");this.reservedWords=keywordRegexp(reserved);var reservedStrict=(reserved?reserved+" ":"")+reservedWords.strict;this.reservedWordsStrict=keywordRegexp(reservedStrict);this.reservedWordsStrictBind=keywordRegexp(reservedStrict+" "+reservedWords.strictBind);this.input=String(input);// Used to signal to callers of `readWord1` whether the word
	// contained any escape sequences. This is needed because words with
	// escape sequences must not be interpreted as keywords.
	this.containsEsc=false;// Load plugins
	this.loadPlugins(options.plugins);// Set up token state
	// The current position of the tokenizer in the input.
	if(startPos){this.pos=startPos;this.lineStart=Math.max(0,this.input.lastIndexOf("\n",startPos));this.curLine=this.input.slice(0,this.lineStart).split(lineBreak).length;}else{this.pos=this.lineStart=0;this.curLine=1;}// Properties of the current token:
	// Its type
	this.type=tt.eof;// For tokens that include more information than their type, the value
	this.value=null;// Its start and end offset
	this.start=this.end=this.pos;// And, if locations are used, the {line, column} object
	// corresponding to those offsets
	this.startLoc=this.endLoc=this.curPosition();// Position information for the previous token
	this.lastTokEndLoc=this.lastTokStartLoc=null;this.lastTokStart=this.lastTokEnd=this.pos;// The context stack is used to superficially track syntactic
	// context to predict whether a regular expression is allowed in a
	// given position.
	this.context=this.initialContext();this.exprAllowed=true;// Figure out if it's a module code.
	this.strict=this.inModule=options.sourceType==="module";// Used to signify the start of a potential arrow function
	this.potentialArrowAt=-1;// Flags to track whether we are in a function, a generator.
	this.inFunction=this.inGenerator=false;// Labels in scope.
	this.labels=[];// If enabled, skip leading hashbang line.
	if(this.pos===0&&options.allowHashBang&&this.input.slice(0,2)==='#!')this.skipLineComment(2);};// DEPRECATED Kept for backwards compatibility until 3.0 in case a plugin uses them
	Parser.prototype.isKeyword=function isKeyword(word){return this.keywords.test(word);};Parser.prototype.isReservedWord=function isReservedWord(word){return this.reservedWords.test(word);};Parser.prototype.extend=function extend(name,f){this[name]=f(this[name]);};Parser.prototype.loadPlugins=function loadPlugins(pluginConfigs){var this$1=this;for(var name in pluginConfigs){var plugin=plugins[name];if(!plugin)throw new Error("Plugin '"+name+"' not found");plugin(this$1,pluginConfigs[name]);}};Parser.prototype.parse=function parse(){var node=this.options.program||this.startNode();this.nextToken();return this.parseTopLevel(node);};var pp=Parser.prototype;// ## Parser utilities
	// Test whether a statement node is the string literal `"use strict"`.
	pp.isUseStrict=function(stmt){return this.options.ecmaVersion>=5&&stmt.type==="ExpressionStatement"&&stmt.expression.type==="Literal"&&stmt.expression.raw.slice(1,-1)==="use strict";};// Predicate that tests whether the next token is of the given
	// type, and if yes, consumes it as a side effect.
	pp.eat=function(type){if(this.type===type){this.next();return true;}else{return false;}};// Tests whether parsed token is a contextual keyword.
	pp.isContextual=function(name){return this.type===tt.name&&this.value===name;};// Consumes contextual keyword if possible.
	pp.eatContextual=function(name){return this.value===name&&this.eat(tt.name);};// Asserts that following token is given contextual keyword.
	pp.expectContextual=function(name){if(!this.eatContextual(name))this.unexpected();};// Test whether a semicolon can be inserted at the current position.
	pp.canInsertSemicolon=function(){return this.type===tt.eof||this.type===tt.braceR||lineBreak.test(this.input.slice(this.lastTokEnd,this.start));};pp.insertSemicolon=function(){if(this.canInsertSemicolon()){if(this.options.onInsertedSemicolon)this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc);return true;}};// Consume a semicolon, or, failing that, see if we are allowed to
	// pretend that there is a semicolon at this position.
	pp.semicolon=function(){if(!this.eat(tt.semi)&&!this.insertSemicolon())this.unexpected();};pp.afterTrailingComma=function(tokType){if(this.type==tokType){if(this.options.onTrailingComma)this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc);this.next();return true;}};// Expect a token of a given type. If found, consume it, otherwise,
	// raise an unexpected token error.
	pp.expect=function(type){this.eat(type)||this.unexpected();};// Raise an unexpected token error.
	pp.unexpected=function(pos){this.raise(pos!=null?pos:this.start,"Unexpected token");};var DestructuringErrors=function DestructuringErrors(){this.shorthandAssign=0;this.trailingComma=0;};pp.checkPatternErrors=function(refDestructuringErrors,andThrow){var trailing=refDestructuringErrors&&refDestructuringErrors.trailingComma;if(!andThrow)return !!trailing;if(trailing)this.raise(trailing,"Comma is not permitted after the rest element");};pp.checkExpressionErrors=function(refDestructuringErrors,andThrow){var pos=refDestructuringErrors&&refDestructuringErrors.shorthandAssign;if(!andThrow)return !!pos;if(pos)this.raise(pos,"Shorthand property assignments are valid only in destructuring patterns");};var pp$1=Parser.prototype;// ### Statement parsing
	// Parse a program. Initializes the parser, reads any number of
	// statements, and wraps them in a Program node.  Optionally takes a
	// `program` argument.  If present, the statements will be appended
	// to its body instead of creating a new node.
	pp$1.parseTopLevel=function(node){var this$1=this;var first=true;if(!node.body)node.body=[];while(this.type!==tt.eof){var stmt=this$1.parseStatement(true,true);node.body.push(stmt);if(first){if(this$1.isUseStrict(stmt))this$1.setStrict(true);first=false;}}this.next();if(this.options.ecmaVersion>=6){node.sourceType=this.options.sourceType;}return this.finishNode(node,"Program");};var loopLabel={kind:"loop"};var switchLabel={kind:"switch"};pp$1.isLet=function(){if(this.type!==tt.name||this.options.ecmaVersion<6||this.value!="let")return false;skipWhiteSpace.lastIndex=this.pos;var skip=skipWhiteSpace.exec(this.input);var next=this.pos+skip[0].length,nextCh=this.input.charCodeAt(next);if(nextCh===91||nextCh==123)return true;// '{' and '['
	if(isIdentifierStart(nextCh,true)){for(var pos=next+1;isIdentifierChar(this.input.charCodeAt(pos),true);++pos){}var ident=this.input.slice(next,pos);if(!this.isKeyword(ident))return true;}return false;};// Parse a single statement.
	//
	// If expecting a statement and finding a slash operator, parse a
	// regular expression literal. This is to handle cases like
	// `if (foo) /blah/.exec(foo)`, where looking at the previous token
	// does not help.
	pp$1.parseStatement=function(declaration,topLevel){var starttype=this.type,node=this.startNode(),kind;if(this.isLet()){starttype=tt._var;kind="let";}// Most types of statements are recognized by the keyword they
	// start with. Many are trivial to parse, some require a bit of
	// complexity.
	switch(starttype){case tt._break:case tt._continue:return this.parseBreakContinueStatement(node,starttype.keyword);case tt._debugger:return this.parseDebuggerStatement(node);case tt._do:return this.parseDoStatement(node);case tt._for:return this.parseForStatement(node);case tt._function:if(!declaration&&this.options.ecmaVersion>=6)this.unexpected();return this.parseFunctionStatement(node);case tt._class:if(!declaration)this.unexpected();return this.parseClass(node,true);case tt._if:return this.parseIfStatement(node);case tt._return:return this.parseReturnStatement(node);case tt._switch:return this.parseSwitchStatement(node);case tt._throw:return this.parseThrowStatement(node);case tt._try:return this.parseTryStatement(node);case tt._const:case tt._var:kind=kind||this.value;if(!declaration&&kind!="var")this.unexpected();return this.parseVarStatement(node,kind);case tt._while:return this.parseWhileStatement(node);case tt._with:return this.parseWithStatement(node);case tt.braceL:return this.parseBlock();case tt.semi:return this.parseEmptyStatement(node);case tt._export:case tt._import:if(!this.options.allowImportExportEverywhere){if(!topLevel)this.raise(this.start,"'import' and 'export' may only appear at the top level");if(!this.inModule)this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'");}return starttype===tt._import?this.parseImport(node):this.parseExport(node);// If the statement does not start with a statement keyword or a
	// brace, it's an ExpressionStatement or LabeledStatement. We
	// simply start parsing an expression, and afterwards, if the
	// next token is a colon and the expression was a simple
	// Identifier node, we switch to interpreting it as a label.
	default:var maybeName=this.value,expr=this.parseExpression();if(starttype===tt.name&&expr.type==="Identifier"&&this.eat(tt.colon))return this.parseLabeledStatement(node,maybeName,expr);else return this.parseExpressionStatement(node,expr);}};pp$1.parseBreakContinueStatement=function(node,keyword){var this$1=this;var isBreak=keyword=="break";this.next();if(this.eat(tt.semi)||this.insertSemicolon())node.label=null;else if(this.type!==tt.name)this.unexpected();else{node.label=this.parseIdent();this.semicolon();}// Verify that there is an actual destination to break or
	// continue to.
	for(var i=0;i<this.labels.length;++i){var lab=this$1.labels[i];if(node.label==null||lab.name===node.label.name){if(lab.kind!=null&&(isBreak||lab.kind==="loop"))break;if(node.label&&isBreak)break;}}if(i===this.labels.length)this.raise(node.start,"Unsyntactic "+keyword);return this.finishNode(node,isBreak?"BreakStatement":"ContinueStatement");};pp$1.parseDebuggerStatement=function(node){this.next();this.semicolon();return this.finishNode(node,"DebuggerStatement");};pp$1.parseDoStatement=function(node){this.next();this.labels.push(loopLabel);node.body=this.parseStatement(false);this.labels.pop();this.expect(tt._while);node.test=this.parseParenExpression();if(this.options.ecmaVersion>=6)this.eat(tt.semi);else this.semicolon();return this.finishNode(node,"DoWhileStatement");};// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
	// loop is non-trivial. Basically, we have to parse the init `var`
	// statement or expression, disallowing the `in` operator (see
	// the second parameter to `parseExpression`), and then check
	// whether the next token is `in` or `of`. When there is no init
	// part (semicolon immediately after the opening parenthesis), it
	// is a regular `for` loop.
	pp$1.parseForStatement=function(node){this.next();this.labels.push(loopLabel);this.expect(tt.parenL);if(this.type===tt.semi)return this.parseFor(node,null);var isLet=this.isLet();if(this.type===tt._var||this.type===tt._const||isLet){var init$1=this.startNode(),kind=isLet?"let":this.value;this.next();this.parseVar(init$1,true,kind);this.finishNode(init$1,"VariableDeclaration");if((this.type===tt._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&init$1.declarations.length===1&&!(kind!=="var"&&init$1.declarations[0].init))return this.parseForIn(node,init$1);return this.parseFor(node,init$1);}var refDestructuringErrors=new DestructuringErrors();var init=this.parseExpression(true,refDestructuringErrors);if(this.type===tt._in||this.options.ecmaVersion>=6&&this.isContextual("of")){this.checkPatternErrors(refDestructuringErrors,true);this.toAssignable(init);this.checkLVal(init);return this.parseForIn(node,init);}else{this.checkExpressionErrors(refDestructuringErrors,true);}return this.parseFor(node,init);};pp$1.parseFunctionStatement=function(node){this.next();return this.parseFunction(node,true);};pp$1.parseIfStatement=function(node){this.next();node.test=this.parseParenExpression();node.consequent=this.parseStatement(false);node.alternate=this.eat(tt._else)?this.parseStatement(false):null;return this.finishNode(node,"IfStatement");};pp$1.parseReturnStatement=function(node){if(!this.inFunction&&!this.options.allowReturnOutsideFunction)this.raise(this.start,"'return' outside of function");this.next();// In `return` (and `break`/`continue`), the keywords with
	// optional arguments, we eagerly look for a semicolon or the
	// possibility to insert one.
	if(this.eat(tt.semi)||this.insertSemicolon())node.argument=null;else{node.argument=this.parseExpression();this.semicolon();}return this.finishNode(node,"ReturnStatement");};pp$1.parseSwitchStatement=function(node){var this$1=this;this.next();node.discriminant=this.parseParenExpression();node.cases=[];this.expect(tt.braceL);this.labels.push(switchLabel);// Statements under must be grouped (by label) in SwitchCase
	// nodes. `cur` is used to keep the node that we are currently
	// adding statements to.
	for(var cur,sawDefault=false;this.type!=tt.braceR;){if(this$1.type===tt._case||this$1.type===tt._default){var isCase=this$1.type===tt._case;if(cur)this$1.finishNode(cur,"SwitchCase");node.cases.push(cur=this$1.startNode());cur.consequent=[];this$1.next();if(isCase){cur.test=this$1.parseExpression();}else{if(sawDefault)this$1.raiseRecoverable(this$1.lastTokStart,"Multiple default clauses");sawDefault=true;cur.test=null;}this$1.expect(tt.colon);}else{if(!cur)this$1.unexpected();cur.consequent.push(this$1.parseStatement(true));}}if(cur)this.finishNode(cur,"SwitchCase");this.next();// Closing brace
	this.labels.pop();return this.finishNode(node,"SwitchStatement");};pp$1.parseThrowStatement=function(node){this.next();if(lineBreak.test(this.input.slice(this.lastTokEnd,this.start)))this.raise(this.lastTokEnd,"Illegal newline after throw");node.argument=this.parseExpression();this.semicolon();return this.finishNode(node,"ThrowStatement");};// Reused empty array added for node fields that are always empty.
	var empty=[];pp$1.parseTryStatement=function(node){this.next();node.block=this.parseBlock();node.handler=null;if(this.type===tt._catch){var clause=this.startNode();this.next();this.expect(tt.parenL);clause.param=this.parseBindingAtom();this.checkLVal(clause.param,true);this.expect(tt.parenR);clause.body=this.parseBlock();node.handler=this.finishNode(clause,"CatchClause");}node.finalizer=this.eat(tt._finally)?this.parseBlock():null;if(!node.handler&&!node.finalizer)this.raise(node.start,"Missing catch or finally clause");return this.finishNode(node,"TryStatement");};pp$1.parseVarStatement=function(node,kind){this.next();this.parseVar(node,false,kind);this.semicolon();return this.finishNode(node,"VariableDeclaration");};pp$1.parseWhileStatement=function(node){this.next();node.test=this.parseParenExpression();this.labels.push(loopLabel);node.body=this.parseStatement(false);this.labels.pop();return this.finishNode(node,"WhileStatement");};pp$1.parseWithStatement=function(node){if(this.strict)this.raise(this.start,"'with' in strict mode");this.next();node.object=this.parseParenExpression();node.body=this.parseStatement(false);return this.finishNode(node,"WithStatement");};pp$1.parseEmptyStatement=function(node){this.next();return this.finishNode(node,"EmptyStatement");};pp$1.parseLabeledStatement=function(node,maybeName,expr){var this$1=this;for(var i=0;i<this.labels.length;++i)/*istanbul ignore next*/{if(this$1.labels[i].name===maybeName)this$1.raise(expr.start,"Label '"+maybeName+"' is already declared");}var kind=this.type.isLoop?"loop":this.type===tt._switch?"switch":null;for(var i$1=this.labels.length-1;i$1>=0;i$1--){var label=this$1.labels[i$1];if(label.statementStart==node.start){label.statementStart=this$1.start;label.kind=kind;}else break;}this.labels.push({name:maybeName,kind:kind,statementStart:this.start});node.body=this.parseStatement(true);this.labels.pop();node.label=expr;return this.finishNode(node,"LabeledStatement");};pp$1.parseExpressionStatement=function(node,expr){node.expression=expr;this.semicolon();return this.finishNode(node,"ExpressionStatement");};// Parse a semicolon-enclosed block of statements, handling `"use
	// strict"` declarations when `allowStrict` is true (used for
	// function bodies).
	pp$1.parseBlock=function(allowStrict){var this$1=this;var node=this.startNode(),first=true,oldStrict;node.body=[];this.expect(tt.braceL);while(!this.eat(tt.braceR)){var stmt=this$1.parseStatement(true);node.body.push(stmt);if(first&&allowStrict&&this$1.isUseStrict(stmt)){oldStrict=this$1.strict;this$1.setStrict(this$1.strict=true);}first=false;}if(oldStrict===false)this.setStrict(false);return this.finishNode(node,"BlockStatement");};// Parse a regular `for` loop. The disambiguation code in
	// `parseStatement` will already have parsed the init statement or
	// expression.
	pp$1.parseFor=function(node,init){node.init=init;this.expect(tt.semi);node.test=this.type===tt.semi?null:this.parseExpression();this.expect(tt.semi);node.update=this.type===tt.parenR?null:this.parseExpression();this.expect(tt.parenR);node.body=this.parseStatement(false);this.labels.pop();return this.finishNode(node,"ForStatement");};// Parse a `for`/`in` and `for`/`of` loop, which are almost
	// same from parser's perspective.
	pp$1.parseForIn=function(node,init){var type=this.type===tt._in?"ForInStatement":"ForOfStatement";this.next();node.left=init;node.right=this.parseExpression();this.expect(tt.parenR);node.body=this.parseStatement(false);this.labels.pop();return this.finishNode(node,type);};// Parse a list of variable declarations.
	pp$1.parseVar=function(node,isFor,kind){var this$1=this;node.declarations=[];node.kind=kind;for(;;){var decl=this$1.startNode();this$1.parseVarId(decl);if(this$1.eat(tt.eq)){decl.init=this$1.parseMaybeAssign(isFor);}else if(kind==="const"&&!(this$1.type===tt._in||this$1.options.ecmaVersion>=6&&this$1.isContextual("of"))){this$1.unexpected();}else if(decl.id.type!="Identifier"&&!(isFor&&(this$1.type===tt._in||this$1.isContextual("of")))){this$1.raise(this$1.lastTokEnd,"Complex binding patterns require an initialization value");}else{decl.init=null;}node.declarations.push(this$1.finishNode(decl,"VariableDeclarator"));if(!this$1.eat(tt.comma))break;}return node;};pp$1.parseVarId=function(decl){decl.id=this.parseBindingAtom();this.checkLVal(decl.id,true);};// Parse a function declaration or literal (depending on the
	// `isStatement` parameter).
	pp$1.parseFunction=function(node,isStatement,allowExpressionBody){this.initFunction(node);if(this.options.ecmaVersion>=6)node.generator=this.eat(tt.star);var oldInGen=this.inGenerator;this.inGenerator=node.generator;if(isStatement||this.type===tt.name)node.id=this.parseIdent();this.parseFunctionParams(node);this.parseFunctionBody(node,allowExpressionBody);this.inGenerator=oldInGen;return this.finishNode(node,isStatement?"FunctionDeclaration":"FunctionExpression");};pp$1.parseFunctionParams=function(node){this.expect(tt.parenL);node.params=this.parseBindingList(tt.parenR,false,false,true);};// Parse a class declaration or literal (depending on the
	// `isStatement` parameter).
	pp$1.parseClass=function(node,isStatement){var this$1=this;this.next();this.parseClassId(node,isStatement);this.parseClassSuper(node);var classBody=this.startNode();var hadConstructor=false;classBody.body=[];this.expect(tt.braceL);while(!this.eat(tt.braceR)){if(this$1.eat(tt.semi))continue;var method=this$1.startNode();var isGenerator=this$1.eat(tt.star);var isMaybeStatic=this$1.type===tt.name&&this$1.value==="static";this$1.parsePropertyName(method);method.static=isMaybeStatic&&this$1.type!==tt.parenL;if(method.static){if(isGenerator)this$1.unexpected();isGenerator=this$1.eat(tt.star);this$1.parsePropertyName(method);}method.kind="method";var isGetSet=false;if(!method.computed){var key=method.key;if(!isGenerator&&key.type==="Identifier"&&this$1.type!==tt.parenL&&(key.name==="get"||key.name==="set")){isGetSet=true;method.kind=key.name;key=this$1.parsePropertyName(method);}if(!method.static&&(key.type==="Identifier"&&key.name==="constructor"||key.type==="Literal"&&key.value==="constructor")){if(hadConstructor)this$1.raise(key.start,"Duplicate constructor in the same class");if(isGetSet)this$1.raise(key.start,"Constructor can't have get/set modifier");if(isGenerator)this$1.raise(key.start,"Constructor can't be a generator");method.kind="constructor";hadConstructor=true;}}this$1.parseClassMethod(classBody,method,isGenerator);if(isGetSet){var paramCount=method.kind==="get"?0:1;if(method.value.params.length!==paramCount){var start=method.value.start;if(method.kind==="get")this$1.raiseRecoverable(start,"getter should have no params");else this$1.raiseRecoverable(start,"setter should have exactly one param");}if(method.kind==="set"&&method.value.params[0].type==="RestElement")this$1.raise(method.value.params[0].start,"Setter cannot use rest params");}}node.body=this.finishNode(classBody,"ClassBody");return this.finishNode(node,isStatement?"ClassDeclaration":"ClassExpression");};pp$1.parseClassMethod=function(classBody,method,isGenerator){method.value=this.parseMethod(isGenerator);classBody.body.push(this.finishNode(method,"MethodDefinition"));};pp$1.parseClassId=function(node,isStatement){node.id=this.type===tt.name?this.parseIdent():isStatement?this.unexpected():null;};pp$1.parseClassSuper=function(node){node.superClass=this.eat(tt._extends)?this.parseExprSubscripts():null;};// Parses module export declaration.
	pp$1.parseExport=function(node){var this$1=this;this.next();// export * from '...'
	if(this.eat(tt.star)){this.expectContextual("from");node.source=this.type===tt.string?this.parseExprAtom():this.unexpected();this.semicolon();return this.finishNode(node,"ExportAllDeclaration");}if(this.eat(tt._default)){// export default ...
	var parens=this.type==tt.parenL;var expr=this.parseMaybeAssign();var needsSemi=true;if(!parens&&(expr.type=="FunctionExpression"||expr.type=="ClassExpression")){needsSemi=false;if(expr.id){expr.type=expr.type=="FunctionExpression"?"FunctionDeclaration":"ClassDeclaration";}}node.declaration=expr;if(needsSemi)this.semicolon();return this.finishNode(node,"ExportDefaultDeclaration");}// export var|const|let|function|class ...
	if(this.shouldParseExportStatement()){node.declaration=this.parseStatement(true);node.specifiers=[];node.source=null;}else{// export { x, y as z } [from '...']
	node.declaration=null;node.specifiers=this.parseExportSpecifiers();if(this.eatContextual("from")){node.source=this.type===tt.string?this.parseExprAtom():this.unexpected();}else{// check for keywords used as local names
	for(var i=0;i<node.specifiers.length;i++){if(this$1.keywords.test(node.specifiers[i].local.name)||this$1.reservedWords.test(node.specifiers[i].local.name)){this$1.unexpected(node.specifiers[i].local.start);}}node.source=null;}this.semicolon();}return this.finishNode(node,"ExportNamedDeclaration");};pp$1.shouldParseExportStatement=function(){return this.type.keyword||this.isLet();};// Parses a comma-separated list of module exports.
	pp$1.parseExportSpecifiers=function(){var this$1=this;var nodes=[],first=true;// export { x, y as z } [from '...']
	this.expect(tt.braceL);while(!this.eat(tt.braceR)){if(!first){this$1.expect(tt.comma);if(this$1.afterTrailingComma(tt.braceR))break;}else first=false;var node=this$1.startNode();node.local=this$1.parseIdent(this$1.type===tt._default);node.exported=this$1.eatContextual("as")?this$1.parseIdent(true):node.local;nodes.push(this$1.finishNode(node,"ExportSpecifier"));}return nodes;};// Parses import declaration.
	pp$1.parseImport=function(node){this.next();// import '...'
	if(this.type===tt.string){node.specifiers=empty;node.source=this.parseExprAtom();}else{node.specifiers=this.parseImportSpecifiers();this.expectContextual("from");node.source=this.type===tt.string?this.parseExprAtom():this.unexpected();}this.semicolon();return this.finishNode(node,"ImportDeclaration");};// Parses a comma-separated list of module imports.
	pp$1.parseImportSpecifiers=function(){var this$1=this;var nodes=[],first=true;if(this.type===tt.name){// import defaultObj, { x, y as z } from '...'
	var node=this.startNode();node.local=this.parseIdent();this.checkLVal(node.local,true);nodes.push(this.finishNode(node,"ImportDefaultSpecifier"));if(!this.eat(tt.comma))return nodes;}if(this.type===tt.star){var node$1=this.startNode();this.next();this.expectContextual("as");node$1.local=this.parseIdent();this.checkLVal(node$1.local,true);nodes.push(this.finishNode(node$1,"ImportNamespaceSpecifier"));return nodes;}this.expect(tt.braceL);while(!this.eat(tt.braceR)){if(!first){this$1.expect(tt.comma);if(this$1.afterTrailingComma(tt.braceR))break;}else first=false;var node$2=this$1.startNode();node$2.imported=this$1.parseIdent(true);if(this$1.eatContextual("as")){node$2.local=this$1.parseIdent();}else{node$2.local=node$2.imported;if(this$1.isKeyword(node$2.local.name))this$1.unexpected(node$2.local.start);if(this$1.reservedWordsStrict.test(node$2.local.name))this$1.raise(node$2.local.start,"The keyword '"+node$2.local.name+"' is reserved");}this$1.checkLVal(node$2.local,true);nodes.push(this$1.finishNode(node$2,"ImportSpecifier"));}return nodes;};var pp$2=Parser.prototype;// Convert existing expression atom to assignable pattern
	// if possible.
	pp$2.toAssignable=function(node,isBinding){var this$1=this;if(this.options.ecmaVersion>=6&&node){switch(node.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":break;case"ObjectExpression":node.type="ObjectPattern";for(var i=0;i<node.properties.length;i++){var prop=node.properties[i];if(prop.kind!=="init")this$1.raise(prop.key.start,"Object pattern can't contain getter or setter");this$1.toAssignable(prop.value,isBinding);}break;case"ArrayExpression":node.type="ArrayPattern";this.toAssignableList(node.elements,isBinding);break;case"AssignmentExpression":if(node.operator==="="){node.type="AssignmentPattern";delete node.operator;// falls through to AssignmentPattern
	}else{this.raise(node.left.end,"Only '=' operator can be used for specifying default value.");break;}case"AssignmentPattern":if(node.right.type==="YieldExpression")this.raise(node.right.start,"Yield expression cannot be a default value");break;case"ParenthesizedExpression":node.expression=this.toAssignable(node.expression,isBinding);break;case"MemberExpression":if(!isBinding)break;default:this.raise(node.start,"Assigning to rvalue");}}return node;};// Convert list of expression atoms to binding list.
	pp$2.toAssignableList=function(exprList,isBinding){var this$1=this;var end=exprList.length;if(end){var last=exprList[end-1];if(last&&last.type=="RestElement"){--end;}else if(last&&last.type=="SpreadElement"){last.type="RestElement";var arg=last.argument;this.toAssignable(arg,isBinding);if(arg.type!=="Identifier"&&arg.type!=="MemberExpression"&&arg.type!=="ArrayPattern")this.unexpected(arg.start);--end;}if(isBinding&&last&&last.type==="RestElement"&&last.argument.type!=="Identifier")this.unexpected(last.argument.start);}for(var i=0;i<end;i++){var elt=exprList[i];if(elt)this$1.toAssignable(elt,isBinding);}return exprList;};// Parses spread element.
	pp$2.parseSpread=function(refDestructuringErrors){var node=this.startNode();this.next();node.argument=this.parseMaybeAssign(false,refDestructuringErrors);return this.finishNode(node,"SpreadElement");};pp$2.parseRest=function(allowNonIdent){var node=this.startNode();this.next();// RestElement inside of a function parameter must be an identifier
	if(allowNonIdent)node.argument=this.type===tt.name?this.parseIdent():this.unexpected();else node.argument=this.type===tt.name||this.type===tt.bracketL?this.parseBindingAtom():this.unexpected();return this.finishNode(node,"RestElement");};// Parses lvalue (assignable) atom.
	pp$2.parseBindingAtom=function(){if(this.options.ecmaVersion<6)return this.parseIdent();switch(this.type){case tt.name:return this.parseIdent();case tt.bracketL:var node=this.startNode();this.next();node.elements=this.parseBindingList(tt.bracketR,true,true);return this.finishNode(node,"ArrayPattern");case tt.braceL:return this.parseObj(true);default:this.unexpected();}};pp$2.parseBindingList=function(close,allowEmpty,allowTrailingComma,allowNonIdent){var this$1=this;var elts=[],first=true;while(!this.eat(close)){if(first)first=false;else this$1.expect(tt.comma);if(allowEmpty&&this$1.type===tt.comma){elts.push(null);}else if(allowTrailingComma&&this$1.afterTrailingComma(close)){break;}else if(this$1.type===tt.ellipsis){var rest=this$1.parseRest(allowNonIdent);this$1.parseBindingListItem(rest);elts.push(rest);if(this$1.type===tt.comma)this$1.raise(this$1.start,"Comma is not permitted after the rest element");this$1.expect(close);break;}else{var elem=this$1.parseMaybeDefault(this$1.start,this$1.startLoc);this$1.parseBindingListItem(elem);elts.push(elem);}}return elts;};pp$2.parseBindingListItem=function(param){return param;};// Parses assignment pattern around given atom if possible.
	pp$2.parseMaybeDefault=function(startPos,startLoc,left){left=left||this.parseBindingAtom();if(this.options.ecmaVersion<6||!this.eat(tt.eq))return left;var node=this.startNodeAt(startPos,startLoc);node.left=left;node.right=this.parseMaybeAssign();return this.finishNode(node,"AssignmentPattern");};// Verify that a node is an lval — something that can be assigned
	// to.
	pp$2.checkLVal=function(expr,isBinding,checkClashes){var this$1=this;switch(expr.type){case"Identifier":if(this.strict&&this.reservedWordsStrictBind.test(expr.name))this.raiseRecoverable(expr.start,(isBinding?"Binding ":"Assigning to ")+expr.name+" in strict mode");if(checkClashes){if(has(checkClashes,expr.name))this.raiseRecoverable(expr.start,"Argument name clash");checkClashes[expr.name]=true;}break;case"MemberExpression":if(isBinding)this.raiseRecoverable(expr.start,(isBinding?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var i=0;i<expr.properties.length;i++)/*istanbul ignore next*/{this$1.checkLVal(expr.properties[i].value,isBinding,checkClashes);}break;case"ArrayPattern":for(var i$1=0;i$1<expr.elements.length;i$1++){var elem=expr.elements[i$1];if(elem)this$1.checkLVal(elem,isBinding,checkClashes);}break;case"AssignmentPattern":this.checkLVal(expr.left,isBinding,checkClashes);break;case"RestElement":this.checkLVal(expr.argument,isBinding,checkClashes);break;case"ParenthesizedExpression":this.checkLVal(expr.expression,isBinding,checkClashes);break;default:this.raise(expr.start,(isBinding?"Binding":"Assigning to")+" rvalue");}};var pp$3=Parser.prototype;// Check if property name clashes with already added.
	// Object/class getters and setters are not allowed to clash —
	// either with each other or with an init property — and in
	// strict mode, init properties are also not allowed to be repeated.
	pp$3.checkPropClash=function(prop,propHash){if(this.options.ecmaVersion>=6&&(prop.computed||prop.method||prop.shorthand))return;var key=prop.key;var name;switch(key.type){case"Identifier":name=key.name;break;case"Literal":name=String(key.value);break;default:return;}var kind=prop.kind;if(this.options.ecmaVersion>=6){if(name==="__proto__"&&kind==="init"){if(propHash.proto)this.raiseRecoverable(key.start,"Redefinition of __proto__ property");propHash.proto=true;}return;}name="$"+name;var other=propHash[name];if(other){var isGetSet=kind!=="init";if((this.strict||isGetSet)&&other[kind]||!(isGetSet^other.init))this.raiseRecoverable(key.start,"Redefinition of property");}else{other=propHash[name]={init:false,get:false,set:false};}other[kind]=true;};// ### Expression parsing
	// These nest, from the most general expression type at the top to
	// 'atomic', nondivisible expression types at the bottom. Most of
	// the functions will simply let the function(s) below them parse,
	// and, *if* the syntactic construct they handle is present, wrap
	// the AST node that the inner parser gave them in another node.
	// Parse a full expression. The optional arguments are used to
	// forbid the `in` operator (in for loops initalization expressions)
	// and provide reference for storing '=' operator inside shorthand
	// property assignment in contexts where both object expression
	// and object pattern might appear (so it's possible to raise
	// delayed syntax error at correct position).
	pp$3.parseExpression=function(noIn,refDestructuringErrors){var this$1=this;var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeAssign(noIn,refDestructuringErrors);if(this.type===tt.comma){var node=this.startNodeAt(startPos,startLoc);node.expressions=[expr];while(this.eat(tt.comma))/*istanbul ignore next*/{node.expressions.push(this$1.parseMaybeAssign(noIn,refDestructuringErrors));}return this.finishNode(node,"SequenceExpression");}return expr;};// Parse an assignment expression. This includes applications of
	// operators like `+=`.
	pp$3.parseMaybeAssign=function(noIn,refDestructuringErrors,afterLeftParse){if(this.inGenerator&&this.isContextual("yield"))return this.parseYield();var ownDestructuringErrors=false;if(!refDestructuringErrors){refDestructuringErrors=new DestructuringErrors();ownDestructuringErrors=true;}var startPos=this.start,startLoc=this.startLoc;if(this.type==tt.parenL||this.type==tt.name)this.potentialArrowAt=this.start;var left=this.parseMaybeConditional(noIn,refDestructuringErrors);if(afterLeftParse)left=afterLeftParse.call(this,left,startPos,startLoc);if(this.type.isAssign){this.checkPatternErrors(refDestructuringErrors,true);if(!ownDestructuringErrors)DestructuringErrors.call(refDestructuringErrors);var node=this.startNodeAt(startPos,startLoc);node.operator=this.value;node.left=this.type===tt.eq?this.toAssignable(left):left;refDestructuringErrors.shorthandAssign=0;// reset because shorthand default was used correctly
	this.checkLVal(left);this.next();node.right=this.parseMaybeAssign(noIn);return this.finishNode(node,"AssignmentExpression");}else{if(ownDestructuringErrors)this.checkExpressionErrors(refDestructuringErrors,true);}return left;};// Parse a ternary conditional (`?:`) operator.
	pp$3.parseMaybeConditional=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprOps(noIn,refDestructuringErrors);if(this.checkExpressionErrors(refDestructuringErrors))return expr;if(this.eat(tt.question)){var node=this.startNodeAt(startPos,startLoc);node.test=expr;node.consequent=this.parseMaybeAssign();this.expect(tt.colon);node.alternate=this.parseMaybeAssign(noIn);return this.finishNode(node,"ConditionalExpression");}return expr;};// Start the precedence parser.
	pp$3.parseExprOps=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeUnary(refDestructuringErrors,false);if(this.checkExpressionErrors(refDestructuringErrors))return expr;return this.parseExprOp(expr,startPos,startLoc,-1,noIn);};// Parse binary operators with the operator precedence parsing
	// algorithm. `left` is the left-hand side of the operator.
	// `minPrec` provides context that allows the function to stop and
	// defer further parser to one of its callers when it encounters an
	// operator that has a lower precedence than the set it is parsing.
	pp$3.parseExprOp=function(left,leftStartPos,leftStartLoc,minPrec,noIn){var prec=this.type.binop;if(prec!=null&&(!noIn||this.type!==tt._in)){if(prec>minPrec){var logical=this.type===tt.logicalOR||this.type===tt.logicalAND;var op=this.value;this.next();var startPos=this.start,startLoc=this.startLoc;var right=this.parseExprOp(this.parseMaybeUnary(null,false),startPos,startLoc,prec,noIn);var node=this.buildBinary(leftStartPos,leftStartLoc,left,right,op,logical);return this.parseExprOp(node,leftStartPos,leftStartLoc,minPrec,noIn);}}return left;};pp$3.buildBinary=function(startPos,startLoc,left,right,op,logical){var node=this.startNodeAt(startPos,startLoc);node.left=left;node.operator=op;node.right=right;return this.finishNode(node,logical?"LogicalExpression":"BinaryExpression");};// Parse unary operators, both prefix and postfix.
	pp$3.parseMaybeUnary=function(refDestructuringErrors,sawUnary){var this$1=this;var startPos=this.start,startLoc=this.startLoc,expr;if(this.type.prefix){var node=this.startNode(),update=this.type===tt.incDec;node.operator=this.value;node.prefix=true;this.next();node.argument=this.parseMaybeUnary(null,true);this.checkExpressionErrors(refDestructuringErrors,true);if(update)this.checkLVal(node.argument);else if(this.strict&&node.operator==="delete"&&node.argument.type==="Identifier")this.raiseRecoverable(node.start,"Deleting local variable in strict mode");else sawUnary=true;expr=this.finishNode(node,update?"UpdateExpression":"UnaryExpression");}else{expr=this.parseExprSubscripts(refDestructuringErrors);if(this.checkExpressionErrors(refDestructuringErrors))return expr;while(this.type.postfix&&!this.canInsertSemicolon()){var node$1=this$1.startNodeAt(startPos,startLoc);node$1.operator=this$1.value;node$1.prefix=false;node$1.argument=expr;this$1.checkLVal(expr);this$1.next();expr=this$1.finishNode(node$1,"UpdateExpression");}}if(!sawUnary&&this.eat(tt.starstar))return this.buildBinary(startPos,startLoc,expr,this.parseMaybeUnary(null,false),"**",false);else return expr;};// Parse call, dot, and `[]`-subscript expressions.
	pp$3.parseExprSubscripts=function(refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprAtom(refDestructuringErrors);var skipArrowSubscripts=expr.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")";if(this.checkExpressionErrors(refDestructuringErrors)||skipArrowSubscripts)return expr;return this.parseSubscripts(expr,startPos,startLoc);};pp$3.parseSubscripts=function(base,startPos,startLoc,noCalls){var this$1=this;for(;;){if(this$1.eat(tt.dot)){var node=this$1.startNodeAt(startPos,startLoc);node.object=base;node.property=this$1.parseIdent(true);node.computed=false;base=this$1.finishNode(node,"MemberExpression");}else if(this$1.eat(tt.bracketL)){var node$1=this$1.startNodeAt(startPos,startLoc);node$1.object=base;node$1.property=this$1.parseExpression();node$1.computed=true;this$1.expect(tt.bracketR);base=this$1.finishNode(node$1,"MemberExpression");}else if(!noCalls&&this$1.eat(tt.parenL)){var node$2=this$1.startNodeAt(startPos,startLoc);node$2.callee=base;node$2.arguments=this$1.parseExprList(tt.parenR,false);base=this$1.finishNode(node$2,"CallExpression");}else if(this$1.type===tt.backQuote){var node$3=this$1.startNodeAt(startPos,startLoc);node$3.tag=base;node$3.quasi=this$1.parseTemplate();base=this$1.finishNode(node$3,"TaggedTemplateExpression");}else{return base;}}};// Parse an atomic expression — either a single token that is an
	// expression, an expression started by a keyword like `function` or
	// `new`, or an expression wrapped in punctuation like `()`, `[]`,
	// or `{}`.
	pp$3.parseExprAtom=function(refDestructuringErrors){var node,canBeArrow=this.potentialArrowAt==this.start;switch(this.type){case tt._super:if(!this.inFunction)this.raise(this.start,"'super' outside of function or class");case tt._this:var type=this.type===tt._this?"ThisExpression":"Super";node=this.startNode();this.next();return this.finishNode(node,type);case tt.name:var startPos=this.start,startLoc=this.startLoc;var id=this.parseIdent(this.type!==tt.name);if(canBeArrow&&!this.canInsertSemicolon()&&this.eat(tt.arrow))return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),[id]);return id;case tt.regexp:var value=this.value;node=this.parseLiteral(value.value);node.regex={pattern:value.pattern,flags:value.flags};return node;case tt.num:case tt.string:return this.parseLiteral(this.value);case tt._null:case tt._true:case tt._false:node=this.startNode();node.value=this.type===tt._null?null:this.type===tt._true;node.raw=this.type.keyword;this.next();return this.finishNode(node,"Literal");case tt.parenL:return this.parseParenAndDistinguishExpression(canBeArrow);case tt.bracketL:node=this.startNode();this.next();node.elements=this.parseExprList(tt.bracketR,true,true,refDestructuringErrors);return this.finishNode(node,"ArrayExpression");case tt.braceL:return this.parseObj(false,refDestructuringErrors);case tt._function:node=this.startNode();this.next();return this.parseFunction(node,false);case tt._class:return this.parseClass(this.startNode(),false);case tt._new:return this.parseNew();case tt.backQuote:return this.parseTemplate();default:this.unexpected();}};pp$3.parseLiteral=function(value){var node=this.startNode();node.value=value;node.raw=this.input.slice(this.start,this.end);this.next();return this.finishNode(node,"Literal");};pp$3.parseParenExpression=function(){this.expect(tt.parenL);var val=this.parseExpression();this.expect(tt.parenR);return val;};pp$3.parseParenAndDistinguishExpression=function(canBeArrow){var this$1=this;var startPos=this.start,startLoc=this.startLoc,val;if(this.options.ecmaVersion>=6){this.next();var innerStartPos=this.start,innerStartLoc=this.startLoc;var exprList=[],first=true;var refDestructuringErrors=new DestructuringErrors(),spreadStart,innerParenStart;while(this.type!==tt.parenR){first?first=false:this$1.expect(tt.comma);if(this$1.type===tt.ellipsis){spreadStart=this$1.start;exprList.push(this$1.parseParenItem(this$1.parseRest()));break;}else{if(this$1.type===tt.parenL&&!innerParenStart){innerParenStart=this$1.start;}exprList.push(this$1.parseMaybeAssign(false,refDestructuringErrors,this$1.parseParenItem));}}var innerEndPos=this.start,innerEndLoc=this.startLoc;this.expect(tt.parenR);if(canBeArrow&&!this.canInsertSemicolon()&&this.eat(tt.arrow)){this.checkPatternErrors(refDestructuringErrors,true);if(innerParenStart)this.unexpected(innerParenStart);return this.parseParenArrowList(startPos,startLoc,exprList);}if(!exprList.length)this.unexpected(this.lastTokStart);if(spreadStart)this.unexpected(spreadStart);this.checkExpressionErrors(refDestructuringErrors,true);if(exprList.length>1){val=this.startNodeAt(innerStartPos,innerStartLoc);val.expressions=exprList;this.finishNodeAt(val,"SequenceExpression",innerEndPos,innerEndLoc);}else{val=exprList[0];}}else{val=this.parseParenExpression();}if(this.options.preserveParens){var par=this.startNodeAt(startPos,startLoc);par.expression=val;return this.finishNode(par,"ParenthesizedExpression");}else{return val;}};pp$3.parseParenItem=function(item){return item;};pp$3.parseParenArrowList=function(startPos,startLoc,exprList){return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),exprList);};// New's precedence is slightly tricky. It must allow its argument to
	// be a `[]` or dot subscript expression, but not a call — at least,
	// not without wrapping it in parentheses. Thus, it uses the noCalls
	// argument to parseSubscripts to prevent it from consuming the
	// argument list.
	var empty$1=[];pp$3.parseNew=function(){var node=this.startNode();var meta=this.parseIdent(true);if(this.options.ecmaVersion>=6&&this.eat(tt.dot)){node.meta=meta;node.property=this.parseIdent(true);if(node.property.name!=="target")this.raiseRecoverable(node.property.start,"The only valid meta property for new is new.target");if(!this.inFunction)this.raiseRecoverable(node.start,"new.target can only be used in functions");return this.finishNode(node,"MetaProperty");}var startPos=this.start,startLoc=this.startLoc;node.callee=this.parseSubscripts(this.parseExprAtom(),startPos,startLoc,true);if(this.eat(tt.parenL))node.arguments=this.parseExprList(tt.parenR,false);else node.arguments=empty$1;return this.finishNode(node,"NewExpression");};// Parse template expression.
	pp$3.parseTemplateElement=function(){var elem=this.startNode();elem.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,'\n'),cooked:this.value};this.next();elem.tail=this.type===tt.backQuote;return this.finishNode(elem,"TemplateElement");};pp$3.parseTemplate=function(){var this$1=this;var node=this.startNode();this.next();node.expressions=[];var curElt=this.parseTemplateElement();node.quasis=[curElt];while(!curElt.tail){this$1.expect(tt.dollarBraceL);node.expressions.push(this$1.parseExpression());this$1.expect(tt.braceR);node.quasis.push(curElt=this$1.parseTemplateElement());}this.next();return this.finishNode(node,"TemplateLiteral");};// Parse an object literal or binding pattern.
	pp$3.parseObj=function(isPattern,refDestructuringErrors){var this$1=this;var node=this.startNode(),first=true,propHash={};node.properties=[];this.next();while(!this.eat(tt.braceR)){if(!first){this$1.expect(tt.comma);if(this$1.afterTrailingComma(tt.braceR))break;}else first=false;var prop=this$1.startNode(),isGenerator,startPos,startLoc;if(this$1.options.ecmaVersion>=6){prop.method=false;prop.shorthand=false;if(isPattern||refDestructuringErrors){startPos=this$1.start;startLoc=this$1.startLoc;}if(!isPattern)isGenerator=this$1.eat(tt.star);}this$1.parsePropertyName(prop);this$1.parsePropertyValue(prop,isPattern,isGenerator,startPos,startLoc,refDestructuringErrors);this$1.checkPropClash(prop,propHash);node.properties.push(this$1.finishNode(prop,"Property"));}return this.finishNode(node,isPattern?"ObjectPattern":"ObjectExpression");};pp$3.parsePropertyValue=function(prop,isPattern,isGenerator,startPos,startLoc,refDestructuringErrors){if(this.eat(tt.colon)){prop.value=isPattern?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(false,refDestructuringErrors);prop.kind="init";}else if(this.options.ecmaVersion>=6&&this.type===tt.parenL){if(isPattern)this.unexpected();prop.kind="init";prop.method=true;prop.value=this.parseMethod(isGenerator);}else if(this.options.ecmaVersion>=5&&!prop.computed&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")&&this.type!=tt.comma&&this.type!=tt.braceR){if(isGenerator||isPattern)this.unexpected();prop.kind=prop.key.name;this.parsePropertyName(prop);prop.value=this.parseMethod(false);var paramCount=prop.kind==="get"?0:1;if(prop.value.params.length!==paramCount){var start=prop.value.start;if(prop.kind==="get")this.raiseRecoverable(start,"getter should have no params");else this.raiseRecoverable(start,"setter should have exactly one param");}if(prop.kind==="set"&&prop.value.params[0].type==="RestElement")this.raiseRecoverable(prop.value.params[0].start,"Setter cannot use rest params");}else if(this.options.ecmaVersion>=6&&!prop.computed&&prop.key.type==="Identifier"){if(this.keywords.test(prop.key.name)||(this.strict?this.reservedWordsStrictBind:this.reservedWords).test(prop.key.name)||this.inGenerator&&prop.key.name=="yield")this.raiseRecoverable(prop.key.start,"'"+prop.key.name+"' can not be used as shorthand property");prop.kind="init";if(isPattern){prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key);}else if(this.type===tt.eq&&refDestructuringErrors){if(!refDestructuringErrors.shorthandAssign)refDestructuringErrors.shorthandAssign=this.start;prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key);}else{prop.value=prop.key;}prop.shorthand=true;}else this.unexpected();};pp$3.parsePropertyName=function(prop){if(this.options.ecmaVersion>=6){if(this.eat(tt.bracketL)){prop.computed=true;prop.key=this.parseMaybeAssign();this.expect(tt.bracketR);return prop.key;}else{prop.computed=false;}}return prop.key=this.type===tt.num||this.type===tt.string?this.parseExprAtom():this.parseIdent(true);};// Initialize empty function node.
	pp$3.initFunction=function(node){node.id=null;if(this.options.ecmaVersion>=6){node.generator=false;node.expression=false;}};// Parse object or class method.
	pp$3.parseMethod=function(isGenerator){var node=this.startNode(),oldInGen=this.inGenerator;this.inGenerator=isGenerator;this.initFunction(node);this.expect(tt.parenL);node.params=this.parseBindingList(tt.parenR,false,false);if(this.options.ecmaVersion>=6)node.generator=isGenerator;this.parseFunctionBody(node,false);this.inGenerator=oldInGen;return this.finishNode(node,"FunctionExpression");};// Parse arrow function expression with given parameters.
	pp$3.parseArrowExpression=function(node,params){var oldInGen=this.inGenerator;this.inGenerator=false;this.initFunction(node);node.params=this.toAssignableList(params,true);this.parseFunctionBody(node,true);this.inGenerator=oldInGen;return this.finishNode(node,"ArrowFunctionExpression");};// Parse function body and check parameters.
	pp$3.parseFunctionBody=function(node,isArrowFunction){var isExpression=isArrowFunction&&this.type!==tt.braceL;if(isExpression){node.body=this.parseMaybeAssign();node.expression=true;}else{// Start a new scope with regard to labels and the `inFunction`
	// flag (restore them to their old value afterwards).
	var oldInFunc=this.inFunction,oldLabels=this.labels;this.inFunction=true;this.labels=[];node.body=this.parseBlock(true);node.expression=false;this.inFunction=oldInFunc;this.labels=oldLabels;}// If this is a strict mode function, verify that argument names
	// are not repeated, and it does not try to bind the words `eval`
	// or `arguments`.
	var useStrict=!isExpression&&node.body.body.length&&this.isUseStrict(node.body.body[0])?node.body.body[0]:null;if(this.strict||useStrict){var oldStrict=this.strict;this.strict=true;if(node.id)this.checkLVal(node.id,true);this.checkParams(node,useStrict);this.strict=oldStrict;}else if(isArrowFunction){this.checkParams(node,useStrict);}};// Checks function params for various disallowed patterns such as using "eval"
	// or "arguments" and duplicate parameters.
	pp$3.checkParams=function(node,useStrict){var this$1=this;var nameHash={};for(var i=0;i<node.params.length;i++){if(useStrict&&this$1.options.ecmaVersion>=7&&node.params[i].type!=="Identifier")this$1.raiseRecoverable(useStrict.start,"Illegal 'use strict' directive in function with non-simple parameter list");this$1.checkLVal(node.params[i],true,nameHash);}};// Parses a comma-separated list of expressions, and returns them as
	// an array. `close` is the token type that ends the list, and
	// `allowEmpty` can be turned on to allow subsequent commas with
	// nothing in between them to be parsed as `null` (which is needed
	// for array literals).
	pp$3.parseExprList=function(close,allowTrailingComma,allowEmpty,refDestructuringErrors){var this$1=this;var elts=[],first=true;while(!this.eat(close)){if(!first){this$1.expect(tt.comma);if(allowTrailingComma&&this$1.afterTrailingComma(close))break;}else first=false;var elt;if(allowEmpty&&this$1.type===tt.comma)elt=null;else if(this$1.type===tt.ellipsis){elt=this$1.parseSpread(refDestructuringErrors);if(this$1.type===tt.comma&&refDestructuringErrors&&!refDestructuringErrors.trailingComma){refDestructuringErrors.trailingComma=this$1.lastTokStart;}}else elt=this$1.parseMaybeAssign(false,refDestructuringErrors);elts.push(elt);}return elts;};// Parse the next token as an identifier. If `liberal` is true (used
	// when parsing properties), it will also convert keywords into
	// identifiers.
	pp$3.parseIdent=function(liberal){var node=this.startNode();if(liberal&&this.options.allowReserved=="never")liberal=false;if(this.type===tt.name){if(!liberal&&(this.strict?this.reservedWordsStrict:this.reservedWords).test(this.value)&&(this.options.ecmaVersion>=6||this.input.slice(this.start,this.end).indexOf("\\")==-1))this.raiseRecoverable(this.start,"The keyword '"+this.value+"' is reserved");if(!liberal&&this.inGenerator&&this.value==="yield")this.raiseRecoverable(this.start,"Can not use 'yield' as identifier inside a generator");node.name=this.value;}else if(liberal&&this.type.keyword){node.name=this.type.keyword;}else{this.unexpected();}this.next();return this.finishNode(node,"Identifier");};// Parses yield expression inside generator.
	pp$3.parseYield=function(){var node=this.startNode();this.next();if(this.type==tt.semi||this.canInsertSemicolon()||this.type!=tt.star&&!this.type.startsExpr){node.delegate=false;node.argument=null;}else{node.delegate=this.eat(tt.star);node.argument=this.parseMaybeAssign();}return this.finishNode(node,"YieldExpression");};var pp$4=Parser.prototype;// This function is used to raise exceptions on parse errors. It
	// takes an offset integer (into the current `input`) to indicate
	// the location of the error, attaches the position to the end
	// of the error message, and then raises a `SyntaxError` with that
	// message.
	pp$4.raise=function(pos,message){var loc=getLineInfo(this.input,pos);message+=" ("+loc.line+":"+loc.column+")";var err=new SyntaxError(message);err.pos=pos;err.loc=loc;err.raisedAt=this.pos;throw err;};pp$4.raiseRecoverable=pp$4.raise;pp$4.curPosition=function(){if(this.options.locations){return new Position(this.curLine,this.pos-this.lineStart);}};var Node=function Node(parser,pos,loc){this.type="";this.start=pos;this.end=0;if(parser.options.locations)this.loc=new SourceLocation(parser,loc);if(parser.options.directSourceFile)this.sourceFile=parser.options.directSourceFile;if(parser.options.ranges)this.range=[pos,0];};// Start an AST node, attaching a start offset.
	var pp$5=Parser.prototype;pp$5.startNode=function(){return new Node(this,this.start,this.startLoc);};pp$5.startNodeAt=function(pos,loc){return new Node(this,pos,loc);};// Finish an AST node, adding `type` and `end` properties.
	function finishNodeAt(node,type,pos,loc){node.type=type;node.end=pos;if(this.options.locations)node.loc.end=loc;if(this.options.ranges)node.range[1]=pos;return node;}pp$5.finishNode=function(node,type){return finishNodeAt.call(this,node,type,this.lastTokEnd,this.lastTokEndLoc);};// Finish node at given position
	pp$5.finishNodeAt=function(node,type,pos,loc){return finishNodeAt.call(this,node,type,pos,loc);};var TokContext=function TokContext(token,isExpr,preserveSpace,override){this.token=token;this.isExpr=!!isExpr;this.preserveSpace=!!preserveSpace;this.override=override;};var types={b_stat:new TokContext("{",false),b_expr:new TokContext("{",true),b_tmpl:new TokContext("${",true),p_stat:new TokContext("(",false),p_expr:new TokContext("(",true),q_tmpl:new TokContext("`",true,true,function(p){return p.readTmplToken();}),f_expr:new TokContext("function",true)};var pp$6=Parser.prototype;pp$6.initialContext=function(){return [types.b_stat];};pp$6.braceIsBlock=function(prevType){if(prevType===tt.colon){var parent=this.curContext();if(parent===types.b_stat||parent===types.b_expr)return !parent.isExpr;}if(prevType===tt._return)return lineBreak.test(this.input.slice(this.lastTokEnd,this.start));if(prevType===tt._else||prevType===tt.semi||prevType===tt.eof||prevType===tt.parenR)return true;if(prevType==tt.braceL)return this.curContext()===types.b_stat;return !this.exprAllowed;};pp$6.updateContext=function(prevType){var update,type=this.type;if(type.keyword&&prevType==tt.dot)this.exprAllowed=false;else if(update=type.updateContext)update.call(this,prevType);else this.exprAllowed=type.beforeExpr;};// Token-specific context update code
	tt.parenR.updateContext=tt.braceR.updateContext=function(){if(this.context.length==1){this.exprAllowed=true;return;}var out=this.context.pop();if(out===types.b_stat&&this.curContext()===types.f_expr){this.context.pop();this.exprAllowed=false;}else if(out===types.b_tmpl){this.exprAllowed=true;}else{this.exprAllowed=!out.isExpr;}};tt.braceL.updateContext=function(prevType){this.context.push(this.braceIsBlock(prevType)?types.b_stat:types.b_expr);this.exprAllowed=true;};tt.dollarBraceL.updateContext=function(){this.context.push(types.b_tmpl);this.exprAllowed=true;};tt.parenL.updateContext=function(prevType){var statementParens=prevType===tt._if||prevType===tt._for||prevType===tt._with||prevType===tt._while;this.context.push(statementParens?types.p_stat:types.p_expr);this.exprAllowed=true;};tt.incDec.updateContext=function(){// tokExprAllowed stays unchanged
	};tt._function.updateContext=function(prevType){if(prevType.beforeExpr&&prevType!==tt.semi&&prevType!==tt._else&&!((prevType===tt.colon||prevType===tt.braceL)&&this.curContext()===types.b_stat))this.context.push(types.f_expr);this.exprAllowed=false;};tt.backQuote.updateContext=function(){if(this.curContext()===types.q_tmpl)this.context.pop();else this.context.push(types.q_tmpl);this.exprAllowed=false;};// Object type used to represent tokens. Note that normally, tokens
	// simply exist as properties on the parser object. This is only
	// used for the onToken callback and the external tokenizer.
	var Token=function Token(p){this.type=p.type;this.value=p.value;this.start=p.start;this.end=p.end;if(p.options.locations)this.loc=new SourceLocation(p,p.startLoc,p.endLoc);if(p.options.ranges)this.range=[p.start,p.end];};// ## Tokenizer
	var pp$7=Parser.prototype;// Are we running under Rhino?
	var isRhino=/*istanbul ignore next*/(typeof Packages==="undefined"?"undefined":(0, _typeof3.default)(Packages))=="object"&&Object.prototype.toString.call(Packages)=="[object JavaPackage]";// Move to the next token
	pp$7.next=function(){if(this.options.onToken)this.options.onToken(new Token(this));this.lastTokEnd=this.end;this.lastTokStart=this.start;this.lastTokEndLoc=this.endLoc;this.lastTokStartLoc=this.startLoc;this.nextToken();};pp$7.getToken=function(){this.next();return new Token(this);};// If we're in an ES6 environment, make parsers iterable
	if(typeof/*istanbul ignore next*/_symbol2.default!=="undefined")pp$7[/*istanbul ignore next*/_iterator2.default]=function(){var self=this;return {next:function/*istanbul ignore next*/next(){var token=self.getToken();return {done:token.type===tt.eof,value:token};}};};// Toggle strict mode. Re-reads the next number or string to please
	// pedantic tests (`"use strict"; 010;` should fail).
	pp$7.setStrict=function(strict){var this$1=this;this.strict=strict;if(this.type!==tt.num&&this.type!==tt.string)return;this.pos=this.start;if(this.options.locations){while(this.pos<this.lineStart){this$1.lineStart=this$1.input.lastIndexOf("\n",this$1.lineStart-2)+1;--this$1.curLine;}}this.nextToken();};pp$7.curContext=function(){return this.context[this.context.length-1];};// Read a single token, updating the parser object's token-related
	// properties.
	pp$7.nextToken=function(){var curContext=this.curContext();if(!curContext||!curContext.preserveSpace)this.skipSpace();this.start=this.pos;if(this.options.locations)this.startLoc=this.curPosition();if(this.pos>=this.input.length)return this.finishToken(tt.eof);if(curContext.override)return curContext.override(this);else this.readToken(this.fullCharCodeAtPos());};pp$7.readToken=function(code){// Identifier or keyword. '\uXXXX' sequences are allowed in
	// identifiers, so '\' also dispatches to that.
	if(isIdentifierStart(code,this.options.ecmaVersion>=6)||code===92/* '\' */)return this.readWord();return this.getTokenFromCode(code);};pp$7.fullCharCodeAtPos=function(){var code=this.input.charCodeAt(this.pos);if(code<=0xd7ff||code>=0xe000)return code;var next=this.input.charCodeAt(this.pos+1);return (code<<10)+next-0x35fdc00;};pp$7.skipBlockComment=function(){var this$1=this;var startLoc=this.options.onComment&&this.curPosition();var start=this.pos,end=this.input.indexOf("*/",this.pos+=2);if(end===-1)this.raise(this.pos-2,"Unterminated comment");this.pos=end+2;if(this.options.locations){lineBreakG.lastIndex=start;var match;while((match=lineBreakG.exec(this.input))&&match.index<this.pos){++this$1.curLine;this$1.lineStart=match.index+match[0].length;}}if(this.options.onComment)this.options.onComment(true,this.input.slice(start+2,end),start,this.pos,startLoc,this.curPosition());};pp$7.skipLineComment=function(startSkip){var this$1=this;var start=this.pos;var startLoc=this.options.onComment&&this.curPosition();var ch=this.input.charCodeAt(this.pos+=startSkip);while(this.pos<this.input.length&&ch!==10&&ch!==13&&ch!==8232&&ch!==8233){++this$1.pos;ch=this$1.input.charCodeAt(this$1.pos);}if(this.options.onComment)this.options.onComment(false,this.input.slice(start+startSkip,this.pos),start,this.pos,startLoc,this.curPosition());};// Called at the start of the parse and after every token. Skips
	// whitespace and comments, and.
	pp$7.skipSpace=function(){var this$1=this;loop:while(this.pos<this.input.length){var ch=this$1.input.charCodeAt(this$1.pos);switch(ch){case 32:case 160:// ' '
	++this$1.pos;break;case 13:if(this$1.input.charCodeAt(this$1.pos+1)===10){++this$1.pos;}case 10:case 8232:case 8233:++this$1.pos;if(this$1.options.locations){++this$1.curLine;this$1.lineStart=this$1.pos;}break;case 47:// '/'
	switch(this$1.input.charCodeAt(this$1.pos+1)){case 42:// '*'
	this$1.skipBlockComment();break;case 47:this$1.skipLineComment(2);break;default:break loop;}break;default:if(ch>8&&ch<14||ch>=5760&&nonASCIIwhitespace.test(String.fromCharCode(ch))){++this$1.pos;}else{break loop;}}}};// Called at the end of every token. Sets `end`, `val`, and
	// maintains `context` and `exprAllowed`, and skips the space after
	// the token, so that the next one's `start` will point at the
	// right position.
	pp$7.finishToken=function(type,val){this.end=this.pos;if(this.options.locations)this.endLoc=this.curPosition();var prevType=this.type;this.type=type;this.value=val;this.updateContext(prevType);};// ### Token reading
	// This is the function that is called to fetch the next token. It
	// is somewhat obscure, because it works in character codes rather
	// than characters, and because operator parsing has been inlined
	// into it.
	//
	// All in the name of speed.
	//
	pp$7.readToken_dot=function(){var next=this.input.charCodeAt(this.pos+1);if(next>=48&&next<=57)return this.readNumber(true);var next2=this.input.charCodeAt(this.pos+2);if(this.options.ecmaVersion>=6&&next===46&&next2===46){// 46 = dot '.'
	this.pos+=3;return this.finishToken(tt.ellipsis);}else{++this.pos;return this.finishToken(tt.dot);}};pp$7.readToken_slash=function(){// '/'
	var next=this.input.charCodeAt(this.pos+1);if(this.exprAllowed){++this.pos;return this.readRegexp();}if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(tt.slash,1);};pp$7.readToken_mult_modulo_exp=function(code){// '%*'
	var next=this.input.charCodeAt(this.pos+1);var size=1;var tokentype=code===42?tt.star:tt.modulo;// exponentiation operator ** and **=
	if(this.options.ecmaVersion>=7&&next===42){++size;tokentype=tt.starstar;next=this.input.charCodeAt(this.pos+2);}if(next===61)return this.finishOp(tt.assign,size+1);return this.finishOp(tokentype,size);};pp$7.readToken_pipe_amp=function(code){// '|&'
	var next=this.input.charCodeAt(this.pos+1);if(next===code)return this.finishOp(code===124?tt.logicalOR:tt.logicalAND,2);if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(code===124?tt.bitwiseOR:tt.bitwiseAND,1);};pp$7.readToken_caret=function(){// '^'
	var next=this.input.charCodeAt(this.pos+1);if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(tt.bitwiseXOR,1);};pp$7.readToken_plus_min=function(code){// '+-'
	var next=this.input.charCodeAt(this.pos+1);if(next===code){if(next==45&&this.input.charCodeAt(this.pos+2)==62&&lineBreak.test(this.input.slice(this.lastTokEnd,this.pos))){// A `-->` line comment
	this.skipLineComment(3);this.skipSpace();return this.nextToken();}return this.finishOp(tt.incDec,2);}if(next===61)return this.finishOp(tt.assign,2);return this.finishOp(tt.plusMin,1);};pp$7.readToken_lt_gt=function(code){// '<>'
	var next=this.input.charCodeAt(this.pos+1);var size=1;if(next===code){size=code===62&&this.input.charCodeAt(this.pos+2)===62?3:2;if(this.input.charCodeAt(this.pos+size)===61)return this.finishOp(tt.assign,size+1);return this.finishOp(tt.bitShift,size);}if(next==33&&code==60&&this.input.charCodeAt(this.pos+2)==45&&this.input.charCodeAt(this.pos+3)==45){if(this.inModule)this.unexpected();// `<!--`, an XML-style comment that should be interpreted as a line comment
	this.skipLineComment(4);this.skipSpace();return this.nextToken();}if(next===61)size=2;return this.finishOp(tt.relational,size);};pp$7.readToken_eq_excl=function(code){// '=!'
	var next=this.input.charCodeAt(this.pos+1);if(next===61)return this.finishOp(tt.equality,this.input.charCodeAt(this.pos+2)===61?3:2);if(code===61&&next===62&&this.options.ecmaVersion>=6){// '=>'
	this.pos+=2;return this.finishToken(tt.arrow);}return this.finishOp(code===61?tt.eq:tt.prefix,1);};pp$7.getTokenFromCode=function(code){switch(code){// The interpretation of a dot depends on whether it is followed
	// by a digit or another two dots.
	case 46:// '.'
	return this.readToken_dot();// Punctuation tokens.
	case 40:++this.pos;return this.finishToken(tt.parenL);case 41:++this.pos;return this.finishToken(tt.parenR);case 59:++this.pos;return this.finishToken(tt.semi);case 44:++this.pos;return this.finishToken(tt.comma);case 91:++this.pos;return this.finishToken(tt.bracketL);case 93:++this.pos;return this.finishToken(tt.bracketR);case 123:++this.pos;return this.finishToken(tt.braceL);case 125:++this.pos;return this.finishToken(tt.braceR);case 58:++this.pos;return this.finishToken(tt.colon);case 63:++this.pos;return this.finishToken(tt.question);case 96:// '`'
	if(this.options.ecmaVersion<6)break;++this.pos;return this.finishToken(tt.backQuote);case 48:// '0'
	var next=this.input.charCodeAt(this.pos+1);if(next===120||next===88)return this.readRadixNumber(16);// '0x', '0X' - hex number
	if(this.options.ecmaVersion>=6){if(next===111||next===79)return this.readRadixNumber(8);// '0o', '0O' - octal number
	if(next===98||next===66)return this.readRadixNumber(2);// '0b', '0B' - binary number
	}// Anything else beginning with a digit is an integer, octal
	// number, or float.
	case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:// 1-9
	return this.readNumber(false);// Quotes produce strings.
	case 34:case 39:// '"', "'"
	return this.readString(code);// Operators are parsed inline in tiny state machines. '=' (61) is
	// often referred to. `finishOp` simply skips the amount of
	// characters it is given as second argument, and returns a token
	// of the type given by its first argument.
	case 47:// '/'
	return this.readToken_slash();case 37:case 42:// '%*'
	return this.readToken_mult_modulo_exp(code);case 124:case 38:// '|&'
	return this.readToken_pipe_amp(code);case 94:// '^'
	return this.readToken_caret();case 43:case 45:// '+-'
	return this.readToken_plus_min(code);case 60:case 62:// '<>'
	return this.readToken_lt_gt(code);case 61:case 33:// '=!'
	return this.readToken_eq_excl(code);case 126:// '~'
	return this.finishOp(tt.prefix,1);}this.raise(this.pos,"Unexpected character '"+codePointToString(code)+"'");};pp$7.finishOp=function(type,size){var str=this.input.slice(this.pos,this.pos+size);this.pos+=size;return this.finishToken(type,str);};// Parse a regular expression. Some context-awareness is necessary,
	// since a '/' inside a '[]' set does not end the expression.
	function tryCreateRegexp(src,flags,throwErrorAt,parser){try{return new RegExp(src,flags);}catch(e){if(throwErrorAt!==undefined){if(e instanceof SyntaxError)parser.raise(throwErrorAt,"Error parsing regular expression: "+e.message);throw e;}}}var regexpUnicodeSupport=!!tryCreateRegexp("\uFFFF","u");pp$7.readRegexp=function(){var this$1=this;var escaped,inClass,start=this.pos;for(;;){if(this$1.pos>=this$1.input.length)this$1.raise(start,"Unterminated regular expression");var ch=this$1.input.charAt(this$1.pos);if(lineBreak.test(ch))this$1.raise(start,"Unterminated regular expression");if(!escaped){if(ch==="[")inClass=true;else if(ch==="]"&&inClass)inClass=false;else if(ch==="/"&&!inClass)break;escaped=ch==="\\";}else escaped=false;++this$1.pos;}var content=this.input.slice(start,this.pos);++this.pos;// Need to use `readWord1` because '\uXXXX' sequences are allowed
	// here (don't ask).
	var mods=this.readWord1();var tmp=content,tmpFlags="";if(mods){var validFlags=/^[gim]*$/;if(this.options.ecmaVersion>=6)validFlags=/^[gimuy]*$/;if(!validFlags.test(mods))this.raise(start,"Invalid regular expression flag");if(mods.indexOf("u")>=0){if(regexpUnicodeSupport){tmpFlags="u";}else{// Replace each astral symbol and every Unicode escape sequence that
	// possibly represents an astral symbol or a paired surrogate with a
	// single ASCII symbol to avoid throwing on regular expressions that
	// are only valid in combination with the `/u` flag.
	// Note: replacing with the ASCII symbol `x` might cause false
	// negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
	// perfectly valid pattern that is equivalent to `[a-b]`, but it would
	// be replaced by `[x-b]` which throws an error.
	tmp=tmp.replace(/\\u\{([0-9a-fA-F]+)\}/g,function(_match,code,offset){code=Number("0x"+code);if(code>0x10FFFF)this$1.raise(start+offset+3,"Code point out of bounds");return "x";});tmp=tmp.replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x");tmpFlags=tmpFlags.replace("u","");}}}// Detect invalid regular expressions.
	var value=null;// Rhino's regular expression parser is flaky and throws uncatchable exceptions,
	// so don't do detection if we are running under Rhino
	if(!isRhino){tryCreateRegexp(tmp,tmpFlags,start,this);// Get a regular expression object for this pattern-flag pair, or `null` in
	// case the current environment doesn't support the flags it uses.
	value=tryCreateRegexp(content,mods);}return this.finishToken(tt.regexp,{pattern:content,flags:mods,value:value});};// Read an integer in the given radix. Return null if zero digits
	// were read, the integer value otherwise. When `len` is given, this
	// will return `null` unless the integer has exactly `len` digits.
	pp$7.readInt=function(radix,len){var this$1=this;var start=this.pos,total=0;for(var i=0,e=len==null?Infinity:len;i<e;++i){var code=this$1.input.charCodeAt(this$1.pos),val;if(code>=97)val=code-97+10;// a
	else if(code>=65)val=code-65+10;// A
	else if(code>=48&&code<=57)val=code-48;// 0-9
	else val=Infinity;if(val>=radix)break;++this$1.pos;total=total*radix+val;}if(this.pos===start||len!=null&&this.pos-start!==len)return null;return total;};pp$7.readRadixNumber=function(radix){this.pos+=2;// 0x
	var val=this.readInt(radix);if(val==null)this.raise(this.start+2,"Expected number in radix "+radix);if(isIdentifierStart(this.fullCharCodeAtPos()))this.raise(this.pos,"Identifier directly after number");return this.finishToken(tt.num,val);};// Read an integer, octal integer, or floating-point number.
	pp$7.readNumber=function(startsWithDot){var start=this.pos,isFloat=false,octal=this.input.charCodeAt(this.pos)===48;if(!startsWithDot&&this.readInt(10)===null)this.raise(start,"Invalid number");var next=this.input.charCodeAt(this.pos);if(next===46){// '.'
	++this.pos;this.readInt(10);isFloat=true;next=this.input.charCodeAt(this.pos);}if(next===69||next===101){// 'eE'
	next=this.input.charCodeAt(++this.pos);if(next===43||next===45)++this.pos;// '+-'
	if(this.readInt(10)===null)this.raise(start,"Invalid number");isFloat=true;}if(isIdentifierStart(this.fullCharCodeAtPos()))this.raise(this.pos,"Identifier directly after number");var str=this.input.slice(start,this.pos),val;if(isFloat)val=parseFloat(str);else if(!octal||str.length===1)val=parseInt(str,10);else if(/[89]/.test(str)||this.strict)this.raise(start,"Invalid number");else val=parseInt(str,8);return this.finishToken(tt.num,val);};// Read a string value, interpreting backslash-escapes.
	pp$7.readCodePoint=function(){var ch=this.input.charCodeAt(this.pos),code;if(ch===123){if(this.options.ecmaVersion<6)this.unexpected();var codePos=++this.pos;code=this.readHexChar(this.input.indexOf('}',this.pos)-this.pos);++this.pos;if(code>0x10FFFF)this.raise(codePos,"Code point out of bounds");}else{code=this.readHexChar(4);}return code;};function codePointToString(code){// UTF-16 Decoding
	if(code<=0xFFFF)return String.fromCharCode(code);code-=0x10000;return String.fromCharCode((code>>10)+0xD800,(code&1023)+0xDC00);}pp$7.readString=function(quote){var this$1=this;var out="",chunkStart=++this.pos;for(;;){if(this$1.pos>=this$1.input.length)this$1.raise(this$1.start,"Unterminated string constant");var ch=this$1.input.charCodeAt(this$1.pos);if(ch===quote)break;if(ch===92){// '\'
	out+=this$1.input.slice(chunkStart,this$1.pos);out+=this$1.readEscapedChar(false);chunkStart=this$1.pos;}else{if(isNewLine(ch))this$1.raise(this$1.start,"Unterminated string constant");++this$1.pos;}}out+=this.input.slice(chunkStart,this.pos++);return this.finishToken(tt.string,out);};// Reads template string tokens.
	pp$7.readTmplToken=function(){var this$1=this;var out="",chunkStart=this.pos;for(;;){if(this$1.pos>=this$1.input.length)this$1.raise(this$1.start,"Unterminated template");var ch=this$1.input.charCodeAt(this$1.pos);if(ch===96||ch===36&&this$1.input.charCodeAt(this$1.pos+1)===123){// '`', '${'
	if(this$1.pos===this$1.start&&this$1.type===tt.template){if(ch===36){this$1.pos+=2;return this$1.finishToken(tt.dollarBraceL);}else{++this$1.pos;return this$1.finishToken(tt.backQuote);}}out+=this$1.input.slice(chunkStart,this$1.pos);return this$1.finishToken(tt.template,out);}if(ch===92){// '\'
	out+=this$1.input.slice(chunkStart,this$1.pos);out+=this$1.readEscapedChar(true);chunkStart=this$1.pos;}else if(isNewLine(ch)){out+=this$1.input.slice(chunkStart,this$1.pos);++this$1.pos;switch(ch){case 13:if(this$1.input.charCodeAt(this$1.pos)===10)++this$1.pos;case 10:out+="\n";break;default:out+=String.fromCharCode(ch);break;}if(this$1.options.locations){++this$1.curLine;this$1.lineStart=this$1.pos;}chunkStart=this$1.pos;}else{++this$1.pos;}}};// Used to read escaped characters
	pp$7.readEscapedChar=function(inTemplate){var ch=this.input.charCodeAt(++this.pos);++this.pos;switch(ch){case 110:return "\n";// 'n' -> '\n'
	case 114:return "\r";// 'r' -> '\r'
	case 120:return String.fromCharCode(this.readHexChar(2));// 'x'
	case 117:return codePointToString(this.readCodePoint());// 'u'
	case 116:return "\t";// 't' -> '\t'
	case 98:return "\b";// 'b' -> '\b'
	case 118:return "\x0B";// 'v' -> '\u000b'
	case 102:return "\f";// 'f' -> '\f'
	case 13:if(this.input.charCodeAt(this.pos)===10)++this.pos;// '\r\n'
	case 10:// ' \n'
	if(this.options.locations){this.lineStart=this.pos;++this.curLine;}return "";default:if(ch>=48&&ch<=55){var octalStr=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0];var octal=parseInt(octalStr,8);if(octal>255){octalStr=octalStr.slice(0,-1);octal=parseInt(octalStr,8);}if(octalStr!=="0"&&(this.strict||inTemplate)){this.raise(this.pos-2,"Octal literal in strict mode");}this.pos+=octalStr.length-1;return String.fromCharCode(octal);}return String.fromCharCode(ch);}};// Used to read character escape sequences ('\x', '\u', '\U').
	pp$7.readHexChar=function(len){var codePos=this.pos;var n=this.readInt(16,len);if(n===null)this.raise(codePos,"Bad character escape sequence");return n;};// Read an identifier, and return it as a string. Sets `this.containsEsc`
	// to whether the word contained a '\u' escape.
	//
	// Incrementally adds only escaped chars, adding other chunks as-is
	// as a micro-optimization.
	pp$7.readWord1=function(){var this$1=this;this.containsEsc=false;var word="",first=true,chunkStart=this.pos;var astral=this.options.ecmaVersion>=6;while(this.pos<this.input.length){var ch=this$1.fullCharCodeAtPos();if(isIdentifierChar(ch,astral)){this$1.pos+=ch<=0xffff?1:2;}else if(ch===92){// "\"
	this$1.containsEsc=true;word+=this$1.input.slice(chunkStart,this$1.pos);var escStart=this$1.pos;if(this$1.input.charCodeAt(++this$1.pos)!=117)// "u"
	this$1.raise(this$1.pos,"Expecting Unicode escape sequence \\uXXXX");++this$1.pos;var esc=this$1.readCodePoint();if(!(first?isIdentifierStart:isIdentifierChar)(esc,astral))this$1.raise(escStart,"Invalid Unicode escape");word+=codePointToString(esc);chunkStart=this$1.pos;}else{break;}first=false;}return word+this.input.slice(chunkStart,this.pos);};// Read an identifier or keyword token. Will check for reserved
	// words when necessary.
	pp$7.readWord=function(){var word=this.readWord1();var type=tt.name;if((this.options.ecmaVersion>=6||!this.containsEsc)&&this.keywords.test(word))type=keywordTypes[word];return this.finishToken(type,word);};var version="3.3.0";// The main exported interface (under `self.acorn` when in the
	// browser) is a `parse` function that takes a code string and
	// returns an abstract syntax tree as specified by [Mozilla parser
	// API][api].
	//
	// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API
	function parse(input,options){return new Parser(options,input).parse();}// This function tries to parse a single expression at a given
	// offset in a string. Useful for parsing mixed-language formats
	// that embed JavaScript expressions.
	function parseExpressionAt(input,pos,options){var p=new Parser(options,input,pos);p.nextToken();return p.parseExpression();}// Acorn is organized as a tokenizer and a recursive-descent parser.
	// The `tokenizer` export provides an interface to the tokenizer.
	function tokenizer(input,options){return new Parser(options,input);}/*istanbul ignore next*/exports.version=version;/*istanbul ignore next*/exports.parse=parse;/*istanbul ignore next*/exports.parseExpressionAt=parseExpressionAt;/*istanbul ignore next*/exports.tokenizer=tokenizer;/*istanbul ignore next*/exports.Parser=Parser;/*istanbul ignore next*/exports.plugins=plugins;/*istanbul ignore next*/exports.defaultOptions=defaultOptions;/*istanbul ignore next*/exports.Position=Position;/*istanbul ignore next*/exports.SourceLocation=SourceLocation;/*istanbul ignore next*/exports.getLineInfo=getLineInfo;/*istanbul ignore next*/exports.Node=Node;/*istanbul ignore next*/exports.TokenType=TokenType;/*istanbul ignore next*/exports.tokTypes=tt;/*istanbul ignore next*/exports.TokContext=TokContext;/*istanbul ignore next*/exports.tokContexts=types;/*istanbul ignore next*/exports.isIdentifierChar=isIdentifierChar;/*istanbul ignore next*/exports.isIdentifierStart=isIdentifierStart;/*istanbul ignore next*/exports.Token=Token;/*istanbul ignore next*/exports.isNewLine=isNewLine;/*istanbul ignore next*/exports.lineBreak=lineBreak;/*istanbul ignore next*/exports.lineBreakG=lineBreakG;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _classCallCheck2 = __webpack_require__(1);
		
		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
		
		var _createClass2 = __webpack_require__(2);
		
		var _createClass3 = _interopRequireDefault(_createClass2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Stack = function () {
		    function /*istanbul ignore next*/Stack() {
		        /*istanbul ignore next*/(0, _classCallCheck3.default)(this, Stack);
		
		        this.arr = [];
		    }
		
		    (0, _createClass3.default)(Stack, [{
		        key: "push",
		        value: function push(el) {
		            this.arr.push(el);
		        }
		    }, {
		        key: "pop",
		        value: function pop() {
		            this.arr.length--;
		        }
		    }, {
		        key: "top",
		        value: function top() {
		            // TODO: .last() not defined in older node versions
		            // return this.arr.last();
		            return this.arr[this.arr.length - 1];
		        }
		    }, {
		        key: "withElement",
		        value: function withElement(el, callback, context) {
		            this.push(el);
		            try {
		                callback.call(context);
		            } finally {
		                this.pop();
		            }
		        }
		    }]);
		    return Stack;
		}();
		
		/*istanbul ignore next*/exports.default = Stack;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
		
		exports.__esModule = true;
		
		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
		
		exports.__esModule = true;
		
		var _defineProperty = __webpack_require__(3);
		
		var _defineProperty2 = _interopRequireDefault(_defineProperty);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
		    }
		  }
		
		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(4), __esModule: true };
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(5);
		var $Object = __webpack_require__(8).Object;
		module.exports = function defineProperty(it, key, desc){
		  return $Object.defineProperty(it, key, desc);
		};
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(6);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(16), 'Object', {defineProperty: __webpack_require__(12).f});
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(7)
		  , core      = __webpack_require__(8)
		  , ctx       = __webpack_require__(9)
		  , hide      = __webpack_require__(11)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		// optional / simple context binding
		var aFunction = __webpack_require__(10);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP         = __webpack_require__(12)
		  , createDesc = __webpack_require__(20);
		module.exports = __webpack_require__(16) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		var anObject       = __webpack_require__(13)
		  , IE8_DOM_DEFINE = __webpack_require__(15)
		  , toPrimitive    = __webpack_require__(19)
		  , dP             = Object.defineProperty;
		
		exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(14);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function(){
		  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(17)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(14)
		  , document = __webpack_require__(7).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(14);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};
	
	/***/ },
	/* 20 */
	/***/ function(module, exports) {
	
		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};
	
	/***/ }
	/******/ ])
	});
	

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Listener = undefined;
	
	var _set = __webpack_require__(69);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _classCallCheck2 = __webpack_require__(119);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(91);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _map = __webpack_require__(123);
	
	var _map2 = _interopRequireDefault(_map);
	
	var /*istanbul ignore next*/_propertyAccessor = __webpack_require__(130);
	
	var /*istanbul ignore next*/_utils = __webpack_require__(131);
	
	/*istanbul ignore next*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LISTENERS_BY_ACCESSOR = new /*istanbul ignore next*/_map2.default();
	
	/*istanbul ignore next*/var Listener = exports.Listener = function () {
	    function /*istanbul ignore next*/Listener(obj, propName) {
	        /*istanbul ignore next*/var _this = this;
	
	        (0, _classCallCheck3.default)(this, Listener);
	
	        this.selectionItems = new /*istanbul ignore next*/_set2.default();
	
	        this.propertyAccessor = new /*istanbul ignore next*/_propertyAccessor.PropertyAccessor(obj, propName);
	        this.propertyAccessor.setterCallback(function (newValue) /*istanbul ignore next*/{
	            return (/*istanbul ignore next*/_this.newValueSet(newValue)
	            );
	        });
	    }
	
	    (0, _createClass3.default)(Listener, [{
	        key: 'addHandler',
	        value: function addHandler(selectionItem) {
	            this.selectionItems.add(selectionItem);
	            selectionItem.propertyAccessors.add(this);
	        }
	    }, {
	        key: 'newValueSet',
	        value: function newValueSet(newValue) {
	            if (! /*istanbul ignore next*/(0, _utils.isPrimitive)(newValue)) {
	                this.recalculate();
	            }
	
	            this.applyCallbacks();
	        }
	    }, {
	        key: 'applyCallbacks',
	        value: function applyCallbacks() {
	            this.selectionItems.forEach(function (selectionItem) {
	                selectionItem.propertyAssigned();
	            });
	        }
	    }, {
	        key: 'recalculate',
	        value: function recalculate() {
	            console.log('should recalculate');
	
	            var selectionItems = [];
	            this.selectionItems.forEach(function (selectionItem) {
	                selectionItems.push(selectionItem);
	            });
	
	            selectionItems.forEach(function (selectionItem) {
	                selectionItem.removeListeners();
	            });
	            selectionItems.forEach(function (selectionItem) {
	                selectionItem.installListeners();
	            });
	        }
	    }], [{
	        key: 'watchProperty',
	        value: function watchProperty(obj, propName) {
	            var mapObj;
	            if (LISTENERS_BY_ACCESSOR.has(obj)) {
	                mapObj = LISTENERS_BY_ACCESSOR.get(obj);
	            } else {
	                mapObj = {};
	                LISTENERS_BY_ACCESSOR.set(obj, mapObj);
	            }
	
	            if (!mapObj.hasOwnProperty(propName)) {
	                mapObj[propName] = new Listener(obj, propName);
	            }
	
	            return mapObj[propName];
	        }
	    }]);
	    return Listener;
	}();

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PropertyAccessor = undefined;
	
	var _classCallCheck2 = __webpack_require__(119);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(91);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PROPERTY_ACCESSOR_NAME = 'wrappedValue';
	
	/*istanbul ignore next*/var PropertyAccessor = exports.PropertyAccessor = function () {
	    function /*istanbul ignore next*/PropertyAccessor(obj, propName) {
	        /*istanbul ignore next*/(0, _classCallCheck3.default)(this, PropertyAccessor);
	
	        this.safeOldAccessors(obj, propName);
	
	        try {
	            obj.__defineGetter__(propName, function () {
	                if (propName === 'prop') debugger;
	                obj;
	                return this[PROPERTY_ACCESSOR_NAME];
	            }.bind(this));
	        } catch (e) {/* Firefox raises for Array.length */}
	        var newGetter = obj.__lookupGetter__(propName);
	        if (!newGetter) {
	            // Chrome silently ignores __defineGetter__ for Array.length
	            this.externalVariables(solver, null);
	            return;
	        }
	
	        obj.__defineSetter__(propName, function (newValue) {
	            var returnValue = this[PROPERTY_ACCESSOR_NAME] = newValue;
	            //console.log('newValue for', obj, propName, newValue);
	            this.setPropertyWith(newValue);
	            return returnValue;
	        }.bind(this));
	    }
	
	    (0, _createClass3.default)(PropertyAccessor, [{
	        key: 'safeOldAccessors',
	        value: function safeOldAccessors(obj, propName) {
	            // take existing getter, if existent, and assign to
	            var existingSetter = obj.__lookupSetter__(propName),
	                existingGetter = obj.__lookupGetter__(propName);
	            if (existingGetter && existingSetter) {
	                this.__defineGetter__(PROPERTY_ACCESSOR_NAME, existingGetter);
	                this.__defineSetter__(PROPERTY_ACCESSOR_NAME, existingSetter);
	            }
	
	            // assign old value to new slot
	            if (!existingGetter && !existingSetter && obj.hasOwnProperty(propName)) {
	                this[PROPERTY_ACCESSOR_NAME] = obj[propName];
	            }
	        }
	    }, {
	        key: 'setterCallback',
	        value: function setterCallback(callback) {
	            this.callbackForSetProperty = callback;
	        }
	    }, {
	        key: 'setPropertyWith',
	        value: function setPropertyWith(newValue) {
	            this.callbackForSetProperty && this.callbackForSetProperty(newValue);
	        }
	    }]);
	    return PropertyAccessor;
	}();

/***/ },
/* 131 */
/***/ function(module, exports) {
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pushIfMissing = pushIfMissing;
	/*istanbul ignore next*/exports.removeIfExisting = removeIfExisting;
	/*istanbul ignore next*/exports.isPrimitive = isPrimitive;
	/*istanbul ignore next*/exports.identity = identity;
	// TODO this is a copy from reactive object queries repository (not completely anymore)
	// TODO extract this into its own library
	
	function pushIfMissing(array, item) {
	    // check for already existing.
	    var exists = false;
	    var len = array.length;
	    for (var i = 0; i < len; i++) /*istanbul ignore next*/{
	        if (array[i] == item) {
	            exists = true;
	            break;
	        }
	    } // do not add an already existing item
	    if (!exists) {
	        array.push(item);
	    }
	
	    // return true if the given element was pushed, otherwise false
	    return !exists;
	}
	
	function removeIfExisting(array, item) {
	    var index = array.indexOf(item);
	    if (index !== -1) {
	        array.splice(index, 1);
	        // return true if the given element was actually removed
	        return true;
	    }
	    return false;
	}
	
	function isPrimitive(elem) {
	    var getType = function getType(elem) {
	        return Object.prototype.toString.call(elem).slice(8, -1);
	    };
	
	    var type = getType(elem);
	
	    return type === 'String' || type === 'RegExp' || type === 'Boolean' || type === 'Number' || type === 'Null' || type === 'Undefined';
	}
	
	function identity(x) {
	    return x;
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _baseActiveExpressions = __webpack_require__(1);
		
		Object.defineProperty(exports, 'BaseActiveExpression', {
		  enumerable: true,
		  get: function get() {
		    return _baseActiveExpressions.BaseActiveExpression;
		  }
		});
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.BaseActiveExpression = undefined;
		
		var _toConsumableArray2 = __webpack_require__(2);
		
		var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
		
		var _classCallCheck2 = __webpack_require__(56);
		
		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
		
		var _createClass2 = __webpack_require__(57);
		
		var _createClass3 = _interopRequireDefault(_createClass2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var BaseActiveExpression = exports.BaseActiveExpression = function () {
		
		    /**
		     *
		     * @param func (Function) the expression to be observed
		     * @param ...params (Objects) the instances bound as parameters to the expression
		     */
		    function /*istanbul ignore next*/BaseActiveExpression(func) {
		        /*istanbul ignore next*/(0, _classCallCheck3.default)(this, BaseActiveExpression);
		
		        // console.log(func);
		        this.func = func;
		
		        /*istanbul ignore next*/for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		            params[_key - 1] = arguments[_key];
		        }
		
		        this.params = params;
		        this.lastValue = this.getCurrentValue();
		        this.callbacks = [];
		    }
		
		    /**
		     * Executes the encapsulated expression with the given parameters.
		     * aliases with 'now'
		     * @public
		     * @returns {*} the current value of the expression
		     */
		
		
		    (0, _createClass3.default)(BaseActiveExpression, [{
		        key: 'getCurrentValue',
		        value: function getCurrentValue() {
		            return (/*istanbul ignore next*/this.func. /*istanbul ignore next*/apply(this, /*istanbul ignore next*/(0, _toConsumableArray3.default)(this.params))
		            );
		        }
		
		        /**
		         * @public
		         * @param callback
		         * @returns {BaseActiveExpression} this very active expression (for chaining)
		         */
		
		    }, {
		        key: 'onChange',
		        value: function onChange(callback) {
		            this.callbacks.push(callback);
		
		            return this;
		        }
		
		        /**
		         * Signals the active expression that a state change might have happened.
		         * Mainly for implementation strategies.
		         * @public
		         */
		
		    }, {
		        key: 'checkAndNotify',
		        value: function checkAndNotify() {
		            var currentValue = this.getCurrentValue();
		            if (this.lastValue === currentValue) {
		                return;
		            }
		
		            var lastValue = this.lastValue;
		            this.lastValue = currentValue;
		
		            this.notify(currentValue, {
		                lastValue: lastValue
		            });
		        }
		    }, {
		        key: 'notify',
		        value: function notify() {
		            /*istanbul ignore next*/for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		                args[_key2] = arguments[_key2];
		            }
		
		            this.callbacks.forEach(function (callback) /*istanbul ignore next*/{
		                return (/*istanbul ignore next*/callback.apply( /*istanbul ignore next*/undefined, args)
		                );
		            });
		        }
		
		        /**
		         * TODO
		         * like a bind for AExpr
		         * @param items
		         */
		
		    }, {
		        key: 'applyOn',
		        value: function applyOn() {
		            throw new Error('Not yet implemented');
		        }
		    }]);
		    return BaseActiveExpression;
		}();
		
		/*istanbul ignore next*/exports.default = BaseActiveExpression;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
		
		exports.__esModule = true;
		
		var _from = __webpack_require__(3);
		
		var _from2 = _interopRequireDefault(_from);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = function (arr) {
		  if (Array.isArray(arr)) {
		    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
		      arr2[i] = arr[i];
		    }
		
		    return arr2;
		  } else {
		    return (0, _from2.default)(arr);
		  }
		};
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(4), __esModule: true };
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(5);
		__webpack_require__(49);
		module.exports = __webpack_require__(13).Array.from;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
		var $at  = __webpack_require__(6)(true);
		
		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(9)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(7)
		  , defined   = __webpack_require__(8);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
		var LIBRARY        = __webpack_require__(10)
		  , $export        = __webpack_require__(11)
		  , redefine       = __webpack_require__(26)
		  , hide           = __webpack_require__(16)
		  , has            = __webpack_require__(27)
		  , Iterators      = __webpack_require__(28)
		  , $iterCreate    = __webpack_require__(29)
		  , setToStringTag = __webpack_require__(45)
		  , getPrototypeOf = __webpack_require__(47)
		  , ITERATOR       = __webpack_require__(46)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';
		
		var returnThis = function(){ return this; };
		
		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		module.exports = true;
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(12)
		  , core      = __webpack_require__(13)
		  , ctx       = __webpack_require__(14)
		  , hide      = __webpack_require__(16)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		// optional / simple context binding
		var aFunction = __webpack_require__(15);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP         = __webpack_require__(17)
		  , createDesc = __webpack_require__(25);
		module.exports = __webpack_require__(21) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		var anObject       = __webpack_require__(18)
		  , IE8_DOM_DEFINE = __webpack_require__(20)
		  , toPrimitive    = __webpack_require__(24)
		  , dP             = Object.defineProperty;
		
		exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(19);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
		  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(22)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(19)
		  , document = __webpack_require__(12).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(19);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};
	
	/***/ },
	/* 25 */
	/***/ function(module, exports) {
	
		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(16);
	
	/***/ },
	/* 27 */
	/***/ function(module, exports) {
	
		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};
	
	/***/ },
	/* 28 */
	/***/ function(module, exports) {
	
		module.exports = {};
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
		var create         = __webpack_require__(30)
		  , descriptor     = __webpack_require__(25)
		  , setToStringTag = __webpack_require__(45)
		  , IteratorPrototype = {};
		
		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(16)(IteratorPrototype, __webpack_require__(46)('iterator'), function(){ return this; });
		
		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(18)
		  , dPs         = __webpack_require__(31)
		  , enumBugKeys = __webpack_require__(43)
		  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';
		
		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(23)('iframe')
		    , i      = enumBugKeys.length
		    , lt     = '<'
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(44).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};
		
		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};
	
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP       = __webpack_require__(17)
		  , anObject = __webpack_require__(18)
		  , getKeys  = __webpack_require__(32);
		
		module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(33)
		  , enumBugKeys = __webpack_require__(43);
		
		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		var has          = __webpack_require__(27)
		  , toIObject    = __webpack_require__(34)
		  , arrayIndexOf = __webpack_require__(37)(false)
		  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
		
		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(35)
		  , defined = __webpack_require__(8);
		module.exports = function(it){
		  return IObject(defined(it));
		};
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(36);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};
	
	/***/ },
	/* 36 */
	/***/ function(module, exports) {
	
		var toString = {}.toString;
		
		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(34)
		  , toLength  = __webpack_require__(38)
		  , toIndex   = __webpack_require__(39);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.15 ToLength
		var toInteger = __webpack_require__(7)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(7)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		var shared = __webpack_require__(41)('keys')
		  , uid    = __webpack_require__(42);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global = __webpack_require__(12)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};
	
	/***/ },
	/* 42 */
	/***/ function(module, exports) {
	
		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
	
	/***/ },
	/* 43 */
	/***/ function(module, exports) {
	
		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(12).document && document.documentElement;
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		var def = __webpack_require__(17).f
		  , has = __webpack_require__(27)
		  , TAG = __webpack_require__(46)('toStringTag');
		
		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		var store      = __webpack_require__(41)('wks')
		  , uid        = __webpack_require__(42)
		  , Symbol     = __webpack_require__(12).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';
		
		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};
		
		$exports.store = store;
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(27)
		  , toObject    = __webpack_require__(48)
		  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
		  , ObjectProto = Object.prototype;
		
		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(8);
		module.exports = function(it){
		  return Object(defined(it));
		};
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
		var ctx            = __webpack_require__(14)
		  , $export        = __webpack_require__(11)
		  , toObject       = __webpack_require__(48)
		  , call           = __webpack_require__(50)
		  , isArrayIter    = __webpack_require__(51)
		  , toLength       = __webpack_require__(38)
		  , createProperty = __webpack_require__(52)
		  , getIterFn      = __webpack_require__(53);
		
		$export($export.S + $export.F * !__webpack_require__(55)(function(iter){ }), 'Array', {
		  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
		  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
		    var O       = toObject(arrayLike)
		      , C       = typeof this == 'function' ? this : Array
		      , aLen    = arguments.length
		      , mapfn   = aLen > 1 ? arguments[1] : undefined
		      , mapping = mapfn !== undefined
		      , index   = 0
		      , iterFn  = getIterFn(O)
		      , length, result, step, iterator;
		    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
		    // if object isn't iterable or it's array with default iterator - use simple case
		    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
		      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
		        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
		      }
		    } else {
		      length = toLength(O.length);
		      for(result = new C(length); length > index; index++){
		        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
		      }
		    }
		    result.length = index;
		    return result;
		  }
		});
	
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		// call something on iterator step with safe closing on error
		var anObject = __webpack_require__(18);
		module.exports = function(iterator, fn, value, entries){
		  try {
		    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
		  // 7.4.6 IteratorClose(iterator, completion)
		  } catch(e){
		    var ret = iterator['return'];
		    if(ret !== undefined)anObject(ret.call(iterator));
		    throw e;
		  }
		};
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		// check on default Array iterator
		var Iterators  = __webpack_require__(28)
		  , ITERATOR   = __webpack_require__(46)('iterator')
		  , ArrayProto = Array.prototype;
		
		module.exports = function(it){
		  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
		};
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
		var $defineProperty = __webpack_require__(17)
		  , createDesc      = __webpack_require__(25);
		
		module.exports = function(object, index, value){
		  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
		  else object[index] = value;
		};
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		var classof   = __webpack_require__(54)
		  , ITERATOR  = __webpack_require__(46)('iterator')
		  , Iterators = __webpack_require__(28);
		module.exports = __webpack_require__(13).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(36)
		  , TAG = __webpack_require__(46)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
		
		// fallback for IE11 Script Access Denied error
		var tryGet = function(it, key){
		  try {
		    return it[key];
		  } catch(e){ /* empty */ }
		};
		
		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ITERATOR     = __webpack_require__(46)('iterator')
		  , SAFE_CLOSING = false;
		
		try {
		  var riter = [7][ITERATOR]();
		  riter['return'] = function(){ SAFE_CLOSING = true; };
		  Array.from(riter, function(){ throw 2; });
		} catch(e){ /* empty */ }
		
		module.exports = function(exec, skipClosing){
		  if(!skipClosing && !SAFE_CLOSING)return false;
		  var safe = false;
		  try {
		    var arr  = [7]
		      , iter = arr[ITERATOR]();
		    iter.next = function(){ return {done: safe = true}; };
		    arr[ITERATOR] = function(){ return iter; };
		    exec(arr);
		  } catch(e){ /* empty */ }
		  return safe;
		};
	
	/***/ },
	/* 56 */
	/***/ function(module, exports) {
		
		exports.__esModule = true;
		
		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
		
		exports.__esModule = true;
		
		var _defineProperty = __webpack_require__(58);
		
		var _defineProperty2 = _interopRequireDefault(_defineProperty);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
		    }
		  }
		
		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(59), __esModule: true };
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(60);
		var $Object = __webpack_require__(13).Object;
		module.exports = function defineProperty(it, key, desc){
		  return $Object.defineProperty(it, key, desc);
		};
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(11);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(17).f});
	
	/***/ }
	/******/ ])
	});
	

/***/ }
/******/ ])
});

});

var aexprInterpretation$1 = unwrapExports(aexprInterpretation);

const bench = common.createBenchmark(main, aexprConstruction);

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprInterpretation$1(() => rect.aspectRatio(), {rect});
  }
  bench.end(numAExpr);
}
