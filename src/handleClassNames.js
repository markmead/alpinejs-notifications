export function handleClassNames(classNames, notificationComponent) {
  const classNamesArray = classNames.split(' ')

  classNamesArray.forEach((className) =>
    notificationComponent.classList.add(className)
  )
}
