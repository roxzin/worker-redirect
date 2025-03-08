addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return Response.redirect('http://sbtsp.asia/', 301)
}
