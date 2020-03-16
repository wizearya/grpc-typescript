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
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_user_UsersReply(buffer_arg) {
  return service_pb.UsersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_user_UsersRequest(arg) {
  if (!(arg instanceof service_pb.UsersRequest)) {
    throw new Error('Expected argument of type test_user.UsersRequest');
  }
  return new Buffer(arg.serializeBinary());
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
  proto.test_user.User.displayName = 'proto.test_user.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.User.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
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
  proto.test_user.User.Location.displayName = 'proto.test_user.User.Location';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.User.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.User.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
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


/** @param {string} value */
proto.test_user.User.Location.prototype.setState = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ciry = 2;
 * @return {string}
 */
proto.test_user.User.Location.prototype.getCiry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.test_user.User.Location.prototype.setCiry = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string street = 3;
 * @return {string}
 */
proto.test_user.User.Location.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.test_user.User.Location.prototype.setStreet = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string firstName = 1;
 * @return {string}
 */
proto.test_user.User.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.test_user.User.prototype.setFirstname = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lastName = 2;
 * @return {string}
 */
proto.test_user.User.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.test_user.User.prototype.setLastname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sex = 3;
 * @return {string}
 */
proto.test_user.User.prototype.getSex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.test_user.User.prototype.setSex = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.test_user.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.test_user.User.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Location location = 5;
 * @return {?proto.test_user.User.Location}
 */
proto.test_user.User.prototype.getLocation = function() {
  return /** @type{?proto.test_user.User.Location} */ (
    jspb.Message.getWrapperField(this, proto.test_user.User.Location, 5));
};


/** @param {?proto.test_user.User.Location|undefined} value */
proto.test_user.User.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.test_user.User.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.test_user.User.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
  proto.test_user.UsersRequest.displayName = 'proto.test_user.UsersRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.UsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.UsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
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


/** @param {number} value */
proto.test_user.UsersRequest.prototype.setResultcount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



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
  proto.test_user.UsersReply.displayName = 'proto.test_user.UsersReply';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.test_user.UsersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test_user.UsersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.test_user.UsersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
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


/** @param {!Array<!proto.test_user.User>} value */
proto.test_user.UsersReply.prototype.setUsersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.test_user.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.test_user.User}
 */
proto.test_user.UsersReply.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.test_user.User, opt_index);
};


