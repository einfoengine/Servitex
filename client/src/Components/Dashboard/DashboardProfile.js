import React from 'react';
import UserIntro from '../Utilities/UserIntro';
import UserProDesc from '../Utilities/UserProDesc';
import UserSkills from '../Utilities/UserSkills';
import UserWorkHistory from '../Utilities/UserWorkHistory';

const DashboardProfile = () => {
  return (
    <>
      <section id='mt-sec-profile-intro' className='mt-sub-section col-12'>
          <div className='row'>
            <div className='col-12'>
              <UserIntro userName='Mr. Maruf' />
            </div>
        </div>
      </section>
      <section className='mt-section mt-profile-body'>
          <div className='row'>
            <div className='col col-md-3 mt-aside mt-left'>
              <UserProDesc />
            </div>
            {/* End col: aside */}
            <div className='col col-md-9 mt-component-body'>
              <div className='mt-module mt-user-intro'>
                <div className='mt-module-header d-flex'>
                  <h4 className='mt-module-title flex-fill'>
                    Electronic gadget fixer
                  </h4>
                  <h6 className='mt-title-aside'>$20/hr</h6>
                </div>
                <div className='mt-module-body'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nec quam eget felis cursus suscipit sit amet a eros. Aliquam
                    blandit condimentum lectus, sit amet convallis lorem
                    fermentum et. Nunc vel volutpat lectus. Maecenas ultrices
                    quis erat sodales commodo. Donec ac neque et turpis
                    venenatis feugiat interdum sit amet arcu. Donec purus nunc,
                    luctus id aliquam quis, posuere id odio. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Praesent quis est congue, viverra nibh ut,
                    fringilla urna. Ut blandit blandit ultrices. Ut eu imperdiet
                    nisl.
                  </p>
                  <a
                    href='!#'
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    More..
                  </a>
                </div>
              </div>
              {/* End module */}
              <hr />
              <UserSkills />
              {/* End module */}
              <hr />
              <UserWorkHistory />
              {/* End module */}
            </div>
          </div>
      </section>
    </>
  );
};

export default DashboardProfile;
