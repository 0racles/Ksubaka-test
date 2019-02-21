import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { generate as id } from 'shortid';
import Config from '../../config';

const Block = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const List = styled.li`
  padding: .313rem;

  &:hover {
    cursor: pointer;
    margin: .6rem auto;
    outline: 1px solid ${Config.theme.colors.pink};
    width: fit-content;
  }
`;

export const MoviesList = ({ items, onClick }) => { 

  return (
    <div>
      <Block className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">No items found.</p>}
        {items.map((item) => 
          <List 
            key={id()} 
            onClick={onClick}
          >
          {item.Title}
          </List>
          )}
      </Block>
    </div>
  );
};

MoviesList.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoviesList;
