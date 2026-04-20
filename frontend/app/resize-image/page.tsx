import ToolPage from "@/components/ToolPage";

export default function Page() {
  return (
    <ToolPage
      title="Resize Image"
      description="Resize image dimensions easily."
      buttonText="Resize Image"
      apiEndpoint="resize-image"        
      showResizeOptions={true}          
    />
  );
}