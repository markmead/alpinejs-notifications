import { handleAutoClose } from './handleAutoClose'
import { handleAutoRemove } from './handleAutoRemove'
import { handleClassNames } from './handleClassNames'

export function useFile(notificationText, notificationData) {
  async function fetchTemplate() {
    const fetchResponse = await fetch(notificationData.templateFile)
    const notificationTemplate = await fetchResponse.text()
    const notificationComponent = await new DOMParser().parseFromString(
      notificationTemplate.replace('{notificationText}', notificationText),
      'text/html'
    ).body.firstChild

    notificationWrapper.appendChild(notificationComponent)

    notificationComponent.setAttribute('data-notify-show', true)

    if (notificationData.autoClose) {
      handleAutoClose(notificationComponent, notificationData.autoClose)
    }

    if (notificationData.autoRemove) {
      handleAutoRemove(notificationComponent, notificationData.autoRemove)
    }

    if (notificationData.classNames) {
      handleClassNames(notificationData.classNames, notificationComponent)
    }
  }

  fetchTemplate()
}
