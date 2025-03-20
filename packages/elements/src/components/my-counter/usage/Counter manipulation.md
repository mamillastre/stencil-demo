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
