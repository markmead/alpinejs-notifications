# Alpine JS Notify

Simple notifications in your projects using Alpine JS 🙋‍♀️

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-notify@latest/dist/notify.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-notify

npm install -D alpinejs-notify
```

```js
import Alpine from 'alpinejs'
import notify from 'alpinejs-notify'

Alpine.plugin(notify)

Alpine.start()
```

## Example

Let's create a simple notification that appears in the top right of the page and
disappears after 5s.

```html
<div id="notificationWrapper" class="fixed top-4 w-64 right-4 space-y-2"></div>

<button
  x-on:click="$notify('Hello there, I am a notification!', {
    wrapperId: 'notificationWrapper',
    templateId: 'notificationAlert',
    autoClose: 5000,
    autoRemove: 6000
  })"
>
  Notify
</button>

<template id="notificationAlert">
  <div
    role="alert"
    class="text-white bg-red-500 p-4 data-[notify-show=false]:opacity-50"
  >
    {notificationText}
  </div>
</template>
```

### Options

`notificationText`

This is the string that will be rendered in the notification.

_It is not part of the {}_

`wrapperId`

This is the wrapping element of the notification.

`templateId`

This is the notification component HTML that will be added to the wrapper.

`autoClose`

This will set the attribute `data-notify-show` to `false` once the duration (in
milliseconds) is up.

`autoRemove`

This will remove the notification element from the DOM once the duration (in
milliseconds) is up.

`classNames`

A string of classes to add to the notification.

### Default Options

You don't need to pass the same options for multiple notifications. If all your
notifications are using the options from the example you can do this instead.

```html
<script>
  window.notificationOptions = {
    wrapperId: 'notificationWrapper',
    templateId: 'notificationAlert',
    autoClose: 5000,
    autoRemove: true,
  }
</script>
```

Then all notifications that don't specify their own `notificationOptions` will
use this.

## Animating Notifications

In this example I'll be using Tailwind CSS, but you can easily replicate this
with CSS.

Let's say you want the notification to slide in from the right and then slide
out, you could do the following.

```html
<template id="notificationAlert">
  <div
    role="alert"
    class="text-white bg-red-500 p-4 data-[notify-show=true]:animate-slide-in-right data-[notify-show=false]:animate-slide-out-right"
  >
    {notificationText}
  </div>
</template>
```

The `animate-slide-` classes have been added to the Tailwind CSS config.

```js
module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-in-right': 'slide-in-right 0.15s ease-in forwards',
        'slide-out-right': 'slide-out-right 0.15s ease-in forwards',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
}
```

## Dismiss Notification

If you want to have dismissible notifications you can add Alpine JS logic to
your notification template.

```html
<template id="notificationAlert">
  <div
    x-data
    role="alert"
    class="text-white bg-red-500 p-4 data-[notify-show=true]:animate-slide-in-right data-[notify-show=false]:animate-slide-out-right"
  >
    {notificationText}
    <button x-on:click="$root.setAttribute('data-notify-show', false)">
      Close
    </button>
  </div>
</template>
```

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-notify)
![](https://img.shields.io/npm/v/alpinejs-notify)
![](https://img.shields.io/npm/dt/alpinejs-notify)
![](https://img.shields.io/github/license/markmead/alpinejs-notify)
