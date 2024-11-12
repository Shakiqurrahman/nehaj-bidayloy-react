import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import PreviewImage from "../../assets/images/preview.jpg";

// ckeditor dependency file imports
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Alignment,
  BlockQuote,
  Bold,
  ClassicEditor,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontSize,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

const CreateStory = () => {
  const authors = [
    {
      name: "Shakil Ahmed",
      avatar: PreviewImage,
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedThumbnail(file);
      e.target.value = "";
    }
  };

  const handleRemoveThumbnail = () => {
    setSelectedThumbnail(null);
  };

  const handleChangeAuthor = (e) => {
    const value = e.target.value;
    const selected = authors.find((author) => author.name === value);
    setSelectedAuthor(selected);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName, categorySlug } = form;
    if (categoryName && categorySlug && selectedThumbnail) {
      console.log(form, selectedThumbnail);
    }
  };

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "heading",
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
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
      ],
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
      Paragraph,
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
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      LinkImage,
    ],
    mention: {
      // Mention configuration
    },
    initialData: "",
  };
  return (
    <div>
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
            value={form.title}
            onChange={handleChange}
            className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2">Content</label>
          <CKEditor editor={ClassicEditor} config={editorConfig} />
        </div>
        <div className="mt-5">
          <input
            type="file"
            name="avatar"
            id="avatar"
            hidden
            onChange={handleThumbnailChange}
          />
          <label
            htmlFor="avatar"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-2 px-3 bg-primary text-white shrink-0">
              Choose Avatar
            </div>
            <p className="line-clamp-1 font-ador">{selectedThumbnail?.name}</p>
          </label>
        </div>
        {selectedThumbnail && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedThumbnail)}
              alt={selectedThumbnail?.name}
              className="mx-auto block w-full rounded shadow-box object-cover mb-5"
            />
            <button
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
            <select className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none">
              <option value="">Select a category</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Genre</label>
            <select className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none">
              <option value="">Select a genre</option>
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
              <option value="">Select author</option>
              {authors?.map((author, index) => (
                <option value={author.name} key={index}>
                  {author?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Preview</label>
            <div className="flex items-center gap-2">
              <img
                src={selectedAuthor?.url || PreviewImage}
                alt=""
                className="w-[40px] rounded-full shadow-box object-cover"
              />
              <h1 className="font-ador">
                {selectedAuthor?.name || "Author Name"}
              </h1>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="disabled:bg-primary-300 flex items-center justify-center w-[200px] mx-auto text-center h-11 bg-primary-500 hover:bg-primary-700 text-white font-medium mt-5 duration-300 rounded select-none"
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
