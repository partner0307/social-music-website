import React from 'react';
import { Avatar, CardContainer, CardMark, Category, ProfileButton, ReviewContainer } from './style';
import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';

const TalentCard: React.FC<{ talent: TablentObject }> = ({ talent }) => {
    const {
        name,
        picture,
        profession,
        price,
        rate,
        favors,
        endjobs,
        skills,
    } = talent;

    return (
        <CardContainer>
            <CardMark>${price}/hr</CardMark>
            <Flex $style={{
                fDirection: 'column',
                gap: '24px'
            }}>
                <Flex $style={{
                    fDirection: 'row',
                    hAlign: 'center',
                }}>
                    {/* <Avatar src={avatar} /> */}
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8.5" y="8.5" width="95" height="95" rx="47.5" fill="url(#pattern0)" />
                        <rect x="8.5" y="8.5" width="95" height="95" rx="47.5" stroke="#F2F1F1" />
                        <path d="M91.2911 13.5249C91.5653 13.1949 91.5201 12.7044 91.1863 12.4349C80.9119 4.13627 68.0265 -0.269296 54.8057 0.0127377C41.3256 0.3003 28.4019 5.44173 18.4082 14.4927C8.41448 23.5437 2.02184 35.8965 0.404395 49.2822C-1.21305 62.668 2.05332 76.1879 9.60355 87.3587C17.1538 98.5296 28.4809 106.601 41.5045 110.091C54.5281 113.581 68.3736 112.256 80.4981 106.357C92.6226 100.459 102.212 90.3839 107.505 77.9831C112.696 65.8207 113.412 52.2219 109.543 39.5942C109.417 39.184 108.979 38.9592 108.571 39.0906C108.162 39.222 107.938 39.6597 108.064 40.07C111.819 52.3415 111.12 65.5549 106.076 77.3732C100.93 89.43 91.6065 99.2253 79.8184 104.96C68.0303 110.695 54.5689 111.984 41.9067 108.591C29.2444 105.197 18.2316 97.3496 10.8908 86.4887C3.55005 75.6278 0.374305 62.483 1.94687 49.4686C3.51944 36.4542 9.73472 24.4442 19.4512 15.6443C29.1676 6.84445 41.7327 1.84566 54.8388 1.56608C67.6857 1.29202 80.2067 5.57042 90.1933 13.63C90.5272 13.8995 91.0169 13.8549 91.2911 13.5249Z" fill="#19B698" />
                        <circle cx="108" cy="39" r="4" fill="#19B698" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_1542_9647" transform="translate(0, 0) scale(0.0045)" />
                            </pattern>
                            <image id="image0_1542_9647" width="225" height="225" href={picture} />
                        </defs>
                    </svg>
                </Flex>
                <Flex $style={{
                    fDirection: 'column',
                    vAlign: 'center',
                    gap: '8px'
                }}>
                    <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>{name}</P>
                    <P>{profession}</P>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'space-between',
                        gap: '12px'
                    }}>
                        <ReviewContainer>
                            <Flex $style={{
                                fDirection: 'row',
                                hAlign: 'space-between',
                                gap: '4px'
                            }}>
                                <Icon icon='Star' />
                                <Span>{rate}</Span>
                            </Flex>
                            <Flex $style={{
                                fDirection: 'row',
                                hAlign: 'space-between',
                                gap: '4px'
                            }}>
                                <Icon icon='Smile' />
                                <Span>{favors}</Span>
                            </Flex>
                        </ReviewContainer>
                        <Flex $style={{
                            fDirection: 'row',
                            p: '4px 8px',
                            gap: '4px'
                        }}>
                            <Icon icon='Calendar' />
                            <Span>{endjobs} Jobs</Span>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex $style={{
                    fDirection: 'row',
                    hAlign: 'center',
                    vAlign: 'flex-start',
                    gap: '8px',
                    fWrap: 'wrap'
                }}>
                    {skills?.map((p, i) => <Category key={i}>{p}</Category>)}
                </Flex>
                <ProfileButton>
                    View Profile
                </ProfileButton>
            </Flex>
        </CardContainer>
    )
}

export default TalentCard;