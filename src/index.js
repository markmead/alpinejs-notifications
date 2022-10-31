import { createNotification } from './createNotification'
import { handleAutoClose } from './handleAutoClose'
import { handleAutoRemove } from './handleAutoRemove'
import { handleClassNames } from './handleClassNames'

export default function (Alpine) {
  Alpine.magic('notify', () => (notificationText, notificationOptions) => {
    const notificationData = notificationOptions?.wrapperId
      ? notificationOptions
      : window.notificationOptions

    const notificationComponent = createNotification(
      notificationData.wrapperId,
      notificationData.templateId,
      notificationText
    )

    if (notificationData.autoClose) {
      handleAutoClose(notificationComponent, notificationData.autoClose)
    }

    if (notificationData.autoRemove) {
      handleAutoRemove(notificationComponent, notificationData.autoRemove)
    }

    if (notificationData.classNames) {
      handleClassNames(notificationData.classNames, notificationComponent)
    }
  })
}
