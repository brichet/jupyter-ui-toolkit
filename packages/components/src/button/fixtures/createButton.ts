// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Button, ButtonAppearance } from '../index';
import {
  createCodiconIcon,
  focusObserver
} from '../../utilities/storybook/index';

export type ButtonArgs = {
  label: string;
  appearance: ButtonAppearance;
  isDisabled: boolean;
  isAutoFocused: boolean;
  startIcon: boolean;
  iconOnly: boolean;
  ariaLabel: string;
  onClick: any;
};

export function createButton({
  label,
  appearance,
  isDisabled,
  isAutoFocused,
  startIcon,
  iconOnly,
  ariaLabel,
  onClick
}: ButtonArgs) {
  const button = new Button();

  if (label && !iconOnly) {
    button.textContent = label;
  }
  if (appearance) {
    button.setAttribute('appearance', appearance.toLowerCase());
  }
  if (isDisabled) {
    button.setAttribute('disabled', '');
  }
  if (isAutoFocused) {
    button.setAttribute('autofocus', '');
    // Focus observer will force focus if button focus is lost after page load
    focusObserver(button);
  }
  if (startIcon) {
    const start = createCodiconIcon({
      iconName: 'add',
      slotName: 'start'
    });
    button.appendChild(start);
  }
  if (iconOnly) {
    const icon = createCodiconIcon({ iconName: 'check' });
    button.appendChild(icon);
    button.setAttribute('aria-label', ariaLabel);
  }
  button.addEventListener('click', onClick);

  return button;
}