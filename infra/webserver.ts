function isLambdaServer() {
  return !!process.env.VERCEL_ENV
}

function isLocalhost() {
  return process.env.WEBSERVER_HOST === 'localhost'
}

function isBuildTime() {
  return !!process.env.BUILD_TIME
}

function getHost() {
  let webserverHost = 'https://hi-im-content.vercel.app'

  if (!isLambdaServer()) {
    webserverHost = `https://${process.env.WEBSERVER_HOST}:${process.env.WEBSERVER_PORT}`
  }

  if (['preview'].includes(process.env.VERCEL_ENV ?? '')) {
    webserverHost = `https://${process.env.VERCEL_URL}`
  }

  if (isLocalhost()) {
    webserverHost = `http://${process.env.WEBSERVER_HOST}:${process.env.WEBSERVER_PORT}`
  }

  return webserverHost
}

export default Object.freeze({
  getHost,
  isBuildTime,
  isLambdaServer,
})
