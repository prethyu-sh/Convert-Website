import ToolPage from "@/components/ToolPage";

export default function Page() {
  return (
    <ToolPage
      title="Compress Image"
      description="Reduce image size without losing quality."
      buttonText="Compress Image"
      apiEndpoint="compress-image"
      showCompressOptions={true}
    />
  );
}