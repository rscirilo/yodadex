import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Stake'),
        fillIcon: SwapFillIcon,
        href: 'https://www.yodastk.com/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
        showItemsOnMobile: false,
        items: [
    ].map((item) => addMenuItemSupported(item, chainId)),
  },
].map((item) => addMenuItemSupported(item, chainId))
export default config
