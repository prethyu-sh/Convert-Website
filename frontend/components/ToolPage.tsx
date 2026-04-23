"use client";

import { useState } from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  apiEndpoint: string;

  showResizeOptions?: boolean;
  showFormatOptions?: boolean;
  showCompressOptions?: boolean;
  defaultTargetSize?: string;
};
export default function ToolPage({
  title,
  description,
  buttonText,
  apiEndpoint,
  showResizeOptions,
  showFormatOptions,
  showCompressOptions,
  defaultTargetSize,
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState("jpeg");
  const [targetSize, setTargetSize] = useState(defaultTargetSize || "");
  const [dragging, setDragging] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setSuccess(false);
    setError("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  const handleAction = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("image", file);

    if (showCompressOptions && targetSize) {
  formData.append("targetSize", targetSize);
}

if (showFormatOptions) {
  formData.append("format", format);
}

if (showResizeOptions) {
  if (width) formData.append("width", width);
  if (height) formData.append("height", height);
}
    setLoading(true);

    try {
      const res = await fetch(`https://convert-website.onrender.com/api/${apiEndpoint}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Action failed");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

     let extension = "jpg";

if (showFormatOptions) {
  extension = format === "jpeg" ? "jpg" : format;
} else if (apiEndpoint === "image-to-pdf") {
  extension = "pdf";
}

      const a = document.createElement("a");
      a.href = url;
      a.download = `converted.${extension}`;
      a.click();
      a.click();
      setSuccess(true);
    } catch (error) {
      setError("Conversion failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-10">

      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h1>

      <p className="text-gray-700 mb-6 text-center">
        {description}
      </p>

      <div
  onDrop={(e) => {
    e.preventDefault();
    setDragging(false);
    handleDrop(e);
  }}
  onDragOver={(e) => {
    e.preventDefault();
    setDragging(true);
  }}
  onDragLeave={() => setDragging(false)}
        className={`bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center border-2 border-dashed transition 
${dragging ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-blue-500"}`}
      >

        {!file ? (
          <>
            <p className="mb-4 text-gray-700">
              Drag & drop your file here
            </p>

            <label className="block mb-4 cursor-pointer">
              <div className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Choose File
              </div>

              <input
                type="file"
                onChange={(e) =>
                  e.target.files && handleFile(e.target.files[0])
                }
                className="hidden"
              />
            </label>
          </>
        ) : (
          <>
            {preview && (
  <img
    src={preview}
    alt="preview"
    className="mb-4 rounded-xl max-h-40 mx-auto shadow"
  />
)}

<p className="text-gray-800 mb-1 font-medium text-sm">
  {file.name}
</p>

<p className="text-gray-500 text-xs mb-4">
  {(file.size / 1024).toFixed(2)} KB
</p>
{showResizeOptions && (
  <div className="flex gap-2 mb-4 text-gray-500">
    <input
      type="number"
      value={width}
      onChange={(e) => setWidth(e.target.value)}
      placeholder="Width (px)"
      className="w-1/2 p-2 border rounded-lg"
    />

    <input
      type="number"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      placeholder="Height (px)"
      className="w-1/2 p-2 border rounded-lg"
    />
  </div>
)}
{showFormatOptions && (
  <select
    value={format}
    onChange={(e) => setFormat(e.target.value)}
    className="w-full mb-4 p-2 border rounded-lg text-gray-500"
  >
    <option value="jpeg">JPG</option>
    <option value="png">PNG</option>
    <option value="webp">WEBP</option>
  </select>
)}
            <button
              onClick={() => {
                setFile(null);
                setPreview(null);
              }}
              className="text-red-500 text-sm mb-4"
            >
              Remove
            </button>
          </>
        )}
{showCompressOptions && (
  <input
    type="number"
    value={targetSize}
    onChange={(e) => setTargetSize(e.target.value)}
    placeholder="Target size (KB)"
    className="w-full mb-4 p-2 border rounded-lg text-gray-400"
  />
)}
        <button
          onClick={handleAction}
          className="w-full bg-green-600 hover:bg-green-700 active:scale-95 transition-all duration-200 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
        >
          {loading ? "Processing your file..." : buttonText}
        </button>
        {success && (
  <p className="text-green-600 text-sm mt-2">
    File processed successfully ✔
  </p>
)}
{error && (
  <p className="text-red-500 text-sm mt-2">
    {error}
  </p>
)}

      </div>
    </div>
  );
}