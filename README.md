# dom node path

Simple lib which extracts a unique path for a given `HTMLElement` in `DOM` tree.

#### Installation

    yarn add dom-node-path


#### Usage

    import {DOMNodePath} from "dom-node-path"

    const node = document.getElementById("my-node")
    const nodePath = DOMNodePath.get(node)

Example return value:

    [
      {"tag":"div","id":"root","classList":[],"nthChild":1},
      {"tag":"div","id":"","classList":["app-wrapper", "active"],"nthChild":1},
      {"tag":"div","id":"","classList":[],"nthChild":1},
      {"tag":"div","id":"","classList":["main-container"],"nthChild":2},
      {"tag":"div","id":"","classList":["main-content"],"nthChild":2},
      {"tag":"h1","id":"","classList":["header"],"nthChild":1},
     ]

* the first element is descendant of `document.body`
* the last element is the queried `node`
