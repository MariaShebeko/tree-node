import React, { useState } from "react";
import s from "./TreeNode.module.css";

export type TreeNodeData = {
  id: number;
  name: string;
  children?: TreeNodeData[];
};

type TreeNodeProps = {
  data: TreeNodeData;
};

const TreeNode: React.FC<TreeNodeProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div>
        <span
          className={`${s.treeToggle}${isExpanded ? "expanded" : "collapsed"}`}
          onClick={handleToggle}
        >
          {isExpanded ? "▼" : "►"}
        </span>

        <span className={s.treeLabel}>{data.name}</span>

        <button>Add</button>
        <button>Delete</button>
        <button>Edit</button>
      </div>
      {isExpanded && (
        <div className={s.treeChildren}>
          {data.children &&
            data.children.map((child) => (
              <TreeNode key={child.id} data={child} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
