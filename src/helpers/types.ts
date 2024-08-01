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
  home: {
    title: string
    description: string
    switcher: string
    signup: string
    signin: string
  }
  signup: {
    title: string
    username: string
    submit: string
    signinLink: {
      url: string
      text: string
    }
  }
  signin: {
    title: string
    username: string
    submit: string
    signupLink: {
      url: string
      text: string
    }
    forgotLink: {
      url: string
      text: string
    }
  }
  forgotPassword: {
    title: string
    link: {
      url: string
      text: string
    }
    submit: string
  }
  dashboard: {
    bar: {
      settings: string
      newChat: string
    }
    body: {
      send: string
    }
  }
  profile: {
    title: string
    details: {
      bio: string
      send: string
    }
  }
  user: {
    title: string
    details: {
      bio: string
      send: string
    }
  }
  settings: {
    switcher: string
    edit: {
      true: string
      false: string
    }
    resetLink: {
      url: string
      text: string
    }
    submit: string
  }
}
