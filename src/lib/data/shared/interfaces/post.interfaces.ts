import { EnumStatus } from "./enums";

export interface IPostMeta {
   status: EnumStatus;
   title: string;
   date: string;
   author: string;
   excerpt?: string;
   cover?: string;
   tags: string;
}

export interface IPostItem {
   path: string;
   meta: IPostMeta;
}