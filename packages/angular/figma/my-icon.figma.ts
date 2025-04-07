import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/13EjEqM5aIyM7HCBxp4Put/Web-Components-%2F-Dev-mode?node-id=6-19',
  {
    props: {
      iconName: { Type: 'ic-circle-user-regular' },
    },
    example: () => html`<my-icon [icon]="circleUser"></my-icon>`,
    imports: [
      "import { MyIcon } from '@stencil-demo/angular';",
      "import { circleUser } from '@stencil-demo/elements/icons';",
    ],
  }
);

figma.connect(
  'https://www.figma.com/design/13EjEqM5aIyM7HCBxp4Put/Web-Components-%2F-Dev-mode?node-id=6-19',
  {
    props: {
      iconName: { Type: 'ic-house-regular' },
    },
    example: () => html`<my-icon [icon]="house"></my-icon>`,
    imports: [
      "import { MyIcon } from '@stencil-demo/angular';",
      "import { house } from '@stencil-demo/elements/icons';",
    ],
  }
);
