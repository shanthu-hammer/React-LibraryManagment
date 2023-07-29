import axios from "axios";

// Fetch data from API
export const fetchBookData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Insert new Data into API
export const PostData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return "posted successully \n  {^_^}/";
  } catch (error) {
    console.log(error);
  }
};

//Update existing Data in API
export const UpdateData = async (url, data) => {
  try {
    const response = await axios.put(url + "/" + data.id, data);
  } catch {}
};

//Delete data in API
export const DeleteData = async (url, id) => {
  try {
    const response = await axios.delete(url + "/" + id);
  } catch (error) {
    console.log(error);
  }
};
