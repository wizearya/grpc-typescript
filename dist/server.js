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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3Rvcy9zZXJ2aWNlX2dycGNfcGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3Rvcy9zZXJ2aWNlX3BiLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ29vZ2xlLXByb3RvYnVmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JwY1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRWE7QUFDYixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsaUJBQWlCLG1CQUFPLENBQUMsbURBQWlCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFLLENBQUMsQ0FBQztTQUV2QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsUUFBUSxDQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztnQkFDbEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBTSxDQUFDLE9BQU87YUFDL0IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQUE7QUFqQkQsNEJBaUJDO0FBS0QsU0FBUyxLQUFLO0lBQ1osTUFBTSxJQUFJLEdBQVMsSUFBSSxpQkFBSSxFQUFFLENBQUM7SUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWxDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkNELDRDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsIi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuXG4ndXNlIHN0cmljdCc7XG52YXIgZ3JwYyA9IHJlcXVpcmUoJ2dycGMnKTtcbnZhciBzZXJ2aWNlX3BiID0gcmVxdWlyZSgnLi9zZXJ2aWNlX3BiLmpzJyk7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXBseShhcmcpIHtcbiAgaWYgKCEoYXJnIGluc3RhbmNlb2Ygc2VydmljZV9wYi5Vc2Vyc1JlcGx5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJndW1lbnQgb2YgdHlwZSB0ZXN0X3VzZXIuVXNlcnNSZXBseScpO1xuICB9XG4gIHJldHVybiBuZXcgQnVmZmVyKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcGx5KGJ1ZmZlcl9hcmcpIHtcbiAgcmV0dXJuIHNlcnZpY2VfcGIuVXNlcnNSZXBseS5kZXNlcmlhbGl6ZUJpbmFyeShuZXcgVWludDhBcnJheShidWZmZXJfYXJnKSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXF1ZXN0KGFyZykge1xuICBpZiAoIShhcmcgaW5zdGFuY2VvZiBzZXJ2aWNlX3BiLlVzZXJzUmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgdGVzdF91c2VyLlVzZXJzUmVxdWVzdCcpO1xuICB9XG4gIHJldHVybiBuZXcgQnVmZmVyKGFyZy5zZXJpYWxpemVCaW5hcnkoKSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcXVlc3QoYnVmZmVyX2FyZykge1xuICByZXR1cm4gc2VydmljZV9wYi5Vc2Vyc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkobmV3IFVpbnQ4QXJyYXkoYnVmZmVyX2FyZykpO1xufVxuXG5cbnZhciBVc2VyRG9tYWluU2VydmljZSA9IGV4cG9ydHMuVXNlckRvbWFpblNlcnZpY2UgPSB7XG4gIGdldFVzZXJzOiB7XG4gICAgcGF0aDogJy90ZXN0X3VzZXIuVXNlckRvbWFpbi9nZXRVc2VycycsXG4gICAgcmVxdWVzdFN0cmVhbTogZmFsc2UsXG4gICAgcmVzcG9uc2VTdHJlYW06IGZhbHNlLFxuICAgIHJlcXVlc3RUeXBlOiBzZXJ2aWNlX3BiLlVzZXJzUmVxdWVzdCxcbiAgICByZXNwb25zZVR5cGU6IHNlcnZpY2VfcGIuVXNlcnNSZXBseSxcbiAgICByZXF1ZXN0U2VyaWFsaXplOiBzZXJpYWxpemVfdGVzdF91c2VyX1VzZXJzUmVxdWVzdCxcbiAgICByZXF1ZXN0RGVzZXJpYWxpemU6IGRlc2VyaWFsaXplX3Rlc3RfdXNlcl9Vc2Vyc1JlcXVlc3QsXG4gICAgcmVzcG9uc2VTZXJpYWxpemU6IHNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXBseSxcbiAgICByZXNwb25zZURlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV90ZXN0X3VzZXJfVXNlcnNSZXBseSxcbiAgfSxcbn07XG5cbmV4cG9ydHMuVXNlckRvbWFpbkNsaWVudCA9IGdycGMubWFrZUdlbmVyaWNDbGllbnRDb25zdHJ1Y3RvcihVc2VyRG9tYWluU2VydmljZSk7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnRlc3RfdXNlci5Vc2VyJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbicsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHknLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8udGVzdF91c2VyLlVzZXIsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXInO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGZpcnN0bmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbiAgICBsYXN0bmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCBcIlwiKSxcbiAgICBzZXg6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgXCJcIiksXG4gICAgZW1haWw6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNCwgXCJcIiksXG4gICAgbG9jYXRpb246IChmID0gbXNnLmdldExvY2F0aW9uKCkpICYmIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZilcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2VyO1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJ9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEZpcnN0bmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldExhc3RuYW1lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0U2V4KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0RW1haWwodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0TG9jYXRpb24odmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcn0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0Rmlyc3RuYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0TGFzdG5hbWUoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRTZXgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRFbWFpbCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgNCxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldExvY2F0aW9uKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgNSxcbiAgICAgIGYsXG4gICAgICBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24gPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24sIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24nO1xufVxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24udG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24udG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHN0YXRlOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIFwiXCIpLFxuICAgIGNpcnk6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgXCJcIiksXG4gICAgc3RyZWV0OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbjtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRTdGF0ZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldENpcnkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRTdHJlZXQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhdGUoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRDaXJ5KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RyZWV0KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgc3RhdGUgPSAxO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBjaXJ5ID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb24ucHJvdG90eXBlLmdldENpcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2V0Q2lyeSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHN0cmVldCA9IDM7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9uLnByb3RvdHlwZS5nZXRTdHJlZXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbi5wcm90b3R5cGUuc2V0U3RyZWV0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgZmlyc3ROYW1lID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmdldEZpcnN0bmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRGaXJzdG5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBsYXN0TmFtZSA9IDI7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRMYXN0bmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCBcIlwiKSk7XG59O1xuXG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5zZXRMYXN0bmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHNleCA9IDM7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5nZXRTZXggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0U2V4ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgZW1haWwgPSA0O1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuZ2V0RW1haWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgNCwgXCJcIikpO1xufTtcblxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlci5wcm90b3R5cGUuc2V0RW1haWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIExvY2F0aW9uIGxvY2F0aW9uID0gNTtcbiAqIEByZXR1cm4gez9wcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLnRlc3RfdXNlci5Vc2VyLkxvY2F0aW9ufSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by50ZXN0X3VzZXIuVXNlci5Mb2NhdGlvbiwgNSkpO1xufTtcblxuXG4vKiogQHBhcmFtIHs/cHJvdG8udGVzdF91c2VyLlVzZXIuTG9jYXRpb258dW5kZWZpbmVkfSB2YWx1ZSAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCA1LCB2YWx1ZSk7XG59O1xuXG5cbnByb3RvLnRlc3RfdXNlci5Vc2VyLnByb3RvdHlwZS5jbGVhckxvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0TG9jYXRpb24odW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHshYm9vbGVhbn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXIucHJvdG90eXBlLmhhc0xvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgNSkgIT0gbnVsbDtcbn07XG5cblxuXG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QuZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdCc7XG59XG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICByZXN1bHRjb3VudDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3Q7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdH1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDMyKCkpO1xuICAgICAgbXNnLnNldFJlc3VsdGNvdW50KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcXVlc3R9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0UmVzdWx0Y291bnQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQzMihcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDMyIHJlc3VsdENvdW50ID0gMTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVxdWVzdC5wcm90b3R5cGUuZ2V0UmVzdWx0Y291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgMCkpO1xufTtcblxuXG4vKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXN1bHRjb3VudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5yZXBlYXRlZEZpZWxkc18sIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHksIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuZGlzcGxheU5hbWUgPSAncHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHknO1xufVxuLyoqXG4gKiBMaXN0IG9mIHJlcGVhdGVkIGZpZWxkcyB3aXRoaW4gdGhpcyBtZXNzYWdlIHR5cGUuXG4gKiBAcHJpdmF0ZSB7IUFycmF5PG51bWJlcj59XG4gKiBAY29uc3RcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucmVwZWF0ZWRGaWVsZHNfID0gWzFdO1xuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90byBzdWl0YWJsZSBmb3IgdXNlIGluIFNveSB0ZW1wbGF0ZXMuXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgY29tLmdvb2dsZS5hcHBzLmpzcGIuSnNDbGFzc1RlbXBsYXRlLkpTX1JFU0VSVkVEX1dPUkRTLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEIgaW5zdGFuY2VcbiAqICAgICBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OiBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgdXNlcnNMaXN0OiBqc3BiLk1lc3NhZ2UudG9PYmplY3RMaXN0KG1zZy5nZXRVc2Vyc0xpc3QoKSxcbiAgICBwcm90by50ZXN0X3VzZXIuVXNlci50b09iamVjdCwgaW5jbHVkZUluc3RhbmNlKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9XG4gKi9cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHk7XG4gIHJldHVybiBwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by50ZXN0X3VzZXIuVXNlcjtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by50ZXN0X3VzZXIuVXNlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLmFkZFVzZXJzKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHl9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFVzZXJzTGlzdCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgMSxcbiAgICAgIGYsXG4gICAgICBwcm90by50ZXN0X3VzZXIuVXNlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiByZXBlYXRlZCBVc2VyIHVzZXJzID0gMTtcbiAqIEByZXR1cm4geyFBcnJheTwhcHJvdG8udGVzdF91c2VyLlVzZXI+fVxuICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUuZ2V0VXNlcnNMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7IUFycmF5PCFwcm90by50ZXN0X3VzZXIuVXNlcj59ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0UmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8udGVzdF91c2VyLlVzZXIsIDEpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7IUFycmF5PCFwcm90by50ZXN0X3VzZXIuVXNlcj59IHZhbHVlICovXG5wcm90by50ZXN0X3VzZXIuVXNlcnNSZXBseS5wcm90b3R5cGUuc2V0VXNlcnNMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAganNwYi5NZXNzYWdlLnNldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by50ZXN0X3VzZXIuVXNlcj19IG9wdF92YWx1ZVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaW5kZXhcbiAqIEByZXR1cm4geyFwcm90by50ZXN0X3VzZXIuVXNlcn1cbiAqL1xucHJvdG8udGVzdF91c2VyLlVzZXJzUmVwbHkucHJvdG90eXBlLmFkZFVzZXJzID0gZnVuY3Rpb24ob3B0X3ZhbHVlLCBvcHRfaW5kZXgpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5hZGRUb1JlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDEsIG9wdF92YWx1ZSwgcHJvdG8udGVzdF91c2VyLlVzZXIsIG9wdF9pbmRleCk7XG59O1xuXG5cbnByb3RvLnRlc3RfdXNlci5Vc2Vyc1JlcGx5LnByb3RvdHlwZS5jbGVhclVzZXJzTGlzdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldFVzZXJzTGlzdChbXSk7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by50ZXN0X3VzZXIpO1xuIiwiaW1wb3J0IHsgU2VydmVyLCBTZXJ2ZXJDcmVkZW50aWFscyB9IGZyb20gJ2dycGMnO1xuaW1wb3J0IHsgVXNlckRvbWFpblNlcnZpY2UgfSBmcm9tICcuL3Byb3Rvcy9zZXJ2aWNlX2dycGNfcGInXG5pbXBvcnQgeyBnZXRVc2VycyB9IGZyb20gJy4vc2VydmljZSdcblxuY29uc3QgZ3JwY1NlcnZlcjogU2VydmVyID0gbmV3IFNlcnZlcigpO1xuZ3JwY1NlcnZlci5hZGRQcm90b1NlcnZpY2UoVXNlckRvbWFpblNlcnZpY2UsIHtcbiAgZ2V0VXNlcnNcbn0pO1xuXG5ncnBjU2VydmVyLmJpbmQoJ2xvY2FsaG9zdDo1MDA1MScsIFNlcnZlckNyZWRlbnRpYWxzLmNyZWF0ZUluc2VjdXJlKCkpO1xuZ3JwY1NlcnZlci5zdGFydCgpOyIsImltcG9ydCB7IFNlcnZlclVuYXJ5Q2FsbCB9IGZyb20gJ2dycGMnO1xuaW1wb3J0IHtVc2Vyc1JlcXVlc3QsIFVzZXJzUmVwbHksIFVzZXJ9IGZyb20gJy4vcHJvdG9zL3NlcnZpY2VfcGInO1xuLy8gaW1wb3J0IHsgZmluZFVzZXJzIH0gZnJvbSAnLi9yZXBvc2l0b3J5J1xuaW1wb3J0IHsgc3RhdHVzIH0gZnJvbSAnZ3JwYyc7XG4vKipcbiAqIGdldFVzZXJzXG4gKiBAcGFyYW0ge2FueX0gY2FsbFxuICogQHBhcmFtIHtTZXJ2ZXJVbmFyeUNhbGw8VXNlcnNSZXF1ZXN0Pn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKGNhbGw6IFNlcnZlclVuYXJ5Q2FsbDxVc2Vyc1JlcXVlc3Q+LCBjYWxsYmFjazogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIGNvbnN0IHJlcXVlc3Q6IFVzZXJzUmVxdWVzdCA9IGNhbGwucmVxdWVzdDtcbiAgY29uc29sZS5sb2coY2FsbC5tZXRhZGF0YS5nZXRNYXAoKSk7XG5cbiAgY29uc3QgcmVwbHk6IFVzZXJzUmVwbHkgPSBuZXcgVXNlcnNSZXBseSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gcmVwbHkuc2V0VXNlcnNMaXN0KGF3YWl0IGZpbmRVc2VycyhyZXF1ZXN0LmdldFJlc3VsdGNvdW50KCkpKTtcbiAgICByZXBseS5zZXRVc2Vyc0xpc3QoW2R1bW15KCldKTtcbiAgICBjYWxsYmFjayhudWxsLCByZXBseSk7XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvZGU6IGUuY29kZSB8fCBzdGF0dXMuVU5LTk9XTlxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogVGVtcG9yYXJ5IHByb2Nlc3NpbmcgZm9yIGxvYWQgdGVzdCAuLi5cbiAqL1xuZnVuY3Rpb24gZHVtbXkoKTogVXNlciB7XG4gIGNvbnN0IHVzZXI6IFVzZXIgPSBuZXcgVXNlcigpO1xuICB1c2VyLnNldEZpcnN0bmFtZSgnZHVtbXknKTtcbiAgdXNlci5zZXRMYXN0bmFtZSgnZHVtbXknKTtcbiAgdXNlci5zZXRTZXgoJ21hbGUnKTtcbiAgdXNlci5zZXRFbWFpbCgnZHVtbXlAc2FtcGxlLmNvbScpO1xuXG4gIHJldHVybiB1c2VyO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1wcm90b2J1ZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncnBjXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=