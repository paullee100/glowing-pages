"use client"

import React, { useState } from 'react'

const YtDownPage = () => {

    const [link, setLink] = useState('')
    const [error, setError] = useState(false)

    const startDownload = async () => {
        if (typeof link !== 'string') return
        setError(false)

        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11,})$/
        if (!youtubeRegex.test(link)) {
            setError(true)
            return
        }

        try {
            const response = await fetch('/glowing-pages/api/dl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ link }),
            });

            if (response.ok) {
                alert("File saved successfully!")
            } else {
                alert("Error saving file")
            }
        } catch (error) {
            console.error('Error: ', error)
            alert("An error occurred while saving the file.")
        }
    }

    return (
    <div>
        YouTube Link:
        <input type="text" name="ytdownload" id="ytdownload" onChange={e => setLink(e.target.value)}/>
        {error ? <p>Invalid YouTube Link</p> : <p></p>}
        <button onClick={startDownload}>Download Test</button>
    </div>
  )
}

export default YtDownPage