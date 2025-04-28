import ytdl from '@distube/ytdl-core'
import fs, { write } from 'fs'
import { NextResponse } from 'next/server'
import os from 'os'
import path from 'path'

export const POST = async(request: Request) => {
  try {
    const { link } = await request.json()

    // console.log(link)
    const downloadDir = path.join(os.homedir(), 'Downloads')

    const fileName = path.join(downloadDir, 'myfile.txt')

    const writeStream = fs.createWriteStream(fileName)
    writeStream.write('Hello, World!')
    writeStream.end()

    // const videoId = link

    // const info = ytdl.getInfo(videoId).then((info: any) => {
    //   const format = ytdl.chooseFormat(info.formats, { quality: "248" })
    //   const outputStream = fs.createWriteStream('video.mp4')


    //   ytdl.downloadFromInfo(info, { format: format }).pipe(outputStream)
    //   outputStream.on('finish', () => {
    //     console.log("Video downloaded")
    //   })

    // })

    return NextResponse.json({ message: 'File saved successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error saving file:', error)
    return NextResponse.json({ message: 'Error saving file' }, { status: 500 })
  }
}