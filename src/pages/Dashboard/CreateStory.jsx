import axios from "axios";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import PreviewImage from "../../assets/images/preview.jpg";

// ckeditor dependency file imports
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Alignment,
  AutoImage,
  BlockQuote,
  Bold,
  ClassicEditor,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontSize,
  Heading,
  Image,
  ImageInsert,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Mention,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFetchAuthorsQuery } from "../../Redux/api/authorApiSlice";
import { useGetCategoriesQuery } from "../../Redux/api/categoryApiSlice";
import { useGetGenresQuery } from "../../Redux/api/genreApiSlice";
import { useCreateStoryMutation } from "../../Redux/api/storyApiSlice";
import { API_URL } from "../../utils/config";

const CreateStory = () => {
  const navigate = useNavigate();

  const { data: categoryList } = useGetCategoriesQuery();
  const { data: genreList } = useGetGenresQuery();
  const { data: authors } = useFetchAuthorsQuery();

  const [CreateStory, { isLoading }] = useCreateStoryMutation();

  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
    shortDescription: "",
    isFeatured: false,
    thumbnail: null,
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleThumbnailChange = async (e) => {
    const file = e.target.files[0];
    setSelectedThumbnail(file);
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("thumbnail", file);
      const url = API_URL + "/upload";
      try {
        const res = await axios.post(url, formData);
        if (res.status === 200) {
          const imgObject = {
            name: file.name,
            url: res.data.imageUrl,
          };
          setForm((prev) => ({ ...prev, thumbnail: imgObject }));
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to upload image!");
      }

      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleRemoveThumbnail = (e) => {
    e.preventDefault();
    setSelectedThumbnail(null);
    setForm((prev) => ({
      ...prev,
      thumbnail: null,
    }));
  };

  const handleChangeCategory = (e) => {
    const id = e.target.value;
    const selected = categoryList?.find((category) => category?._id === id);
    setSelectedCategory(selected);
  };

  const handleChangeGenre = (e) => {
    const id = e.target.value;
    const selected = genreList?.find((genre) => genre?._id === id);
    setSelectedGenre(selected);
  };

  const handleChangeAuthor = (e) => {
    const id = e.target.value;
    const selected = authors?.find((author) => author?._id === id);
    setSelectedAuthor(selected);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    setForm((prev) => ({ ...prev, isFeatured: e.target.checked }));
  };

  const handleContentChange = (e, editor) => {
    setForm({ ...form, content: editor.getData() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { content, title, shortDescription, thumbnail } = form;
    if (
      shortDescription &&
      thumbnail &&
      content &&
      title &&
      selectedCategory &&
      selectedGenre &&
      selectedAuthor
    ) {
      const storyData = {
        ...form,
        category: {
          id: selectedCategory?._id,
          name: selectedCategory?.category,
          slug: selectedCategory?.categorySlug,
        },
        genre: {
          id: selectedGenre?._id,
          name: selectedGenre?.genre,
          slug: selectedGenre?.genreSlug,
        },
        authorId: selectedAuthor?._id,
      };
      try {
        const res = await CreateStory(storyData).unwrap();
        if (res?.success) {
          toast.success(res?.message);
          navigate("/admin-dashboard/stories");
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to create Story!");
      }
    } else {
      toast.error("Please Fill Up Required Fields!");
    }
  };

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "fontsize",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "|",
        "link",
        "mediaEmbed",
        "insertImage",
        "blockQuote",
        "|",
        "alignment",
        "bulletedList",
        "numberedList",
        "outdent",
        "indent",
      ],
      shouldNotGroupWhenFull: false,
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    fontColor: {
      colorPicker: {
        // Use 'hex' format for output instead of 'hsl'.
        format: "hex",
      },
    },
    plugins: [
      Bold,
      Essentials,
      Italic,
      Mention,
      Undo,
      Heading,
      FontSize,
      FontColor,
      FontBackgroundColor,
      Link,
      MediaEmbed,
      Alignment,
      List,
      BlockQuote,
      Indent,
      IndentBlock,
      Image,
      ImageInsert,
      AutoImage,
    ],
    mention: {
      // Mention configuration
    },
    initialData: "",
  };
  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[800px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Create A Story
        </h1>
        <div className="mt-5">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={form?.title}
            onChange={handleChange}
            className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2">Short Description</label>
          <textarea
            type="text"
            name="shortDescription"
            value={form?.shortDescription}
            onChange={handleChange}
            className="block w-full h-[150px] py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none resize-none"
          ></textarea>
        </div>
        <div className="mt-5">
          <label className="block mb-2">Content</label>
          <div className="editor-container">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              onChange={handleContentChange}
            />
          </div>
        </div>
        <div className="mt-5">
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            hidden
            onChange={handleThumbnailChange}
          />
          <label
            htmlFor="thumbnail"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-2 px-3 bg-primary-blue text-white shrink-0">
              Add Thumbnail
            </div>
            <p className="line-clamp-1 font-ador">{selectedThumbnail?.name}</p>
          </label>
        </div>
        {selectedThumbnail && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedThumbnail)}
              alt={selectedThumbnail?.name}
              className={`mx-auto block w-full rounded shadow-box object-cover mb-5 ${
                isUploading ? "blur" : ""
              }`}
            />
            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              onClick={handleRemoveThumbnail}
            >
              Remove
            </button>
          </div>
        )}
        <div className="mt-5 flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Category</label>
            <select
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              onChange={handleChangeCategory}
            >
              <option value="">Select a category</option>
              {categoryList?.map((category, index) => (
                <option value={category?._id} key={index}>
                  {category?.category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Genre</label>
            <select
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              onChange={handleChangeGenre}
            >
              {!selectedGenre && <option value="">Select a genre</option>}
              {genreList?.map((genre, index) => (
                <option value={genre?._id} key={index}>
                  {genre?.genre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Author</label>
            <select
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              name="avatar"
              onChange={handleChangeAuthor}
            >
              {!selectedAuthor && <option value="">Select author</option>}
              {authors?.map((author, index) => (
                <option value={author?._id} key={index}>
                  {author?.fullName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Preview</label>
            <div className="flex items-center gap-2">
              <img
                src={selectedAuthor?.avatar?.url || PreviewImage}
                alt=""
                className="size-[40px] rounded-full shadow-box object-cover"
              />
              <h1 className="font-ador">
                {selectedAuthor?.fullName || "Author Name"}
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <input
            type="checkbox"
            name="featured"
            id="featured"
            checked={form?.isFeatured}
            onChange={handleCheck}
            className="cursor-pointer"
          />
          <label htmlFor="featured" className="ml-2 cursor-pointer">
            Featured{" "}
            <span className="text-red-500 text-xs">(Not Required)</span>
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading || isUploading}
          className="disabled:bg-primary-blue/50 flex items-center justify-center w-[200px] mx-auto text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
        >
          {isLoading ? (
            <CgSpinner className="animate-spin text-xl" />
          ) : (
            "Create"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateStory;
