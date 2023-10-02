# Alpine JS Notifications

Simple notifications in your projects using Alpine JS 🙋‍♀️

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-notify@latest/dist/notifications.min.js"
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
import notifications from 'alpinejs-notify'

Alpine.plugin(notifications)

Alpine.start()
```

## Example

Let's create a simple notification that appears in the top right of the page and
disappears after 5s.

```html
<div x-data>
  <div
    id="notificationWrapper"
    class="fixed top-4 w-64 right-4 space-y-2"
  ></div>

  <button
    x-on:click="$notify('Hello there, I am a notification!', {
    wrapperId: 'notificationWrapper',
    templateId: 'notificationAlert',
    autoClose: 3000,
    autoRemove: 4000
  })"
  >
    Notify
  </button>

  <template id="notificationAlert">
    <div role="alert" class="text-white bg-red-500 p-4">
      {notificationText}
    </div>
  </template>
</div>
```

### Options

`notificationText`

This is the string that will be rendered in the notification.

_It is not part of the {}_

`wrapperId`

This is the wrapping element of the notification.

`templateId`

This is the notification component HTML that will be added to the wrapper.

`templateFile`

This is an alternative choice to `templateId` which will get the notification
component HTML from the file specified.

`autoClose`

This will set the attribute `data-notify-show` to `false` once the duration (in
milliseconds) is up.

`autoRemove`

Here you have two options.

**Duration**

If you use a duration (in milliseconds) then it will remove the notification
from the DOM once duration is up.

This works for most situations, however it can get a little tricky calculating
when the removal should happen when working with animations. This is what the
boolean approach solves.

**Boolean**

Using a boolean will trigger the removal of the notification once the animation
has ended. It will play the animation in full and then remove once complete.

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
    autoClose: 3000,
    autoRemove: 4000,
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
    class="text-white bg-red-500 p-4 data-[notify-show=true]:animate-slide-in data-[notify-show=false]:animate-slide-out"
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
        'slide-in': 'slide-in 0.15s ease-in forwards',
        'slide-out': 'slide-out 0.15s ease-in forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
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
    class="text-white bg-red-500 p-4 data-[notify-show=true]:animate-slide-in data-[notify-show=false]:animate-slide-out"
  >
    {notificationText}
    <button x-on:click="$root.setAttribute('data-notify-show', false)">
      Close
    </button>
  </div>
</template>
```

## Using a File

If preferred, you can create HTML files for your notification templates.

```html
<div id="notificationWrapper" class="fixed top-4 w-64 right-4 space-y-2"></div>

<button
  x-on:click="$notify('Hello there, I am a notification!', {
    wrapperId: 'notificationWrapper',
    templateFile: 'notification.html',
    autoClose: 3000,
    autoRemove: 4000
  })"
>
  Notify
</button>
```

This is now looking for a file called `notification.html` which might look
something like this.

```html
<div role="alert" class="text-white bg-red-500 p-4"> {notificationText} </div>
```

It works the exact same as `templateId` but it means you don't have `<template>`
tags in your HTML for your notification templates.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-notify)
![](https://img.shields.io/npm/v/alpinejs-notify)
![](https://img.shields.io/npm/dt/alpinejs-notify)
![](https://img.shields.io/github/license/markmead/alpinejs-notifications)
