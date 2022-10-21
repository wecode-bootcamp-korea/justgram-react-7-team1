import React from 'react';

export function Nav () {
  return (
  <nav>
		<div className="nav-content">
			<div className="nav-left">
				<img className="icon-insta" alt="insta-icon" src='/images/instagram.png'/>
				<span>justgram</span>
			</div>
			
      <div className="nav-center">
				<input type="text" id="search" placeholder="검색" />
			</div>
			
      <div className="nav-right">
				<div><img className="icon-explore" alt="explore-icon" src="/images/explore.png" /></div>
				<div><img className="icon-heart" alt="heart-icon" src="/images/heart.png" /></div>
				<div><img className="icon-profile" alt="profile-icon" src="/images/profile.png" /></div>
			</div>
		</div>
	</nav>
  );
}
