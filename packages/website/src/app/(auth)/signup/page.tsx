import { SignupForm } from '@/components/forms/SignupForm'

export default function Page() {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Signup now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
