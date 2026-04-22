import {
  CardPrim,
  CardActionPrim,
  CardContentPrim,
  CardDescriptionPrim,
  CardFooterPrim,
  CardHeaderPrim,
  CardTitlePrim,
} from './primitive'

type CardPrimProps = GetProps<typeof CardPrim>
type CardHeaderPrimProps = GetProps<typeof CardHeaderPrim>
type CardTitlePrimProps = GetProps<typeof CardTitlePrim>
type CardDescriptionPrimProps = GetProps<typeof CardDescriptionPrim>
type CardActionPrimProps = GetProps<typeof CardActionPrim>
type CardContentPrimProps = Omit<GetProps<typeof CardContentPrim>, 'children'>
type CardFooterPrimProps = GetProps<typeof CardFooterPrim>

export type CardProps = CardPrimProps & {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  footer?: React.ReactNode

  headerProps?: CardHeaderPrimProps
  titleProps?: CardTitlePrimProps
  descriptionProps?: CardDescriptionPrimProps
  actionPrimProps?: CardActionPrimProps
  contentProps?: CardContentPrimProps
  footerProps?: CardFooterPrimProps
}

export default function Card({
  headerProps,
  descriptionProps,
  description,
  titleProps,
  title,
  actionPrimProps,
  action,
  contentProps,
  children,
  footerProps,
  footer,
  ...props
}: CardProps) {
  const titleEl = title ?? titleProps?.children
  const descEl = description ?? descriptionProps?.children
  const actionEl = action ?? actionPrimProps?.children
  const footerEl = footer ?? footerProps?.children
  const headerEl = titleEl || descEl || actionEl

  return (
    <CardPrim {...props}>
      {headerEl && (
        <CardHeaderPrim {...headerProps}>
          {titleEl && <CardTitlePrim {...titleProps}>{titleEl}</CardTitlePrim>}
          {descEl && (
            <CardDescriptionPrim {...descriptionProps}>
              {descEl}
            </CardDescriptionPrim>
          )}
          {actionEl && (
            <CardActionPrim {...actionPrimProps}>{actionEl}</CardActionPrim>
          )}
        </CardHeaderPrim>
      )}
      <CardContentPrim {...contentProps}>{children}</CardContentPrim>
      {footerEl && (
        <CardFooterPrim {...footerProps}>
          {footer ?? footerProps?.children}
        </CardFooterPrim>
      )}
    </CardPrim>
  )
}
