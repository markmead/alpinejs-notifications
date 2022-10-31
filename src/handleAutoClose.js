export function handleAutoClose(notificationComponent, autoCloseDuration) {
  setTimeout(function () {
    notificationComponent.setAttribute('data-notify-show', false)
  }, autoCloseDuration)
}
