import { X, CheckCircle2 } from "lucide-react";
// import { projectData } from "../data";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-orange-500/30 bg-[#1a1513] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-orange-500"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="border-b border-white/10 p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">
            {project.category}
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-300">
            {project.description}
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 p-8 md:grid-cols-2">

          {/* Left */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Project Overview
            </h3>

            <p className="leading-7 text-gray-300">
              {project.overview}
            </p>

            {/* Features */}
            <h3 className="mb-4 mt-8 text-xl font-bold text-white">
              Key Features
            </h3>

            <div className="space-y-3">
              {project.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-orange-400"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Architecture */}
            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="mb-3 font-bold text-white">
                Architecture
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                {project.architecture}
              </p>
            </div>

            {/* Links */}
            {/* <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 font-medium text-white transition hover:border-orange-400 hover:text-orange-400"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-3 font-medium text-black transition hover:bg-orange-400"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}