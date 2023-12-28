// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr } from '@microsoft/fast-element';
import {
  TextArea as FoundationTextArea,
  textAreaTemplate as template
} from '@microsoft/fast-foundation';
import { textAreaStyles as styles } from './text-area.styles.js';
import { ErrorMessageMixin } from '../validation.js';

/**
 * Text area appearances
 * @public
 */
export type TextAreaAppearance = 'filled' | 'outline';

/**
 * @internal
 */
export class TextArea extends ErrorMessageMixin(FoundationTextArea) {
  /**
   * The appearance of the element.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: TextAreaAppearance = 'outline';
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#TextArea} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#textAreaTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-text-area>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpTextArea = TextArea.compose({
  baseName: 'text-area',
  baseClass: FoundationTextArea,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { styles as textAreaStyles };
