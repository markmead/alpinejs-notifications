import { useFile } from './useFile'
import { useTemplate } from './useTemplate'

export default function (Alpine) {
  Alpine.magic('notify', () => (notificationText, notificationOptions) => {
    const notificationData = notificationOptions?.wrapperId
      ? notificationOptions
      : window.notificationOptions

    if (notificationData.templateFile) {
      return useFile(notificationText, notificationData)
    }

    if (notificationData.templateId) {
      return useTemplate(notificationText, notificationData)
    }
  })
}
