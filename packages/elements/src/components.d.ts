/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    /**
     * Button component
     */
    interface MyButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
    }
    /**
     * The default demo component
     */
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyCounter {
        /**
          * Decrement the counter
          * @param step The step to add to the counter. Default 1
         */
        "decrement": (step?: number) => Promise<void>;
        /**
          * Increment the counter
          * @param step The step to add to the counter. Default 1
         */
        "increment": (step?: number) => Promise<void>;
        /**
          * Counter initial value
         */
        "initialValue": number;
    }
    interface MyIcon {
        /**
          * The alternative name of the icon
         */
        "alt": string;
        /**
          * The icon source
         */
        "icon"?: string;
        /**
          * The icon key
         */
        "name"?: 'circle-user' | 'house';
    }
    /**
     * A demo layout component
     * @customTag This is a custom tag for the documentation
     */
    interface MyLayout {
    }
}
export interface MyCounterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyCounterElement;
}
declare global {
    /**
     * Button component
     */
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    /**
     * The default demo component
     */
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyCounterElementEventMap {
        "valueChange": number;
    }
    interface HTMLMyCounterElement extends Components.MyCounter, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyCounterElementEventMap>(type: K, listener: (this: HTMLMyCounterElement, ev: MyCounterCustomEvent<HTMLMyCounterElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyCounterElementEventMap>(type: K, listener: (this: HTMLMyCounterElement, ev: MyCounterCustomEvent<HTMLMyCounterElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyCounterElement: {
        prototype: HTMLMyCounterElement;
        new (): HTMLMyCounterElement;
    };
    interface HTMLMyIconElement extends Components.MyIcon, HTMLStencilElement {
    }
    var HTMLMyIconElement: {
        prototype: HTMLMyIconElement;
        new (): HTMLMyIconElement;
    };
    /**
     * A demo layout component
     * @customTag This is a custom tag for the documentation
     */
    interface HTMLMyLayoutElement extends Components.MyLayout, HTMLStencilElement {
    }
    var HTMLMyLayoutElement: {
        prototype: HTMLMyLayoutElement;
        new (): HTMLMyLayoutElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-counter": HTMLMyCounterElement;
        "my-icon": HTMLMyIconElement;
        "my-layout": HTMLMyLayoutElement;
    }
}
declare namespace LocalJSX {
    /**
     * Button component
     */
    interface MyButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
    }
    /**
     * The default demo component
     */
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyCounter {
        /**
          * Counter initial value
         */
        "initialValue"?: number;
        /**
          * Emitted when the counter value has changed
         */
        "onValueChange"?: (event: MyCounterCustomEvent<number>) => void;
    }
    interface MyIcon {
        /**
          * The alternative name of the icon
         */
        "alt"?: string;
        /**
          * The icon source
         */
        "icon"?: string;
        /**
          * The icon key
         */
        "name"?: 'circle-user' | 'house';
    }
    /**
     * A demo layout component
     * @customTag This is a custom tag for the documentation
     */
    interface MyLayout {
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-counter": MyCounter;
        "my-icon": MyIcon;
        "my-layout": MyLayout;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * Button component
             */
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            /**
             * The default demo component
             */
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-counter": LocalJSX.MyCounter & JSXBase.HTMLAttributes<HTMLMyCounterElement>;
            "my-icon": LocalJSX.MyIcon & JSXBase.HTMLAttributes<HTMLMyIconElement>;
            /**
             * A demo layout component
             * @customTag This is a custom tag for the documentation
             */
            "my-layout": LocalJSX.MyLayout & JSXBase.HTMLAttributes<HTMLMyLayoutElement>;
        }
    }
}
