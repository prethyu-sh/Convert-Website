import ToolPage from "@/components/ToolPage";

export default function Page() {
  return (
    <ToolPage
      title="Image to PDF Converter"
      description="Convert your images into PDF instantly."
      buttonText="Convert to PDF"
      apiEndpoint="image-to-pdf"
    />
  );
}