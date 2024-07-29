export type Locale =
  | 'en'
  | 'zh'
  | 'hi'
  | 'es'
  | 'fr'
  | 'ar'
  | 'bn'
  | 'ru'
  | 'pt'
  | 'id'
  | 'ja'
  | 'de'
  | 'ko'
  | 'tr'
  | 'it'

export type Dictionary = {
  welcome: {
    title: string
    description: string
    register: string
  }
  register: {
    title: string
    username: string
    submit: string
  }
  login: {
    title: string
    username: string
    submit: string
  }
  sidebar: {
    title: string
    newChat: string
  }
  modal: {
    title: string
    chatId: string
    startChat: string
    cancel: string
  }
  send: string
}
