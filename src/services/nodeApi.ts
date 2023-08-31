import axios from "axios";

// axios.defaults.baseURL = "https://test.vmarmysh.com/api.user.tree.";

export const fetchTree = async () => {
  try {
    const response = await axios.post(
      "https://test.vmarmysh.com/api.user.tree.get?treeName=maria"
    );

    // console.log(
    //   "🚀 ~ file: nodes-api.ts:10 ~ fetchTree ~ response:",
    //   response.data
    // );

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
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteNode = async (nodeId: number) => {
  try {
    const response = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.delete?treeName=maria&nodeId=${nodeId}`
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateNode = async (nodeId: number, newNodeName: string) => {
  try {
    const response = await axios.post(
      `https://test.vmarmysh.com/api.user.tree.node.rename?treeName=maria&nodeId=${nodeId}&newNodeName=${newNodeName}`
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
