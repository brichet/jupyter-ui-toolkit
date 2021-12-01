// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpProgressRing
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const ProgressRing = wrap(jpProgressRing());
// @ts-expect-error unknown property
ProgressRing.displayName = 'Jupyter.ProgressRing';
