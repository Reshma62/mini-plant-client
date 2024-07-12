export const singleImageUpload = async (
  formData: FormData
): Promise<string | undefined> => {
  const imageBaseUrl = `https://api.imgbb.com/1/upload`;
  const ClientApiKey = import.meta.env.VITE_IMAG_API_KEY; // Replace with your actual API key

  try {
    const response = await fetch(`${imageBaseUrl}?key=${ClientApiKey}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log("Data: ", data);
    if (data.success) {
      console.log(data.data.url);
      return data.data.url;
    } else {
      console.error("Image upload failed:", data.error);
      return undefined;
    }
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};
