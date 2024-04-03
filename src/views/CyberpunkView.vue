<template>
  <div className="cyberpunk">
    <div className="cyberpunk_imgs">
      <video autoPlay loop muted>
        <source src="../assets/cyberpunk2077.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="cyberpunk_story">
      <div>
        <img
          src="https://cdn-l-cyberpunk.cdprojektred.com/cyberpunk2077/story/Cyberpunk2077_Just_around_the_corner_RGB@2x.jpg"
          alt=""
        />
      </div>
      <div>
        <h3>Story</h3>
        <p>
          Take on the job of a lifetime — to steal a one-of-a-kind implant that
          is the key to immortality — and build your legend in the vast open
          world of Night City, where the choices you make shape the story and
          the people around you. Take on a variety of gigs to go from
          up-and-coming mercenary to legendary cyberpunk, all while uncovering
          the mysteries of the priceless implant everyone is dying to get their
          hands on.
        </p>
      </div>
    </div>
    <div className="cyberpunk_rewards">
      <div>
        <h3>MY REWARDS</h3>
        <p>
          The My Rewards program offers players an exciting selection of in-game
          items as well as digital content to enjoy outside of the game. Sign up
          to claim exclusive apparel, comic books, soundtracks, and wallpapers!
        </p>
      </div>
      <div>
        <img
          src="https://www.cyberpunk.net/build/images/cyberpunk/keyart-myrewards@2x-c83c4b97.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cyberpunk {
  position: relative;
  .cyberpunk_imgs {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgb(0, 0, 0)
    );

    .cyberpunk_name {
      width: 30%;
      margin: 20% 0 16% 35%;
    }

    .cyberpunk_img_bgr {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .cyberpunk_story {
    margin-top: -6px;
    padding: 3% 5%;
    background-color: black;
    display: flex;
    gap: 2%;
    align-items: center;

    img {
      width: 100%;

      border: 10px solid #fcee0a;
    }

    h3 {
      font-size: 44px;
    }

    p {
      font-size: 22px;
    }
  }

  .cyberpunk_rewards {
    padding: 3% 5%;
    background-color: #fcee0a;
    display: flex;
    gap: 2%;
    align-items: center;

    * {
      color: black;
    }
    img {
      width: 100%;
      border: 10px solid black;
    }

    h3 {
      font-size: 44px;
    }

    p {
      font-size: 22px;
    }
  }
}
</style>
