import { jsxs, jsx } from 'react/jsx-runtime';
import require$$0, { useState, useEffect } from 'react';
import require$$1 from 'react-dom';

const init = (appId, apiKey) => {
    {
        return {};
    }
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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
    const [online, setOnline] = useState(0);
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
    useEffect(() => {
        sendJsonMessage({ type: "presence" });
    }, []);
    return (jsxs("div", { children: [Array.from(Array(online > 4 ? 4 : online).keys()).map((p, i) => {
                return (jsxs("div", { className: "inline", children: [" ", jsx("img", { className: cx("cursor-pointer shadow-md inline w-8 border-2 -mr-3 border-blue-300 rounded-full", {
                                "hover:-translate-y-1": animate,
                            }), src: `https://source.boringavatars.com/${variants[i]}` })] }, i));
            }), online > 4 && (jsx("div", { className: "inline", children: jsxs("div", { className: cx("cursor-pointer shadow-md inline-flex items-center justify-center w-8 h-8 border-2 -mr-3 bg-blue-400 text-blue-100 text-xs border-blue-500 rounded-full", {
                        "hover:-translate-y-1": animate,
                    }), children: ["+", online - 4] }) }))] }));
}

export { Presence as ChannelPresence, init };
