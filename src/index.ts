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
      const nodeData = this.parseElement(node)
      nodePath.unshift(nodeData)
      node = node.parentElement
    }

    return nodePath
  }

  private parseElement(node: HTMLElement): IParsedNode {
    const {id, tagName, classList} = node

    return {
      id,
      tag: tagName.toLowerCase(),
      classList: [...classList],
      nthChild: this.nthChild(node),
    }
  }

  private nthChild(node: HTMLElement) {
    const parentNode = node.parentNode

    if (!parentNode) {
      return -1
    }

    let num = 1
    const children = parentNode.childNodes

    for (const child of children) {
      if (child === node) {
        return num
      }

      if (child.nodeType === 1 && child.nodeName === node.nodeName) {
        num++
      }
    }

    return -1
  }
}
