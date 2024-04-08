import './styles.ts'

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
  TabsProps,
} from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'

export interface Tab {
  title: ReactNode
  content: ReactNode
}

export interface CustomTabsProps extends Omit<TabsProps, 'children'> {
  tabList: Tab[]
  tabProps?: TabProps
}

export const CustomTabs: FC<CustomTabsProps> = ({
  className,
  tabList,
  tabProps,
  ...props
}) => {
  return (
    <Tabs className={clsx('tabs', className)} {...props}>
      <TabList>
        {tabList.map((tab, index) => (
          <Tab key={index} {...tabProps}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabList.map((tab, index) => (
          <TabPanel key={index}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
