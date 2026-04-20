import ToolPage from "@/components/ToolPage";

export default function Page() {
  return (
    <ToolPage
    title="PNG to JPG Converter"
    description="Convert PNG images to JPG format."
    buttonText="Convert Image"
    apiEndpoint="convert-image"
    showFormatOptions={true}
    />
  );
}