import axios from "axios";
import {
  successNotification,
  errorNotification,
} from "../helpers/notification";

// axios.defaults.baseURL = "https://test.vmarmysh.com/api.user.tree.";

export const fetchTree = async () => {
  try {
    const response = await axios.post(
      "https://test.vmarmysh.com/api.user.tree.get?treeName=maria"
    );

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const addNode = async (parentNodeId: number, nodeName: string) => {
  try {
    const response = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.create?treeName=maria&parentNodeId=${parentNodeId}&nodeName=${nodeName}`
    );
    successNotification(`Node with the name: ${nodeName} has been added.`);
    return response.data;
  } catch (error: any) {
    if ((error.response.data.data = "Duplicate name")) {
      errorNotification(`Node with the name: ${nodeName} already exists.`);
    }
  }
};

export const deleteNode = async (nodeId: number) => {
  try {
    const response = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.delete?treeName=maria&nodeId=${nodeId}`
    );
    return response.data;
  } catch (error: any) {
    errorNotification(error.response.data.data.message);
  }
};

export const updateNode = async (nodeId: number, newNodeName: string) => {
  try {
    const response = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.rename?treeName=maria&nodeId=${nodeId}&newNodeName=${newNodeName}`
    );
    return response.data;
  } catch (error: any) {
    if ((error.response.data.data = "Duplicate name")) {
      errorNotification(`Node with the name: ${newNodeName} already exists.`);
    }
  }
};
