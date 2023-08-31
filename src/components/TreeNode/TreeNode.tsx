import React, { useState } from "react";
import { deleteNode } from "../../services/nodeApi";
import s from "./TreeNode.module.css";

import { Modal } from "../Modal";
import { AddNodeForm } from "../AddNodeForm";

export type TreeNodeData = {
  id: number;
  name: string;
  children?: TreeNodeData[];
};

type TreeNodeProps = {
  node: TreeNodeData;
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const { id, name, children } = node;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  console.log("IS_EDITING", isEditing);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const onDeleteBtnClick = (id: number) => {
    deleteNode(id);
  };

  const onUpdateBtnClick = (id: number, name: string) => {
    setIsEditing(true);
    setIsModalOpen(true);
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

        <span className={s.treeLabel}>{name}</span>

        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add
        </button>

        {name !== "maria" && (
          <>
            <button
              onClick={() => {
                onDeleteBtnClick(id);
              }}
            >
              Delete
            </button>

            <button
              onClick={() => {
                onUpdateBtnClick(id, name);
              }}
            >
              Edit
            </button>
          </>
        )}
      </div>
      {isExpanded && (
        <div className={s.treeChildren}>
          {children &&
            children.map((child) => <TreeNode key={child.id} node={child} />)}
        </div>
      )}

      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <AddNodeForm
            id={id}
            onClose={() => setIsModalOpen(false)}
            isEditing={isEditing}
            nodeName={name}
          />
        </Modal>
      )}
    </div>
  );
};

export default TreeNode;
