import React from 'react';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';


export default function About() {
  return (
    <div className="about-devs">
      <div className="team">
        <div className="member">
          <h2><img className='prof-pic-main' src="alejandraprofile.JPG" alt="image" />Alejandra El-Dasouki</h2>
          <img src="alejandraprofile.JPG" alt="image" />
          <div className="icons">
            <a href="https://www.linkedin.com/in/alejandrael-dasouki/"
              target="_blank"
              rel="noopener noreferrer">
              <img src='/linkedin.png' />
            </a>
            <a href="https://github.com/Alejae1998" target="_blank" rel="noopener noreferrer">
              <img src='/github.png' />
            </a>
          </div>
          <p><span>Alejandra El-Dasouki (she/her)</span> is a full-stack software developer in training based in Portland. Outside Of coding, Alejandra enjoys hiking, running, and watching Netflix shows. Favorite animals: Cats and cows.</p>
        </div>
        <div className="member">
          <h2><img className='prof-pic-main' src="davidprofile.jpg" alt="image" />David Rigby</h2>
          <img src="davidprofile.jpg" alt="image" />
          <div className="icons">
            <a href="https://www.linkedin.com/in/david-rigby2022/"
              target="_blank"
              rel="noopener noreferrer">
              <img src="linkedin.png" />
            </a>
            <a href="https://github.com/Rigby-David" target="_blank" rel="noopener noreferrer">
              <img src="github.png" />
            </a>
          </div>
          <p><span>David Rigby (he/him)</span> is a software engineer in Estacada, Oregon. His two cats Orpheus and Mildred are the cutest, most regal fluff balls you have ever met.
          </p>
        </div>

        

        <div className="member">
          <h2><img className='prof-pic-main' src="brienprofile.jpg" alt="image" />Brien Thomas</h2>
          <img src="brienprofile.jpg" alt="image" />
          <div className="icons">
            <a href="https://www.linkedin.com/in/brien-thomas/"
              target="_blank"
              rel="noopener noreferrer">
              <img src='/linkedin.png' />
            </a>
            <a href="https://github.com/briensthomas" 
              target="_blank" 
              rel="noopener noreferrer">
              <img src='/github.png' />
            </a>
          </div>
          <p><span>Brien Thomas (he/him)</span> is a Software Engineer based in Portland, Oregon. He has two dogs: Cheyanne (Shy, pictured) and Midas, as well as four cats: Lily, Jake, Fred, and Sansa.
          </p>
        </div>
        <div className="member">
          <h2><img className='prof-pic-main' src="kashiprofile.jpg" alt="image" />Kashi Tamang</h2>
          <img src="kashiprofile.jpg" alt="image" />
          <div className="icons">
            <a href="https://www.linkedin.com/in/kashitamang/"
              target="_blank"
              rel="noopener noreferrer">
              <img src='/linkedin.png' />
            </a>
            <a href="https://github.com/kashitamang" target="_blank" rel="noopener noreferrer">
              <img src='/github.png' />
            </a>
          </div>
          <p><span>Kashi Tamang (they/them)</span> is a Software Developer in Portland, OR with two rescue chihuahuas and lots of animal niblings.</p>
        </div>
        <div className="member">
          <h2><img className='prof-pic-main' src="katprofile.jpg" alt="image" />Kat Zaro</h2>
          <img src="katprofile.jpg" alt="image" />
          <div className="icons">
            <a href="https://www.linkedin.com/in/katzaro/"
              target="_blank"
              rel="noopener noreferrer">
              <img src='/linkedin.png' />
            </a>
            <a href="https://github.com/kathrynzaro" 
              target="_blank" 
              rel="noopener  noreferrer">
              <img src='/github.png' />
            </a>
          </div>
          <p><span>Kat (she/her)</span> is a software engineer based in Portland, Oregon. She has two cats, Renly and Jack (aka Skeleton Jack aka Jackie Legs), who sometimes walk on her keyboard and wreak havoc.
          </p>
        </div>


        
      </div>
    </div>
  );
}