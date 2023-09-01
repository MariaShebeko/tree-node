import React, { useEffect, useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import { TreeNodeData } from "../TreeNode";
import {
  fetchTree,
  addNode,
  deleteNode,
  updateNode,
} from "../../services/nodeApi";

type TreeData = TreeNodeData[];

const Tree: React.FC = () => {
  console.log("TREE RENDER");
  const [treeData, setTreeData] = useState<TreeData>([]);

  const fetchData = async () => {
    await fetchTree().then((data) => setTreeData([data]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTreeNode = async (parentId: number, name: string) => {
    await addNode(parentId, name);
    await fetchData();
  };

  const deleteTreeNode = async (id: number) => {
    await deleteNode(id);
    await fetchData();
  };

  const updateTreeNode = async (id: number, name: string) => {
    await updateNode(id, name);
    await fetchData();
  };

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          deleteNode={deleteTreeNode}
          addNode={addTreeNode}
          updateNode={updateTreeNode}
        />
      ))}
    </div>
  );
};

export default Tree;
