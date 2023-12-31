import styled from "styled-components";

const StyledCarouselSection = styled.div`
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    -webkit-transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -ms-transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    transition: all 0.25s ease-in;
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: absolute;
    z-index: 2;
    top: 20px;
    background: none;
    border: 0;
    font-size: 32px;
    cursor: pointer;
  }

  .carousel-root {
    outline: none;
    height: 700px;
  }

  .carousel {
    position: relative;
    width: 100%;
    height: 700px;

    .carousel-item {
      height: 700px;
      * {
        background: none;
      }

      img {
        height: 700px;
      }

      .carousel-tag {
        position: absolute;
        left: 100px;
        bottom: 290px;

        color: white;
        text-align: left;

        h2 {
          font-size: 36px;
          font-weight: 700;
        }
        p {
          margin: 8px 0;
          margin-bottom: 40px;
          font-size: 20px;
          font-weight: 500;
        }
        .carousel-button {
          padding: 12px 16px;
          height: 46px;
          background-color: #363636;
          border-radius: 0.7rem;

          font-size: 16px;
          font-weight: 800;
          color: white;
          font-style: normal;
        }
      }
    }

    .control-arrow:focus,
    .control-arrow:hover {
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .control-arrow:before,
    &.carousel-slider .control-arrow:before {
      margin: 0 5px;
      display: inline-block;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      content: "";
    }
    .control-disabled.control-arrow {
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: inherit;
      display: none;
    }
    .control-prev.control-arrow {
      left: 0;
    }
    .control-prev.control-arrow:before {
      border-right: 8px solid #fff;
    }
    .control-next.control-arrow {
      right: 0;
    }
    .control-next.control-arrow:before {
      border-left: 8px solid #fff;
    }

    * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    img {
      width: 100%;
      display: inline-block;
      pointer-events: none;
    }
    .carousel {
      position: relative;
    }
    .control-arrow {
      outline: 0;
      border: 0;
      background: none;
      top: 50%;
      margin-top: -13px;
      font-size: 18px;
    }
    .thumbs-wrapper {
      margin: 20px;
      overflow: hidden;
    }
    .thumbs {
      -webkit-transition: all 0.15s ease-in;
      -moz-transition: all 0.15s ease-in;
      -ms-transition: all 0.15s ease-in;
      -o-transition: all 0.15s ease-in;
      transition: all 0.15s ease-in;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      position: relative;
      list-style: none;
      white-space: nowrap;
    }
    .thumb {
      -webkit-transition: border 0.15s ease-in;
      -moz-transition: border 0.15s ease-in;
      -ms-transition: border 0.15s ease-in;
      -o-transition: border 0.15s ease-in;
      transition: border 0.15s ease-in;
      display: inline-block;
      margin-right: 6px;
      white-space: nowrap;
      overflow: hidden;
      border: 3px solid #fff;
      padding: 2px;
    }
    .thumb:focus {
      border: 3px solid #ccc;
      outline: none;
    }
    .thumb.selected,
    .thumb:hover {
      border: 3px solid #333;
    }
    .thumb img {
      vertical-align: top;
    }
    &.carousel-slider {
      position: relative;
      margin: 0;
      overflow: hidden;
    }
    &.carousel-slider .control-arrow {
      top: 0;
      color: #fff;
      font-size: 26px;
      bottom: 0;
      margin-top: 0;
      padding: 5px;
    }
    &.carousel-slider .control-arrow:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    .slider-wrapper {
      overflow: hidden;
      margin: auto;
      width: 100%;
      -webkit-transition: height 0.15s ease-in;
      -moz-transition: height 0.15s ease-in;
      -ms-transition: height 0.15s ease-in;
      -o-transition: height 0.15s ease-in;
      transition: height 0.15s ease-in;
    }
    .slider-wrapper.axis-horizontal .slider {
      -ms-box-orient: horizontal;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -moz-flex;
      display: -webkit-flex;
      display: flex;
    }
    .slider-wrapper.axis-horizontal .slider .slide {
      flex-direction: column;
      flex-flow: column;
    }
    .slider-wrapper.axis-vertical {
      -ms-box-orient: horizontal;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -moz-flex;
      display: -webkit-flex;
      display: flex;
    }
    .slider-wrapper.axis-vertical .slider {
      -webkit-flex-direction: column;
      flex-direction: column;
    }
    .slider {
      margin: 0;
      padding: 0;
      position: relative;
      list-style: none;
      width: 100%;
    }
    .slider.animated {
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out;
    }
    .slide {
      min-width: 100%;
      margin: 0;
      position: relative;
      text-align: center;
    }
    .slide img {
      width: 100%;
      vertical-align: top;
      border: 0;
    }
    .slide iframe {
      display: inline-block;
      width: calc(100% - 80px);
      margin: 0 40px 40px;
      border: 0;
    }
    .slide .legend {
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -ms-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      position: absolute;
      bottom: 40px;
      left: 50%;
      margin-left: -45%;
      width: 90%;
      border-radius: 10px;
      background: #000;
      color: #fff;
      padding: 10px;
      font-size: 12px;
      text-align: center;
      opacity: 0.25;
      -webkit-transition: opacity 0.35s ease-in-out;
      -moz-transition: opacity 0.35s ease-in-out;
      -ms-transition: opacity 0.35s ease-in-out;
      -o-transition: opacity 0.35s ease-in-out;
      transition: opacity 0.35s ease-in-out;
    }
    .control-dots {
      position: absolute;
      bottom: 0;
      margin: 10px 0;
      padding: 0;
      text-align: center;
      width: 100%;
      z-index: 1;
    }

    .control-dots .dot {
      -webkit-transition: opacity 0.25s ease-in;
      -moz-transition: opacity 0.25s ease-in;
      -ms-transition: opacity 0.25s ease-in;
      -o-transition: opacity 0.25s ease-in;
      transition: opacity 0.25s ease-in;
      opacity: 0.3;
      filter: alpha(opacity=30);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
      background: #fff;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      cursor: pointer;
      display: inline-block;
      margin: 0 8px;
    }
    .control-dots .dot.selected,
    .control-dots .dot:hover {
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .carousel-status {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      font-size: 10px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
      color: #fff;
    }
    &:hover .slide .legend {
      opacity: 1;
    }
  }

  @media (min-width: 960px) {
    .carousel .control-dots {
      bottom: 0;
    }
  }
`;

export default StyledCarouselSection;
