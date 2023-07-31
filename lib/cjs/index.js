'use strict';

var require$$0 = require('react');
var require$$1 = require('react-dom');

const init = (appId, apiKey) => {
    {
        return {};
    }
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

var dist = {};

var useWebsocket = {};

var constants = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isEventSourceSupported = exports.isReactNative = exports.ReadyState = exports.UNPARSABLE_JSON_OBJECT = exports.DEFAULT_RECONNECT_INTERVAL_MS = exports.DEFAULT_RECONNECT_LIMIT = exports.SOCKET_IO_PING_CODE = exports.SOCKET_IO_PATH = exports.SOCKET_IO_PING_INTERVAL = exports.DEFAULT_EVENT_SOURCE_OPTIONS = exports.EMPTY_EVENT_HANDLERS = exports.DEFAULT_OPTIONS = void 0;
	var MILLISECONDS = 1;
	var SECONDS = 1000 * MILLISECONDS;
	exports.DEFAULT_OPTIONS = {};
	exports.EMPTY_EVENT_HANDLERS = {};
	exports.DEFAULT_EVENT_SOURCE_OPTIONS = {
	    withCredentials: false,
	    events: exports.EMPTY_EVENT_HANDLERS,
	};
	exports.SOCKET_IO_PING_INTERVAL = 25 * SECONDS;
	exports.SOCKET_IO_PATH = '/socket.io/?EIO=3&transport=websocket';
	exports.SOCKET_IO_PING_CODE = '2';
	exports.DEFAULT_RECONNECT_LIMIT = 20;
	exports.DEFAULT_RECONNECT_INTERVAL_MS = 5000;
	exports.UNPARSABLE_JSON_OBJECT = {};
	(function (ReadyState) {
	    ReadyState[ReadyState["UNINSTANTIATED"] = -1] = "UNINSTANTIATED";
	    ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
	    ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
	    ReadyState[ReadyState["CLOSING"] = 2] = "CLOSING";
	    ReadyState[ReadyState["CLOSED"] = 3] = "CLOSED";
	})(exports.ReadyState || (exports.ReadyState = {}));
	var eventSourceSupported = function () {
	    try {
	        return 'EventSource' in globalThis;
	    }
	    catch (e) {
	        return false;
	    }
	};
	exports.isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
	exports.isEventSourceSupported = !exports.isReactNative && eventSourceSupported();
	
} (constants));

var createOrJoin = {};

var globals = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.resetWebSockets = exports.sharedWebSockets = void 0;
	exports.sharedWebSockets = {};
	var resetWebSockets = function (url) {
	    if (url && exports.sharedWebSockets.hasOwnProperty(url)) {
	        delete exports.sharedWebSockets[url];
	    }
	    else {
	        for (var url_1 in exports.sharedWebSockets) {
	            if (exports.sharedWebSockets.hasOwnProperty(url_1)) {
	                delete exports.sharedWebSockets[url_1];
	            }
	        }
	    }
	};
	exports.resetWebSockets = resetWebSockets;
	
} (globals));

var attachListener = {};

var socketIo = {};

Object.defineProperty(socketIo, "__esModule", { value: true });
socketIo.setUpSocketIOPing = socketIo.appendQueryParams = socketIo.parseSocketIOUrl = void 0;
var constants_1$6 = constants;
var parseSocketIOUrl = function (url) {
    if (url) {
        var isSecure = /^https|wss/.test(url);
        var strippedProtocol = url.replace(/^(https?|wss?)(:\/\/)?/, '');
        var removedFinalBackSlack = strippedProtocol.replace(/\/$/, '');
        var protocol = isSecure ? 'wss' : 'ws';
        return "".concat(protocol, "://").concat(removedFinalBackSlack).concat(constants_1$6.SOCKET_IO_PATH);
    }
    else if (url === '') {
        var isSecure = /^https/.test(window.location.protocol);
        var protocol = isSecure ? 'wss' : 'ws';
        var port = window.location.port ? ":".concat(window.location.port) : '';
        return "".concat(protocol, "://").concat(window.location.hostname).concat(port).concat(constants_1$6.SOCKET_IO_PATH);
    }
    return url;
};
socketIo.parseSocketIOUrl = parseSocketIOUrl;
var appendQueryParams = function (url, params) {
    if (params === void 0) { params = {}; }
    var hasParamsRegex = /\?([\w]+=[\w]+)/;
    var alreadyHasParams = hasParamsRegex.test(url);
    var stringified = "".concat(Object.entries(params).reduce(function (next, _a) {
        var key = _a[0], value = _a[1];
        return next + "".concat(key, "=").concat(value, "&");
    }, '').slice(0, -1));
    return "".concat(url).concat(alreadyHasParams ? '&' : '?').concat(stringified);
};
socketIo.appendQueryParams = appendQueryParams;
var setUpSocketIOPing = function (sendMessage, interval) {
    if (interval === void 0) { interval = constants_1$6.SOCKET_IO_PING_INTERVAL; }
    var ping = function () { return sendMessage(constants_1$6.SOCKET_IO_PING_CODE); };
    return window.setInterval(ping, interval);
};
socketIo.setUpSocketIOPing = setUpSocketIOPing;

