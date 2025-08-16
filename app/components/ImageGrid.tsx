import { GALLERY_IMAGES_FORMAT } from "../lib/constants"
/* eslint-disable  @typescript-eslint/no-explicit-any */

const ImageGrid = (props: any) => {
  return (
    <>
      <div className="columns-1 gap-2 space-y-2 p-2 md:columns-2 md:gap-4 md:p-8 lg:columns-3">
        {props.images.map((image: string, index: number) => {
          const assetIndex = index + 1
          const assetIndex0 = assetIndex <= 9 ? `0${assetIndex}` : assetIndex
          const assetSource = `/assets/${assetIndex0}.${GALLERY_IMAGES_FORMAT}`
          return (
            <div
              className="h-min w-full rounded-xl border border-gray-200 bg-red-400"
              key={index}
            >
              <img
                className="rounded-xl object-cover"
                alt={`LaLily_${image}`}
                src={assetSource}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ImageGrid
