import heroImage from '@/images/hero.png'
import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 max-h-96"> */}
      <Image
        src={heroImage}
        alt="Educação inclusiva e inovadora - Instituto Conhecer Para Incluir"
        //   fill
        className="object-cover max-h-96 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        priority
        // rounded-lg
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      />
      {/* </div> */}
    </div>
  )
}
