const express = require('express');
const { renderToString } = require('@stencil-demo/elements/hydrate');
const app = express();
const port = 3000;

const html = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo SSR</title>

    <script type="module" src="/scripts/stencil-demo.esm.js"></script>
    <script nomodule src="/scripts/stencil-demo.js"></script>
    <script>
        window.libElementsConfig = {
            techno: 'node'
        };
    </script>
    </head>

    <body>
    <my-component first="first"></my-component>
    <my-layout>
        TEST
        <div slot="header">Header</div>
    </my-layout>
    </body>

    </html>
`;

app.get('/', async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send((await renderToString(html)).html);
})

// Serve library
app.use('/scripts', express.static('../../packages/elements/dist/stencil-demo'));

app.listen(port, () => {
    console.log(`SSR demo app listening on port ${port} (http://localhost:${port})`);
})