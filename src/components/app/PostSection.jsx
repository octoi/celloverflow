import React from "react";
import { PostContainer, Post } from '../../styles/appStyles';

export default function PostSection() {
  return (
    <PostContainer>
      <Post>
        <h3>Why I’m getting headache ??</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ✨</p>
        <div className='bottom'>
          <div className='tags'>
            <span>head</span>
            <span>pain in head</span>
          </div>
          <p>asked by <span>@johndoe</span></p>
        </div>
      </Post>
      <Post>
        <h3>Why I’m getting headache ??</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ✨</p>
        <div className='bottom'>
          <div className='tags'>
            <span>head</span>
            <span>pain in head</span>
          </div>
          <p>asked by <span>@johndoe</span></p>
        </div>
      </Post>
      <Post>
        <h3>Why I’m getting headache ??</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ✨</p>
        <div className='bottom'>
          <div className='tags'>
            <span>head</span>
            <span>pain in head</span>
          </div>
          <p>asked by <span>@johndoe</span></p>
        </div>
      </Post>
    </PostContainer>
  );
}