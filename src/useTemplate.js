import { handleAutoClose } from './handleAutoClose'
import { handleAutoRemove } from './handleAutoRemove'
import { handleClassNames } from './handleClassNames'
import { createNotification } from './createNotification'

export function useTemplate(notificationText, notificationData) {
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
}
