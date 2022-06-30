export default {
  parseOne(obj) {
    let parsed;
    try {
      parsed = JSON.parse(obj);
    } catch (e) {
      parsed = obj;
    }
    return parsed;
  },
  parseObject(obj) {
    let parsed = {};
    for (let key in obj) {
      parsed[key] = this.parseOne(obj[key].replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, "\"$2\": "));
    }
    return parsed;
  },
};
