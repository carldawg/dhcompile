let defaultConfig = require('../webpack-default');


let components = [
    'JavaScript',
];

class Factory {

  constructor() {
    this.loaders = [];
    this.plugins = [];
    this.entries = [];
    this.components = [];
    this.installAll();
    this.config = defaultConfig;
  }

  installAll() {
    components
      .map(name => require(`./${name}`))
      .forEach(this.install.bind(this));
  }

  install(Component) {
    let component = new Component();
    this.registerComponent(component)
  }

  registerComponent(component) {
    let name = component.name();
    this.components.push(component);
    this[name] = (...args) => {
      component.register(...args);
    }
  }

  buildConfig() {
    this.applyEntries();
    this.applyRules();
    this.mergeConfig();
  }

  applyEntries() {
    this.components.forEach(this.applyComponentEntries.bind(this));
  }

  applyComponentEntries(component) {
    let entries = component.getEntries();
    entries.forEach(entry => {
      this.config.entry = Object.assign(this.config.entry, entry);
    });
  }

  applyRules() {
    this.components.forEach(component => {
      component.getRules().forEach(rule => {
        this.config.module.rules.push(rule);
      })
    });
  }

  mergeConfig() {
    if (Config.webpackConfig) {
      Config.webpackConfig = Object.assign(Config.webpackConfig, this.config);
    }
  }


}

module.exports = Factory;
