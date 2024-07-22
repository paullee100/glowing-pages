import React from 'react'
import ytdl from 'ytdl-core'
import fs from 'fs'

const DownloadPage = () => {
  const videoId = 'https://www.youtube.com/watch?v=_W0bSen8Qjg'

  ytdl.getInfo(videoId).then((info: any) => {
    const format = ytdl.chooseFormat(info.formats, { quality: "248" })
          
    const outputFilePath = `${info.videoDetails.title}.mp4`
    const outputStream = fs.createWriteStream(outputFilePath)
          
    ytdl.downloadFromInfo(info, { format: format }).pipe(outputStream)
          
    outputStream.on('finish', () => {
      console.log('Finished downloading')
    })
  }).catch((error: any) => {
    console.error(error)
  })

  return (
    <div>
        <h1>Downloader</h1>
        <input type="text" placeholder="Video URL"/>
        <button>Convert</button>
    </div>
  )
}

export default DownloadPage