import React, { useState } from "react";
import { Modal } from "../Modal";
import { AddNodeForm } from "../AddNodeForm";
import s from "./TreeNode.module.css";

export type TreeNodeData = {
  id: number;
  name: string;
  children?: TreeNodeData[];
};

type TreeNodeProps = {
  node: TreeNodeData;
  deleteNode: (id: number) => void;
  addNode: (parentId: number, name: string) => void;
  updateNode: (id: number, name: string) => void;
};

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  deleteNode,
  addNode,
  updateNode,
}) => {
  const { id, name, children } = node;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
            children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                deleteNode={deleteNode}
                addNode={addNode}
                updateNode={updateNode}
              />
            ))}
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
            addNode={addNode}
            updateNode={updateNode}
          />
        </Modal>
      )}
    </div>
  );
};

export default TreeNode;
