export class AlreadyInUseError extends Error {
  constructor(msg: string) {
    super(msg)
    this.message = msg
  }
}
