export type PaginationDTO = {
  page: number,
  recordsPerPage: number
}

export type LoginCredentialsDTO = {
  email: string,
  password: string
}

export type LoginResponse = {
  message: string
};

export type RegisterCredentialsDTO = {
  name: string,
  email: string,
  password: string,
  phoneNumber?: string
}

export type RegisterResponse = {
  message: string
}

export type FolderDTO = {
  id: string,
  name: string,
  isMarkedFavorite: boolean,
  creationDate: Date,
  lastVisitedTime?: Date
}

export type FolderCreationDTO = {
  name: string
}

export type FolderUpdateDTO = {
  name: string,
  isMarkedFavorite: boolean
}

export type BookmarkDTO = {
  id: string,
  name: string,
  url: string,
  isMarkedFavorite: boolean,
  creationDate: Date,
  lastVisitedTime?: Date
}

export type BookmarkCreationDTO = {
  name: string,
  url: string,
}

export type BookmarkUpdateDTO = {
  id: string,
  name?: string,
  url?: string,
  isMarkedFavorite?: boolean
}

export type UserProfileDetailsDTO = {
  name: string,
  email: string,
  phoneNumber: string,
  creationDate?: Date
}

export type UserUpdateDTO = {
  name: string,
  email: string,
  phoneNumber: string
}