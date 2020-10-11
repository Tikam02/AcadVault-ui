import React, { useState, useEffect, useMemo } from "react";
import {Tree} from '@react95/core';
import { getTree} from '../Api';
import path from 'path';


const getLabel = function (str) {
  return str.substring(str.lastIndexOf('/')+1);
}

const treeify = function (files) {
  files = files.reduce(function(tree, f) {
    const dir = path.dirname(f.path)

    if (tree[dir]) {
      tree[dir].children.push(f)
    } else {
      tree[dir] = { implied: true, children: [f] }
    }

    if (tree[f.path]) {
      f.children = tree[f.path].children
    } else {
      f.children = []
    }

    return ((tree[f.path] = f), tree)
  }, {})

  return Object.keys(files).reduce(function(tree, f) {
    if (files[f].implied) {
      return tree.concat(files[f].children)
    }

    return tree
  }, [])
}


function TreeStruture() {
    const [contentTree,setContentTree] = useState([]);
    useEffect(() => {
      const fetchTree = async () => {
          const contentTree = await getTree();
          setContentTree(contentTree);
      } 
      fetchTree();
    },[]);

  const files = useMemo(() => contentTree.map(file => ({ ...file, label: getLabel(file.path) })), [contentTree])

  const treeStructure = useMemo(() => treeify(files), [files]);

  return(
    <Tree data={treeStructure}/>
  )
}

export default TreeStruture;
