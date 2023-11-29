import React from 'react';
import { NewsImage1, NewsImage2, NewsImage3, Newsletter } from './style';
import { Flex, Heading, P } from '@/components/basic';

import Avatar from "@/assets/img/avatar2.png";
import { Input } from '../input';
import Button from '../button';
import { GV } from '@/utils/style.util';

const NewsLetter = () => {
    const [email, setEmail] = React.useState('');

    return (
        <Newsletter>
          <Flex
            $style={{
              fDirection: "row",
              vAlign: "center",
            }}
          >
            <NewsImage1 src={Avatar} />
            <NewsImage2 src={Avatar} />
            <NewsImage3 src={Avatar} />
          </Flex>
          <Flex
            $style={{
              maxW: "550px",
              fDirection: "column",
              gap: "24px",
            }}
          >
            <Heading
              level={3}
              $style={{
                color: "black",
              }}
            >
              Be Up To Date
            </Heading>
            <P
              $style={{
                size:  GV('font-size-3'),
                color: "black",
              }}
            >
              Subscribe to our news letter and never miss our latest news and
              promotions. Our news letter is sent once a week, every Teusday
            </P>
            <Input
              value={email}
              placeholder="Enter email address"
              padding="8px 24px"
              radius="999px"
              bg="#53BBB5"
              border="#000"
              onChange={(e: any) => setEmail(e.target.value)}
              helpSide={
                <Button
                  $style={{
                    bg: GV("black"),
                    color: "bg",
                    radius: "999px",
                    p: "8px 24px",
                  }}
                >
                  <P
                    $style={{
                      size: GV('font-size-3'),
                    }}
                  >
                    Subscribe
                  </P>
                </Button>
              }
            />
          </Flex>
        </Newsletter>
    )
}

export default NewsLetter;