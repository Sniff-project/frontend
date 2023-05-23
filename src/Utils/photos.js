import axios from "axios";

export async function convertUrlsToBlobs(urls) {
  const promises = urls.map(async (url) => {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    const data = response.data;
    const metadata = {
      type: data.type,
    };
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    const file = new File([data], fileName, metadata);
    const urlObject = URL.createObjectURL(file);
    return urlObject;
  });
  const blobs = await Promise.all(promises);
  return blobs;
}
