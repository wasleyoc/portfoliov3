import { describe, it, expect } from 'vitest'
import { getYouTubeEmbedUrl } from './helper'

describe('getYouTubeEmbedUrl', () => {
  it('URLs vazias ou inválidas', () => {
    expect(getYouTubeEmbedUrl('')).toBeNull()
    expect(getYouTubeEmbedUrl(null as unknown as string)).toBeNull()
    expect(getYouTubeEmbedUrl('https://google.com')).toBeNull()
  })

  it('URLs normais de vídeos do YouTube', () => {
    expect(
      getYouTubeEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
    ).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ')

    expect(
      getYouTubeEmbedUrl('https://youtube.com/watch?v=dQw4w9WgXcQ&t=10s'),
    ).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ')
  })

  it('URLs encurtadas do youtu.be', () => {
    expect(getYouTubeEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
    )
  })

  it('URLs de vídeos curtos do YouTube', () => {
    expect(
      getYouTubeEmbedUrl('https://www.youtube.com/shorts/tPEE9ZwTmy0'),
    ).toBe('https://www.youtube.com/embed/tPEE9ZwTmy0')
  })

  it('URLs já incorporadas', () => {
    expect(
      getYouTubeEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ'),
    ).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ')
  })
})
