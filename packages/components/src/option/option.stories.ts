// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { createOption, OptionArgs } from './fixtures/createOption';

export default {
  title: 'Library/Option',
  argTypes: {
    label: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isSelected: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template = ({ ...args }: OptionArgs) => {
  return createOption({ ...args });
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Option Label',
  isDisabled: false,
  isSelected: false
};
Default.parameters = {
  docs: {
    source: {
      code: `<jp-option>Option Label</jp-option>`
    }
  }
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};
WithDisabled.parameters = {
  docs: {
    source: {
      code: `<jp-option disabled>Option Label</jp-option>`
    }
  }
};

export const WithSelected: any = Template.bind({});
WithSelected.args = {
  ...Default.args,
  isSelected: true
};
WithSelected.parameters = {
  docs: {
    source: {
      code: `<jp-option selected>Option Label</jp-option>`
    }
  }
};
