# Counter

Selector: `my-counter`

<!-- Auto Generated Below -->


## Usage

### Common usage

```html
<my-counter></my-counter>
```


### Counter manipulation

```html
<!-- Init the counter with a value of 10 -->
<my-counter initial-value="10"></my-counter>

<script>
  (async () => {
    // Wait the custom element to be defined (needed to call a component method)
    await customElements.whenDefined('my-counter');

    // Get the counter element
    const counterElement = document.querySelector('my-counter');

    // Call the method to increment by 10
    await counterElement.increment(10);

    // Watch the value change event
    counterElement.addEventListener('valueChange', ev => {
      console.log('Counter value change', ev.detail);
    });
  })();
</script>
```



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
