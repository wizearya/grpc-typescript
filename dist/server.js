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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_pb_1 = __webpack_require__(/*! ./protos/service_pb */ "./src/protos/service_pb.js");
const grpc_1 = __webpack_require__(/*! grpc */ "grpc");
function getUsers(call, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(call.metadata.getMap());
        const reply = new service_pb_1.UsersReply();
        try {
            reply.setUsersList([dummy()]);
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
function dummy() {
    const user = new service_pb_1.User();
    user.setFirstname('dummy');
    user.setLastname('dummy');
    user.setSex('male');
    user.setEmail('dummy@sample.com');
    return user;
}


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3Rvcy9zZXJ2aWNlX2dycGNfcGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3Rvcy9zZXJ2aWNlX3BiLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ29vZ2xlLXByb3RvYnVmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JwY1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRWE7QUFDYixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsaUJBQWlCLG1CQUFPLENBQUMsbURBQWlCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkNELDRDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsIi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG4ndXNlIHN0cmljdCc7XG52YXIgZ3JwYyA9IHJlcXVpcmUoJ2dycGMnKTtcbnZhciBzZXJ2aWNlX3BiID0gcmVxdWlyZSgnLi9zZXJ2aWNlX3BiLmpzJyk7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXBseShhcmcpIHtcbiAgaWYgKCEoYXJnIGluc3RhbmNlb2Ygc2VydmljZV9wYi5Vc2Vyc1JlcGx5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSB0ZXN0X3VzZXIuVXNlcnNSZXBseScpO1xuICB9XG4gIHJldHVybiBCdWZmZXIuZnJvbShhcmcuc2VyaWFsaXplQmluYXJ5KCkpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXBseShidWZmZXJfYXJnKSB7XG4gIHJldHVybiBzZXJ2aWNlX3BiLlVzZXJzUmVwbHkuZGVzZXJpYWxpemVCaW5hcnkobmV3IFVpbnQ4QXJyYXkoYnVmZmVyX2FyZykpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVxdWVzdChhcmcpIHtcbiAgaWYgKCEoYXJnIGluc3RhbmNlb2Ygc2VydmljZV9wYi5Vc2Vyc1JlcXVlc3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhcmd1bWVudCBvZiB0eXBlIHRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QnKTtcbiAgfVxuICByZXR1cm4gQnVmZmVyLmZyb20oYXJnLnNlcmlhbGl6ZUJpbmFyeSgpKTtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVxdWVzdChidWZmZXJfYXJnKSB7XG4gIHJldHVybiBzZXJ2aWNlX3BiLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cblxudmFyIFVzZXJEb21haW5TZXJ2aWNlID0gZXhwb3J0cy5Vc2VyRG9tYWluU2VydmljZSA9IHtcbiAgZ2V0VXNlcnM6IHtcbiAgICBwYXRoOiAnL3Rlc3RfdXNlci5Vc2VyRG9tYWluL2dldFVzZXJzJyxcbiAgICByZXF1ZXN0U3RyZWFtOiBmYWxzZSxcbiAgICByZXNwb25zZVN0cmVhbTogZmFsc2UsXG4gICAgcmVxdWVzdFR5cGU6IHNlcnZpY2VfcGIuVXNlcnNSZXF1ZXN0LFxuICAgIHJlc3BvbnNlVHlwZTogc2VydmljZV9wYi5Vc2Vyc1JlcGx5LFxuICAgIHJlcXVlc3RTZXJpYWxpemU6IHNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0LFxuICAgIHJlcXVlc3REZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVxdWVzdCxcbiAgICByZXNwb25zZVNlcmlhbGl6ZTogc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcGx5LFxuICAgIHJlc3BvbnNlRGVzZXJpYWxpemU6IGRlc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcGx5LFxuICB9LFxufTtcblxuZXhwb3J0cy5Vc2VyRG9tYWluQ2xpZW50ID0gZ3JwYy5tYWtlR2VuZXJpY0NsaWVudENvbnN0cnVjdG9yKFVzZXJEb21haW5TZXJ2aWNlKTtcbiIsIi8vIHNvdXJjZTogc2VydmljZS5wcm90b1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by50ZXN0X3VzZXIuVXNlcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0JywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlciA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by50ZXN0X3VzZXIuVXNlciwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2VyJztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbiA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbiwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uJztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5yZXBlYXRlZEZpZWxkc18sIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHksIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5kaXNwbGF5TmFtZSA9ICdwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseSc7XG59XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBmaXJzdG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG4gICAgbGFzdG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIiksXG4gICAgc2V4OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpLFxuICAgIGVtYWlsOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDQsIFwiXCIpLFxuICAgIGxvY2F0aW9uOiAoZiA9IG1zZy5nZXRMb2NhdGlvbigpKSAmJiBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlcjtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRGaXJzdG5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRMYXN0bmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFNleCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEVtYWlsKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbjtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldExvY2F0aW9uKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEZpcnN0bmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldExhc3RuYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U2V4KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RW1haWwoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDQsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRMb2NhdGlvbigpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDUsXG4gICAgICBmLFxuICAgICAgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24udG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24udG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHN0YXRlOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIFwiXCIpLFxuICAgIGNpcnk6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIiksXG4gICAgc3RyZWV0OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbjtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRTdGF0ZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldENpcnkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRTdHJlZXQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhdGUoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRDaXJ5KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RyZWV0KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgc3RhdGUgPSAxO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGNpcnkgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuZ2V0Q2lyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2V0Q2lyeSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBzdHJlZXQgPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuZ2V0U3RyZWV0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5zZXRTdHJlZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgZmlyc3ROYW1lID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmdldEZpcnN0bmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0Rmlyc3RuYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGxhc3ROYW1lID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmdldExhc3RuYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRMYXN0bmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBzZXggPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0U2V4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRTZXggPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgZW1haWwgPSA0O1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0RW1haWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgNCwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNldEVtYWlsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCA0LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgTG9jYXRpb24gbG9jYXRpb24gPSA1O1xuICogQHJldHVybiB7P3Byb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXs/cHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLCA1KSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHs/cHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb258dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfSByZXR1cm5zIHRoaXNcbiovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCA1LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBtZXNzYWdlIGZpZWxkIG1ha2luZyBpdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuY2xlYXJMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zZXRMb2NhdGlvbih1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5oYXNMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDUpICE9IG51bGw7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgcmVzdWx0Y291bnQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgMClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0O1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQzMigpKTtcbiAgICAgIG1zZy5zZXRSZXN1bHRjb3VudCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFJlc3VsdGNvdW50KCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50MzIoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQzMiByZXN1bHRDb3VudCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QucHJvdG90eXBlLmdldFJlc3VsdGNvdW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVzdWx0Y291bnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgcmVwZWF0ZWQgZmllbGRzIHdpdGhpbiB0aGlzIG1lc3NhZ2UgdHlwZS5cbiAqIEBwcml2YXRlIHshQXJyYXk8bnVtYmVyPn1cbiAqIEBjb25zdFxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5yZXBlYXRlZEZpZWxkc18gPSBbMV07XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICB1c2Vyc0xpc3Q6IGpzcGIuTWVzc2FnZS50b09iamVjdExpc3QobXNnLmdldFVzZXJzTGlzdCgpLFxuICAgIHByb3RvLnRlc3RfdXNlci5Vc2VyLnRvT2JqZWN0LCBpbmNsdWRlSW5zdGFuY2UpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseTtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2VyO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLnRlc3RfdXNlci5Vc2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuYWRkVXNlcnModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0VXNlcnNMaXN0KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIHByb3RvLnRlc3RfdXNlci5Vc2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIHJlcGVhdGVkIFVzZXIgdXNlcnMgPSAxO1xuICogQHJldHVybiB7IUFycmF5PCFwcm90by50ZXN0X3VzZXIuVXNlcj59XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5nZXRVc2Vyc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXshQXJyYXk8IXByb3RvLnRlc3RfdXNlci5Vc2VyPn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by50ZXN0X3VzZXIuVXNlciwgMSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFwcm90by50ZXN0X3VzZXIuVXNlcj59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5zZXRVc2Vyc0xpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcj19IG9wdF92YWx1ZVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaW5kZXhcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLmFkZFVzZXJzID0gZnVuY3Rpb24ob3B0X3ZhbHVlLCBvcHRfaW5kZXgpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5hZGRUb1JlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDEsIG9wdF92YWx1ZSwgcHJvdG8udGVzdF91c2VyLlVzZXIsIG9wdF9pbmRleCk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBsaXN0IG1ha2luZyBpdCBlbXB0eSBidXQgbm9uLW51bGwuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9IHJldHVybnMgdGhpc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUuY2xlYXJVc2Vyc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0VXNlcnNMaXN0KFtdKTtcbn07XG5cblxuZ29vZy5vYmplY3QuZXh0ZW5kKGV4cG9ydHMsIHByb3RvLnRlc3RfdXNlcik7XG4iLCJpbXBvcnQgeyBTZXJ2ZXIsIFNlcnZlckNyZWRlbnRpYWxzIH0gZnJvbSAnZ3JwYyc7XG5pbXBvcnQgeyBVc2VyRG9tYWluU2VydmljZSB9IGZyb20gJy4vcHJvdG9zL3NlcnZpY2VfZ3JwY19wYidcbmltcG9ydCB7IGdldFVzZXJzIH0gZnJvbSAnLi9zZXJ2aWNlJ1xuXG5jb25zdCBncnBjU2VydmVyOiBTZXJ2ZXIgPSBuZXcgU2VydmVyKCk7XG5ncnBjU2VydmVyLmFkZFByb3RvU2VydmljZShVc2VyRG9tYWluU2VydmljZSwge1xuICBnZXRVc2Vyc1xufSk7XG5cbmdycGNTZXJ2ZXIuYmluZCgnbG9jYWxob3N0OjUwMDUxJywgU2VydmVyQ3JlZGVudGlhbHMuY3JlYXRlSW5zZWN1cmUoKSk7XG5ncnBjU2VydmVyLnN0YXJ0KCk7IiwiaW1wb3J0IHsgU2VydmVyVW5hcnlDYWxsIH0gZnJvbSAnZ3JwYyc7XG5pbXBvcnQge1VzZXJzUmVxdWVzdCwgVXNlcnNSZXBseSwgVXNlcn0gZnJvbSAnLi9wcm90b3Mvc2VydmljZV9wYic7XG4vLyBpbXBvcnQgeyBmaW5kVXNlcnMgfSBmcm9tICcuL3JlcG9zaXRvcnknXG5pbXBvcnQgeyBzdGF0dXMgfSBmcm9tICdncnBjJztcbi8qKlxuICogZ2V0VXNlcnNcbiAqIEBwYXJhbSB7YW55fSBjYWxsXG4gKiBAcGFyYW0ge1NlcnZlclVuYXJ5Q2FsbDxVc2Vyc1JlcXVlc3Q+fSBjYWxsYmFja1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoY2FsbDogU2VydmVyVW5hcnlDYWxsPFVzZXJzUmVxdWVzdD4sIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gY29uc3QgcmVxdWVzdDogVXNlcnNSZXF1ZXN0ID0gY2FsbC5yZXF1ZXN0O1xuICBjb25zb2xlLmxvZyhjYWxsLm1ldGFkYXRhLmdldE1hcCgpKTtcblxuICBjb25zdCByZXBseTogVXNlcnNSZXBseSA9IG5ldyBVc2Vyc1JlcGx5KCk7XG5cbiAgdHJ5IHtcbiAgICAvLyByZXBseS5zZXRVc2Vyc0xpc3QoYXdhaXQgZmluZFVzZXJzKHJlcXVlc3QuZ2V0UmVzdWx0Y291bnQoKSkpO1xuICAgIHJlcGx5LnNldFVzZXJzTGlzdChbZHVtbXkoKV0pO1xuICAgIGNhbGxiYWNrKG51bGwsIHJlcGx5KTtcblxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgY29kZTogZS5jb2RlIHx8IHN0YXR1cy5VTktOT1dOXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUZW1wb3JhcnkgcHJvY2Vzc2luZyBmb3IgbG9hZCB0ZXN0IC4uLlxuICovXG5mdW5jdGlvbiBkdW1teSgpOiBVc2VyIHtcbiAgY29uc3QgdXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XG4gIHVzZXIuc2V0Rmlyc3RuYW1lKCdkdW1teScpO1xuICB1c2VyLnNldExhc3RuYW1lKCdkdW1teScpO1xuICB1c2VyLnNldFNleCgnbWFsZScpO1xuICB1c2VyLnNldEVtYWlsKCdkdW1teUBzYW1wbGUuY29tJyk7XG5cbiAgcmV0dXJuIHVzZXI7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXByb3RvYnVmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdycGNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==