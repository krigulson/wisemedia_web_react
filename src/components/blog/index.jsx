import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';

import { Card, Media, Heading, Content, Image, Columns, Container } from 'react-bulma-components';
import WelcomeText from '../welcome/WelcomeText';
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
          <Columns.Column size={3}>
            <Card key={post.sys.id}>
              <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    <Image
                        renderAs="p"
                        size={64}
                        alt="64x64"
                        src="http://bulma.io/images/placeholders/128x128.png"
                    />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>
                      {post.fields.title}
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>
                  {post.fields.content}
                </Content>
              </Card.Content>
            </Card>
          </Columns.Column>
      );
    });
  }
  render() {
    return (
      <div>
        <WelcomeText text={'Blog posts'} color={'danger'} />
        <Container breakpoint="fullhd">
          <Columns>
            {this.renderPosts()}
          </Columns>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
