/* eslint-disable react/no-unescaped-entities */

import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/main/Carousel";

import { openLeadCapture } from "../components/LeadCapture";

import { Card, CardTitle } from "../components/Card";
import { ContactMenu, ContactAction } from "../components/ContactMenu";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiVisualstudiocode,
  SiUbuntu,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJirasoftware,
  SiPowershell,
  SiGnubash,
  SiSass,
  SiDocker,
  SiBootstrap,
  SiSlack,
  SiDiscord,
  SiDjango,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiVim,
} from "react-icons/si";

function IndexPage() {
  const FULL_NAME = "Yasiru Dharmathilaka";
  const EMAIL = "yasiru.dharmathilaka@gmail.com";

  const GITHUB = "ItsYasiru";
  const LINKEDIN = "yasiru-dharmathilaka";
  const DISCORD_ID = "837258955415748639";
  const DISCORD_TAG = "Yas_!_ru#9999";
  const INSTAGRAM = "ayo.its.yas";

  return (
    <>
      <Head>
        <title>Yasiru Dharmathilaka - Portfolio</title>
      </Head>

      <Card id='about-me'>
        <section className='mobile-vp-bind' style={{ width: "30%" }}>
          <ContactMenu
            id='contact-menu'
            ctaText='✉️'
            ctaOnClick={openLeadCapture}
            profilePicture={`https://github.com/${GITHUB}.png`}
          >
            <ContactAction
              icon='fas fa-at'
              title='Email'
              href={`mailto:${EMAIL}`}
              data='yasiru.dharmathilaka'
            />

            <ContactAction
              icon='fab fa-github-alt'
              title='Github'
              href={"https://github.com/" + GITHUB}
              data={GITHUB}
            />

            <ContactAction
              icon='fab fa-linkedin'
              title='Linkedin'
              href={"https://www.linkedin.com/in/" + LINKEDIN}
              data={FULL_NAME}
              style={{
                background: "#0077B5",
              }}
            />

            <ContactAction
              icon='fab fa-discord'
              title='Discord'
              href={"https://discord.com/users/" + DISCORD_ID}
              data={DISCORD_TAG}
              style={{
                background: "linear-gradient(to right, #9aa2fd, #5865F2)",
              }}
            />

            <ContactAction
              icon='fab fa-instagram'
              title='Instagram'
              href={"https://www.instagram.com/" + INSTAGRAM}
              data={INSTAGRAM}
              style={{
                background: "linear-gradient(to right, #fa8c51, #d6249f)",
              }}
            />
          </ContactMenu>
        </section>

        <section style={{ width: "70%" }}>
          <CardTitle title='About Me' />
          <p>
            Hello my name's Yasiru, people call me Yas. I'm from Colombo, Sri
            Lanka. I'm 17 years old and I am currently a student at Trinity
            College Kandy. I enjoy programming and almost anything related to
            computers. How computers function really amazed me and here I am
            digging deeper into the field and building my career doing what I
            love.
            <br />
            <br />
            Taking apart things and breaking them, making something different,
            &amp; fiddling around with circuits, this was my thing. I got my
            hands on my dad's laptop and I ruined it trying to do things I
            didn't know. I got my own computer in grade 9 where I wrote my first
            ever "program", it was a windows batch file game that worked on the
            terminal. I was in boarding school so I didn't have much time to do
            things with my computer, the only time I get to use my computer was
            on weekends when I got home. <br />
            <br />
            When Covid started things changed, lockdown is what really got me
            going. I met a lot of people online, one of them was a developer
            that encouraged me to learn JavaScript. I wanted to build a discord
            bot and that was when I programmed something with an actual
            programming language. Since then I've been learning and building
            various things like chatbots, websites, automation programs, &amp;
            web scrappers.
          </p>
        </section>
      </Card>

      <Card id='skill-set'>
        <section>
          <CardTitle title='Skill Set' />
          <p>
            This is my skill set, what I'm good and bad at. Please note that
            this is work in progress, I still have a lot to learn and cover.
          </p>

          <div className='image-wrapper'>
            <Image
              width='350px'
              height='200px'
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=ItsYasiru&layout=compact&border_radius=5px&hide_border=true&bg_color=343434&hide=html&text_color=e8e8e8&title_color=e8e8e8'
              alt='Most used languages - Github statistics'
              unoptimized='true'
            />

            <Carousel
              groupBy={7}
              autoPlay={3}
              style={{
                margin: "16px auto",
                padding: "15px 0",
                border: "1px solid #e8e8e8",
                borderRadius: "5px",
                maxWidth: "350px",
              }}
              itemStyle={{
                fontSize: "30px",
                gap: "15px",
              }}
            >
              <SiPython />
              <SiDjango />
              <SiNodedotjs />
              <SiReact />
              <SiNextdotjs />
              <SiJavascript />
              <SiTypescript />
              <SiCss3 />
              <SiSass />
              <SiBootstrap />
              <SiHtml5 />
              <SiMongodb />
              <SiMysql />
              <SiPostgresql />
              <SiVisualstudiocode />
              <SiVim />
              <SiUbuntu />
              <SiDocker />
              <SiGit />
              <SiGithub />
              <SiBitbucket />
              <SiJirasoftware />
              <SiPowershell />
              <SiGnubash />
              <SiSlack />
              <SiDiscord />
            </Carousel>
          </div>
        </section>

        <section style={{ width: "75%" }}>
          <table>
            <thead>
              <tr>
                <th width='20%'>Skill</th>
                <th width='80%'>Extra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Python</td>
                <td>
                  This is the language I've used the most. I have been coding
                  discord bots, general computer applications &amp; things to
                  fiddle around with. I've mostly worked with discord.py,
                  Django, PyQt, pillow, &amp; matplotlib. I know how to debug
                  python code, data classes, python coding standards, how to
                  make use of OOP & much more.
                </td>
              </tr>
              <tr>
                <td>
                  JavaScript
                  <hr />
                  TypeScript
                </td>
                <td>
                  I've worked with JQuery, Node.js, React and Next.js in the
                  field of web development. I'm familliar with JSX and how to
                  manipulate the DOM structure with bare JS.
                </td>
              </tr>
              <tr>
                <td>
                  CSS <hr /> HTML
                </td>
                <td>
                  I can structure HTML components that's eye appealing to any
                  audience to fit any type of content. In terms of css
                  frameworks I have expeirence with bootstrap. I know how to use
                  css precompilers, mainly sass.
                </td>
              </tr>
              <tr>
                <td>Databases</td>
                <td>
                  So far I've worked with both relational and non-relational
                  databases that includes MongoDB, SQlite, MYSQL, &amp;
                  PostgreSQL.
                </td>
              </tr>
              <tr>
                <td>Additional</td>
                <td>
                  I work with Visual Studio Code as my main editor other than
                  that I have used many tools that includes VIM, Github,
                  Bitbucket, Jira, Docker, Slack &amp; many more in my workflow.
                  In terms of operating systems, I have expeirence with using
                  Windows and Ubuntu. I can work with remote machines using SSH,
                  FTP, &amp; RDP for Windows.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Card>

      <Card id='projects'>
        <section style={{ width: "35%" }}>
          <CardTitle title='Projects' />
          <p>
            Open source projects that I have contributed to/handled, feel free
            to contribute or copy my code.
          </p>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th width='25%'>Project</th>
                <th width='75%'>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href='https://github.com/ItsYasiru/discroid' target='_'>
                    Discroid
                  </a>
                </td>
                <td>
                  An asyncrounous API wrapper for discords' API and websocket
                  connections, that is still under development as part of
                  learning how asyncrounous code functions.
                </td>
              </tr>
              <tr>
                <td>Ranked Bot</td>
                <td>
                  Developer of "Ranked Bot". The bot is capable of retrieving
                  aggregated player statistics, match statistics, managing rank
                  roles &amp; game replays served by a backend API. Bot is
                  available for the public in the{" "}
                  <a
                    href='discord:https://discord.com/invite/Hjr92J7'
                    target='_'
                  >
                    ranked discord server
                  </a>
                  .
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href='https://github.com/ItsYasiru/Better-Threads'
                    target='_'
                  >
                    Better Threads
                  </a>
                </td>
                <td>
                  A wrapper over threads that provides extended control. The
                  module supports pausing, terminating and putting threads to
                  sleep. The module also provides some additional tools like
                  Piping data between threads and a thread pool to keep track of
                  threads.
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.xpanse.live' target='_'>
                    Xpanse 22
                  </a>
                </td>
                <td>
                  Website for project "Xpanse" organized by{" "}
                  <a
                    href='https://trinitycollege.lk/portfolio/media-unit/'
                    target='_'
                  >
                    Trinity College Media Unit.
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Card>

      <Card id='services'>
        <section>
          <CardTitle title='Services' />
          <p>
            I provide a few services as a freelance developer. Feel free to{" "}
            <a href='#contact-menu'>contact me</a> for any inqueries.
          </p>
        </section>

        <section>
          <table>
            <thead>
              <tr>
                <th width='20%'>Service</th>
                <th width='80%'>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Discord bots</td>
                <td>
                  Discord is a goood communication platform to any sort of
                  community. I can get anything working from a bot that can do
                  simple day to day tasks on discord, chat moderation or pretty
                  much any task as long as the platform supports.
                </td>
              </tr>
              <tr>
                <td>Websites</td>
                <td>
                  I can work on a small scale full-stack application to fullfill
                  your needs. I ensure you that the final product will look and
                  function just the way you want it to. I will revise and rework
                  it till you are 100% satisfied in accordance with the design.
                  <hr />
                  <h6>Static websites</h6>
                  <ul>
                    <li>
                      A good looking,{" "}
                      <a
                        href='https://en.wikipedia.org/wiki/Responsive_web_design'
                        target='_'
                      >
                        responsive
                      </a>{" "}
                      static website.
                    </li>
                    <li>
                      Recommended for portfolio &amp; informative like websites
                      with one or two pages with static data to showcase.
                    </li>
                  </ul>
                  <hr />
                  <h6>Dynamic websites</h6>
                  <ul>
                    <li>
                      A fully customizable,{" "}
                      <a
                        href='https://en.wikipedia.org/wiki/Dynamic_web_page'
                        target='_'
                      >
                        dynamic{" "}
                      </a>
                      website.
                    </li>
                    <li>
                      Recommended for websites showcasing data that changes over
                      time with many pages.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Scripting</td>
                <td>
                  Web Scraping, Data organzing and statistical representations
                  or generally anything that can be programmetically solved with
                  scripting. It can be to reorganize an Excel sheet or to hack
                  the FBI. I can look in to it and provide a simple solution
                  that will get the task done.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Card>
    </>
  );
}

export default IndexPage;
