const express = require("express");
const unblocker = require("unblocker");
const app = express();

app.use("/proxy", unblocker({ prefix: "/proxy/" }));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>まじかるのプロキシ</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gradient-to-br from-purple-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 class="text-3xl font-bold text-purple-600 mb-4">🌀 Magical Proxy</h1>
        <p class="mb-6 text-gray-600">好きなサイトをここからアクセスしてね</p>
        <form method="GET" action="/proxy/" class="space-y-4">
          <input 
            name="url"
            type="text"
            placeholder="https://www.youtube.com/"
            class="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition"
          >
            🔓 アクセスする
          </button>
        </form>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✨ Magical Proxy running at http://localhost:" + PORT);
});
