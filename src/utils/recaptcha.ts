const v2Callback = (cb: (token: string | false | Error) => void) => {
  return (token: string | false | Error) => {
    cb(token)
    console.log(token)
  }
}

export { v2Callback }
