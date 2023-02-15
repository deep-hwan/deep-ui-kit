import { css } from '@emotion/css'
import React from 'react'
import { BackTab, Button } from './components'
import { CancelTab } from './components/IconTab'
import { Box, Padding, Section, SizedBox } from './components/Layout'
import { Tab } from './components/Tab'
import { Text, Title } from './components/Typography'

export default function App() {
  return (
    <Section>
      <Padding vertical="50px" horizontal="30px">
        <Box maxWidth="360px">
          <Title styles={styles.title}>안녕하세요 타이틀입니다.</Title>
          <SizedBox height="5px" />
          <Text>임의의 텍스트 입니다.</Text>

          <SizedBox height="20px" />
          <Button onClick={() => console.log('sss')}>다음</Button>

          <Tab styles={styles.tab}>싱글탭</Tab>
          <BackTab onClick={() => alert('뒤로가기')} />

          <SizedBox height="20px" />
          <CancelTab />
        </Box>
      </Padding>
    </Section>
  )
}

const styles = {
  title: css`
    font-size: 26px;
    @media (max-width: 400px) {
      font-size: 18px;
    }
  `,

  tab: css`
    margin-top: 20px;
  `,
}
