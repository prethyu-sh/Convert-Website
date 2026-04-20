import ToolPage from "@/components/ToolPage";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      {/* <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Resize Image to 800x600 Online
      </h1>

      <p className="text-gray-700 mb-6 text-center max-w-xl mx-auto">
        Resize your image to 800x600 pixels quickly and easily. Perfect for websites,
        forms, and social media uploads.
      </p> */}

      <ToolPage
        title="Resize Image to 800x600 Online"
        description="Resize image dimensions easily."
        buttonText="Resize Image"
        apiEndpoint="resize-image"
        showResizeOptions={true}
      />

    </div>
  );
}