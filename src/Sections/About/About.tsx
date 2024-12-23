import { VertBox } from '../../Components/Box'

export default function About() {
  return (
    <VertBox
      tag="section"
      id="About"
      className="flex flex-col items-center"
      gap="20px"
    >
      <div className="content-width">
        <h2>About Me</h2>
      </div>
      <div className="content-box content-width about-box section-box">
        <div className="profile-img-box">
          <img src="/images/DM-profile.png" alt="Daniel Mladek" />
        </div>
        <VertBox>
          <h3>Daniel Mladek</h3>
          <p className="gp">
            Kia ora, I'm Daniel Mladek. My journey into tech has been a steady
            evolution, fuelled by my curiosity and a desire to always keep
            learning. I actually started out studying civil engineering, but
            found that working on construction sites didn't bring any joy.
            Instead, I was drawn to computers—my hobby at the time—and taught
            myself enough to step into the world of IT. My early career began at
            Sun Microsystems, where I worked as a Quality Assurance Engineer on
            the NetBeans Java IDE project. That experience sparked my love for
            Java and Unix ecosystem and set me on a path to becoming a Java
            developer. Over time, I've taken on a range of IT roles, from
            software testing to DevOps, before eventually settling into back-end
            development, creating RESTful APIs and web services. Along the way,
            I made a big life change. While visiting Aotearoa New Zealand, I
            fell in love with the country and decided to stay. I rolled up my
            sleeves and worked on vineyards and farms, adapting to work I'd
            never done before, and it taught me that I could flourish and enjoy
            in any environment. This adaptability is something I've carried back
            into tech. When I realised I was missing front-end experience, I
            turned to Dev Academy's immersive seventeen-week bootcamp to expand
            my skill set. Not only did I sharpen my technical abilities in
            modern JavaScript frameworks like React, but I also improved my
            communication, feedback, and team-based problem-solving skills. Now,
            as a full-stack developer, I can bring value both behind the scenes
            and at the interface level. I know I can tackle new challenges,
            learn quickly, and thrive in unfamiliar territory—just as I did when
            I first arrived in New Zealand. I'm excited about the future, ready
            to blend my back-end expertise with my new front-end capabilities,
            and eager to contribute meaningfully to a team that values
            curiosity, growth, and adaptability.
          </p>
        </VertBox>
      </div>
    </VertBox>
  )
}
