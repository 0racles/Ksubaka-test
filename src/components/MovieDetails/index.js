import React, {Fragment} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate as id } from 'shortid';

const Block = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const List = styled.li`
  padding: .313rem;
`;

export const MovieDetails = ({ items }) => {
  return (
    <Block className="movieDetails-ul">
      {items.map(({Actors, Director, Year}) => 
        <Fragment key={id()}>
          <List>{Actors}</List> 
          <List>{Director}</List> 
          <List>{Year}</List>
        </Fragment>
      )}
    </Block>
  );
};

MovieDetails.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { 
    items: state.searches.filter(item => item.Title === state.movieSelected),
   };
};

export default connect(mapStateToProps)(MovieDetails);
