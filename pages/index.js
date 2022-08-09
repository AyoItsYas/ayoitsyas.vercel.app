/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/main/NavBar";

import { Card, CardTitle } from "../components/Card";
import ContactMenu from "../components/ContactMenu";

function IndexPage() {
    return (
        <>
            <Head>
                <title>Yasiru Dharmathilaka - Portfolio</title>
                <link
                    rel='icon'
                    href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>'
                />
            </Head>

            <NavBar>
                <Link href='#about-me'>About Me</Link>
                <Link href='#skill-set'>Skill Set</Link>
                <Link href='#projects'>Projects</Link>
                <Link href='#services'>Services</Link>
                <Link href='#contact-menu'>Get In Touch</Link>
            </NavBar>

            <header>
                <h1>Yas_!_ru's Website</h1>
                <p>
                    Programming &amp; Tech enthusiast, Professional bug
                    developer.
                </p>
            </header>

            <Card>
                <section>
                    <ContactMenu id='contact-menu'>
                        <div className='image-wrapper'>
                            <Image
                                width='300px'
                                height='300px'
                                alt='Profile Picture'
                                src='https://github.com/ItsYasiru.png'
                            />
                        </div>

                        <a
                            title='Email'
                            href='mailto:yasiru.dharmathilaka@gmail.com'
                        >
                            <i className='fas fa-at' />
                            <label>Email</label>
                        </a>
                        <a
                            target='_'
                            title='Github'
                            href='https://github.com/ItsYasiru'
                        >
                            <i className='fab fa-github-alt' />
                            <label>ItsYasiru</label>
                        </a>
                        <a
                            target='_'
                            title='Linkedin'
                            href='https://www.linkedin.com/in/yasiru-dharmathilaka/'
                            style={{
                                background: "#0077B5",
                            }}
                        >
                            <i className='fab fa-linkedin' />
                            <label>Linkedin</label>
                        </a>
                        <a
                            target='_'
                            title='Open in Discord'
                            href='discord:https://discord.com/users/837258955415748639'
                            style={{
                                background:
                                    "linear-gradient(to right, #9aa2fd, #5865F2)",
                            }}
                        >
                            <i className='fab fa-discord' />
                            <label>Yasiru#9999</label>
                        </a>
                        <a
                            target='_'
                            title='Instagram'
                            href='https://www.instagram.com/ayo.its.yas/'
                            style={{
                                background:
                                    "linear-gradient(to right, #fa8c51, #d6249f)",
                            }}
                        >
                            <i className='fab fa-instagram' />
                            <label>ayo.its.yas</label>
                        </a>
                    </ContactMenu>
                </section>

                <section>
                    <CardTitle title='About Me' />
                    <p>
                        Hello my name's Yasiru, people call me Yas. I'm from
                        Colombo, Sri Lanka. I'm 17 years old and I am currently
                        a student at Trinity College Kandy. I enjoy programming
                        and almost anything related to computers. How computers
                        function really amazed me and here I am digging deeper
                        into the field and building my career doing what I love.
                        <br />
                        <br />
                        Taking apart things and breaking them, making something
                        different, &amp; fiddling around with circuits, this was
                        my thing. I got my hands on my dad's laptop and I ruined
                        it trying to do things I didn't know. I got my own
                        computer in grade 9 where I wrote my first ever
                        "program", it was a windows batch file game that worked
                        on the terminal. I was in boarding school so I didn't
                        have much time to do things with my computer, the only
                        time I get to use my computer was on weekends when I got
                        home. <br />
                        <br />
                        When Covid started things changed, lockdown is what
                        really got me going. I met a lot of people online, one
                        of them was a developer that encouraged me to learn
                        JavaScript. I wanted to build a discord bot and that was
                        when I programmed something with an actual programming
                        language. Since then I've been learning and building
                        various things like chatbots, websites, automation
                        programs, &amp; web scrappers.
                    </p>
                </section>
            </Card>

            <Card>
                <section style={{ width: "40%" }}>
                    <CardTitle title='Skill Set' />
                    <p>
                        This is my skill set, what I'm good and bad at. Please
                        note that this is work in progress, I still have a lot
                        to learn and cover.
                    </p>
                    <div className='image-wrapper'>
                        <Image
                            width='400px'
                            height='200px'
                            src='https://github-readme-stats.vercel.app/api/top-langs/?username=ItsYasiru&layout=compact&border_radius=5px&hide_border=true&bg_color=343434&hide=html&text_color=e8e8e8&title_color=e8e8e8'
                            alt='Most used languages - Github statistics'
                            unoptimized='true'
                        />
                    </div>
                </section>

                <section>
                    <table>
                        <tr>
                            <th width='20%'>Skill</th>
                            <th width='15%'>Level</th>
                            <th width='65%'>Extra</th>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>Expert</td>
                            <td>
                                This is the language I've used the most. I have
                                been coding discord bots, general computer
                                applications &amp; things to fiddle around with.
                                I've mostly worked with discord.py, Django,
                                PyQt, pillow, &amp; matplotlib.
                            </td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>Expert</td>
                            <td>
                                I've worked with JQuery, Node.js, React and
                                Next.js in the field of web development.
                            </td>
                        </tr>
                        <tr>
                            <td>CSS &amp; HTML</td>
                            <td>Expert</td>
                            <td>
                                I can structure HTML components that's eye
                                appealing to any audience to fit any type of
                                content.
                            </td>
                        </tr>
                        <tr>
                            <td>Databases</td>
                            <td>Intermediate</td>
                            <td>
                                So far I've worked with both relational and
                                non-relational databases that includes MongoDB,
                                SQlite, MYSQL, &amp; PostgreSQL.
                            </td>
                        </tr>
                        <tr>
                            <td>Additional</td>
                            <td>-</td>
                            <td>
                                I have worked with Visual Studio Code, VIM,
                                Github, Docker, Slack. In terms of operating
                                systems, I have expeirence with using Windows
                                and Ubuntu. I can work with remote machines
                                using SSH, FTP, &amp; RDP for Windows.
                            </td>
                        </tr>
                    </table>
                </section>
            </Card>

            <Card>
                <section style={{ width: "35%" }}>
                    <CardTitle title='Projects' />
                    <p>
                        Open source projects that I have contributed to/handled,
                        feel free to contribute or copy my code.
                    </p>
                </section>
                <section>
                    <table>
                        <tr>
                            <th width='25%'>Project</th>
                            <th width='75%'>Details</th>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href='https://github.com/ItsYasiru/discroid'
                                    target='_'
                                >
                                    Discroid
                                </a>
                            </td>
                            <td>
                                An asyncrounous API wrapper for discords' API
                                and websocket connections, that is still under
                                development as part of learning how asyncrounous
                                code functions.
                            </td>
                        </tr>
                        <tr>
                            <td>Ranked Bot</td>
                            <td>
                                Developer of "Ranked Bot". The bot is capable of
                                retrieving aggregated player statistics, match
                                statistics, managing rank roles &amp; game
                                replays served by a backend API. Bot is
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
                                A wrapper over threads that provides extended
                                control. The module supports pausing,
                                terminating and putting threads to sleep. The
                                module also provides some additional tools like
                                Piping data between threads and a thread pool to
                                keep track of threads.
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
                    </table>
                </section>
            </Card>

            <Card>
                <section>
                    <CardTitle title='Services' />
                    <p>
                        I provide a few services as a freelance developer. Feel
                        free to <a href='#contact-menu'>contact me</a> for any
                        inqueries.
                    </p>
                </section>
                <section>
                    <table>
                        <tr>
                            <th width='20%'>Service</th>
                            <th width='80%'>Details</th>
                        </tr>
                        <tr>
                            <td>Discord bots</td>
                            <td>
                                Discord is a goood communication platform to any
                                sort of community. I can get anything working
                                from a bot that can do simple day to day tasks
                                on discord, chat moderation or pretty much any
                                task as long as the platform supports.
                            </td>
                        </tr>
                        <tr>
                            <td>Websites</td>
                            <td>
                                I can work on a small scale full-stack
                                application to fullfill your needs. I ensure you
                                that the final product will look and function
                                just the way you want it to. I will revise and
                                rework it till you are 100% satisfied in
                                accordance with the design.
                                <hr />
                                <h6>Static website</h6>
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
                                        Recommended for portfolio &amp;
                                        informative like websites with one or
                                        two pages with static data to showcase.
                                    </li>
                                </ul>
                                <hr />
                                <h6>Dynamic website</h6>
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
                                        Recommended for websites showcasing data
                                        that changes over time with many pages.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </section>
            </Card>
        </>
    );
}

export default IndexPage;
