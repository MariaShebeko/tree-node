import React, { useState } from "react";
import { addNode, updateNode } from "../../services/nodeApi";

interface IAddNodeForm {
  id: number;
  onClose: () => void;
  isEditing: boolean;
  nodeName: string;
}

export const AddNodeForm: React.FC<IAddNodeForm> = ({
  id,
  onClose,
  isEditing,
  nodeName,
}) => {
  console.log("ID IN FORM", id);

  const [name, setName] = useState<string>(isEditing === true ? nodeName : "");

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEditing) {
      addNode(id, name);
    }
    updateNode(id, name);
    onClose();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onFormSubmit} className="form">
        <div className="input-wrapper">
          <label htmlFor="name" className="label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>

        <button type="submit" className="button">
          {isEditing ? "Update " : "Add "}
          node
        </button>

        <div className="button-wrapper">
          <button type="button" className="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
