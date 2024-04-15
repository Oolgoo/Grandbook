import Button from "@components/Ui/Button";
import { ResizeImage } from "@helpers/ImageHelper";
import { getSession } from "next-auth/react";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import { SessionContext, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
const ProfilePage = (data) => {
  const router = useRouter();
  const dataa = data.data.profile;
  const handleClick2 = () => {
    signOut();
    router.push("/");
  };

  return (
    <>
      <section className="py-40 lg:py-60 2xl:py-60-2xl">
        <div className="tw-container">
          <div className="mb-100 lg:mb-100 2xl:mb-100-2xl flex items-center justify-between w-full">
            <div className="flex">
              <h4>Welcome,</h4>
              <div className="flex space-x-10 ml-10 lg:ml-10 2xl:ml-10-2xl">
                <h4 className="font-bold uppercase">{dataa?.username}</h4>
                <h4 className="">{dataa?.lastname}</h4>
              </div>
            </div>
            <Link href={"/"}>
              <Button label="Sign Out" onClick={handleClick2} />
            </Link>
          </div>
          <div className="relative space-y-40">
            <div className="relative flex space-x-20 lg:space-x-20 2xl:space-x-20-2xl border border-gray-border rounded-[6px] lg:rounded-[8px] 2xl:rounded-[0.556vw] p-20 lg:p-20 2xl:p-20-2xl">
              <div className=" overflow-hidden rounded-[6px] lg:rounded-[8px] 2xl:rounded-[0.556vw] w-[200px] h-[200px]">
                {ResizeImage({
                  key: "",
                  layout: "responsive",
                  width: "900px",
                  height: "900px",
                  src: "https://res.cloudinary.com/dlo8veppc/image/upload/v1684233228/61dee0354ede320018b72064_xh8hg7.webp",
                  alt: "ori",
                  priority: true,
                  className: " grayscale hover:grayscale-0",
                })}
              </div>
              <div className="">
                <div className="mb-40">
                  <div className="flex space-x-10">
                    <h4 className=" font-bold uppercase">{dataa?.username}</h4>
                    <h4 className="">{dataa?.lastname} </h4>
                  </div>
                  <span>Spotlight Actors</span>
                </div>
                <div className="space-y-10">
                  <div className="flex space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                    <span className="font-bold">Phone:</span>
                    <span>+976 {dataa?.phone}</span>
                  </div>
                  <div className="flex space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                    <span className="font-bold">Email:</span>
                    <span> {dataa?.email}</span>
                  </div>
                  <div className="flex space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                    <span className="font-bold">Fax:</span>
                    <span>+976  {dataa?.phone}</span>
                  </div>
                  <div className="flex space-x-10 lg:space-x-10 2xl:space-x-10-2xl">
                    <span className="font-bold">Location:</span>
                    <span>
                      Ulaanbaatar, Sukhbaatar street, 1-р хороо, Чингисийн өргөн
                      чөлөө, Монгол ТВ Тауэр, 12 давхар
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Tabs>
                <TabList className={"flex space-x-20 list-none mb-20 ml-0"}>
                  <Tab className={"custom-tab-item"}>Skils</Tab>
                  <Tab className={"custom-tab-item"}>Movie</Tab>
                  <Tab className={"custom-tab-item"}>Television</Tab>
                  <Tab className={"custom-tab-item"}>Stage</Tab>
                </TabList>
                <TabPanel>
                  <div className="w-full">
                    <p>
                      Considering people who can do either or both sessions.
                      This position is for the Music Director Teaching Artist.
                      Good piano, accompaniment, and teaching skills are
                      essential, along with the ability to work with young
                      students who may not have been exposed to prior arts
                      programs. The Music Director and the Lead Teaching
                      Artist/Director will collaborate together - with the
                      director focusing more on the
                      acting/improvisation/blocking/choreography/script, and the
                      music director focusing more on the music/vocal/lyrics.
                      Both works together with the students to teach theatre
                      skills, and guide them through workshopping and developing
                      a 30-minute piece on a theme (which will be provided). The
                      piece would include scenes (developed through improv,
                      exercises, and writing) interwoven with songs by a
                      specified Lyricist/Composer. The music director also does
                      basic vocal training, breath support, and other
                      vocal/physical exercises with the students in the process
                      of learning the songs.
                    </p>
                    <p>
                      Considering people who can do either or both sessions.
                      This position is for the Music Director Teaching Artist.
                      Good piano, accompaniment, and teaching skills are
                      essential, along with the ability to work with young
                      students who may not have been exposed to prior arts
                      programs. The Music Director and the Lead Teaching
                      Artist/Director will collaborate together - with the
                      director focusing more on the
                      acting/improvisation/blocking/choreography/script, and the
                      music director focusing more on the music/vocal/lyrics.
                      Both works together with the students to teach theatre
                      skills, and guide them through workshopping and developing
                      a 30-minute piece on a theme (which will be provided). The
                      piece would include scenes (developed through improv,
                      exercises, and writing) interwoven with songs by a
                      specified Lyricist/Composer. The music director also does
                      basic vocal training, breath support, and other
                      vocal/physical exercises with the students in the process
                      of learning the songs.
                    </p>
                    <p>
                      Considering people who can do either or both sessions.
                      This position is for the Music Director Teaching Artist.
                      Good piano, accompaniment, and teaching skills are
                      essential, along with the ability to work with young
                      students who may not have been exposed to prior arts
                      programs. The Music Director and the Lead Teaching
                      Artist/Director will collaborate together - with the
                      director focusing more on the
                      acting/improvisation/blocking/choreography/script, and the
                      music director focusing more on the music/vocal/lyrics.
                      Both works together with the students to teach theatre
                      skills, and guide them through workshopping and developing
                      a 30-minute piece on a theme (which will be provided). The
                      piece would include scenes (developed through improv,
                      exercises, and writing) interwoven with songs by a
                      specified Lyricist/Composer. The music director also does
                      basic vocal training, breath support, and other
                      vocal/physical exercises with the students in the process
                      of learning the songs.
                    </p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: "/auth/not-authenticated",
        permanent: true,
      },
    };
  }
};
