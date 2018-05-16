import { PolymerElement, html } from '@polymer/polymer/polymer-element'

export default class SzCard extends PolymerElement {
	static get template() {
		return html`
      <style>
        div {
          border: 1px solid red;
        }
      </style>
      <div>
        <header><slot name="title"></slot></header>
        <article><slot></slot></article>
        <footer><slot name="footer"></slot></footer>
      </div>
    `;
	}
  static get properties() {
		return {
			size: {
        type: String
      }
		}
	}
}

console.log('foo');
customElements.define('sz-card', SzCard);
