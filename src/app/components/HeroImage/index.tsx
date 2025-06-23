import heroImage from '@/images/hero.png'
import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Image
        src={heroImage}
        alt="Educação inclusiva e inovadora - Instituto Conhecer Para Incluir"
        className="object-cover max-h-96 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        priority
      />
    </div>
  )
}
