class MyMap {
  #data = [];
  get data() {
    return this.#data;
  }
  set(key, value) {
    if (this.#data.some((data) => data[0] === key)) {
      return;
    }
    if (key == undefined) {
      throw "Key must be required";
    }
    this.#data.push([key, value]);
  }
  get(key) {
    return this.#data.find((data) => data[0] === key);
  }
  clear() {
    this.#data = [];
  }
  delete(key) {
    let result = false;
    this.#data = this.#data.filter((data) => {
      if (data[0] === key) {
        result = true;
        return false;
      } else return true;
    });
    return result;
  }
  has(key) {
    if (this.#data.filter((data) => data[0] == key).length === 1) {
      return true;
    }
    return false;
  }
  forEach(callbackfn = function (value, key, array) {}) {
    const data = this.#data;
    for (let i = 0; i < this.#data.length; i++) {
      const el = this.#data[i];
      const key = el[0];
      const value = el[1];
      callbackfn(value, key, this.#data);
    }
  }
  entries() {
    return this.#data.map((data) => `${data[0]},${data[1]}`);
  }
  keys() {
    return this.#data.map((data) => data[0]);
  }
  values() {
    return this.#data.map((data) => data[2]);
  }
}
module.exports = { MyMap };
