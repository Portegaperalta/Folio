import api from "@/lib/api";
import { FolderCreationDTO, FolderUpdateDTO, PaginationDTO } from "../types/api";

const foldersUrl = `/folders`;

export async function GetFolders(paginationDto: PaginationDTO) {
  const response = await api.get(foldersUrl);
  return response.data;
}

export async function GetFolder(folderId: string) {
  const response = await api.get(`${foldersUrl}/${folderId}`);
  return response;
}

export async function CreateFolder(FolderCreationDTO: FolderCreationDTO) {
  const response = await api.post(foldersUrl, FolderCreationDTO);
  return response;
}

export async function UpdateFolder(folderId: string, FolderUpdateDTO: FolderUpdateDTO) {
  const response = await api.put(`${foldersUrl}/${folderId}`, FolderUpdateDTO);
  return response;
}

export async function VisitFolder(folderId: string) {
  const response = await api.put(`${foldersUrl}/${folderId}/visit`);
  return response;
}

export async function DeleteFolder(folderId: string) {
  const response = await api.delete(`${foldersUrl}/${folderId}`);
  return response;
}