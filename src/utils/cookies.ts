
export function setCookie(name: string, value:string, daysToLive:number) {

  const date = new Date()
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();

  document.cookie = `${name}=${value}; expires=${expires} path='/'`
}
