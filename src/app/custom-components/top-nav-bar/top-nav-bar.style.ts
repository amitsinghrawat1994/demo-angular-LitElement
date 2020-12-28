/*####################################################
# Copyright - Becton, Dickinson and Company -  2020.
####################################################*/

import { css } from 'lit-element';

export const topNavBarStyles = css`
  :host {
    display: flex;
    width: auto;
    --bgc-color: #ffffff;
    --inactive-color: #cccccc;
    --visited-color: #004593;
    * {
      font-family: var(--theme-font-family, sans-serif);
      box-sizing: border-box;
    }
  }

  .top-nav-bar,
  .top-nav-bar-wrap,
  .top-nav-bar-steps,
  .top-nav-bar-slot,
  .steps {
    display: flex;
    width: auto;
  }

  .top-nav-bar-wrap,
  .top-nav-bar-slot {
    flex-wrap: wrap;
  }

  .top-nav-bar-steps {
    width: auto;
  }

  .steps {
    margin: 0;
    padding: 0;
    background: var(--bgc-color);
    list-style-type: none;
    min-width: 240px;
    width: auto;
    height: 30px;
  }

  .step-item {
    box-sizing: border-box;
    border: solid 1px var(--inactive-color);
    border-left: none;
    border-right: none;
    min-width: 240px;
    padding: 7px 0 4px 0;
    text-align: center;
    cursor: pointer;
    position: relative;
    height: 30px;
    user-select: none;
    margin-left: -20px;
    background-color: #fff;
  }
  .step {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 195px;
    margin-left: -10px;
  }

  .step-item:first-child {
    margin-left: 0;
    border-left: solid 1px var(--inactive-color);
  }

  .step-item:last-child {
    border-right: solid 1px var(--inactive-color);
  }

  .step-item:last-child.visited {
    border-right: solid 1px var(--visited-color);
  }

  .step-item:last-child .step-dot {
    display: none;
  }

  .step-item > a {
    font-size: 0.75rem;
    font-weight: 500;
    outline: 0;
    color: var(--inactive-color);
    text-decoration: none;
  }

  .step-dot {
    position: absolute;
    top: -1px;
    right: 0;
    width: 20px;
    height: 30px;
  }

  .step-dot::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 1px;
    width: 1px;
    background-color: var(--inactive-color);
    z-index: 2;
  }

  .step-dot::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.8px;
    width: 1px;
    background-color: var(--inactive-color);
    z-index: 2;
  }

  .triangle-right {
    position: relative;
  }

  .triangle-right::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1px;
    display: inline-block;
    border-style: solid;
    border-width: 15px 0 15px 16px;
    border-color: transparent transparent transparent var(--inactive-color);
    z-index: 1;
  }

  .triangle-right::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    border-style: solid;
    border-width: 15px 0 15px 16px;
    border-color: transparent transparent transparent #fff;
    z-index: 1;
  }

  svg {
    width: 30px;
    margin-left: -4px;
  }

  .step-item.visited {
    border: solid 1px var(--visited-color);
    border-left: none;
    border-right: none;
  }

  .step-item:first-child.visited {
    border-left: solid 1px var(--visited-color);
  }

  .step-item.visited .step {
    color: var(--visited-color);
  }

  .step-item.visited .triangle-right::before {
    border-color: transparent transparent transparent var(--visited-color);
  }

  .step-item.visited .step-dot::before {
    background-color: var(--visited-color);
  }

  .step-item.visited .step-dot::after {
    background-color: var(--visited-color);
  }

  .step-item.active .step {
    color: #fff;
  }

  .step-item.active {
    background-color: var(--visited-color);
    border: solid 1px var(--visited-color);
  }

  .step-item.active .triangle-right::before {
    border-color: transparent transparent transparent var(--visited-color);
  }

  .step-item.active .triangle-right::after {
    border-color: transparent transparent transparent var(--visited-color);
  }

  .step-item.active .step-dot::before {
    background-color: var(--visited-color);
  }

  .step-item.active .step-dot::after {
    background-color: var(--visited-color);
  }
`;
