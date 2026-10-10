import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[70svh] items-center justify-center bg-[#FAFAFA] px-5 py-32 text-center sm:px-8">
      <div className="max-w-xl">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1 className="heading-2 mt-5 text-black">This page has moved.</h1>
        <p className="sub mt-5 text-black/60">
          The page you are looking for is unavailable. Return to ADHIHAVEN or
          speak with our advisory team.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/contact" className="btn-dark">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
