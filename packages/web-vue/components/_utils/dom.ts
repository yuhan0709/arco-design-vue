import { VNode } from 'vue';
import { isString } from './is';

export const NOOP = () => {
  return undefined;
};

export const isServerRendering = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();

export const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return <K extends keyof HTMLElementEventMap>(
    element: HTMLElement | Window,
    event: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options: boolean | AddEventListenerOptions = false
  ) => {
    element.addEventListener(
      event,
      handler as EventListenerOrEventListenerObject,
      options
    );
  };
})();

export const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return <K extends keyof HTMLElementEventMap>(
    element: HTMLElement | Window,
    type: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options: boolean | EventListenerOptions = false
  ) => {
    element.removeEventListener(
      type,
      handler as EventListenerOrEventListenerObject,
      options
    );
  };
})();

export const findDomNode = (vnode: VNode) => {
  let node = vnode.el;
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node as HTMLElement;
};

export const contains = (root: Node, ele: Node) => {
  let node: Node | null = ele;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

export const OVERLAY_TYPES = ['modal', 'message', 'notification'] as const;

export const getOverlay = (type: typeof OVERLAY_TYPES[number]) => {
  const popper = document.createElement('div');
  popper.setAttribute('class', `arco-overlay arco-overlay-${type}`);
  return popper;
};

export const querySelector = (selectors: string) => {
  if (isServerRendering) {
    return NOOP();
  }
  return document.querySelector(selectors) as HTMLElement | undefined | null;
};

export const getElement = (target: string | HTMLElement | undefined | null) => {
  if (isString(target)) return querySelector(target);
  return target || undefined;
};

/**
 * Get the relative distance between two DOMs
 * @param target
 * @param relative
 */
export const getRelativeRect = (target: HTMLElement, relative: HTMLElement) => {
  const targetRect = target.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();

  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height,
  };
};

export const getScrollBarWidth = (element: HTMLElement) => {
  return element.tagName === 'BODY'
    ? window.innerWidth -
        (document.documentElement.offsetWidth || document.body.offsetWidth)
    : element.offsetWidth - element.clientWidth;
};
