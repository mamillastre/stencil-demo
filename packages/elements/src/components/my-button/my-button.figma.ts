import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/13EjEqM5aIyM7HCBxp4Put/Web-Components-%2F-Dev-mode?node-id=1-5', {
  props: {
    textContent: figma.textContent('Label'),
    disabled: figma.enum('Stats', { Disabled: 'disabled' }),
    startIcon: figma.boolean('Show icon', {
      // We can not add a slot to the icon for now: https://github.com/figma/code-connect/issues/251, https://github.com/figma/code-connect/issues/260
      true: figma.children('Icon'),
      false: undefined,
    }),
  },
  example: ({ textContent, disabled, startIcon }) => html`<my-button ${disabled}>${startIcon}${textContent}</my-button>`,
});
