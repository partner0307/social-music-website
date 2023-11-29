import React from "react";
import { ContentColor, FooterContainer, FooterWrapper, Line, Logo } from "./style";
import { Flex, Link, List, ListItem, P, Span } from "@/components/basic";
import { Icon } from "@/components/custom";
import { GV } from "@/utils/style.util";

import LogoImage from '@/assets/img/logo.png';
import Map from '@/assets/img/sitemap.png'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Flex
                    $style={{
                        fDirection: "column",
                        gap: "2.5rem",
                    }}
                >
                    <Flex
                        $style={{
                            hAlign: 'space-between',
                            w: "100%",
                            queries: {
                                768: {
                                    fDirection: "column",
                                    gap: "2rem"
                                }
                            }
                        }}
                    >
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', maxW: '260px', gap: '30px' }}>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '24px' }}>
                                <Logo src={LogoImage} />
                                <Icon icon="Logo2" width="180px" height="40px" />
                            </Flex>
                            <P $style={{ size: GV('font-size') }}>Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget  lacus, ut interdum tellus elit sed risus. Maecenas eget lacus, ut interdum tellus elit sed risus. Maecenas eget </P>
                        </Flex>
                        <Flex $style={{
                            fDirection: 'row',
                            hAlign: 'space-between',
                            w: '700px'
                        }}>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: GV('font-size-3') }}><ContentColor>EXPLORE</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Buy Metaverse</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>3D Spaces</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Avatars</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Spaces</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>NFTs</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Start Building</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Marketplace</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Academy</Link>
                                    </ListItem>
                                </List>
                            </Flex>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: GV('font-size-3') }}><ContentColor>ABOUT</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>What we do</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Metaverse News</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Web3 News</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>AI Blogs</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Web3 Community</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Careers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Contact us</Link>
                                    </ListItem>
                                </List>
                            </Flex>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: GV('font-size-3') }}><ContentColor>HIRE TALENT</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Designers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Developers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>NFT Creators</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Modelers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Content Writers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Managers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>AI Experts</Link>
                                    </ListItem>
                                </List>
                            </Flex>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: GV('font-size-3') }}><ContentColor>NAVIGATE TO</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Sign in</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Privacy Policy</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Terms of Use</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: GV('font-size-6'), color: GV('input-color') }}>
                                        <Link to={""}>Site Map:</Link>
                                    </ListItem>
                                    <ListItem hideDot>
                                        <img src={Map} alt="" />
                                    </ListItem>
                                </List>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex $style={{
                        fDirection: "column",
                        gap: "1.25rem"
                    }}>
                        <Flex
                            $style={{
                                hAlign: "flex-start",
                                maxW: '1440px',
                                w: '100%',
                                queries: {
                                    768: {
                                        fDirection: "column",
                                        hAlign: "center",
                                        vAlign: "center",
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Flex $style={{
                                fDirection: 'column',
                                gap: '12px',
                                vAlign: 'flex-start'
                            }}>
                                <P $style={{ size: GV('font-size-3'), weight: '600' }}>Join the Community</P>
                                <Flex $style={{
                                    fDirection: 'row',
                                    gap: '24px'
                                }}>
                                    <Link to="#">
                                        <Icon icon="FaceBook" />
                                    </Link>
                                    <Link to="#">
                                        <Icon icon="Instagram" />
                                    </Link>
                                    <Link to="#">
                                        <Icon icon="Twitter" />
                                    </Link>
                                    <Link to="#">
                                        <Icon icon="Github" />
                                    </Link>
                                    <Link to="#">
                                        <Icon icon="Phone" />
                                    </Link>
                                    <Link to="#">
                                        <Icon icon="Youtube" />
                                    </Link>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Line />
                        <Flex $style={{
                            fDirection: 'row',
                            hAlign: 'space-between'
                        }}>
                            <Span $style={{ size: GV('font-size-6'), weight: '700' }}>© 2023 MetaverseDeployment. All rights reserved.</Span>
                            <Flex $style={{
                                fDirection: 'row',
                                gap: '64px'
                            }}>
                                <Link to="/"><Span $style={{ size: GV('font-size-6'), weight: '700' }}>Privacy Policy</Span></Link>
                                <Link to="/"><Span $style={{ size: GV('font-size-6'), weight: '700' }}>Term of Service</Span></Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
