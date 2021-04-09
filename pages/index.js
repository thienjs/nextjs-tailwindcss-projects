
import Container from '@/components/Container'
import Image from 'next/image'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import Card from '@/components/Card'

export default function Home() {
  return (
    <Container className="" >
      


      <div className="bg-th-background text-th-primary-dark">
        <div className="bg-th-background text-th-primary-dark">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-th-primary-dark sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-th-accent-medium">
            Some projects I'm proud of
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>

    </Container>
  );
}