import axios from "axios";
import { API_URL } from "./config";

export const markStoryAsRead = async (id) => {
  const readStories = JSON.parse(localStorage.getItem("readStories")) || [];

  if (!readStories.includes(id)) {
    await axios.patch(`${API_URL}/story/${id}/read`, { storyId: id });
    readStories.push(id);
    localStorage.setItem("readStories", JSON.stringify(readStories));
  }
};
