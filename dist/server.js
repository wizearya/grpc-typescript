/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __webpack_require__(/*! request-promise */ "request-promise");
function randomUser(resultCount) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`https://randomuser.me/api/`, {
            qs: {
                results: resultCount
            },
            json: true
        });
    });
}
exports.randomUser = randomUser;


/***/ }),

/***/ "./src/error/grpc_error.ts":
/*!*********************************!*\
  !*** ./src/error/grpc_error.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GrpcError extends Error {
    constructor(error) {
        super();
        Object.defineProperty(this, 'name', {
            get: () => this.constructor.name
        });
        Object.defineProperty(this, 'message', {
            get: () => error
        });
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.GrpcError = GrpcError;


/***/ }),

/***/ "./src/error/invalid_argument.ts":
/*!***************************************!*\
  !*** ./src/error/invalid_argument.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grpc_error_1 = __webpack_require__(/*! ./grpc_error */ "./src/error/grpc_error.ts");
const grpc_1 = __webpack_require__(/*! grpc */ "grpc");
class InvalidArgumentError extends grpc_error_1.GrpcError {
    constructor() {
        super(...arguments);
        this.code = grpc_1.status.NOT_FOUND;
    }
}
exports.InvalidArgumentError = InvalidArgumentError;


/***/ }),

/***/ "./src/protos/service_grpc_pb.js":
/*!***************************************!*\
  !*** ./src/protos/service_grpc_pb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATED CODE -- DO NOT EDIT!


var grpc = __webpack_require__(/*! grpc */ "grpc");
var service_pb = __webpack_require__(/*! ./service_pb.js */ "./src/protos/service_pb.js");

function serialize_test_user_UsersReply(arg) {
  if (!(arg instanceof service_pb.UsersReply)) {
    throw new Error('Expected argument of type test_user.UsersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_user_UsersReply(buffer_arg) {
  return service_pb.UsersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_user_UsersRequest(arg) {
  if (!(arg instanceof service_pb.UsersRequest)) {
    throw new Error('Expected argument of type test_user.UsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_user_UsersRequest(buffer_arg) {
  return service_pb.UsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserDomainService = exports.UserDomainService = {
  getUsers: {
    path: '/test_user.UserDomain/getUsers',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.UsersRequest,
    responseType: service_pb.UsersReply,
    requestSerialize: serialize_test_user_UsersRequest,
    requestDeserialize: deserialize_test_user_UsersRequest,
    responseSerialize: serialize_test_user_UsersReply,
    responseDeserialize: deserialize_test_user_UsersReply,
  },
};

exports.UserDomainClient = grpc.makeGenericClientConstructor(UserDomainService);


/***/ }),

/***/ "./src/protos/service_pb.js":
/*!**********************************!*\
  !*** ./src/protos/service_pb.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.test_user.User', null, global);
goog.exportSymbol('proto.test_user.User.Location', null, global);
goog.exportSymbol('proto.test_user.UsersReply', null, global);
goog.exportSymbol('proto.test_user.UsersRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.test_user.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.test_user.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.test_user.User.displayName = 'proto.test_user.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.test_user.User.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.test_user.User.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.test_user.User.Location.displayName = 'proto.test_user.User.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.test_user.UsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.test_user.UsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.test_user.UsersRequest.displayName = 'proto.test_user.UsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.test_user.UsersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.test_user.UsersReply.repeatedFields_, null);
};
goog.inherits(proto.test_user.UsersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.test_user.UsersReply.displayName = 'proto.test_user.UsersReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.User.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.test_user.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    location: (f = msg.getLocation()) && proto.test_user.User.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.test_user.User}
 */
proto.test_user.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.test_user.User;
  return proto.test_user.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.test_user.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.test_user.User}
 */
proto.test_user.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSex(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = new proto.test_user.User.Location;
      reader.readMessage(value,proto.test_user.User.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.test_user.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.test_user.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.test_user.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSex();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.test_user.User.Location.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.User.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.User.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.test_user.User.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.User.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ciry: jspb.Message.getFieldWithDefault(msg, 2, ""),
    street: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.test_user.User.Location}
 */
proto.test_user.User.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.test_user.User.Location;
  return proto.test_user.User.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.test_user.User.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.test_user.User.Location}
 */
proto.test_user.User.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCiry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.test_user.User.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.test_user.User.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.test_user.User.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.User.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCiry();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string state = 1;
 * @return {string}
 */
proto.test_user.User.Location.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User.Location} returns this
 */
proto.test_user.User.Location.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ciry = 2;
 * @return {string}
 */
proto.test_user.User.Location.prototype.getCiry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User.Location} returns this
 */
proto.test_user.User.Location.prototype.setCiry = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string street = 3;
 * @return {string}
 */
proto.test_user.User.Location.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User.Location} returns this
 */
