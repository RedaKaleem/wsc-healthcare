import './globals.css'

export const metadata = {
  title: 'WSC Healthcare — Enterprise Healthcare AI & Intelligent Operations',
  description: 'Transforming healthcare through AI, data, interoperability, smart hospital systems, diagnostics and intelligent operations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="text-[#0c1714] antialiased">
        {children}
      </body>
    </html>
  )
}
