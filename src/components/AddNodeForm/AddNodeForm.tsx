import React, { useState } from "react";
import s from "./AddNodeForm.module.css";

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
    <div className={s.formWrapper}>
      <form onSubmit={onFormSubmit} className={s.form}>
        <div className={s.inputWrapper}>
          <label htmlFor="name" className={s.label}>
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

        <div className={s.buttonWrapper}>
          <button type="submit" className={s.button}>
            {isEditing ? "Update " : "Add "}
            node
          </button>

          <button type="button" className={s.button} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