proto.test_user.User.Location.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string firstName = 1;
 * @return {string}
 */
proto.test_user.User.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User} returns this
 */
proto.test_user.User.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lastName = 2;
 * @return {string}
 */
proto.test_user.User.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User} returns this
 */
proto.test_user.User.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sex = 3;
 * @return {string}
 */
proto.test_user.User.prototype.getSex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User} returns this
 */
proto.test_user.User.prototype.setSex = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.test_user.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.test_user.User} returns this
 */
proto.test_user.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Location location = 5;
 * @return {?proto.test_user.User.Location}
 */
proto.test_user.User.prototype.getLocation = function() {
  return /** @type{?proto.test_user.User.Location} */ (
    jspb.Message.getWrapperField(this, proto.test_user.User.Location, 5));
};


/**
 * @param {?proto.test_user.User.Location|undefined} value
 * @return {!proto.test_user.User} returns this
*/
proto.test_user.User.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.test_user.User} returns this
 */
proto.test_user.User.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.test_user.User.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.UsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.UsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.test_user.UsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.UsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultcount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.test_user.UsersRequest}
 */
proto.test_user.UsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.test_user.UsersRequest;
  return proto.test_user.UsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.test_user.UsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.test_user.UsersRequest}
 */
proto.test_user.UsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.test_user.UsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.test_user.UsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.test_user.UsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.UsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultcount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 resultCount = 1;
 * @return {number}
 */
proto.test_user.UsersRequest.prototype.getResultcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.test_user.UsersRequest} returns this
 */
proto.test_user.UsersRequest.prototype.setResultcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.test_user.UsersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.UsersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.UsersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.test_user.UsersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.UsersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.test_user.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.test_user.UsersReply}
 */
proto.test_user.UsersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.test_user.UsersReply;
  return proto.test_user.UsersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.test_user.UsersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.test_user.UsersReply}
 */
proto.test_user.UsersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.test_user.User;
      reader.readMessage(value,proto.test_user.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.test_user.UsersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.test_user.UsersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.test_user.UsersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.test_user.UsersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.test_user.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated User users = 1;
 * @return {!Array<!proto.test_user.User>}
 */
proto.test_user.UsersReply.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.test_user.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.test_user.User, 1));
};


/**
 * @param {!Array<!proto.test_user.User>} value
 * @return {!proto.test_user.UsersReply} returns this
*/
proto.test_user.UsersReply.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.test_user.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.test_user.User}
 */
proto.test_user.UsersReply.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.test_user.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.test_user.UsersReply} returns this
 */
proto.test_user.UsersReply.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


goog.object.extend(exports, proto.test_user);


/***/ }),

/***/ "./src/repository.ts":
/*!***************************!*\
  !*** ./src/repository.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_pb_1 = __webpack_require__(/*! ./protos/service_pb */ "./src/protos/service_pb.js");
