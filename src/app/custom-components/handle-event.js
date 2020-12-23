import { LitElement, html, css } from "lit-element";

class HandleEvents extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  static get styles() {
    return css`
      .m-5 {
        margin: 5;
      }
    `;
  }

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <div class="m-5">
        Current count: [${this.count}]
        <button @click=${() => (this.count += 1)}>+</button>
        <button @click=${this._onDecrement}>-</button>
      </div>
    `;
  }

  _onDecrement() {
    this.count -= 1;
  }
}

customElements.define("handle-events", HandleEvents);
