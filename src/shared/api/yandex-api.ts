import { YandexApiOptions, Headers } from './types'

class YandexApi {
  private _baseUrl: string
  private _headers: Headers

  constructor(options: YandexApiOptions) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  _getResponseData(res: Response) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    return res.json()
  }

  // postTranslateMessage(message: string) {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body:
  //   })
  //   .then(this._getResponseData)
  // }

  // setUserInfo({ name, email }) {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     method: 'PATCH',
  //     credentials: 'include',
  //     headers: this._headers,
  //     body: JSON.stringify({ name, email })
  //   })
  //     .then(this._getResponseData)
  // }

  // getSavedMovies() {
  //   return fetch(`${this._baseUrl}/movies`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: this._headers
  //   })
  //     .then(this._getResponseData)
  // }

  // addLike(
  //   country,
  //   director,
  //   duration,
  //   year,
  //   description,
  //   image,
  //   trailerLink,
  //   thumbnail,
  //   movieId,
  //   nameRU,
  //   nameEN
  // ) {
  //   return fetch(`${this._baseUrl}/movies`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: this._headers,
  //     body: JSON.stringify(
  //       country,
  //       director,
  //       duration,
  //       year,
  //       description,
  //       image,
  //       trailerLink,
  //       thumbnail,
  //       movieId,
  //       nameRU,
  //       nameEN
  //     )
  //   })
  //     .then(this._getResponseData)
  // }

  // deleteLike(movieId) {
  //   return fetch(`${this._baseUrl}/movies/${movieId}`, {
  //     method: 'DELETE',
  //     credentials: 'include',
  //     headers: this._headers
  //   })
  //     .then(this._getResponseData)
  // }
}

export const yandexApi = new YandexApi({
  baseUrl: process.env.YANDEX_GPT_API_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.YANDEX_GPT_API_KEY}`,
    'x-folder-id': process.env.YANDEX_COLLECTION_ID as string
  }
})