var util = {};

var manageSubscribers = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.resetSubscribers = exports.removeSubscriber = exports.addSubscriber = exports.hasSubscribers = exports.getSubscribers = void 0;
	var subscribers = {};
	var EMPTY_LIST = [];
	var getSubscribers = function (url) {
	    if ((0, exports.hasSubscribers)(url)) {
	        return Array.from(subscribers[url]);
	    }
	    return EMPTY_LIST;
	};
	exports.getSubscribers = getSubscribers;
	var hasSubscribers = function (url) {
	    var _a;
	    return ((_a = subscribers[url]) === null || _a === void 0 ? void 0 : _a.size) > 0;
	};
	exports.hasSubscribers = hasSubscribers;
	var addSubscriber = function (url, subscriber) {
	    subscribers[url] = subscribers[url] || new Set();
	    subscribers[url].add(subscriber);
	};
	exports.addSubscriber = addSubscriber;
	var removeSubscriber = function (url, subscriber) {
	    subscribers[url].delete(subscriber);
	};
	exports.removeSubscriber = removeSubscriber;
	var resetSubscribers = function (url) {
	    if (url && subscribers.hasOwnProperty(url)) {
	        delete subscribers[url];
	    }
	    else {
	        for (var url_1 in subscribers) {
	            if (subscribers.hasOwnProperty(url_1)) {
	                delete subscribers[url_1];
	            }
	        }
	    }
	};
	exports.resetSubscribers = resetSubscribers;
	
} (manageSubscribers));

Object.defineProperty(util, "__esModule", { value: true });
util.resetGlobalState = util.assertIsWebSocket = void 0;
var globals_1$2 = globals;
var manage_subscribers_1$2 = manageSubscribers;
function assertIsWebSocket(webSocketInstance, skip) {
    if (!skip && webSocketInstance instanceof WebSocket === false)
        throw new Error('');
}
util.assertIsWebSocket = assertIsWebSocket;
function resetGlobalState(url) {
    (0, manage_subscribers_1$2.resetSubscribers)(url);
    (0, globals_1$2.resetWebSockets)(url);
}
util.resetGlobalState = resetGlobalState;

