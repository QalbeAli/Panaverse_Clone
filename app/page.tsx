import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="py-[90px] bg-[#159957]">
        <h1 className=" leading-[70px] text-center text-white text-6xl font-bold py-26 space-y-2 tracking-tight">
          Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide Program
          in Karachi, Lahore, Islamabad, and <br /> Peshawar
        </h1>
        <h2 className=" text-center py-8 text-white text-xl">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </h2>
      </div>

      <section className="flex flex-col items-center justify-center">
        <div>
          <div className="py-7 text-4xl">
            <h1 className="text-[#159957]">
              Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide
              Program in Karachi, Lahore, <br /> Islamabad, and Peshawar
            </h1>
          </div>
          <div className="my-[20px]">
            <Image src={logo} alt="logo" width="800" height="800" />
          </div>
          <div>
            <h1 className="text-[#159957] text-4xl py-7">
              Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide
              Program in Karachi, Lahore, <br /> Islamabad, and Peshawar
            </h1>
          </div>
          <div>
            <Link href="https://www.piaic.org/" target="_blank">
              <h1 className="text-2xl py-7 text-[#1e6bb8] hover:underline">
                Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
              </h1>
            </Link>
            <Link
              href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
              target="_blank"
            >
              <h1 className="text-xl py-3 text-[#1e6bb8] hover:underline">
                This document on Google Docs
              </h1>
            </Link>
          </div>
          <div className="py-3">
            <h1>
              The internet is without a doubt the most important technological
              development in human history.
              <hr /> Web3 and metaverse technologies expand the internet as we
              know it by introducing novel features <hr /> and advancements.
              Metaverse will make use of all aspects of modern technology,
              including 3D, VR,
              <hr /> AR, AI, blockchain, cloud computing, voice computing,
              ambient computing, and more.
            </h1>
          </div>
          <div className="py-7">
            <h1>
              Citi is the latest Wall Street business to give a positive
              prognosis for Web 3.0 and the Metaverse, <hr /> terms used to
              depict a future internet vision centred on decentralised
              technologies and virtual
              <hr /> worlds. Citi stated in a March 2022 research paper that the
              metaverse economy might have a total <hr /> addressable market of
              up to $13 trillion and five billion people by 2030.
            </h1>
          </div>
          <div>
            <div>
              <h1 className="text-[#159957] text-4xl py-7">
                The Program in a Nutshell: Earn While You Learn
              </h1>
            </div>
            <div className="py-2">
              <h1>
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in <hr /> the classroom and will
                begin doing so within six months of the program’s beginning. It
                resembles a <hr /> cross between a corporate venture and an
                educational project.
              </h1>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-[#159957] text-4xl py-7">
                Core Courses (Common in All Specializations)
              </h1>
            </div>
            <div className="py-2">
              <h1>
                Every participant of the program will start by completing the
                following two core courses
              </h1>
            </div>
            <div className="py-2 text-[#1e6bb8]">
              <Link
                href="https://github.com/panaverse/panaverse.github.io#quarter-i-core"
                target="_blank"
              >
                <h1>
                  Quarter I (Core) CS-101: Object-Oriented Programming using
                  TypeScript
                </h1>
              </Link>
            </div>
            <div className="py-2 text-[#1e6bb8]">
              <Link
                href="https://github.com/panaverse/panaverse.github.io#quarter-ii-core"
                target="_blank"
              >
                <h1>
                  Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
                  Serverless Cloud Cloud Apps and APIs <hr /> using Next.js 13
                  and Cloud Development Kit (CDK) for Terraform
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[#159957] text-4xl py-7">Specialized Tracks</h1>
          </div>
          <div className="py-2">
            <h1>
              After completing the first two quarters the participants will
              select one or more specializations <hr />
              consisting of two courses each:
            </h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-[#159957] text-[2.1em] py-7">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h1>
          </div>
          <div className="py-2">
            <h1>
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse <hr /> experiences for the next
              generation of the internet by specializing in building worlds that
              merge the <hr /> best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </h1>
          </div>
          <div className="py-2 text-[#1e6bb8]">
            <Link href="https://www.panaverse.co/" target="_blank">
              <h1>
                Quarter III W3-351: Developing Smart Contracts and Planet-Scale
                Web 3.0 Dapps
              </h1>
            </Link>
          </div>
          <div className="py-2 text-[#1e6bb8] hover:underline">
            <Link href="https://www.panaverse.co/" target="_blank">
              <h1>
                Quarter IV MV-361: Developing Planet-Scale Open Virtual and
                Augmented Metaverse Experiences
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-[#159957] text-3xl py-7">
              Artificial Intelligence (AI) and Deep Learning Specialization
            </h1>
          </div>
          <div className="py-2">
            <h1>
            The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using <hr /> OpenAI models and building custom Deep Learning Tensorflow models.
            </h1>
          </div>
          <div className="py-2 text-[#1e6bb8]">
            <Link href="https://www.panaverse.co/" target="_blank">
              <h1>
              Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
              </h1>
            </Link>
          </div>
          <div className="py-2 text-[#1e6bb8] hover:underline">
            <Link href="https://www.panaverse.co/" target="_blank">
              <h1>
              Quarter IV AI-361: Deep Learning and MLOps
              </h1>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
