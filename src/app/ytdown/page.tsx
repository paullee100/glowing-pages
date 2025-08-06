"use client"

import React, { useState } from 'react'
import styles from './ytDownPage.module.css'

const YtDownPage = () => {

    const [videoUrl, setVideoUrl] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const startDownload = async () => {
        if (typeof videoUrl !== 'string') return
        setError(false)

        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11,})$/
        if (!youtubeRegex.test(videoUrl)) {
            setError(true)
            return
        }

        // https://www.youtube.com/watch?v=lpEYXaNNysM
        setLoading(true)
        try {

            const searchParams = new URLSearchParams()
            searchParams.append('link', videoUrl)
            const link = `/glowing-pages/api/dl?${searchParams.toString()}`

            const response = await fetch(link)

            if (!response.ok) {
                throw new Error("Download Failed!")
            }

            const blob = await response.blob()

            const url = window.URL.createObjectURL(blob)
            
            const a = document.createElement('a')
            
            a.innerHTML = "Download!!!"
            a.href = url
            a.download = `${videoUrl.split("=")[1]}.mp4`
            document.body.appendChild(a)

            // window.URL.revokeObjectURL(url)

        } catch (error) {
            console.error('Error: ', error)
            alert("An error occurred while saving the file.")
        } finally {
            setLoading(false)
        }
    }

    return (
    <div>
        YouTube Link:
        <input type="text" name="ytdownload" id="ytdownload" onChange={e => setVideoUrl(e.target.value)}/>
        {error ? <p>Invalid YouTube Link</p> : <p></p>}
        <button onClick={startDownload}>Download Test</button>

        { loading ? <span className={styles.loader}></span> : <span></span>}
    </div>
  )
}

export default YtDownPage