const api_1 = __webpack_require__(/*! ./api */ "./src/api.ts");
const invalid_argument_1 = __webpack_require__(/*! ./error/invalid_argument */ "./src/error/invalid_argument.ts");
function generateUser(response) {
    return response.results.map(result => {
        const user = new service_pb_1.User();
        user.setFirstname(result.name.first);
        user.setLastname(result.name.last);
        user.setSex(result.gender);
        user.setEmail(result.email);
        const location = new service_pb_1.User.Location();
        location.setState(result.location.street);
        location.setCiry(result.location.city);
        location.setStreet(result.location.state);
        user.setLocation(location);
        return user;
    });
}
function findUsers(resultCount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (resultCount <= 0) {
            throw new invalid_argument_1.InvalidArgumentError('Do one or more numbers');
        }
        return generateUser(yield api_1.randomUser(resultCount));
    });
}
exports.findUsers = findUsers;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = __webpack_require__(/*! grpc */ "grpc");
const service_grpc_pb_1 = __webpack_require__(/*! ./protos/service_grpc_pb */ "./src/protos/service_grpc_pb.js");
const service_1 = __webpack_require__(/*! ./service */ "./src/service.ts");
const grpcServer = new grpc_1.Server();
grpcServer.addProtoService(service_grpc_pb_1.UserDomainService, {
    getUsers: service_1.getUsers
});
grpcServer.bind('localhost:50051', grpc_1.ServerCredentials.createInsecure());
grpcServer.start();


/***/ }),

/***/ "./src/service.ts":
/*!************************!*\
  !*** ./src/service.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_pb_1 = __webpack_require__(/*! ./protos/service_pb */ "./src/protos/service_pb.js");
const grpc_1 = __webpack_require__(/*! grpc */ "grpc");
const repository_1 = __webpack_require__(/*! ./repository */ "./src/repository.ts");
function getUsers(call, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = call.request;
        console.log(call.metadata.getMap());
        const reply = new service_pb_1.UsersReply();
        try {
            reply.setUsersList(yield repository_1.findUsers(request.getResultcount()));
            callback(null, reply);
        }
        catch (e) {
            callback({
                message: e.message,
                code: e.code || grpc_1.status.UNKNOWN
            });
        }
    });
}
exports.getUsers = getUsers;


/***/ }),

/***/ "google-protobuf":
/*!**********************************!*\
  !*** external "google-protobuf" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-protobuf");

/***/ }),