var __assign$4 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
Object.defineProperty(attachListener, "__esModule", { value: true });
attachListener.attachListeners = void 0;
var socket_io_1$2 = socketIo;
var constants_1$5 = constants;
var util_1$1 = util;
var bindMessageHandler$1 = function (webSocketInstance, optionsRef, setLastMessage) {
    webSocketInstance.onmessage = function (message) {
        optionsRef.current.onMessage && optionsRef.current.onMessage(message);
        if (typeof optionsRef.current.filter === 'function' && optionsRef.current.filter(message) !== true) {
            return;
        }
        setLastMessage(message);
    };
};
var bindOpenHandler$1 = function (webSocketInstance, optionsRef, setReadyState, reconnectCount) {
    webSocketInstance.onopen = function (event) {
        optionsRef.current.onOpen && optionsRef.current.onOpen(event);
        reconnectCount.current = 0;
        setReadyState(constants_1$5.ReadyState.OPEN);
    };
};
var bindCloseHandler$1 = function (webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount) {
    if (constants_1$5.isEventSourceSupported && webSocketInstance instanceof EventSource) {
        return function () { };
    }
    (0, util_1$1.assertIsWebSocket)(webSocketInstance, optionsRef.current.skipAssert);
    var reconnectTimeout;
    webSocketInstance.onclose = function (event) {
        var _a;
        optionsRef.current.onClose && optionsRef.current.onClose(event);
        setReadyState(constants_1$5.ReadyState.CLOSED);
        if (optionsRef.current.shouldReconnect && optionsRef.current.shouldReconnect(event)) {
            var reconnectAttempts = (_a = optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1$5.DEFAULT_RECONNECT_LIMIT;
            if (reconnectCount.current < reconnectAttempts) {
                var nextReconnectInterval = typeof optionsRef.current.reconnectInterval === 'function' ?
                    optionsRef.current.reconnectInterval(reconnectCount.current) :
                    optionsRef.current.reconnectInterval;
                reconnectTimeout = window.setTimeout(function () {
                    reconnectCount.current++;
                    reconnect();
                }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1$5.DEFAULT_RECONNECT_INTERVAL_MS);
            }
            else {
                optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(reconnectAttempts);
                console.warn("Max reconnect attempts of ".concat(reconnectAttempts, " exceeded"));
            }
        }
    };
    return function () { return reconnectTimeout && window.clearTimeout(reconnectTimeout); };
};
var bindErrorHandler$1 = function (webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount) {
    var reconnectTimeout;
    webSocketInstance.onerror = function (error) {
        var _a;
        optionsRef.current.onError && optionsRef.current.onError(error);
        if (constants_1$5.isEventSourceSupported && webSocketInstance instanceof EventSource) {
            optionsRef.current.onClose && optionsRef.current.onClose(__assign$4(__assign$4({}, error), { code: 1006, reason: "An error occurred with the EventSource: ".concat(error), wasClean: false }));
            setReadyState(constants_1$5.ReadyState.CLOSED);
            webSocketInstance.close();
        }
        if (optionsRef.current.retryOnError) {
            if (reconnectCount.current < ((_a = optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1$5.DEFAULT_RECONNECT_LIMIT)) {
                var nextReconnectInterval = typeof optionsRef.current.reconnectInterval === 'function' ?
                    optionsRef.current.reconnectInterval(reconnectCount.current) :
                    optionsRef.current.reconnectInterval;
                reconnectTimeout = window.setTimeout(function () {
                    reconnectCount.current++;
                    reconnect();
                }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1$5.DEFAULT_RECONNECT_INTERVAL_MS);
            }
            else {
                optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(optionsRef.current.reconnectAttempts);
                console.warn("Max reconnect attempts of ".concat(optionsRef.current.reconnectAttempts, " exceeded"));
            }
        }
    };
    return function () { return reconnectTimeout && window.clearTimeout(reconnectTimeout); };
};
var attachListeners = function (webSocketInstance, setters, optionsRef, reconnect, reconnectCount, sendMessage) {
    var setLastMessage = setters.setLastMessage, setReadyState = setters.setReadyState;
    var interval;
    var cancelReconnectOnClose;
    var cancelReconnectOnError;
    if (optionsRef.current.fromSocketIO) {
        interval = (0, socket_io_1$2.setUpSocketIOPing)(sendMessage);
    }
    bindMessageHandler$1(webSocketInstance, optionsRef, setLastMessage);
    bindOpenHandler$1(webSocketInstance, optionsRef, setReadyState, reconnectCount);
    cancelReconnectOnClose = bindCloseHandler$1(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount);
    cancelReconnectOnError = bindErrorHandler$1(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount);
    return function () {
        setReadyState(constants_1$5.ReadyState.CLOSING);
        cancelReconnectOnClose();
        cancelReconnectOnError();
        webSocketInstance.close();
        if (interval)
            clearInterval(interval);
    };
};
attachListener.attachListeners = attachListeners;

var attachSharedListeners$1 = {};

var __assign$3 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
Object.defineProperty(attachSharedListeners$1, "__esModule", { value: true });
attachSharedListeners$1.attachSharedListeners = void 0;
var globals_1$1 = globals;
var constants_1$4 = constants;
var manage_subscribers_1$1 = manageSubscribers;
var socket_io_1$1 = socketIo;
var bindMessageHandler = function (webSocketInstance, url) {
    webSocketInstance.onmessage = function (message) {
        (0, manage_subscribers_1$1.getSubscribers)(url).forEach(function (subscriber) {
            if (subscriber.optionsRef.current.onMessage) {
                subscriber.optionsRef.current.onMessage(message);
            }
            if (typeof subscriber.optionsRef.current.filter === 'function' &&
                subscriber.optionsRef.current.filter(message) !== true) {
                return;
            }
            subscriber.setLastMessage(message);
        });
    };
};
var bindOpenHandler = function (webSocketInstance, url) {
    webSocketInstance.onopen = function (event) {
        (0, manage_subscribers_1$1.getSubscribers)(url).forEach(function (subscriber) {
            subscriber.reconnectCount.current = 0;
            if (subscriber.optionsRef.current.onOpen) {
                subscriber.optionsRef.current.onOpen(event);
            }
            subscriber.setReadyState(constants_1$4.ReadyState.OPEN);
        });
    };
};
var bindCloseHandler = function (webSocketInstance, url) {
    if (webSocketInstance instanceof WebSocket) {
        webSocketInstance.onclose = function (event) {
            (0, manage_subscribers_1$1.getSubscribers)(url).forEach(function (subscriber) {
                if (subscriber.optionsRef.current.onClose) {
                    subscriber.optionsRef.current.onClose(event);
                }
                subscriber.setReadyState(constants_1$4.ReadyState.CLOSED);
            });
            delete globals_1$1.sharedWebSockets[url];
            (0, manage_subscribers_1$1.getSubscribers)(url).forEach(function (subscriber) {
                var _a;
                if (subscriber.optionsRef.current.shouldReconnect &&
                    subscriber.optionsRef.current.shouldReconnect(event)) {
                    var reconnectAttempts = (_a = subscriber.optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1$4.DEFAULT_RECONNECT_LIMIT;
                    if (subscriber.reconnectCount.current < reconnectAttempts) {
                        var nextReconnectInterval = typeof subscriber.optionsRef.current.reconnectInterval === 'function' ?
                            subscriber.optionsRef.current.reconnectInterval(subscriber.reconnectCount.current) :
                            subscriber.optionsRef.current.reconnectInterval;
                        setTimeout(function () {
                            subscriber.reconnectCount.current++;
                            subscriber.reconnect.current();
                        }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1$4.DEFAULT_RECONNECT_INTERVAL_MS);
                    }
                    else {
                        subscriber.optionsRef.current.onReconnectStop && subscriber.optionsRef.current.onReconnectStop(subscriber.optionsRef.current.reconnectAttempts);
                        console.warn("Max reconnect attempts of ".concat(reconnectAttempts, " exceeded"));
                    }
                }
            });
        };
    }
};
var bindErrorHandler = function (webSocketInstance, url) {
    webSocketInstance.onerror = function (error) {
        (0, manage_subscribers_1$1.getSubscribers)(url).forEach(function (subscriber) {
            if (subscriber.optionsRef.current.onError) {
                subscriber.optionsRef.current.onError(error);
            }
            if (constants_1$4.isEventSourceSupported && webSocketInstance instanceof EventSource) {
                subscriber.optionsRef.current.onClose && subscriber.optionsRef.current.onClose(__assign$3(__assign$3({}, error), { code: 1006, reason: "An error occurred with the EventSource: ".concat(error), wasClean: false }));
                subscriber.setReadyState(constants_1$4.ReadyState.CLOSED);
            }
        });
        if (constants_1$4.isEventSourceSupported && webSocketInstance instanceof EventSource) {
            webSocketInstance.close();
        }
    };
};
var attachSharedListeners = function (webSocketInstance, url, optionsRef, sendMessage) {
    var interval;
    if (optionsRef.current.fromSocketIO) {
        interval = (0, socket_io_1$1.setUpSocketIOPing)(sendMessage);
    }
    bindMessageHandler(webSocketInstance, url);
    bindCloseHandler(webSocketInstance, url);
    bindOpenHandler(webSocketInstance, url);
    bindErrorHandler(webSocketInstance, url);
    return function () {
        if (interval)
            clearInterval(interval);
    };
};
attachSharedListeners$1.attachSharedListeners = attachSharedListeners;

Object.defineProperty(createOrJoin, "__esModule", { value: true });
createOrJoin.createOrJoinSocket = void 0;
var globals_1 = globals;
var constants_1$3 = constants;
var attach_listener_1 = attachListener;
var attach_shared_listeners_1 = attachSharedListeners$1;
var manage_subscribers_1 = manageSubscribers;
//TODO ensure that all onClose callbacks are called
var cleanSubscribers = function (url, subscriber, optionsRef, setReadyState, clearSocketIoPingInterval) {
    return function () {
        (0, manage_subscribers_1.removeSubscriber)(url, subscriber);
        if (!(0, manage_subscribers_1.hasSubscribers)(url)) {
            try {
                var socketLike = globals_1.sharedWebSockets[url];
                if (socketLike instanceof WebSocket) {
                    socketLike.onclose = function (event) {
                        if (optionsRef.current.onClose) {
                            optionsRef.current.onClose(event);
                        }
                        setReadyState(constants_1$3.ReadyState.CLOSED);
                    };
                }
                socketLike.close();
            }
            catch (e) {
            }
            if (clearSocketIoPingInterval)
                clearSocketIoPingInterval();
            delete globals_1.sharedWebSockets[url];
        }
    };
};
var createOrJoinSocket = function (webSocketRef, url, setReadyState, optionsRef, setLastMessage, startRef, reconnectCount, sendMessage) {
    if (!constants_1$3.isEventSourceSupported && optionsRef.current.eventSourceOptions) {
        if (constants_1$3.isReactNative) {
            throw new Error('EventSource is not supported in ReactNative');
        }
        else {
            throw new Error('EventSource is not supported');
        }
    }
    if (optionsRef.current.share) {
        var clearSocketIoPingInterval = null;
        if (globals_1.sharedWebSockets[url] === undefined) {
            globals_1.sharedWebSockets[url] = optionsRef.current.eventSourceOptions ?
                new EventSource(url, optionsRef.current.eventSourceOptions) :
                new WebSocket(url, optionsRef.current.protocols);
            webSocketRef.current = globals_1.sharedWebSockets[url];
            setReadyState(constants_1$3.ReadyState.CONNECTING);
            clearSocketIoPingInterval = (0, attach_shared_listeners_1.attachSharedListeners)(globals_1.sharedWebSockets[url], url, optionsRef, sendMessage);
        }
        else {
            webSocketRef.current = globals_1.sharedWebSockets[url];
            setReadyState(globals_1.sharedWebSockets[url].readyState);
        }
        var subscriber = {
            setLastMessage: setLastMessage,
            setReadyState: setReadyState,
            optionsRef: optionsRef,
            reconnectCount: reconnectCount,
            reconnect: startRef,
        };
        (0, manage_subscribers_1.addSubscriber)(url, subscriber);
        return cleanSubscribers(url, subscriber, optionsRef, setReadyState, clearSocketIoPingInterval);
    }
    else {
        webSocketRef.current = optionsRef.current.eventSourceOptions ?
            new EventSource(url, optionsRef.current.eventSourceOptions) :
            new WebSocket(url, optionsRef.current.protocols);
        setReadyState(constants_1$3.ReadyState.CONNECTING);
        if (!webSocketRef.current) {
            throw new Error('WebSocket failed to be created');
        }
        return (0, attach_listener_1.attachListeners)(webSocketRef.current, {
            setLastMessage: setLastMessage,
            setReadyState: setReadyState
        }, optionsRef, startRef.current, reconnectCount, sendMessage);
    }
};
createOrJoin.createOrJoinSocket = createOrJoinSocket;

var getUrl$1 = {};

var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(getUrl$1, "__esModule", { value: true });
getUrl$1.getUrl = void 0;
var socket_io_1 = socketIo;
var getUrl = function (url, optionsRef) { return __awaiter$1(void 0, void 0, void 0, function () {
    var convertedUrl, parsedUrl, parsedWithQueryParams;
    return __generator$1(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof url === 'function')) return [3 /*break*/, 2];
                return [4 /*yield*/, url()];
            case 1:
                convertedUrl = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                convertedUrl = url;
                _a.label = 3;
            case 3:
                parsedUrl = optionsRef.current.fromSocketIO ?
                    (0, socket_io_1.parseSocketIOUrl)(convertedUrl) :
                    convertedUrl;
                parsedWithQueryParams = optionsRef.current.queryParams ?
                    (0, socket_io_1.appendQueryParams)(parsedUrl, optionsRef.current.queryParams) :
                    parsedUrl;
                return [2 /*return*/, parsedWithQueryParams];
        }
    });
}); };
getUrl$1.getUrl = getUrl;

