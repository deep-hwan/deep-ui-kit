import { css } from '@emotion/css'
import { BackTab, Text } from 'deep-ui-package'
import React, { useState } from 'react'
import { Button } from './components'
import { CancelTab } from './components/IconTab'
import { Box, Padding, Section, SizedBox } from './components/Layout'
import AlartSnackbar from './components/Snackbar'
import { Tab } from './components/Tab'
import { TextSpan } from './components/Typography'

export default function App() {
  const [isView, setIsView] = useState(false)

  return (
    <Section>
      <Padding vertical="50px" horizontal="30px">
        <Box maxWidth="360px">
          {/* <Title styles={styles.title}>안녕하세요 타이틀입니다.</Title> */}
          <SizedBox height="5px" />
          <Text
            styles={css`
              font-size: 24px;
            `}
          >
            ssss
          </Text>

          <SizedBox height="20px" />
          <Button onClick={() => setIsView(true)}>다음</Button>

          <Tab styles={styles.tab}>싱글탭</Tab>

          <TextSpan
            styles={css`
              font-size: 20px;
            `}
          >
            sss
          </TextSpan>

          <BackTab onClick={() => alert('sss')} />
          <SizedBox height="20px" />
          <CancelTab />

          <AlartSnackbar isView={isView} onCancel={() => setIsView(!isView)}>
            <Text>가입이 완료되었습니다.</Text>
            <Text
              styles={css`
                color: #797979;
              `}
            >
              asdsad
            </Text>
          </AlartSnackbar>
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