/***/ "grpc":
/*!***********************!*\
  !*** external "grpc" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grpc");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3IvZ3JwY19lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3IvaW52YWxpZF9hcmd1bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG9zL3NlcnZpY2VfZ3JwY19wYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG9zL3NlcnZpY2VfcGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtcHJvdG9idWZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncnBjXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVxdWVzdC1wcm9taXNlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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QUVwQyxNQUFNLFVBQVUsR0FBVyxJQUFJLGFBQU0sRUFBRSxDQUFDO0FBQ3hDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUNBQWlCLEVBQUU7SUFDNUMsUUFBUSxFQUFSLGtCQUFRO0NBQ1QsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSx3QkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG5CLGtHQUE2RDtBQUU3RCx1REFBOEI7QUFDOUIsb0ZBQXlDO0FBTXpDLFNBQXNCLFFBQVEsQ0FBQyxJQUFtQyxFQUFFLFFBQWE7O1FBQzlFLE1BQU0sT0FBTyxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sS0FBSyxHQUFlLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTNDLElBQUk7WUFDRixLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sc0JBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTlELFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FFdkI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLFFBQVEsQ0FBQztnQkFDUCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87Z0JBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQU0sQ0FBQyxPQUFPO2FBQy9CLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUFBO0FBakJELDRCQWlCQzs7Ozs7Ozs7Ozs7O0FDM0JELDRDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCAqIGFzIHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJztcblxuLyoqXG4gKiBJUmVzcG9uc2VcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmVzcG9uc2Uge1xuICByZXN1bHRzOiBbe1xuICAgIGdlbmRlcjogc3RyaW5nLFxuICAgIG5hbWU6IHtcbiAgICAgIGZpcnN0OiBzdHJpbmcsXG4gICAgICBsYXN0OiBzdHJpbmdcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBzdHJlZXQ6IHN0cmluZyxcbiAgICAgIGNpdHk6IHN0cmluZyxcbiAgICAgIHN0YXRlOiBzdHJpbmdcbiAgICB9LFxuICAgIGVtYWlsOiBzdHJpbmdcbiAgfV1cbn1cblxuLyoqXG4gKiByYW5kb21Vc2VyXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzdWx0Q291bnRcbiAqIEByZXR1cm4gUHJvbWlzZTxJUmVzcG9uc2U+XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYW5kb21Vc2VyKHJlc3VsdENvdW50OiBudW1iZXIpOiBQcm9taXNlPElSZXNwb25zZT4ge1xuICByZXR1cm4gcmVxdWVzdChgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9gLCB7XG4gICAgcXM6IHtcbiAgICAgIHJlc3VsdHM6IHJlc3VsdENvdW50XG4gICAgfSxcbiAgICBqc29uOiB0cnVlXG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdHVzIH0gZnJvbSAnZ3JwYyc7XG5cbi8qKlxuICogQWJzdHJhY3QgRXJyb3IgY2xhc3NcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JwY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgYWJzdHJhY3QgY29kZTogc3RhdHVzO1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoZXJyb3I6IHN0cmluZyB8IEVycm9yKSB7XG4gICAgc3VwZXIoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ25hbWUnLCB7XG4gICAgICBnZXQ6ICgpID0+IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICB9KTtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfVxufSIsImltcG9ydCB7IEdycGNFcnJvciB9IGZyb20gXCIuL2dycGNfZXJyb3JcIjtcbmltcG9ydCB7IHN0YXR1cyB9IGZyb20gJ2dycGMnO1xuLyoqXG4gKiBJbnZhbGlkQXJndW1lbnRFcnJvclxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEdycGNFcnJvciB7XG4gIHB1YmxpYyBjb2RlOiBzdGF0dXMgPSBzdGF0dXMuTk9UX0ZPVU5EXG59IiwiLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbid1c2Ugc3RyaWN0JztcbnZhciBncnBjID0gcmVxdWlyZSgnZ3JwYycpO1xudmFyIHNlcnZpY2VfcGIgPSByZXF1aXJlKCcuL3NlcnZpY2VfcGIuanMnKTtcblxuZnVuY3Rpb24gc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcGx5KGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBzZXJ2aWNlX3BiLlVzZXJzUmVwbHkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhcmd1bWVudCBvZiB0eXBlIHRlc3RfdXNlci5Vc2Vyc1JlcGx5Jyk7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcGx5KGJ1ZmZlcl9hcmcpIHtcbiAgcmV0dXJuIHNlcnZpY2VfcGIuVXNlcnNSZXBseS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0KGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBzZXJ2aWNlX3BiLlVzZXJzUmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgdGVzdF91c2VyLlVzZXJzUmVxdWVzdCcpO1xuICB9XG4gIHJldHVybiBCdWZmZXIuZnJvbShhcmcuc2VyaWFsaXplQmluYXJ5KCkpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0KGJ1ZmZlcl9hcmcpIHtcbiAgcmV0dXJuIHNlcnZpY2VfcGIuVXNlcnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5KG5ldyBVaW50OEFycmF5KGJ1ZmZlcl9hcmcpKTtcbn1cblxuXG52YXIgVXNlckRvbWFpblNlcnZpY2UgPSBleHBvcnRzLlVzZXJEb21haW5TZXJ2aWNlID0ge1xuICBnZXRVc2Vyczoge1xuICAgIHBhdGg6ICcvdGVzdF91c2VyLlVzZXJEb21haW4vZ2V0VXNlcnMnLFxuICAgIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICAgIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgICByZXF1ZXN0VHlwZTogc2VydmljZV9wYi5Vc2Vyc1JlcXVlc3QsXG4gICAgcmVzcG9uc2VUeXBlOiBzZXJ2aWNlX3BiLlVzZXJzUmVwbHksXG4gICAgcmVxdWVzdFNlcmlhbGl6ZTogc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcXVlc3QsXG4gICAgcmVxdWVzdERlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0LFxuICAgIHJlc3BvbnNlU2VyaWFsaXplOiBzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVwbHksXG4gICAgcmVzcG9uc2VEZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVwbHksXG4gIH0sXG59O1xuXG5leHBvcnRzLlVzZXJEb21haW5DbGllbnQgPSBncnBjLm1ha2VHZW5lcmljQ2xpZW50Q29uc3RydWN0b3IoVXNlckRvbWFpblNlcnZpY2UpO1xuIiwiLy8gc291cmNlOiBzZXJ2aWNlLnByb3RvXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnRlc3RfdXNlci5Vc2VyJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHknLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnRlc3RfdXNlci5Vc2VyLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXInO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24nO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QuZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdCc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnJlcGVhdGVkRmllbGRzXywgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5Jztcbn1cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGZpcnN0bmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbiAgICBsYXN0bmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCBcIlwiKSxcbiAgICBzZXg6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgXCJcIiksXG4gICAgZW1haWw6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNCwgXCJcIiksXG4gICAgbG9jYXRpb246IChmID0gbXNnLmdldExvY2F0aW9uKCkpICYmIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZilcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2VyO1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEZpcnN0bmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldExhc3RuYW1lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0U2V4KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0RW1haWwodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0TG9jYXRpb24odmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0Rmlyc3RuYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TGFzdG5hbWUoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRTZXgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRFbWFpbCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgNCxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldExvY2F0aW9uKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgNSxcbiAgICAgIGYsXG4gICAgICBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgc3RhdGU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG4gICAgY2lyeToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCBcIlwiKSxcbiAgICBzdHJlZXQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgXCJcIilcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uO1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFN0YXRlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0Q2lyeSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFN0cmVldCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRTdGF0ZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldENpcnkoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRTdHJlZXQoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBzdGF0ZSA9IDE7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgY2lyeSA9IDI7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5nZXRDaXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5zZXRDaXJ5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHN0cmVldCA9IDM7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5nZXRTdHJlZXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnNldFN0cmVldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMywgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBmaXJzdE5hbWUgPSAxO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0Rmlyc3RuYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRGaXJzdG5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgbGFzdE5hbWUgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0TGFzdG5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNldExhc3RuYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHNleCA9IDM7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRTZXggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNldFNleCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMywgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBlbWFpbCA9IDQ7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRFbWFpbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA0LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0RW1haWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDQsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBMb2NhdGlvbiBsb2NhdGlvbiA9IDU7XG4gKiBAcmV0dXJuIHs/cHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24sIDUpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0gez9wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbnx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDUsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIG1lc3NhZ2UgZmllbGQgbWFraW5nIGl0IHVuZGVmaW5lZC5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5jbGVhckxvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldExvY2F0aW9uKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmhhc0xvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgNSkgIT0gbnVsbDtcbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICByZXN1bHRjb3VudDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3Q7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDMyKCkpO1xuICAgICAgbXNnLnNldFJlc3VsdGNvdW50KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0UmVzdWx0Y291bnQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQzMihcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDMyIHJlc3VsdENvdW50ID0gMTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUuZ2V0UmVzdWx0Y291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXN1bHRjb3VudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogTGlzdCBvZiByZXBlYXRlZCBmaWVsZHMgd2l0aGluIHRoaXMgbWVzc2FnZSB0eXBlLlxuICogQHByaXZhdGUgeyFBcnJheTxudW1iZXI+fVxuICogQGNvbnN0XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnJlcGVhdGVkRmllbGRzXyA9IFsxXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHVzZXJzTGlzdDoganNwYi5NZXNzYWdlLnRvT2JqZWN0TGlzdChtc2cuZ2V0VXNlcnNMaXN0KCksXG4gICAgcHJvdG8udGVzdF91c2VyLlVzZXIudG9PYmplY3QsIGluY2x1ZGVJbnN0YW5jZSlcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5O1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8udGVzdF91c2VyLlVzZXI7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8udGVzdF91c2VyLlVzZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5hZGRVc2Vycyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRVc2Vyc0xpc3QoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8udGVzdF91c2VyLlVzZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgVXNlciB1c2VycyA9IDE7XG4gKiBAcmV0dXJuIHshQXJyYXk8IXByb3RvLnRlc3RfdXNlci5Vc2VyPn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLmdldFVzZXJzTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBleyFBcnJheTwhcHJvdG8udGVzdF91c2VyLlVzZXI+fSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLnRlc3RfdXNlci5Vc2VyLCAxKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshQXJyYXk8IXByb3RvLnRlc3RfdXNlci5Vc2VyPn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX0gcmV0dXJucyB0aGlzXG4qL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLnNldFVzZXJzTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyPX0gb3B0X3ZhbHVlXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9pbmRleFxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUuYWRkVXNlcnMgPSBmdW5jdGlvbihvcHRfdmFsdWUsIG9wdF9pbmRleCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmFkZFRvUmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgMSwgb3B0X3ZhbHVlLCBwcm90by50ZXN0X3VzZXIuVXNlciwgb3B0X2luZGV4KTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGxpc3QgbWFraW5nIGl0IGVtcHR5IGJ1dCBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5jbGVhclVzZXJzTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zZXRVc2Vyc0xpc3QoW10pO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8udGVzdF91c2VyKTtcbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3Byb3Rvcy9zZXJ2aWNlX3BiJztcbmltcG9ydCB7IHJhbmRvbVVzZXIsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IHtJbnZhbGlkQXJndW1lbnRFcnJvcn0gZnJvbSBcIi4vZXJyb3IvaW52YWxpZF9hcmd1bWVudFwiO1xuXG4vKipcbiAqIGdlbmVyYXRlVXNlclxuICogQHBhcmFtIHtJUmVzcG9uc2V9IHJlc3BvbnNlXG4gKiBAcmV0dXJuIFVzZXJbXVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVVzZXIocmVzcG9uc2U6IElSZXNwb25zZSk6IFVzZXJbXSB7XG4gIHJldHVybiByZXNwb25zZS5yZXN1bHRzLm1hcChyZXN1bHQgPT4ge1xuICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuc2V0Rmlyc3RuYW1lKHJlc3VsdC5uYW1lLmZpcnN0KTtcbiAgICB1c2VyLnNldExhc3RuYW1lKHJlc3VsdC5uYW1lLmxhc3QpO1xuICAgIHVzZXIuc2V0U2V4KHJlc3VsdC5nZW5kZXIpO1xuICAgIHVzZXIuc2V0RW1haWwocmVzdWx0LmVtYWlsKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uOiBVc2VyLkxvY2F0aW9uID0gbmV3IFVzZXIuTG9jYXRpb24oKTtcbiAgICBsb2NhdGlvbi5zZXRTdGF0ZShyZXN1bHQubG9jYXRpb24uc3RyZWV0KTtcbiAgICBsb2NhdGlvbi5zZXRDaXJ5KHJlc3VsdC5sb2NhdGlvbi5jaXR5KTtcbiAgICBsb2NhdGlvbi5zZXRTdHJlZXQocmVzdWx0LmxvY2F0aW9uLnN0YXRlKTtcblxuICAgIHVzZXIuc2V0TG9jYXRpb24obG9jYXRpb24pXG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfSk7XG59XG5cbi8qKlxuICogZmluZFVzZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzdWx0Q291bnRcbiAqIEByZXR1cm4gUHJvbWlzZTxVc2VyW10+XG4gKiBAdGhyb3dzIEludmFsaWRBcmd1bWVudEVycm9yXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kVXNlcnMocmVzdWx0Q291bnQ6IG51bWJlcik6IFByb21pc2U8VXNlcltdPiB7XG4gIGlmIChyZXN1bHRDb3VudCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdEbyBvbmUgb3IgbW9yZSBudW1iZXJzJyk7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdGVVc2VyKGF3YWl0IHJhbmRvbVVzZXIocmVzdWx0Q291bnQpKTtcbn1cbiIsImltcG9ydCB7IFNlcnZlciwgU2VydmVyQ3JlZGVudGlhbHMgfSBmcm9tICdncnBjJztcbmltcG9ydCB7IFVzZXJEb21haW5TZXJ2aWNlIH0gZnJvbSAnLi9wcm90b3Mvc2VydmljZV9ncnBjX3BiJ1xuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tICcuL3NlcnZpY2UnXG5cbmNvbnN0IGdycGNTZXJ2ZXI6IFNlcnZlciA9IG5ldyBTZXJ2ZXIoKTtcbmdycGNTZXJ2ZXIuYWRkUHJvdG9TZXJ2aWNlKFVzZXJEb21haW5TZXJ2aWNlLCB7XG4gIGdldFVzZXJzXG59KTtcblxuZ3JwY1NlcnZlci5iaW5kKCdsb2NhbGhvc3Q6NTAwNTEnLCBTZXJ2ZXJDcmVkZW50aWFscy5jcmVhdGVJbnNlY3VyZSgpKTtcbmdycGNTZXJ2ZXIuc3RhcnQoKTsiLCJpbXBvcnQgeyBTZXJ2ZXJVbmFyeUNhbGwgfSBmcm9tICdncnBjJztcbmltcG9ydCB7VXNlcnNSZXF1ZXN0LCBVc2Vyc1JlcGx5fSBmcm9tICcuL3Byb3Rvcy9zZXJ2aWNlX3BiJztcbi8vIGltcG9ydCB7IGZpbmRVc2VycyB9IGZyb20gJy4vcmVwb3NpdG9yeSdcbmltcG9ydCB7IHN0YXR1cyB9IGZyb20gJ2dycGMnO1xuaW1wb3J0IHsgZmluZFVzZXJzIH0gZnJvbSAnLi9yZXBvc2l0b3J5Jztcbi8qKlxuICogZ2V0VXNlcnNcbiAqIEBwYXJhbSB7YW55fSBjYWxsXG4gKiBAcGFyYW0ge1NlcnZlclVuYXJ5Q2FsbDxVc2Vyc1JlcXVlc3Q+fSBjYWxsYmFja1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoY2FsbDogU2VydmVyVW5hcnlDYWxsPFVzZXJzUmVxdWVzdD4sIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgIGNvbnN0IHJlcXVlc3Q6IFVzZXJzUmVxdWVzdCA9IGNhbGwucmVxdWVzdDtcbiAgY29uc29sZS5sb2coY2FsbC5tZXRhZGF0YS5nZXRNYXAoKSk7XG5cbiAgY29uc3QgcmVwbHk6IFVzZXJzUmVwbHkgPSBuZXcgVXNlcnNSZXBseSgpO1xuXG4gIHRyeSB7XG4gICAgcmVwbHkuc2V0VXNlcnNMaXN0KGF3YWl0IGZpbmRVc2VycyhyZXF1ZXN0LmdldFJlc3VsdGNvdW50KCkpKTtcbiAgICAvLyByZXBseS5zZXRVc2Vyc0xpc3QoW2R1bW15KCldKTtcbiAgICBjYWxsYmFjayhudWxsLCByZXBseSk7XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvZGU6IGUuY29kZSB8fCBzdGF0dXMuVU5LTk9XTlxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogVGVtcG9yYXJ5IHByb2Nlc3NpbmcgZm9yIGxvYWQgdGVzdCAuLi5cbiAqL1xuLypmdW5jdGlvbiBkdW1teSgpOiBVc2VyIHtcbiAgY29uc3QgdXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XG4gIHVzZXIuc2V0Rmlyc3RuYW1lKCdkdW1teScpO1xuICB1c2VyLnNldExhc3RuYW1lKCdkdW1teScpO1xuICB1c2VyLnNldFNleCgnbWFsZScpO1xuICB1c2VyLnNldEVtYWlsKCdkdW1teUBzYW1wbGUuY29tJyk7XG5cbiAgcmV0dXJuIHVzZXI7XG59Ki8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnb29nbGUtcHJvdG9idWZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JwY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0LXByb21pc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==