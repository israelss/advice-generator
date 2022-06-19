import dividerMobile from '../assets/images/pattern-divider-mobile.svg'
import dividerDesktop from '../assets/images/pattern-divider-desktop.svg'

export const Divider = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 1440px)" srcSet={ dividerDesktop } />
        <source media="(min-width: 375px)" srcSet={ dividerMobile } />
        <img src={ dividerDesktop } alt="A responsive divider" />
      </picture>
    </div>
  )
}
