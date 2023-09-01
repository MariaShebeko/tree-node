import React, { useState } from "react";

interface IAddNodeForm {
  id: number;
  onClose: () => void;
  isEditing: boolean;
  nodeName: string;
  addNode: (parentId: number, name: string) => void;
  updateNode: (id: number, name: string) => void;
}

export const AddNodeForm: React.FC<IAddNodeForm> = ({
  id,
  onClose,
  isEditing,
  nodeName,
  addNode,
  updateNode,
}) => {
  console.log("FORM RENDER");

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