proto.test_user.UsersReply.prototype.clearUsersList = function() {
  this.setUsersList([]);
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
const Express = __webpack_require__(/*! express */ "express");
const grpcServer = new grpc_1.Server();
grpcServer.addProtoService(service_grpc_pb_1.UserDomainService, {
    getUsers: service_1.getUsers
});
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8080';
grpcServer.bind(`${host}:${port}`, grpc_1.ServerCredentials.createInsecure());
grpcServer.start();
console.log(`${host}:${port}`);
const express = Express();
express.get('/', (req, res) => {
    res.send(`application alive`);
}).listen('80', () => {
    console.log(`listen health check http server`);
});


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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3Rvcy9zZXJ2aWNlX2dycGNfcGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3Rvcy9zZXJ2aWNlX3BiLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdvb2dsZS1wcm90b2J1ZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdycGNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVhO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLGtCQUFNO0FBQ3pCLGlCQUFpQixtQkFBTyxDQUFDLG1EQUFpQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLHdDQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsWUFBWTtBQUNaLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLG1CQUFtQjtBQUM5QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsbUJBQW1CO0FBQzlCLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxZQUFZO0FBQ1osY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUMsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsK0JBQStCO0FBQzFDLFdBQVcsbUJBQW1CO0FBQzlCLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjs7O0FBR0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7OztBQUdBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCOzs7QUFHQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjs7O0FBR0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7OztBQUdBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCOzs7QUFHQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjs7O0FBR0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBOzs7QUFHQSxZQUFZLHlDQUF5QztBQUNyRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekMsWUFBWTtBQUNaLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekMsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDLFdBQVcsbUJBQW1CO0FBQzlCLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCOzs7QUFHQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QyxZQUFZO0FBQ1osY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkMsV0FBVyxtQkFBbUI7QUFDOUIsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7OztBQUdBLFlBQVksOEJBQThCO0FBQzFDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUN0eEJBLHVEQUFpRDtBQUNqRCxpSEFBNEQ7QUFDNUQsMkVBQW9DO0FBQ3BDLDhEQUFtQztBQUVuQyxNQUFNLFVBQVUsR0FBVyxJQUFJLGFBQU0sRUFBRSxDQUFDO0FBQ3hDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUNBQWlCLEVBQUU7SUFDNUMsUUFBUSxFQUFSLGtCQUFRO0NBQ1QsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDO0FBQ3JELE1BQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUVoRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFLHdCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUvQixNQUFNLE9BQU8sR0FBb0IsT0FBTyxFQUFFLENBQUM7QUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUMvRCxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCSCxrR0FBbUU7QUFFbkUsdURBQThCO0FBTTlCLFNBQXNCLFFBQVEsQ0FBQyxJQUFtQyxFQUFFLFFBQWE7O1FBRS9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sS0FBSyxHQUFlLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTNDLElBQUk7WUFFRixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FFdkI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLFFBQVEsQ0FBQztnQkFDUCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87Z0JBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQU0sQ0FBQyxPQUFPO2FBQy9CLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUFBO0FBakJELDRCQWlCQztBQUtELFNBQVMsS0FBSztJQUNaLE1BQU0sSUFBSSxHQUFTLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUVsQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZDRCxvQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCIvLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxuJ3VzZSBzdHJpY3QnO1xudmFyIGdycGMgPSByZXF1aXJlKCdncnBjJyk7XG52YXIgc2VydmljZV9wYiA9IHJlcXVpcmUoJy4vc2VydmljZV9wYi5qcycpO1xuXG5mdW5jdGlvbiBzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVwbHkoYXJnKSB7XG4gIGlmICghKGFyZyBpbnN0YW5jZW9mIHNlcnZpY2VfcGIuVXNlcnNSZXBseSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgdGVzdF91c2VyLlVzZXJzUmVwbHknKTtcbiAgfVxuICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcuc2VyaWFsaXplQmluYXJ5KCkpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXBseShidWZmZXJfYXJnKSB7XG4gIHJldHVybiBzZXJ2aWNlX3BiLlVzZXJzUmVwbHkuZGVzZXJpYWxpemVCaW5hcnkobmV3IFVpbnQ4QXJyYXkoYnVmZmVyX2FyZykpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVxdWVzdChhcmcpIHtcbiAgaWYgKCEoYXJnIGluc3RhbmNlb2Ygc2VydmljZV9wYi5Vc2Vyc1JlcXVlc3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhcmd1bWVudCBvZiB0eXBlIHRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QnKTtcbiAgfVxuICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcuc2VyaWFsaXplQmluYXJ5KCkpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0KGJ1ZmZlcl9hcmcpIHtcbiAgcmV0dXJuIHNlcnZpY2VfcGIuVXNlcnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5KG5ldyBVaW50OEFycmF5KGJ1ZmZlcl9hcmcpKTtcbn1cblxuXG52YXIgVXNlckRvbWFpblNlcnZpY2UgPSBleHBvcnRzLlVzZXJEb21haW5TZXJ2aWNlID0ge1xuICBnZXRVc2Vyczoge1xuICAgIHBhdGg6ICcvdGVzdF91c2VyLlVzZXJEb21haW4vZ2V0VXNlcnMnLFxuICAgIHJlcXVlc3RTdHJlYW06IGZhbHNlLFxuICAgIHJlc3BvbnNlU3RyZWFtOiBmYWxzZSxcbiAgICByZXF1ZXN0VHlwZTogc2VydmljZV9wYi5Vc2Vyc1JlcXVlc3QsXG4gICAgcmVzcG9uc2VUeXBlOiBzZXJ2aWNlX3BiLlVzZXJzUmVwbHksXG4gICAgcmVxdWVzdFNlcmlhbGl6ZTogc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcXVlc3QsXG4gICAgcmVxdWVzdERlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0LFxuICAgIHJlc3BvbnNlU2VyaWFsaXplOiBzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVwbHksXG4gICAgcmVzcG9uc2VEZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVwbHksXG4gIH0sXG59O1xuXG5leHBvcnRzLlVzZXJEb21haW5DbGllbnQgPSBncnBjLm1ha2VHZW5lcmljQ2xpZW50Q29uc3RydWN0b3IoVXNlckRvbWFpblNlcnZpY2UpO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by50ZXN0X3VzZXIuVXNlcicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24nLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0JywgbnVsbCwgZ2xvYmFsKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnRlc3RfdXNlci5Vc2VyLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2VyJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBmaXJzdG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG4gICAgbGFzdG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIiksXG4gICAgc2V4OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpLFxuICAgIGVtYWlsOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDQsIFwiXCIpLFxuICAgIGxvY2F0aW9uOiAoZiA9IG1zZy5nZXRMb2NhdGlvbigpKSAmJiBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlcjtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRGaXJzdG5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRMYXN0bmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFNleCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEVtYWlsKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbjtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldExvY2F0aW9uKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEZpcnN0bmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldExhc3RuYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U2V4KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RW1haWwoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDQsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRMb2NhdGlvbigpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDUsXG4gICAgICBmLFxuICAgICAgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uJztcbn1cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBzdGF0ZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbiAgICBjaXJ5OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIFwiXCIpLFxuICAgIHN0cmVldDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb247XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0U3RhdGUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRDaXJ5KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0U3RyZWV0KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFN0YXRlKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0Q2lyeSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFN0cmVldCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHN0YXRlID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgY2lyeSA9IDI7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5nZXRDaXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnNldENpcnkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBzdHJlZXQgPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuZ2V0U3RyZWV0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnNldFN0cmVldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGZpcnN0TmFtZSA9IDE7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRGaXJzdG5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0Rmlyc3RuYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgbGFzdE5hbWUgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0TGFzdG5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0TGFzdG5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBzZXggPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0U2V4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNldFNleCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGVtYWlsID0gNDtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmdldEVtYWlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDQsIFwiXCIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNldEVtYWlsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDQsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBMb2NhdGlvbiBsb2NhdGlvbiA9IDU7XG4gKiBAcmV0dXJuIHs/cHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb259XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24sIDUpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufHVuZGVmaW5lZH0gdmFsdWUgKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgNSwgdmFsdWUpO1xufTtcblxuXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuY2xlYXJMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldExvY2F0aW9uKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7IWJvb2xlYW59XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5oYXNMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDUpICE9IG51bGw7XG59O1xuXG5cblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QnO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQlxuICogICAgIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgcmVzdWx0Y291bnQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgMClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0O1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQzMigpKTtcbiAgICAgIG1zZy5zZXRSZXN1bHRjb3VudCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFJlc3VsdGNvdW50KCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50MzIoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQzMiByZXN1bHRDb3VudCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QucHJvdG90eXBlLmdldFJlc3VsdGNvdW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIDApKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVzdWx0Y291bnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseSA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LmRpc3BsYXlOYW1lID0gJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5Jztcbn1cbi8qKlxuICogTGlzdCBvZiByZXBlYXRlZCBmaWVsZHMgd2l0aGluIHRoaXMgbWVzc2FnZSB0eXBlLlxuICogQHByaXZhdGUgeyFBcnJheTxudW1iZXI+fVxuICogQGNvbnN0XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnJlcGVhdGVkRmllbGRzXyA9IFsxXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHVzZXJzTGlzdDoganNwYi5NZXNzYWdlLnRvT2JqZWN0TGlzdChtc2cuZ2V0VXNlcnNMaXN0KCksXG4gICAgcHJvdG8udGVzdF91c2VyLlVzZXIudG9PYmplY3QsIGluY2x1ZGVJbnN0YW5jZSlcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5O1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8udGVzdF91c2VyLlVzZXI7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8udGVzdF91c2VyLlVzZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5hZGRVc2Vycyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRVc2Vyc0xpc3QoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8udGVzdF91c2VyLlVzZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgVXNlciB1c2VycyA9IDE7XG4gKiBAcmV0dXJuIHshQXJyYXk8IXByb3RvLnRlc3RfdXNlci5Vc2VyPn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLmdldFVzZXJzTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBleyFBcnJheTwhcHJvdG8udGVzdF91c2VyLlVzZXI+fSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLnRlc3RfdXNlci5Vc2VyLCAxKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0geyFBcnJheTwhcHJvdG8udGVzdF91c2VyLlVzZXI+fSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLnNldFVzZXJzTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXI9fSBvcHRfdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2luZGV4XG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5hZGRVc2VycyA9IGZ1bmN0aW9uKG9wdF92YWx1ZSwgb3B0X2luZGV4KSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuYWRkVG9SZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCBvcHRfdmFsdWUsIHByb3RvLnRlc3RfdXNlci5Vc2VyLCBvcHRfaW5kZXgpO1xufTtcblxuXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUuY2xlYXJVc2Vyc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXRVc2Vyc0xpc3QoW10pO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8udGVzdF91c2VyKTtcbiIsImltcG9ydCB7IFNlcnZlciwgU2VydmVyQ3JlZGVudGlhbHMgfSBmcm9tICdncnBjJztcbmltcG9ydCB7IFVzZXJEb21haW5TZXJ2aWNlIH0gZnJvbSAnLi9wcm90b3Mvc2VydmljZV9ncnBjX3BiJ1xuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tICcuL3NlcnZpY2UnXG5pbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCBncnBjU2VydmVyOiBTZXJ2ZXIgPSBuZXcgU2VydmVyKCk7XG5ncnBjU2VydmVyLmFkZFByb3RvU2VydmljZShVc2VyRG9tYWluU2VydmljZSwge1xuICBnZXRVc2Vyc1xufSk7XG5cbmNvbnN0IGhvc3Q6IHN0cmluZyA9IHByb2Nlc3MuZW52LkhPU1QgfHwgJ2xvY2FsaG9zdCc7XG5jb25zdCBwb3J0OiBzdHJpbmcgPSBwcm9jZXNzLmVudi5QT1JUIHx8ICc4MDgwJztcblxuZ3JwY1NlcnZlci5iaW5kKGAke2hvc3R9OiR7cG9ydH1gLCBTZXJ2ZXJDcmVkZW50aWFscy5jcmVhdGVJbnNlY3VyZSgpKTtcbmdycGNTZXJ2ZXIuc3RhcnQoKTtcblxuY29uc29sZS5sb2coYCR7aG9zdH06JHtwb3J0fWApO1xuXG5jb25zdCBleHByZXNzOiBFeHByZXNzLkV4cHJlc3MgPSBFeHByZXNzKCk7XG5cbmV4cHJlc3MuZ2V0KCcvJywgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgcmVzLnNlbmQoYGFwcGxpY2F0aW9uIGFsaXZlYCk7XG59KS5saXN0ZW4oJzgwJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgbGlzdGVuIGhlYWx0aCBjaGVjayBodHRwIHNlcnZlcmApO1xufSk7XG4iLCJpbXBvcnQgeyBTZXJ2ZXJVbmFyeUNhbGwgfSBmcm9tICdncnBjJztcbmltcG9ydCB7VXNlcnNSZXF1ZXN0LCBVc2Vyc1JlcGx5LCBVc2VyfSBmcm9tICcuL3Byb3Rvcy9zZXJ2aWNlX3BiJztcbi8vIGltcG9ydCB7IGZpbmRVc2VycyB9IGZyb20gJy4vcmVwb3NpdG9yeSdcbmltcG9ydCB7IHN0YXR1cyB9IGZyb20gJ2dycGMnO1xuLyoqXG4gKiBnZXRVc2Vyc1xuICogQHBhcmFtIHthbnl9IGNhbGxcbiAqIEBwYXJhbSB7U2VydmVyVW5hcnlDYWxsPFVzZXJzUmVxdWVzdD59IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VycyhjYWxsOiBTZXJ2ZXJVbmFyeUNhbGw8VXNlcnNSZXF1ZXN0PiwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBjb25zdCByZXF1ZXN0OiBVc2Vyc1JlcXVlc3QgPSBjYWxsLnJlcXVlc3Q7XG4gIGNvbnNvbGUubG9nKGNhbGwubWV0YWRhdGEuZ2V0TWFwKCkpO1xuXG4gIGNvbnN0IHJlcGx5OiBVc2Vyc1JlcGx5ID0gbmV3IFVzZXJzUmVwbHkoKTtcblxuICB0cnkge1xuICAgIC8vIHJlcGx5LnNldFVzZXJzTGlzdChhd2FpdCBmaW5kVXNlcnMocmVxdWVzdC5nZXRSZXN1bHRjb3VudCgpKSk7XG4gICAgcmVwbHkuc2V0VXNlcnNMaXN0KFtkdW1teSgpXSk7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVwbHkpO1xuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb2RlOiBlLmNvZGUgfHwgc3RhdHVzLlVOS05PV05cbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFRlbXBvcmFyeSBwcm9jZXNzaW5nIGZvciBsb2FkIHRlc3QgLi4uXG4gKi9cbmZ1bmN0aW9uIGR1bW15KCk6IFVzZXIge1xuICBjb25zdCB1c2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgdXNlci5zZXRGaXJzdG5hbWUoJ2R1bW15Jyk7XG4gIHVzZXIuc2V0TGFzdG5hbWUoJ2R1bW15Jyk7XG4gIHVzZXIuc2V0U2V4KCdtYWxlJyk7XG4gIHVzZXIuc2V0RW1haWwoJ2R1bW15QHNhbXBsZS5jb20nKTtcblxuICByZXR1cm4gdXNlcjtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1wcm90b2J1ZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncnBjXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=