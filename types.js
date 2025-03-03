const types = {
    String: (value) => {
      if (typeof value !== "string") {
        throw new TypeError(`Expected a string, but got ${typeof value}`);
      }
      return value;
    },
  
    Number: (value) => {
      if (typeof value !== "number" || isNaN(value)) {
        throw new TypeError(`Expected a number, but got ${typeof value}`);
      }
      return value;
    },
  
    Boolean: (value) => {
      if (typeof value !== "boolean") {
        throw new TypeError(`Expected a boolean, but got ${typeof value}`);
      }
      return value;
    },
  
    Array: (value) => {
      if (!Array.isArray(value)) {
        throw new TypeError(`Expected an array, but got ${typeof value}`);
      }
      return value;
    },
  
    Object: (value) => {
      if (typeof value !== "object" || value === null || Array.isArray(value)) {
        throw new TypeError(`Expected an object, but got ${typeof value}`);
      }
      return value;
    },
  
    Function: (value) => {
      if (typeof value !== "function") {
        throw new TypeError(`Expected a function, but got ${typeof value}`);
      }
      return value;
    },
  
    Null: (value) => {
      if (value !== null) {
        throw new TypeError(`Expected null, but got ${typeof value}`);
      }
      return value;
    },
  
    Undefined: (value) => {
      if (value !== undefined) {
        throw new TypeError(`Expected undefined, but got ${typeof value}`);
      }
      return value;
    },
  
    Symbol: (value) => {
      if (typeof value !== "symbol") {
        throw new TypeError(`Expected a symbol, but got ${typeof value}`);
      }
      return value;
    },
  
    BigInt: (value) => {
      if (typeof value !== "bigint") {
        throw new TypeError(`Expected a bigint, but got ${typeof value}`);
      }
      return value;
    },
  
    Date: (value) => {
      if (!(value instanceof Date) || isNaN(value.getTime())) {
        throw new TypeError(`Expected a valid Date object`);
      }
      return value;
    },
  
    RegExp: (value) => {
      if (!(value instanceof RegExp)) {
        throw new TypeError(`Expected a RegExp object`);
      }
      return value;
    },
  
    JSON: (value) => {
      try {
        return JSON.parse(value);
      } catch {
        throw new TypeError(`Expected a valid JSON string`);
      }
    },
  
    NotEmptyString: (value) => {
      if (typeof value !== "string" || value.trim() === "") {
        throw new TypeError(`Expected a non-empty string`);
      }
      return value;
    },
  
    PositiveNumber: (value) => {
      if (typeof value !== "number" || value <= 0) {
        throw new TypeError(`Expected a positive number`);
      }
      return value;
    },
  
    NegativeNumber: (value) => {
      if (typeof value !== "number" || value >= 0) {
        throw new TypeError(`Expected a negative number`);
      }
      return value;
    },
  
    Integer: (value) => {
      if (!Number.isInteger(value)) {
        throw new TypeError(`Expected an integer`);
      }
      return value;
    },
  
    Float: (value) => {
      if (typeof value !== "number" || Number.isInteger(value)) {
        throw new TypeError(`Expected a float (non-integer number)`);
      }
      return value;
    },
  
    Email: (value) => {
      if (typeof value !== "string" || !/^\S+@\S+\.\S+$/.test(value)) {
        throw new TypeError(`Expected a valid email address`);
      }
      return value;
    },
  
    URL: (value) => {
      try {
        new URL(value);
        return value;
      } catch {
        throw new TypeError(`Expected a valid URL`);
      }
    },
  
    UUID: (value) => {
      if (typeof value !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)) {
        throw new TypeError(`Expected a valid UUID`);
      }
      return value;
    }
  };
  
  module.exports = types;
  