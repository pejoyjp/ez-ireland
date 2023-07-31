export type LinkProps = {
    map(arg0: (link: any) => import("react").JSX.Element): import("react").ReactNode
    "general_title":string,
    "icon":string,
    "cards":CardProps
}
export type CardProps = {
    "card_title":string,
    "card_desc":string,
    "tags":string[],
    "img":string,
    "url":string
}
