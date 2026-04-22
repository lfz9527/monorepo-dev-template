import {
  CardPrim,
  CardActionPrim,
  CardContentPrim,
  CardDescriptionPrim,
  CardFooterPrim,
  CardHeaderPrim,
  CardTitlePrim,
} from './primitive'

type OmitChild<T> = Omit<T, 'children'>

type CardPrimProps = OmitChild<GetProps<typeof CardPrim>>
type CardHeaderPrimProps = OmitChild<GetProps<typeof CardHeaderPrim>>
type CardTitlePrimProps = OmitChild<GetProps<typeof CardTitlePrim>>
type CardDescriptionPrimProps = OmitChild<GetProps<typeof CardDescriptionPrim>>
type CardActionPrimProps = OmitChild<GetProps<typeof CardActionPrim>>

export type CardProps = {
  className?: string
  title?: string
  size?: CardPrimProps['size']
  description?: string

  headerProps?: CardHeaderPrimProps
  titleProps?: CardTitlePrimProps
  descriptionProps?: CardDescriptionPrimProps
  actionPrimProps?: CardActionPrimProps
}

export default function Card() {
  return (
    <CardPrim>
      <CardHeaderPrim>
        <CardTitlePrim>Card Title</CardTitlePrim>
        <CardDescriptionPrim>Card Description</CardDescriptionPrim>
        <CardActionPrim>Card Action</CardActionPrim>
      </CardHeaderPrim>
      <CardContentPrim>
        <p>Card Content</p>
      </CardContentPrim>
      <CardFooterPrim>
        <p>Card Footer</p>
      </CardFooterPrim>
    </CardPrim>
  )
}
