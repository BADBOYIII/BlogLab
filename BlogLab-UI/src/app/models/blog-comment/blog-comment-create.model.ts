export class BlogCommentCreate {
  public blogCommentId?: number;
  public blogId?: number;
  public content?: string;
  public parentBlogCommentId?: number;

  constructor() {}
}
