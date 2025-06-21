import Image from "next/image"
import { GALLERY_IMAGES_FORMAT } from "../lib/constants"

const ImageGrid = (props: any) => {
  return (
    <>
      <div className="columns-1 gap-2 space-y-2 p-2 md:columns-2 md:gap-4 md:p-8 lg:columns-3">
        {props.images.map((image: string, index: number) => (
          <div
            className="h-min w-full rounded-xl border border-gray-200 bg-red-400"
            key={index}
          >
            <img
              className="rounded-xl object-cover"
              alt={`LaLily_${image}`}
              src={`/assets/${image}.${GALLERY_IMAGES_FORMAT}`}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageGrid
