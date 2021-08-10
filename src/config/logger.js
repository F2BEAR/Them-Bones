const winston = require('winston')
require('winston-syslog').Syslog

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5
}

const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'magenta',
  http: 'blue',
  verbose: 'green',
  debug: 'white'
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
)

const transports = [
  new winston.transports.Console({
    format: winston.format.colorize({ all: true })
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
  }),
  new winston.transports.File({
    filename: 'logs/info.log',
    level: 'info'
  }),
  new winston.transports.File({ filename: 'logs/all.log' })
]

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
  exitOnError: false
})

const syslogger = winston.createLogger({
  level: 'warning',
  levels: winston.config.syslog.levels,
  format,
  transports: [new winston.transports.Syslog()],
  exitOnError: false
})

module.exports.logger = logger
module.exports.syslogger = syslogger
