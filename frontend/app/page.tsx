import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 pt-20">

<div className="flex flex-col items-center text-center mb-12">

  {/* Logo + Heading inline */}
  <div className="flex items-center gap-3 mb-2 justify-center">

      <Image
        src="/Convert.png"
        alt="Convert Logo"
        width={70}
        height={50}
        className="object-contain"
      />

    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
      Free Image Tools Online
    </h1>

  </div>

  {/* Description */}
  <p className="text-gray-600 max-w-md">
    Compress, convert and resize your images instantly.
  </p>

  {/* Trust line */}
  <p className="text-sm text-gray-400 mt-2">
    Fast • Free • No signup required
  </p>

</div>
<h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
  All Tools
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Compress Image */}
        <Link href="/compress-image">
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer group">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              🗜Compress Image
            </h2>
            <p className="text-gray-600">
              Reduce image size without losing quality.
            </p>
          </div>
        </Link>

        {/* Image to PDF */}
        <Link href="/image-to-pdf">
          <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 cursor-pointer border hover:scale-105 duration-200">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              📄Image to PDF
            </h2>
            <p className="text-gray-600">
              Convert images into PDF instantly.
            </p>
          </div>
        </Link>
        {/* Resize Image*/}
        <Link href="/resize-image">
          <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 cursor-pointer border hover:scale-105 duration-200">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              📏Resize Image
            </h2>
            <p className="text-gray-600">
              Change image dimensions easily.
            </p>
          </div>
        </Link>
        {/* Convert Image Format*/}
        <Link href="/convert-image">
          <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 cursor-pointer border hover:scale-105 duration-200">
            <h2 className="text-xl font-semibold mb-2 text-blue-600 group-hover:text-blue-700 transition">
              🔄️Image Format Converter
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

  <div className="flex flex-wrap justify-center gap-3 mt-4">

    <Link href="/compress-image-to-20kb" className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">
    Compress to 20KB
  </Link>

    <Link href="/compress-image-to-50kb"className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">Compress to 50KB</Link>

    <Link href="/compress-image-to-100kb" className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">Compress to 100KB</Link>

    <Link href="/compress-image-to-200kb" className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">Compress to 200KB</Link>

    <Link href="/compress-image-to-500kb" className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">Compress to 500KB</Link>

    <Link href="/convert-png-to-jpg" className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">
      Convert PNG to JPG
    </Link>

    <Link href="/resize-image-to-800x600" className="px-4 py-2 bg-white border rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-md">
      Resize Image to 800x600
    </Link>

  </div>

</div>
<div className="mt-16 text-center text-gray-500 text-sm">
  <p>© 2026 Convert Tools</p>
  <p>Free online image and PDF tools</p>
</div>
    </div>
  );

}