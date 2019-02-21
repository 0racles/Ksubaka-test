import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Config from '../../config';

const Wrapper = styled.div`
  margin-top: 1.25rem;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 1.875rem;
  margin-bottom: 1rem;
  padding-left: .8rem;
  text-transform: lowercase;  
  width: 80%;

  @media screen and (min-width: 768px) {
    box-sizing: content-box;
    max-width: 18.75rem;
  }
`;

const StyledButton = styled.input`
  background: ${Config.theme.colors.black};
  border: 1px solid ${Config.theme.colors.black};
  color: ${Config.theme.colors.white};
  height: 2.25rem;  
  width: 80%;

  @media screen and (min-width: 786px) {
    max-width: 6.25rem;
  }
`;

export const MovieSearch = ({onKeyPress}) => {
  let inputField;

  return (
    <Wrapper className="movieSearch">
      <StyledInput
        ref={(input) => {
          inputField = input;
        }}
        className="movieSearch-input"
        type="text"
        placeholder="enter movie title..."
        onKeyPress={onKeyPress}
      />

      <StyledButton
        className="movieSearch-button"
        type="button"
        value="Search"
        onClick={() => {
          inputField.value = '';
        }}
      />
    </Wrapper>
  );
};

MovieSearch.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default MovieSearch;
