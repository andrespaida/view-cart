import Redis from 'ioredis'

const redis = new Redis({
  host: '3.93.101.215',
  port: 6379
})

export default redis