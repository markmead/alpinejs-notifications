export function handleAutoClose(notificationComponent, autoClose) {
  setTimeout(function () {
    notificationComponent.setAttribute('data-notify-show', false)
  }, autoClose)
}
