// List Component
export function getTranslateOffset(element: Element) {
  const style = window.getComputedStyle(element)
  return (
    Math.max(
      parseInt(style['margin-top' as any], 10),
      parseInt(style['margin-bottom' as any], 10)
    ) + element.getBoundingClientRect().height
  )
}

export function transformItem(
  element: Element,
  offsetY: number | null = 0,
  offsetX: number | null = 0
) {
  if (!element) return
  if (offsetY === null || offsetX === null) {
    ; (element as HTMLElement).style.removeProperty('transform')
    return
  }
  ; (
    element as HTMLElement
  ).style.transform = `translate(${offsetX}px, ${offsetY}px)`
}

export function setItemTransition(
  element: Element,
  duration: number,
  timing?: string
) {
  if (element) {
    ; (element as HTMLElement).style[
      'transition' as any
    ] = `transform ${duration}ms${timing ? ` ${timing}` : ''}`
  }
}

export function binarySearch(array: number[], targetValue: number) {
  let min = 0
  let max = array.length - 1
  let guess: number
  while (min <= max) {
    guess = Math.floor((max + min) / 2)
    if (
      !array[guess + 1] ||
      (array[guess] <= targetValue && array[guess + 1] >= targetValue)
    ) {
      return guess
    } else if (array[guess] < targetValue && array[guess + 1] < targetValue) {
      min = guess + 1
    } else {
      max = guess - 1
    }
  }
  return -1
}

export const schd = (fn: Function) => {
  let lastArgs: any[] = []
  let frameId: number | null = null
  const wrapperFn = (...args: any[]) => {
    lastArgs = args
    if (frameId) {
      return
    }
    frameId = requestAnimationFrame(() => {
      frameId = null
      fn(...lastArgs)
    })
  }
  return wrapperFn
}

export function isTouchEvent(event: TouchEvent & MouseEvent) {
  return (
    (event.touches && event.touches.length) ||
    (event.changedTouches && event.changedTouches.length)
  )
}

export function checkIfInteractive(target: Element, rootElement: Element) {
  const DISABLED_ELEMENTS = [
    'input',
    'textarea',
    'select',
    'option',
    'optgroup',
    'video',
    'audio',
    'button',
    'a'
  ]
  const DISABLED_ROLES = ['button', 'link', 'checkbox', 'tab']
  while (target !== rootElement) {
    if (target.getAttribute('data-movable-handle')) {
      return false
    }
    if (DISABLED_ELEMENTS.includes(target.tagName.toLowerCase())) {
      return true
    }
    const role = target.getAttribute('role')
    if (role && DISABLED_ROLES.includes(role.toLowerCase())) {
      return true
    }
    if (
      target.tagName.toLowerCase() === 'label' &&
      target.hasAttribute('for')
    ) {
      return true
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (target.tagName) target = target.parentElement!
  }
  return false
}

export function arrayMove<T>(array: T[], from: number, to: number) {
  array = array.slice()
  array.splice((to < 0)
    ? array.length + to
    : to, 0, array.splice(from, 1)[0]
  )
  return array
}
