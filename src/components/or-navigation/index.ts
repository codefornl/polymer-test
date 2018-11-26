import { PolymerElement } from '@polymer/polymer/polymer-element';

import * as view from './template.html';

export class Navigation extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        return view;
    }
}