import { css, html, LitElement } from "lit-element";

export class Menu extends LitElement {
  static get properties() {
    return {
      options: { type: Array },
    };
  }

  static get styles() {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }

      li {
        float: left;
      }

      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      li a:hover {
        background-color: #111;
      }
    `;
  }

  constructor() {
    super();
    this.options = [];
  }

  render() {
    return html`
      <ul>
        ${this.options.map(
          (option) => html`<li><a href="#${option}">${option}</a></li> `
        )}
      </ul>
    `;
  }
}

window.customElements.define("custom-menu", Menu);
