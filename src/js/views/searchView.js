import View from './View';
class SearchView extends View {
  #parentElement = document.querySelector('.search');

  getQuery() {
    return this.#parentElement.querySelector('.search__field').value;
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this.#clearInput();
    });
  }
}

export default new SearchView();
