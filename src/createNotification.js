export function createNotification(wrapperId, templateId, notificationText) {
  const notificationWrapper = document.getElementById(wrapperId)
  const notificationTemplate = document.getElementById(templateId)

  const notificationComponent = new DOMParser().parseFromString(
    notificationTemplate.innerHTML.replace(
      '{notificationText}',
      notificationText
    ),
    'text/html'
  ).body.firstChild

  notificationWrapper.appendChild(notificationComponent)

  notificationComponent.setAttribute('data-notify-show', true)

  return notificationComponent
}
