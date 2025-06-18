import ytdl from '@distube/ytdl-core'

export async function GET(req: Request, res: Response) {
  
  const { searchParams } = new URL(req.url)
  const link = searchParams.get('link')

  if (!link || !ytdl.validateURL(link)) {
    console.error("An error occurred in route.ts in dl")
    return new Response('Invalid YouTube URL', {
      status: 400
    })
  }

  const responseHeaders = new Headers(res.headers)
  
  try {

    const info = await ytdl.getInfo(link)
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' })

    // responseHeaders.set('Content-Type', 'audio/mpeg')
    responseHeaders.set('Content-Type', 'video/mpeg')
    // responseHeaders.set('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp3"`)
    responseHeaders.set('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`)
    responseHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36')

    const youTubeVideo = ytdl(link, { format })
    return new Response(youTubeVideo as any, {
      headers: responseHeaders,
    })
  } catch (error) {
    console.error('An error has occurred:', error)
    return new Response("An error has occurred", {
      status: 500
    })
  }

}