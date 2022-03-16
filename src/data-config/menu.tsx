
interface ImenuLink {
  readonly label: string
  href: string
  active: boolean
}

const menuList: Array<ImenuLink> = [
  {
    label: 'Vesting',
    href: '/',
    active: true
  },
  {
    label: 'How to Buy Tokens',
    href: '/#how-to-buy',
    active: false
  },
]

export default menuList
