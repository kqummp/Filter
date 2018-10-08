"use strict";
/**
 ** Judge Module
 **
 ** @version 0.0.1
 **
 */

var filter = module.exports;

const expect = require('chai').expect;

/**
 ** Judge Number
 **
 ** @param value
 **
 */

filter.judgeNumber = function(value) {
	try {
		expect(value).to.be.a("number");
		return true;
	} catch (err) {
		return false;
	}
}

/**
 ** Judge Array
 **
 ** @param value
 **
 */

filter.judgeArray = function(value) {
	try {
		expect(value).to.be.instanceof(Array);
		return true;
	} catch (err) {
		return false;
	}
}

/**
 ** Judge Email
 **
 ** @param value
 **
 */

filter.judgeEmail = function(value) {
  try {
    expect(value).to.be.a("string");
  } catch (err) {
    return false;
  }

	let strExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if (strExp.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 ** Judge Username
 **
 ** @param value
 **
 */

filter.judgeUsername = function(value) {
  try {
    expect(value).to.be.a("string");
  } catch (err) {
    return false;
  }

	let strExp = /^\w{4,16}$/;
	if (strExp.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 ** Judge Strong Password
 **
 ** @param value
 **
 */

filter.judgeStrongPassword = function(value) {
	try {
		expect(value).to.be.a("string");
	} catch (err) {
		return false;
	}

	let strExp = /^.*(?=.{8,20})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#^&]).*$/;
	if (strExp.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 ** Judge Medium Password
 **
 ** @param value
 **
 */

filter.judgeMediumPassword = function(value) {
  try {
    expect(value).to.be.a("string");
  } catch (err) {
    return  false;
  }

	let strExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
	if (strExp.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 ** Judge Weak Password
 **
 ** @param value
 **
 */

filter.judgeWeakPassword = function(value) {
  try {
    expect(value).to.be.a("string");
  } catch (err) {
    return false;
  }

	let strExp = /^\w{6,20}$/;
	if (strExp.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 ** Filter
 **
 ** @param value
 **
 */

filter.filter = function (value) {
  try {
    expect(value).to.be.a("string");
  } catch (err) {
    return true;
  }

  for (let i in value) {
    if (value[i] == '$' || value[i] == '{' || value[i] == '}' || value[i] == ':' ||
    value[i] == '?' || value[i] == '%' || value[i] == '/' || value[i] == '#') {
      return false;
    }
  }

  return true;
}
