/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

type ResultType = Promise<any>;

export interface HandleApiPromiseParams {
  result: ResultType;
  reset?: () => void | Promise<void>;
}

export const handleApiPromise = async ({
  result,
  reset,
}: HandleApiPromiseParams): Promise<void> => {
  const toastPromise = toast.promise(result, {
    loading: "Loading...",
    success: (data) => {
      // Check if reset is a function and call it
      if (typeof reset === "function") {
        reset();
      }
      console.log("data comes from promise api =>", data);

      return data?.message; // Return the message directly
    },
    error: (err) => {
      console.log("Error data comes from promise api =>", err.data);
      return err?.data?.message || "Something went wrong";
    },
  });

  await toastPromise; // Await the toast promise to handle completion
};
