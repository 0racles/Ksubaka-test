import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieSearch from '../../MovieSearch';
import MoviesList from '../../MoviesList';
import { showSearchResultAction } from '../../../redux/Actions/showSearchResultAction';
import { selectedTitleAction } from '../../../redux/Actions/selectedTitleAction';
import { Redirect } from 'react-router-dom';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleKeyPress = e => this.props.searchResult(this.props.titles(e.target.value));

  handleClick = e => this.props.selectedTitle(e.target.textContent);

  render() {
    const { items, movieSelected } = this.props;

    if (movieSelected) return <Redirect to='/movies' />

    return (
      <Fragment>
        <MovieSearch
          onKeyPress={this.handleKeyPress}
        />
        <MoviesList
          items={items}
          onClick={this.handleClick}
        />
      </Fragment>
    );
  }
}

Home.propTypes = {
  titles: PropTypes.func.isRequired,
  searchResult: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  selectedTitle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const movies = [
    {Title: 'Guardians of the Galaxy vol. 2', Actors: 'Sean Conery', Director: 'Steven Speilberg', Year: '2017'},
    {Title: 'Rush Hour', Actors: 'Jackie Chan', Director: 'James Elsworth', Year: '2018'},
    {Title: 'Alita', Actors: 'Dare Longe', Director: 'Erin Burns', Year: '2019'},
    {Title: 'Rush Hour 2 - Chinese Invasion', Actors: ['Chris Tucker ', 'Yen Biao'], Director: ['James Amoruso ', 'Majinder Himanshi'], Year: '2019'},
    {Title: 'Alicia keys', Actors: ['Brandy ', 'Whitney houston ', 'Carmella'], Director: 'Jane Spade', Year: '1990'},
    {Title: 'Guardians of the Galaxy preshow', Actors: 'Randy orton', Director: 'Henry Alfonso', Year: '2007'}
  ]
  return { 
    titles: (val) => {
      const _arr = movies.filter(
        item => (item.Title.toLowerCase() === val || item.Title.toLowerCase().substring(0, 3) === val));
      return _arr;
    },
    items: state.searches,
    movieSelected: state.movieSelected,
   };
};

const mapDispatchToProps = (dispatch) => ({
  searchResult: (foo) => dispatch(showSearchResultAction(foo)),
  selectedTitle: (bar) => dispatch(selectedTitleAction(bar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
