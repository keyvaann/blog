export default interface Post
  extends Pick<
    Queries.MarkdownRemarkFrontmatter,
    | "title"
    | "instagram"
    | "telegram"
    | "twitter"
    | "website"
    | "wikipedia"
    | "youtube"
    | "desc"
    | "date"
    | "category"
    | "alt"
  > {
  id: string
  slug: Queries.MarkdownRemarkFields["slug"]
}
