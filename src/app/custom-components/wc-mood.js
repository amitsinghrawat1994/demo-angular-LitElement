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
      <h1>Test works!</h1>
      <p>For real though!</p>
      <div>Hello ${this.mood}</div>
    `;
  }
}

customElements.define("wc-mood", WebComponentsMood);
