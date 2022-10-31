export function handleAutoRemove(notificationComponent, autoRemove) {
  if (typeof autoRemove === 'boolean') {
    notificationComponent.addEventListener('animationend', function () {
      if (
        JSON.parse(notificationComponent.getAttribute('data-notify-show')) ===
        false
      ) {
        notificationComponent.remove()
      }
    })

    return
  }

  setTimeout(function () {
    notificationComponent.remove()
  }, autoRemove)
}
