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
import { useGetCategoriesQuery } from "../../Redux/api/categoryApiSlice";

const CreateStory = () => {
  const { data: categoryList } = useGetCategoriesQuery();
  const genreList = [
    {
      name: "প্রবন্ধ",
      value: "article",
    },
    {
      name: "নোটস",
      value: "notes",
    },
    {
      name: "অনুবাদ",
      value: "translate",
    },
  ];
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
    bio: "",
    isFeatured: false,
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    setForm((prev) => ({ ...prev, isFeatured: e.target.checked }));
  };

  const handleContentChange = (e, editor) => {
    setForm({ ...form, content: editor.getData() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName, categorySlug, content, title } = form;
    if (categoryName && categorySlug && selectedThumbnail && content && title) {
      console.log(form, selectedThumbnail);
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
            name="bio"
            value={form?.bio}
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
            name="avatar"
            id="avatar"
            hidden
            onChange={handleThumbnailChange}
          />
          <label
            htmlFor="avatar"
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
            <select
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categoryList?.map((category, index) => (
                <option value={category?.category} key={index}>
                  {category?.category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Genre</label>
            <select
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {!selectedGenre && <option value="">Select a genre</option>}
              {genreList.map((genre, index) => (
                <option value={genre.value} key={index}>
                  {genre.name}
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
              <option value="">Select author</option>
              {authors?.map((author, index) => (
                <option value={author?.name} key={index}>
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
            Featured
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="disabled:bg-primary-blue flex items-center justify-center w-[200px] mx-auto text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
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
