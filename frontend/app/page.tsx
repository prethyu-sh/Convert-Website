import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        Convert - Image & PDF Tools
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Compress, convert and optimize your files instantly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Compress Image */}
        <Link href="/compress-image">
          <div className="bg-white shadow-md rounded-2xl p-6 cursor-pointer hover:shadow-lg transition group">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              Compress Image
            </h2>
            <p className="text-gray-600">
              Reduce image size without losing quality.
            </p>
          </div>
        </Link>

        {/* Image to PDF */}
        <Link href="/image-to-pdf">
          <div className="bg-white shadow-md rounded-2xl p-6 cursor-pointer hover:shadow-lg transition group">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              Image to PDF
            </h2>
            <p className="text-gray-600">
              Convert images into PDF instantly.
            </p>
          </div>
        </Link>
        {/* Resize Image*/}
        <Link href="/resize-image">
          <div className="bg-white shadow-md rounded-2xl p-6 cursor-pointer hover:shadow-lg transition group">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              Resize Image
            </h2>
            <p className="text-gray-600">
              Change image dimensions easily.
            </p>
          </div>
        </Link>
        {/* Convert Image Format*/}
        <Link href="/convert-image">
          <div className="bg-white shadow-md rounded-2xl p-6 cursor-pointer hover:shadow-lg transition group">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700">
              Image Converter
            </h2>
            <p className="text-gray-600">
              Convert images between formats easily.
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-12 text-center">

  <h2 className="text-2xl font-bold mb-4 text-gray-900">
    Popular Tools
  </h2>

  <div className="flex flex-col gap-2 items-center text-blue-600">

    <Link href="/compress-image-to-20kb" className="hover:underline">Compress to 20KB</Link>

    <Link href="/compress-image-to-50kb" className="hover:underline">Compress to 50KB</Link>

    <Link href="/compress-image-to-100kb" className="hover:underline">Compress to 100KB</Link>

    <Link href="/compress-image-to-200kb" className="hover:underline">Compress to 200KB</Link>

    <Link href="/convert-png-to-jpg" className="hover:underline">
      Convert PNG to JPG
    </Link>

    <Link href="/resize-image-to-800x600" className="hover:underline">
      Resize Image to 800x600
    </Link>

  </div>

</div>

    </div>
  );

}