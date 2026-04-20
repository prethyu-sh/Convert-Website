import ToolPage from "@/components/ToolPage";

export default function Page() {
  return (
    <ToolPage
      title="Image Converter"
      description="Convert images between formats."
      buttonText="Convert Image"
      apiEndpoint="convert-image"       
      showFormatOptions={true}          
    />
  );
}