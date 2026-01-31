import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json(
                { error: 'No file received.' },
                { status: 400 }
            )
        }

        const buffer = Buffer.from(await file.arrayBuffer())
        const filename = Date.now() + '_' + file.name.replaceAll(' ', '_')

        // Save to public/uploads
        // Note: In production (Vercel/Netlify), this won't persist. 
        // Works for local development or VPS with persistent disk.
        const uploadDir = path.join(process.cwd(), 'public/uploads')

        try {
            await writeFile(path.join(uploadDir, filename), buffer)
        } catch (error) {
            // Try creating directory if it strictly doesn't exist contextually (though we ran mkdir)
            return NextResponse.json({ error: 'Failed to write file.' }, { status: 500 })
        }

        return NextResponse.json({
            message: 'Success',
            url: `/uploads/${filename}`
        })
    } catch (error) {
        console.error('Upload error:', error)
        return NextResponse.json(
            { error: 'Error uploading file' },
            { status: 500 }
        )
    }
}
