import { css } from "@emotion/css";

import React, { useState } from "react";
import { Button } from "./components";
import Dialog from "./components/Dialog";
import { CancelTab } from "./components/IconTab";
import { Box, Padding, Section, SizedBox } from "./components/Layout";
import ModalBottomSheet from "./components/ModalBottomSheet";
import ModalSheet from "./components/ModalSheet";
import AlartSnackbar from "./components/Snackbar";
import { Tab } from "./components/Tab";
import { TextSpan } from "./components/Typography";

export default function App() {
  const [isView, setIsView] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  return (
    <Section>
      <Padding vertical="50px" horizontal="30px">
        <Box maxWidth="360px">
          {/* <Title styles={styles.title}>안녕하세요 타이틀입니다.</Title> */}
          <SizedBox height="5px" />

          <SizedBox height="20px" />
          <Button onClick={() => setIsView(true)}>다음</Button>
          <Button onClick={() => setIsDialog(true)}>다이아로그</Button>

          <Tab styles={styles.tab}>싱글탭</Tab>

          <TextSpan
            styles={css`
              font-size: 20px;
            `}
          >
            sssasdasd
          </TextSpan>

          <SizedBox height="20px" />
          <CancelTab />

          <Dialog view={isDialog} onCancel={() => setIsDialog(false)}>
            [32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt, ut
            lalabore et dolore magnam aliquam [32] Sed ut perspiciatis, unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos, qui ratione
            voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem
            ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt, ut lalabore et dolore magnam
            aliquam
          </Dialog>

          <ModalSheet
            view={isView}
            onCancel={() => setIsView(!isView)}
            title="자산 찾기"
          >
            ssadasdsad
          </ModalSheet>

          {/* <ModalBottomSheet
            view={isView}
            title="학교찾기"
            onCancel={() => setIsView(!isView)}
            action={true}
            actionName="제출"
            onClick={() => console.log('sss')}
          >
            <div
              className={css`
                padding: 20px;
              `}
            >
              [32] Sed ut perspiciatis, unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam
              eaque ipsa, quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
              quia voluptas sit, aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos, qui ratione voluptatem sequi
              nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor
              sit, amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt, ut lalabore et dolore magnam aliquam
            </div>
          </ModalBottomSheet> */}

          {/* <AlartSnackbar view={isView} onCancel={() => setIsView(!isView)}>
            <Text>가입이 완료되었습니다.</Text>
            <Text
              styles={css`
                color: #797979;
              `}
            >
              asdsad
            </Text>
          </AlartSnackbar> */}
        </Box>
      </Padding>
    </Section>
  );
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
};
