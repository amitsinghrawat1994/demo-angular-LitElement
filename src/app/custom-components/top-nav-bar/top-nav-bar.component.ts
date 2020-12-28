/*####################################################
# Copyright - Becton, Dickinson and Company -  2020.
####################################################*/

import {
  html,
  customElement,
  LitElement,
  property,
  TemplateResult,
  CSSResult,
} from 'lit-element';
import { ITopNavBar, ITopNavbarStep } from 'src/app/model/TopBar.model';
import { topNavBarStyles } from './top-nav-bar.style';

@customElement('bd-top-nav-bar')
export class BDTopNavBar extends LitElement implements ITopNavBar {
  /* Interface ITopNavBar - model, which determines what properties the component should have. */
  @property({ type: Array, attribute: 'steps' }) steps: ITopNavbarStep[] = [];
  @property({ type: Number, attribute: 'select-index' }) selectIndex = 0;
  @property({ type: Boolean, attribute: 'disabled' }) disabled = false;

  static get styles(): CSSResult[] {
    return [topNavBarStyles];
  }

  /*
      Returns html element 'li', that is included in 'ul' - list. Functions were divided,
      for separation of html contents.
   */
  getStep(step: ITopNavbarStep, index: number): TemplateResult {
    const isActive =
      this.selectIndex === index ||
      (index === this.steps.length - 1 &&
        this.selectIndex > this.steps.length - 1);
    const isVisited = this.selectIndex > index;

    return html`
      <li
        id="${`step-item-${index}`}"
        class="step-item ${isActive
          ? 'active'
          : isVisited
          ? 'visited'
          : 'inactive'}"
        @click="${(event: Event) => this._select(event, index, step)}"
      >
        <a
          id="${step?.id ? step.id : `step-link-${index}`}"
          href="${step?.href ? step.href : '#'}"
          tabindex="${step?.tabindex ? step?.tabindex : '-1'}"
        >
          <span id="${`step-value-${index}`}" class="step">
            ${step.value}
          </span>
          <span class="step-dot">
            <div class="triangle-right"></div>
          </span>
        </a>
      </li>
    `;
  }

  getStepList(): TemplateResult {
    return html`
      <ul id="step-list" class="steps" ?disabled=${this.disabled}>
        ${this.steps.map((step, index) => this.getStep(step, index))}
      </ul>
    `;
  }

  getTemplate(): TemplateResult {
    return html`
      <div id="top-nav-bar" class="top-nav-bar">
        <div class="top-nav-bar-wrap">
          <div class="top-nav-bar-steps">${this.getStepList()}</div>
          <div class="top-nav-bar-slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  render(): TemplateResult {
    return this.getTemplate();
  }

  _select(event: Event, index: number, step: ITopNavbarStep): void {
    event.preventDefault();
    if (index < 0) {
      index = 0;
    } else if (index >= this.steps.length) {
      index = this.steps.length - 1;
    }

    const cevt = new CustomEvent('bd-top-nav-bar-select', {
      detail: {
        reason: `click index ${index}`,
        selectIndex: index,
        step,
      },
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(cevt);

    // if (step?.href) {
    //   window.location.href = step.href;
    // }
  }
}
