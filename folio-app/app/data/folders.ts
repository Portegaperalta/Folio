type Folder = {
  id: string,
  name: string,
  bookmarkCount: number,
  url: string,
}

const folders: Folder[] = [
  {
    id: "01",
    name: "Work",
    bookmarkCount: 0,
    url: "/",
  },
  {
    id: "02",
    name: "Gaming",
    bookmarkCount: 0,
    url: "/",
  },
]

export default folders;