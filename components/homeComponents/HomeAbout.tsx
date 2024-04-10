export default function HomeAbout() {
  return (
    <section className="md:p-12 p-6 text-complementary">
      <h1 className="md:text-4xl text-2xl font-bold my-4">About WiCHacks</h1> {/* !change */}
      <div className="md:text-base text-sm">
        {/* HackPortal is a platform for user-friendly hackathon event management. <br />
        <br />A few of its features include: A fully customizable front end, sign in with email/
        Google, hacker registration, images, challenges, sponsors, FAQ and more fetched from
        backend, push notifications, a spotlight carousel highlighting ongoing events, QR code check
        in and swag claims, report submission/ Ask a question, a built-in and easy to set up
        schedule, Hacker, Admin, and Super Admin roles, an Admin console to send announcements,
        update user roles, show number of check-ins, swag claims, and more!. <br />
        <br />
        To set up HackPortal for your hackathon, check out the{' '}
        <a
          href="https://github.com/acmutd/hackportal/blob/develop/docs/set-up.md"
          className="underline"
        >
          HackPortal Github
        </a>
        ! */}
        The Women in Computing Hackathon (WiCHacks) mission is to enhance opportunities for students
        who identify as women or gender minorities in the tech industry and all students who support
        them, regardless of gender or sex. WiCHacks values diversity and inclusion as essential to
        our mission and welcomes anyone in support of moving this mission forward, including those
        of other genders or sex, to sign up for the hackathon. Hosted by Women in Computing (WiC) at
        Rochester Institute of Technology (RIT), the hackathon is a 24-hour, collaborative
        programming event in which participants create an app, website, game, or other piece of
        software throughout the event!
      </div>
    </section>
  );
}
