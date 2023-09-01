import toast from "react-hot-toast";

export const successNotification = (text: string) => {
  toast.success(text, {
    style: {
      border: "1px solid #4f95da",
      padding: "16px",
      color: "#4f95da",
    },
    iconTheme: {
      primary: "#4f95da",
      secondary: "#FFFAEE",
    },
  });
};

export const errorNotification = (text: string) => {
  toast.error(text);
};
