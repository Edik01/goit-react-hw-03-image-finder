import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'API/apiPixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
export class App extends Component {
  state = {
    word: '',
    hits: null,
  };
  async componentDidUpdate(prevProp, prevState) {
    if (prevState.word !== this.state.word) {
      const {
        data: { hits, totalHits },
      } = await fetchImages({ word: this.state.word });
      if (hits.length === 0) return;
      this.setState({ hits });
    }
  }
  handleSubmit = word => {
    this.setState({ word });
  };
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar handleSubmit={this.handleSubmit}></Searchbar>
        {this.state.hits && <ImageGallery hits={this.state.hits} />}
      </div>
    );
  }
}
