import { Component, EventEmitter, Host, Method, Prop, State, h, Event, Watch } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {
  /**
   * Counter initial value
   */
  @Prop() initialValue = 0;

  /**
   * Emitted when the counter value has changed
   */
  @Event() valueChange!: EventEmitter<number>;

  @State() private counter = this.initialValue;

  @Watch('counter')
  counterChanged() {
    this.valueChange.emit(this.counter);
  }

  /**
   * Increment the counter
   * @param step The step to add to the counter. Default 1
   */
  @Method()
  public async increment(step = 1) {
    this.counter += step;
  }

  /**
   * Decrement the counter
   * @param step The step to add to the counter. Default 1
   */
  @Method()
  public async decrement(step = 1) {
    this.counter -= step;
  }

  private readonly onIncrementClick = () => this.increment();
  private readonly onDecrementClick = () => this.decrement();

  render() {
    return (
      <Host>
        <div class="wrapper">
          <button onClick={this.onDecrementClick}>-</button>
          <div>{this.counter}</div>
          <button onClick={this.onIncrementClick}>+</button>
        </div>
      </Host>
    );
  }
}
