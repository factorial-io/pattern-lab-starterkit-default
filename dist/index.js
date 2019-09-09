// Import main css file.
import "./index.css";

// Import local dependencies
import ExampleCard from "./_patterns/02-components/example-card/example-card";

const CLASS_FACTORY = {
  ".js-ExampleCard": ExampleCard
};

let app = null;

class App {
  constructor() {
    if (
      !("querySelector" in document) ||
      !("addEventListener" in window) ||
      !document.documentElement.classList
    ) {
      return;
    }

    this.bind(document);
  }

  bind(context) {
    let el;

    if (typeof context === "string") {
      el = document.querySelector(context);
    } else if (typeof context[0] !== "undefined") {
      // TODO: Check why desctructuring also causes lint error.
      // eslint-disable-next-line prefer-destructuring
      el = context[0];
    } else {
      el = context;
    }

    // Initializ all js plugins from the factory collection.
    Object.keys(CLASS_FACTORY).forEach(key => {
      const mangledKey = key.toLowerCase().replace(".js-", "");

      if (!this[mangledKey]) {
        this[mangledKey] = [];
      }

      Array.prototype.push.apply(
        this[mangledKey],
        [].slice
          .call(el.querySelectorAll(key))
          .map(element => new CLASS_FACTORY[key](element))
      );
    });
  }
}

if (typeof Drupal === "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    app = new App();
  });
} else {
  // TODO: Add 'Drupal' to globals in eslint config
  // eslint-disable-next-line no-undef
  Drupal.behaviors.rxevolveFrontend = {
    attach: context => {
      if (app) {
        app.bind(context);
      } else {
        app = new App();
      }
    }
  };
}
