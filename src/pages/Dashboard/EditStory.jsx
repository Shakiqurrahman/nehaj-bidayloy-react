import axios from "axios";

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

import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import PreviewImage from "../../assets/images/preview.jpg";
import { useFetchAuthorsQuery } from "../../Redux/api/authorApiSlice";
import { useGetCategoriesQuery } from "../../Redux/api/categoryApiSlice";
import { useGetGenresQuery } from "../../Redux/api/genreApiSlice";
import { useUpdateStoryMutation } from "../../Redux/api/storyApiSlice";
import { API_URL } from "../../utils/config";

const EditStory = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { data: categoryList } = useGetCategoriesQuery();
  const { data: genreList } = useGetGenresQuery();
  const { data: authors } = useFetchAuthorsQuery();

  const [UpdateStory, { isLoading }] = useUpdateStoryMutation();

  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    title: state?.title || "",
    content: state?.content || "",
    shortDescription: state?.shortDescription || "",
    isFeatured: state?.isFeatured || false,
    thumbnail: state?.thumbnail || null,
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    state?.category || null
  );
  const [selectedGenre, setSelectedGenre] = useState(state?.genre || null);
  const [selectedAuthor, setSelectedAuthor] = useState(state?.authorId || null);

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
    const { content, title, shortDescription, thumbnail, isFeatured } = form;
    if (
      content !== state?.content ||
      title !== state?.title ||
      shortDescription !== state?.shortDescription ||
      thumbnail?.url !== state?.thumbnail?.url ||
      selectedCategory?.slug !== state?.category?.slug ||
      selectedGenre?.slug !== state?.genre?.slug ||
      selectedAuthor?._id !== state?.authorId?._id ||
      isFeatured !== state?.isFeatured
    ) {
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
            id: selectedCategory?._id || selectedCategory?.id,
            name: selectedCategory?.category || selectedCategory?.name,
            slug: selectedCategory?.categorySlug || selectedCategory?.slug,
          },
          genre: {
            id: selectedGenre?._id || selectedGenre?.id,
            name: selectedGenre?.genre || selectedGenre?.name,
            slug: selectedGenre?.genreSlug || selectedGenre?.slug,
          },
          authorId: selectedAuthor?._id,
        };
        try {
          const res = await UpdateStory({
            storyId: state?._id,
            storyData,
          }).unwrap();
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
    } else {
      toast.success("Nothing to change!");
      navigate("/admin-dashboard/stories");
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
    initialData: form?.content || "",
  };

  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[800px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Update A Story
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
            <p className="line-clamp-1 font-ador">
              {form?.thumbnail?.name || selectedThumbnail?.name}
            </p>
          </label>
        </div>
        {(selectedThumbnail || form?.thumbnail) && (
          <div className="relative mt-5 text-center">
            <img
              src={
                selectedThumbnail
                  ? URL.createObjectURL(selectedThumbnail)
                  : form?.thumbnail?.url
              }
              alt={selectedThumbnail?.name || form?.thumbnail?.name}
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
              value={selectedCategory?.id || selectedCategory?._id}
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              onChange={handleChangeCategory}
            >
              {!selectedCategory && <option value="">Select a category</option>}
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
              value={selectedGenre?.id || selectedGenre?._id}
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
              value={selectedAuthor?._id}
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
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditStory;
