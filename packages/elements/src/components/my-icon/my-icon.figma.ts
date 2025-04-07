import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/13EjEqM5aIyM7HCBxp4Put/Web-Components-%2F-Dev-mode?node-id=6-19', {
  props: {
    iconName: figma.enum('Type', {
      'ic-circle-user-regular': 'circle-user',
      'ic-house-regular': 'house',
    }),
  },
  example: ({ iconName }) => html`<my-icon name=${iconName}></my-icon>`,
});
