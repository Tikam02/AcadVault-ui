import React, { useState, useEffect } from "react";
import {Tree} from '@react95/core';
import { getTree} from '../Api';


function TreeStruture() {
    const [contentTree,setContentTree] = useState([]);
    useEffect(() => {
      const fetchTree = async () => {
          const contentTree = await getTree();
          setContentTree(contentTree);
      } 
      fetchTree();
    },[]);


  const label = function (str) {
      return str.substring(str.lastIndexOf('/')+1);
  }

  const files = contentTree.map(file => {
    file.label = label(file.path)
    return file
  });


  function treeify(files) {
    var path = require('path')
  
    files = files.reduce(function(tree, f) {
      var dir = path.dirname(f.path)
  
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

  const treeStructure = treeify(files);

  return(
    <Tree data={treeStructure}/>
  )
}

export default TreeStruture;