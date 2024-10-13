import { CloudUploadIcon, ShirtIcon, SparklesIcon } from 'lucide-react'
import Step from './Step'

export default function Instructions() {
  const steps = [
    {
      key: 1,
      title: 'Upload your Image',
      icon: <CloudUploadIcon size={75} strokeWidth={1} />,
      description: 'Take a full-body photo or upload an existing one',
      image: '/images/upload-image.png',
      bgColor: '#893780',
    },
    {
      key: 2,
      title: 'Choose your style',
      icon: <ShirtIcon size={75} strokeWidth={1} />,
      description: 'Select an style from our list or define a new one',
      image: '/images/style-image.png',
      bgColor: '#A63271',
    },
    {
      key: 3,
      title: 'See the magic',
      icon: <SparklesIcon size={75} strokeWidth={1} />,
      description: 'Our AI will show you wearing the selected outfit',
      image: '/images/result-image.png',
      bgColor: '#CD2C5F',
    },
  ]

  return (
    <div className="bg-gray-200 p-2 lg:py-14 mt-24">
      <div className="container mx-auto mb-8 px-2 lg:px-16">
        <h2 className="text-4xl font-bold mb-16">How Does It Works?</h2>

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-16 mt-4">
          {steps.map(({ key, ...step }) => (
            <Step key={key} {...step} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="relative  bg-foreground  text-white py-4 px-8 rounded-full hover:bg-accent-foreground transition duration-300 text-xl">
            Style Your Photos!
          </button>
        </div>
      </div>
    </div>
  )
}