export function handleAutoRemove(notificationComponent, autoRemoveDuration) {
  setTimeout(function () {
    notificationComponent.remove()
  }, autoRemoveDuration)
}
