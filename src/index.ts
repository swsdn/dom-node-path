export interface IParsedNode {
  tag: string
  id: string
  classList: string[]
  nthChild: number
}

export class DOMNodePath {
  static get(node: HTMLElement) {
    return (new DOMNodePath()).getNodePath(node)
  }

  getNodePath(target: HTMLElement) {
    let node: HTMLElement | null = target
    const nodePath = []

    while (node !== document.body) {
      if (!node) {
        break
      }
      const nodeData = this._parseElement(node)
      nodePath.unshift(nodeData)
      node = node.parentElement
    }

    return nodePath
  }

  _parseElement(node: HTMLElement): IParsedNode {
    return {
      tag: node.tagName.toLowerCase(),
      id: node.id,
      classList: [...node.classList],
      nthChild: this._nthChild(node),
    }
  }

  _nthChild(node: HTMLElement) {
    let num = 1
    const parentNode = node.parentNode

    if (!parentNode) {
      return -1
    }

    const children = parentNode.childNodes

    for (const child of children) {
      if (child === node) {
        return num
      }

      if (child.nodeType === 1) {
        num++
      }
    }

    return -1
  }
}
