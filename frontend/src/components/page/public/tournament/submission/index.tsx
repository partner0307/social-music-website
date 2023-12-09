import React, { useEffect, useMemo, useState } from 'react';
import { BannerContainer, BannerTitle, SubmissionContainer, SubmissionContent, SubmissionContentWrapper, TabItem, TabList } from './style'
import Image from '@/components/basic/img'
import { useLocation } from 'react-router-dom';
import { getBracketByUrl } from '@/actions/bracket';
import { UPLOAD_URI } from '@/config';
import Loading from '@/components/custom/loading';

const Submission = () => {
  const { hash, pathname, search } = useLocation();
  const url = pathname.split('/')[1];
  const [bracket, setBracket] = useState<any>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBracketByUrl(url).then(res => {
      if (res.success) {
        setBracket(res.model);
        setLoading(false);
      }
    });
  }, []);

  const content = () => {
    return bracket && (
      tabIndex === 0 ? bracket.details :
      tabIndex === 1 ? bracket.prizes :
      tabIndex === 2 ? bracket.rules : ''
    )
  };

  if (loading) {
    return <Loading />
  }

  return (
    <SubmissionContainer>
      <TabList>
        <TabItem isActive={tabIndex === 0} isFirst={tabIndex === 0} onClick={() => setTabIndex(0)}>Details</TabItem>
        <TabItem isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Prizes</TabItem>
        <TabItem isActive={tabIndex === 2} onClick={() => setTabIndex(2)}>Rules</TabItem>
        <TabItem isActive={tabIndex === 3} onClick={() => setTabIndex(3)}>Winners</TabItem>
      </TabList>
      <BannerContainer>
        <Image src={`${UPLOAD_URI}${bracket && bracket.banner}`} alt='' $style={{ w: '100%', h: '100%' }} />
      </BannerContainer>
      <BannerTitle>{bracket && bracket.title}</BannerTitle>
      <SubmissionContentWrapper>
        <SubmissionContent dangerouslySetInnerHTML={{ __html: content() }} />
      </SubmissionContentWrapper>
    </SubmissionContainer>
  )
}

export default Submission