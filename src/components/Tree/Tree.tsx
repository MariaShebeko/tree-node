import React, { useEffect, useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import { TreeNodeData } from "../TreeNode";
import { fetchTree } from "../../services/nodeApi";

type TreeData = TreeNodeData[];

const Tree: React.FC = () => {
  console.log("TREE RENDER");
  const [treeData, setTreeData] = useState<TreeData>([]);

  useEffect(() => {
    fetchTree().then((data) => setTreeData([data]));
  }, []);

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Tree;
