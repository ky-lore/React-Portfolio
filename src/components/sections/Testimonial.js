import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Project Portfolio',
    paragraph: 'Completed projects and projects in-progress.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <span className="testimonial-item-name text-color-high">Travel-19 </span>
                    A simple dashboard-style SPA-format application using only pure HTML, CSS, and native/vanilla Javascript. Shows a wealth of travel information using multiple API webs for a given city and algorithm-based safety recommendations. Created with only three weeks of training in three languages.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"><a href="https://github.com/ky-lore/Travel-19">GitHub</a></span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://ky-lore.github.io/Travel-19/">Travel-19</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <span className="testimonial-item-name text-color-high">CodeBook </span>
                    A simple and elegant full-stack social media platform employing MySQL, Node.JS and native Javascript - all deployed on Heroku. Features user log-in, comments, posts, profile pictures, and a fully-updating global feed. Made after six weeks of instruction.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">GitHub</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://radiant-headland-26253.herokuapp.com/index.html">CodeBook</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <span className="testimonial-item-name text-color-high">Seller's Remorse </span>
                    A full-stack e-commerce-style application utilizing the ever-popular MERN stack. Features true user authentication/hashed password storage with Passport, pseudo-relational information storage, and React-based dynamically updated front-end.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">GitHub</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Seller's Remorse</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;