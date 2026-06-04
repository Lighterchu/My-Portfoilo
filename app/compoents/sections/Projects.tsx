import Card from "../card";

export default function Projects() {
  return (
    <section id="projects" className="bg-black-800 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Projects I Have Built
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            title="Rapid Flow Plumbing"
            description="A responsive plumbing website built with Next.js, Tailwind CSS and deployed on Vercel."
            link="https://plumbing-landing-page-silk.vercel.app/"
            image="/project_images/image1.png"
            techstack={["Next.js", "Tailwind CSS", "Vercel"]}
          />

          <Card
            title="MVMNT Entertainment"
            description="A production website built and maintained from the ground up with CMS integration, monitoring, and ongoing support."
            link="https://mvmntentertainment.com/"
            image="/project_images/mvmnt.png"
            techstack={[
              "Next.js",
              "Tailwind CSS",
              "Vercel",
              "Sanity",
              "Sentry",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
