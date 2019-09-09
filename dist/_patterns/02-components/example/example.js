export default class Example {
  /**
   * Sets up instance variables and calls mounted hook.
   *
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {Sting} [options.favoriteSelector=".js-Example-favorite"] CSS selector for the element that will toggle favorite state
   * @param {Sting} [options.favoriteClassName=""is-favorite""] CSS class name for the favorite state
   */
  constructor(
    element,
    options = {
      favoriteSelector: ".js-Example-favorite",
      favoriteClassName: "is-favorite"
    }
  ) {
    this.element = element;
    this.options = options;
    this.mounted();
  }

  /**
   * Sets up event listeners
   */
  mounted() {
    this.element
      .querySelector(this.options.favoriteSelector)
      .addEventListener("click", this.handleFavoriteClick.bind(this));
  }

  /**
   * Toggles state class for favorite
   */
  handleFavoriteClick() {
    this.element.classList.toggle(this.options.favoriteClassName);
  }
}
