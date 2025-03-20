import { JsonDocsEvent, JsonDocsMethod, JsonDocsPart, JsonDocsProp, JsonDocsSlot, JsonDocsStyle, JsonDocsUsage, OutputTarget } from '@stencil/core/internal';
import fs from 'fs';

/**
 * Create the documentation files into the docusaurus website
 * Inspired by the Ionic docusaurus plugin: https://github.com/ionic-team/ionic-docs/blob/main/plugins/docusaurus-plugin-ionic-component-api/index.js
 */
export function apiDocGenerator(opts: { dir: string }): OutputTarget {
  return {
    type: 'docs-custom',
    generator: docsData => {
      const content = [];
      return Promise.all(
        docsData.components
          .map(comp => ({
            outDir: `${opts.dir}/${comp.tag}.md`,
            readMe: comp.readme,
            usage: renderUsages(comp),
            props: renderProperties(comp),
            events: renderEvents(comp),
            methods: renderMethods(comp),
            parts: renderParts(comp),
            customProps: renderCustomProps(comp),
            slots: renderSlots(comp),
          }))
          .map(
            cmpData =>
              new Promise<void>(resolve => {
                fs.writeFile(cmpData.outDir, renderContent(cmpData), () => {
                  resolve();
                });
              }),
          ),
      ).then();
    },
  };
}

/**
 * Formats line breaks in a multiline string to be displayed in a table.
 * @param {*} str The string to format
 * @returns The formatted string
 */
function formatMultiline(str: string): string {
  return str.split('\n\n').join('<br /><br />').split('\n').join(' ');
}

function formatType(type: string): string {
  return type.replace(/\|/g, '\uff5c');
}

function formatContentPart(title: string, content: string): string {
  return `## ${title}

${content}
`;
}

function renderContent({
  readMe,
  usage,
  props,
  events,
  methods,
  parts,
  customProps,
  slots,
}: {
  readMe: string;
  usage: string;
  props: string;
  events: string;
  methods: string;
  parts: string;
  customProps: string;
  slots: string;
}): string {
  return `${readMe}
${
  usage
    ? `
${formatContentPart('Usage', usage)}
`
    : ''
}
${formatContentPart('Properties', props)}

${formatContentPart('Event', events)}

${formatContentPart('Methods', methods)}

${formatContentPart('Shadow Parts', parts)}

${formatContentPart('CSS Custom Properties', customProps)}

${formatContentPart('Slots', slots)}`;
}

function renderUsages({ usage }: { usage: JsonDocsUsage }) {
  return Object.entries(usage)
    .map(([key, value]) => {
      return `### ${key.replace('.md', '')}

${value.trim()}`;
    })
    .join('\n\n');
}

function renderProperties({ props: properties }: { props: JsonDocsProp[] }): string {
  if (properties.length === 0) {
    return 'No properties available for this component.';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return properties
    .map(prop => {
      const isDeprecated = prop.deprecation !== undefined;

      const docs = isDeprecated ? `${prop.docs}\n_Deprecated_ ${prop.deprecation}` : prop.docs;

      return `### ${prop.name} ${isDeprecated ? '(deprecated)' : ''}

| | |
| --- | --- |
| **Description** | ${formatMultiline(docs)} |
| **Attribute** | \`${prop.attr}\` |
| **Type** | \`${formatType(prop.type)}\` |
| **Default** | \`${prop.default}\` |`;
    })
    .join('\n\n');
}

function renderEvents({ events }: { events: JsonDocsEvent[] }): string {
  if (events.length === 0) {
    return 'No events available for this component.';
  }

  return `| Name | Description | Bubbles |
| --- | --- | --- |
${events.map(event => `| \`${event.event}\` | ${formatMultiline(event.docs)} | \`${event.bubbles}\` |`).join('\n')}`;
}

function renderMethods({ methods }: { methods: JsonDocsMethod[] }): string {
  if (methods.length === 0) {
    return 'No public methods available for this component.';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return methods
    .map(
      method => `### ${method.name}

| | |
| --- | --- |
| **Description** | ${formatMultiline(method.docs)} |
| **Signature** | \`${method.signature.replace(/\|/g, '\uff5c')}\` |`,
    )
    .join('\n\n');
}

function renderParts({ parts }: { parts: JsonDocsPart[] }): string {
  if (parts.length === 0) {
    return 'No CSS shadow parts available for this component.';
  }

  return `| Name | Description |
| --- | --- |
${parts.map(prop => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}`;
}

function renderCustomProps({ styles: customProps }: { styles: JsonDocsStyle[] }): string {
  if (customProps.length === 0) {
    return 'No CSS custom properties available for this component.';
  }

  return `| Name | Description |
| --- | --- |
${customProps.map(prop => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}`;
}

function renderSlots({ slots }: { slots: JsonDocsSlot[] }): string {
  if (slots.length === 0) {
    return 'No slots available for this component.';
  }

  return `| Name | Description |
| --- | --- |
${slots.map(slot => `| \`${slot.name}\` | ${formatMultiline(slot.docs)} |`).join('\n')}`;
}
