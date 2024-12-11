import Image from 'next/image'

export default function Home() {
  return (
    <div className="container px-4">
      <div className="hero-content flex-col items-start lg:flex-row">
        <img
          src="https://image1.wokanhao.com/thumbnail_580f0e7387fb7_8348049058.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}
