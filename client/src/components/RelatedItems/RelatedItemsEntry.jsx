import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from 'shared/Stars.jsx'
import { StarIcon } from 'assets/StarIcon.jsx'
import Button from 'shared/Button.jsx';
import Carousel from 'shared/Carousel.jsx';
import Text from 'shared/Text.jsx'
import Header from 'shared/Header.jsx'

function RelatedItemsEntry({ imgs, item, rating, handleCompare }) {
  const [thumbnailIsVisible, setThumbnailIsVisible] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  // imgs = [{thumbnail_url: 1, url: 1}, {thumbnail_url: 2, url: 2}...]
  // thumbnailImgsURLs = [url1, url2, url3...]
  const thumbnailImgsURLs = imgs.map((urlObj) => (urlObj.thumbnail_url));

  const thumbnailImgsURLsFiltered = thumbnailImgsURLs.filter((url) => (
    url !== thumbnailImgsURLs[selectedThumbnailIndex]
  ));

  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
  };

  const thumbnailImgsDiv = thumbnailImgsURLsFiltered.map((thumbnailImgUrl) => (
    <ThumbnailImg
      key={thumbnailImgUrl}
      src={thumbnailImgUrl}
      alt={thumbnailImgUrl}
      onClick={() => {
        handleThumbnailClick(thumbnailImgsURLs.indexOf(thumbnailImgUrl));
      }}
    />
  ));

  return (
    <Container>
      <ImageCard
        img={imgs[selectedThumbnailIndex].url}
        onMouseEnter={() => setThumbnailIsVisible(true)}
        onMouseLeave={() => setThumbnailIsVisible(false)}
      >
        <StarButton onClick={() => { handleCompare(); }}>
          <StarIcon
            value={0}
            iconWidth="var(--size-4)"
          />
        </StarButton>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        { thumbnailIsVisible ? (
          <CarouselThumbnail
            items={thumbnailImgsDiv}
            size={4}
            direction="row"
            scrollIndex={scrollIndex}
            onScroll={(index) => { setScrollIndex(index); }}
            arrowHeight="var(--size-4)"
            gap="var(--size-1)"
            buttonWidth="var(--size-3)"
            buttonMargin="calc(-1 * var(--size-2))"
            buttonsAfterCarousel={false}
            hover={false}
          />
        ) : '' }

      </ImageCard>
      <CardText>
        <Header variant="secondary">
          {item.category}
        </Header>
        <ProductName>
          <Header variant="primary">
            {item.name}
          </Header>
        </ProductName>
        <Text variant="primary">
          $
          {item.default_price}
        </Text>
        <Stars value={rating} />
      </CardText>
    </Container>
  );
}

RelatedItemsEntry.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  item: PropTypes.object.isRequired,
  handleCompare: PropTypes.func.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.object).isRequired,
  rating: PropTypes.number.isRequired,
  // size: PropTypes.number.isRequired,
};

// const Container = styled.div`
//   text-align: center;
// `;

const Container = styled.div`
  position: relative
`;

// const Action = styled.button`
//   position: absolute;
//   top: 5px;
//   right: 45%;
//   width: 80px;
//   height: 35px;
//   background-color: #555;
//   color: white;
//   font-size: 15px;
//   padding: 5px 5px;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
// `;

const ImageCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StarButton = styled(Button)`
  margin-top: var(--space-2);
  margin-right: var(--space-2);
`;

const ThumbnailImg = styled.img`
  width:50px;
  height:50px;
`;

const CarouselThumbnail = styled(Carousel)`
  margin-top: var(--space-9);
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-1);
  padding: var(--size-3);
  height: var(--size-8);
`;

const ProductName = styled.span`
  flex-grow: 1;
`;


// const StarButton = styled.div`
//  background: none!important;
//  border: none;
//  padding: 5px;
//  cursor: pointer;
// `;

// const Container = styled.div`
//   text-align: center;
// `;

export default RelatedItemsEntry;
