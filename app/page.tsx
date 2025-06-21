"use client"
import { useState } from "react"
import ImageGrid from "./components/ImageGrid"
import { shuffleArray } from "./lib/constants"
import list from "./lib/list.json"

export default function Home() {
  const { images } = list
  const PHOTOS_STEP = 20
  const frag = shuffleArray([...images]).slice(0, PHOTOS_STEP)
  const [imgList, setImgList] = useState(frag)
  const [lastImage, setLastImage] = useState(PHOTOS_STEP)
  const viewMoreHandler = () => {
    let sum = lastImage + PHOTOS_STEP
    setLastImage(sum)

    const addImages = shuffleArray([...images]).slice(lastImage, sum)
    const concat = imgList.concat(addImages)

    setImgList(concat)
  }

  return (
    <div className="mt-8 h-full w-full bg-gray-200 md:mt-20">
      <h3 className="section__subtitle text-4xl">Lalily14_02</h3>
      <h2 className="section__title text-2xl">Gustavo Pagani</h2>
      <div className="flex flex-col">
        {/* <ImageGrid images={imgList} /> */}
      </div>
      <div className="w-full p-8 text-center">
        <button
          className="g-blue-500 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={viewMoreHandler}
        >
          Ver mas
        </button>
      </div>
    </div>
  )
}
