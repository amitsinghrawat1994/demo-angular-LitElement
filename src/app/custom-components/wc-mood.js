import { LitElement, html, customElement, property } from "lit-element";

export class WebComponentsMood extends LitElement {
  static get properties() {
    return {
      mood: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.mood = "";
  }

  render() {
    return html`
      <div>Hello ${this.mood}</div>
    `;
  }
}

customElements.define("wc-mood", WebComponentsMood);