var proxy = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.websocketWrapper = void 0;
	var websocketWrapper = function (webSocket, start) {
	    return new Proxy(webSocket, {
	        get: function (obj, key) {
	            var val = obj[key];
	            if (key === 'reconnect')
	                return start;
	            if (typeof val === 'function') {
	                console.error('Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket.');
	                //Prevent error thrown by invoking a non-function
	                return function () { };
	            }
	            else {
	                return val;
	            }
	        },
	        set: function (obj, key, val) {
	            if (/^on/.test(key)) {
	                console.warn('The websocket\'s event handlers should be defined through the options object passed into useWebSocket.');
	                return false;
	            }
	            else {
	                obj[key] = val;
	                return true;
	            }
	        },
	    });
	};
	exports.websocketWrapper = websocketWrapper;
	exports.default = exports.websocketWrapper;
	
} (proxy));

var __assign$2 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(useWebsocket, "__esModule", { value: true });
useWebsocket.useWebSocket = void 0;
var react_1$2 = require$$0;
var react_dom_1 = require$$1;
var constants_1$2 = constants;
var create_or_join_1 = createOrJoin;
var get_url_1 = getUrl$1;
var proxy_1 = __importDefault(proxy);
var util_1 = util;
var useWebSocket$1 = function (url, options, connect) {
    if (options === void 0) { options = constants_1$2.DEFAULT_OPTIONS; }
    if (connect === void 0) { connect = true; }
    var _a = (0, react_1$2.useState)(null), lastMessage = _a[0], setLastMessage = _a[1];
    var _b = (0, react_1$2.useState)({}), readyState = _b[0], setReadyState = _b[1];
    var lastJsonMessage = (0, react_1$2.useMemo)(function () {
        if (lastMessage) {
            try {
                return JSON.parse(lastMessage.data);
            }
            catch (e) {
                return constants_1$2.UNPARSABLE_JSON_OBJECT;
            }
        }
        return null;
    }, [lastMessage]);
    var convertedUrl = (0, react_1$2.useRef)(null);
    var webSocketRef = (0, react_1$2.useRef)(null);
    var startRef = (0, react_1$2.useRef)(function () { return void 0; });
    var reconnectCount = (0, react_1$2.useRef)(0);
    var messageQueue = (0, react_1$2.useRef)([]);
    var webSocketProxy = (0, react_1$2.useRef)(null);
    var optionsCache = (0, react_1$2.useRef)(options);
    optionsCache.current = options;
    var readyStateFromUrl = convertedUrl.current && readyState[convertedUrl.current] !== undefined ?
        readyState[convertedUrl.current] :
        url !== null && connect === true ?
            constants_1$2.ReadyState.CONNECTING :
            constants_1$2.ReadyState.UNINSTANTIATED;
    var stringifiedQueryParams = options.queryParams ? JSON.stringify(options.queryParams) : null;
    var sendMessage = (0, react_1$2.useCallback)(function (message, keep) {
        var _a;
        if (keep === void 0) { keep = true; }
        if (constants_1$2.isEventSourceSupported && webSocketRef.current instanceof EventSource) {
            console.warn('Unable to send a message from an eventSource');
            return;
        }
        if (((_a = webSocketRef.current) === null || _a === void 0 ? void 0 : _a.readyState) === constants_1$2.ReadyState.OPEN) {
            (0, util_1.assertIsWebSocket)(webSocketRef.current, optionsCache.current.skipAssert);
            webSocketRef.current.send(message);
        }
        else if (keep) {
            messageQueue.current.push(message);
        }
    }, []);
    var sendJsonMessage = (0, react_1$2.useCallback)(function (message, keep) {
        if (keep === void 0) { keep = true; }
        sendMessage(JSON.stringify(message), keep);
    }, [sendMessage]);
    var getWebSocket = (0, react_1$2.useCallback)(function () {
        if (optionsCache.current.share !== true || (constants_1$2.isEventSourceSupported && webSocketRef.current instanceof EventSource)) {
            return webSocketRef.current;
        }
        if (webSocketProxy.current === null && webSocketRef.current) {
            (0, util_1.assertIsWebSocket)(webSocketRef.current, optionsCache.current.skipAssert);
            webSocketProxy.current = (0, proxy_1.default)(webSocketRef.current, startRef);
        }
        return webSocketProxy.current;
    }, []);
    (0, react_1$2.useEffect)(function () {
        if (url !== null && connect === true) {
            var removeListeners_1;
            var expectClose_1 = false;
            var createOrJoin_1 = true;
            var start_1 = function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a, protectedSetLastMessage, protectedSetReadyState;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = convertedUrl;
                            return [4 /*yield*/, (0, get_url_1.getUrl)(url, optionsCache)];
                        case 1:
                            _a.current = _b.sent();
                            protectedSetLastMessage = function (message) {
                                if (!expectClose_1) {
                                    (0, react_dom_1.flushSync)(function () { return setLastMessage(message); });
                                }
                            };
                            protectedSetReadyState = function (state) {
                                if (!expectClose_1) {
                                    (0, react_dom_1.flushSync)(function () { return setReadyState(function (prev) {
                                        var _a;
                                        return (__assign$2(__assign$2({}, prev), (convertedUrl.current && (_a = {}, _a[convertedUrl.current] = state, _a))));
                                    }); });
                                }
                            };
                            if (createOrJoin_1) {
                                removeListeners_1 = (0, create_or_join_1.createOrJoinSocket)(webSocketRef, convertedUrl.current, protectedSetReadyState, optionsCache, protectedSetLastMessage, startRef, reconnectCount, sendMessage);
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            startRef.current = function () {
                if (!expectClose_1) {
                    if (webSocketProxy.current)
                        webSocketProxy.current = null;
                    removeListeners_1 === null || removeListeners_1 === void 0 ? void 0 : removeListeners_1();
                    start_1();
                }
            };
            start_1();
            return function () {
                expectClose_1 = true;
                createOrJoin_1 = false;
                if (webSocketProxy.current)
                    webSocketProxy.current = null;
                removeListeners_1 === null || removeListeners_1 === void 0 ? void 0 : removeListeners_1();
                setLastMessage(null);
            };
        }
        else if (url === null || connect === false) {
            reconnectCount.current = 0; // reset reconnection attempts
            setReadyState(function (prev) {
                var _a;
                return (__assign$2(__assign$2({}, prev), (convertedUrl.current && (_a = {}, _a[convertedUrl.current] = constants_1$2.ReadyState.CLOSED, _a))));
            });
        }
    }, [url, connect, stringifiedQueryParams, sendMessage]);
    (0, react_1$2.useEffect)(function () {
        if (readyStateFromUrl === constants_1$2.ReadyState.OPEN) {
            messageQueue.current.splice(0).forEach(function (message) {
                sendMessage(message);
            });
        }
    }, [readyStateFromUrl]);
    return {
        sendMessage: sendMessage,
        sendJsonMessage: sendJsonMessage,
        lastMessage: lastMessage,
        lastJsonMessage: lastJsonMessage,
        readyState: readyStateFromUrl,
        getWebSocket: getWebSocket,
    };
};
useWebsocket.useWebSocket = useWebSocket$1;

var useSocketIo = {};

var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
Object.defineProperty(useSocketIo, "__esModule", { value: true });
useSocketIo.useSocketIO = void 0;
var react_1$1 = require$$0;
var use_websocket_1$1 = useWebsocket;
var constants_1$1 = constants;
var emptyEvent = {
    type: 'empty',
    payload: null,
};
var getSocketData = function (event) {
    if (!event || !event.data) {
        return emptyEvent;
    }
    var match = event.data.match(/\[.*]/);
    if (!match) {
        return emptyEvent;
    }
    var data = JSON.parse(match);
    if (!Array.isArray(data) || !data[1]) {
        return emptyEvent;
    }
    return {
        type: data[0],
        payload: data[1],
    };
};
var useSocketIO = function (url, options, connect) {
    if (options === void 0) { options = constants_1$1.DEFAULT_OPTIONS; }
    if (connect === void 0) { connect = true; }
    var optionsWithSocketIO = (0, react_1$1.useMemo)(function () { return (__assign$1(__assign$1({}, options), { fromSocketIO: true })); }, []);
    var _a = (0, use_websocket_1$1.useWebSocket)(url, optionsWithSocketIO, connect), sendMessage = _a.sendMessage, sendJsonMessage = _a.sendJsonMessage, lastMessage = _a.lastMessage, readyState = _a.readyState, getWebSocket = _a.getWebSocket;
    var socketIOLastMessage = (0, react_1$1.useMemo)(function () {
        return getSocketData(lastMessage);
    }, [lastMessage]);
    return {
        sendMessage: sendMessage,
        sendJsonMessage: sendJsonMessage,
        lastMessage: socketIOLastMessage,
        lastJsonMessage: socketIOLastMessage,
        readyState: readyState,
        getWebSocket: getWebSocket,
    };
};
useSocketIo.useSocketIO = useSocketIO;

var useEventSource$1 = {};

var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(useEventSource$1, "__esModule", { value: true });
useEventSource$1.useEventSource = void 0;
var react_1 = require$$0;
var use_websocket_1 = useWebsocket;
var constants_1 = constants;
var useEventSource = function (url, _a, connect) {
    if (_a === void 0) { _a = constants_1.DEFAULT_EVENT_SOURCE_OPTIONS; }
    var withCredentials = _a.withCredentials, events = _a.events, options = __rest(_a, ["withCredentials", "events"]);
    if (connect === void 0) { connect = true; }
    var optionsWithEventSource = __assign(__assign({}, options), { eventSourceOptions: {
            withCredentials: withCredentials,
        } });
    var eventsRef = (0, react_1.useRef)(constants_1.EMPTY_EVENT_HANDLERS);
    if (events) {
        eventsRef.current = events;
    }
    var _b = (0, use_websocket_1.useWebSocket)(url, optionsWithEventSource, connect), lastMessage = _b.lastMessage, readyState = _b.readyState, getWebSocket = _b.getWebSocket;
    (0, react_1.useEffect)(function () {
        if (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.type) {
            Object.entries(eventsRef.current).forEach(function (_a) {
                var type = _a[0], handler = _a[1];
                if (type === lastMessage.type) {
                    handler(lastMessage);
                }
            });
        }
    }, [lastMessage]);
    return {
        lastEvent: lastMessage,
        readyState: readyState,
        getEventSource: getWebSocket,
    };
};
useEventSource$1.useEventSource = useEventSource;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.resetGlobalState = exports.useEventSource = exports.ReadyState = exports.useSocketIO = exports.default = void 0;
	var use_websocket_1 = useWebsocket;
	Object.defineProperty(exports, "default", { enumerable: true, get: function () { return use_websocket_1.useWebSocket; } });
	var use_socket_io_1 = useSocketIo;
	Object.defineProperty(exports, "useSocketIO", { enumerable: true, get: function () { return use_socket_io_1.useSocketIO; } });
	var constants_1 = constants;
	Object.defineProperty(exports, "ReadyState", { enumerable: true, get: function () { return constants_1.ReadyState; } });
	var use_event_source_1 = useEventSource$1;
	Object.defineProperty(exports, "useEventSource", { enumerable: true, get: function () { return use_event_source_1.useEventSource; } });
	var util_1 = util;
	Object.defineProperty(exports, "resetGlobalState", { enumerable: true, get: function () { return util_1.resetGlobalState; } });
	
} (dist));

