export class Blog {
  public blogId?: number;
  public title?: string;
  public content?: string;
  public applicationUserId?: number;
  public username?: string;
  public publishDate?: string;
  public updateDate?: string;
  public photoId?: number;
  public deleteConfirm?: boolean = false;

  constructor() {}
}
