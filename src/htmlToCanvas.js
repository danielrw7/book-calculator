// https://github.com/danielrw7/htmlToCanvas.js

export default function (html, defs, width, height) {
    return new Promise((resolve) => {
        const xmlns = 'http://www.w3.org/2000/svg'
        const $svg = document.createElement('svg')
        $svg.setAttribute('xmlns', xmlns)
        $svg.setAttribute('width', width)
        $svg.setAttribute('height', height)
        
        const $foreignObject = document.createElementNS(xmlns, 'foreignObject')
        $foreignObject.setAttribute('width', '100%')
        $foreignObject.setAttribute('height', '100%')
        $foreignObject.innerHTML = html
        $svg.appendChild($foreignObject)

        const $defs = document.createElement('defs')
        $defs.innerHTML = defs
        $svg.appendChild($defs)
    
        const $img = document.createElement('img')
        $img.width = width
        $img.height = height
        
        $img.onload = function () {
            const $canvas = document.createElement('canvas')
            $canvas.width = width
            $canvas.height = height
            const ctx = $canvas.getContext('2d')
            ctx.drawImage($img, 0, 0)
            resolve($canvas)
        }

        $img.src = "data:image/svg+xml," + encodeURIComponent($svg.outerHTML)
    })
}