var useWebSocket = /*@__PURE__*/getDefaultExportFromCjs(dist);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\ndiv {\n}\n";
styleInject(css_248z);

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var cx = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

const kirby = "kirby.getshippr.com";

function Presence({ animate, apiKey, appId, channelId }) {
    const [online, setOnline] = require$$0.useState(0);
    const { sendJsonMessage } = useWebSocket(`wss:${kirby}?channelId=presence:${channelId}&apiKey=${apiKey}&appId=${appId}`, {
        share: true,
        shouldReconnect: () => true,
        onMessage: (event) => {
            const data = (event === null || event === void 0 ? void 0 : event.data) ? JSON.parse(event === null || event === void 0 ? void 0 : event.data) : null;
            if (data) {
                setOnline(data.connected || 0);
            }
        },
        onClose: (event) => { },
        onError: (event) => { },
    });
    const variants = ["marble", "beam", "pixel", "sunset", "ring", "bauhaus"];
    require$$0.useEffect(() => {
        sendJsonMessage({ type: "presence" });
    }, []);
    return (jsxRuntimeExports.jsxs("div", { children: [Array.from(Array(online > 4 ? 4 : online).keys()).map((p, i) => {
                return (jsxRuntimeExports.jsxs("div", { className: "inline", children: [" ", jsxRuntimeExports.jsx("img", { className: cx("cursor-pointer shadow-md inline w-8 border-2 -mr-3 border-blue-300 rounded-full", {
                                "hover:-translate-y-1": animate,
                            }), src: `https://source.boringavatars.com/${variants[i]}` })] }, i));
            }), online > 4 && (jsxRuntimeExports.jsx("div", { className: "inline", children: jsxRuntimeExports.jsxs("div", { className: cx("cursor-pointer shadow-md inline-flex items-center justify-center w-8 h-8 border-2 -mr-3 bg-blue-400 text-blue-100 text-xs border-blue-500 rounded-full", {
                        "hover:-translate-y-1": animate,
                    }), children: ["+", online - 4] }) }))] }));
}

exports.ChannelPresence = Presence;
exports.init = init;
