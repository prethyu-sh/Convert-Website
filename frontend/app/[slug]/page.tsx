export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const match = slug.match(/^compress-image-to-(\d+)kb$/);

  if (!match) return {};

  const size = match[1];

  return {
    title: `Compress Image to ${size}KB Online Free`,
    description: `Compress your image to ${size}KB instantly. Free online image compressor with high quality output.`,
  };
}

import ToolPage from "@/components/ToolPage";

export default async function Page({ params }: any) {
  const { slug } = await params;

  // Match: compress-image-to-50kb
  const match = slug.match(/^compress-image-to-(\d+)kb$/);

  if (!match) {
    return <div className="text-center mt-10">Page not found</div>;
  }

  const size = match[1];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      {/* <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Compress Image to {size}KB Online
      </h1>

      <p className="text-gray-700 mb-6 text-center max-w-xl mx-auto">
        Compress your image to {size}KB without losing quality.
        Fast and free tool.
      </p> */}

      <ToolPage
        title={`Compress Image to ${size}KB`}
        description="Reduce image size easily."
        buttonText="Compress Image"
        apiEndpoint="compress-image"
        showCompressOptions={true}
        defaultTargetSize={size}
      />

    </div>
  );
}