import React, { useState, useEffect } from "react";
import { Tree } from "@react95/core";
import { request } from "@octokit/request";
import axios from "axios";
import { arrangeIntoTree } from "./utils";

const TreeStructure = () => {
  const [treeNodes, updateNodes] = useState({});
  const url = "https://api.github.com";
  let paths = [];
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/Tikam02/AcadVault/git/trees/master")
      .then((res) => {
        request(`GET /repos/Tikam02/AcadVault/git/trees/${res.data.sha}`, {
          baseUrl: url,
          accept: "application/vnd.github.v3+json",
          owner: "Tikam02",
          repo: "AcadVault",
          tree_sha: res.data.sha,
          recursive: "true",
        }).then((res) => {
          res.data.tree.forEach((dat) => {
            paths.push(dat.path.split("/"));
          });
          updateNodes(arrangeIntoTree(paths));
        });
      });
  }, []);
  console.log(treeNodes);
  return <></>;
};

export default TreeStructure;
