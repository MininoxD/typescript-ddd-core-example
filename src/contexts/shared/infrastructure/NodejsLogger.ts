import Logger from '../domain/Logger'

export class NodejsLogger implements Logger {
  debug(message: string) {
    console.debug(message)
  }

  error(message: string | Error) {
    console.error(message)
  }

  info(message: string) {
    console.info(message)
  }
}
