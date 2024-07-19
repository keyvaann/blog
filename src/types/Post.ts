export default interface Post
  extends Pick<
    Queries.MarkdownRemarkFrontmatter,
    | "title"
    | "instagram"
    | "telegram"
    | "twitter"
    | "website"
    | "wikipedia"
    | "imdb"
    | "linkedin"
    | "facebook"
    | "tiktok"
    | "youtube"
    | "desc"
    | "date"
    | "category"
    | "subcategory"
    | "alt"
  > {
  id: string
  slug: Queries.MarkdownRemarkFields["slug"]
}
