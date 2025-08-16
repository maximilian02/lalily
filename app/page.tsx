"use client"
import { useState } from "react"
import ImageGrid from "./components/ImageGrid"
import { shuffleArray } from "./lib/constants"

export default function Home() {
  const images = Array.from(Array(26).keys()).map((i) => i + 1)
  const PHOTOS_STEP = 6
  const frag = shuffleArray([...images]).slice(0, PHOTOS_STEP)
  const [imgList, setImgList] = useState(frag)
  const [lastImage, setLastImage] = useState(PHOTOS_STEP)
  const viewMoreHandler = () => {
    const sum = lastImage + PHOTOS_STEP
    setLastImage(sum)

    const addImages = shuffleArray([...images]).slice(lastImage, sum)
    const concat = imgList.concat(addImages)

    setImgList(concat)
  }

  return (
    <div className="mt-8 h-full w-full bg-gray-200 md:mt-20">
      <h3 className="text-4xl text-center text-blue-600">
        <a href="https://www.instagram.com/lalily14_02">
          Instagram @Lalily14_02
        </a>
      </h3>
      <h2 className="text-black text-2xl text-center">Gustavo Pagani</h2>
      <div className="flex flex-col">
        <ImageGrid images={imgList} />
      </div>
      {imgList.length !== 26 && (
        <div className="w-full p-8 text-center">
          <button
            className="g-blue-500 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={viewMoreHandler}
          >
            Ver mas
          </button>
        </div>
      )}
    </div>
  )
}
