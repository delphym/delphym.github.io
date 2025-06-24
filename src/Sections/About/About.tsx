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
          <img src="images/DM-profile.png" alt="Daniel Mladek" />
        </div>
        <VertBox>
          <h3>Kia ora,</h3>
          <p className="gp">
            I'm Daniel Mladek. My journey into tech has been a steady evolution, fuelled by curiosity and a passion for lifelong learning.
            I originally studied civil engineering, but working on construction sites didn't bring me much joy.
            Instead, I was drawn to computers, my hobby at the time, and taught myself enough to step into the world of IT.
            <br/>
            My early career began at Sun Microsystems, where I worked as a Quality Assurance Engineer on the NetBeans Java IDE project.
            That experience sparked my love for Java and the Unix ecosystem, setting me on a path to becoming a Java developer.
            Over time, I've taken on a variety of IT roles, from software testing to DevOps, before eventually settling into back-end development,
            creating RESTful APIs and web services.
            <br/>
            Along the way, I made a big life change. While visiting Aotearoa New Zealand, I fell in love with the country and decided to stay.
            I rolled up my sleeves and worked on vineyards and farms, adapting to work I had never done before.
            This taught me that I could flourish and enjoy myself in any environment, and that adaptability is something I have carried back into tech.
            <br/>
            When I realised I was missing front-end experience, I enrolled in <a href="https://devacademy.co.nz/"
              className='link'
              target="_blank"
              rel="noopener noreferrer">Dev Academy Aotearoa</a>'s immersive seventeen-week bootcamp style <a
              href="https://devacademy.co.nz/our-courses/immersive-bootcamp/"
              className='link'
              target="_blank"
              rel="noopener noreferrer"
            >Full Stack Developer course</a> to expand my skill set.
            Not only did I sharpen my technical abilities in modern JavaScript frameworks like React, but I also improved my communication,
            feedback, and team-based problem-solving skills.
            <br/>
            Now, as a full-stack developer, I bring value both behind the scenes and at the interface level.
            I know I can tackle new challenges, learn quickly, and thrive in unfamiliar territory, just as I did when I first arrived in New Zealand.
            I'm excited about the future, ready to blend my back-end expertise with my new front-end capabilities,
            and eager to contribute to a team that values curiosity, growth, and adaptability.
          </p>
        </VertBox>
      </div>
    </VertBox>
  )
}
