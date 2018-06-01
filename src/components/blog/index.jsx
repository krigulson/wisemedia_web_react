import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import WelcomeText from '../welcome/WelcomeText';
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <div className="box" key={post.sys.id}>
          <article className="media">
            <div className="media-left">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
            </div>
            <div className="media-content">
              <div className="content">
                <strong>{post.fields.title}</strong>
                {post.fields.content}
              </div>
            </div>
          </article>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <section className="hero is-fullheight is-light">
          <div className="hero-body">
            <div className="container">
              <WelcomeText text={'Blog posts'} font={'Bangers'} size={'is-size-1-desktop is-size-1-mobile'} />
            </div>
          </div>
        </section>
        <div className="container section">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
