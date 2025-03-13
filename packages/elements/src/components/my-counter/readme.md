# Counter

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description           | Type     | Default |
| -------------- | --------------- | --------------------- | -------- | ------- |
| `initialValue` | `initial-value` | Counter initial value | `number` | `0`     |


## Events

| Event         | Description                                | Type                  |
| ------------- | ------------------------------------------ | --------------------- |
| `valueChange` | Emitted when the counter value has changed | `CustomEvent<number>` |


## Methods

### `decrement(step?: number) => Promise<void>`

Decrement the counter

#### Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| `step` | `number` | The step to add to the counter. Default 1 |

#### Returns

Type: `Promise<void>`



### `increment(step?: number) => Promise<void>`

Increment the counter

#### Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| `step` | `number` | The step to add to the counter. Default 1 |

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                  | Description                 |
| --------------------- | --------------------------- |
| `--button-background` | The button background color |
| `--button-color`      | The button text color       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
