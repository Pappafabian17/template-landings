import { useEffect } from 'react'
import { content } from '../../config/content'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el) }
  el.content = content
}

function setOg(property, value) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el) }
  el.content = value
}

export function Meta() {
  const { meta, brand } = content

  useEffect(() => {
    document.title = meta.title

    setMeta('description', meta.description)
    setMeta('keywords', meta.keywords)
    setMeta('theme-color', meta.themeColor)

    // Open Graph
    setOg('og:title', meta.title)
    setOg('og:description', meta.description)
    setOg('og:url', meta.url)
    setOg('og:locale', meta.locale)
    setOg('og:type', 'website')
    setOg('og:site_name', brand.name)
    if (meta.image) setOg('og:image', meta.image)

    // Twitter / X
    setOg('twitter:card', 'summary_large_image')
    setOg('twitter:title', meta.title)
    setOg('twitter:description', meta.description)
    if (meta.twitterHandle) setOg('twitter:site', meta.twitterHandle)
    if (meta.image) setOg('twitter:image', meta.image)

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = meta.url
  }, [])

  return null
}
