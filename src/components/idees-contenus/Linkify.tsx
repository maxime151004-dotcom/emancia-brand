export function Linkify({ text }: { text: string }) {
  const urlRegex = /(https?:\/\/[^\s<]+)/g
  const parts = text.split(urlRegex)
  return (
    <>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline underline-offset-2 hover:text-teal-dark transition-colors break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {part.length > 60 ? part.slice(0, 57) + '...' : part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}
