/**
 * Created by azu on 2014/03/31.
 * LICENSE : MIT
 */
"use strict";
var assert = require("assert");
var 消費税率 = require("../index");
var 百円 = 100;
assert(百円 * 消費税率 === 105);