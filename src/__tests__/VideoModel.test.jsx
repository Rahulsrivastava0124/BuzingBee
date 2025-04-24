import React from 'react';
// import { render } from '@testing-library/react';

import VideoModel from '../Components/VideoModel';

// Mock the video import before importing the component
jest.mock('../assets/buzingVideo.mp4', () => 'test-video-stub');

describe('VideoModel Component', () => {
  test('renders without syntax errors', () => {
    // This test will fail if there are syntax errors in the component
    expect(() => {
      render(<VideoModel />);
    }).not.toThrow();
  });

  test('renders video element correctly', () => {
    render(<VideoModel />);
    // eslint-disable-next-line testing-library/no-node-access
    const videoElement = document.querySelector('video');
    expect(videoElement).toBeInTheDocument();
  });

  test('renders source element with correct attributes', () => {
    render(<VideoModel />);
    // eslint-disable-next-line testing-library/no-node-access
    const sourceElement = document.querySelector('source');
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute('type', 'video/mp4');

    // Check that source element doesn't have invalid attributes
    // This will pass even if the invalid attribute exists, but it's a way to document the issue
    const hasAltAttribute = sourceElement.hasAttribute('alt');
    expect(hasAltAttribute).toBe(false);
  });
});
