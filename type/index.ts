export type LinkProps = {
    "general_title":string,
    "icon":string,
    "cards":CardProps[]
}
export type CardProps = {
    "card_title":string,
    "card_desc":string,
    "tags":string[],
    "img":string,
    "url":string
}
