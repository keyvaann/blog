import React from "react"

// import { Link } from "gatsby"

import {
  faFacebook,
  faImdb,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTiktok,
  faTwitter,
  faWikipediaW,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import Category from "~/src/styles/category"
// import DateTime from "~/src/styles/dateTime"
import type Post from "~/src/types/Post"

// import CenteredImg from "./centeredImg"

type CardProperties = Pick<
  Post,
  | "alt"
  | "category"
  | "subcategory"
  | "title"
  | "instagram"
  | "telegram"
  | "twitter"
  | "website"
  | "wikipedia"
  | "imdb"
  | "linkedin"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "desc"
  | "date"
>

const Card: React.FC<CardProperties> = ({
  // alt,
  category,
  subcategory,
  title,
  instagram,
  telegram,
  twitter,
  website,
  wikipedia,
  imdb,
  linkedin,
  facebook,
  tiktok,
  youtube,
  desc,
  // date,
}) => {
  return (
    <Wrapper>
      <Text>
        <div>
          <Title>{title}</Title>
          {instagram && (
            <LinkTo href={instagram} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </LinkTo>
          )}
          {telegram && (
            <LinkTo href={telegram} target="_blank">
              <FontAwesomeIcon icon={faTelegram} />
            </LinkTo>
          )}
          {twitter && (
            <LinkTo href={twitter} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </LinkTo>
          )}
          {website && (
            <LinkTo href={website} target="_blank">
              <FontAwesomeIcon icon={faGlobe} />
            </LinkTo>
          )}
          {wikipedia && (
            <LinkTo href={wikipedia} target="_blank">
              <FontAwesomeIcon icon={faWikipediaW} />
            </LinkTo>
          )}
          {imdb && (
            <LinkTo href={imdb} target="_blank">
              <FontAwesomeIcon icon={faImdb} />
            </LinkTo>
          )}
          {linkedin && (
            <LinkTo href={linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </LinkTo>
          )}
          {facebook && (
            <LinkTo href={facebook} target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </LinkTo>
          )}
          {tiktok && (
            <LinkTo href={tiktok} target="_blank">
              <FontAwesomeIcon icon={faTiktok} />
            </LinkTo>
          )}
          {youtube && (
            <LinkTo href={youtube} target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </LinkTo>
          )}
          {subcategory && <Category> ، {subcategory}</Category>}
          <Category>{category}</Category>
          <Desc>{desc}</Desc>
        </div>
        {/* <DateTime dateTime={date!}>{date}</DateTime> */}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  // display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border-radius: var(--border-radius-base);
  background-color: var(--color-card);

  /* Fix Safari overflow:hidden with border radius not working error */
  transform: translateZ(0);
`

const Text = styled.div`
  display: inline-block;
  width: 100%;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: space-between;
  padding: var(--sizing-base);

  & > * {
    display: block;
  }
`

const Title = styled.h3`
  margin-top: var(--sizing-xs);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`

const LinkTo = styled.a`
  margin: var(--sizing-xs);
  // font-size: var(--text-lg);
  // font-weight: var(--font-weight-bold);
  line-height: 1.3;
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`

const Desc = styled.p`
  line-height: 1.5;
  margin-top: 8px;
  padding-bottom: var(--sizing-sm);
  color: var(--color-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default React.memo(Card)
