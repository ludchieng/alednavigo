import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'

precacheAndRoute(self.__WB_MANIFEST || [])

registerRoute(
  ({ url }) => url.pathname.startsWith('/img/lines-icons/'),
  new CacheFirst({
    cacheName: 'img-lines-icons',
  }),
)

registerRoute(
  ({ url }) => url.pathname.startsWith('/img/mui/'),
  new CacheFirst({
    cacheName: 'img-mui',
  }),
)

registerRoute(
  ({ url }) => url.pathname.startsWith('/schemas/'),
  new CacheFirst({
    cacheName: 'schemas',
  }),
)
